"use strict";

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = phoneInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var input = _step.value;
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var errorLabel;

function CheckForm(form) {
  var formNameInput = form.querySelector("input[name=user_name]");
  var formPhoneInput = form.querySelector("input[name=user_phone]");
  errorLabel = form.querySelector("[data-error-label]");
  formNameInput.addEventListener("click", function () {
    if (formNameInput.classList.contains("input-error")) {
      formNameInput.classList.remove("input-error");
      errorLabel.style.display = "none";
    }
  });
  formPhoneInput.addEventListener("click", function () {
    if (formPhoneInput.classList.contains("input-error")) {
      formPhoneInput.classList.remove("input-error");
      errorLabel.style.display = "none";
    }
  });
  if (ValidName(formNameInput, errorLabel) && ValidPhone(formPhoneInput, errorLabel)) return true;
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

function AJAXform(formID, buttonID) {
  var formMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "post";
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
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = formInputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var input = _step2.value;
            input.value = "";
            input.checked = false;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
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

var userName, userPhone, userComment, totalPrice;
var orderFormElement = document.getElementById("modal-cart-full");
var itemTitle, cartItems;
var cartElements = {};
orderAccept.addEventListener("click", function () {
  userName = orderForm.querySelector("input[name=user_name]").value;
  userPhone = orderForm.querySelector("input[name=user_phone]").value;
  userComment = orderForm.querySelector("input[name=user_comment]").value;
  totalPrice = orderFormElement.querySelector("#totalPrice").innerHTML;
  cartItems = orderFormElement.querySelectorAll(".modal-cart-item");
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = cartItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;
      var itemName = item.getAttribute("data-item");
      cartElements[itemName] = {
        title: item.querySelector(".modal-cart-item-text").innerHTML,
        count: item.querySelector(".product-count-text").innerHTML,
        price: item.querySelector(".modal-cart-item-price").innerHTML
      };
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (CheckForm(orderForm)) {
    SendValues();
    MicroModal.close("modal-cart-full");
    MicroModal.show("modal-accept");
  }
});

function SendValues() {
  var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP

  xmlhttp.open("POST", "mail-order.php", true); // Открываем асинхронное соединение

  xmlhttp.setRequestHeader("Content-Type", "application/json"); // Отправляем кодировку

  var json = JSON.stringify({
    name: userName,
    phone: userPhone,
    comment: userComment,
    price: totalPrice,
    items: JSON.stringify(cartElements)
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