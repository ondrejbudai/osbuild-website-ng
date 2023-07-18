"use strict";(self.webpackChunkosbuild_website_ng=self.webpackChunkosbuild_website_ng||[]).push([[8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Installation",l={unversionedId:"image-builder-on-premises/installation",id:"image-builder-on-premises/installation",title:"Installation",description:"To get started with osbuild-composer on your local machine, you can install the CLI interface or the Web UI, which is part of Cockpit project.",source:"@site/docs/image-builder-on-premises/installation.md",sourceDirName:"image-builder-on-premises",slug:"/image-builder-on-premises/installation",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-builder-on-premises/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Builder on premises",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/"},next:{title:"Managing repositories",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/managing-repositories"}},s={},c=[{value:"CLI interface",id:"cli-interface",level:2},{value:"Web UI",id:"web-ui",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To get started with ",(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," on your local machine, you can install the CLI interface or the Web UI, which is part of Cockpit project. "),(0,o.kt)("h2",{id:"cli-interface"},"CLI interface"),(0,o.kt)("p",null,"For CLI only, run the following command to install necessary packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo dnf install osbuild-composer composer-cli\n")),(0,o.kt)("p",null,"To enable the service, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl enable --now osbuild-composer.socket\n")),(0,o.kt)("p",null,"Verify that the installation works by running ",(0,o.kt)("inlineCode",{parentName:"p"},"composer-cli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo composer-cli status show\n")),(0,o.kt)("p",null,"If you prefer to run this command without sudo privileges, add your user to the ",(0,o.kt)("inlineCode",{parentName:"p"},"weldr")," group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo usermod -a -G weldr <user>\n$ newgrp weldr\n")),(0,o.kt)("h2",{id:"web-ui"},"Web UI"),(0,o.kt)("p",null,"If you prefer the Web UI interface, known as an Image Builder, install the following package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo dnf install cockpit-composer\n")),(0,o.kt)("p",null,"and enable ",(0,o.kt)("inlineCode",{parentName:"p"},"cockpit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl enable --now osbuild-composer.socket\n$ sudo systemctl enable --now cockpit.socket\n")))}d.isMDXComponent=!0}}]);