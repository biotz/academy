"use strict";(self.webpackChunkacademy=self.webpackChunkacademy||[]).push([[3473],{7702:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(4848),t=n(8453);const s={sidebar_position:1,sidebar_label:"MQTT Broker"},o="MQTT Broker Reference",d={id:"Reference guides/MQTT broker",title:"MQTT Broker Reference",description:"Connection details",source:"@site/docs/Reference guides/MQTT broker.md",sourceDirName:"Reference guides",slug:"/Reference guides/MQTT broker",permalink:"/docs/Reference guides/MQTT broker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"MQTT Broker"},sidebar:"tutorialSidebar",previous:{title:"Reference guides",permalink:"/docs/category/reference-guides"},next:{title:"Glossary",permalink:"/docs/Reference guides/Glossary"}},c={},a=[{value:"Connection details",id:"connection-details",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Topics",id:"topics",level:2},{value:"Publish",id:"publish",level:3},{value:"Data ingestion",id:"data-ingestion",level:4},{value:"Subscribe",id:"subscribe",level:3},{value:"Remote actioning:\u200d",id:"remote-actioning",level:4},{value:"Firmware updates:",id:"firmware-updates",level:3}];function l(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"mqtt-broker-reference",children:"MQTT Broker Reference"}),"\n",(0,r.jsx)(i.h2,{id:"connection-details",children:"Connection details"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Host: mqtts://broker.biotz.io"}),"\n",(0,r.jsx)(i.li,{children:"Port: 8883"}),"\n",(0,r.jsx)(i.li,{children:"Transport: TLS"}),"\n",(0,r.jsxs)(i.li,{children:["MQTT version: ",(0,r.jsx)("a",{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/csprd02/mqtt-v3.1.1-csprd02.html",target:"_self",children:"v3.1.1"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(i.p,{children:"The authentication values are generated and provided when a new device is registered in the Biotz Platform. Each device uses its own credentials."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Client id"}),": generated and provided when a device is registered."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Username"}),": generated and provided when a device is registered."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Password"}),": generated and provided when a device is registered."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["More information about device registration ",(0,r.jsx)("a",{href:"/docs/Tutorials/Getting started/Step 1 - Creating a Device Type",target:"_self",children:"here"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"topics",children:"Topics"}),"\n",(0,r.jsx)(i.h3,{id:"publish",children:"Publish"}),"\n",(0,r.jsx)(i.h4,{id:"data-ingestion",children:"Data ingestion"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME\n"})}),"\n",(0,r.jsx)("a",{href:"/docs/How-to guides/How to publish device data",target:"_self",children:"More information"}),"\n",(0,r.jsx)(i.h3,{id:"subscribe",children:"Subscribe"}),"\n",(0,r.jsx)(i.h4,{id:"remote-actioning",children:"Remote actioning:\u200d"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/action/ACTION-MESSAGE-TYPE-INTERNAL-NAME\n"})}),"\n",(0,r.jsx)("a",{href:"/docs/How-to guides/How to configure and trigger a remote action in devices",target:"_self",children:"More information"}),"\n",(0,r.jsx)(i.h3,{id:"firmware-updates",children:"Firmware updates:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/firmware/update\n"})}),"\n",(0,r.jsx)("a",{href:"/docs/How-to guides/How to update device firmware",target:"_self",children:"More information"})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var r=n(6540);const t={},s=r.createContext(t);function o(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);