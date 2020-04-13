var callbackButton = document.getElementById("callback-button");

var headerCart = document.getElementById("cart-header");

callbackButton.addEventListener("click", () => {
  MicroModal.show("modal-callback");
});

headerCart.addEventListener("mouseenter", () => {
  MicroModal.show("modal-cart");
});

headerCart.addEventListener("mouseleave", () => {
  MicroModal.close("modal-cart");
});

