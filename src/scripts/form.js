function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

var len = 0;
function mask(event) {
  var matrix = "+7 (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/[_\d]/g, function (a) {
    return i < val.length ? val.charAt(i++) : a;
  });
  i = this.value.indexOf("_");
  if (val.length < len) i = this.value.lastIndexOf(val.substr(-1)) + 1;
  if (i != -1) {
    i < 5 && (i = 3);
    this.value = this.value.slice(0, i);
  }
  if (event.type == "blur") {
    if (this.value.length < 5) this.value = "";
  } else setCursorPosition(this.value.length, this);
  len = val.length;
}

var phoneInputs = document.querySelectorAll("input[name=user_phone]");

for (const input of phoneInputs) {
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
}

var errorLabel;

function CheckForm(form) {
  var formNameInput = form.querySelector("input[name=user_name]");
  var formPhoneInput = form.querySelector("input[name=user_phone]");
  errorLabel = form.querySelector("[data-error-label]");

  formNameInput.addEventListener("click", () => {
    if (formNameInput.classList.contains("input-error")) {
      formNameInput.classList.remove("input-error");
      errorLabel.style.display = "none";
    }
  });

  formPhoneInput.addEventListener("click", () => {
    if (formPhoneInput.classList.contains("input-error")) {
      formPhoneInput.classList.remove("input-error");
      errorLabel.style.display = "none";
    }
  });

  if (
    ValidName(formNameInput, errorLabel) &&
    ValidPhone(formPhoneInput, errorLabel)
  )
    return true;
  return false;
}

function ValidName(input, errorLabel) {
  var regex = /[a-zA-Zа-яА-Я]/;
  var valid = regex.test(input.value);
  if (!valid) {
    errorLabel.style.display = "block";
    errorLabel.innerText = "Вы неправильно ввели имя";
    input.classList.add("input-error");
  }
  return valid;
}

function ValidPhone(input, errorLabel) {
  var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  var valid = regex.test(input.value);
  if (!valid) {
    errorLabel.style.display = "block";
    errorLabel.innerText = "Номер телефона введен неверно";
    input.classList.add("input-error");
  }
  return valid;
}

var callbackForm = document.getElementById("form-callback");
var callbackAccept = document.getElementById("form-callback-accept");

var orderForm = document.getElementById("modal-order-form");
var orderAccept = document.getElementById("order-form-button");

AJAXform(callbackForm, callbackAccept);

function AJAXform(formID, buttonID, formMethod = "post") {
  var selectForm = formID;
  var selectButton = buttonID;
  var formAction = selectForm.getAttribute("action");
  var formInputs = selectForm.querySelectorAll("input");

  function XMLhttp() {
    var httpRequest = new XMLHttpRequest();
    var formData = new FormData();

    for (var i = 0; i < formInputs.length; i++) {
      formData.append(formInputs[i].name, formInputs[i].value);
    }

    httpRequest.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        MicroModal.close("modal-callback");
        MicroModal.show("modal-accept");

        for (const input of formInputs) {
          input.value = "";
          input.checked = false;
        }
      }
    };

    httpRequest.open(formMethod, formAction);
    httpRequest.send(formData);
  }

  selectButton.onclick = function () {
    if (CheckForm(selectForm)) {
      errorLabel.style.display = "none";
      XMLhttp();
    }
  };

  selectForm.onsubmit = function () {
    return false;
  };
}

function getXmlHttp() {
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

let userName, userPhone, userComment, totalPrice;
let orderFormElement = document.getElementById("modal-cart-full");

let itemTitle, cartItems;

let cartElements = {};

orderAccept.addEventListener("click", () => {
  userName = orderForm.querySelector("input[name=user_name]").value;
  userPhone = orderForm.querySelector("input[name=user_phone]").value;
  userComment = orderForm.querySelector("input[name=user_comment]").value;

  totalPrice = orderFormElement.querySelector("#totalPrice").innerHTML;

  cartItems = orderFormElement.querySelectorAll(".modal-cart-item");

  for (const item of cartItems) {
    let itemName = item.getAttribute("data-item");
    cartElements[itemName] = {
      title: item.querySelector(".modal-cart-item-text").innerHTML,
      count: item.querySelector(".product-count-text").innerHTML,
      price: item.querySelector(".modal-cart-item-price").innerHTML,
    };
  }

  if (CheckForm(orderForm)) {
    SendValues();
    MicroModal.close("modal-cart-full");
    MicroModal.show("modal-accept");
  }
});

function SendValues() {
  let xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
  xmlhttp.open("POST", "mail-order.php", true); // Открываем асинхронное соединение
  xmlhttp.setRequestHeader("Content-Type", "application/json"); // Отправляем кодировку

  let json = JSON.stringify({
    name: userName,
    phone: userPhone,
    comment: userComment,
    price: totalPrice,
    items: JSON.stringify(cartElements),
  });

  xmlhttp.send(json);
  xmlhttp.onreadystatechange = function () {
    // Ждём ответа от сервера
    if (xmlhttp.readyState == 4) {
      // Ответ пришёл
      if (xmlhttp.status == 200) {
        // Сервер вернул код 200 (что хорошо)
        console.log(xmlhttp.responseText);
      }
    }
  };
}
