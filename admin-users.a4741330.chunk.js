"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[5199],{67875:(D,n,e)=>{e.d(n,{Z:()=>a});const a=()=>null},94699:(D,n,e)=>{e.d(n,{Z:()=>r});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),g=e(41580),d=e(29728),o=e(89597),c=e(73599);const u=({displayedFilters:i})=>{const[A,C]=(0,t.useState)(!1),{formatMessage:I}=(0,l.Z)(),h=(0,t.useRef)(),y=()=>{C(L=>!L)};return t.createElement(t.Fragment,null,t.createElement(g.x,{paddingTop:1,paddingBottom:1},t.createElement(d.z,{variant:"tertiary",ref:h,startIcon:t.createElement(o.Z,null),onClick:y,size:"S"},I({id:"app.utils.filters",defaultMessage:"Filters"})),A&&t.createElement(c.J5,{displayedFilters:i,isVisible:A,onToggle:y,source:h})),t.createElement(c.W$,{filtersSchema:i}))};u.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const r=u},4214:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(29728),d=e(23293);const o=({onClick:u})=>{const{formatMessage:r}=(0,a.Z)();return t.createElement(g.z,{onClick:u,startIcon:t.createElement(d.Z,null),size:"S"},r({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};o.propTypes={onClick:l().func.isRequired};const c=o},57338:(D,n,e)=>{e.d(n,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(D,n,e)=>{e.d(n,{Z:()=>a});const a=[]},37735:(D,n,e)=>{e.r(n),e.d(n,{default:()=>tt});var t=e(67294),a=e(73599),s=e(87751),l=e(15861),g=e(4942),d=e(70885),o=e(64687),c=e.n(o),u=e(14087),r=e(185),i=e(53979),A=e(36989),C=e(49066),I=e(16550),h=e(86896),y=e(88767),L=e(45697),p=e.n(L),se=e(15234),J=e(79031),ne=e(37909),pe=e(92155),S=e(75515),H=e(11047),de=e(12028),j=e(41580),fe=e(4585),Me=e(20022),R=e(19631);const ve=({canDelete:m,headers:f,entriesToDelete:M,onClickDelete:v,onSelectRow:$,withMainAction:Y,withBulkActions:b,rows:oe})=>{const{push:N,location:{pathname:Q}}=(0,I.k6)(),{formatMessage:W}=(0,h.Z)();return t.createElement(se.p,null,oe.map(E=>{const V=M.findIndex(K=>K===E.id)!==-1;return t.createElement(J.Tr,{key:E.id,...(0,a.X7)({fn:()=>N(`${Q}/${E.id}`),condition:b})},Y&&t.createElement(ne.Td,{...a.UW},t.createElement(pe.C,{"aria-label":W({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),checked:V,onChange:()=>{$({name:E.id,value:!V})}})),f.map(({key:K,cellFormatter:w,name:Z,...k})=>t.createElement(ne.Td,{key:K},typeof w=="function"?w(E,{key:K,name:Z,formatMessage:W,...k}):t.createElement(S.Z,{textColor:"neutral800"},E[Z]||"-"))),b&&t.createElement(ne.Td,null,t.createElement(H.k,{justifyContent:"end"},t.createElement(de.h,{onClick:()=>N(`${Q}/${E.id}`),label:W({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),m&&t.createElement(j.x,{paddingLeft:1,...a.UW},t.createElement(de.h,{onClick:()=>v(E.id),label:W({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,R.Pp)(E.firstname,E.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};ve.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ve.propTypes={canDelete:p().bool,entriesToDelete:p().array,headers:p().array.isRequired,onClickDelete:p().func,onSelectRow:p().func,rows:p().array,withBulkActions:p().bool,withMainAction:p().bool};const Ue=ve;var Ie=e(94699),ce=e(87462),Pe=e(29728),Se=e(42866),We=e(24969),Ae=e(2407),Ke=e(59946),Ce=e(11276),_e=e(74571),Ze=e(36856),xe=e(41054),Fe=e(81288);const je=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var re=e(87561);const $e=re.Ry().shape({firstname:re.Z_().trim().required(a.I0.required),lastname:re.Z_(),email:re.Z_().email(a.I0.email).required(a.I0.required),roles:re.IX().min(1,a.I0.required).required(a.I0.required)}),be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Ne=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),ze=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),Xe=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Le=function(f){var M=f.queryName,v=f.onToggle,$=(0,t.useState)("create"),Y=(0,d.Z)($,2),b=Y[0],oe=Y[1],N=(0,t.useState)(!1),Q=(0,d.Z)(N,2),W=Q[0],E=Q[1],V=(0,t.useState)(null),K=(0,d.Z)(V,2),w=K[0],Z=K[1],k=(0,y.useQueryClient)(),ue=(0,h.Z)(),z=ue.formatMessage,Oe=(0,a.lm)(),q=(0,a.o1)(),Ee=q.lockApp,ee=q.unlockApp,he=(0,a.kY)(),le=he.post,te=(0,y.useMutation)(function(_){return le("/admin/users",_)},{onSuccess:function(x){return(0,l.Z)(c().mark(function X(){var F;return c().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return F=x.data,Z(F.data.registrationToken),P.next=4,k.refetchQueries(M);case 4:return P.next=6,k.refetchQueries(["ee","license-limit-info"]);case 6:ge(),E(!1);case 8:case"end":return P.stop()}},X)}))()},onError:function(x){throw E(!1),Oe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),x},onSettled:function(){ee()}}),B=z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ye=function(){var _=(0,l.Z)(c().mark(function x(X,F){var G,P,Te;return c().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return G=F.setErrors,Ee(),E(!0),T.prev=3,T.next=6,te.mutateAsync(X);case 6:T.next=12;break;case 8:T.prev=8,T.t0=T.catch(3),ee(),(T.t0===null||T.t0===void 0||(P=T.t0.response)===null||P===void 0||(Te=P.data)===null||Te===void 0?void 0:Te.error.message)==="Email already taken"&&G({email:T.t0.response.data.error.message});case 12:case"end":return T.stop()}},x,null,[[3,8]])}));return function(X,F){return _.apply(this,arguments)}}(),ge=function(){U?oe(U):v()},ae=be[b],ie=ae.buttonSubmitLabel,O=ae.isDisabled,U=ae.next,Be=b==="create"?t.createElement(Pe.z,{type:"submit",loading:W},z(ie)):t.createElement(Pe.z,{type:"button",loading:W,onClick:v},z(ie));return t.createElement(Se.P,{onClose:v,labelledBy:"title"},t.createElement(We.x,null,t.createElement(Ae.O,{label:B},t.createElement(Ae.$,null,B))),t.createElement(xe.J9,{initialValues:Ne,onSubmit:ye,validationSchema:$e,validateOnChange:!1},function(_){var x=_.errors,X=_.handleChange,F=_.values;return t.createElement(a.l0,null,t.createElement(Ke.f,null,t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:6},b!=="create"&&t.createElement(Xe,{registrationToken:w}),t.createElement(j.x,null,t.createElement(S.Z,{variant:"beta",as:"h2"},z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(j.x,{paddingTop:4},t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Ce.r,{gap:5},je.map(function(G){return G.map(function(P){return t.createElement(_e.P,(0,ce.Z)({key:P.name},P.size),t.createElement(a.jm,(0,ce.Z)({},P,{disabled:O,error:x[P.name],onChange:X,value:F[P.name]})))})}))))),t.createElement(j.x,null,t.createElement(S.Z,{variant:"beta",as:"h2"},z({id:"global.roles",defaultMessage:"User's role"})),t.createElement(j.x,{paddingTop:4},t.createElement(Ce.r,{gap:5},t.createElement(_e.P,{col:6,xs:12},t.createElement(Fe.Z,{disabled:O,error:x.roles,onChange:X,value:F.roles})),ze.map(function(G){return G.map(function(P){return t.createElement(_e.P,(0,ce.Z)({key:P.name},P.size),t.createElement(a.jm,(0,ce.Z)({},P,{disabled:O,onChange:X,value:F[P.name]})))})})))))),t.createElement(Ze.m,{startActions:t.createElement(Pe.z,{variant:"tertiary",onClick:v,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Be}))}))};Le.propTypes={onToggle:p().func.isRequired,queryName:p().array.isRequired};const He=Le,De=({pagination:m})=>t.createElement(j.x,{paddingTop:4},t.createElement(H.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:m})));De.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},De.propTypes={pagination:p().shape({page:p().number,pageCount:p().number,pageSize:p().number,total:p().number})};const Qe=De,Ve=async(m,f)=>{const{get:M}=(0,a.tg)(),{data:{data:v}}=await M(`/admin/users${m}`);return f(),v},Ge=async m=>{const{post:f}=(0,a.tg)();await f("/admin/users/batch-delete",{ids:m})},Je=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ye=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:m},{formatMessage:f}){return t.createElement(S.Z,{textColor:"neutral800"},m.map(M=>f({id:`Settings.permissions.users.${M.code}`,defaultMessage:M.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:m},{formatMessage:f}){return t.createElement(H.k,null,t.createElement(a.qb,{isActive:m,variant:m?"success":"danger"}),t.createElement(S.Z,{textColor:"neutral800"},f({id:m?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:m?"Active":"Inactive"})))}}];function Re(m,f){var M=Object.keys(m);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);f&&(v=v.filter(function($){return Object.getOwnPropertyDescriptor(m,$).enumerable})),M.push.apply(M,v)}return M}function me(m){for(var f=1;f<arguments.length;f++){var M=arguments[f]!=null?arguments[f]:{};f%2?Re(Object(M),!0).forEach(function(v){(0,g.Z)(m,v,M[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(M)):Re(Object(M)).forEach(function(v){Object.defineProperty(m,v,Object.getOwnPropertyDescriptor(M,v))})}return m}var we=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),ke=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),qe=function(){var f=(0,a.So)(),M=f.formatAPIError,v=(0,t.useState)(!1),$=(0,d.Z)(v,2),Y=$[0],b=$[1],oe=(0,a.ss)(s.Z.settings.users),N=oe.allowedActions,Q=N.canCreate,W=N.canDelete,E=N.canRead,V=(0,y.useQueryClient)(),K=(0,a.lm)(),w=(0,h.Z)(),Z=w.formatMessage,k=(0,I.TH)(),ue=k.search;(0,a.go)(),ke();var z=(0,u.G)(),Oe=z.notifyStatus,q=["users",ue],Ee=Ye.map(function(O){return me(me({},O),{},{metadatas:me(me({},O.metadatas),{},{label:Z(O.metadatas.label)})})}),ee=Z({id:"global.users",defaultMessage:"Users"}),he=function(){Oe(Z({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:ee}))},le=(0,y.useQuery)(q,function(){return Ve(ue,he)},{enabled:E,retry:!1,onError:function(U){K({type:"warning",message:{id:"notification.error",message:M(U),defaultMessage:"An error occured"}})}}),te=le.status,B=le.data,ye=le.isFetching,ge=function(){b(function(U){return!U})},ae=(0,y.useMutation)(function(O){return Ge(O)},{onSuccess:function(){return(0,l.Z)(c().mark(function U(){return c().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,V.refetchQueries(q);case 2:return _.next=4,V.refetchQueries(["ee","license-limit-info"]);case 4:case"end":return _.stop()}},U)}))()},onError:function(U){K({type:"warning",message:{id:"notification.error",message:M(U),defaultMessage:"An error occured"}})}}),ie=te!=="success"&&te!=="error"||te==="success"&&ye;return t.createElement(r.o,{"aria-busy":ie},t.createElement(a.SL,{name:"Users"}),t.createElement(i.T,{primaryAction:Q&&t.createElement(we,{onClick:ge}),title:ee,subtitle:Z({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),E&&t.createElement(A.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:Z({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ee})}),t.createElement(Ie.Z,{displayedFilters:Je}))}),t.createElement(C.D,{canRead:E},!E&&t.createElement(a.ZF,null),te==="error"&&t.createElement("div",null,"TODO: An error occurred"),E&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:ie,onConfirmDeleteAll:ae.mutateAsync,onConfirmDelete:function(U){return ae.mutateAsync([U])},headers:Ee,rows:B?.results,withBulkActions:!0,withMainAction:W},t.createElement(Ue,{canDelete:W,headers:Ee,rows:B?.results||[],withBulkActions:!0,withMainAction:W})),t.createElement(Qe,{pagination:B?.pagination}))),Y&&t.createElement(He,{onToggle:ge,queryName:q}))};const et=qe,tt=()=>t.createElement(a.O4,{permissions:s.Z.settings.users.main},t.createElement(et,null))},82464:(D,n,e)=>{e.d(n,{Z:()=>i});var t=e(67294),a=e(45697),s=e.n(a),l=e(12028),g=e(73599),d=e(65186),o=e(74855),c=e.n(o),u=e(86896);const r=({children:A,target:C})=>{const I=(0,g.lm)(),{formatMessage:h}=(0,u.Z)(),y=()=>{I({type:"info",message:{id:"notification.link-copied"}})},L=h({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(g.Y_,{endAction:t.createElement(o.CopyToClipboard,{onCopy:y,text:C},t.createElement(l.h,{label:L,noBorder:!0,icon:t.createElement(d.Z,null)})),title:C,titleEllipsis:!0,subtitle:A,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};r.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const i=r},31605:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(63871),d=e(82464);const o=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)(),i=`${window.location.origin}${g.Z}auth/register?registrationToken=${u}`;return t.createElement(d.Z,{target:i},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:l().string};const c=o},81288:(D,n,e)=>{e.d(n,{Z:()=>y});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),g=e(40619),d=e(82562),o=e(88767),c=e(1565),u=e(86647),r=e(73599);const i=c.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,A=c.ZP.div`
  animation: ${i} 2s infinite linear;
