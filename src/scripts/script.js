var callbackButton = document.getElementById("callback-button");

var headerCart = document.getElementById("cart-header");
var checkoutButton = document.getElementById("checkout-button");
var closeCart = document.getElementById("close-cart");

var headerButtonCatalog = document.querySelector("#hero .button-primary")
var headerButtonAbout = document.querySelector("#hero .button-clear")

headerButtonCatalog.addEventListener("click", () => {
  document.getElementById("production").scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})

headerButtonAbout.addEventListener("click", () => {
  document.getElementById("order-info").scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})

callbackButton.addEventListener("click", () => {
  MicroModal.show("modal-callback");
});

headerCart.addEventListener("mouseenter", () => {
  MicroModal.show("modal-cart");
});

headerCart.addEventListener("mouseleave", () => {
  MicroModal.close("modal-cart");
});

checkoutButton.addEventListener("click", () => {
  MicroModal.show("modal-cart-full");
});

closeCart.addEventListener("click", () => {
  MicroModal.close("modal-cart-full");
});
