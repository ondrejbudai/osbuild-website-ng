"use strict";(self.webpackChunkosbuild_website_ng=self.webpackChunkosbuild_website_ng||[]).push([[9691],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return i?a.createElement(h,o(o({ref:t},c),{},{components:i})):a.createElement(h,o({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<n;u++)o[u]=i[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8630:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=i(7462),r=(i(7294),i(3905));const n={},o="Image Builder CRC API Architecture Document",l={unversionedId:"image-builder-service/image-builder-crc",id:"image-builder-service/image-builder-crc",title:"Image Builder CRC API Architecture Document",description:"Service Description",source:"@site/docs/image-builder-service/image-builder-crc.md",sourceDirName:"image-builder-service",slug:"/image-builder-service/image-builder-crc",permalink:"/osbuild-website-ng/docs/image-builder-service/image-builder-crc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/image-builder-service/image-builder-crc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Builder Composer API Architecture Document",permalink:"/osbuild-website-ng/docs/image-builder-service/image-builder-composer"},next:{title:"Image Builder Koji integration",permalink:"/osbuild-website-ng/docs/image-builder-service/image-builder-koji"}},s={},u=[{value:"Service Description",id:"service-description",level:2},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Components",id:"components",level:2},{value:"Routes",id:"routes",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Internal",id:"internal",level:3},{value:"External",id:"external",level:3},{value:"Service Diagram",id:"service-diagram",level:2},{value:"Application Success Criteria",id:"application-success-criteria",level:2},{value:"SLOs",id:"slos",level:2},{value:"Latency",id:"latency",level:3},{value:"Stability",id:"stability",level:3},{value:"State",id:"state",level:2},{value:"Load Testing",id:"load-testing",level:2},{value:"Capacity",id:"capacity",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image-builder-crc-api-architecture-document"},"Image Builder CRC API Architecture Document"),(0,r.kt)("h2",{id:"service-description"},"Service Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"image-builder")," API in CRC serves as the public API used either directly by customers or through the\nCRC UI. Through this API customers can create, manage and view image builds. The service in CRC is\nresponsible for access management, quotas, rate-limiting, etc. In the future it may interact with other\nservices in CRC in order to add value to the image build experience."),(0,r.kt)("p",null,"The actual image build requests are passed on to ",(0,r.kt)("inlineCode",{parentName:"p"},"composer"),", which is outside the scope of this document."),(0,r.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("p",null,"The service is written in Golang, and the list of dependencies can be found in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osbuild/image-builder/blob/main/go.mod"},"go.mod"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ubi8/go-toolset:latest")," container is used as a builder, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ubi8/ubi-minimal:latest")," to run the\nbinary. The container images are located here: ",(0,r.kt)("a",{parentName:"p",href:"https://quay.io/repository/cloudservices/image-builder"},"https://quay.io/repository/cloudservices/image-builder"),"."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The service consists of the image-builder app running in CRC, and its backing database. If either of\nthese are unavailable, the service does not work at all, new images cannot be built, and historical\nbuilds cannot be introspected. Already built images that may be in used by customers are unaffected,\nonly their history and metadata can no longer be queried through the service."),(0,r.kt)("h2",{id:"routes"},"Routes"),(0,r.kt)("p",null,"The public route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/image-builder"),", a detailed list can be found at\n",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/docs/api/image-builder"},"https://console.redhat.com/docs/api/image-builder"),"."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Image builder has the following internal and external dependencies."),(0,r.kt)("h3",{id:"internal"},"Internal"),(0,r.kt)("p",null,"Image Builder relies on 3Scale to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"x-rh-identity")," header. It uses the header for authentication,\nand quota application. It also uses the account number to map previously made compose requests to that\naccount number."),(0,r.kt)("h3",{id:"external"},"External"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS RDS for data storage. See the section on state."),(0,r.kt)("li",{parentName:"ul"},"Quay as a container registry. Without this, the service cannot be redeployed."),(0,r.kt)("li",{parentName:"ul"},"Github as an upstream repository. Without this, the service cannot be redeployed."),(0,r.kt)("li",{parentName:"ul"},"Gitlab, AWS EC2, and Openstack for upstream testing. Without this changes to the service cannot land.")),(0,r.kt)("h2",{id:"service-diagram"},"Service Diagram"),(0,r.kt)("p",null,"See parent page."),(0,r.kt)("h2",{id:"application-success-criteria"},"Application Success Criteria"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Customers can queue image builds and view their state."),(0,r.kt)("li",{parentName:"ol"},"Customers can introspect and manage existing builds."),(0,r.kt)("li",{parentName:"ol"},"Quotas are applied according to policy to manage cost of running the service."),(0,r.kt)("li",{parentName:"ol"},"The service is able to provide functionality to make its own functionality discoverable")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enumerate supported features"),(0,r.kt)("li",{parentName:"ul"},"Package search")),(0,r.kt)("h2",{id:"slos"},"SLOs"),(0,r.kt)("p",null,"The image builder API has the following SLOs, but we aim to add more and make these stricter as we\ngain more experience from production. Our SLO targets are defined in App Interface."),(0,r.kt)("h3",{id:"latency"},"Latency"),(0,r.kt)("p",null,"The ratio of requests that are considered significantly fast. The aim is to make it possible\nto have a responsive UI. The exception is currently the ",(0,r.kt)("inlineCode",{parentName:"p"},"/compose")," call, which is long-running and\nour SLO targets reflect a higher latency threshold. The UI must be implemented with this\nin mind."),(0,r.kt)("h3",{id:"stability"},"Stability"),(0,r.kt)("p",null,"The proportion of successful (or unsuccessful due to user error) ",(0,r.kt)("inlineCode",{parentName:"p"},"/compose")," requests. The aim is for users\nto be able to reliably queue image builds, even if some retries are required."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"The service depends on a PostgreSQL database, the default postgres12-rds-1 template is used. The\ndatabase stores metadata about each build, making it possible to enumerate past builds and to enforce\nquota limits. If the state is lost historical data would be lost, but the user could still use their\nimages if they have saved the necessary information. The quote calculations would be off, but in the\nworst case scenario customers would be able to build more images than they are meant to, which would\nnot be a big problem."),(0,r.kt)("h2",{id:"load-testing"},"Load Testing"),(0,r.kt)("p",null,"Image Builder is currently being load tested on a weekly basis with failure thresholds reflecting the\nSLIs. The load tests happen against stage CRC. An example can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/osbuild/ci/image-builder/-/jobs/1541382293"},"here"),"."),(0,r.kt)("p",null,"More information can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osbuild/image-builder/blob/main/test/README.md"},"upstream"),"."),(0,r.kt)("h2",{id:"capacity"},"Capacity"),(0,r.kt)("p",null,"The needed capacity might grow a little bit in all directions (DB and number of pods), but any growth should\nbe slow. Currently  pods are running, and limits have been set on memory or cpu usage. The default insights\nlimits and quotas are used, which should be more than enough."))}p.isMDXComponent=!0}}]);