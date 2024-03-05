"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[748],{469:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=i(4848),s=i(8453);const a={},r=void 0,o={id:"Tutorials/Getting started/Step 3 - Creating a Schema",title:"Step 3 - Creating a Schema",description:"---",source:"@site/docs/Tutorials/Getting started/Step 3 - Creating a Schema.md",sourceDirName:"Tutorials/Getting started",slug:"/Tutorials/Getting started/Step 3 - Creating a Schema",permalink:"/academy/docs/Tutorials/Getting started/Step 3 - Creating a Schema",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Step 2 - Creating a Message Type",permalink:"/academy/docs/Tutorials/Getting started/Step 2 - Creating a Message Type"},next:{title:"Step 4 - Creating  a device",permalink:"/academy/docs/Tutorials/Getting started/Step 4 - Creating  a device"}},c={},h=[];function l(e){const t={br:"br",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Now that you have created a Message Type, you have to define the shape of the data for that Message Type. This is what is called Schemas in Biotz. Schemas are just the definition of the structure of what your device will send to the platform. This helps Biotz ingest and process your data effectively."}),"\n",(0,n.jsxs)(t.p,{children:["Schemas have a set of data types you can choose in order to define the shape of the data you are sending. It ranges from simple types such as ",(0,n.jsx)(t.strong,{children:"Integers"}),", ",(0,n.jsx)(t.strong,{children:"Decimals"})," and ",(0,n.jsx)(t.strong,{children:"Boolean"})," to more complex types like ",(0,n.jsx)(t.strong,{children:"Objects/Dictionaries"})," and ",(0,n.jsx)(t.strong,{children:"Collection/Arrays"}),". Each with their own properties and restrictions. This tutorial will not dive into the intricacies of each data type but if you wish to get a more detailed explanation about them, please refer to its reference guide <add link to message type schema reference here>. With that said, assuming you are still in the ",(0,n.jsx)(t.strong,{children:"My test message type"})," page (the one you created in the previous step), click on ",(0,n.jsx)(t.strong,{children:"New schema"}),". Once you have done that you will see the following page:"]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(2369).A+"",width:"971",height:"476"})})}),"\n",(0,n.jsxs)(t.p,{children:["Schemas are defined with items. They can be a single item or multiple items depending on ",(0,n.jsx)(t.strong,{children:"Item type"})," you select. To create your first item click on ",(0,n.jsx)(t.strong,{children:"Add new item"}),". This will open up a dropdown with the different item data types you can choose from. For the purpose of this tutorial select the ",(0,n.jsx)(t.strong,{children:"Object"})," item type."]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(1802).A+"",width:"544",height:"305"})})}),"\n",(0,n.jsxs)(t.p,{children:["After doing so, you will see that a new button appears below the new selected item type. That is because the ",(0,n.jsx)(t.strong,{children:"Object"})," item type is a complex type and can have child items. Now, click on ",(0,n.jsx)(t.strong,{children:"Add new item"}),"."]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(8809).A+"",width:"1236",height:"415"})})}),"\n",(0,n.jsx)(t.p,{children:"There is a new element on the screen now named Key name. It is a special property of Objects since they are composed of key value pairs. However, bear in mind that you are just defining the structure, not the actual values in this section. Now, select the Decimal item. This will show up yet another element on the screen named Item name. This is the name or rather the internal name that Biotz will use to store and reference your ingested data. So, keep in mind that what you can type in this input element is very restricted <link to schema restrictions>. With that out of the way, input the following information for each field:"}),"\n",(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Key name: hum"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Item name: humidity"}),(0,n.jsx)(t.br,{}),"\n","\xa0"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You might have noticed that to your right there are two checkboxes:"}),"\n",(0,n.jsx)(t.p,{children:"\xa0\n\u200d"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Madatory?:"})," When this is checked, this item key is going to be always required inside the object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Can be null?:"})," When this is checked, a null value for this key is acceptable in the object."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\xa0\nBiotz will use this information to validate the data it receives from your device. In case the shape of the data does not fulfil the defined schema constraints, it will be rejected and discarded. For this tutorial check ",(0,n.jsx)(t.strong,{children:"Mandatory?"})," and leave ",(0,n.jsx)(t.strong,{children:"Can be null?"})," unchecked."]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(5995).A+"",width:"1236",height:"415"})})}),"\n",(0,n.jsx)(t.p,{children:"Now, add another item and fill in the following details:"}),"\n",(0,n.jsx)(t.p,{children:"\u200d"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Item type: Decimal"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Key name: temp"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Item name: temperature"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Mandatory?: checked"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Can be null?: unchecked."})}),"\n"]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(4385).A+"",width:"1236",height:"415"})})}),"\n",(0,n.jsx)(t.p,{children:"Last but not least, we have a special item that serves to create a reliable timeline of the data we receive from your devices. For each object created, we can add more than one timestamp, but only one with the Payload timestamp? option checked. This will mark the item as responsible for telling the time of collection by your device. In case this item is not provided, Biotz will add one, but note that this is from when we received the data and may not be as accurate as the one from the device."}),"\n",(0,n.jsxs)(t.p,{children:["For this tutorial we are not going to add this item, but in case you want to add it you will notice that when you check that option the ",(0,n.jsx)(t.strong,{children:"Mandatory?"})," and ",(0,n.jsx)(t.strong,{children:"Can be null?"})," options become ",(0,n.jsx)(t.strong,{children:"read-only"})," and the item name is set to ",(0,n.jsx)(t.strong,{children:"timestamp"})," by default, this is because Biotz makes some assumptions about this special item."]}),"\n",(0,n.jsx)("div",{class:"tutorial-image-container",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Confirm",src:i(2085).A+"",width:"1153",height:"137"})})}),"\n",(0,n.jsxs)(t.p,{children:["At this point, you have finished defining the schema you will use in this tutorial. It is now time to give it a name and finally create it. On the top of the screen, before the schema definition, you will have an input to write the name of the schema. Name it ",(0,n.jsx)(t.strong,{children:"My test schema"})," and click on ",(0,n.jsx)(t.strong,{children:"Create"})," down below. Once you have done that, you will have a schema on your list for the Message Type ",(0,n.jsx)(t.strong,{children:"My test message type"}),". Now you have all the basic ingredients that define your data ingestion flow. In the next step you will ",(0,n.jsx)("a",{href:"./Step 4 - Creating  a device",target:"_self",children:"create a device"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"\u200d"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8809:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AddNewItem-14b937402a27f1aa35a3c4753b4ba4ea.png"},1802:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AllSchemas-92fc2fe0708efa2802ebaf5cd745b4c5.png"},5995:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/SchemaDefinition-95b94d449e74e2186c171a2b68f8c6c6.png"},4385:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/SchemaDefinition2-1bb18567f4fb7bb975dadd4f87713990.png"},2085:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/SpecialItem-d3636b7d51c5cfb370d7ac30ef5de680.png"},2369:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dataIngestionForm-74cc30349b6ef124002bfaec6896eb41.png"},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);