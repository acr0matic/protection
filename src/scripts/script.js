let products = {
  mask: {
    title: "Маски 3-х слойные медицинские (50 шт.)",
    price: 1750,
    description:
      "Маска медицинская применяется не только в медицинских учреждениях, но также  применяется в качестве средства индивидуальной защиты населением страны в период эпидемии заболеваний Гриппа и других ОРВИ. Использование медицинской маски во время эпидемии инфекций, передаваемых воздушно-капельным путем, а также при контакте с больным снижает риск заражения человека.",
    photos: [
      "img/production/mask/1.jpg",
      "img/production/mask/2.jpg",
      "img/production/mask/3.jpg",
      "img/production/mask/4.jpg",
      "img/production/mask/5.jpg",
    ],
  },

  zm: {
    title: "Противоаэрозольная фильтрующая полумаска 3М с клапаном выдоха",
    price: 700,
    description:
      "Защита от пыли и туманов. Легкий, эффективный, комфортный и гигиеничный респиратор. Обеспечивает плотное прилегание независимо от формы и размера лица пользователя. Уникальный клапан выдоха обеспечивает надежную, комфортную защиту в условиях повышенных температур и влажности.",
    photos: [
      "img/production/zm/1.jpg",
      "img/production/zm/2.jpg",
      "img/production/zm/3.jpg",
      "img/production/zm/4.jpg",
      "img/production/zm/5.jpg",
    ],
  },

  gloves: {
    title: "Нитриловые перчатки, синие",
    price: 1200,
    description:
      "Практичные аксессуары для экипировки персонала лечебных учреждений — медицинские нитриловые перчатки, выполненные из синтетического каучука. Материал экологичен и безопасен, оберегает кожу рук от контакта с микробами, агрессивными веществами и биологическими жидкостями. Отсутствие в составе натуральных компонентов придает изделиям из нитрила гипоаллергенные свойства.",
    photos: [
      "img/production/gloves/1.jpg",
      "img/production/gloves/2.jpg",
      "img/production/gloves/3.jpg",
      "img/production/gloves/4.jpg",
      "img/production/gloves/5.jpg",
    ],
  },

  dettol: {
    title: "Гель для рук Dettol Антибактериальный",
    price: 250,
    description:
      "Гель для рук «Деттол» обеспечивает чистоту и защиту рук на 99,9%. Идеален для использовавния всегда и везде, когда необходимо очищение рук. Удобен в ситуациях, когда нет возможности использовать воду: вне дома, на прогулке с детьми, в путешествиях, во время пикников.",
    photos: [
      "img/production/dettol/1.jpg",
      "img/production/dettol/2.jpg",
      "img/production/dettol/3.jpg",
      "img/production/dettol/4.jpg",
    ],
  },

  thermometer: {
    title: "Бесконтактный термометр B-Well WF-1000",
    price: 6000,
    description:
      "Инфракрасный термометр B-Well WF-1000 — отличное решение для молодых родителей. Бесконтактный термометр позволяет измерять температуру малыша, не прерывая его сон, а также контролировать температуру нагрева детского питания, воды в ванночке, воздуха в помещении и предметов.",
    photos: [
      "img/production/b-well-wf-1000/1.jpg",
      "img/production/b-well-wf-1000/2.jpg",
      "img/production/b-well-wf-1000/3.jpg",
      "img/production/b-well-wf-1000/4.jpg",
      "img/production/b-well-wf-1000/5.jpg",
    ],
  },
};

var headerButtonCatalog = document.querySelector("#hero .button-primary");
var headerButtonAbout = document.querySelector("#hero .button-clear");

