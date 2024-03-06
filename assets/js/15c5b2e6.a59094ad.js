"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5968],{2193:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(4848),i=s(8453);const a={},r=void 0,o={id:"Tutorials/Getting started/Step 6 - Sending a data ingestion request",title:"Step 6 - Sending a data ingestion request",description:"Now that you have a token from Biotz Identity Provider, it is time to send actual data to Biotz. In this tutorial, as said before, you will simulate a device sending data using the terminal. The approach is basically the same as to retrieve a token, just an HTTP request to the http-forwarder service. It will take your request and re-route it into a queue to be processed when the system is available.",source:"@site/docs/Tutorials/Getting started/Step 6 - Sending a data ingestion request.md",sourceDirName:"Tutorials/Getting started",slug:"/Tutorials/Getting started/Step 6 - Sending a data ingestion request",permalink:"/academy/docs/Tutorials/Getting started/Step 6 - Sending a data ingestion request",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Step 5 - Authenticating  a device",permalink:"/academy/docs/Tutorials/Getting started/Step 5 - Authenticating  a device"},next:{title:"Step 7 - Displaying the data",permalink:"/academy/docs/Tutorials/Getting started/Step 7 - Displaying the data"}},d={},l=[];function h(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Now that you have a token from Biotz Identity Provider, it is time to send actual data to Biotz. In this tutorial, as said before, you will simulate a device sending data using the terminal. The approach is basically the same as to retrieve a token, just an HTTP request to the ",(0,n.jsx)(t.strong,{children:"http-forwarder"})," service. It will take your request and re-route it into a queue to be processed when the system is available."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.p,{children:["For the request to be accepted by the ",(0,n.jsx)(t.strong,{children:"http-forwarder"})," it needs three things:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"id_token"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The message type ",(0,n.jsx)(t.strong,{children:"internal name"})," for your device. This should be ",(0,n.jsx)(t.strong,{children:"mytestmessag"})," if you have been following this tutorial."]}),"\n",(0,n.jsxs)(t.li,{children:["Request ",(0,n.jsx)(t.strong,{children:"payload"}),". This is your device\u2019s data. The payload should have the shape/structure of the schema you defined previously. That means, an ",(0,n.jsx)(t.strong,{children:"Object"})," containing the keys ",(0,n.jsx)(t.strong,{children:"hum"}),", ",(0,n.jsx)(t.strong,{children:"temp"})," and ",(0,n.jsx)(t.strong,{children:"time"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In this case the ",(0,n.jsx)(t.strong,{children:"Object"})," is an JSON object since the ",(0,n.jsx)(t.strong,{children:"mytestmessag"})," definition was configured with the ",(0,n.jsx)(t.strong,{children:"JSON"})," encoding."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Now, the request is very simple, you will send just a single sample of data (a single request in this case) to the platform. Here is an example using both HTTPie and cURL."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="HTTPie"',children:"http --auth-type bearer \\\n--auth ~YOUR ID_TOKEN~ \\\nPOST https://ingestion-http.biotz.io/api/device/publish/data/mytestmessag \\\nhum=20.5 temp=25.6\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="cURL"',children:'curl --header "Content-Type: application/json" \\\n--header "Authorization: Bearer ~YOUR ID_TOKEN~" \\\n--request POST \\\n--data \'{"hum": 20.5, "temp": 25.6}\' \\\nhttps://ingestion-http.biotz.io/api/device/publish/data/~INTERNAL NAME OF MESSAGE_TYPE~\n'})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"The response should look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n\t"success?": true,\n\t"details": {}\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["If that is the response you got, then the request was successful. Now your data should be available on the platform. To see that, in the next step you will ",(0,n.jsx)("a",{href:"./Step 7 - Displaying the data",target:"_self",children:"create a dashboard"})," to display your data."]}),"\n",(0,n.jsx)(t.p,{children:"\u200d"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);