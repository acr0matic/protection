var callbackButton = document.getElementById("callback-button");

var headerCart = document.getElementById("cart-header");
var checkoutButton = document.getElementById("checkout-button");
var closeCart = document.getElementById("close-cart");

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

callbackButton.addEventListener("click", () => {
  MicroModal.show("modal-callback");
});

headerCart.addEventListener("click", () => {
  MicroModal.show("modal-cart");
});

checkoutButton.addEventListener("click", () => {
  MicroModal.close("modal-cart");
  MicroModal.show("modal-cart-full");
});

closeCart.addEventListener("click", () => {
  MicroModal.close("modal-cart-full");
});

var productCards = document.querySelectorAll(".production-card");
var countControl = document.querySelectorAll("production-count");

var cartCount = document.querySelector(".cart-count");
var cartCost = document.querySelector(".cart-cost");

var itemsOrdered = 0;
var itemsCost = 0;

for (const card of productCards) {
  let cartButton = card.querySelector(".production-order-wrapper");
  let cartText = card.querySelector(".production-order-text");
  let cartIcon = card.querySelector(".production-order-icon");
  let counter = card.querySelector(".production-count");
  let price = card.querySelector(".production-cost");

  let itemCost = 0;
  let itemCount = 0;

  cartButton.addEventListener("click", () => {
    let cartStatus = cartButton.getAttribute("data-cart-status");

    if (cartStatus == "") {
      cartText.innerHTML = "В корзине";
      cartIcon.classList.add("production-order-icon-active");
      counter.style.display = "flex";

      itemCount = 1
      countNum = 1;

      itemsOrdered += itemCount;
      updateCartCount(itemsOrdered);

      itemCost += parseInt(price.innerHTML);
      itemsCost += itemCost;
      updateCartCost(itemsCost);

      cartButton.setAttribute("data-cart-status", "in-cart");
    }

    if (cartStatus == "in-cart") {
      cartText.innerHTML = "В корзину";
      cartIcon.classList.remove("production-order-icon-active");
      counter.style.display = "none";

      countNum = 1;

      count.innerHTML = countNum;

      itemsOrdered -= itemCount;
      updateCartCount(itemsOrdered);

      itemCount = 0;

      itemsCost -= itemCost;
      updateCartCost(itemsCost);

      itemCost = 0;

      cartButton.setAttribute("data-cart-status", "");
    }
  });

  cartButton.addEventListener("mouseenter", () => {
    let cartStatus = cartButton.getAttribute("data-cart-status");

    if (cartStatus == "in-cart") {
      cartText.innerHTML = "Убрать";
    }
  })

  cartButton.addEventListener("mouseleave", () => {
    let cartStatus = cartButton.getAttribute("data-cart-status");

    if (cartStatus == "in-cart") {
      cartText.innerHTML = "В корзине";
    }
  })

  let minusButton = card.querySelector(".production-count-minus");
  let plusButton = card.querySelector(".production-count-plus");

  let count = card.querySelector(".production-count-text");
  let countNum = 1;

  minusButton.addEventListener("click", () => {
    if (countNum == 1) return
    countNum--;

    count.innerHTML = countNum;

    itemsOrdered -= itemCount--;
    updateCartCount(itemsOrdered);

    itemCost -= parseInt(price.innerHTML);
    itemsCost -= parseInt(price.innerHTML);
    updateCartCost(itemsCost);
  });

  plusButton.addEventListener("click", () => {
    countNum++;

    count.innerHTML = countNum;

    itemCount++;
    itemsOrdered++;
    updateCartCount(itemsOrdered);

    itemCost += parseInt(price.innerHTML);
    itemsCost += parseInt(price.innerHTML);
    updateCartCost(itemsCost);
  });
}

function updateCartCount(count) {
  cartCount.innerHTML = count;
}

function updateCartCost(cost) {
  cartCost.innerHTML = cost + 'р';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

