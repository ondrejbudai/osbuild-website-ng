"use strict";(self.webpackChunkosbuild_website_ng=self.webpackChunkosbuild_website_ng||[]).push([[3909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Releasing",l={unversionedId:"developer-guide/releasing",id:"developer-guide/releasing",title:"Releasing",description:"This guide describes the process of releasing osbuild and osbuild-composer to upstream, into Fedora and CentOS Stream.",source:"@site/docs/developer-guide/releasing.md",sourceDirName:"developer-guide",slug:"/developer-guide/releasing",permalink:"/osbuild-website-ng/docs/developer-guide/releasing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer-guide/releasing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"osbuild",permalink:"/osbuild-website-ng/docs/developer-guide/osbuild"},next:{title:"Testing strategy",permalink:"/osbuild-website-ng/docs/developer-guide/testing-strategy/"}},s={},p=[{value:"Clone the release helpers",id:"clone-the-release-helpers",level:2},{value:"Upstream release",id:"upstream-release",level:2},{value:"Manual upstream release",id:"manual-upstream-release",level:3},{value:"Fedora release",id:"fedora-release",level:2},{value:"CentOS Stream / RHEL releases",id:"centos-stream--rhel-releases",level:2},{value:"Spreading the word on osbuild.org",id:"spreading-the-word-on-osbuildorg",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"releasing"},"Releasing"),(0,n.kt)("p",null,"This guide describes the process of releasing osbuild and osbuild-composer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/osbuild"},"upstream"),", into ",(0,n.kt)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/osbuild"},"Fedora")," and ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/redhat/centos-stream/rpms/osbuild"},"CentOS Stream"),"."),(0,n.kt)("h2",{id:"clone-the-release-helpers"},"Clone the release helpers"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/maintainer-tools"},"maintainer-tools repository"),", clone the repository and run ",(0,n.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")," in order to get all the dependencies to be able to execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"release.py")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"update-distgit.py")," scripts."),(0,n.kt)("p",null,"It's also advised to set a GitHub personal access token, otherwise you might run into API usage quotas. Go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"Personal access tokens")," on GitHub and create a new token with scope ",(0,n.kt)("inlineCode",{parentName:"p"},"public_repo"),". Now, create a new packit user configuration at ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.config/packit.yaml")," and paste there the following content:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"authentication:\n  github.com:\n    token: [YOUR_GITHUB_PERSONAL_ACCESS_TOKEN]\n")),(0,n.kt)("h2",{id:"upstream-release"},"Upstream release"),(0,n.kt)("p",null,"Note: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/release-action/tree/create-tag"},"Upstream releases are done automatically")," on a fortnightly alternating schedule, meaning one week we release osbuild and then the next week we release osbuild-composer."),(0,n.kt)("h3",{id:"manual-upstream-release"},"Manual upstream release"),(0,n.kt)("p",null,"Navigate to your local repository in your terminal and call the ",(0,n.kt)("inlineCode",{parentName:"p"},"release.py")," script. It will interactively take you through the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Gather all pull request titles merged to ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," since the latest release tag")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a draft of the next release tag"),(0,n.kt)("p",{parentName:"li"},"While writing the commit message, keep in mind that it needs to conform to both Markdown and git commit message formats, have a look at the commit message for one of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/osbuild-composer/tags"},"recent releases")," to get a clear idea how it should look like.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push your signed git tag to ",(0,n.kt)("inlineCode",{parentName:"p"},"main")))),(0,n.kt)("p",null,"From here on a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/release-action"},"GitHub composite action")," will take over and"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a GitHub release based on the tag (version and message)"),(0,n.kt)("li",{parentName:"ol"},"Bump the version in ",(0,n.kt)("inlineCode",{parentName:"li"},"osbuild.spec")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"osbuild-composer.spec")," (and potentially ",(0,n.kt)("inlineCode",{parentName:"li"},"setup.py"),")"),(0,n.kt)("li",{parentName:"ol"},"Commit and push this change to ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," so the version is already reflecting the next release")),(0,n.kt)("h2",{id:"fedora-release"},"Fedora release"),(0,n.kt)("p",null,"We use packit (see ",(0,n.kt)("inlineCode",{parentName:"p"},".packit.yml")," in the osbuild or osbuild-composer repository respectively or the ",(0,n.kt)("a",{parentName:"p",href:"https://packit.dev/docs/"},"official packit documentation"),") to automatically push new releases directly to ",(0,n.kt)("a",{parentName:"p",href:"https://src.fedoraproject.org/rpms/osbuild"},"Fedora's dist-git"),"."),(0,n.kt)("p",null,"Then our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/fedora-bot"},"fedora-bot")," takes over and performs the remaining steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get a kerberos ticket by running ",(0,n.kt)("inlineCode",{parentName:"li"},"kinit $USER@FEDORAPROJECT.ORG")),(0,n.kt)("li",{parentName:"ol"},"Call ",(0,n.kt)("inlineCode",{parentName:"li"},"fedpkg build")," to schedule Koji builds for each active Fedora release (or: dist-git branch)"),(0,n.kt)("li",{parentName:"ol"},"Update ",(0,n.kt)("a",{parentName:"li",href:"https://bodhi.fedoraproject.org/"},"Bodhi")," with the latest release")),(0,n.kt)("h2",{id:"centos-stream--rhel-releases"},"CentOS Stream / RHEL releases"),(0,n.kt)("p",null,"If you are a Red Hat employee, please continue reading about this in our internal release guide."),(0,n.kt)("h2",{id:"spreading-the-word-on-osbuildorg"},"Spreading the word on osbuild.org"),(0,n.kt)("p",null,"The last of releasing a new version is to create a new post on osbuild.org. Just open a PR in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/osbuild/osbuild.github.io"},"osbuild/osbuild.github.io"),". You can find a lot of inspiration in existing release posts."))}c.isMDXComponent=!0}}]);