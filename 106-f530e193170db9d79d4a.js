(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2135:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(0)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(79)),l=d(n(864)),c=d(n(5)),u=d(n(904));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}var s=c.default.bind(u.default),p=function(){return o.default.createElement(a.default,null,o.default.createElement(a.Section,{key:"static-section",title:"Static Section"},o.default.createElement(a.Item,{key:"123"},o.default.createElement(l.default,{title:"Item 0-0",className:s("placeholder")})),o.default.createElement(a.Item,{key:"124"},o.default.createElement(l.default,{title:"Item 0-1",className:s("placeholder")})),o.default.createElement(a.Item,{key:"125"},o.default.createElement(l.default,{title:"Item 0-2",className:s("placeholder")}))),o.default.createElement(a.Section,{key:"collapsible-section",isCollapsible:!0,title:"Collapsible Section"},o.default.createElement(a.Item,{key:"223"},o.default.createElement(l.default,{title:"Item 1-0",className:s("placeholder")})),o.default.createElement(a.Item,{key:"224"},o.default.createElement(l.default,{title:"Item 1-1",className:s("placeholder")})),o.default.createElement(a.Item,{key:"225"},o.default.createElement(l.default,{title:"Item 1-2",className:s("placeholder")}))),o.default.createElement(a.Section,{key:"collapsible-section",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Section"},o.default.createElement(a.Item,{key:"323"},o.default.createElement(l.default,{title:"Item 2-0",className:s("placeholder")})),o.default.createElement(a.Item,{key:"324"},o.default.createElement(l.default,{title:"Item 2-1",className:s("placeholder")})),o.default.createElement(a.Item,{key:"325"},o.default.createElement(l.default,{title:"Item 2-2",className:s("placeholder")}))))};t.default=p},2923:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(0),o=n.n(r),a=n(277),l=n(883),c=n(2135),u=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function p(e){var t=e.components,n=d(e,["components"]);return Object(a.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item, Section } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List>\n    <Section\n      key="static-section"\n      title="Static Section"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsible\n      title="Collapsible Section"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Section"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}p.isMDXComponent=!0;var m=n(849),f=n.n(m),_=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"List Section",description:n,example:o.a.createElement(u.a,null),exampleSrc:o.a.createElement(p,null),isExpanded:r})},b=n(852),y=n.n(b);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x=function(){return Object(a.mdx)(y.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsed",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the section is collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"isCollapsible",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the section can be collapsed."))}return t.isMDXComponent=!0,t({})}},{name:"level",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",h({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"1",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Optionally sets the heading level. One of ",Object(a.mdx)("inlineCode",{parentName:"p"},"1"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"6"),"."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback passthrough for the ref of the section li."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=v(t,["components"]);return Object(a.mdx)("wrapper",h({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Title text to be placed within the section header."))}return t.isMDXComponent=!0,t({})}}]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function E(e){var t=e.components,n=g(e,["components"]);return Object(a.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"list-section"},"List Section"),Object(a.mdx)("p",null,"The list section component creates a section header and layouts it out with the passed child list items. The section provides the ability to display and collapse a section within a logical group. The list section will render as a flat list."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import List, { Item, Section } from 'terra-list/lib/List';\n")),Object(a.mdx)("p",null,Object(a.mdx)("a",O({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-list"}),"View component source code")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(_,{mdxType:"ListSectionExample"}),Object(a.mdx)("h2",{id:"list-section-props"},"List Section Props"),Object(a.mdx)(x,{mdxType:"ListSectionPropsTable"}))}E.isMDXComponent=!0},849:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(3)),a=c(n(5)),l=c(n(853));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=a.default.bind(l.default),y={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,e);var t,n=(t=o,function(){var e,n=_(t);if(f()){var r=_(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=n.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(m(t)),t.handleCodeToggle=t.handleCodeToggle.bind(m(t)),t}return d(o,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:b("header")},r.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:b("description")},e):null}}]),d(o,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,n=e.exampleSrc,a=e.title,l=e.description,c=this.state,u=c.isExpanded,i=c.isBackgroundTransparent;return r.default.createElement("div",{className:b("template")},o.renderHeader(a),r.default.createElement("div",{className:b("content",{"dynamic-content":i})},o.renderDescription(l),t),n&&r.default.createElement("div",{className:b("footer")},r.default.createElement("div",{className:b("button-container")},r.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:b("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:b("chevron-right")}))),u&&r.default.createElement("div",{className:b("code")},n)))}}]),o}(r.default.Component);h.propTypes=y,h.defaultProps={isExpanded:!1};var v=h;t.default=v},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(3)),a=c(n(5)),l=c(n(851));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(l.default),i={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.name,n=e.url,o=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))))};d.propTypes=i;var s=d;t.default=s},851:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},852:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(3)),a=c(n(5)),l=c(n(854));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(l.default),i={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},d=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};d.propTypes=i;var s=d;t.default=s},853:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},854:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(3)),a=c(n(5)),l=c(n(872));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.default.bind(l.default),s={variant:o.default.oneOf(["light","dark"]),title:o.default.string},p=function(e){var t=e.variant,n=e.title,o=i(e,["variant","title"]),a=d(["placeholder",o.className]),l=d(["inner","is-".concat(t)]);return r.default.createElement("div",u({},o,{className:a}),r.default.createElement("div",{className:l},r.default.createElement("h2",null,n)))};p.propTypes=s,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},872:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},883:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(850),l=n.n(a),c=function(e){var t=e.url;return o.a.createElement(l.a,{name:"terra-list",version:"4.28.0",url:t})}},904:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=106-f530e193170db9d79d4a.js.map