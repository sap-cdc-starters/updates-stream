"use strict";(self.webpackChunkupdates_stream=self.webpackChunkupdates_stream||[]).push([[195],{8568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7294),s=n(6010),a=n(9960),c=n(2263),l=n(3285);const o="features_t9lD";var u=n(471),i=n(4744);function m(){const[e,t]=(0,r.useState)({query:"select * from changelog limit 40"});return r.createElement("div",null,r.createElement(u.GigyaContext,u.TestUser,r.createElement(i.Z,{src:{...u.TestUser,...e},onEdit:e=>{let{newSrc:n}=e;return t(n)},onDelete:e=>{let{newSrc:n}=e;return t(n)},onAdd:e=>{let{newSrc:n}=e;return t(n)}}),r.createElement(u.GigyaRequest,{api:"accounts.updates.stream",params:e},(e=>r.createElement(u.GigyaRequest,{api:"accounts.stream.read",params:{cursorId:e.nextCursorId}})))))}function d(){return r.createElement("section",{className:o},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(m,null))))}const f="heroBanner_qdFl",E="buttons_AeoN";function p(){const{siteConfig:e}=(0,c.Z)();return r.createElement("header",{className:(0,s.Z)("hero hero--primary",f)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:E},r.createElement(a.Z,{className:"button button--secondary button--lg",to:"/docs/category/intro"},"Tutorial - 5min \u23f1\ufe0f"))))}function h(){const{siteConfig:e}=(0,c.Z)();return r.createElement(l.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},r.createElement(p,null),r.createElement("main",null,r.createElement(d,null)))}},4744:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7462),s=n(7294);const a=e=>{if("undefined"!=typeof window&&"undefined"!=typeof document){const t=n(5171).default;return s.createElement(t,(0,r.Z)({theme:"flat",displayDataTypes:!1,style:{fontSize:"1.3rem"}},e))}return null}},471:(e,t,n)=>{n.r(t),n.d(t,{API:()=>S,GigyaContext:()=>w,GigyaRequest:()=>C,TestUser:()=>h,useFetch:()=>f});var r=n(7294),s=n(9756),a=n(5329),c=n(4978),l=n(9878),o=n(9127),u=n(6536),i=n(4744);const m="link_tWyL";function d(e){let{url:t,params:n}=e;const r=[];for(const s in n)if(n[s]){const e=encodeURIComponent(s),t=encodeURIComponent(n[s]);r.push(e+"="+t)}return(0,u.U)(t,{referrerPolicy:"origin",credentials:"include",mode:"cors",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.join("&")}).pipe((0,c.w)((e=>e.ok?e.json():(0,s.of)({error:!0,message:`Error ${e.status}`,raw:e}))),(0,l.K)((e=>(console.error(e),(0,s.of)({error:!0,message:e.message})))),(0,o.U)((e=>e)))}function f(e){const[t,n]=(0,r.useState)(e),[s,a]=(0,r.useState)(0),c=p(d(t),[t,s]);return{response:c,fetch:()=>{n(e),a(s+1)},ResponseView:s?r.createElement(i.Z,{src:c,collapsed:!0}):r.createElement("div",null),ResponseConsumer:e=>{let{children:t}=e;return r.createElement("div",null,s?t:r.createElement("div",null))}}}function E(e){let{children:t,theme:n,transformCode:s,url:c,FetchLink:l,...o}=e;const[u,i]=(0,r.useState)(),[f,E]=(0,r.useState)(0),h=()=>{i(c),E(f+1)},y=r.useRef(null),g=((0,a.R)(y.current,"onClick"),p(d(u),[u,f])),v=f&&t?t(g):r.createElement("div",null);return r.createElement("div",null,l?r.createElement(l,{ref:y,onClick:h}):r.createElement("button",{ref:y,onClick:h,className:m},"Fetch"),v)}E.defaultProps={details:null};const p=(e,t)=>{const[n,s]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=e.subscribe(s);return()=>t.unsubscribe()}),t),n},h={accessToken:"st2.s.AcbHcsserw.-mNj3OQ36Ye7QWplY3-wS67zMUgWYQgjQQGX8g2o9K857KKRg-PMRx2PU5uck-LLM-G4S9EFbVcXBAanhrlmPw.hU_GGEpgkBGlVNO6M_rKgxKK71UmhlFHQpgZ-eEJWJWFjOHRb_RKxGF-6ZDF6c_PPHztLT1rcE_ardylCYYSGg.sc3"},y=r.createContext("accounts.gigya.com"),g=r.createContext(h),v=r.createContext({apiKey:"3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2"}),w=e=>{let{domain:t="accounts.gigya.com",apiKey:n="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2",userKey:s,userSecret:a,accessToken:c,children:l}=e;return r.createElement("div",null,r.createElement(y.Provider,{value:t},r.createElement(g.Provider,{value:{userKey:s,userSecret:a,accessToken:c}},r.createElement(v.Provider,{value:{apiKey:n}},l))))};function S(e){const[t,n]=(0,r.useState)(e);return r.createElement(i.Z,{src:{...t},onEdit:e=>{let{newSrc:t}=e;return n(t)},onDelete:e=>{let{newSrc:t}=e;return n(t)},onAdd:e=>{let{newSrc:t}=e;return n(t)}})}const C=e=>{const t=function(e,t){const n=r.useContext(y),s=r.useContext(g),{apiKey:a}=r.useContext(v),c=()=>{const r={apiKey:a,userKey:s.userKey,secret:s.userSecret,oauth_token:s.accessToken,format:"json"};return Object.keys(t).forEach((e=>r[e]=t[e])),{url:`https://${n}/${e}`,params:r}},[l,o]=(0,r.useState)(c);return(0,r.useEffect)((()=>{o(c())}),[e,t]),l}(e.api,e.params),[n,s]=(0,r.useState)(t),{response:a,fetch:c,responseView:l,ResponseConsumer:o}=f(t);return r.createElement("div",null,r.createElement("a",{onClick:c},"Fetch [",e.api,"]"),r.createElement(o,null,r.createElement(i.Z,{src:a,collapsed:!1,name:"result"}),a?(t=>e.children?e.children(t):r.createElement("div",null))(a):r.createElement("div",null)))}}}]);