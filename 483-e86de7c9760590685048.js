(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1216:function(t,e,n){t.exports={"content-wrapper":"AlertTestCommon__content-wrapper___2JY5r"}},2399:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n(0)),o=c(n(53)),r=c(n(5)),a=c(n(890)),u=c(n(1216));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=r.default.bind(u.default),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,t);var e,n,r,u,c=(e=s,function(){var t,n=m(e);if(b()){var i=m(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return d(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=c.call(this,t)).state={actionButtonClickCount:0,isDismissed:!1},e.actionFunc=e.actionFunc.bind(p(e)),e.handleDismiss=e.handleDismiss.bind(p(e)),e}return n=s,(r=[{key:"actionFunc",value:function(){var t=this.state;t.actionButtonClickCount+=1,this.setState(t)}},{key:"handleDismiss",value:function(){var t=this.state;t.isDismissed=!0,this.setState(t)}},{key:"render",value:function(){var t="";return this.state.isDismissed||(t=i.default.createElement(a.default,{id:"dismissibleAlert",type:"success",onDismiss:this.handleDismiss},"This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.")),i.default.createElement("div",{className:h("content-wrapper")},i.default.createElement("h3",null,"Alerts with actions in a small container (500px wide) that will cause the action section of the alert to render below the message instead of beside it."),i.default.createElement("br",null),i.default.createElement(a.default,{id:"actionAlert",type:"warning",action:i.default.createElement(o.default,{text:"Action",variant:o.default.Opts.Variants.EMPHASIS,onClick:this.actionFunc})},"This is a warning. It is configured with a custom Action button."),i.default.createElement("br",null),i.default.createElement("p",null,"Action button has been clicked",this.state.actionButtonClickCount," ","times."),i.default.createElement("br",null),i.default.createElement("br",null),t,i.default.createElement("br",null),i.default.createElement("br",null),i.default.createElement(a.default,{id:"noActionsAlert",type:"info"},"This is an info alert"))}}])&&l(n.prototype,r),u&&l(n,u),s}(i.default.Component);e.default=y}}]);
//# sourceMappingURL=483-e86de7c9760590685048.js.map