(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{2396:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e(0)),r=u(e(53)),c=u(e(890));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t,n){return!n||"object"!==i(n)&&"function"!=typeof n?s(t):n}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(d,t);var n,e,u,i,b=(n=d,function(){var t,e=y(n);if(p()){var o=y(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return l(this,t)});function d(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),(n=b.call(this,t)).state={actionButtonClickCount:0},n.actionFunc=n.actionFunc.bind(s(n)),n}return e=d,(u=[{key:"actionFunc",value:function(){this.setState((function(t){return{actionButtonClickCount:t.actionButtonClickCount+1}}))}},{key:"render",value:function(){return o.default.createElement(c.default,{id:"actionAlert",type:"warning",action:o.default.createElement(r.default,{text:"Action",onClick:this.actionFunc})},"This is a warning. It is configured with a custom Action button. Action button has been clicked"," ",o.default.createElement("span",{id:"actionButtonClickCount"},this.state.actionButtonClickCount)," ","times.")}}])&&a(e.prototype,u),i&&a(e,i),d}(o.default.Component);n.default=b}}]);
//# sourceMappingURL=663-b26081004baa1085b35b.js.map