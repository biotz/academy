"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[635],{5367:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=i(4848),r=i(8453);const n={},o=void 0,a={id:"How-to guides/How to update device firmware",title:"How to update device firmware",description:"Biotz offers a remote firmware update service. The user will upload the new firmware file to the Biotz IoT platform where it will be registered and stored. From that point on the user will be able to assign any firmware file to existing devices.",source:"@site/docs/How-to guides/How to update device firmware.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to update device firmware",permalink:"/academy/docs/How-to guides/How to update device firmware",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to register devices",permalink:"/academy/docs/How-to guides/How to register devices"},next:{title:"How to use dashboard variables",permalink:"/academy/docs/How-to guides/How to use dashboard variables"}},d={},c=[];function l(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Biotz offers a remote firmware update service. The user will upload the new firmware file to the Biotz IoT platform where it will be registered and stored. From that point on the user will be able to assign any firmware file to existing devices."}),"\n",(0,s.jsx)(t.p,{children:"For this to be possible, the device must be subscribed to the MQTT topic where Biotz will publish the firmware update message. The topic name follows this format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/firmware/update\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the topic name format there are two elements that have to be personalized:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CUSTOMER-ID"}),": Is shared by all devices of the organization. It is provided when a device is registered in the web application, and it has a ",(0,s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_self",children:"UUID"})," format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"DEVICE-ID"}),": Is specific to each device. It is provided when a device is registered in the web application, and it has a ",(0,s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_self",children:"UUID"})," format."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are specific security measures in place for these topics. The devices can just subscribe to them, publishing is not allowed."}),"\n",(0,s.jsxs)(t.p,{children:["Whenever the user assigns a certain firmware file to a device (or a set of devices), a message will be published to the specific topic(s) just described. This message will be published with the MQTT Retained flag set to true. This means that the MQTT broker will keep the message around, and ",(0,s.jsx)(t.strong,{children:"every time"})," the device connects to the MQTT broker and subscribes to the topic, the message will be delivered to the device. Thus, the device must be ready to deal with repeated firmware update messages in a sensible way (e.g., by recognizing that the firmware name specified in the message is the same already running on the device, and not doing any updates)."]}),"\n",(0,s.jsx)(t.p,{children:"The reason why the firmware update message is sent with the MQTT Retained flag set to true is twofold:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The device can know that there is a firmware update pending, even if it was disconnected from the MQTT broker at the time the message was sent."}),"\n",(0,s.jsx)(t.li,{children:"Biotz IoT Platform can assign firmware updates to devices even before those devices connect to the MQTT broker for the first time."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The payload of the MQTT message is a UTF-8 encoded string, that holds a JSON object with the following content:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n  "firmware-name": "firmware name",\n  "download-url": "https://firmware-download-url"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The download URL has an expiration period of ",(0,s.jsx)(t.strong,{children:"one week"}),". After that time the URL will no longer be valid."]}),"\n",(0,s.jsx)(t.p,{children:"To summarize:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The device must be subscribed to specific topic to get the message(s),"}),"\n",(0,s.jsx)(t.li,{children:"It must decode the UTF-8 encoded string to build the JSON object,"}),"\n",(0,s.jsx)(t.li,{children:'It must check the "firmware-name" key and decide if it has to apply the update or not,'}),"\n",(0,s.jsx)(t.li,{children:'If it does decide to apply the update, it must download the firmware file from the URL specified in the "download-url" key,'}),"\n",(0,s.jsx)(t.li,{children:"Once it has downloaded the firmware file locally, it may perform some checks to verify the suitableness of the firmware file (integrity checks, authenticity checks, compatibility checks, etc.), and then perform the auto-update."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(6540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);