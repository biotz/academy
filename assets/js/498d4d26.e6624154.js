"use strict";(self.webpackChunkacademy=self.webpackChunkacademy||[]).push([[6246],{2165:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(4848),r=t(8453);const s={sidebar_position:8,sidebar_label:"How to define alarm triggers"},d="How to define alarm triggers",a={id:"How-to guides/How to define alarm and triggers",title:"How to define alarm triggers",description:"Introduction",source:"@site/docs/How-to guides/How to define alarm and triggers.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to define alarm and triggers",permalink:"/docs/How-to guides/How to define alarm and triggers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"How to define alarm triggers"},sidebar:"tutorialSidebar",previous:{title:"How to use dashboard variables",permalink:"/docs/How-to guides/How to use dashboard variables"},next:{title:"How to update device firmware",permalink:"/docs/How-to guides/How to update device firmware"}},o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Alarm definition",id:"alarm-definition",level:2},{value:"General options",id:"general-options",level:3},{value:"Rule definition",id:"rule-definition",level:3},{value:"Notifications",id:"notifications",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"how-to-define-alarm-triggers",children:"How to define alarm triggers"}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Biotz provides alarm generation and notification capabilities based on the data received in the data ingestion flows. The alarm trigger or rules are evaluated against each received data observation, and when an alarm is triggered the corresponding users are notified."}),"\n",(0,n.jsx)(i.p,{children:"This guide explains how to define the rules that decide when an alarm is triggered and how to specify the list of users that must be notified."}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(i.p,{children:"In order to define the alarm triggers you need to have a device-type with at least one message-type and message type schema."}),"\n",(0,n.jsx)(i.p,{children:"The alarm trigger will apply to all the devices of a certain device type no matter if they were created before or after defining the trigger."}),"\n",(0,n.jsx)(i.h2,{id:"alarm-definition",children:"Alarm definition"}),"\n",(0,n.jsx)(i.p,{children:"The alarm triggers are defined in the \u201cAlarm triggers\u201d subsection under the \u201cSetup\u201d section."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Creating panels",src:t(5641).A+"",width:"244",height:"248"})})}),"\n",(0,n.jsx)(i.p,{children:"To create the first alarm click on the \u201cNew alarm trigger\u201d button.If you want to create a new one you can also click on the top right hand corner."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Creating panels",src:t(5417).A+"",width:"1562",height:"323"})})}),"\n",(0,n.jsx)(i.p,{children:"Defining an alarm requires three steps: general options, rule definition and notification settings."}),"\n",(0,n.jsx)(i.h3,{id:"general-options",children:"General options"}),"\n",(0,n.jsx)(i.p,{children:"The following fields have to be completed:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Name: an identifier for the trigger. This name will be displayed in the triggered alarm list and notifications."}),"\n",(0,n.jsx)(i.li,{children:"Level: the criticality or severity of the alarm. The possible values are: alert, critical, emergency, info and warning."}),"\n",(0,n.jsx)(i.li,{children:"Device type: the device type for which the alarm trigger will be evaluated. The trigger will apply to all the devices of a certain type."}),"\n",(0,n.jsx)(i.li,{children:"Message type: the message type that will be used to define the trigger rule. The trigger will only be evaluated when the devices send data for the selected message type."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"<screenshot>"}),"\n",(0,n.jsx)(i.h3,{id:"rule-definition",children:"Rule definition"}),"\n",(0,n.jsx)(i.p,{children:"Each individual data observation is evaluated against the rule defined in this section. Those rules are composed of condition and group blocks:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Conditions"})}),"\n",(0,n.jsx)(i.p,{children:"For each attribute in the message-type, one or more conditions can be specified. The \u201cattribute \u201c values are compared with the \u201cvalue\u201d using the \u201coperator\u201d."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"The available operators differ depending on the attribute type:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["numeric: ",(0,n.jsx)(i.code,{children:">, >=, <, <=, =, <>"})]}),"\n",(0,n.jsxs)(i.li,{children:["boolean: ",(0,n.jsx)(i.code,{children:"<>, ="})]}),"\n",(0,n.jsxs)(i.li,{children:["text: ",(0,n.jsx)(i.code,{children:"<>, ="})]}),"\n",(0,n.jsxs)(i.li,{children:["others: ",(0,n.jsx)(i.code,{children:"None"})]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["\u200d",(0,n.jsx)(i.strong,{children:"Groups"})]}),"\n",(0,n.jsx)(i.p,{children:"Multiple conditions can be grouped. When doing so, a logical operator has to be chosen to define the relation between the grouped conditions."}),"\n",(0,n.jsx)(i.p,{children:"The following are the available logical operators:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"AND: The group is considered truthy if all the individual conditions are met."}),"\n",(0,n.jsx)(i.li,{children:"OR: The group is considered truthy if at least one individual condition is met."}),"\n",(0,n.jsx)(i.li,{children:"NOT AND: The group is considered truthy if none or some, but not all individual conditions are met\n-NOT OR: The group is considered truthy if none of the individual conditions is met."}),"\n"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"CONDITION A"}),(0,n.jsx)(i.th,{children:"CONDITION B"}),(0,n.jsx)(i.th,{children:"AND"}),(0,n.jsx)(i.th,{children:"NOT AND"}),(0,n.jsx)(i.th,{children:"OR"}),(0,n.jsx)(i.th,{children:"NOT OR"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"0"})]})]})]}),"\n",(0,n.jsx)(i.p,{children:"Conditions and groups can be nested to build complex rules."}),"\n",(0,n.jsx)(i.h3,{id:"notifications",children:"Notifications"}),"\n",(0,n.jsx)(i.p,{children:"By default no users will be notified when an alarm is triggered. The triggered alarm will be persisted and viewable in the alarms list, but none of the users will get a message. To change that, the \u201cEdit users\u201d button can be used.  Pressing the button will open a sidebar where the list of users to be notified can be selected."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"The selected users will get a web notification and an email when an alarm is triggered."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Groups",src:t(3108).A+"",width:"394",height:"197"})})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.p,{children:"To avoid overwhelming the user with notifications, a rate limit is applied to the notifications sent to the users. The users will be notified at most once every 15 minutes for each device an alarm trigger definition. Additional notifications will be ignored, but the alarm will be persisted and viewable in the alarms list."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5641:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/alarm-triggers-013cc3b4c4ba368837039873dadc32ca.png"},5417:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/new-alarm-trigger-946e9b5936d374848785ffdf86d3d9de.png"},3108:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/select-user-18a55047740179573ffdeae6b53c41d2.png"},8453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>a});var n=t(6540);const r={},s=n.createContext(r);function d(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);