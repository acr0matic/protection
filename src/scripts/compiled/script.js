"use strict";

var callbackButton = document.getElementById("callback-button");
var headerCart = document.getElementById("cart-header");
callbackButton.addEventListener("click", function () {
  MicroModal.show("modal-callback");
});
headerCart.addEventListener("mouseenter", function () {
  MicroModal.show("modal-cart");
});
headerCart.addEventListener("mouseleave", function () {
  MicroModal.close("modal-cart");
});