(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1718:function(e,t){},1822:function(e,t,a){e.exports={"props-table-pre":"PropsTable-module__props-table-pre___2lBGi","props-table":"PropsTable-module__props-table___26kT2","prop-table-name":"PropsTable-module__prop-table-name___3068O","prop-table-required":"PropsTable-module__prop-table-required___3kkwP","prop-table-default":"PropsTable-module__prop-table-default___1TLSD","prop-table-type":"PropsTable-module__prop-table-type___3m9Rb","prop-table-description":"PropsTable-module__prop-table-description___qMVGa","prop-table-row":"PropsTable-module__prop-table-row___E09zu","props-table-markdown":"PropsTable-module__props-table-markdown___yKqSo"}},878:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(a(0)),l=p(a(3)),n=p(a(5)),o=p(a(958)),u=p(a(959));a(960),a(961),a(962);var s=p(a(897));function p(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=n.default.bind(s.default),m=Object.keys(u.default.languages).filter((function(e){return!["extend","insertBefore","DFS"].includes(e)}));o.default.setOptions({headerIds:!1,highlight:function(e,t){return m.includes(t)?u.default.highlight(e,u.default.languages[t],t):null},langPrefix:"codeblock language-"});var b=new o.default.Renderer;b.heading=function(e,t){var a=e.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(t,">")+'<a name="'.concat(a,'" class="anchor" aria-hidden="true" href="#').concat(a,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(e)+"</h".concat(t,">")};var _={src:l.default.string,baseUrl:l.default.string,hasHeadingAnchors:l.default.bool},y=function(e){return r.default.createElement("div",{dir:"ltr",className:f(["markdown"]),dangerouslySetInnerHTML:{__html:(0,o.default)(e.src,d({},e.baseUrl&&{baseUrl:e.baseUrl},{},e.hasHeadingAnchors&&{renderer:b}))}})};y.propTypes=_,y.defaultProps={src:""};var v=y;t.default=v},897:function(e,t,a){e.exports={markdown:"Markdown__markdown___3KTyB"}},984:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(a(0)),l=p(a(3)),n=a(1660),o=p(a(878)),u=p(a(5)),s=p(a(1822));function p(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=u.default.bind(s.default),f={componentName:l.default.string,src:l.default.string.isRequired,propsResolution:l.default.oneOf(["default","findAllComponentDefinitions"])};function m(e){return JSON.stringify(e,null,1)}var b=function(e){var t,a,l=e.componentName,u=e.propsResolution,s=e.src,p=d(e,["componentName","propsResolution","src"]);"default"===u&&(t=(0,n.parse)(s),a=t.props),"findAllComponentDefinitions"===u&&(t=(0,n.parse)(s,n.resolver.findAllComponentDefinitions),a=t[0].props);var f=i("prop-table-row"),b=i(["props-table",p.className]);return r.default.createElement("div",{dir:"ltr",className:i("props-table-markdown")},r.default.createElement("h2",null,l," ","Props"),r.default.createElement("table",c({},p,{className:b}),r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",{className:i("prop-table-name")},"Prop Name"),r.default.createElement("th",{className:i("prop-table-type")},"Type"),r.default.createElement("th",{className:i("prop-table-required")},"Is Required"),r.default.createElement("th",{className:i("prop-table-default")},"Default Value"),r.default.createElement("th",{className:i("prop-table-description")},"Description"))),r.default.createElement("tbody",null,Object.keys(a).map((function(e){var t=a[e];if(t.description&&t.description.match(/@private/))return null;var l=function(e){var t=e.name;if("enum"===t)t="enum";else if("arrayOf"===t)t="shape"===e.value.name?r.default.createElement("span",null," ","array of objects structured like:",r.default.createElement("pre",{className:i("props-table-pre")}," ",m(e.value.value)," ")):"array of ".concat(e.value.name,"s");else if("union"===t){t=e.value.map((function(e){return"shape"===e.name?r.default.createElement("span",{key:e.value}," ","an object structured like:",r.default.createElement("pre",{className:i("props-table-pre")}," ",m(e.value)," ")):r.default.createElement("span",{key:e.name}," ",e.name)})).reduce((function(e,t){return[e,r.default.createElement("span",{key:"".concat(e.value,"-").concat(t.value)}," or "),t]}))}else"shape"===t&&(t=r.default.createElement("span",null," ","an object structured like:",r.default.createElement("pre",{className:i("props-table-pre")}," ",m(e.value)," ")));return t}(t.type),n="custom"===t.type.name&&t.type.raw.includes("isRequired");return r.default.createElement("tr",{className:f,key:e,style:{fontSize:"90%"}},r.default.createElement("td",{style:{fontWeight:"bold"}},e),r.default.createElement("td",null,t.type?l:""),n||t.required?r.default.createElement("td",{style:{color:"#d53700"}},"required"):r.default.createElement("td",{style:{color:"#444"}},"optional"),t.defaultValue?r.default.createElement("td",{style:{fontWeight:"bold"}},t.defaultValue.value):r.default.createElement("td",{style:{color:"#444"}},"none"),r.default.createElement("td",null,r.default.createElement(o.default,{src:t.description})))})))))};b.propTypes=f,b.defaultProps={propsResolution:"default"};var _=b;t.default=_}}]);
//# sourceMappingURL=7-71e500151c7c14be3cf2.js.map