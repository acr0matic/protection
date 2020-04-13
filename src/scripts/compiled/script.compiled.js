function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
}
function _extends() {
  return (_extends =
    Object.assign ||
    function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function(t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e());
})(this, function() {
  "use strict";
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    n = t && "IntersectionObserver" in window,
    r = t && "classList" in document.createElement("p"),
    o = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_poster: "poster",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1
    },
    a = function(t, e) {
      var n,
        r = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: r }
        });
      } catch (t) {
        (n = document.createEvent(
          "CustomEvent"
        )).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: r });
      }
      window.dispatchEvent(n);
    };
  var i = function(t, e) {
      return t.getAttribute("data-" + e);
    },
    s = function(t, e, n) {
      var r = "data-" + e;
      null !== n ? t.setAttribute(r, n) : t.removeAttribute(r);
    },
    c = function(t) {
      return "true" === i(t, "was-processed");
    },
    l = function(t, e) {
      return s(t, "ll-timeout", e);
    },
    u = function(t) {
      return i(t, "ll-timeout");
    },
    d = function(t, e, n, r) {
      t && (void 0 === r ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, r));
    },
    f = function(t, e) {
      (t._loadingCount += e),
        0 === t._elements.length &&
          0 === t._loadingCount &&
          d(t._settings.callback_finish, t);
    },
    _ = function(t) {
      for (var e, n = [], r = 0; (e = t.children[r]); r += 1)
        "SOURCE" === e.tagName && n.push(e);
      return n;
    },
    v = function(t, e, n) {
      n && t.setAttribute(e, n);
    },
    b = function(t, e) {
      v(t, "sizes", i(t, e.data_sizes)),
        v(t, "srcset", i(t, e.data_srcset)),
        v(t, "src", i(t, e.data_src));
    },
    m = {
      IMG: function(t, e) {
        var n = t.parentNode;
        n &&
          "PICTURE" === n.tagName &&
          _(n).forEach(function(t) {
            b(t, e);
          });
        b(t, e);
      },
      IFRAME: function(t, e) {
        v(t, "src", i(t, e.data_src));
      },
      VIDEO: function(t, e) {
        _(t).forEach(function(t) {
          v(t, "src", i(t, e.data_src));
        }),
          v(t, "poster", i(t, e.data_poster)),
          v(t, "src", i(t, e.data_src)),
          t.load();
      }
    },
    p = function(t, e) {
      var n,
        r,
        o = e._settings,
        a = t.tagName,
        s = m[a];
      if (s)
        return (
          s(t, o),
          f(e, 1),
          void (e._elements =
            ((n = e._elements),
            (r = t),
            n.filter(function(t) {
              return t !== r;
            })))
        );
      !(function(t, e) {
        var n = i(t, e.data_src),
          r = i(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
          r && (t.style.backgroundImage = r);
      })(t, o);
    },
    g = function(t, e) {
      r ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
    },
    y = function(t, e) {
      r
        ? t.classList.remove(e)
        : (t.className = t.className
            .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    h = function(t, e, n) {
      t.addEventListener(e, n);
    },
    E = function(t, e, n) {
      t.removeEventListener(e, n);
    },
    w = function(t, e, n) {
      E(t, "load", e), E(t, "loadeddata", e), E(t, "error", n);
    },
    A = function(t, e, n) {
      var r = n._settings,
        o = e ? r.class_loaded : r.class_error,
        a = e ? r.callback_loaded : r.callback_error,
        i = t.target;
      y(i, r.class_loading), g(i, o), d(a, i, n), f(n, -1);
    },
    I = function(t, e) {
      var n = function n(o) {
          A(o, !0, e), w(t, n, r);
        },
        r = function r(o) {
          A(o, !1, e), w(t, n, r);
        };
      !(function(t, e, n) {
        h(t, "load", e), h(t, "loadeddata", e), h(t, "error", n);
      })(t, n, r);
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    L = function(t, e) {
      var n = e._observer;
      S(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
    },
    O = function(t) {
      var e = u(t);
      e && (clearTimeout(e), l(t, null));
    },
    x = function(t, e) {
      var n = e._settings.load_delay,
        r = u(t);
      r ||
        ((r = setTimeout(function() {
          L(t, e), O(t);
        }, n)),
        l(t, r));
    },
    S = function(t, e, n) {
      var r = e._settings;
      (!n && c(t)) ||
        (k.indexOf(t.tagName) > -1 && (I(t, e), g(t, r.class_loading)),
        p(t, e),
        (function(t) {
          s(t, "was-processed", "true");
        })(t),
        d(r.callback_reveal, t, e),
        d(r.callback_set, t, e));
    },
    z = function(t) {
      return (
        !!n &&
        ((t._observer = new IntersectionObserver(
          function(e) {
            e.forEach(function(e) {
              return (function(t) {
                return t.isIntersecting || t.intersectionRatio > 0;
              })(e)
                ? (function(t, e, n) {
                    var r = n._settings;
                    d(r.callback_enter, t, e, n),
                      r.load_delay ? x(t, n) : L(t, n);
                  })(e.target, e, t)
                : (function(t, e, n) {
                    var r = n._settings;
                    d(r.callback_exit, t, e, n), r.load_delay && O(t);
                  })(e.target, e, t);
            });
          },
          {
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px"
          }
        )),
        !0)
      );
      var e;
    },
    C = ["IMG", "IFRAME"],
    N = function(t, e) {
      return (function(t) {
        return t.filter(function(t) {
          return !c(t);
        });
      })(
        ((n =
          t ||
          (function(t) {
            return t.container.querySelectorAll(t.elements_selector);
          })(e)),
        Array.prototype.slice.call(n))
      );
      var n;
    },
    M = function(t) {
      var e = t._settings;
      _toConsumableArray(
        e.container.querySelectorAll("." + e.class_error)
      ).forEach(function(t) {
        y(t, e.class_error),
          (function(t) {
            s(t, "was-processed", null);
          })(t);
      }),
        t.update();
    },
    R = function(e, n) {
      var r;
      (this._settings = (function(t) {
        return _extends({}, o, t);
      })(e)),
        (this._loadingCount = 0),
        z(this),
        this.update(n),
        (r = this),
        t &&
          window.addEventListener("online", function(t) {
            M(r);
          });
    };
  return (
    (R.prototype = {
      update: function(t) {
        var n,
          r = this,
          o = this._settings;
        ((this._elements = N(t, o)), !e && this._observer)
          ? ((function(t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            })(o) &&
              ((n = this)._elements.forEach(function(t) {
                -1 !== C.indexOf(t.tagName) &&
                  (t.setAttribute("loading", "lazy"), S(t, n));
              }),
              (this._elements = N(t, o))),
            this._elements.forEach(function(t) {
              r._observer.observe(t);
            }))
          : this.loadAll();
      },
      destroy: function() {
        var t = this;
        this._observer &&
          (this._elements.forEach(function(e) {
            t._observer.unobserve(e);
          }),
          (this._observer = null)),
          (this._elements = null),
          (this._settings = null);
      },
      load: function(t, e) {
        S(t, this, e);
      },
      loadAll: function() {
        var t = this;
        this._elements.forEach(function(e) {
          L(e, t);
        });
      }
    }),
    t &&
      (function(t, e) {
        if (e)
          if (e.length) for (var n, r = 0; (n = e[r]); r += 1) a(t, n);
          else a(t, e);
      })(R, window.lazyLoadOptions),
    R
  );
});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MicroModal=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,m=void 0===v?"is-open":v,g=e.disableScroll,b=void 0!==g&&g,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,C=e.debugMode,A=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:A,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:m,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return window.MicroModal=l,l}));
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

