"use strict";

var products = {
  mask: {
    title: "Маски 3-х слойные медицинские (50 шт.)",
    price: 1750,
    description: "Маска медицинская применяется не только в медицинских учреждениях, но также  применяется в качестве средства индивидуальной защиты населением страны в период эпидемии заболеваний Гриппа и других ОРВИ. Использование медицинской маски во время эпидемии инфекций, передаваемых воздушно-капельным путем, а также при контакте с больным снижает риск заражения человека.",
    photos: ["img/production/mask/1.jpg", "img/production/mask/2.jpg", "img/production/mask/3.jpg", "img/production/mask/4.jpg", "img/production/mask/5.jpg"]
  },
  zm: {
    title: "Противоаэрозольная фильтрующая полумаска 3М с клапаном выдоха",
    price: 700,
    description: "Защита от пыли и туманов. Легкий, эффективный, комфортный и гигиеничный респиратор. Обеспечивает плотное прилегание независимо от формы и размера лица пользователя. Уникальный клапан выдоха обеспечивает надежную, комфортную защиту в условиях повышенных температур и влажности.",
    photos: ["img/production/zm/1.jpg", "img/production/zm/2.jpg", "img/production/zm/3.jpg", "img/production/zm/4.jpg", "img/production/zm/5.jpg"]
  },
  gloves: {
    title: "Нитриловые перчатки, синие",
    price: 1200,
    description: "Практичные аксессуары для экипировки персонала лечебных учреждений — медицинские нитриловые перчатки, выполненные из синтетического каучука. Материал экологичен и безопасен, оберегает кожу рук от контакта с микробами, агрессивными веществами и биологическими жидкостями. Отсутствие в составе натуральных компонентов придает изделиям из нитрила гипоаллергенные свойства.",
    photos: ["img/production/gloves/1.jpg", "img/production/gloves/2.jpg", "img/production/gloves/3.jpg", "img/production/gloves/4.jpg", "img/production/gloves/5.jpg"]
  },
  dettol: {
    title: "Гель для рук Dettol Антибактериальный",
    price: 250,
    description: "Гель для рук «Деттол» обеспечивает чистоту и защиту рук на 99,9%. Идеален для использовавния всегда и везде, когда необходимо очищение рук. Удобен в ситуациях, когда нет возможности использовать воду: вне дома, на прогулке с детьми, в путешествиях, во время пикников.",
    photos: ["img/production/dettol/1.jpg", "img/production/dettol/2.jpg", "img/production/dettol/3.jpg", "img/production/dettol/4.jpg"]
  },
  thermometer: {
    title: "Бесконтактный термометр B-Well WF-1000",
    price: 6000,
    description: "Инфракрасный термометр B-Well WF-1000 — отличное решение для молодых родителей. Бесконтактный термометр позволяет измерять температуру малыша, не прерывая его сон, а также контролировать температуру нагрева детского питания, воды в ванночке, воздуха в помещении и предметов.",
    photos: ["img/production/b-well-wf-1000/1.jpg", "img/production/b-well-wf-1000/2.jpg", "img/production/b-well-wf-1000/3.jpg", "img/production/b-well-wf-1000/4.jpg", "img/production/b-well-wf-1000/5.jpg"]
  }
};
var headerButtonCatalog = document.querySelector("#hero .button-primary");
var headerButtonAbout = document.querySelector("#hero .button-clear");
headerButtonCatalog.addEventListener("click", function () {
  document.getElementById("production").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
headerButtonAbout.addEventListener("click", function () {
  document.getElementById("order-info").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var callbackButton = document.getElementById("callback-button");
var checkoutButton = document.getElementById("checkout-button");
var closeCart = document.getElementById("close-cart");
callbackButton.addEventListener("click", function () {
  MicroModal.show("modal-callback");
});
checkoutButton.addEventListener("click", function () {
  MicroModal.close("modal-cart");
  MicroModal.show("modal-cart-full");
});
closeCart.addEventListener("click", function () {
  MicroModal.close("modal-cart-full");
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var headerCart = document.getElementById("cart-header");
headerCart.addEventListener("click", function () {
  if (totalOrdered == 0) {
    MicroModal.show("modal-cart-empty");
  }

  if (totalOrdered >= 1) {
    MicroModal.show("modal-cart");
  }
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////

var productPage = document.getElementById("modal-product-card");
var productTitle = productPage.querySelector(".product-title-main");
var productPrice = productPage.querySelector(".product-price");
var productDescription = productPage.querySelector(".product-description");
var productImagesGallery = productPage.querySelectorAll("[data-fslightbox]");
var productImages = productPage.querySelectorAll(".gallery-image");
var productCards = document.querySelectorAll(".production-card");
var cartCount = document.querySelector(".cart-count");
var cartCost = document.querySelector(".cart-cost");
var totalOrdered = 0;
var totalCost = 0;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop2 = function _loop2() {
    var card = _step.value;
    var cardImage = card.querySelector(".production-preview");
    var cartButton = card.querySelector(".production-order-wrapper");
    var cardTitle = card.querySelector(".production-title");
    var cartText = card.querySelector(".production-order-text");
    var cartIcon = card.querySelector(".production-order-icon");
    var counter = card.querySelector(".production-count");
    var price = card.querySelector(".production-cost");
    var product = card.getAttribute("data-product");
    var itemCost = 0;
    var itemCount = 0;
    var cartStatus = void 0; // Заполнение карточек в соответствии с объектом данных

    for (var prod in products) {
      if (product == prod) {
        price.innerHTML = products[prod].price;
        cardTitle.innerHTML = products[prod].title;
        cardImage.setAttribute("src", products[prod].photos[0]);
      }
    } // Заполнение полных карточек товаров в соответствии с объектом данных


    cardImage.addEventListener("click", function () {
      MicroModal.show("modal-product-card");

      for (var _prod in products) {
        if (product == _prod) {
          productTitle.innerHTML = products[_prod].title;
          productPrice.innerHTML = products[_prod].price;
          productDescription.innerHTML = products[_prod].description;
          productImages[0].setAttribute("src", products[_prod].photos[0]);
          productImages[1].setAttribute("src", products[_prod].photos[1]);
          productImages[2].setAttribute("src", products[_prod].photos[2]);
          productImages[3].setAttribute("src", products[_prod].photos[3]);
          productImages[4].setAttribute("src", products[_prod].photos[4]);
          productImagesGallery[0].setAttribute("href", products[_prod].photos[0]);
          productImagesGallery[1].setAttribute("href", products[_prod].photos[1]);
          productImagesGallery[2].setAttribute("href", products[_prod].photos[2]);
          productImagesGallery[3].setAttribute("href", products[_prod].photos[3]);
          productImagesGallery[4].setAttribute("href", products[_prod].photos[4]);
          refreshFsLightbox();
        }
      }
    });
    cartButton.addEventListener("click", function () {
      cartStatus = cartButton.getAttribute("data-cart-status");

      if (cartStatus == "") {
        cartText.innerHTML = "В корзине";
        cartIcon.classList.add("production-order-icon-active");
        counter.style.display = "flex";
        itemCount++;
        totalOrdered++;
        updateCartCount(totalOrdered);
        itemCost += parseInt(price.innerHTML);
        totalCost += itemCost;
        updateCartCost(totalCost);
        cartButton.setAttribute("data-cart-status", "in-cart");

        for (var _prod2 in products) {
          if (product == _prod2) {
            addToModalCart(_prod2, products[_prod2].photos[0], products[_prod2].title, itemCount, itemCost);
            addToCart(_prod2, products[_prod2].photos[0], products[_prod2].title, itemCount, itemCost);
            updateModalCartItems();
          }
        }
      }

      if (cartStatus == "in-cart") {
        cartText.innerHTML = "В корзину";
        cartIcon.classList.remove("production-order-icon-active");
        counter.style.display = "none";
        count.innerHTML = 1;
        totalOrdered -= itemCount;
        itemCount = 0;
        updateCartCount(totalOrdered);
        totalCost -= itemCost;
        itemCost = 0;
        updateCartCost(totalCost);
        cartButton.setAttribute("data-cart-status", "");

        for (var _prod3 in products) {
          if (product == _prod3) {
            DeleteToModalCart(_prod3);
            DeleteToCart(_prod3);
          }
        }
      }
    });
    cartButton.addEventListener("mouseenter", function () {
      var cartStatus = cartButton.getAttribute("data-cart-status");

      if (cartStatus == "in-cart") {
        cartText.innerHTML = "Убрать";
      }
    });
    cartButton.addEventListener("mouseleave", function () {
      var cartStatus = cartButton.getAttribute("data-cart-status");

      if (cartStatus == "in-cart") {
        cartText.innerHTML = "В корзине";
      }
    });
    var minusButton = card.querySelector(".production-count-minus");
    var plusButton = card.querySelector(".production-count-plus");
    var count = card.querySelector(".production-count-text");
    minusButton.addEventListener("click", function () {
      if (itemCount == 1) return;
      itemCount--;
      totalOrdered--;
      count.innerHTML = itemCount;
      updateCartCount(totalOrdered);
      itemCost -= parseInt(price.innerHTML);
      totalCost -= parseInt(price.innerHTML);
      updateCartCost(totalCost);

      for (var _prod4 in products) {
        if (product == _prod4) {
          UpdateItemModalCount(_prod4, itemCount);
          UpdateItemModalPrice(_prod4, itemCost);
        }
      }
    });
    plusButton.addEventListener("click", function () {
      itemCount++;
      totalOrdered++;
      count.innerHTML = itemCount;
      updateCartCount(totalOrdered);
      itemCost += parseInt(price.innerHTML);
      totalCost += parseInt(price.innerHTML);
      updateCartCost(totalCost);

      for (var _prod5 in products) {
        if (product == _prod5) {
          UpdateItemModalCount(_prod5, itemCount);
          UpdateItemModalPrice(_prod5, itemCost);
          UpdateItemCartCount(_prod5, itemCount);
          UpdateItemCartPrice(_prod5, itemCost);
        }
      }
    });
  };

  for (var _iterator = productCards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop2();
  } /////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

var modalCart = document.getElementById("modal-cart");
var modalCartWrapper = modalCart.querySelector(".modal-cart-wrapper");
var modalCartItems = [];
var modalCartFull = document.getElementById("modal-cart-full");
var cartWrapper = modalCartFull.querySelector(".modal-cart-wrapper");
var cartTotalPrice = document.getElementById("totalPrice");
var cartDeliveryPrice = document.getElementById("deliveryPrice");
var modalCartCount = document.getElementById("cart-item-count");
var modalCartPrice = document.getElementById("cart-item-cost");

function updateModalCartItems() {
  modalCartItems = modalCartWrapper.querySelectorAll(".modal-cart-item");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var item = _step2.value;
      var product = item.getAttribute("data-item");
      var deleteButton = item.querySelector(".modal-cart-item-delete");
      deleteButton.addEventListener("click", function () {
        DeleteToModalCart(product);
        DeleteToCart(product);
      });
    };

    for (var _iterator2 = modalCartItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
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

function UpdateItemModalCount(item, count) {
  var element = modalCart.querySelector("[data-item=" + item + "]");
  var textElement = element.querySelector(".product-count-text");
  textElement.innerHTML = count;
}

function UpdateItemModalPrice(item, price) {
  var element = modalCart.querySelector("[data-item=" + item + "]");
  var priceElement = element.querySelector(".modal-cart-item-price");
  priceElement.innerHTML = price;
}

function UpdateItemCartCount(item, count) {
  var element = modalCartFull.querySelector("[data-item=" + item + "]");
  var textElement = element.querySelector(".product-count-text");
  textElement.innerHTML = count;
}

function UpdateItemCartPrice(item, price) {
  var element = modalCartFull.querySelector("[data-item=" + item + "]");
  var priceElement = element.querySelector(".modal-cart-item-price");
  priceElement.innerHTML = price;
}

function DeleteToModalCart(item) {
  var deletedItem = modalCartWrapper.querySelector("[data-item=" + item + "]");
  deletedItem.remove();
}

function DeleteToCart(item) {
  var deletedItem = cartWrapper.querySelector("[data-item=" + item + "]");
  deletedItem.remove();
}

function reduceOrdered(count) {
  totalOrdered -= count;
  updateCartCount(totalOrdered);
}

function reduceTotalPrice(price) {
  totalCost -= price;
  updateCartCost(totalCost);
}

function updateCartCount(count) {
  cartCount.innerHTML = count;
  modalCartCount.innerHTML = count;
}

function updateCartCost(cost) {
  cartCost.innerHTML = cost + "р";
  modalCartPrice.innerHTML = cost + "р";
  cartTotalPrice.innerHTML = cost + "р";
}

function addToModalCart(item, photo, title, count, price) {
  modalCartWrapper.innerHTML += '<div data-item="' + item + '" class="modal-cart-item"> <img class="modal-cart-item-preview" src="' + photo + '"alt=""> <h3 class="modal-cart-item-text">' + title + '</h3> <div class="modal-cart-item-contol"> <div class="product-count"><div class="product-count-wrapper product-count-minus"></div> <!-/.production-count-wrapper --> <span class="product-count-text">' + count + '</span> <div class="product-count-wrapper product-count-plus"></div> <!-/.production-count-wrapper --> </div> <!-/.product-count --> <span class="modal-cart-item-price">' + price + "</span> </div> <!-/.modal-cart-item-contol --> </div> <!-/.modal-cart-item -->";
}

function addToCart(item, photo, title, count, price) {
  cartWrapper.innerHTML += '<div data-item="' + item + '" class="modal-cart-item"> <img class="modal-cart-item-preview" src="' + photo + '" alt=""> <h3 class="modal-cart-item-text">' + title + '</h3> <div class="modal-cart-item-contol"> <div class="product-count">' + "Количество: " + '<span class="product-count-text">' + count + '</span>  </div> <!-- /.product-count --> <span class="modal-cart-item-price">' + price + "</span> </div> <!-- /.modal-cart-item-contol --> </div> <!-- /.modal-cart-item -->";
}