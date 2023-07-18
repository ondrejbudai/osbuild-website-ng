"use strict";(self.webpackChunkosbuild_website_ng=self.webpackChunkosbuild_website_ng||[]).push([[3475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={},a="Image Builder on premises",s={unversionedId:"image-builder-on-premises/image-builder-on-premises",id:"image-builder-on-premises/image-builder-on-premises",title:"Image Builder on premises",description:"{{#include image-builder-on-premises.svg}}",source:"@site/docs/image-builder-on-premises/image-builder-on-premises.md",sourceDirName:"image-builder-on-premises",slug:"/image-builder-on-premises/",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-builder-on-premises/image-builder-on-premises.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building a RHEL for Edge Installer",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/edge-container+installer"},next:{title:"Installation",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/installation"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-builder-on-premises"},"Image Builder on premises"),(0,i.kt)("p",null,"{{#include image-builder-on-premises.svg}}"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," is a service for building customized operating system images (currently only Fedora and RHEL). These images can be used with various virtualization software such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.qemu.org/"},"QEMU"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.vmware.com/"},"VMWare")," and also with cloud computing providers like ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"AWS"),", ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/"},"Azure")," or ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"GCP"),"."),(0,i.kt)("p",null,"There are two frontends that you can use to communicate with osbuild-composer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cockpit Composer"),": The web-based management console Cockpit comes bundled with a UI extension to build operating system artifacts. See the documentation of Cockpit Composer for information, or consult the Cockpit Guide for help on general Cockpit questions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Command-line Interface"),": With composer-cli there exists a linux command-line interface (CLI) to some of the functionality provided by OSBuild. The CLI is part of the Weldr project, a precursor of OSBuild."))),(0,i.kt)("p",null,"This guide contains instructions on installing ",(0,i.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," service and its basic usage."),(0,i.kt)("p",null,"If you want to fix a typo, or even contribute new content, the sources for this webpage are hosted in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/osbuild/guides/"},"osbuild/guides GitHub repository"),"."),(0,i.kt)("p",null,"For Red Hatters, the internal guides can be found ",(0,i.kt)("a",{parentName:"p",href:"https://osbuild.pages.redhat.com/internal-guides/"},"here"),"."))}m.isMDXComponent=!0}}]);