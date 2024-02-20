"use strict";(self.webpackChunkupdates_stream=self.webpackChunkupdates_stream||[]).push([[466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={id:"intro",title:"Intro",sidebar_position:1,sidebar_label:"Intro",image:"/img/manuals.png",sidebar_class_name:"green"},l=void 0,o={unversionedId:"intro/intro",id:"intro/intro",title:"Intro",description:"Description",source:"@site/docs/intro/intro.md",sourceDirName:"intro",slug:"/intro/",permalink:"/docs/intro/",draft:!1,editUrl:"https://github.com/sap-cdc-starters/updates-stream/tree/main/docs/docs/intro/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Intro",sidebar_position:1,sidebar_label:"Intro",image:"/img/manuals.png",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"CDC Stream Updates",permalink:"/docs/category/intro"},next:{title:"IDX",permalink:"/docs/intro/idx"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Uid changes (see more)",id:"uid-changes-see-more",level:2},{value:"Account data update",id:"account-data-update",level:2},{value:"API",id:"api",level:2},{value:"Stream registration",id:"stream-registration",level:4},{value:"Api parameters",id:"api-parameters",level:6},{value:"Stream Scrolling",id:"stream-scrolling",level:4},{value:"Api parameters",id:"api-parameters-1",level:6},{value:"Query Syntax Specification",id:"query-syntax-specification",level:2},{value:"Supported clauses (must be ordered in the following way)",id:"supported-clauses-must-be-ordered-in-the-following-way",level:5},{value:"Query examples",id:"query-examples",level:2},{value:"Event Format",id:"event-format",level:2},{value:"Try for yourself",id:"try-for-yourself",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The updates stream returns a sorted list of changes made to accounts in a specific site group, in time order of application, Only the most recent change for a given account is guaranteed to be provided, for example if an account has had fields added, and then deleted, the API will not necessarily receive the intermediate state of the added account."),(0,n.kt)("p",null,"The updates stream can be used to listen for modifications of accounts for post processing or synchronization, a continuously polling of the updates stream is a reasonable approach for generating a real-time log for most applications."),(0,n.kt)("p",null,"The events stream supports following changes:"),(0,n.kt)("h2",{id:"uid-changes-see-more"},"Uid changes (",(0,n.kt)("a",{parentName:"h2",href:"/docs/intro/changes/uid"},"see more"),")"),(0,n.kt)("p",null,"Sync user id changes with down stream systems (",(0,n.kt)("a",{parentName:"p",href:"/docs/intro/changes/uid"},"see more"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"when an account is deleted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"when tow accounts merged .")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"when an account's uid is renamed.")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8_rhbWbzz9x_r48ZfTnyWI48majT6DzLZWIQWg_QerImc18OXX-cl6Gu1BbEB7b10M8xEGCvKa6WlUHjBqTE_z2vY4-lK_tDB_ZufeLHQ4XJinM1M_vz0-1o_WicGLPFlL9WrN1C3X0h7byrE9IliN8lvFrm25hT2s7Qf1mHMBhVzbY83yFxIEpRSKCqmbVKYUZbuN4CXD55bPWyLh0rCyHwTZI3H8xCkXZ-JdhiFIYo0pIOMMd6g8Tz2NUs6y2W4zLKIDRntKGOgdOPWlASkXGIR7Mbt-GDhZx-xdzBEgFCSaGQnBn7eAsNbHRgAwjck5k5_RntDj2b5eq9gKSMtsC9LaF9X_sfUVBEYMja0q4NRoviT_XebIjQ4vmlGCkKQdw21BR9N44obTOAmmfhSPrTCeBJEb-nH1-35sxcEkdJLY8RPPjd5_6E7crB71sKhriEa9ot9n-qpsEk-SyHX8WP0qFUdJTYNJ4rhJ5EzjwG9JNeP9EQent0a9UgmjrxXfc9Noem0gXdJxAnzFz5uS0gA665OpPWkgAWpzHYy-FZzRslDuDORIQ-gynZWOIUcllQvCdoP-SiJpK-N839fMgDewQCnQmbGFvIO4uvXcyiRvOXXHyg575_is1h_I2m5MV0qVkyazaO8oKtuP-hIhG4Zo__jP9s6yaDG0jg9_Ud4O7qDfOTMZ1DKLEt8z0Rujo5wfbiCMS-j21lkrNdZ2Ps_zEGGDuR1u8hVJwtmVPqPoOml0G1R3K4X_LYFl8Hu5T1uKZglTuX5Fr1sAqFxeI2_I9RYUiYpdd7SdpK6xtmtBPAUfGUwV4QXZbOWAaw13BzJHYjcwYQ32RykLguEO8hMl2a46X7T3FN-NfHN6YXVfaDT4Rv5sBNHrNq3iZKQz5uyK1CBpemhwmSCyO4o8j9VlYq1OBbQKDMfoaGxFbaJO-YEpAHV0EUaIwtBTlwmZu1WHyigqiorqq3I5oXR1PIDTNxUN4PbVqAbw3kqBG3iDtaC_3jdiviYWefoxxHWc8zmp5xzSKAS6Oz_pTfim5Qc_4kz0JuA50U96M9XEvOgOdyqB1zV7VR8ZqJR8eWSZ_SBFCWP7_GEzJ0h9We3bLx8xUTXVfsgRLeD1f4zm6EE"},(0,n.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNqll9-P2jgQx_-VKFUlKlGU3yT7cA-UrXQn9k4n6L0c9-DEE7AwNuc43eXK_u_nBNJ1HBJQm0goZD7-ejz2eJxvdsYx2A_2RqDD1lrN18yyln8_rhbWbzz9x_r48ZfTnyWI48majT6DzLZWIQWg_QerImc18OXX-cl6Gu1BbEB7b10M8xEGCvKa6WlUHjBqTE_z2vY4-lK_tDB_ZufeLHQ4XJinM1M_vz0-1o_WicGLPFlL9WrN1C3X0h7byrE9IliN8lvFrm25hT2s7Qf1mHMBhVzbY83yFxIEpRSKCqmbVKYUZbuN4CXD55bPWyLh0rCyHwTZI3H8xCkXZ-JdhiFIYo0pIOMMd6g8Tz2NUs6y2W4zLKIDRntKGOgdOPWlASkXGIR7Mbt-GDhZx-xdzBEgFCSaGQnBn7eAsNbHRgAwjck5k5_RntDj2b5eq9gKSMtsC9LaF9X_sfUVBEYMja0q4NRoviT_XebIjQ4vmlGCkKQdw21BR9N44obTOAmmfhSPrTCeBJEb-nH1-35sxcEkdJLY8RPPjd5_6E7crB71sKhriEa9ot9n-qpsEk-SyHX8WP0qFUdJTYNJ4rhJ5EzjwG9JNeP9EQent0a9UgmjrxXfc9Noem0gXdJxAnzFz5uS0gA665OpPWkgAWpzHYy-FZzRslDuDORIQ-gynZWOIUcllQvCdoP-SiJpK-N839fMgDewQCnQmbGFvIO4uvXcyiRvOXXHyg575_is1h_I2m5MV0qVkyazaO8oKtuP-hIhG4Zo__jP9s6yaDG0jg9_Ud4O7qDfOTMZ1DKLEt8z0Rujo5wfbiCMS-j21lkrNdZ2Ps_zEGGDuR1u8hVJwtmVPqPoOml0G1R3K4X_LYFl8Hu5T1uKZglTuX5Fr1sAqFxeI2_I9RYUiYpdd7SdpK6xtmtBPAUfGUwV4QXZbOWAaw13BzJHYjcwYQ32RykLguEO8hMl2a46X7T3FN-NfHN6YXVfaDT4Rv5sBNHrNq3iZKQz5uyK1CBpemhwmSCyO4o8j9VlYq1OBbQKDMfoaGxFbaJO-YEpAHV0EUaIwtBTlwmZu1WHyigqiorqq3I5oXR1PIDTNxUN4PbVqAbw3kqBG3iDtaC_3jdiviYWefoxxHWc8zmp5xzSKAS6Oz_pTfim5Qc_4kz0JuA50U96M9XEvOgOdyqB1zV7VR8ZqJR8eWSZ_SBFCWP7_GEzJ0h9We3bLx8xUTXVfsgRLeD1f4zm6EE?type=png",alt:null}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"account-data-update"},"Account data update"),(0,n.kt)("p",null,"Sync account changes with down stream systems (",(0,n.kt)("a",{parentName:"p",href:"/docs/intro/changes/data"},"see more"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Change type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"upsert"),(0,n.kt)("td",{parentName:"tr",align:"center"},"when a user record is updated or created")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"login"),(0,n.kt)("td",{parentName:"tr",align:"center"},"when a user successfully logged in.")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp10MFqwzAMBuBXETol0L5ADoOWZrCxjm1pb764ttIYEjvYMlup--5zHRhsMHwx8udfQldUThM2ePZyHuCwExagq9rDCzy7Uw3r9QOk90j-krbVI7EaILAnOdVwl9sFHJ92aVN9kNTQx3EEqZSLlkP9x7SLoUmaH1RDSWoX1cVTUN7MbJwNaV8dZy2ZQLtPu_QFOc8ldrN8ePOuNyP9S0v4vlhIr_TFCbp7Sdh8WDCucCKfB9J5CdfygjzQRAKbfO2dp8AChb1lKSO77mIVNuwjrTCWljsj8_am38VWG3Yem16OgW7f9fB2WQ"},(0,n.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNp10MFqwzAMBuBXETol0L5ADoOWZrCxjm1pb764ttIYEjvYMlup--5zHRhsMHwx8udfQldUThM2ePZyHuCwExagq9rDCzy7Uw3r9QOk90j-krbVI7EaILAnOdVwl9sFHJ92aVN9kNTQx3EEqZSLlkP9x7SLoUmaH1RDSWoX1cVTUN7MbJwNaV8dZy2ZQLtPu_QFOc8ldrN8ePOuNyP9S0v4vlhIr_TFCbp7Sdh8WDCucCKfB9J5CdfygjzQRAKbfO2dp8AChb1lKSO77mIVNuwjrTCWljsj8_am38VWG3Yem16OgW7f9fB2WQ?type=png",alt:null}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h4",{id:"stream-registration"},"Stream registration"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html?locale=en-US"},"/accounts.stream.create")),(0,n.kt)("p",null,"use this endpoint to create a registration for account updates stream."),(0,n.kt)("h6",{id:"api-parameters"},"Api parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"query"),(0,n.kt)("td",{parentName:"tr",align:"center"},"an SQL-like query specifying the events to retrieve. Please refer to the  ",(0,n.kt)("a",{parentName:"td",href:"#query-syntax-specification"},"Query language specification")," section bellow."),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"select * from changelog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"since"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Unix time, represent earliest time of events in UTC, limited to now-30d"),(0,n.kt)("td",{parentName:"tr",align:"center"},"long represents a UTC time in milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"center"},"now-10m")))),(0,n.kt)("h4",{id:"stream-scrolling"},"Stream Scrolling"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/cbf4b101bc1d427da0e257e364da1c36.html?locale=en-US"},"/accounts.stream.read")),(0,n.kt)("p",null,"use this endpoint to fetch next batch of an existing stream."),(0,n.kt)("h6",{id:"api-parameters-1"},"Api parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cusrsorId"),(0,n.kt)("td",{parentName:"tr",align:null},"A token identifier for the next batch of results"),(0,n.kt)("td",{parentName:"tr",align:null},"string    (optional)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"results count limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int   (optional)")))),(0,n.kt)("h2",{id:"query-syntax-specification"},"Query Syntax Specification"),(0,n.kt)("p",null,"Same as other ",(0,n.kt)("a",{parentName:"p",href:"https://developers.gigya.com/display/GD/accounts.search+REST#accounts.searchREST-QuerySyntaxSpecification:"},"gigya queries"),"\nwith the following specifications"),(0,n.kt)("h5",{id:"supported-clauses-must-be-ordered-in-the-following-way"},"Supported clauses (must be ordered in the following way)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select clause",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"uid"),(0,n.kt)("li",{parentName:"ul"},"type"))),(0,n.kt)("li",{parentName:"ul"},"From clause",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"changelog"))),(0,n.kt)("li",{parentName:"ul"},"Where clause",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"uid"),(0,n.kt)("li",{parentName:"ul"},"type"))),(0,n.kt)("li",{parentName:"ul"},"Limit clause",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"specify the maximum number of a batch size."),(0,n.kt)("li",{parentName:"ul"},"if not specified, the default is 300. The maximum number of results that will be returned is 10000;."),(0,n.kt)("li",{parentName:"ul"},"setting a limit higher than 10000 will have no affect on number of results."),(0,n.kt)("li",{parentName:"ul"},"there is no guarantee of the exact number in batch (TODO rephrase)")))),(0,n.kt)("h2",{id:"query-examples"},"Query examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from changelog where uid = '13' limit 500\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from changelog where type in ('upsert') \n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from changelog where type in ('delete', 'move', 'merge') \n")),(0,n.kt)("h2",{id:"event-format"},"Event Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uid")," : the event's subject."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"operation"),": the type of operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"details")," : json patch format that describing the data changes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uid changes details")," : ",(0,n.kt)("a",{parentName:"li",href:"changes/uid#changes-details-format"},"see here"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "results": [\n    {\n      "uid": "123",\n      "operation": "upsert"    \n    },\n    {\n      "uid": "0d3034fc1bb944a7a70362cfdb61af55",\n      "operation": "upsert"\n    },\n    {\n      "uid": "gigyaumtests+q50co3pwagv2ixht",\n      "operation": "delete",\n      "details": [".."]\n    },\n    {\n      "uid": "8bc3f6984513471e8dc4ca4c6e8db049",\n      "operation": "merge",\n      "details": [".."]\n    }\n  ],\n  "nextCursorId": "Bub3RpZmljYXRpb25dXG4gIEEgLS0-IHx1aWQ6J2EnLCBuZXdVaWQ6J2InfCBTKChub3Rp"\n}\n    \n')),(0,n.kt)("h2",{id:"try-for-yourself"},"Try for yourself"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\n \n<GigyaContext {...TestUser} >\n  <GigyaRequest\n          api={"accounts.stream.create"}\n          params={{query: "select * from changelog limit 40"}}>\n    {response =>\n            <GigyaRequest\n                    api={"accounts.stream.read"}\n                    params={{cursorId: response.cursorId}}/>\n    }\n  </GigyaRequest>\n</GigyaContext>\n\n')))}c.isMDXComponent=!0}}]);