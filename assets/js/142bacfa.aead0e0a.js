"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[767],{3909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const r={sidebar_position:10,sidebar_label:"How to create Developer API credentials"},s="Developer API",a={id:"How-to guides/How to create developer API credentials",title:"Developer API",description:"Introduction",source:"@site/docs/How-to guides/How to create developer API credentials.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to create developer API credentials",permalink:"/academy/docs/How-to guides/How to create developer API credentials",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"How to create Developer API credentials"},sidebar:"tutorialSidebar",previous:{title:"How to update device firmware",permalink:"/academy/docs/How-to guides/How to update device firmware"},next:{title:"How to debug communication coming from devices into the application",permalink:"/academy/docs/How-to guides/How to debug communications coming from a device into the platform."}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Credentials creation",id:"credentials-creation",level:2},{value:"API consumption",id:"api-consumption",level:2}];function l(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"developer-api",children:"Developer API"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["To create applications that consume our data we have a Developer API, following ",(0,i.jsx)("a",{href:"https://api.test.biotz.io/docs/ui/index.html#/",target:"_self",children:"this link"})," you will be able to consult more information about the endpoints in our documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"credentials-creation",children:"Credentials creation"}),"\n",(0,i.jsxs)(n.p,{children:["In order to connect with the API, you need to create some ",(0,i.jsx)(n.strong,{children:"credentials"})," in the credentials view, under the ",(0,i.jsx)(n.strong,{children:"Developer API"})," section"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![Credentials creation](/academy/docs/How-to guides/img/credentials-creation.png)"})}),"\n",(0,i.jsxs)(n.p,{children:["Once here, clicking in the ",(0,i.jsx)(n.strong,{children:"New credentials"})," button will redirect you to the form. In this view we have to set the credentials name, a description can also be set to differentiate better between one another."]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![New credentials](/academy/docs/How-to guides/img/new-credentials.png)"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["When finished, click ",(0,i.jsx)(n.strong,{children:"Save"})," and it will show the user information:"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![Credentials created succesfully](/academy/docs/How-to guides/img/credentials-created-succesfully.png)"})}),"\n",(0,i.jsx)(n.p,{children:"As shown in the pop-up, this information will only appear once. So download the credentials file and save somewhere safe."}),"\n",(0,i.jsx)(n.h2,{id:"api-consumption",children:"API consumption"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have our credentials created. We need to configure the authentication. For this example we will use the API documentation mentioned before."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![Developer](/academy/docs/How-to guides/img/biotz-developer-api.png)"})}),"\n",(0,i.jsxs)(n.p,{children:["Clicking the ",(0,i.jsx)(n.strong,{children:"Authorize"})," button a pop-up will show, in which we need to add this information, also found on the\n",(0,i.jsx)("a",{href:"/academy/docs/Reference guides/Developer API",target:"_self",children:"Developer API Reference"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Username:"})," The username in the credentials file we have downloaded before."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Password:"})," The password in the credentials file we have downloaded before."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client credentials location:"})," You need to set this to Authorization header."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client_id:"}),' You need to set always "biotz-platform-programmatic-users".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client_secret:"})," This one goes empty."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scopes:"})," You need to check the openid box."]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![Authorize1](/academy/docs/How-to guides/img/authorize-1.png)"})}),"\n",(0,i.jsxs)(n.p,{children:["When the authorization is done correctly, you should see a pop-up saying that your ",(0,i.jsx)(n.strong,{children:"Authorized"}),"."]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(n.p,{children:"![authorize2](/academy/docs/How-to guides/img/authorize-2.png)"})}),"\n",(0,i.jsx)(n.p,{children:"With this your capable of consuming the API and get the needed data."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);