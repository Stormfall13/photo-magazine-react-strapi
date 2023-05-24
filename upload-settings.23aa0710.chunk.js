"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[695],{85078:(A,h,t)=>{t.r(h),t.d(h,{SettingsPage:()=>U,default:()=>G});var e=t(67294),c=t(64593),a=t(86896),r=t(73599),p=t(85018),E=t(185),O=t(53979),g=t(29728),m=t(49066),y=t(17034),C=t(11047),b=t(41580),j=t(75515),x=t(11276),n=t(74571),l=t(20707),d=t(52861),s=t(18446),u=t.n(s),o=t(57197);const L=i=>i;var I=t(18172),R=t(36968),k=t.n(R);const Z={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},K=(i,D)=>(0,I.ZP)(i,f=>{switch(D.type){case"CANCEL_CHANGES":{f.modifiedData=i.initialData;break}case"GET_DATA_SUCCEEDED":{f.isLoading=!1,f.initialData=D.data,f.modifiedData=D.data;break}case"ON_CHANGE":{k()(f,["modifiedData",...D.keys.split(".")],D.value);break}case"ON_SUBMIT":{f.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{f.initialData=i.modifiedData,f.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{f.isSubmiting=!1;break}default:return i}});var H=t(16838);const U=()=>{const{formatMessage:i}=(0,a.Z)(),{lockApp:D,unlockApp:f}=(0,r.o1)(),F=(0,r.lm)(),{get:$,put:V}=(0,r.kY)();(0,r.go)();const[{initialData:X,isLoading:Y,isSubmiting:J,modifiedData:B},P]=(0,e.useReducer)(K,Z,L),N=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const M=d.default.CancelToken.source(),w=async()=>{try{const{data:{data:z}}=await $((0,o.IF)("settings"),{cancelToken:M.token});P({type:"GET_DATA_SUCCEEDED",data:z})}catch(z){console.error(z)}};return N.current&&w(),()=>{M.cancel("Operation canceled by the user."),N.current=!1}},[]);const W=u()(X,B),Q=async v=>{if(v.preventDefault(),!W){D(),P({type:"ON_SUBMIT"});try{await V((0,o.IF)("settings"),B),P({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(M){console.error(M),P({type:"ON_SUBMIT_ERROR"})}f()}},S=({target:{name:v,value:M}})=>{P({type:"ON_CHANGE",keys:v,value:M})};return e.createElement(E.o,{tabIndex:-1},e.createElement(c.q,{title:i({id:(0,o.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:Q},e.createElement(O.T,{title:i({id:(0,o.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(g.z,{disabled:W,"data-testid":"save-button",loading:J,type:"submit",startIcon:e.createElement(p.Z,null),size:"S"},i({id:"global.save",defaultMessage:"Save"})),subtitle:i({id:(0,o.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(m.D,null,Y?e.createElement(r.dO,null):e.createElement(y.A,null,e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(b.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(C.k,null,e.createElement(j.Z,{variant:"delta",as:"h2"},i({id:(0,o.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(x.r,{gap:6},e.createElement(n.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:B.responsiveDimensions,hint:i({id:(0,o.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:i({id:(0,o.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:v=>{S({target:{name:"responsiveDimensions",value:v.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:B.sizeOptimization,hint:i({id:(0,o.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:i({id:(0,o.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:v=>{S({target:{name:"sizeOptimization",value:v.target.checked}})}})),e.createElement(n.P,{col:6,s:12},e.createElement(l.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:B.autoOrientation,hint:i({id:(0,o.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:i({id:(0,o.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:v=>{S({target:{name:"autoOrientation",value:v.target.checked}})}}))))))))))},G=()=>e.createElement(r.O4,{permissions:H.Z.settings},e.createElement(U,null))},49066:(A,h,t)=>{t.d(h,{D:()=>p});var e=t(85893),c=t(67294),a=t(45697),r=t(41580);const p=({children:E})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:E});p.propTypes={children:a.node.isRequired}},53979:(A,h,t)=>{t.d(h,{T:()=>b});var e=t(85893),c=t(67294),a=t(45697),r=t(1565);const p=n=>{const l=(0,c.useRef)(null),[d,s]=(0,c.useState)(!0),u=([o])=>{s(o.isIntersecting)};return(0,c.useEffect)(()=>{const o=l.current,T=new IntersectionObserver(u,n);return o&&T.observe(l.current),()=>{o&&T.disconnect()}},[l,n]),[l,d]};var E=t(95355);const O=(n,l)=>{const d=(0,E.W)(l);(0,c.useLayoutEffect)(()=>{const s=new ResizeObserver(d);return Array.isArray(n)?n.forEach(u=>{u.current&&s.observe(u.current)}):n.current&&s.observe(n.current),()=>{s.disconnect()}},[n,d])};var g=t(41580),m=t(11047),y=t(75515);const C=()=>{const n=(0,c.useRef)(null),[l,d]=(0,c.useState)(null),[s,u]=p({root:null,rootMargin:"0px",threshold:0});return O(s,()=>{s.current&&d(s.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{n.current&&d(n.current.getBoundingClientRect())},[n]),{containerRef:s,isVisible:u,baseHeaderLayoutRef:n,headerSize:l}},b=n=>{const{containerRef:l,isVisible:d,baseHeaderLayoutRef:s,headerSize:u}=C();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:u?.height},ref:l,children:d&&(0,e.jsx)(x,{ref:s,...n})}),!d&&(0,e.jsx)(x,{...n,sticky:!0,width:u?.width})]})};b.displayName="HeaderLayout";const j=(0,r.ZP)(g.x)`
  width: ${n=>n.width}px;
  z-index: ${({theme:n})=>n.zIndices[1]};
