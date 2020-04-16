!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,s="fslightbox-",i="".concat(s,"styles"),r="".concat(s,"cursor-grabbing"),c="".concat(s,"full-dimension"),a="".concat(s,"flex-centered"),l="".concat(s,"open"),u="".concat(s,"transform-transition"),d="".concat(s,"absoluted"),p="".concat(s,"slide-btn"),f="".concat(p,"-container"),h="".concat(s,"fade-in"),g="".concat(s,"fade-out"),m=h+"-strong",v=g+"-strong",b="".concat(s,"opacity-"),x="".concat(b,"1"),y="".concat(s,"source"),S="".concat(y,"-outer");function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"object"===("undefined"==typeof document?"undefined":w(document))&&((o=document.createElement("style")).className=i,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Helvetica,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:9999999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;margin:auto;opacity:0;z-index:2;backface-visibility:hidden;transform:translateZ(0);transition:opacity .3s;will-change:opacity}.fslightbox-source-outer{will-change:transform}")),document.head.appendChild(o));function L(e){var t,n=e.props,o=0,s={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:i(e)},this.handleReceivedSourceTypeForUrl=function(e,n){void 0!==s[n]&&(o--,s[n]=e,0===o&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,s),localStorage.setItem("fslightbox-types",JSON.stringify(t))))};var i=function(e){o++,s[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=i)}function F(e,t,n,o){var s=e.data,i=e.elements.sources,r=n/o,c=0;this.styleSize=function(){if((c=s.maxSourceWidth/r)<s.maxSourceHeight)return n<s.maxSourceWidth&&(c=o),a();c=o>s.maxSourceHeight?s.maxSourceHeight:o,a()};var a=function(){i[t].style.width=c*r+"px",i[t].style.height=c+"px"}}function C(e,t,n,o){var s=this,i=e.collections.sourcesStylers,r=e.elements,c=r.sources,a=r.sourcesInners,l=r.sourcesOuters,u=e.resolve;this.runNormalLoadActions=function(){c[t].classList.add(x),a[t].classList.add(m),l[t].removeChild(l[t].firstChild)},this.runInitialLoadActions=function(){s.runNormalLoadActions();var e=u(F,[t,n,o]);e.styleSize(),i[t]=e}}function I(e,t){var n,o=this,s=e.elements.sources,i=e.props,r=e.resolve;this.handleImageLoad=function(e){var t=e.target,n=t.width,s=t.height;o.handleImageLoad=c(n,s)},this.handleVideoLoad=function(e){var t=e.target,s=t.videoWidth,i=t.videoHeight;n=!0,o.handleVideoLoad=c(s,i)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeDimensions&&(e=i.maxYoutubeDimensions.width,t=i.maxYoutubeDimensions.height),o.handleYoutubeLoad=c(e,t)},this.handleCustomLoad=function(){setTimeout((function(){o.handleCustomLoad=c(s[t].offsetWidth,s[t].offsetHeight)}))};var c=function(e,n){var o=r(C,[t,e,n]);return o.runInitialLoadActions(),o.runNormalLoadActions}}function E(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,s=o.sources,i=o.sourcesInners,r=e.props.sources;s[t]=document.createElement("img"),s[t].className=y,s[t].src=r[t],s[t].onload=n[t].handleImageLoad,i[t].appendChild(s[t])}function T(e,t){var n=e.collections,o=n.sourcesLoadsHandlers,s=(n.sourcesStylers,e.elements),i=s.sources,r=s.sourcesInners,c=e.props,a=c.sources;i[t]=document.createElement("video"),i[t].className=y,i[t].src=a[t],i[t].onloadedmetadata=function(e){o[t].handleVideoLoad(e)},i[t].controls=!0,c.videosPosters[t]&&(i[t].poster=c.videosPosters[t]);var l=document.createElement("source");l.src=a[t],i[t].appendChild(l),setTimeout((function(){o[t].handleNotMetaDatedVideoLoad()}),3e3),r[t].appendChild(i[t])}function A(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,i=o.sources,r=o.sourcesInners,c=e.props.sources;i[t]=document.createElement("iframe"),i[t].className="".concat(y," ").concat(s,"youtube-iframe"),i[t].src="https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]),i[t].allowFullscreen=!0,r[t].appendChild(i[t]),n[t].handleYoutubeLoad()}function O(e,t){var n=e.collections.sourcesLoadsHandlers,o=e.elements,s=o.sources,i=o.sourcesInners,r=e.props,c=r.sources;s[t]=c[t],s[t].classList.add(y),r.customClasses[t]&&s[t].classList.add(r.customClasses[t]),i[t].appendChild(s[t]),n[t].handleCustomLoad()}function N(e,t){var n=e.elements,o=n.sources,i=n.sourcesInners,r=n.sourcesOuters;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(s,"invalid-file-wrapper ").concat(a),o[t].innerHTML="Invalid source",i[t].classList.add(m),i[t].appendChild(o[t]),r[t].removeChild(r[t].firstChild)}function z(e){var t=e.collections,n=t.sourcesLoadsHandlers,o=t.sourcesRenderFunctions,s=e.core.sourceDisplayFacade,i=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,r){var c;switch("invalid"!==t&&(n[r]=i(I,[r])),t){case"image":c=E;break;case"video":c=T;break;case"youtube":c=A;break;case"custom":c=O;break;default:c=N}o[r]=function(){return c(e,r)},s.displaySourcesWhichShouldBeDisplayed()}}function H(){var e,t,n,o,s,i={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};this.setUrlToCheck=function(t){e=t},this.getSourceType=function(t){if(i.isUrlYoutubeOne(e))return t("youtube");n=t,(o=new XMLHttpRequest).open("GET",e,!0),o.onreadystatechange=r,o.send()};var r=function(){if(4===o.readyState&&0===o.status&&!s)return c();if(2===o.readyState){if(200!==o.status&&206!==o.status)return s=!0,c();s=!0,l(i.getTypeFromResponseContentType(o.getResponseHeader("content-type"))),a()}},c=function(){t="invalid",a()},a=function(){o.abort(),n(t)},l=function(e){switch(e){case"image":t="image";break;case"video":t="video";break;default:t="invalid"}}}function k(e,t,n){var o=e.props,s=o.types,i=o.type,r=o.sources,c=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return s&&s[e]?t=s[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){var o=c(H);o.setUrlToCheck(r[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,r[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function D(e,t){var n=e.elements,o=n.sourcesOutersWrapper,s=n.sourcesOuters;s[t]=document.createElement("div"),s[t].className="".concat(S," ").concat(d," ").concat(c," ").concat(a),s[t].innerHTML='<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>',o.appendChild(s[t]),function(e,t){var n=e.elements,o=n.sourcesOuters,s=n.sourcesInners;s[t]=document.createElement("div"),o[t].appendChild(s[t])}(e,t)}function R(e,t,n,o){var i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"width",t),i.setAttributeNS(null,"height",t),i.setAttributeNS(null,"viewBox",n);var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttributeNS(null,"class","".concat(s,"svg-path")),r.setAttributeNS(null,"d",o),i.appendChild(r),e.appendChild(i),i}function W(e,t){var n=document.createElement("div");return n.className="".concat(s,"toolbar-button ").concat(a),n.title=t,e.appendChild(n),n}function P(e,t){var n=document.createElement("div");n.className="".concat(s,"toolbar"),t.appendChild(n),function(e,t){var n,o=e.core.fullscreenToggler,s=e.componentsServices,i=e.data,r="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",c="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",a=W(t);i.isFullscreenOpen=!!document.fullscreenElement,i.isFullscreenOpen?(n=R(a,"24px","0 0 950 1024",c),a.title="Exit fullscreen"):(n=R(a,"20px","0 0 18 18",r),a.title="Enter fullscreen"),s.enterFullscreen=function(){i.isFullscreenOpen=!0,a.title="Exit fullscreen",n.setAttributeNS(null,"width","24px"),n.setAttributeNS(null,"height","24px"),n.setAttributeNS(null,"viewBox","0 0 950 1024"),n.firstChild.setAttributeNS(null,"d",c)},s.exitFullscreen=function(){i.isFullscreenOpen=!1,a.title="Enter fullscreen",n.setAttributeNS(null,"width","20px"),n.setAttributeNS(null,"height","20px"),n.setAttributeNS(null,"viewBox","0 0 18 18"),n.firstChild.setAttributeNS(null,"d",r)},a.onclick=function(){i.isFullscreenOpen?(s.exitFullscreen(),o.exitFullscreen()):(s.enterFullscreen(),o.enterFullscreen())}}(e,n),function(e,t){var n=W(t,"Close");n.onclick=e.core.lightboxCloser.close,R(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function M(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(s,"nav"),n.appendChild(o),P(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,i=(e.stageIndexes,document.createElement("div"));i.className="".concat(s,"slide-number-container");var r=document.createElement("div");r.className=a;var c=document.createElement("span");n.setSlideNumber=function(e){return c.innerHTML=e};var l=document.createElement("span");l.className="".concat(s,"slash");var u=document.createElement("div");u.innerHTML=o.length,i.appendChild(r),r.appendChild(c),r.appendChild(l),r.appendChild(u),t.appendChild(i),setTimeout((function(){r.offsetWidth>55&&(i.style.justifyContent="flex-start")}))}(e,o)}function j(e,t){var n=this,o=e.elements.sourcesOuters,s=e.props,i=0;this.byValue=function(e){return i=e,n},this.negative=function(){r(-c())},this.zero=function(){r(0)},this.positive=function(){r(c())};var r=function(e){o[t].style.transform="translateX(".concat(e+i,"px)"),i=0},c=function(){return(1+s.slideDistance)*innerWidth}}function X(e,t,n,o){var s=e.elements.container,i=n.charAt(0).toUpperCase()+n.slice(1),r=document.createElement("div");r.className="".concat(f," ").concat(f,"-").concat(n),r.title="".concat(i," slide"),r.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(p," ").concat(a),R(n,"20px","0 0 20 20",t),e.appendChild(n)}(r,o),s.appendChild(r)}function B(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function V(e){var t=this,n=e.core,o=n.eventsDispatcher,s=n.fullscreenToggler,i=n.globalEventsController,r=n.scrollbarRecompensor,c=e.data,a=e.elements,u=e.slideSwipingProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),i.removeListeners(),c.isFullscreenOpen&&s.exitFullscreen(),setTimeout((function(){t.isLightboxFadingOut=!1,u.isSwiping=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),r.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),220)}}function U(e){var t,n,o,s=e.collections.sourcesOutersTransformers,i=e.componentsServices,r=e.core,c=r.classFacade,a=r.slideIndexChanger,l=r.sourceDisplayFacade,d=r.stageManager,p=e.elements.sourcesInners,f=e.stageIndexes,v=(t=function(){c.removeFromEachElementClassIfContains("sourcesInners",g)},n=250,o=[],function(){o.push(!0),setTimeout((function(){o.pop(),o.length||t()}),n)});a.changeTo=function(e){f.current=e,d.updateStageIndexes(),i.setSlideNumber(e+1),l.displaySourcesWhichShouldBeDisplayed()},a.jumpTo=function(e){var t=f.current;a.changeTo(e),c.removeFromEachElementClassIfContains("sourcesOuters",u),B(p[t],m),B(p[t],h),p[t].classList.add(g),B(p[e],m),B(p[e],g),p[e].classList.add(h),v(),s[e].zero(),setTimeout((function(){t!==f.current&&s[t].negative()}),220)}}function Y(e){return e.touches?e.touches[0].clientX:e.clientX}function q(e){var t=e.componentsServices,n=e.core,o=n.lightboxCloser,s=n.fullscreenToggler,i=n.slideChangeFacade;this.listener=function(e){switch(e.keyCode){case 27:o.close();break;case 37:i.changeToPrevious();break;case 39:i.changeToNext();break;case 122:e.preventDefault(),t.enterFullscreen(),s.enterFullscreen()}}}function _(e){var t=e.collections.sourcesOutersTransformers,n=e.elements,o=e.slideSwipingProps,s=e.stageIndexes;this.runActionsForEvent=function(e){var t,c,a;n.container.contains(n.slideSwipingHoverer)||n.container.appendChild(n.slideSwipingHoverer),t=n.container,c=r,(a=t.classList).contains(c)||a.add(c),o.swipedX=Y(e)-o.downClientX,i(s.current,"zero"),void 0!==s.previous&&o.swipedX>0?i(s.previous,"negative"):void 0!==s.next&&o.swipedX<0&&i(s.next,"positive")};var i=function(e,n){t[e].byValue(o.swipedX)[n]()}}function J(e){var t,n=e.props.sources,o=e.resolve,s=e.slideSwipingProps,i=o(_),r=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){s.swipedX=1}:this.listener=function(e){s.isSwiping&&r()&&i.runActionsForEvent(e)}}function G(e){var t=e.collections.sourcesOutersTransformers,n=e.core.slideIndexChanger,o=e.elements.sourcesOuters,s=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===s.previous?i("zero"):(i("positive"),n.changeTo(s.previous),i("zero"))},this.runNegativeSwipedXActions=function(){void 0===s.next?i("zero"):(i("negative"),n.changeTo(s.next),i("zero"))};var i=function(e){o[s.current].classList.add(u),t[s.current][e]()}}function Z(e,t){e.contains(t)&&e.removeChild(t)}function K(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,s=e.slideSwipingProps,i=o(G);this.runNoSwipeActions=function(){Z(n.container,n.slideSwipingHoverer),s.isSourceDownEventTarget||t.close(),s.isSwiping=!1},this.runActions=function(){s.swipedX>0?i.runPositiveSwipedXActions():i.runNegativeSwipedXActions(),Z(n.container,n.slideSwipingHoverer),n.container.classList.remove(r),s.isSwiping=!1}}function Q(e){var t=e.resolve,n=e.slideSwipingProps,o=t(K);this.listener=function(){n.isSwiping&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function $(e){var t,n,o;n=(t=e).core.classFacade,o=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<o[e].length;n++)B(o[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.core.fullscreenToggler;t.enterFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},t.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,s=e.resolve,i=s(q),r=s(J),c=s(Q);n.attachListeners=function(){document.addEventListener("mousemove",r.listener),document.addEventListener("touchmove",r.listener,{passive:!0}),document.addEventListener("mouseup",c.listener),document.addEventListener("touchend",c.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",i.listener)},n.removeListeners=function(){document.removeEventListener("mousemove",r.listener),document.removeEventListener("touchmove",r.listener),document.removeEventListener("mouseup",c.listener),document.removeEventListener("touchend",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",i.listener)}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(V);t.close=function(){n.isLightboxFadingOut||n.runActions()}}(e),te(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))};var o=function(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,s=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(s.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(s.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),U(e),function(e){var t=e.core,n=t.classFacade,o=t.slideSwipingDown,s=e.elements.sources,i=e.slideSwipingProps,r=e.stageIndexes;o.listener=function(e){i.isSwiping=!0,i.downClientX=Y(e),i.swipedX=0,"VIDEO"===e.target.tagName||e.touches||e.preventDefault();var t=s[r.current];t&&t.contains(e.target)?i.isSourceDownEventTarget=!0:i.isSourceDownEventTarget=!1,n.removeFromEachElementClassIfContains("sourcesOuters",u)}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props.loadOnlyCurrentSource,s=e.stageIndexes;function i(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o)i(s.current);else for(var e in s)i(s[e])}}(e),function(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.isSourceInStage=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var s=n-e;return-1===s||0===s||1===s}}(e),function(e){var t=e.collections,n=t.sourcesOutersTransformers,o=t.sourcesStylers,s=e.core.windowResizeActioner,i=e.componentsServices,r=e.data,c=e.elements.sourcesOuters,a=e.props,l=e.stageIndexes;s.runActions=function(){innerWidth<992?r.maxSourceWidth=innerWidth:r.maxSourceWidth=.9*innerWidth,r.maxSourceHeight=.9*innerHeight,r.isFullscreenOpen&&screen.height!==innerHeight&&i.exitFullscreen();for(var e=0;e<a.sources.length;e++)B(c[e],u),e!==l.current&&n[e].negative(),o[e]&&o[e].styleSize()}}(e)}function ee(e){var t=e.core.eventsDispatcher,n=e.data,o=e.elements,i=e.props.sources;n.isInitialized=!0,function(e){for(var t=e.collections.sourcesOutersTransformers,n=e.props.sources,o=e.resolve,s=0;s<n.length;s++)t[s]=o(j,[s])}(e),$(e),o.container=document.createElement("div"),o.container.className="".concat(s,"container ").concat(c," ").concat(m),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(s,"slide-swiping-hoverer ").concat(c," ").concat(d)}(e),M(e),function(e){var t=e.core.slideSwipingDown,n=e.elements,o=e.props.sources;n.sourcesOutersWrapper=document.createElement("div"),n.sourcesOutersWrapper.className="".concat(d," ").concat(c),n.container.appendChild(n.sourcesOutersWrapper),n.sourcesOutersWrapper.addEventListener("mousedown",t.listener),n.sourcesOutersWrapper.addEventListener("touchstart",t.listener,{passive:!0});for(var s=0;s<o.length;s++)D(e,s)}(e),i.length>1&&function(e){var t=e.core.slideChangeFacade;X(e,t.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),X(e,t.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")}(e),function(e){for(var t=e.props.sources,n=e.resolve,o=n(L),s=n(z),i=n(k,[o,s]),r=0;r<t.length;r++)if("string"==typeof t[r]){var c=i.getTypeSetByClientForIndex(r);if(c)s.runActionsForSourceTypeAndIndex(c,r);else{var a=o.getSourceTypeFromLocalStorageByUrl(t[r]);a?s.runActionsForSourceTypeAndIndex(a,r):i.retrieveTypeWithXhrForIndex(r)}}else s.runActionsForSourceTypeAndIndex("custom",r)}(e),t.dispatch("onInit")}function te(e){var t=e.collections.sourcesOutersTransformers,n=e.componentsServices,o=e.core,s=o.eventsDispatcher,i=o.lightboxOpener,r=o.globalEventsController,c=o.scrollbarRecompensor,a=o.sourceDisplayFacade,u=o.stageManager,d=o.windowResizeActioner,p=e.data,f=e.elements,h=e.stageIndexes;i.open=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;h.current=o,p.isInitialized?s.dispatch("onShow"):ee(e),u.updateStageIndexes(),a.displaySourcesWhichShouldBeDisplayed(),n.setSlideNumber(h.current+1),document.body.appendChild(f.container),document.documentElement.classList.add(l),c.addRecompense(),r.attachListeners(),s.dispatch("onOpen"),t[h.current].zero(),d.runActions()}}function ne(){var e=localStorage.getItem("fslightbox-scrollbar-width");if(e)return e;var t=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),n=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(t);var o=t.offsetWidth;t.appendChild(n);var s=n.offsetWidth;document.body.removeChild(t);var i=o-s;return localStorage.setItem("fslightbox-scrollbar-width",i.toString()),i}function oe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function se(e,t,n){return(se=oe()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var s=new(Function.bind.apply(e,o));return n&&ie(s,n.prototype),s}).apply(null,arguments)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ce(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].getAttribute("data-fslightbox"),o=e[t].getAttribute("href");fsLightboxInstances[n]||(fsLightboxInstances[n]=new FsLightbox,fsLightboxInstances[n].setup());var s=null;s="#"===o.charAt(0)?document.getElementById(o.substring(1)):o,fsLightboxInstances[n].props.sources.push(s),fsLightboxInstances[n].elements.a.push(e[t]);var i=fsLightboxInstances[n].props.sources.length-1;function r(o,s){e[t].hasAttribute(s)&&(fsLightboxInstances[n].props[o][i]=e[t].getAttribute(s))}e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[n].open(i)},r("types","data-type"),r("videosPosters","data-video-poster"),r("customClasses","data-custom-class")},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customClasses:[],types:[],videosPosters:[],maxYoutubeDimensions:null,slideDistance:.3},this.data={isInitialized:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:ne(),isFullscreenOpen:!1},this.slideSwipingProps={isSwiping:!1,downClientX:null,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,sourcesOutersWrapper:null,sources:[],sourcesOuters:[],sourcesInners:[]},this.componentsServices={setSlideNumber:function(){},enterFullscreen:null,exitFullscreen:null},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),se(t,re(n))},this.collections={sourcesOutersTransformers:[],sourcesLoadsHandlers:[],sourcesRenderFunctions:[],sourcesStylers:[]},this.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxOpener:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},this.setup=function(){te(e)},this.open=function(t){return e.core.lightboxOpener.open(t)},this.close=function(){return e.core.lightboxCloser.close()}},window.fsLightboxInstances={},window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[],fsLightboxInstances[e].setup()}ce()},ce()}])}));
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
