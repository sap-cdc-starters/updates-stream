"use strict";(self.webpackChunkupdates_stream=self.webpackChunkupdates_stream||[]).push([[85],{4247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7294),c=n(6010),a=n(1944),l=n(5281),s=n(3285),o=n(9617),u=n(9407);const i="mdxPageWrapper_j9I6";function m(e){const{content:t}=e,{metadata:{title:n,description:m,frontMatter:d}}=t,{wrapperClassName:p,hide_table_of_contents:f}=d;return r.createElement(a.FG,{className:(0,c.Z)(p??l.k.wrapper.mdxPages,l.k.page.mdxPage)},r.createElement(a.d,{title:n,description:m}),r.createElement(s.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,c.Z)("row",i)},r.createElement("div",{className:(0,c.Z)("col",!f&&"col--8")},r.createElement("article",null,r.createElement(o.Z,null,r.createElement(t,null)))),!f&&t.toc.length>0&&r.createElement("div",{className:"col col--2"},r.createElement(u.Z,{toc:t.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},4744:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7462),c=n(7294);const a=e=>{if("undefined"!=typeof window&&"undefined"!=typeof document){const t=n(5171).default;return c.createElement(t,(0,r.Z)({theme:"flat",displayDataTypes:!1,style:{fontSize:"1.3rem"}},e))}return null}},471:(e,t,n)=>{n.r(t),n.d(t,{API:()=>k,GigyaContext:()=>w,GigyaRequest:()=>C,TestUser:()=>h,useFetch:()=>p});var r=n(7294),c=n(9756),a=n(5329),l=n(4978),s=n(9878),o=n(9127),u=n(6536),i=n(4744);const m="link_tWyL";function d(e){let{url:t,params:n}=e;const r=[];for(const c in n)if(n[c]){const e=encodeURIComponent(c),t=encodeURIComponent(n[c]);r.push(e+"="+t)}return(0,u.U)(t,{referrerPolicy:"origin",credentials:"include",mode:"cors",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.join("&")}).pipe((0,l.w)((e=>e.ok?e.json():(0,c.of)({error:!0,message:`Error ${e.status}`,raw:e}))),(0,s.K)((e=>(console.error(e),(0,c.of)({error:!0,message:e.message})))),(0,o.U)((e=>e)))}function p(e){const[t,n]=(0,r.useState)(e),[c,a]=(0,r.useState)(0),l=E(d(t),[t,c]);return{response:l,fetch:()=>{n(e),a(c+1)},ResponseView:c?r.createElement(i.Z,{src:l,collapsed:!0}):r.createElement("div",null),ResponseConsumer:e=>{let{children:t}=e;return r.createElement("div",null,c?t:r.createElement("div",null))}}}function f(e){let{children:t,theme:n,transformCode:c,url:l,FetchLink:s,...o}=e;const[u,i]=(0,r.useState)(),[p,f]=(0,r.useState)(0),h=()=>{i(l),f(p+1)},g=r.useRef(null),v=((0,a.R)(g.current,"onClick"),E(d(u),[u,p])),y=p&&t?t(v):r.createElement("div",null);return r.createElement("div",null,s?r.createElement(s,{ref:g,onClick:h}):r.createElement("button",{ref:g,onClick:h,className:m},"Fetch"),y)}f.defaultProps={details:null};const E=(e,t)=>{const[n,c]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=e.subscribe(c);return()=>t.unsubscribe()}),t),n},h={accessToken:"st2.s.AcbHcsserw.-mNj3OQ36Ye7QWplY3-wS67zMUgWYQgjQQGX8g2o9K857KKRg-PMRx2PU5uck-LLM-G4S9EFbVcXBAanhrlmPw.hU_GGEpgkBGlVNO6M_rKgxKK71UmhlFHQpgZ-eEJWJWFjOHRb_RKxGF-6ZDF6c_PPHztLT1rcE_ardylCYYSGg.sc3"},g=r.createContext("accounts.gigya.com"),v=r.createContext(h),y=r.createContext({apiKey:"3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2"}),w=e=>{let{domain:t="accounts.gigya.com",apiKey:n="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2",userKey:c,userSecret:a,accessToken:l,children:s}=e;return r.createElement("div",null,r.createElement(g.Provider,{value:t},r.createElement(v.Provider,{value:{userKey:c,userSecret:a,accessToken:l}},r.createElement(y.Provider,{value:{apiKey:n}},s))))};function k(e){const[t,n]=(0,r.useState)(e);return r.createElement(i.Z,{src:{...t},onEdit:e=>{let{newSrc:t}=e;return n(t)},onDelete:e=>{let{newSrc:t}=e;return n(t)},onAdd:e=>{let{newSrc:t}=e;return n(t)}})}const C=e=>{const t=function(e,t){const n=r.useContext(g),c=r.useContext(v),{apiKey:a}=r.useContext(y),l=()=>{const r={apiKey:a,userKey:c.userKey,secret:c.userSecret,oauth_token:c.accessToken,format:"json"};return Object.keys(t).forEach((e=>r[e]=t[e])),{url:`https://${n}/${e}`,params:r}},[s,o]=(0,r.useState)(l);return(0,r.useEffect)((()=>{o(l())}),[e,t]),s}(e.api,e.params),[n,c]=(0,r.useState)(t),{response:a,fetch:l,responseView:s,ResponseConsumer:o}=p(t);return r.createElement("div",null,r.createElement("a",{onClick:l},"Fetch [",e.api,"]"),r.createElement(o,null,r.createElement(i.Z,{src:a,collapsed:!1,name:"result"}),a?(t=>e.children?e.children(t):r.createElement("div",null))(a):r.createElement("div",null)))}},6922:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const c={...n(471),React:r,...r}}}]);