"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6583],{8395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const o={sidebar_position:5,sidebar_label:"Step 5 - Authenticating  a device"},r="Authenticating a device",a={id:"Tutorials/Getting started/Step 5 - Authenticating  a device",title:"Authenticating a device",description:"In this tutorial, as said in the beginning, the data sending will be simulated. To do so, you will make an HTTP request to the http-forwarder service of Biotz which will, as the name implies, forward your data ingestion request to the competent services. That is the reason why you chose the HTTP communication protocol before when creating a message type.",source:"@site/docs/Tutorials/Getting started/Step 5 - Authenticating  a device.md",sourceDirName:"Tutorials/Getting started",slug:"/Tutorials/Getting started/Step 5 - Authenticating  a device",permalink:"/academy/docs/Tutorials/Getting started/Step 5 - Authenticating  a device",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Step 5 - Authenticating  a device"},sidebar:"tutorialSidebar",previous:{title:"Step 4 - Creating a device",permalink:"/academy/docs/Tutorials/Getting started/Step 4 - Creating  a device"},next:{title:"Step 6 - Sending a data ingestion request",permalink:"/academy/docs/Tutorials/Getting started/Step 6 - Sending a data ingestion request"}},d={},l=[];function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"authenticating-a-device",children:"Authenticating a device"}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial, as said in the beginning, the data sending will be simulated. To do so, you will make an HTTP request to the ",(0,i.jsx)(t.strong,{children:"http-forwarder"})," service of Biotz which will, as the name implies, forward your data ingestion request to the competent services. That is the reason why you chose the ",(0,i.jsx)(t.strong,{children:"HTTP communication protocol"})," before when creating a message type."]}),"\n",(0,i.jsxs)(t.p,{children:["However in order to call the ",(0,i.jsx)(t.strong,{children:"http-forwarder"})," service you have to identify yourself and retrieve a credential, a token that will be used to validate your identity. For that, You will be using some of the credentials you have downloaded in the previous step, during the device creation process. To retrieve a token you will need to authenticate against Biotz identity provider using the following information:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Username: the HTTP Username value in the credentials file."})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Password: the Password value in the credentials file."})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Client ID: biotz-platform-devices"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Grant type: password"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Scope: openid"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["With that information you can craft an HTTP request for this simulation to get the token. In this tutorial, it is assumed you have some experience working the terminal. As said at the beginning of this tutorial, ",(0,i.jsx)(t.strong,{children:"HTTPie"})," and ",(0,i.jsx)(t.strong,{children:"cURL"})," tools will be used to provide examples for HTTP requests. Here is the request to retrieve the token using both tools (please make sure to adjust the request with your own credentials):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title="HTTPie"',children:"http --form POST \\\nhttps://auth.biotz.io/realms/biotz-platform/protocol/openid-connect/token \\\nusername=~HTTP USER FROM CSV~ \\\npassword=~PASSWORD FROM CSV~ \\\ngrant_type=password \\\nclient_id=biotz-platform-devices \\\nscope=openid \n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title="cURL"',children:"curl --request POST \\\n--url https://auth.biotz.io/realms/biotz-platform/protocol/openid-connect/token \\\n--data-urlencode username=~HTTP USERNAME FROM CSV~ \\\n--data-urlencode password=~PASSWORD FROM CSV~ \\\n--data-urlencode client_id=biotz-platform-devices \\\n--data-urlencode grant_type=password \\\n--data-urlencode scope=openid\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.p,{children:["This will return a response which contains the ",(0,i.jsx)(t.strong,{children:"id_token"}),". Copy its value and hold on to it as you will need it to ",(0,i.jsx)("a",{href:"./Step 6 - Sending a data ingestion request",target:"_self",children:"send the data ingestion request"}),".\n\u200d"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);