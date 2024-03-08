"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[767],{3909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),o=n(8453);const s={sidebar_position:10,sidebar_label:"How to create Developer API credentials"},r="Developer API",a={id:"How-to guides/How to create developer API credentials",title:"Developer API",description:"Introduction",source:"@site/docs/How-to guides/How to create developer API credentials.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to create developer API credentials",permalink:"/academy/docs/How-to guides/How to create developer API credentials",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"How to create Developer API credentials"},sidebar:"tutorialSidebar",previous:{title:"How to update device firmware",permalink:"/academy/docs/How-to guides/How to update device firmware"},next:{title:"How to debug communication coming from devices into the application",permalink:"/academy/docs/How-to guides/How to debug communications coming from a device into the platform."}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Credentials creation",id:"credentials-creation",level:2},{value:"API consumption",id:"api-consumption",level:2}];function l(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"developer-api",children:"Developer API"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["To create applications that consume our data we have a Developer API, following ",(0,i.jsx)("a",{href:"https://api.test.biotz.io/docs/ui/index.html#/",target:"_self",children:"this link"})," you will be able to consult more information about the endpoints in our documentation."]}),"\n",(0,i.jsx)(t.h2,{id:"credentials-creation",children:"Credentials creation"}),"\n",(0,i.jsxs)(t.p,{children:["In order to connect with the API, you need to create some ",(0,i.jsx)(t.strong,{children:"credentials"})," in the credentials view, under the ",(0,i.jsx)(t.strong,{children:"Developer API"})," section"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Credentials creation",src:n(9722).A+"",width:"2551",height:"563"})})}),"\n",(0,i.jsxs)(t.p,{children:["Once here, clicking in the ",(0,i.jsx)(t.strong,{children:"New credentials"})," button will redirect you to the form. In this view we have to set the credentials name, a description can also be set to differentiate better between one another."]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"New credentials",src:n(3631).A+"",width:"437",height:"360"})})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.p,{children:["When finished, click ",(0,i.jsx)(t.strong,{children:"Save"})," and it will show the user information:"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Credentials created succesfully",src:n(2024).A+"",width:"957",height:"307"})})}),"\n",(0,i.jsx)(t.p,{children:"As shown in the pop-up, this information will only appear once. So download the credentials file and save somewhere safe."}),"\n",(0,i.jsx)(t.h2,{id:"api-consumption",children:"API consumption"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have our credentials created. We need to configure the authentication. For this example we will use the API documentation mentioned before."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Developer",src:n(3310).A+"",width:"1452",height:"808"})})}),"\n",(0,i.jsxs)(t.p,{children:["Clicking the ",(0,i.jsx)(t.strong,{children:"Authorize"})," button a pop-up will show, in which we need to add this information, also found on the\n",(0,i.jsx)("a",{href:"/academy/docs/Reference guides/Developer API",target:"_self",children:"Developer API Reference"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Username:"})," The username in the credentials file we have downloaded before."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Password:"})," The password in the credentials file we have downloaded before."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client credentials location:"})," You need to set this to Authorization header."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client_id:"}),' You need to set always "biotz-platform-programmatic-users".']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client_secret:"})," This one goes empty."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Scopes:"})," You need to check the openid box."]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Authorize1",src:n(5523).A+"",width:"664",height:"611"})})}),"\n",(0,i.jsxs)(t.p,{children:["When the authorization is done correctly, you should see a pop-up saying that your ",(0,i.jsx)(t.strong,{children:"Authorized"}),"."]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"authorize2",src:n(2312).A+"",width:"668",height:"502"})})}),"\n",(0,i.jsx)(t.p,{children:"With this your capable of consuming the API and get the needed data."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5523:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/authorize-1-6dc3514e11f5a19b1dbb3596743b57b5.png"},2312:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/authorize-2-ff6e6b20c1814076338f69ff6dc730fe.png"},3310:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/biotz-developer-api-e57c92ada20a91d7c381affed7cbd21a.png"},2024:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/credentials-created-succesfully-a43074379ce53b992c55b0604a9d1875.png"},9722:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/credentials-creation-3b3ef4593e42e6d3b67a93ed6426d5a4.png"},3631:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-credentials-6d5f1c0b5eed4e1e5ac2edb7a0f7b870.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);