"use strict";(self.webpackChunkacademy=self.webpackChunkacademy||[]).push([[8837],{8813:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=n(4848),t=n(8453);const l={sidebar_position:3,sidebar_label:"Message-type Schema specification"},a="Message-type Schema specification",d={id:"Reference guides/Message-type Schema specification",title:"Message-type Schema specification",description:"This is the specification for the schema of a message-type. The users will have to specify a device-type, with one to many message-type. Each message-type will have one to many schemas.",source:"@site/docs/Reference guides/Message-type Schema specification.md",sourceDirName:"Reference guides",slug:"/Reference guides/Message-type Schema specification",permalink:"/docs/Reference guides/Message-type Schema specification",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Message-type Schema specification"},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/Reference guides/Glossary"},next:{title:"Developer API",permalink:"/docs/Reference guides/Developer API"}},r={},c=[{value:"Supported data types in Message-Types",id:"supported-data-types",level:2},{value:"Data types detailed specification",id:"data-types-detailed-specification",level:2},{value:"Unix timestamp, as integer",id:"unix-timestamp-as-integer",level:3},{value:"Examples",id:"examples",level:4},{value:"Unix timestamp, as text",id:"unix-timestamp-as-text",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Unix timestamp RFC-3339",id:"unix-timestamp-rfc-3339",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Integer",id:"integer",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Integer, as text",id:"integer-as-text",level:3},{value:"Examples",id:"examples-4",level:4},{value:"Integer, as hexadecimal text",id:"integer-as-hexadecimal-text",level:3},{value:"Examples",id:"examples-5",level:4},{value:"Decimal",id:"decimal",level:3},{value:"Examples",id:"examples-6",level:4},{value:"Decimal, as text",id:"decimal-as-text",level:3},{value:"Examples",id:"examples-7",level:4},{value:"Text",id:"text",level:3},{value:"Examples",id:"examples-8",level:4},{value:"Boolean",id:"boolean",level:3},{value:"Examples",id:"examples-9",level:4},{value:"Boolean, as text",id:"boolean-as-text",level:3},{value:"Examples",id:"examples-10",level:4},{value:"Boolean, as integer",id:"boolean-as-integer",level:3},{value:"Examples",id:"examples-11",level:4},{value:"Object",id:"object",level:3},{value:"Examples",id:"examples-12",level:4},{value:"Collection of identical items",id:"collection-of-identical-items",level:3},{value:"Examples",id:"examples-13",level:4},{value:"Collection of unrelated items",id:"collection-of-unrelated-items",level:3},{value:"Examples",id:"examples-14",level:4}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"message-type-schema-specification",children:"Message-type Schema specification"}),"\n",(0,s.jsx)(i.p,{children:"This is the specification for the schema of a message-type. The users will have to specify a device-type, with one to many message-type. Each message-type will have one to many schemas."}),"\n",(0,s.jsx)(i.p,{children:"This schema is the structure of the data that the device will be sending in each communication with Biotz. The definition provided in the schema creation in the web application is the one used to validate the incoming data. Also, this will be used to structure the specific database schema for the data to be stored in a structured way."}),"\n",(0,s.jsx)(i.h2,{id:"supported-data-types",children:"Supported data types in Message-Types"}),"\n",(0,s.jsxs)(i.p,{children:["At the moment Biotz offers support to a subset of MessagePack data types that are compatible with JSON format. See ",(0,s.jsx)(i.a,{href:"#data-types-detailed-specification",children:"Data types detailed specification"}),' below for additional details on each data type, or click on the individual data type names in the "Displayed in the UI" column.']}),"\n",(0,s.jsx)(i.p,{children:'The "DB Column Type" specifies the data type of the value stored in the database, once it has received and validated.'}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Displayed in UI"}),(0,s.jsxs)(i.th,{children:[(0,s.jsx)(i.a,{href:"https://json-schema.org/draft/2020-12/json-schema-core#name-instance-data-model",children:"JSON Schema"})," equivalent"]}),(0,s.jsxs)(i.th,{children:[(0,s.jsx)(i.a,{href:"https://msgpack.org/",children:"MessagePack"})," equivalent"]}),(0,s.jsx)(i.th,{children:"DB Column Type"}),(0,s.jsx)(i.th,{children:"Examples (in JSON syntax)"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#unix-timestamp-as-integer",children:"Unix timestamp, as integer"})}),(0,s.jsx)(i.td,{children:"number"}),(0,s.jsx)(i.td,{children:"int 64"}),(0,s.jsx)(i.td,{children:"timestamp"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"1712828630000"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#unix-timestamp-as-text",children:"Unix timestamp, as text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"timestamp"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"1712828630000"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#unix-timestamp-rfc-3339",children:"Unix timestamp RFC-3339"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"timestamp"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"2024-04-11T11:44:36.123Z"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#integer",children:"Integer"})}),(0,s.jsx)(i.td,{children:"number"}),(0,s.jsx)(i.td,{children:"int 32"}),(0,s.jsx)(i.td,{children:"integer"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"12345678"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#integer-as-text",children:"Integer, as text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"integer"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"12345678"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#integer-as-hexadecimal-text",children:"Integer, as hexadecimal text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"integer"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"3a2fbb589d"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#decimal",children:"Decimal"})}),(0,s.jsx)(i.td,{children:"number"}),(0,s.jsx)(i.td,{children:"float 64"}),(0,s.jsx)(i.td,{children:"double"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"12345.678"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#decimal-as-text",children:"Decimal, as text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"double"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"12345.678"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#text",children:"Text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"text"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'"Some value"'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#boolean",children:"Boolean"})}),(0,s.jsx)(i.td,{children:"boolean"}),(0,s.jsx)(i.td,{children:"bool"}),(0,s.jsx)(i.td,{children:"boolean"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"true"}),", ",(0,s.jsx)(i.code,{children:"false"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#boolean-as-text",children:"Boolean, as text"})}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"boolean"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:'"true"'}),", ",(0,s.jsx)(i.code,{children:'"false"'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#boolean-as-integer",children:"Boolean, as integer"})}),(0,s.jsx)(i.td,{children:"number"}),(0,s.jsx)(i.td,{children:"int"}),(0,s.jsx)(i.td,{children:"boolean"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"0"}),", ",(0,s.jsx)(i.code,{children:"1"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#object",children:"Object"})}),(0,s.jsx)(i.td,{children:"object"}),(0,s.jsx)(i.td,{children:"map"}),(0,s.jsx)(i.td,{children:"N/A"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'{"key1": 1, "key2": "val"}'})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#collection-of-identical-items",children:"Collection of identical items"})}),(0,s.jsx)(i.td,{children:"array (all elements are of the same type)"}),(0,s.jsx)(i.td,{children:"array (all elements are of the same type)"}),(0,s.jsx)(i.td,{children:"N/A"}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"[1, 2, 3]"})," ",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.code,{children:'["a", "b", "c"]'})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"#collection-of-unrelated-items",children:"Collection of unrelated items"})}),(0,s.jsx)(i.td,{children:"array (each elements can be of a different type)"}),(0,s.jsx)(i.td,{children:"array (each elements can be of a different type)"}),(0,s.jsx)(i.td,{children:"N/A"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'[1, "a", [2 3]]'})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"data-types-detailed-specification",children:"Data types detailed specification"}),"\n",(0,s.jsxs)(i.p,{children:["The table shown in the ",(0,s.jsx)(i.a,{href:"#supported-data-types",children:"Supported data types in Message-Types"})," section only shows a brief summary of the different data types, including some basic examples to help intuit their main properties. But it lacks a detailed specification of the properties of each data type, and the constraints enforce by Biotz on those data types (if any). This section describes in greater detail, for each of the supported types, what those properties and constraints are."]}),"\n",(0,s.jsx)(i.h3,{id:"unix-timestamp-as-integer",children:"Unix timestamp, as integer"}),"\n",(0,s.jsxs)(i.p,{children:['Biotz "Unix timestamp as integer" data type is a ',(0,s.jsx)(i.strong,{children:"64"})," bits signed integer value (signed long). Be aware that if you are JSON as the data encoding method, the ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#description",children:"maximum and minimum integer values that can be safely represented"})," are smaller than what this data type supports."]}),"\n",(0,s.jsxs)(i.p,{children:["It is based on the ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Unix_time",children:"Unix time"})," concept (commonly called Unix timestamp), in that it measures an offset from the Unix epoch. But there are two important differences from the standard Unix timestamp definition:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['The standard Unix timestamp uses the second as the unit of measure (although many systems allow fractions of seconds, if represented as a floating point number), while Biotz "Unix timestamp, as integer" uses milliseconds as the unit of measure. Thus the value ',(0,s.jsx)(i.code,{children:"12345"})," means 12345 seconds after the Unix epoch if using Standard Unix timestamps, but it means 1.2345 seconds after the epoch if using Biotz Unix timestamps."]}),"\n",(0,s.jsxs)(i.li,{children:["The standard Unix timestamp uses a 32 bits signed integer value, which means that it will roll over after 2038-01-19T03:14:07Z (known as the ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Year_2038_problem",children:"Year 2038 problem"}),'). Biotz "Unix timestamp, as integer", being 64 bits long, does not have such a problem even if the unit of measure is the millisecond.']}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:"1705491207432"})," corresponds to the ",(0,s.jsx)(i.code,{children:"2024-01-17T12:33:27.432Z"})," date and time (expressed in ISO-8601 UTC format)."]}),"\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:"2456444847987"})," corresponds to the ",(0,s.jsx)(i.code,{children:"2047-11-04T02:47:27.987Z"})," date and time (again in ISO-8601 UTC)."]}),"\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:"-2119381953432"})," corresponds to the ",(0,s.jsx)(i.code,{children:"1902-11-04T02:47:27.432Z"})," date and time (again in ISO-8601 UTC)."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"unix-timestamp-as-text",children:"Unix timestamp, as text"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Unix timestamp, as text" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#unix-timestamp-as-integer",children:"Unix timestamp, as integer"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#unix-timestamp-as-integer",children:"Unix timestamp, as integer"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a string of decimal digits, instead of as an actual (64 bits) signed integer number."}),"\n",(0,s.jsx)(i.li,{children:"The value must represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space."}),"\n",(0,s.jsxs)(i.li,{children:["There are limits on the minimum and maximum number of digits that the value can use:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The minimum number of digits is 1."}),"\n",(0,s.jsx)(i.li,{children:"The maximum number of digits is 20."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"The represented value must fint in a 64 bits signed integer."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-1",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:'"1705491207432"'})," corresponds to the ",(0,s.jsx)(i.code,{children:"2024-01-17T12:33:27.432Z"})," date and time (expressed in ISO-8601 UTC format)."]}),"\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:'"2456444847987"'})," corresponds to the ",(0,s.jsx)(i.code,{children:"2047-11-04T02:47:27.987Z"})," date and time (again in ISO-8601 UTC)."]}),"\n",(0,s.jsxs)(i.li,{children:["The value ",(0,s.jsx)(i.code,{children:'"-2119381953432"'})," corresponds to the ",(0,s.jsx)(i.code,{children:"1902-11-04T02:47:27.432Z"})," date and time (again in ISO-8601 UTC)."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"unix-timestamp-rfc-3339",children:"Unix timestamp RFC-3339"}),"\n",(0,s.jsxs)(i.p,{children:['Biotz "Unix timestamp RFC-3339" data type is a string value, whose content must conform to ',(0,s.jsx)(i.a,{href:"https://www.rfc-editor.org/rfc/rfc3339",children:"RFC-3339: Date and Time on the Internet: Timestamps"}),". In particular, it must comply with the ABNF grammar specified in ",(0,s.jsx)(i.a,{href:"https://www.rfc-editor.org/rfc/rfc3339#section-5.6",children:"Section 5.6: Internet Date/Time Format"}),". It must also comply with the restrictions stated ",(0,s.jsx)(i.a,{href:"https://www.rfc-editor.org/rfc/rfc3339#section-5.7",children:"Section 5.7: Restrictions"}),", with the additional restriction that ",(0,s.jsx)(i.code,{children:'"Z"'})," is the only ",(0,s.jsx)(i.code,{children:"time-offset"})," value accepted by Biotz. That is, only UTC time are accepted."]}),"\n",(0,s.jsx)(i.h4,{id:"examples-2",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"1985-04-12T23:20:50.52Z"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"2039-01-01T00:00:00Z"'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"integer",children:"Integer"}),"\n",(0,s.jsx)(i.p,{children:"32 bits signed integers."}),"\n",(0,s.jsxs)(i.p,{children:['Biotz "Integer" data type is a ',(0,s.jsx)(i.strong,{children:"32"})," bits signed integer value (signed int). Thus, the minimum possible value is ",(0,s.jsx)(i.code,{children:"-2147483648"})," and the maximum possible value is ",(0,s.jsx)(i.code,{children:"2147483647"}),")."]}),"\n",(0,s.jsx)(i.h4,{id:"examples-3",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"123"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-34567"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-2147483648"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"2147483647"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"integer-as-text",children:"Integer, as text"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Integer, as text" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#integer",children:"Integer"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#integer",children:"Integer"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a string of decimal digits, instead of as an actual (32 bits) signed integer number."}),"\n",(0,s.jsx)(i.li,{children:"The value must represent a valid integer number. That is, an optional leading negative sign, followed by decimal digits only. With no leading or trailing white space."}),"\n",(0,s.jsxs)(i.li,{children:["There are limits on the minimum and maximum number of digits that the value can use:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The minimum number of digits is 1."}),"\n",(0,s.jsx)(i.li,{children:"The maximum number of digits is 10."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"The represented value must fit in a 32 bits signed integer value."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-4",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"123"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-34567"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-2147483648"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"2147483647"'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"integer-as-hexadecimal-text",children:"Integer, as hexadecimal text"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Integer, as hexadecimal text" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#integer",children:"Integer"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#integer",children:"Integer"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a string of hexadecimal digits."}),"\n",(0,s.jsxs)(i.li,{children:["The value must represent a valid hexadecimal number. That is, an optional ",(0,s.jsx)(i.code,{children:"0x"})," prefix (using a lower case ",(0,s.jsx)(i.code,{children:"x"})," is mandatory), followed by hexadecimal digits only. With no leading or trailing white space. The hexadecimal can be upper or lower case."]}),"\n",(0,s.jsxs)(i.li,{children:["There are limits on the minimum and maximum number of digits that the value can use:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The minimum number of hexadecimal digits is 1."}),"\n",(0,s.jsx)(i.li,{children:"The maximum number of hexadecimal digits is 8."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-5",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0xaabbccdd"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"aabbccdd"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0xA"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"A"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"a"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0A"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0a"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0x1234aAbB"'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"decimal",children:"Decimal"}),"\n",(0,s.jsxs)(i.p,{children:['Biotz "Decimal" data type is a ',(0,s.jsx)(i.code,{children:"binary64"})," (double precision) floating point value, as specified in the ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Double-precision_floating-point_format",children:"IEEE 754 standard"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"examples-6",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"0"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"3.1415936535"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-2.71828182823536"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-13."})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:".123456789"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"0.123456789e23"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:".123456789e23"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-0.123456789e-23"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-.123456789e-23"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"-13.e23"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"1234"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"decimal-as-text",children:"Decimal, as text"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Decimal, as text" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#decimal",children:"Decimal"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#decimal",children:"Decimal"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a string of digits, with an optional sign, and optional fractional part"}),"\n",(0,s.jsx)(i.li,{children:"The value can only use decimal digits. Hexadecimal digits are not supported."}),"\n",(0,s.jsx)(i.li,{children:"The value must not contain leading or trailing white space."}),"\n",(0,s.jsxs)(i.li,{children:["There are limits on the minimum and maximum number of digits that the value can use:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The maximum number of decimal digits for the fractional part is 18."}),"\n",(0,s.jsx)(i.li,{children:"The maximum number of decimal digits for the integral (non-fractional) part is 309."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-7",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"3.1415936535"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-2.71828182823536"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-13."'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'".123456789"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"0.123456789e23"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'".123456789e23"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-0.123456789e-23"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-.123456789e-23"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"-13.e23"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"1234"'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"text",children:"Text"}),"\n",(0,s.jsx)(i.p,{children:'Biotz "Text" data type is a string value, containing valid UTF-8 code points. The maximum length of the value is 256 Kilobytes.'}),"\n",(0,s.jsx)(i.h4,{id:"examples-8",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"This is a text value"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"Este tambi\xe9n es un texto v\xe1lido \xe1\xe9\xed\xf3\xfa\xe4\xeb\xef\xf6\xfc \ud83d\ude07\ud83d\udc69\ud83c\udf82 \xaf\\_(\u30c4)_/\xaf"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'""'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsx)(i.p,{children:'Biotz "Boolean" data type is the standard JSON or MessagePack boolean data type.'}),"\n",(0,s.jsx)(i.h4,{id:"examples-9",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"true"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"false"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"boolean-as-text",children:"Boolean, as text"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Boolean, as text" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#boolean",children:"Boolean"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#boolean",children:"Boolean"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a string."}),"\n",(0,s.jsx)(i.li,{children:"The value must not contain leading or trailing white space."}),"\n",(0,s.jsxs)(i.li,{children:["The value must be either ",(0,s.jsx)(i.code,{children:'"true"'}),' or `"false". Lower case, upper case or mixed-case values are accepted.']}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-10",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"true"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"false"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"True"'})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:'"False"'})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"boolean-as-integer",children:"Boolean, as integer"}),"\n",(0,s.jsxs)(i.p,{children:['Except for the differences noted below, Biotz "Boolean, as integer" data type has the same properties as the ',(0,s.jsx)(i.a,{href:"#boolean",children:"Boolean"})," data type."]}),"\n",(0,s.jsxs)(i.p,{children:["The differences with the ",(0,s.jsx)(i.a,{href:"#boolean",children:"Boolean"})," data type are:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The value is represented as a 32 bits signed integer value."}),"\n",(0,s.jsxs)(i.li,{children:["If the signed integer value is equal to 0, then it is considered ",(0,s.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["If the signed integer value is not equal to 0, then it is considered ",(0,s.jsx)(i.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"examples-11",children:"Examples"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"0"})," (considered ",(0,s.jsx)(i.code,{children:"false"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"000"}),"  (considered ",(0,s.jsx)(i.code,{children:"false"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"255"})," (considered ",(0,s.jsx)(i.code,{children:"true"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-16384"})," (considered ",(0,s.jsx)(i.code,{children:"true"}),")"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"object",children:"Object"}),"\n",(0,s.jsx)(i.p,{children:"Object / Map / Dictionary: They are containers of the final properties, as the Collections-related type. In this case, we only expect key-value pairs as children elements that are like following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Keys can only be of type `String` (in order to give support for JSON serialization format)."}),"\n",(0,s.jsx)(i.li,{children:"Values cannot be of type `Collection of...` or `Object` type, as we do not support nesting properties in that way."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Null values: we can handle them in any format to be transformed to `nil` Clojure values."}),"\n",(0,s.jsx)(i.h4,{id:"examples-12",children:"Examples"}),"\n",(0,s.jsx)(i.h3,{id:"collection-of-identical-items",children:"Collection of identical items"}),"\n",(0,s.jsxs)(i.p,{children:["This data type is similar to JSON and Message pack arrays. It is an ordered collection of items. But contrary to regular JSON and MessagePack arrays, a ",(0,s.jsx)(i.em,{children:"Collection of identical items"})," has some additional constraints enforced by Biotz:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'The collection MUST contain a single item (we will call this item "the child item"); therefore it cannot be empty, and it cannot have more than one child item.'}),"\n",(0,s.jsxs)(i.li,{children:["The child item data type can only be either a ",(0,s.jsx)(i.a,{href:"#collection-of-unrelated-items",children:"Collection of unrelated items"}),", or an ",(0,s.jsx)(i.a,{href:"#object",children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["This constraints may seem a bit strange at first sight. But the use case for this data type is actually quite widespread. If you have a device that measures and stores the same set of values (e.g., temperature and humidity for a given timestamp), and then sends a bunch of such values together as an array of maps, where all of those maps have the same set of key names (e.g, ",(0,s.jsx)(i.code,{children:'"timestamp"'}),", ",(0,s.jsx)(i.code,{children:'"temperature"'})," and ",(0,s.jsx)(i.code,{children:'"humidity"'}),"), then you need this data type."]}),"\n",(0,s.jsx)(i.h4,{id:"examples-13",children:"Examples"}),"\n",(0,s.jsx)(i.h3,{id:"collection-of-unrelated-items",children:"Collection of unrelated items"}),"\n",(0,s.jsx)(i.p,{children:"Collection of unrelated items: collection of any kind of item, present just once."}),"\n",(0,s.jsx)(i.h4,{id:"examples-14",children:"Examples"})]})}function o(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>d});var s=n(6540);const t={},l=s.createContext(t);function a(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);