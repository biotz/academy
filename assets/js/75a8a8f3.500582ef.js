"use strict";(self.webpackChunkacademy=self.webpackChunkacademy||[]).push([[9814],{9015:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>h,contentTitle:()=>t,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var n=s(4848),r=s(8453);const d={sidebar_position:7,sidebar_label:"How to use dashboard variables"},t="How to use dashboard variables",i={id:"How-to guides/How to use dashboard variables",title:"How to use dashboard variables",description:"Introduction",source:"@site/docs/How-to guides/How to use dashboard variables.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to use dashboard variables",permalink:"/docs/How-to guides/How to use dashboard variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"How to use dashboard variables"},sidebar:"tutorialSidebar",previous:{title:"How to create a dashboard",permalink:"/docs/How-to guides/How to create a dashboard"},next:{title:"How to define alarm triggers",permalink:"/docs/How-to guides/How to define alarm and triggers"}},h={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Define dashboard variables",id:"define-dashboard-variables",level:2},{value:"Use dashboard variables",id:"use-dashboard-variables",level:2}];function l(e){const a={h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"how-to-use-dashboard-variables",children:"How to use dashboard variables"}),"\n",(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(a.p,{children:"Dashboard variables allow users to make dashboard panels more dynamic. Instead of hardcoding specific devices in the panels, device selectors can be added to the dashboard. Those selectors are displayed in the main dashboard view, and the selected value can be changed by the final users at any time. Changing the value updates the data for all the panels that are using that variable."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.p,{children:"The dashboard variables are defined at dashboard level. Then they can be used when defining the panel queries."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(a.p,{children:"The dashboard has to be pre-created, and at least one device is needed."}),"\n",(0,n.jsx)(a.h2,{id:"define-dashboard-variables",children:"Define dashboard variables"}),"\n",(0,n.jsx)(a.p,{children:"The variables are created from the dashboard edition view. For that click on the \u201cpencil\u201d icon in the dashboard toolbar."}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Dashboard Toolbars",src:s(6626).A+"",width:"427",height:"136"})})}),"\n",(0,n.jsx)(a.p,{children:"Creating a variable only requires specifying a name and selecting a device-type."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.p,{children:"The dashboard variables are always device-type specific to ensure that all the selectable devices are compatible with the dashboard panel queries in which the variable is used."}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Documentation Dasboard",src:s(8889).A+"",width:"548",height:"322"})})}),"\n",(0,n.jsx)(a.p,{children:"Up to 4 variables can be defined."}),"\n",(0,n.jsx)(a.h2,{id:"use-dashboard-variables",children:"Use dashboard variables"}),"\n",(0,n.jsx)(a.p,{children:"Once a dashboard variable is defined it can be used when defining dashboard panel queries. The same variable can be used in multiple queries and panels."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(a.p,{children:"For that, click on the \u201cVariable, select a variable defined in the dashboard\u201d in the query builder. Then select a specific variable from the list. Continue with the rest of the form as when selecting a specific device."}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Specific Device",src:s(3451).A+"",width:"1222",height:"559"})})}),"\n",(0,n.jsx)(a.p,{children:"The dashboard variable is now ready to use. Changing the device in the dashboard view will update the corresponding panels."})]})}function c(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6626:(e,a,s)=>{s.d(a,{A:()=>n});const n="data:image/png;base64,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"},8889:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/documentation-dashboard-9b0bbf74d221c942c6d819edc70b0226.png"},3451:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/specific-device-01a430be4a2032fa0f480e5a0d9c093c.png"},8453:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>i});var n=s(6540);const r={},d=n.createContext(r);function t(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);