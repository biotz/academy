"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[981],{4006:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=s(4848),n=s(8453);const a={sidebar_position:4,sidebar_label:"Sending message to establish connection with Biotz"},o="Sending message to establish connection with Biotz",c={id:"Examples/MQTTX/Message",title:"Sending message to establish connection with Biotz",description:'To post messages, click on the "Post" icon and fill in the message and topic details.',source:"@site/docs/Examples/MQTTX/Message.md",sourceDirName:"Examples/MQTTX",slug:"/Examples/MQTTX/Message",permalink:"/docs/Examples/MQTTX/Message",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Sending message to establish connection with Biotz"},sidebar:"tutorialSidebar",previous:{title:"MQTTX configuration",permalink:"/docs/Examples/MQTTX/MQTTX configuration"}},r={},h=[{value:"Correct message",id:"correct-message",level:2},{value:"Incorrect message",id:"incorrect-message",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sending-message-to-establish-connection-with-biotz",children:"Sending message to establish connection with Biotz"}),"\n",(0,i.jsx)(t.p,{children:'To post messages, click on the "Post" icon and fill in the message and topic details.\nTo subscribe to a topic, click on the "Subscribe" icon and enter the name of the topic you wish to subscribe to.\nTo connect and disconnect in MQTTX you have to use this connect button'}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(9947).A+"",width:"1499",height:"236"})})}),"\n",(0,i.jsx)(t.p,{children:"This time you are going to do a test to publish a message and establish a connection with Biotz."}),"\n",(0,i.jsx)(t.p,{children:"You are going to create two different messages, one will be incorrect for the format that corresponds to it, and the other one will be the correct one and you will see the difference between both."}),"\n",(0,i.jsx)(t.h2,{id:"correct-message",children:"Correct message"}),"\n",(0,i.jsx)(t.p,{children:"In topic, there is a standard format of the MQTT topics for sending data from devices to the Biotz IoT Platform."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"biotz/1/0/CUSTOMER-ID/DEVICE-ID/publish/data/MESSAGE-TYPE-INTERNAL-NAME\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here it will be important to put the data you obtained from excel correctly. In CUSTOMER-ID you will have to write the id of the Customer Id that you have in the excel you obtain before, in device id, the Device Id that you have also obtained and you have in excel, publish/data leave it the same."}),"\n",(0,i.jsx)(t.p,{children:"To know what to write in MESSAGE-TYPE-INTERNAL-NAME, you have to go to app.biotz.io and data ingestion flow, enter the name of the device type that you are using and look at the internal name that corresponds to it, that will be what you will have to write in topic."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(9372).A+"",width:"1021",height:"203"})})}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(3537).A+"",width:"1247",height:"222"})})}),"\n",(0,i.jsx)(t.p,{children:"The topic should look something like this"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"biotz/1/0/805c2316-81c9-4cdd-aca5-c09eb2a79f35/09bdb2bc-991b-4c35-8a91-df1f6fe71f4d/publish/data/temp_lumin\n"})}),"\n",(0,i.jsx)(t.p,{children:"To send the message, first you will have to know the format in which you will have to send the message, for that you will have to go back to data ingestion flow and select the device type you are using and look at its attributes."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(9449).A+"",width:"379",height:"230"})})}),"\n",(0,i.jsx)(t.p,{children:"After looking at the attributes, you have to write the message between the braces. The message would be something like this."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(8952).A+"",width:"918",height:"154"})})}),"\n",(0,i.jsx)(t.p,{children:"After all this, you can send the message with the green button below."}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"box",src:s(320).A+"",width:"1278",height:"141"})})}),"\n",(0,i.jsx)(t.p,{children:"You will return to app.biotz.io, this time you will enter in developer tools, and inside developer tools in communications debugger. You will see this box with two pieces of information to fill in:"}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"box",src:s(3956).A+"",width:"423",height:"287"})})}),"\n",(0,i.jsx)(t.p,{children:"In select device, write the name with which we have sent the message and in the select message type the type of message that you have configured, in this case, temp-lumin."}),"\n",(0,i.jsx)(t.p,{children:"If you have sent the message you will see this:"}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"box",src:s(8676).A+"",width:"508",height:"214"})})}),"\n",(0,i.jsx)(t.p,{children:"As we can see if everything went well, the message will have been sent correctly and you will see something like this, the green circle will indicate that the message is correct, that means the format of the JSON payload is correct."}),"\n",(0,i.jsx)(t.h2,{id:"incorrect-message",children:"Incorrect message"}),"\n",(0,i.jsx)(t.p,{children:"Now let's modify something in the payload to send the message incorrectly to see the difference."}),"\n",(0,i.jsx)(t.p,{children:"You will need to replace what was inside the braces with this JSON payload:"}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(2835).A+"",width:"897",height:"137"})})}),"\n",(0,i.jsx)(t.p,{children:'Instead of "temperature", let\'s type "temperatura" and see how it changes.'}),"\n",(0,i.jsx)("div",{class:"tutorial-image-container",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Message",src:s(7211).A+"",width:"706",height:"240"})})}),"\n",(0,i.jsx)(t.p,{children:'When you go back to communication debugger now this is what will appear, as you can see, now the circle is orange and an error appears."no-valid-schema-found-for-given-message".This is because the format is not correct now.'}),"\n",(0,i.jsx)(t.p,{children:"With this tutorial you have learned how to establish a connection to Biotz via MQTTX."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2835:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/1-message-1abe720e4754d5b69f6f18514f9599f6.png"},8952:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/2-message-301bbc84f44cb4c9f690222dbe56f7ac.png"},9449:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/attributes-9f8a57d895ad46cadf6cba2bd78bbbb0.png"},9947:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/connect-disconnect-b1dd700ff793e03ddd961dbb5086ada3.png"},8676:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/correct-message-98e7cf84e693a9008c4b879471bc4ce6.png"},320:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/green-button-819911f20d6810231b45fd2703637c91.png"},7211:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/incorrect-message-c461b0c800ab12a8647c13838c0d8788.png"},3537:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/internal-name-dcbefa1d590042ef5b9845d7559f0d72.png"},9372:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/internal-name1-0031c8e534ac64117cd3f36ea7002537.png"},3956:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/two-pieces-d72fdbfa5079480bb71086050870182e.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var i=s(6540);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);