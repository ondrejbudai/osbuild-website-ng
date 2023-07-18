"use strict";(self.webpackChunkosbuild_website_ng=self.webpackChunkosbuild_website_ng||[]).push([[6309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?i.createElement(g,n(n({ref:t},c),{},{components:r})):i.createElement(g,n({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,n[1]=s;for(var l=2;l<a;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const a={},n="Third-party Repositories",s={unversionedId:"image-builder-on-premises/repository-customizations",id:"image-builder-on-premises/repository-customizations",title:"Third-party Repositories",description:"osbuild-composer supports adding packages from third-party repositories and saving the repository customizations",source:"@site/docs/image-builder-on-premises/repository-customizations.md",sourceDirName:"image-builder-on-premises",slug:"/image-builder-on-premises/repository-customizations",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/repository-customizations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-builder-on-premises/repository-customizations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSCAP Remediation",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/oscap-remediation"},next:{title:"Uploading an image to an AWS S3 Bucket",permalink:"/osbuild-website-ng/docs/image-builder-on-premises/uploading-to-aws-s3"}},p={},l=[{value:"1. Install a third-party package",id:"1-install-a-third-party-package",level:2},{value:"2. Save repository configurations",id:"2-save-repository-configurations",level:2},{value:"3. Install a third-party package and save configurations",id:"3-install-a-third-party-package-and-save-configurations",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"third-party-repositories"},"Third-party Repositories"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," supports adding packages from third-party repositories and saving the repository customizations\nto an image. This guide aims to clarify each usecase and how to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," and\nthe blueprints accordingly."),(0,o.kt)("p",null,"Very importantly, ",(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer")," has two distinct definitions of third-party repositories. Firstly, ",(0,o.kt)("strong",{parentName:"p"},"payload repositories")," which can be used to install third-party packages at build time and,\nsecondly, ",(0,o.kt)("strong",{parentName:"p"},"custom repositories")," which are used to persist the repository configurations to the image."),(0,o.kt)("p",null,"This could lead to the following desired usecases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install a third-party package"),(0,o.kt)("li",{parentName:"ol"},"Save the third-party repository configurations to the image"),(0,o.kt)("li",{parentName:"ol"},"Install a third-party package ",(0,o.kt)("strong",{parentName:"li"},"and")," save the configurations")),(0,o.kt)("h2",{id:"1-install-a-third-party-package"},"1. Install a third-party package"),(0,o.kt)("p",null,"To install a third-party package at build time, it is necessary to enable the required third-party repository as a payload repository. This will not save any of the repository configurations\nto the image and will not make the repositories available to users on the system after the image has been built. For further information on how to install and configure ",(0,o.kt)("inlineCode",{parentName:"p"},"osbuild-composer"),"\nto use custom repositories for installing third-party packages, continue reading ",(0,o.kt)("a",{parentName:"p",href:"/osbuild-website-ng/docs/image-builder-on-premises/managing-repositories"},"here"),"."),(0,o.kt)("h2",{id:"2-save-repository-configurations"},"2. Save repository configurations"),(0,o.kt)("p",null,"In the second scenario, to make third-party repository configurations persistent and make the repositories available to users on the system, one would use the blueprint ",(0,o.kt)("inlineCode",{parentName:"p"},"custom repository"),"\nconfigurations to enable this. The repository will be configured and saved to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/yum.repos.d")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},".repo")," file. GPG keys are not imported at build time, but are imported when first\ninstalling a third-party package from the desired repository. You can find the blueprint reference for custom repositories ",(0,o.kt)("a",{parentName:"p",href:"/osbuild-website-ng/docs/image-builder-on-premises/blueprint-reference"},"here"),"."),(0,o.kt)("h2",{id:"3-install-a-third-party-package-and-save-configurations"},"3. Install a third-party package and save configurations"),(0,o.kt)("p",null,"In this case it is necessary to use a combination of payload repositories and custom repositories in order to achieve the desired outcome. This will ensure that the package is installed during\nbuild time and the repository configuration is saved to disk for future use. If the user only needs the package or the configuration file, they can use the appropriate repository type to achieve\ntheir goal."))}d.isMDXComponent=!0}}]);