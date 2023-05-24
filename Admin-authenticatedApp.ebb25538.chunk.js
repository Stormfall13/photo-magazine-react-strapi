"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[801],{93858:(Q,P,n)=>{n.r(P),n.d(P,{default:()=>$t});var e=n(67294),s=n(73599),L=n(88767),v=n(27361),O=n.n(v);const S={i8:"4.10.5"};var T=n(48474),E=n(16550),y=n(86706),x=n(99168),V=n(61080),z=n(38914),U=n.n(z),Le=n(64729),C=n(1565),Oe=n(45697),i=n.n(Oe),Z=n(86896),m=n(11047),oe=n(44034),Y=n(25896),xe=n(12028),M=n(41580),J=n(29728),se=n(70968);const be=(0,C.ZP)(m.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,ie=({onClose:t,onSkip:a,children:o,hideSkip:c})=>{const{formatMessage:d}=(0,Z.Z)();return e.createElement(oe.h,null,e.createElement(be,{onClick:t,padding:8,justifyContent:"center"},e.createElement(Y.i,{onEscape:t},e.createElement(m.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(xe.h,{onClick:t,"aria-label":d({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(se.Z,null)})),e.createElement(M.x,{paddingLeft:7,paddingRight:7,paddingBottom:c?8:0},o),!c&&e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(J.z,{variant:"tertiary",onClick:a},d({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ie.propTypes={children:i().node.isRequired,onClose:i().func.isRequired,onSkip:i().func.isRequired,hideSkip:i().bool.isRequired};const De=ie;var re=n(18172);const le={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Be=(t=le,a)=>(0,re.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var f=n(75515),ce=n(37323);const We=C.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,de=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:Ze,b:ke,p:Ge,light:Ue,ul:Ne,li:Fe}))},Ze=t=>e.createElement(f.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),ke=t=>e.createElement(f.Z,{fontWeight:"semiBold"},t),Ge=t=>e.createElement(f.Z,null,t),Ue=t=>e.createElement(f.Z,{textColor:"neutral600"},t),Ne=t=>e.createElement(M.x,{paddingLeft:6},e.createElement("ul",null,t)),Fe=t=>e.createElement(We,null,t);de.propTypes={id:i().string.isRequired,defaultMessage:i().string.isRequired};const je=de;var X=n(89285),Ke=n(96392);const w=({number:t,last:a,type:o})=>e.createElement(M.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Ke.Z,{number:t,type:o}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:i().number,last:i().bool,type:i().string};const ue=w;var k=n(99872);const q=({title:t,content:a,cta:o,onCtaClick:c,sectionIndex:d,stepIndex:u,hasSectionAfter:h})=>{const{formatMessage:p}=(0,Z.Z)(),g=d>0,r=u>0,A=d+1;return e.createElement(e.Fragment,null,e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(X.Z,{type:k.hx,minHeight:(0,s.Q1)(24)})),e.createElement(f.Z,{variant:"sigma",textColor:"primary600"},p({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(m.k,null,e.createElement(m.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(ue,{number:d+1,type:r?k.hx:k.lW})),e.createElement(f.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},p(t))),e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},h&&e.createElement(e.Fragment,null,e.createElement(X.Z,{type:k.hx}),r&&e.createElement(ue,{number:A+1,type:k.lW,last:!0}))),e.createElement(M.x,null,e.createElement(je,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ce.Z,null),onClick:c,to:o.target},p(o.title)):e.createElement(J.z,{endIcon:e.createElement(ce.Z,null),onClick:c},p(o.title))))),r&&h&&e.createElement(M.x,{paddingTop:3},e.createElement(m.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(X.Z,{type:k.hx,minHeight:(0,s.Q1)(24)}))))};q.defaultProps={currentStep:null,cta:void 0},q.propTypes={sectionIndex:i().number.isRequired,stepIndex:i().number.isRequired,hasSectionAfter:i().bool.isRequired,content:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired,cta:i().shape({target:i().string,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired})}),currentStep:i().string,onCtaClick:i().func.isRequired,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired};const $e=q,Qe=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:c,isGuidedTourVisible:d,setSkipped:u}=(0,s.c1)(),[h,p]=(0,e.useState)(t),[{stepContent:g,sectionIndex:r,stepIndex:A,hasSectionAfter:b,hasStepAfter:F},j]=(0,e.useReducer)(Be,le),{trackUsage:G}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){p(!1);return}const[D]=U()(a,t);p(!D&&d)},[t,a,d]),(0,e.useEffect)(()=>{if(t){const[D]=U()(Le.Z,t),R=Object.keys(a),[B,l]=t.split("."),W=R.indexOf(B),H=Object.keys(a[B]).indexOf(l),$=W<R.length-1,Qt=H<Object.keys(a[B]).length-1;j({type:"UPDATE_MODAL",content:D,newSectionIndex:W,newStepIndex:H,newHasSectionAfter:$,newHasStepAfter:Qt})}},[t,a]);const I=()=>{c(t,!0),G(g.trackingEvent),o(null)},K=()=>{u(!0),o(null),G("didSkipGuidedtour")};return h&&g?e.createElement(De,{hideSkip:!F&&!b,onSkip:K,onClose:I},e.createElement($e,{...g,onCtaClick:I,currentStep:t,sectionIndex:r,stepIndex:A,hasSectionAfter:b})):null};var N=n(73727),pe=n(70004),ze=n(64330),He=n(37907),Ve=n(98994),_=n(38040),me=n(51974),Ye=n(45842),Je=n(37227),Xe=n(56691),we=n(42384),qe=n(90690);const _e=(0,C.ZP)(M.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,ge=(0,C.ZP)(N.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,he=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[c,d]=(0,e.useState)(!1),{logos:{menu:u}}=(0,T.um)(),[h,p]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:g}=(0,s.L7)(),{formatMessage:r}=(0,Z.Z)(),{trackUsage:A}=(0,s.rS)(),{pathname:b}=(0,E.TH)(),F=(0,E.k6)(),{post:j}=(0,s.tg)(),G=g.split(" ").map(l=>l.substring(0,1)).join("").substring(0,2),I=()=>d(l=>!l),K=async()=>{await j("/admin/logout"),s.I8.clearAppStorage(),I(),F.push("/auth/login")},D=l=>{!l.currentTarget.contains(l.relatedTarget)&&l.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&d(!1)},R=(l=null)=>{A("willNavigate",{from:b,to:l})},B=r({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(ze.$,{condensed:h},e.createElement(He.D,{as:N.OL,workplace:r({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:B,icon:e.createElement("img",{src:u.custom||u.default,alt:r({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(pe.i,null),e.createElement(Ve._,null,e.createElement(_.O,{as:N.OL,to:"/content-manager",icon:e.createElement(we.Z,null),onClick:()=>R("/content-manager")},r({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(me.y,{label:r({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(l=>{const W=l.icon;return e.createElement(_.O,{as:N.OL,to:l.to,key:l.to,icon:e.createElement(W,null),onClick:()=>R(l.to)},r(l.intlLabel))})):null,t.length>0?e.createElement(me.y,{label:r({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(l=>{const W=l.icon;return e.createElement(_.O,{as:N.OL,badgeContent:l.notificationsCount>0&&l.notificationsCount.toString()||void 0,to:l.to,key:l.to,icon:e.createElement(W,null),onClick:()=>R(l.to)},r(l.intlLabel))})):null),e.createElement(Ye.q,null,e.createElement(Je.r,{id:"main-nav-user-button",ref:o,onClick:I,initials:G},g),c&&e.createElement(_e,{onBlur:D,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(Y.i,{onEscape:I},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(ge,{tabIndex:0,onClick:I,to:"/me"},e.createElement(f.Z,null,r({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(ge,{tabIndex:0,onClick:K,logout:"logout",to:"/auth/login"},e.createElement(f.Z,{textColor:"danger600"},r({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(qe.Z,null))))),e.createElement(Xe.w,{onClick:()=>p(l=>!l)},r(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};he.propTypes={generalSectionLinks:i().array.isRequired,pluginsSectionLinks:i().array.isRequired};const et=he;var tt=n(727);const nt=(0,C.ZP)(M.x)`
  flex: 1;