`,x=c.forwardRef(({navigationAction:n,primaryAction:l,secondaryAction:d,subtitle:s,title:u,sticky:o,width:T,...L},I)=>{const R=typeof s=="string";return o?(0,e.jsx)(j,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:T,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(m.k,{justifyContent:"space-between",children:[(0,e.jsxs)(m.k,{children:[n&&(0,e.jsx)(g.x,{paddingRight:3,children:n}),(0,e.jsxs)(g.x,{children:[(0,e.jsx)(y.Z,{variant:"beta",as:"h1",...L,children:u}),R?(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),d?(0,e.jsx)(g.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(m.k,{children:l?(0,e.jsx)(g.x,{paddingLeft:2,children:l}):void 0})]})}):(0,e.jsxs)(g.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(g.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(m.k,{justifyContent:"space-between",children:[(0,e.jsxs)(m.k,{minWidth:0,children:[(0,e.jsx)(y.Z,{as:"h1",variant:"alpha",...L,children:u}),d?(0,e.jsx)(g.x,{paddingLeft:4,children:d}):null]}),l]}),R?(0,e.jsx)(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})});x.displayName="BaseHeaderLayout",x.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},x.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},b.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},b.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(A,h,t)=>{t.d(h,{A:()=>g});var e=t(85893),c=t(67294),a=t(45697),r=t(1565),p=t(41580);const E=(0,r.ZP)(p.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:m})=>m?"auto 1fr":"1fr"};
`,O=(0,r.ZP)(p.x)`
  overflow-x: hidden;
`,g=({sideNav:m,children:y})=>(0,e.jsxs)(E,{hasSideNav:!!m,children:[m,(0,e.jsx)(O,{paddingBottom:10,children:y})]});g.defaultProps={sideNav:void 0},g.propTypes={children:a.node.isRequired,sideNav:a.node}},185:(A,h,t)=>{t.d(h,{o:()=>p});var e=t(85893),c=t(1565),a=t(41580);const r=(0,c.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,p=({labelledBy:E="main-content-title",...O})=>(0,e.jsx)(r,{"aria-labelledby":E,as:"main",id:"main-content",tabIndex:-1,...O})}}]);