headerButtonCatalog.addEventListener("click", () => {
  document.getElementById("production").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

headerButtonAbout.addEventListener("click", () => {
  document.getElementById("order-info").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var callbackButton = document.getElementById("callback-button");
var checkoutButton = document.getElementById("checkout-button");
var closeCart = document.getElementById("close-cart");

callbackButton.addEventListener("click", () => {
  MicroModal.show("modal-callback");
});

checkoutButton.addEventListener("click", () => {
  MicroModal.close("modal-cart");
  MicroModal.show("modal-cart-full");
});

closeCart.addEventListener("click", () => {
  MicroModal.close("modal-cart-full");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var headerCart = document.getElementById("cart-header");

headerCart.addEventListener("click", () => {
  if (totalOrdered == 0) {
    MicroModal.show("modal-cart-empty");
  }

  if (totalOrdered >= 1) {
    MicroModal.show("modal-cart");
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

for (const card of productCards) {
  let cardImage = card.querySelector(".production-preview");
  let cartButton = card.querySelector(".production-order-wrapper");
  let cardTitle = card.querySelector(".production-title");
  let cartText = card.querySelector(".production-order-text");
  let cartIcon = card.querySelector(".production-order-icon");
  let counter = card.querySelector(".production-count");
  let price = card.querySelector(".production-cost");
  let product = card.getAttribute("data-product");

  let itemCost = 0;
  let itemCount = 0;

  let cartStatus;

  // Заполнение карточек в соответствии с объектом данных
  for (const prod in products) {
    if (product == prod) {
      price.innerHTML = products[prod].price;
      cardTitle.innerHTML = products[prod].title;
      cardImage.setAttribute("src", products[prod].photos[0]);
    }
  }

  // Заполнение полных карточек товаров в соответствии с объектом данных
  cardImage.addEventListener("click", () => {
    MicroModal.show("modal-product-card");
    for (const prod in products) {
      if (product == prod) {
        productTitle.innerHTML = products[prod].title;
        productPrice.innerHTML = products[prod].price;
        productDescription.innerHTML = products[prod].description;

        productImages[0].setAttribute("src", products[prod].photos[0]);
        productImages[1].setAttribute("src", products[prod].photos[1]);
        productImages[2].setAttribute("src", products[prod].photos[2]);
        productImages[3].setAttribute("src", products[prod].photos[3]);
        productImages[4].setAttribute("src", products[prod].photos[4]);

        productImagesGallery[0].setAttribute("href", products[prod].photos[0]);
        productImagesGallery[1].setAttribute("href", products[prod].photos[1]);
        productImagesGallery[2].setAttribute("href", products[prod].photos[2]);
        productImagesGallery[3].setAttribute("href", products[prod].photos[3]);
        productImagesGallery[4].setAttribute("href", products[prod].photos[4]);

        refreshFsLightbox();
      }
    }
  });

  cartButton.addEventListener("click", () => {
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

      for (const prod in products) {
        if (product == prod) {
          addToModalCart(
            prod,
            products[prod].photos[0],
            products[prod].title,
            itemCount,
            itemCost
          );

          addToCart(
            prod,
            products[prod].photos[0],
            products[prod].title,
            itemCount,
            itemCost
          );
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

      for (const prod in products) {
        if (product == prod) {
          DeleteToModalCart(prod);
          DeleteToCart(prod);
        }
      }
    }
  });

  cartButton.addEventListener("mouseenter", () => {
    let cartStatus = cartButton.getAttribute("data-cart-status");

    if (cartStatus == "in-cart") {
      cartText.innerHTML = "Убрать";
    }
  });

  cartButton.addEventListener("mouseleave", () => {
    let cartStatus = cartButton.getAttribute("data-cart-status");

    if (cartStatus == "in-cart") {
      cartText.innerHTML = "В корзине";
    }
  });

  let minusButton = card.querySelector(".production-count-minus");
  let plusButton = card.querySelector(".production-count-plus");

  let count = card.querySelector(".production-count-text");

  minusButton.addEventListener("click", () => {
    if (itemCount == 1) return;

    itemCount--;
    totalOrdered--;
    count.innerHTML = itemCount;
    updateCartCount(totalOrdered);

    itemCost -= parseInt(price.innerHTML);
    totalCost -= parseInt(price.innerHTML);
    updateCartCost(totalCost);

    for (const prod in products) {
      if (product == prod) {
        UpdateItemModalCount(prod, itemCount);
        UpdateItemModalPrice(prod, itemCost);
      }
    }
  });

  plusButton.addEventListener("click", () => {
    itemCount++;
    totalOrdered++;
    count.innerHTML = itemCount;
    updateCartCount(totalOrdered);

    itemCost += parseInt(price.innerHTML);
    totalCost += parseInt(price.innerHTML);
    updateCartCost(totalCost);

    for (const prod in products) {
      if (product == prod) {
        UpdateItemModalCount(prod, itemCount);
        UpdateItemModalPrice(prod, itemCost);
        UpdateItemCartCount(prod, itemCount);
        UpdateItemCartPrice(prod, itemCost);
      }
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let modalCart = document.getElementById("modal-cart");
let modalCartWrapper = modalCart.querySelector(".modal-cart-wrapper");
let modalCartItems = [];

let modalCartFull = document.getElementById("modal-cart-full");
let cartWrapper = modalCartFull.querySelector(".modal-cart-wrapper");

let cartTotalPrice = document.getElementById("totalPrice");
let cartDeliveryPrice = document.getElementById("deliveryPrice");

let modalCartCount = document.getElementById("cart-item-count");
let modalCartPrice = document.getElementById("cart-item-cost");

function updateModalCartItems() {
  modalCartItems = modalCartWrapper.querySelectorAll(".modal-cart-item");

  for (const item of modalCartItems) {
    let product = item.getAttribute("data-item");
    let deleteButton = item.querySelector(".modal-cart-item-delete");

    deleteButton.addEventListener("click", () => {
      DeleteToModalCart(product);
      DeleteToCart(product);
    });
  }
}

function UpdateItemModalCount(item, count) {
  let element = modalCart.querySelector("[data-item=" + item + "]");
  let textElement = element.querySelector(".product-count-text");

  textElement.innerHTML = count;
}

function UpdateItemModalPrice(item, price) {
  let element = modalCart.querySelector("[data-item=" + item + "]");
  let priceElement = element.querySelector(".modal-cart-item-price");

  priceElement.innerHTML = price;
}

function UpdateItemCartCount(item, count) {
  let element = modalCartFull.querySelector("[data-item=" + item + "]");
  let textElement = element.querySelector(".product-count-text");

  textElement.innerHTML = count;
}

function UpdateItemCartPrice(item, price) {
  let element = modalCartFull.querySelector("[data-item=" + item + "]");
  let priceElement = element.querySelector(".modal-cart-item-price");

  priceElement.innerHTML = price;
}

function DeleteToModalCart(item) {
  let deletedItem = modalCartWrapper.querySelector("[data-item=" + item + "]");
  deletedItem.remove();
}

function DeleteToCart(item) {
  let deletedItem = cartWrapper.querySelector("[data-item=" + item + "]");
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
  modalCartWrapper.innerHTML +=
    '<div data-item="' +
    item +
    '" class="modal-cart-item"> <img class="modal-cart-item-preview" src="' +
    photo +
    '"alt=""> <h3 class="modal-cart-item-text">' +
    title +
    '</h3> <div class="modal-cart-item-contol"> <div class="product-count"><div class="product-count-wrapper product-count-minus"></div> <!-/.production-count-wrapper --> <span class="product-count-text">' +
    count +
    '</span> <div class="product-count-wrapper product-count-plus"></div> <!-/.production-count-wrapper --> </div> <!-/.product-count --> <span class="modal-cart-item-price">' +
    price +
    "</span> </div> <!-/.modal-cart-item-contol --> </div> <!-/.modal-cart-item -->";
}

function addToCart(item, photo, title, count, price) {
  cartWrapper.innerHTML +=
    '<div data-item="' +
    item +
    '" class="modal-cart-item"> <img class="modal-cart-item-preview" src="' +
    photo +
    '" alt=""> <h3 class="modal-cart-item-text">' +
    title +
    '</h3> <div class="modal-cart-item-contol"> <div class="product-count">' +
    "Количество: " +
    '<span class="product-count-text">' +
    count +
    '</span>  </div> <!-- /.product-count --> <span class="modal-cart-item-price">' +
    price +
    "</span> </div> <!-- /.modal-cart-item-contol --> </div> <!-- /.modal-cart-item -->";
}
