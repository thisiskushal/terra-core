(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{2601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(5)),l=u(n(284)),a=u(n(855));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=o.default.bind(a.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,o,a,u=(t=i,function(){var e,n=y(t);if(d()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=u.call(this)).state={isInvalid:!1},e.toggleInvalid=e.toggleInvalid.bind(p(e)),e}return n=i,(o=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:m("content-wrapper")},r.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),r.default.createElement(l.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"select-field",defaultValue:"small",error:"Error message.",help:"Help message.",isInvalid:this.state.isInvalid},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"})))}}])&&c(n.prototype,o),a&&c(n,a),i}(r.default.Component);t.default=b},855:function(e,t,n){e.exports={"content-wrapper":"Select-test-module__content-wrapper___1yL5h"}}}]);
//# sourceMappingURL=574-66ae19956d38fbf485a3.js.map