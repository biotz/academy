"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5331],{9768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var i=a(4848),n=a(8453);const o={},r=void 0,s={id:"Tutorials/Getting started/Step 1 - Creating a Device Type",title:"Step 1 - Creating a Device Type",description:"Creating a Device Type",source:"@site/docs/Tutorials/Getting started/Step 1 - Creating a Device Type.md",sourceDirName:"Tutorials/Getting started",slug:"/Tutorials/Getting started/Step 1 - Creating a Device Type",permalink:"/academy/docs/Tutorials/Getting started/Step 1 - Creating a Device Type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/academy/docs/Tutorials/Getting started/"},next:{title:"Step 2 - Creating a Message Type",permalink:"/academy/docs/Tutorials/Getting started/Step 2 - Creating a Message Type"}},c={},A=[{value:"Creating a Device Type",id:"creating-a-device-type",level:2}];function l(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"creating-a-device-type",children:"Creating a Device Type"}),"\n",(0,i.jsxs)(t.p,{children:["Before we start sending and ingesting data you have to configure your Biotz account to be able to know ",(0,i.jsx)(t.strong,{children:"who"})," is sending data and ",(0,i.jsx)(t.strong,{children:"how"})," to process it. The first step is to create a Device Type, which will allow you to categorise your devices. Assuming you have signed in into the application, from the sidebar, in the ",(0,i.jsx)(t.strong,{children:"Setup"})," section, click on ",(0,i.jsx)(t.strong,{children:"Device Type"}),"."]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Confirm",src:a(6679).A+"",width:"250",height:"450"})})}),"\n",(0,i.jsx)(t.p,{children:"You will be presented with the following page:"}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Confirm",src:a(7257).A+"",width:"964",height:"411"})})}),"\n",(0,i.jsx)(t.p,{children:"If you haven\u2019t created any Device Type yet this table should be empty. Now, on the top right corner of the table click on New Device Type. Once you have done, you will have to fill a few details about the device type such as name and optionally description as can been seen in the image below:"}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Confirm",src:a(8195).A+"",width:"400",height:"302"})})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Internal name"})," is auto-generated based on the ",(0,i.jsx)(t.strong,{children:"Name"})," you write. However, you can change if you desire when creating your real Device Type. But beware as it is a name used internally by the platform, so both its length and allowed character set are limited. With that said, for the sake of this tutorial, please input the following information for each field accordingly:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Name: My test device type"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Description: My test device type"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Leave the ",(0,i.jsx)(t.strong,{children:"Internal name"})," unchanged and click on ",(0,i.jsx)(t.strong,{children:"Save"}),". If there is nothing wrong, the device type should be created and you will be notified that is succeeded:"]}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Confirm",src:a(3025).A+"",width:"514",height:"151"})})}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have created a Device Type, the next step is to ",(0,i.jsx)("a",{href:"./Step 2 - Creating a Message Type",target:"_self",children:"create a Message Type "}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3025:(e,t,a)=>{a.d(t,{A:()=>i});const i="data:image/png;base64,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"},6679:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DeviceType-57192a3811b36d7a5eedf124748580fe.png"},7257:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/NewDeviceType-9bda6101c4fc07e6b2a7d6cd3a5fb325.png"},8195:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/createNew-18b8420b87288d9aae3b438da5c97359.png"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var i=a(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);