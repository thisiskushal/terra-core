(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1230:function(e,t,o){e.exports={"content-font-size-large":"TextTestCommon-module__content-font-size-large___2Chuv","content-font-size-small":"TextTestCommon-module__content-font-size-small___3x532","text-wrapper":"TextTestCommon-module__text-wrapper___1NgQV"}},2813:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=_(o(0)),i=_(o(5)),l=_(o(868)),r=_(o(1230));function _(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(r.default),u=function(){return n.default.createElement("div",null,n.default.createElement("div",{className:s("content-font-size-large")},"Parent font size: 100px",n.default.createElement(l.default,{fontSize:16},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.")),n.default.createElement("div",{className:s("content-font-size-small")},"Parent font size: 8px",n.default.createElement(l.default,{id:"lineHeight",fontSize:16},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.")))};t.default=u},868:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextWeight=t.TextFontSize=t.default=void 0;var n=_(o(0)),i=_(o(3)),l=_(o(5)),r=_(o(879));function _(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function f(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=l.default.bind(r.default);t.TextFontSize={10:10,12:12,14:14,16:16,18:18,20:20,24:24,32:32,36:36,46:46,50:50,56:56,64:64,72:72,92:92,100:100};t.TextWeight={200:200,300:300,400:400,700:700};var c={children:i.default.node.isRequired,isItalic:i.default.bool,isVisuallyHidden:i.default.bool,isWordWrapped:i.default.bool,fontSize:i.default.oneOf([10,12,14,16,18,20,24,32,36,46,50,56,64,72,92,100]),weight:i.default.oneOf([200,300,400,700]),colorClass:i.default.string},m=function(e){var t=e.children,o=e.isVisuallyHidden,i=e.isItalic,l=e.fontSize,r=e.weight,_=e.isWordWrapped,c=e.colorClass,m=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},f(e,["children","isVisuallyHidden","isItalic","fontSize","weight","isWordWrapped","colorClass"])),p=d(["text",{"inherit-color":!c},{italic:i},{"word-wrap":_},{"visually-hidden":o},a({},"font-size-".concat(l),l),a({},"font-weight-".concat(r),r),c,m.className]);return n.default.createElement("span",s({},m,{className:p}),t)};m.propTypes=c,m.defaultProps={isItalic:!1,isVisuallyHidden:!1,isWordWrapped:!1};var p=m;t.default=p},879:function(e,t,o){e.exports={text:"Text-module__text___1XN3H","inherit-color":"Text-module__inherit-color___wLBZA",italic:"Text-module__italic___1LU77","word-wrap":"Text-module__word-wrap___26Ry3","font-size-100":"Text-module__font-size-100___ZJzFP","font-size-92":"Text-module__font-size-92___1qZR8","font-size-72":"Text-module__font-size-72___2ydxB","font-size-64":"Text-module__font-size-64___3oiCB","font-size-56":"Text-module__font-size-56___Tr9tG","font-size-50":"Text-module__font-size-50___2dFNP","font-size-46":"Text-module__font-size-46___2JriJ","font-size-36":"Text-module__font-size-36___1GU7I","font-size-32":"Text-module__font-size-32___2aM6d","font-size-24":"Text-module__font-size-24___2HgWq","font-size-20":"Text-module__font-size-20___WRnEH","font-size-18":"Text-module__font-size-18___2QuQW","font-size-16":"Text-module__font-size-16___3bUvR","font-size-14":"Text-module__font-size-14___1bAVG","font-size-12":"Text-module__font-size-12___2rFpl","font-size-10":"Text-module__font-size-10___2tVKI","font-weight-200":"Text-module__font-weight-200___3zjuy","font-weight-300":"Text-module__font-weight-300___3sjO1","font-weight-400":"Text-module__font-weight-400___3zaUV","font-weight-700":"Text-module__font-weight-700___24wsv","visually-hidden":"Text-module__visually-hidden___3MbXi","font-stack":"Text-module__font-stack___2T_7m"}}}]);
//# sourceMappingURL=277-cd9108f4ca5f3810ace4.js.map