`,Ee=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(M.x,{background:"neutral100"},e.createElement(tt.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(m.k,{alignItems:"flex-start"},a,e.createElement(nt,null,t)))};Ee.propTypes={children:i().node.isRequired,sideNav:i().node.isRequired};const at=Ee;var ee=n(19631),ot=n(36657),te=n(52624),st=n(34860),it=n(63237),rt=n(90296),lt=n(87801),ct=n(90321);const dt=n.p+"19eb2dfcf2603eb55733.png";var ut=n(78976),pt=n(9474);const mt=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],fe={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},gt=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:ut.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:pt.Z}],ht=(0,C.ZP)(J.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,Et=(0,C.ZP)(m.k)`
  transform: translate(-50%, -50%);
`,ft=(0,C.ZP)(m.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${f.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${f.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,yt=C.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,ye=(0,C.ZP)(f.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,ve=(0,C.ZP)(ye)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,vt=()=>{const t=(0,e.useRef)(),[a,o]=(0,e.useState)(!1),{formatMessage:c}=(0,Z.Z)(),{communityEdition:d}=(0,s.L7)(),u=()=>{o(p=>!p)},h=[...gt,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:rt.Z,href:d?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(M.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(ht,{"aria-label":c(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:u,ref:t},e.createElement(te.J,{as:a?se.Z:lt.Z,color:"buttonNeutral0"})),a&&e.createElement(oe.h,null,e.createElement(st.M.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(Y.i,{onEscape:u},e.createElement(m.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(ye,{fontWeight:"bold"},c({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(ve,{as:"a",href:fe.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},c(fe.label))),e.createElement(pe.i,null),mt.map(({href:p,duration:g,label:r},A)=>e.createElement(ft,{as:"a",href:p,target:"_blank",rel:"noreferrer noopener",key:p,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(M.x,{paddingRight:5},e.createElement(f.Z,{textColor:"neutral200",variant:"alpha"},A+1)),e.createElement(M.x,{position:"relative"},e.createElement(yt,{src:dt,alt:""}),e.createElement(Et,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(te.J,{as:ct.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(m.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(f.Z,{fontWeight:"bold"},c(r)),e.createElement(it.T,null,":"),e.createElement(f.Z,{textColor:"neutral600",variant:"pi"},g)))),e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},h.map(({label:p,href:g,icon:r})=>e.createElement(m.k,{gap:3,key:g},e.createElement(te.J,{as:r,color:"primary600"}),e.createElement(ve,{as:"a",href:g,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},c(p)))))))))},Tt=(0,e.lazy)(()=>Promise.all([n.e(3848),n.e(8691),n.e(7027),n.e(994)]).then(n.bind(n,44545))),Ct=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,67994))),Mt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),Pt=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,62085))),Te=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),St=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),At=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),Ce=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,62053))),Rt=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,y.I0)(),o=(0,y.v9)(c=>c.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:ot.e}))},[o])},It=()=>{Rt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,T.H9)(),{menu:c}=(0,s.j1)(),{showTutorials:d}=(0,T.um)(),u=(0,e.useMemo)(()=>c.filter(h=>h.Component).map(({to:h,Component:p,exact:g})=>(0,ee.ot)(p,h,g)),[c]);return t?e.createElement(s.dO,null):e.createElement(x.DndProvider,{backend:V.PD},e.createElement(at,{sideNav:e.createElement(et,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(E.rs,null,e.createElement(E.AW,{path:"/",component:Ct,exact:!0}),e.createElement(E.AW,{path:"/me",component:At,exact:!0}),e.createElement(E.AW,{path:"/content-manager",component:Tt}),u,e.createElement(E.AW,{path:"/settings/:settingId",component:Ce}),e.createElement(E.AW,{path:"/settings",component:Ce,exact:!0}),e.createElement(E.AW,{path:"/marketplace"},e.createElement(Pt,null)),e.createElement(E.AW,{path:"/list-plugins",exact:!0},e.createElement(Mt,null)),e.createElement(E.AW,{path:"/404",component:Te}),e.createElement(E.AW,{path:"/500",component:St}),e.createElement(E.AW,{path:"",component:Te}))),e.createElement(Qe,null),d&&e.createElement(vt,null)))},Lt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})});var Ot=n(36968),xt=n.n(Ot);const Me={plugins:null},bt=(t=Me,a)=>(0,re.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{xt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Dt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(bt,Me,()=>Lt(t)),c=(0,e.useRef)(u=>{o({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(a).some(u=>a[u].isReady===!1)){const u=Object.keys(a).reduce((h,p)=>{const g=a[p].initializer;if(g){const r=a[p].pluginId;h.push(e.createElement(g,{key:r,setPlugin:c.current}))}return h},[]);return e.createElement(e.Fragment,null,u,e.createElement(s.dO,null))}return e.createElement(It,null)};var Pe=n(28344);const Bt=()=>({type:Pe.l}),Wt=t=>({type:Pe.m,permissions:t}),Se=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:c}=(0,y.v9)(u=>u.rbacProvider),d=(0,y.I0)();return(0,e.useEffect)(()=>(d(Wt(a)),()=>{d(Bt())}),[a,d]),c?e.createElement(s.oL.Provider,{value:{allPermissions:c,refetchPermissions:o}},t):e.createElement(s.dO,null)};Se.propTypes={children:i().element.isRequired,permissions:i().array.isRequired,refetchPermissions:i().func.isRequired};const Zt=Se;var kt=n(52861),Gt=n(36625),ne=n.n(Gt);const Ae=(t,a)=>!ne().valid(t)||!ne().valid(a)?!1:ne().lt(t,a),Re=S.i8,Ut=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:ae}=(0,s.tg)(),Nt=async t=>{try{const{data:{tag_name:a}}=await kt.default.get("https://api.github.com/repos/strapi/strapi/releases/latest");return Ae(Re,a)&&Ut&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Re}},Ft=async()=>{try{const{data:t,headers:a}=await ae("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},jt=async()=>{try{const{data:t,headers:a}=await ae("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Kt=async()=>{try{const{data:{data:{roles:t}}}=await ae("/admin/users/me");return t}catch(t){throw new Error(t)}},Ie=S.i8,$t=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=s.I8.getUserInfo(),c=O()(o,"username")||(0,ee.Pp)(o.firstname,o.lastname),[d,u]=(0,e.useState)(c),[h,p]=(0,e.useState)(null),{showReleaseNotification:g}=(0,T.um)(),[{data:r,status:A},{data:b,isLoading:F},{data:j,status:G,refetch:I,isFetched:K,isFetching:D},{data:R}]=(0,L.useQueries)([{queryKey:"app-infos",queryFn:Ft},{queryKey:"strapi-release",queryFn:()=>Nt(a),enabled:g,initialData:Ie},{queryKey:"admin-users-permission",queryFn:jt,initialData:[]},{queryKey:"user-roles",queryFn:Kt}]),B=Ae(Ie,b);return(0,e.useEffect)(()=>{R&&R.find(({code:$})=>$==="strapi-super-admin")&&r?.autoReload&&t(!0)},[R,r,t]),(0,e.useEffect)(()=>{(async()=>{const $=await(0,ee.Qy)(o);p($)})()},[o]),F||(D&&K||A==="loading"||G==="loading")?e.createElement(s.dO,null):A==="error"?e.createElement("div",null,"error..."):e.createElement(s.iq,{...r,userId:h,latestStrapiReleaseTag:b,setUserDisplayName:u,shouldUpdateStrapi:B,userDisplayName:d},e.createElement(Zt,{permissions:j,refetchPermissions:I},e.createElement(Dt,null)))}},89285:(Q,P,n)=>{n.d(P,{Z:()=>E});var e=n(67294),s=n(45697),L=n.n(s),v=n(73599),O=n(41580),S=n(99872);const T=({type:y,...x})=>e.createElement(O.x,{width:(0,v.Q1)(2),height:"100%",background:y===S.VM?"neutral300":"primary500",hasRadius:!0,...x});T.defaultProps={type:S.VM},T.propTypes={type:L().oneOf([S.lW,S.hx,S.VM])};const E=T},96392:(Q,P,n)=>{n.d(P,{Z:()=>V});var e=n(67294),s=n(45697),L=n.n(s),v=n(73599),O=n(11047),S=n(52624),T=n(75515),E=n(85018),y=n(99872);const x=({type:z,number:U})=>z===y.hx?e.createElement(O.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(S.J,{as:E.Z,"aria-hidden":!0,width:(0,v.Q1)(16),color:"neutral0"})):z===y.lW?e.createElement(O.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral0"},U)):e.createElement(O.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral600"},U));x.defaultProps={number:void 0,type:y.VM},x.propTypes={number:L().number,type:L().oneOf([y.lW,y.hx,y.VM])};const V=x},99872:(Q,P,n)=>{n.d(P,{VM:()=>L,hx:()=>s,lW:()=>e});const e="isActive",s="isDone",L="isNotDone"},64729:(Q,P,n)=>{n.d(P,{Z:()=>s});const s={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
