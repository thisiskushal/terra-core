(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{2725:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(l(0)),t=u(l(943));function u(e){return e&&e.__esModule?e:{default:e}}var n=function(){return a.default.createElement("div",null,a.default.createElement(t.default,{id:"progressbarTiny",heightSize:"tiny",valueText:"15%",value:15}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarSmall",heightSize:"small",valueText:"30%",value:30}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarMedium",heightSize:"medium",valueText:"45%",value:45}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarLarge",heightSize:"large",valueText:"60%",value:60}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarHuge",heightSize:"huge",valueText:"75%",value:75}))};r.default=n},943:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ProgressBarHeightSize=r.default=void 0;var a=o(l(0)),t=o(l(3)),u=o(l(5)),n=o(l(980));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function i(e,r){if(null==e)return{};var l,a,t=function(e,r){if(null==e)return{};var l,a,t={},u=Object.keys(e);for(a=0;a<u.length;a++)l=u[a],r.indexOf(l)>=0||(t[l]=e[l]);return t}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)l=u[a],r.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var d=u.default.bind(n.default);r.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var f={heightSize:t.default.oneOf(["tiny","small","medium","large","huge"]),value:t.default.number.isRequired,max:t.default.number,valueText:t.default.string,colorClass:t.default.string},m={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},c=function(e){var r=e.heightSize,l=e.value,t=e.max,u=e.valueText,n=e.colorClass,o=i(e,["heightSize","value","max","valueText","colorClass"]),f=d(["progress-bar",r,n,o.className]),m=l/t*100;return a.default.createElement("progress",s({},o,{className:f,max:100,value:m,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":m,"aria-valuetext":u,tabIndex:"-1"}))};c.propTypes=f,c.defaultProps=m;var g=c;r.default=g},980:function(e,r,l){e.exports={"progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}}}]);
//# sourceMappingURL=455-ffa5569cccee9753b871.js.map