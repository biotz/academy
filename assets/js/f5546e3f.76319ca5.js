"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6363],{250:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const s={},r=void 0,o={id:"How-to guides/How to create a dashboard",title:"How to create a dashboard",description:"Introduction",source:"@site/docs/How-to guides/How to create a dashboard.md",sourceDirName:"How-to guides",slug:"/How-to guides/How to create a dashboard",permalink:"/academy/docs/How-to guides/How to create a dashboard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to configure and trigger a remote action in devices",permalink:"/academy/docs/How-to guides/How to configure and trigger a remote action in devices"},next:{title:"How to create a schema",permalink:"/academy/docs/How-to guides/How to create a schema"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a dashboard",id:"creating-a-dashboard",level:2},{value:"Creating panels",id:"creating-panels",level:2},{value:"General information",id:"general-information",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Query builder",id:"query-builder",level:6},{value:"Appearance",id:"appearance",level:6}];function c(e){const a={h2:"h2",h3:"h3",h6:"h6",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(a.p,{children:"Biotz provides a dashboarding tool that can be used to visualize the data coming from the devices."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.p,{children:"In order to create a dashboard having a device-type with at least one message type and schema is required. Having a device that has already sent some data is also recommended to visualize the created panels straight away and have a faster feedback loop."}),"\n",(0,t.jsx)(a.h2,{id:"creating-a-dashboard",children:"Creating a dashboard"}),"\n",(0,t.jsx)(a.p,{children:"Dashboards are created from the \u201cDashboards\u201d list. Just a name and an optional description are requested."}),"\n",(0,t.jsx)("div",{class:"tutorial-image-container",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Dashboards",src:n(362).A+"",width:"681",height:"430"})})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Dashboards",src:n(362).A+"",width:"681",height:"430"})}),"\n",(0,t.jsx)(a.p,{children:"When clicking on \u201ccreate\u201d an empty dashboard is created."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Empty dashboard",src:n(3672).A+"",width:"1600",height:"460"})}),"\n",(0,t.jsx)(a.h2,{id:"creating-panels",children:"Creating panels"}),"\n",(0,t.jsx)(a.p,{children:"A dashboard is composed of one or more panels. To create a new one use the \u201cNew panel\u201d button and select the type of panel to create."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.p,{children:"At the moment the available panel types are the following: time-series, pie chart and gauge."}),"\n",(0,t.jsx)(a.h3,{id:"general-information",children:"General information"}),"\n",(0,t.jsx)(a.p,{children:"Name the panel and optionally set a description."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(a.p,{children:"(make this type dependent)"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Time series"})}),"\n",(0,t.jsx)(a.h6,{id:"query-builder",children:"Query builder"}),"\n",(0,t.jsx)(a.p,{children:"The query builder is used to define which data will the panel display.  The x-axis will always be the time, and the y axis will contain one or more time-series lines. Each line is defined by an independent query."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.p,{children:"Defining a query requires the following configuration:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Selecting a device or device variable. Each line in the chart can show the data of a single device. The device to be used can be fixed and defined at panel creation time, or determined by a dashboard variable (see this for more info)."}),"\n",(0,t.jsx)(a.li,{children:"Message type and attribute. Each line in the chart can show the data of a single message type attribute."}),"\n",(0,t.jsx)(a.li,{children:"Aggregation method. The method used to aggregate the devices data to adapt the number of displayed points to the user's screen size and zoom level."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Attribute type and Available aggregation methods"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Numeric: Count, maximum, minimum, mean, standard deviation, and sum."}),"\n",(0,t.jsx)(a.li,{children:"Boolean: Count"}),"\n",(0,t.jsx)(a.li,{children:"Text: Count"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a.p,{children:"The reason for aggregating the data is performance. Lets say a certain device is sending data observations every second, and the user wants to display the data of a whole month. That would result in 2,678,400 data points. Displaying so many data points would be technically impossible for the browser because of the limited amount of pixels that a screen can display. Also, it would be very CPU heavy. To avoid that, the dashboard panel aggregates data to adapt to the screen size and chosen zoom level."}),"\n",(0,t.jsx)(a.h6,{id:"appearance",children:"Appearance"}),"\n",(0,t.jsx)(a.p,{children:"The following appearance related options are available:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Enable/disable value with unit marker."}),"\n",(0,t.jsx)(a.li,{children:"Conditions for different styles, applies the first that's true"}),"\n",(0,t.jsx)(a.li,{children:"Color"}),"\n",(0,t.jsx)(a.li,{children:"Text to display"}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},362:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/Dashboards-fe506ed19f8bd0d7466a73e9365b4df2.png"},3672:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/EmptyDashboard-8e6228026c297301c9ed2d262d10a1a0.png"},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var t=n(6540);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);