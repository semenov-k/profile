(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{5318:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]",function(){return t(5225)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},c=t(6273),l=t(387),s=t(7190);var u={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),i=o.default.useMemo((function(){var n=a(c.resolveHref(r,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):i||t}}),[r,e.href,e.as]),d=i.href,p=i.as,h=e.children,m=e.replace,x=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var _=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,j=a(s.useIntersection({rootMargin:"200px"}),2),g=j[0],b=j[1],k=o.default.useCallback((function(e){g(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,g]);o.default.useEffect((function(){var e=b&&t&&c.isLocalURL(d),n="undefined"!==typeof y?y:r&&r.locale,a=u[d+"%"+p+(n?"%"+n:"")];e&&!a&&f(r,d,p,{locale:n})}),[p,d,b,y,t,r]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:l,scroll:o}))}(e,r,d,p,m,x,v,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var S="undefined"!==typeof y?y:r&&r.locale,w=r&&r.isLocaleDomain&&c.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);N.href=w||c.addBasePath(c.addLocale(p,S,r&&r.defaultLocale))}return o.default.cloneElement(n,N)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,s=i.useRef(),u=a(i.useState(!1),2),f=u[0],d=u[1],p=a(i.useState(n?n.current:null),2),h=p[0],m=p[1],x=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,o=r.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:t}))}),[r,h,t,f]);return i.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){n&&m(n.current)}),[n]),[x,f]};var i=t(7294),o=t(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},5225:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return re},default:function(){return ae}});var r=t(5893),a=t(7294),i=a.createContext(void 0),o=function(e){var n=e.children,t=e.localizedContent;return(0,r.jsx)(i.Provider,{value:t,children:n})},c=t(3853),l=t.n(c),s=function(e){var n=e.children;return(0,r.jsx)("div",{className:l().layout,children:n})},u=t(1923),f=t.n(u),d=t(6380),p=t.n(d),h=function(e){var n=e.header,t=e.techStack;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:p().header,children:n}),(0,r.jsx)("div",{children:t.map((function(e){return(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:p().techItem,children:e})," "]},e)}))})]})},m=function(){return a.useContext(i)},x=function(e){var n=e.imageSrc,t=m(),a=t.uiContent,i=t.pageContent;return(0,r.jsxs)("aside",{className:f().sidebar,children:[(0,r.jsx)("div",{className:f().imageContainer,children:(0,r.jsx)("img",{className:f().image,alt:"my photo",src:n,height:150,width:100})}),(0,r.jsx)("div",{className:f().stack,children:(0,r.jsx)(h,{header:a.developmentApproaches,techStack:i.stack.developmentApproaches},"dev_approaches")}),(0,r.jsx)("div",{className:f().stack,children:(0,r.jsx)(h,{header:a.frontend,techStack:i.stack.frontend},"frontend")}),(0,r.jsx)("div",{className:f().stack,children:(0,r.jsx)(h,{header:a.backend,techStack:i.stack.backend},"backend")}),(0,r.jsx)("div",{className:f().stack,children:(0,r.jsx)(h,{header:a.devOps,techStack:i.stack.devOps},"dev_ops")})]})},v="/profile/_next/static/media/me.21d574f0.jpg",y=t(8532),_=t.n(y);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){var n=e.imageSrc,t=e.link,i=e.linkText,o=e.hiddenOnStart,c=void 0!==o&&o,l=g(a.useState(c),2),s=l[0],u=l[1],f=m().uiContent,d=i||t;return(0,r.jsxs)("div",{className:_().container,children:[(0,r.jsx)("span",{className:_().iconWrapper,children:(0,r.jsx)("img",{className:_().icon,src:n,alt:"profile icon",width:24,height:24})}),s?(0,r.jsx)("button",{className:_().showButton,onClick:function(e){e.preventDefault(),u(!s)},children:f.clickToSee}):(0,r.jsx)("a",{href:t,children:d})]})},k=t(2820),N=t.n(k),S="/profile/_next/static/media/github_icon.bd15b39c.png",w="/profile/_next/static/media/email_icon.8cae916d.png",C=function(){var e=m().pageContent;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:N().fullName,children:e.fullName}),(0,r.jsx)("h2",{className:N().role,children:e.role}),(0,r.jsx)("h3",{className:N().experience,children:e.experienceDescription}),(0,r.jsx)(b,{imageSrc:S,link:e.github}),(0,r.jsx)(b,{imageSrc:w,link:"mailto:".concat(e.email),linkText:e.email,hiddenOnStart:!0})]})},O=t(5801),E=t.n(O),I=function(e){var n=e.children;return(0,r.jsx)("article",{className:E().content,children:n})},L=t(4660),T=t.n(L),A=t(6783),P=t.n(A),M=t(1538),U=t.n(M),R=function(){var e=m(),n=e.uiContent,t=e.pageContent;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:P().blockHeader,children:n.about}),t.aboutMe.map((function(e,n){return(0,r.jsx)("p",{className:U().descriptionBlock,children:e},n)}))]})},H=function(){var e=m(),n=e.uiContent,t=e.pageContent;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:P().blockHeader,children:n.languages}),t.languages.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:e.name})," - ",e.levelDescription]},e.name)}))]})},B=t(5949),D=t.n(B),z=t(7138),W=t.n(z),q=function(e){var n=e.companyName,t=e.year,a=e.description,i=e.details;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:W().companyName,children:n}),(0,r.jsx)("div",{className:W().year,children:t}),(0,r.jsx)("div",{className:W().description,children:a}),(0,r.jsx)("ul",{className:W().details,children:i.map((function(e,n){return(0,r.jsx)("li",{children:e},n)}))})]})};function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}var Q=function(e){var n=e.lastUpdated,t=m(),a=t.uiContent,i=t.pageContent;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:D().header,children:[(0,r.jsx)("h5",{className:P().blockHeader,children:a.workExperience}),(0,r.jsx)("span",{className:D().lastUpdated,children:"".concat(a.lastUpdated,": ").concat(n.toLocaleDateString())})]}),(0,r.jsx)("div",{className:D().timelineContent,children:i.experienceTimeline.map((function(e){return(0,r.jsx)("div",{className:D().timelineItem,children:(0,r.jsx)(q,K({},e),e.companyName)},e.companyName)}))})]})},X=t(1664),$=t(5865),G=t.n($),J=t(1163);function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}var Z={EN:"en",RU:"ru"},ee=function(e){var n=e.currentLocale,t=(0,J.useRouter)();return(0,r.jsx)("div",{className:G().selector,children:Object.keys(Z).map((function(e){var a=Z[e];return a===n?(0,r.jsx)("span",{className:G().activeLocale,children:e},a):(0,r.jsx)("span",{children:(0,r.jsx)(X.default,{href:{pathname:t.pathname,query:Y({},t.query,{locale:a})},children:e})},a)}))})},ne=t(9008),te="/profile/_next/static/media/favicon.d18973bc.ico",re=!0,ae=function(e){var n=e.localizedContent,t=e.locale,i=e.lastUpdatedSerialized,c=a.useMemo((function(){return new Date(i)}),[i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ne.default,{children:[(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&family=Montserrat:wght@400;500&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("title",{children:n.pageContent.pageTitle}),(0,r.jsx)("link",{rel:"shortcut icon",href:te,type:"image/x-icon"})]}),(0,r.jsx)(o,{localizedContent:n,children:(0,r.jsxs)(s,{children:[(0,r.jsx)(x,{imageSrc:v}),(0,r.jsxs)(I,{children:[(0,r.jsx)(ee,{currentLocale:t}),(0,r.jsx)("header",{className:T().pageBlock,children:(0,r.jsx)(C,{})}),(0,r.jsx)("hr",{}),(0,r.jsx)("section",{className:T().pageBlock,children:(0,r.jsx)(R,{})}),(0,r.jsx)("hr",{}),(0,r.jsx)("section",{className:T().pageBlock,children:(0,r.jsx)(H,{})}),(0,r.jsx)("hr",{}),(0,r.jsx)("section",{children:(0,r.jsx)(Q,{lastUpdated:c})})]})]})})]})}},1538:function(e){e.exports={descriptionBlock:"AboutMe_descriptionBlock__L_yjI"}},6783:function(e){e.exports={blockHeader:"Common_blockHeader__TqL8r"}},5801:function(e){e.exports={content:"Content_content__JpleF"}},5949:function(e){e.exports={timelineItem:"ExperienceTimeline_timelineItem__g03dO",timelineContent:"ExperienceTimeline_timelineContent__3E4Rf",header:"ExperienceTimeline_header__4M_RS",lastUpdated:"ExperienceTimeline_lastUpdated__xtmFt"}},7138:function(e){e.exports={companyName:"ExperienceTimelineItem_companyName__yntim",year:"ExperienceTimelineItem_year__WQiIx",description:"ExperienceTimelineItem_description__N_vtH",details:"ExperienceTimelineItem_details__vogzH"}},4660:function(e){e.exports={pageBlock:"IndexPage_pageBlock__RFQNS"}},3853:function(e){e.exports={layout:"Layout_layout__k3ZVO"}},5865:function(e){e.exports={selector:"LocaleSelector_selector__SXVtQ",activeLocale:"LocaleSelector_activeLocale__OH6vz"}},2820:function(e){e.exports={fullName:"Profile_fullName__ylqU2",role:"Profile_role__Hwc5j",experience:"Profile_experience__nGlIS"}},8532:function(e){e.exports={container:"ProfileLink_container__aEC5E",iconWrapper:"ProfileLink_iconWrapper__bLv2W",showButton:"ProfileLink_showButton__1H4aT"}},1923:function(e){e.exports={sidebar:"Sidebar_sidebar__gyKt1",imageContainer:"Sidebar_imageContainer__YusCI",image:"Sidebar_image__Zx2kM",stack:"Sidebar_stack__x4xsu"}},6380:function(e){e.exports={header:"TechStack_header__ItJYF",techItem:"TechStack_techItem__tLjTR"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=5318,e(e.s=n);var n}));var n=e.O();_N_E=n}]);