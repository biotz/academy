"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3832],{416:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=i(4848),o=i(8453);const n={sidebar_position:4,sidebar_label:"How to publish device data using MQTT - setup devices to send data"},a="Publishing Device data",r={id:"How-to guides/How to publish device data",title:"Publishing Device data",description:"Introduction",source:"@site/docs/How-to guides/How to publish device data.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to publish device data",permalink:"/docs/How-to guides/How to publish device data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"How to publish device data using MQTT - setup devices to send data"},sidebar:"tutorialSidebar",previous:{title:"How to create a schema - setup apllication to ingest certain data",permalink:"/docs/How-to guides/How to create a schema"},next:{title:"How to configure and trigger a remote action in devices",permalink:"/docs/How-to guides/How to configure and trigger a remote action in devices"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Custom topic name support",id:"custom-topic-name-support",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"publishing-device-data",children:"Publishing Device data"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"There is a standard format of the MQTT topics for sending data from devices to the Biotz IoT Platform. For this to happen there are these pre-steps that must be fulfilled:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Organisation must be ",(0,s.jsx)("a",{href:"/docs/Tutorials/Creating a Biotz account",target:"_self",children:"registered"})," in Biotz."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("a",{href:"/docs/Tutorials/Getting started/Step 1 - Creating a Device Type",target:"_self",children:"Device-Type"}),", ",(0,s.jsx)("a",{href:"/docs/Tutorials/Getting started/Step 2 - Creating a Message Type",target:"_self",children:"message-type"})," and the schema of data ",(0,s.jsx)("a",{href:"/docs/Tutorials/Getting started/Step 3 - Creating a Schema",target:"_self",children:"schema of data"})," to be sent must be registered in Biotz."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("a",{href:"/docs/Tutorials/Getting started/Step 4 - Creating  a device",target:"_self",children:"Specific"})," device must be registered."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Find specific MQTT broker information following this ",(0,s.jsx)("a",{href:"/docs/Reference guides/MQTT broker",target:"_self",children:"link"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This is the generic MQTT topic builds:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the topic standard there are three elements that have to be personalized:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CUSTOMER-ID"}),": is common to the organisation. It is provided when a device is registered in the web application, and it has a UUID format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"DEVICE-ID"}),": specific to each device. It is provided when a device is registered in the web application, and it has a UUID format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"MESSAGE-TYPE-INTERNAL-NAME"}),": is specified by the device owner when registering a message-type for a certain device-type. This message-type will have to have also a schema specified in Biotz."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Devices should publish messages to these topics. There are specific security measures in place so these topics are exclusively set up to get publish messages. Devices can't subscribe to it."}),"\n",(0,s.jsx)(t.h2,{id:"custom-topic-name-support",children:"Custom topic name support"}),"\n",(0,s.jsx)(t.p,{children:"We won\u2019t support custom topic names in the SaaS platform. That feature would only be considered in an ad-hoc project for a specific customer, along with some other possible customization as the device payload schema gathering."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(6540);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);