`,C=()=>t.createElement(A,null,t.createElement(u.Z,null)),I=async()=>{const{get:L}=(0,r.tg)(),{data:p}=await L("/admin/roles");return p.data},h=({disabled:L,error:p,onChange:se,value:J})=>{const{status:ne,data:pe}=(0,o.useQuery)(["roles"],I,{staleTime:5e4}),{formatMessage:S}=(0,l.Z)(),H=p?S({id:p,defaultMessage:p}):"",de=S({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),j=S({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),fe=S({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Me=ne==="loading"?t.createElement(C,null):void 0;return t.createElement(g.P,{id:"roles",disabled:L,error:H,hint:j,label:de,name:"roles",onChange:R=>{se({target:{name:"roles",value:R}})},placeholder:fe,multi:!0,startIcon:Me,value:J.map(R=>R.toString()),withTags:!0,required:!0},(pe||[]).map(R=>t.createElement(d.W,{key:R.id,value:R.id.toString()},S({id:`global.${R.code}`,defaultMessage:R.name}))))};h.defaultProps={disabled:!1,error:void 0},h.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const y=h},49823:(D,n,e)=>{e.d(n,{Z:()=>h});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(11047),d=e(84495),o=e(52624),c=e(29728),u=e(51277),r=e(23293),i=e(14293),A=e.n(i),C=e(69483);const I=({onClick:y})=>{const{formatMessage:L}=(0,a.Z)(),{license:p}=(0,C.q5)(),{permittedSeats:se,shouldStopCreate:J}=p?.data??{};return t.createElement(g.k,{gap:2},!A()(se)&&J&&t.createElement(d.u,{description:L({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(o.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:u.Z})),t.createElement(c.z,{"data-testid":"create-user-button",onClick:y,startIcon:t.createElement(r.Z,null),size:"S",disabled:J},L({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};I.propTypes={onClick:l().func.isRequired};const h=I},97083:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(57338);const a=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},l={...t.Z,...a}},810:(D,n,e)=>{e.d(n,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(D,n,e)=>{e.d(n,{Z:()=>c});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),g=e(63871),d=e(82464);const o=({registrationToken:u})=>{const{formatMessage:r}=(0,a.Z)();return u?t.createElement(d.Z,{target:`${window.location.origin}${g.Z}auth/register?registrationToken=${u}`},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(d.Z,{target:`${window.location.origin}${g.Z}auth/login`},r({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:l().string};const c=o},2407:(D,n,e)=>{e.d(n,{$:()=>u,O:()=>r});var t=e(85893),a=e(16405),s=e(1565),l=e(63237),g=e(11047),d=e(41580),o=e(75515);const c=(0,s.ZP)(g.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral500};
    }
  }
  :last-of-type ${d.x} {
    display: none;
  }
  :last-of-type ${o.Z} {
    color: ${({theme:i})=>i.colors.neutral800};
    font-weight: ${({theme:i})=>i.fontWeights.bold};
  }
`,u=({children:i})=>(0,t.jsxs)(c,{inline:!0,as:"li",children:[(0,t.jsx)(o.Z,{variant:"pi",textColor:"neutral600",children:i}),(0,t.jsx)(d.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});u.displayName="Crumb";const r=({children:i,label:A,...C})=>(0,t.jsxs)(g.k,{...C,children:[(0,t.jsx)(l.T,{children:A}),(0,t.jsx)("ol",{"aria-hidden":!0,children:i})]});r.displayName="Breadcrumbs"},36989:(D,n,e)=>{e.d(n,{Z:()=>u});var t=e(85893),a=e(67294),s=e(45697),l=e(1565),g=e(11047),d=e(41580);const o=(0,l.ZP)(g.k)`
  & > * + * {
    margin-left: ${({theme:r})=>r.spaces[2]};
  }

  margin-left: ${({pullRight:r})=>r?"auto":void 0};
`,c=(0,l.ZP)(o)`
  flex-shrink: 0;
`,u=({startActions:r,endActions:i})=>r||i?(0,t.jsx)(d.x,{paddingLeft:10,paddingRight:10,children:(0,t.jsx)(d.x,{paddingBottom:4,children:(0,t.jsxs)(g.k,{justifyContent:"space-between",alignItems:"flex-start",children:[r&&(0,t.jsx)(o,{wrap:"wrap",children:r}),i&&(0,t.jsx)(c,{pullRight:!0,children:i})]})})}):null;u.defaultProps={endActions:void 0,startActions:void 0},u.propTypes={endActions:s.node,startActions:s.node}},23293:(D,n,e)=>{e.d(n,{Z:()=>s});var t=e(85893);const a=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),s=a}}]);
