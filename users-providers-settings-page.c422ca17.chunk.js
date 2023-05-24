(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2282],{8971:(x,E,e)=>{"use strict";e.r(E),e.d(E,{ProvidersPage:()=>ue,default:()=>Ce});var t=e(67294),a=e(86896),n=e(73599),r=e(18721),i=e.n(r),l=e(11700),s=e.n(l),o=e(14087),u=e(17034),f=e(185),g=e(53979),v=e(49066),D=e(38939),R=e(8060),d=e(79031),m=e(37909),h=e(75515),P=e(63237),O=e(15234),Z=e(12028),K=e(4585),N=e(88767),p=e(87561),b=e(89031);const ne={id:(0,b.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ae={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Q={id:(0,b.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,b.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},se={id:(0,b.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},re={id:(0,b.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,b.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ie={id:(0,b.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:se,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:se,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,b.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:H,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,b.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,b.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:ae,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:re,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:p.Ry().shape({enabled:p.Xg().required(n.I0.required),key:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),secret:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),subdomain:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()}),callback:p.Z_().when("enabled",{is:!0,then:p.Z_().required(n.I0.required),otherwise:p.Z_()})})}},pe=async y=>{try{const{get:L}=(0,n.tg)(),{data:j}=await L((0,b.Gc)("providers"));return j}catch{throw y({type:"warning",message:{id:"notification.error"}}),new Error("error")}},ge=y=>{const{put:L}=(0,n.tg)();return L((0,b.Gc)("providers"),y)};var ve=e(89734),he=e.n(ve);const fe=y=>he()(Object.keys(y).reduce((L,j)=>{const{icon:C,enabled:T,subdomain:S}=y[j],A=C==="envelope"?["fas","envelope"]:["fab",C];return S!==void 0?L.push({name:j,icon:A,enabled:T,subdomain:S}):L.push({name:j,icon:A,enabled:T}),L},[]),"name");var oe=e(81912),ye=e(42866),Ee=e(24969),de=e(2407),xe=e(59946),Pe=e(11047),be=e(11276),Me=e(74571),Oe=e(36856),le=e(29728),Le=e(45697),c=e.n(Le),Be=e(41054),Te=e(20707),Re=e(16364);const w=({description:y,disabled:L,intlLabel:j,error:C,name:T,onChange:S,placeholder:A,providerToEditName:F,type:W,value:M})=>{const{formatMessage:U}=(0,a.Z)(),z=T==="noName"?`${strapi.backendURL}/api/connect/${F}/callback`:M,$=U({id:j.id,defaultMessage:j.defaultMessage},{provider:F,...j.values}),I=y?U({id:y.id,defaultMessage:y.defaultMessage},{provider:F,...y.values}):"";if(W==="bool")return t.createElement(Te.s,{"aria-label":T,checked:M,disabled:L,hint:I,label:$,name:T,offLabel:U({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:U({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:G=>{S({target:{name:T,value:G.target.checked}})}});const q=A?U({id:A.id,defaultMessage:A.defaultMessage},{...A.values}):"",_=C?U({id:C,defaultMessage:C}):"";return t.createElement(Re.o,{"aria-label":T,disabled:L,error:_,label:$,name:T,onChange:S,placeholder:q,type:W,value:z})};w.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},w.propTypes={description:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}),disabled:c().bool,error:c().string,intlLabel:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}).isRequired,name:c().string.isRequired,onChange:c().func.isRequired,placeholder:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired,values:c().object}),providerToEditName:c().string.isRequired,type:c().string.isRequired,value:c().oneOfType([c().bool,c().string])};const je=w,k=({headerBreadcrumbs:y,initialData:L,isSubmiting:j,layout:C,isOpen:T,onSubmit:S,onToggle:A,providerToEditName:F})=>{const{formatMessage:W}=(0,a.Z)();return T?t.createElement(ye.P,{onClose:A,labelledBy:"title"},t.createElement(Ee.x,null,t.createElement(de.O,{label:y.join(", ")},y.map(M=>t.createElement(de.$,{key:M},M)))),t.createElement(Be.J9,{onSubmit:M=>S(M),initialValues:L,validationSchema:C.schema,validateOnChange:!1},({errors:M,handleChange:U,values:z})=>t.createElement(n.l0,null,t.createElement(xe.f,null,t.createElement(Pe.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(be.r,{gap:5},C.form.map($=>$.map(I=>t.createElement(Me.P,{key:I.name,col:I.size,xs:12},t.createElement(je,{...I,error:M[I.name],onChange:U,value:z[I.name],providerToEditName:F}))))))),t.createElement(Oe.m,{startActions:t.createElement(le.z,{variant:"tertiary",onClick:A,type:"button"},W({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(le.z,{type:"submit",loading:j},W({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:c().arrayOf(c().string).isRequired,initialData:c().object,layout:c().shape({form:c().arrayOf(c().array),schema:c().object}).isRequired,isOpen:c().bool.isRequired,isSubmiting:c().bool.isRequired,onSubmit:c().func.isRequired,onToggle:c().func.isRequired,providerToEditName:c().string};const Ae=k,ue=()=>{const{formatMessage:y}=(0,a.Z)();(0,n.go)();const{notifyStatus:L}=(0,o.G)(),j=(0,N.useQueryClient)(),{trackUsage:C}=(0,n.rS)(),T=(0,t.useRef)(C),[S,A]=(0,t.useState)(!1),[F,W]=(0,t.useState)(!1),[M,U]=(0,t.useState)(null),z=(0,n.lm)(),{lockApp:$,unlockApp:I}=(0,n.o1)(),q=(0,t.useMemo)(()=>({update:oe.Z.updateProviders}),[]),{isLoading:_,allowedActions:{canUpdate:G}}=(0,n.ss)(q),{isLoading:De,data:V,isFetching:Ze}=(0,N.useQuery)("get-providers",()=>pe(z),{onSuccess(){L(y({id:(0,b.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ue=De||Ze,Ie=(0,N.useMutation)(ge,{async onSuccess(){await j.invalidateQueries("get-providers"),z({type:"info",message:{id:(0,b.OB)("notification.success.submit")}}),T.current("didEditAuthenticationProvider"),W(!1),ee(),I()},onError(){z({type:"warning",message:{id:"notification.error"}}),I(),W(!1)},refetchActive:!1}),X=(0,t.useMemo)(()=>fe(V),[V]),Se=X.length,ce=(0,t.useMemo)(()=>{if(!M)return!1;const B=X.find(te=>te.name===M);return i()(B,"subdomain")},[X,M]),We=y({id:(0,b.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),Fe=(0,t.useMemo)(()=>M==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[M,ce]),ee=()=>{A(B=>!B)},me=B=>{G&&(U(B.name),ee())},ze=async B=>{W(!0),$(),T.current("willEditAuthenticationProvider");const te={...V,[M]:B};Ie.mutate({providers:te})};return t.createElement(u.A,null,t.createElement(n.SL,{name:We}),t.createElement(f.o,null,t.createElement(g.T,{title:y({id:(0,b.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ue||_?t.createElement(n.dO,null):t.createElement(v.D,null,t.createElement(D.i,{colCount:3,rowCount:Se+1},t.createElement(R.h,null,t.createElement(d.Tr,null,t.createElement(m.Th,null,t.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),t.createElement(m.Th,null,t.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},y({id:(0,b.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(m.Th,null,t.createElement(h.Z,{variant:"sigma"},t.createElement(P.T,null,y({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(O.p,null,X.map(B=>t.createElement(d.Tr,{key:B.name,...(0,n.X7)({fn:()=>me(B),condition:G})},t.createElement(m.Td,{width:"45%"},t.createElement(h.Z,{fontWeight:"semiBold",textColor:"neutral800"},B.name)),t.createElement(m.Td,{width:"65%"},t.createElement(h.Z,{textColor:B.enabled?"success600":"danger600","data-testid":`enable-${B.name}`},B.enabled?y({id:"global.enabled",defaultMessage:"Enabled"}):y({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(m.Td,{...n.UW},G&&t.createElement(Z.h,{onClick:()=>me(B),noBorder:!0,icon:t.createElement(K.Z,null),label:"Edit"})))))))),t.createElement(Ae,{initialData:V[M],isOpen:S,isSubmiting:F,layout:Fe,headerBreadcrumbs:[y({id:(0,b.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),s()(M)],onToggle:ee,onSubmit:ze,providerToEditName:M}))},Ce=()=>t.createElement(n.O4,{permissions:oe.Z.readProviders},t.createElement(ue,null))},89031:(x,E,e)=>{"use strict";e.d(E,{YX:()=>r,Gc:()=>s,OB:()=>o.Z});var t=e(41609),a=e.n(t);const r=u=>Object.keys(u).reduce((f,g)=>{const v=u[g].controllers,D=Object.keys(v).reduce((R,d)=>(a()(v[d])||(R[d]=v[d]),R),{});return a()(D)||(f[g]={controllers:D}),f},{});var i=e(31498);const s=u=>`/${i.Z}/${u}`;var o=e(84757)},89881:(x,E,e)=>{var t=e(47816),a=e(99291),n=a(t);x.exports=n},69199:(x,E,e)=>{var t=e(89881),a=e(98612);function n(r,i){var l=-1,s=a(r)?Array(r.length):[];return t(r,function(o,u,f){s[++l]=i(o,u,f)}),s}x.exports=n},82689:(x,E,e)=>{var t=e(29932),a=e(97786),n=e(67206),r=e(69199),i=e(71131),l=e(7518),s=e(85022),o=e(6557),u=e(1469);function f(g,v,D){v.length?v=t(v,function(m){return u(m)?function(h){return a(h,m.length===1?m[0]:m)}:m}):v=[o];var R=-1;v=t(v,l(n));var d=r(g,function(m,h,P){var O=t(v,function(Z){return Z(m)});return{criteria:O,index:++R,value:m}});return i(d,function(m,h){return s(m,h,D)})}x.exports=f},71131:x=>{function E(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}x.exports=E},26393:(x,E,e)=>{var t=e(33448);function a(n,r){if(n!==r){var i=n!==void 0,l=n===null,s=n===n,o=t(n),u=r!==void 0,f=r===null,g=r===r,v=t(r);if(!f&&!v&&!o&&n>r||o&&u&&g&&!f&&!v||l&&u&&g||!i&&g||!s)return 1;if(!l&&!o&&!v&&n<r||v&&i&&s&&!l&&!o||f&&i&&s||!u&&s||!g)return-1}return 0}x.exports=a},85022:(x,E,e)=>{var t=e(26393);function a(n,r,i){for(var l=-1,s=n.criteria,o=r.criteria,u=s.length,f=i.length;++l<u;){var g=t(s[l],o[l]);if(g){if(l>=f)return g;var v=i[l];return g*(v=="desc"?-1:1)}}return n.index-r.index}x.exports=a},99291:(x,E,e)=>{var t=e(98612);function a(n,r){return function(i,l){if(i==null)return i;if(!t(i))return n(i,l);for(var s=i.length,o=r?s:-1,u=Object(i);(r?o--:++o<s)&&l(u[o],o,u)!==!1;);return i}}x.exports=a},89734:(x,E,e)=>{var t=e(21078),a=e(82689),n=e(5976),r=e(16612),i=n(function(l,s){if(l==null)return[];var o=s.length;return o>1&&r(l,s[0],s[1])?s=[]:o>2&&r(s[0],s[1],s[2])&&(s=[s[0]]),a(l,t(s,1),[])});x.exports=i},2407:(x,E,e)=>{"use strict";e.d(E,{$:()=>u,O:()=>f});var t=e(85893),a=e(16405),n=e(1565),r=e(63237),i=e(11047),l=e(41580),s=e(75515);const o=(0,n.ZP)(i.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${l.x} {
    display: none;
  }
  :last-of-type ${s.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,u=({children:g})=>(0,t.jsxs)(o,{inline:!0,as:"li",children:[(0,t.jsx)(s.Z,{variant:"pi",textColor:"neutral600",children:g}),(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});u.displayName="Crumb";const f=({children:g,label:v,...D})=>(0,t.jsxs)(i.k,{...D,children:[(0,t.jsx)(r.T,{children:v}),(0,t.jsx)("ol",{"aria-hidden":!0,children:g})]});f.displayName="Breadcrumbs"},49066:(x,E,e)=>{"use strict";e.d(E,{D:()=>i});var t=e(85893),a=e(67294),n=e(45697),r=e(41580);const i=({children:l})=>(0,t.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:l});i.propTypes={children:n.node.isRequired}},53979:(x,E,e)=>{"use strict";e.d(E,{T:()=>v});var t=e(85893),a=e(67294),n=e(45697),r=e(1565);const i=d=>{const m=(0,a.useRef)(null),[h,P]=(0,a.useState)(!0),O=([Z])=>{P(Z.isIntersecting)};return(0,a.useEffect)(()=>{const Z=m.current,K=new IntersectionObserver(O,d);return Z&&K.observe(m.current),()=>{Z&&K.disconnect()}},[m,d]),[m,h]};var l=e(95355);const s=(d,m)=>{const h=(0,l.W)(m);(0,a.useLayoutEffect)(()=>{const P=new ResizeObserver(h);return Array.isArray(d)?d.forEach(O=>{O.current&&P.observe(O.current)}):d.current&&P.observe(d.current),()=>{P.disconnect()}},[d,h])};var o=e(41580),u=e(11047),f=e(75515);const g=()=>{const d=(0,a.useRef)(null),[m,h]=(0,a.useState)(null),[P,O]=i({root:null,rootMargin:"0px",threshold:0});return s(P,()=>{P.current&&h(P.current.getBoundingClientRect())}),(0,a.useEffect)(()=>{d.current&&h(d.current.getBoundingClientRect())},[d]),{containerRef:P,isVisible:O,baseHeaderLayoutRef:d,headerSize:m}},v=d=>{const{containerRef:m,isVisible:h,baseHeaderLayoutRef:P,headerSize:O}=g();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:O?.height},ref:m,children:h&&(0,t.jsx)(R,{ref:P,...d})}),!h&&(0,t.jsx)(R,{...d,sticky:!0,width:O?.width})]})};v.displayName="HeaderLayout";const D=(0,r.ZP)(o.x)`
  width: ${d=>d.width}px;
  z-index: ${({theme:d})=>d.zIndices[1]};
`,R=a.forwardRef(({navigationAction:d,primaryAction:m,secondaryAction:h,subtitle:P,title:O,sticky:Z,width:K,...N},p)=>{const b=typeof P=="string";return Z?(0,t.jsx)(D,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:K,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[d&&(0,t.jsx)(o.x,{paddingRight:3,children:d}),(0,t.jsxs)(o.x,{children:[(0,t.jsx)(f.Z,{variant:"beta",as:"h1",...N,children:O}),b?(0,t.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:P}):P]}),h?(0,t.jsx)(o.x,{paddingLeft:4,children:h}):null]}),(0,t.jsx)(u.k,{children:m?(0,t.jsx)(o.x,{paddingLeft:2,children:m}):void 0})]})}):(0,t.jsxs)(o.x,{ref:p,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:d?6:8,background:"neutral100","data-strapi-header":!0,children:[d?(0,t.jsx)(o.x,{paddingBottom:2,children:d}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(f.Z,{as:"h1",variant:"alpha",...N,children:O}),h?(0,t.jsx)(o.x,{paddingLeft:4,children:h}):null]}),m]}),b?(0,t.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:P}):P]})});R.displayName="BaseHeaderLayout",R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},R.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},v.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},v.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},17034:(x,E,e)=>{"use strict";e.d(E,{A:()=>o});var t=e(85893),a=e(67294),n=e(45697),r=e(1565),i=e(41580);const l=(0,r.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:u})=>u?"auto 1fr":"1fr"};
`,s=(0,r.ZP)(i.x)`
  overflow-x: hidden;
`,o=({sideNav:u,children:f})=>(0,t.jsxs)(l,{hasSideNav:!!u,children:[u,(0,t.jsx)(s,{paddingBottom:10,children:f})]});o.defaultProps={sideNav:void 0},o.propTypes={children:n.node.isRequired,sideNav:n.node}},185:(x,E,e)=>{"use strict";e.d(E,{o:()=>i});var t=e(85893),a=e(1565),n=e(41580);const r=(0,a.ZP)(n.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:l="main-content-title",...s})=>(0,t.jsx)(r,{"aria-labelledby":l,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
