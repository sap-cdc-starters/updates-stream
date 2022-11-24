"use strict";(self.webpackChunkupdates_stream=self.webpackChunkupdates_stream||[]).push([[918],{1986:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),l=a(7294),r=a(6010),s=a(5281),c=a(2802),o=a(8596),i=a(9960),d=a(4996),m=a(5999);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function E(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return l.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function h(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",p.breadcrumbsItemLink),href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}function v(){const e=(0,c.s1)(),t=(0,o.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(E,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},230:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ne});var n=a(7294),l=a(1944),r=a(902);const s=n.createContext(null);function c(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function o(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=o();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(4966);function p(){const{metadata:e}=o();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var b=a(3120),E=a(4364),h=a(5281),v=a(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:h.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(7462);const _="iconEdit_Z9Sw";function L(e){let{className:t,...a}=e;return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function N(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:h.k.common.editThisPage},n.createElement(L,null),n.createElement(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(9960);const T="tag_zVej",w="tagRegular_sFm0",C="tagWithCount_h2kH";function U(e){let{permalink:t,label:a,count:l}=e;return n.createElement(y.Z,{href:t,className:(0,d.Z)(T,l?C:w)},a,l&&n.createElement("span",null,l))}const x="tags_jXut",A="tag_QGVx";function M(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:A},n.createElement(U,{label:t,permalink:a}))}))))}const S="lastUpdated_vwxv";function H(e){return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(h.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",S)},(a||l)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function P(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,c=s.length>0,i=!!(t||a||r);return c||i?n.createElement("footer",{className:(0,d.Z)(h.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(H,{tags:s}),i&&n.createElement(V,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var B=a(6043),F=a(3743);const R="tocCollapsibleButton_TO0P",I="tocCollapsibleButtonExpanded_MG3E";function K(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,k.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",R,!t&&I,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const D="tocCollapsible_ETCw",G="tocCollapsibleContent_vkbj",j="tocCollapsibleExpanded_sAul";function O(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:c}=(0,B.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(D,!s&&j,a)},n.createElement(K,{collapsed:s,onClick:c}),n.createElement(B.z,{lazy:!0,className:G,collapsed:s},n.createElement(F.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const Q="tocMobile_ITEo";function W(){const{toc:e,frontMatter:t}=o();return n.createElement(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(h.k.docs.docTocMobile,Q)})}var z=a(9407);function X(){const{toc:e,frontMatter:t}=o();return n.createElement(z.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var Y=a(2503),J=a(9617);function $(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=o();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(h.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(Y.Z,{as:"h1"},a)),n.createElement(J.Z,null,t))}var q=a(1986);const ee="docItemContainer_Djhp",te="docItemCol_VOVn";function ae(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=o(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(W,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(X,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&te)},n.createElement(b.Z,null),n.createElement("div",{className:ee},n.createElement("article",null,n.createElement(q.Z,null),n.createElement(E.Z,null),a.mobile,n.createElement($,null,t),n.createElement(P,null)),n.createElement(p,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ne(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(c,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ae,null,n.createElement(a,null))))}},4966:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(5999),s=a(6010),c=a(9960);function o(e){const{permalink:t,title:a,subLabel:n,isNext:r}=e;return l.createElement(c.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function i(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(o,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),r=a(5999),s=a(5281),c=a(4477);function o(e){let{className:t}=e;const a=(0,c.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7294),l=a(6010),r=a(2263),s=a(9960),c=a(5999),o=a(143),i=a(5281),d=a(373),m=a(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:c}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:E}=(0,o.Jo)(c),h=u??(v=E).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:E.label,to:h.path,onClick:()=>m(E.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}},4744:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294);const r=e=>{if("undefined"!=typeof window&&"undefined"!=typeof document){const t=a(5171).default;return l.createElement(t,(0,n.Z)({theme:"flat",displayDataTypes:!1,indentWidth:10},e))}return null}},471:(e,t,a)=>{a.r(t),a.d(t,{GigyaContext:()=>Z,GigyaRequest:()=>k,TestUser:()=>h,useFetch:()=>p});var n=a(7294),l=a(9756),r=a(5329),s=a(4978),c=a(9878),o=a(9127),i=a(6536),d=a(4744);const m="link_tWyL";function u(e){let{url:t,params:a}=e;const n=[];for(const l in a)if(a[l]){const e=encodeURIComponent(l),t=encodeURIComponent(a[l]);n.push(e+"="+t)}return(0,i.U)(t,{referrerPolicy:"origin",credentials:"include",mode:"cors",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.join("&")}).pipe((0,s.w)((e=>e.ok?e.json():(0,l.of)({error:!0,message:`Error ${e.status}`,raw:e}))),(0,c.K)((e=>(console.error(e),(0,l.of)({error:!0,message:e.message})))),(0,o.U)((e=>e)))}function p(e){const[t,a]=(0,n.useState)(e),[l,r]=(0,n.useState)(0),s=E(u(t),[t,l]);return{response:s,fetch:()=>{a(e),r(l+1)},ResponseView:l?n.createElement(d.Z,{src:s,collapsed:!0}):n.createElement("div",null),ResponseConsumer:e=>{let{children:t}=e;return n.createElement("div",null,l?t:n.createElement("div",null))}}}function b(e){let{children:t,theme:a,transformCode:l,url:s,FetchLink:c,...o}=e;const[i,d]=(0,n.useState)(),[p,b]=(0,n.useState)(0),h=()=>{d(s),b(p+1)},v=n.useRef(null),g=((0,r.R)(v.current,"onClick"),E(u(i),[i,p])),f=p&&t?t(g):n.createElement("div",null);return n.createElement("div",null,c?n.createElement(c,{ref:v,onClick:h}):n.createElement("button",{ref:v,onClick:h,className:m},"Fetch"),f)}b.defaultProps={details:null};const E=(e,t)=>{const[a,l]=(0,n.useState)();return(0,n.useEffect)((()=>{const t=e.subscribe(l);return()=>t.unsubscribe()}),t),a},h={accessToken:"st2.s.AcbHcsserw.-mNj3OQ36Ye7QWplY3-wS67zMUgWYQgjQQGX8g2o9K857KKRg-PMRx2PU5uck-LLM-G4S9EFbVcXBAanhrlmPw.hU_GGEpgkBGlVNO6M_rKgxKK71UmhlFHQpgZ-eEJWJWFjOHRb_RKxGF-6ZDF6c_PPHztLT1rcE_ardylCYYSGg.sc3"},v=n.createContext("accounts.gigya.com"),g=n.createContext(h),f=n.createContext({apiKey:"3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2"}),Z=e=>{let{domain:t="accounts.gigya.com",apiKey:a="3_VL0lfWLluGwf2VZ5niQd4Xx6HFf6hSdYHfHoDMJDF2njekgvaEbnxryRAsaXwZK2",userKey:l,userSecret:r,accessToken:s,children:c}=e;return n.createElement("div",null,n.createElement(v.Provider,{value:t},n.createElement(g.Provider,{value:{userKey:l,userSecret:r,accessToken:s}},n.createElement(f.Provider,{value:{apiKey:a}},c))))};const k=e=>{const t=function(e,t){const a=n.useContext(v),l=n.useContext(g),{apiKey:r}=n.useContext(f),s=()=>{const n={apiKey:r,userKey:l.userKey,secret:l.userSecret,oauth_token:l.accessToken,format:"json"};return Object.keys(t).forEach((e=>n[e]=t[e])),{url:`https://${a}/${e}`,params:n}},[c,o]=(0,n.useState)(s);return(0,n.useEffect)((()=>{o(s())}),[e,t]),c}(e.api,e.params),{response:a,fetch:l,responseView:r,ResponseConsumer:s}=p(t);return n.createElement("div",null,n.createElement("a",{onClick:l},"Fetch [",e.api,"]"),n.createElement(d.Z,{src:e.params,collapsed:!0,name:"params"}),n.createElement(s,null,n.createElement(d.Z,{src:a,collapsed:!1,name:"result"}),a?(t=>e.children?e.children(t):n.createElement("div",null))(a):n.createElement("div",null)))}},6922:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const l={...a(471),React:n,...n}}}]);