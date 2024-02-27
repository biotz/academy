"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9118],{7475:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var o=i(4848),s=i(8453);const n={},c=void 0,r={id:"How-to guides/How to configure and trigger a remote action in devices",title:"How to configure and trigger a remote action in devices",description:"Biotz offers the feature to action devices remotely, this is offered just through MQTT. The configuration of this features include 3 steps:",source:"@site/docs/How-to guides/How to configure and trigger a remote action in devices.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to configure and trigger a remote action in devices",permalink:"/academy/docs/How-to guides/How to configure and trigger a remote action in devices",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How-to guides",permalink:"/academy/docs/category/how-to-guides"},next:{title:"How to create a dashboard",permalink:"/academy/docs/How-to guides/How to create a dashboard"}},a={},h=[{value:"Step 1 - Setup the &#39;Remote actioning&#39; in Biotz platform.",id:"step-1---setup-the-remote-actioning-in-biotz-platform",level:2},{value:"Step 2 - Setup device to get the order to perform the action.",id:"step-2---setup-device-to-get-the-order-to-perform-the-action",level:2},{value:"Step 3 - Trigger the action from the Biotz platform.",id:"step-3---trigger-the-action-from-the-biotz-platform",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Biotz offers the feature to action devices remotely, this is offered just through MQTT. The configuration of this features include 3 steps:"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"step-1---setup-the-remote-actioning-in-biotz-platform",children:"Step 1 - Setup the 'Remote actioning' in Biotz platform."}),"\n",(0,o.jsx)(t.p,{children:"In the Setup section of the sidebar, there is a subsection called 'Remote action flow', this is where configuration is done. Remote actions are configured per device type, so the first thing to do will be to select a device type (that must already exist)."}),"\n",(0,o.jsx)(t.p,{children:"Each device type can have 0 to n action message types, each of this message type will be related to an specific MQTT topic (as pushed into). But at the same time, the action message type could have 1 to n schemas."}),"\n",(0,o.jsx)(t.p,{children:"The action message types, as said before, are specifically offered through MQTT communication protocol. Regarding Message encoding, json or message pack can be used. Once this configuration is done, the schema of the communication should be registered."}),"\n",(0,o.jsx)(t.p,{children:"Biotz shows the same interface for both message types (specific to communication from device to Biotz platform) and action message type (specific to communication from Biotz platform to device) schema registration. So the same way, the schema representing the data to action the device should be registered. This schema will be used when action is triggered, and also the device has to be able to decipher this schema (json or message pack format) once it receives it through MQTT."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"step-2---setup-device-to-get-the-order-to-perform-the-action",children:"Step 2 - Setup device to get the order to perform the action."}),"\n",(0,o.jsx)(t.p,{children:"Find specific MQTT broker information following this link."}),"\n",(0,o.jsx)(t.p,{children:"The specific device of the selected device type should be already registered under the 'Device Management' section for devices. The device should be configured to SUBSCRIBE to the specific topic that Biotz will use to notify the action to the device. The topic follows this pattern:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/subscribe/action/ACTION-MESSAGE-TYPE-INTERNAL-NAME\n"})}),"\n",(0,o.jsx)(t.p,{children:"So the device has to be SUBSCRIBED to the topic generated following the pattern that fits the specific details of the device and the action message type registered in step 1. The device will get the message following the schema registered and in the configured message encoding format. The device is expected to know how and what to do with it to perform the action."}),"\n",(0,o.jsx)(t.h2,{id:"step-3---trigger-the-action-from-the-biotz-platform",children:"Step 3 - Trigger the action from the Biotz platform."}),"\n",(0,o.jsx)(t.p,{children:"The 'Remote actioning' section in the sidebar, shows the list of device types and the number of action messages registered per each of them. If a device type with at least an action message type registered for it is selected, the action triggering interface is shown."}),"\n",(0,o.jsx)(t.p,{children:"Next selections must be done: the specific 'action message type', the specific schema to be used for the selected action message type. Once those are selected, a file in the specified message encoding must be uploaded to the system, this will be the specific message Biotz will publish to the mentioned topic to which the device has been subscribed in step 2."}),"\n",(0,o.jsx)(t.p,{children:"Lastly, this action can be triggered in one to n devices (that are already registered in the platform) that are from that device type. All devices will be listed on the right side of the interface. Once the device(s) is selected, the action can be sent by pushing the 'send' button in the bottom."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var o=i(6540);const s={},n=o.createContext(s);function c(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);