"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8648],{"./public/app/core/hooks/useCleanup.ts":(e,a,t)=>{t.d(a,{x:()=>i});var n=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),l=t("./public/app/core/actions/cleanUp.ts");function i(e){const a=(0,r.useDispatch)(),t=(0,n.useRef)(e);t.current=e,(0,n.useEffect)((()=>()=>{a((0,l.e)({stateSelector:t.current}))}),[a])}},"./public/app/core/hooks/useQueryParams.ts":(e,a,t)=>{t.d(a,{K:()=>i});var n=t("./packages/grafana-runtime/src/index.ts"),r=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),l=t("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,l.TH)();return[(0,r.useMemo)((()=>(0,n.locationSearchToObject)(e||"")),[e]),(0,r.useCallback)(((e,a)=>setImmediate((()=>n.locationService.partial(e,a)))),[])]}},"./public/app/features/alerting/unified/AmRoutes.tsx":(e,a,t)=>{t.r(a),t.d(a,{default:()=>_e});var n=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("./packages/grafana-ui/src/index.ts"),i=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),o=t("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),s=t("./public/app/core/hooks/useCleanup.ts"),c=t("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),d=t("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx"),u=t("./public/app/plugins/datasource/alertmanager/types.ts"),p=t("./public/app/features/alerting/unified/utils/time.ts"),m=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),g=t("./public/app/features/alerting/unified/utils/alertmanager.ts"),v=t("./public/app/features/alerting/unified/utils/datasource.ts");const h=["",p.qr[0].value],x=(e,a)=>Object.entries(null!=e?e:{}).reduce(((e,[t,n])=>[...e,{name:t,value:n,operator:a?u._M.regex:u._M.equal}]),[]),f=e=>{if(!e)return h;const[a,t]=e?(0,p.bG)(e):[void 0,void 0],n=p.qr.find((e=>e.value===t));return a&&n?[String(a),n.value]:h},b=e=>e.value,j={name:"",value:"",operator:u._M.equal},y={id:"",groupBy:[],object_matchers:[],routes:[],continue:!1,receiver:"",groupWaitValue:"",groupWaitValueType:p.qr[0].value,groupIntervalValue:"",groupIntervalValueType:p.qr[0].value,repeatIntervalValue:"",repeatIntervalValueType:p.qr[0].value},C=e=>{var a,t,n,r,l,i,o,s;if(!e||0===Object.keys(e).length)return[y,{}];const[c,d]=f(e.group_wait),[u,p]=f(e.group_interval),[m,v]=f(e.repeat_interval),h=String(Math.random()),b={[h]:e},j=[];null===(a=e.routes)||void 0===a||a.forEach((e=>{const[a,t]=C(e);j.push(a),Object.assign(b,t)}));return[{id:h,object_matchers:[...e.matchers?null!==(t=null===(n=e.matchers)||void 0===n?void 0:n.map((e=>(0,g.cm)((0,g.tC)(e)))))&&void 0!==t?t:[]:null!==(r=null===(l=e.object_matchers)||void 0===l?void 0:l.map((e=>({name:e[0],operator:e[1],value:e[2]}))))&&void 0!==r?r:[],...x(e.match,!1),...x(e.match_re,!0)],continue:null!==(i=e.continue)&&void 0!==i&&i,receiver:null!==(o=e.receiver)&&void 0!==o?o:"",groupBy:null!==(s=e.group_by)&&void 0!==s?s:[],groupWaitValue:c,groupWaitValueType:d,groupIntervalValue:u,groupIntervalValueType:p,repeatIntervalValue:m,repeatIntervalValueType:v,routes:j},b]},$=(e,a,t)=>{const n=t[a.id],r=Object.assign({},null!=n?n:{},{continue:a.continue,group_by:a.groupBy,object_matchers:a.object_matchers.length?a.object_matchers.map((e=>[e.name,e.operator,e.value])):void 0,match:void 0,match_re:void 0,group_wait:a.groupWaitValue?`${a.groupWaitValue}${a.groupWaitValueType}`:void 0,group_interval:a.groupIntervalValue?`${a.groupIntervalValue}${a.groupIntervalValueType}`:void 0,repeat_interval:a.repeatIntervalValue?`${a.repeatIntervalValue}${a.repeatIntervalValueType}`:void 0,routes:a.routes.map((a=>$(e,a,t)))});return e!==v.GC?(r.matchers=a.object_matchers.map((({name:e,operator:a,value:t})=>`${e}${a}${t}`)),r.object_matchers=void 0):r.matchers=void 0,a.receiver&&(r.receiver=a.receiver),(0,m.omitBy)(r,m.isUndefined)},I=e=>({label:e,value:e}),S=e=>(null!=e?e:[]).map(I),_=e=>{var a;return e&&null!==(a=b(e))&&void 0!==a?a:""},N=e=>{return e?(null!=(a=e)?a:[]).map(b):[];var a},w=e=>{if(e)return/^\d+$/.test(e)?void 0:"Must be a positive integer."};var V=t("./public/app/features/alerting/unified/utils/misc.ts");const k=e=>({container:r.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${e.spacing(1)};
      }
    `,input:r.css`
      flex: 1;
    `,timingContainer:r.css`
      max-width: ${e.spacing(33)};
    `,smallInput:r.css`
      width: ${e.spacing(6.5)};
    `,linkText:r.css`
      text-decoration: underline;
    `,collapse:r.css`
      border: none;
      background: none;
      color: ${e.colors.text.primary};
    `});var O,B,M=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const T=["onChange","ref"],z=["onChange","ref"],E=["onChange","ref"],F=["onChange","ref"],G=["onChange","ref"];function R(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}const W=({alertManagerSourceName:e,onCancel:a,onSave:t,receivers:i,routes:o})=>{var s;const c=(0,l.useStyles2)(k),[d,u]=(0,n.useState)(!1),[m,g]=(0,n.useState)(S(o.groupBy));return(0,M.jsx)(l.Form,{defaultValues:o,onSubmit:t,children:({control:t,errors:n,setValue:o})=>{var v,h,x,f;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Field,{label:"Default contact point",invalid:!!n.receiver,error:null===(v=n.receiver)||void 0===v?void 0:v.message,children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:c.container,"data-testid":"am-receiver-select",children:[(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=R(e.field,T);return(0,M.jsx)(l.Select,Object.assign({"aria-label":"Default contact point"},t,{className:c.input,onChange:e=>a(_(e)),options:i,menuShouldPortal:!0}))},control:t,name:"receiver",rules:{required:{value:!0,message:"Required."}}}),O||(O=(0,M.jsx)("span",{children:"or"})),(0,M.jsx)(l.Link,{className:c.linkText,href:(0,V.eQ)("/alerting/notifications/receivers/new",e),children:"Create a contact point"})]})})}),(0,M.jsx)(l.Field,{label:"Group by",description:"Group alerts when you receive a notification based on labels.","data-testid":"am-group-select",children:(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=R(e.field,z);return(0,M.jsx)(l.MultiSelect,Object.assign({"aria-label":"Group by",menuShouldPortal:!0},t,{allowCustomValue:!0,className:c.input,onCreateOption:e=>{g((a=>[...a,I(e)])),o("groupBy",[...t.value,e])},onChange:e=>a(N(e)),options:m}))},control:t,name:"groupBy"})}),(0,M.jsxs)(l.Collapse,{collapsible:!0,className:c.collapse,isOpen:d,label:"Timing options",onToggle:u,children:[(0,M.jsx)(l.Field,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",invalid:!!n.groupWaitValue,error:null===(h=n.groupWaitValue)||void 0===h?void 0:h.message,"data-testid":"am-group-wait",children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Default 30 seconds"})),control:t,name:"groupWaitValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=R(e.field,E);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,onChange:e=>a(_(e)),options:p.qr,"aria-label":"Group wait type"}))},control:t,name:"groupWaitValueType"})]})})}),(0,M.jsx)(l.Field,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",invalid:!!n.groupIntervalValue,error:null===(x=n.groupIntervalValue)||void 0===x?void 0:x.message,"data-testid":"am-group-interval",children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Default 5 minutes"})),control:t,name:"groupIntervalValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=R(e.field,F);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,onChange:e=>a(_(e)),options:p.qr,"aria-label":"Group interval type"}))},control:t,name:"groupIntervalValueType"})]})})}),(0,M.jsx)(l.Field,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",invalid:!!n.repeatIntervalValue,error:null===(f=n.repeatIntervalValue)||void 0===f?void 0:f.message,"data-testid":"am-repeat-interval",children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Default 4 hours"})),control:t,name:"repeatIntervalValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=R(e.field,G);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,menuPlacement:"top",onChange:e=>a(_(e)),options:p.qr,"aria-label":"Repeat interval type"}))},control:t,name:"repeatIntervalValueType"})]})})})]}),(0,M.jsxs)("div",{className:c.container,children:[B||(B=(0,M.jsx)(l.Button,{type:"submit",children:"Save"})),s||(s=(0,M.jsx)(l.Button,{onClick:a,type:"reset",variant:"secondary",fill:"outline",children:"Cancel"}))]})]})}})},A=e=>({container:r.css`
      display: grid;
      font-style: ${e.typography.fontSize};
      grid-template-columns: ${e.spacing(15.5)} auto;

      ${e.breakpoints.down("md")} {
        grid-template-columns: 100%;
      }
    `,titleCell:r.css`
      color: ${e.colors.text.primary};
    `,valueCell:r.css`
      color: ${e.colors.text.secondary};
      margin-bottom: ${e.spacing(1)};
    `}),P=({routes:e})=>{const a=(0,l.useStyles2)(A),t=e.receiver||"-",n=e.groupBy.join(", ")||"-",r=e.groupWaitValue?`${e.groupWaitValue}${e.groupWaitValueType}`:"-",i=e.groupIntervalValue?`${e.groupIntervalValue}${e.groupIntervalValueType}`:"-",o=e.repeatIntervalValue?`${e.repeatIntervalValue}${e.repeatIntervalValueType}`:"-";return(0,M.jsxs)("div",{className:a.container,children:[(0,M.jsx)("div",{className:a.titleCell,children:"Contact point"}),(0,M.jsx)("div",{className:a.valueCell,"data-testid":"am-routes-root-receiver",children:t}),(0,M.jsx)("div",{className:a.titleCell,children:"Group by"}),(0,M.jsx)("div",{className:a.valueCell,"data-testid":"am-routes-root-group-by",children:n}),(0,M.jsx)("div",{className:a.titleCell,children:"Timings"}),(0,M.jsxs)("div",{className:a.valueCell,"data-testid":"am-routes-root-timings",children:["Group wait: ",r," | Group interval: ",i," | Repeat interval: ",o]})]})};var q,D;const L=({isEditMode:e,onSave:a,onEnterEditMode:t,onExitEditMode:n,receivers:r,routes:i,alertManagerSourceName:o})=>{const s=(0,l.useStyles2)(Y),c=(0,v.RY)(o);return(0,M.jsxs)("div",{className:s.container,"data-testid":"am-root-route-container",children:[(0,M.jsxs)("div",{className:s.titleContainer,children:[(0,M.jsxs)("h5",{className:s.title,children:["Root policy - ",q||(q=(0,M.jsx)("i",{children:"default for all alerts"}))]}),!e&&!c&&(0,M.jsx)(l.Button,{icon:"pen",onClick:t,size:"sm",type:"button",variant:"secondary",children:"Edit"})]}),D||(D=(0,M.jsx)("p",{children:"All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."})),e?(0,M.jsx)(W,{alertManagerSourceName:o,onCancel:n,onSave:a,receivers:r,routes:i}):(0,M.jsx)(P,{routes:i})]})},Y=e=>({container:r.css`
      background-color: ${e.colors.background.secondary};
      color: ${e.colors.text.secondary};
      padding: ${e.spacing(2)};
    `,titleContainer:r.css`
      color: ${e.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,title:r.css`
      flex: 100%;
    `}),Z=({children:e})=>{const a=(0,l.useStyles)(H);return(0,M.jsx)("div",{className:a.container,children:e})},H=e=>({container:r.css`
      background-color: ${e.colors.bg2};
      color: ${e.colors.textSemiWeak};
      padding: ${e.spacing.xl};
      text-align: center;
    `});var U=t("./public/app/features/alerting/unified/components/DynamicTable.tsx");const J=["onChange","ref"],K=["onChange","ref"],Q=["onChange","ref"],X=["onChange","ref"],ee=["onChange","ref"],ae=["onChange","ref"];var te,ne;function re(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}const le=({onCancel:e,onSave:a,receivers:t,routes:i})=>{var o;const s=(0,l.useStyles2)(ie),c=(0,l.useStyles2)(k),[d,u]=(0,n.useState)(i.groupBy.length>0),[m,v]=(0,n.useState)(!!i.groupWaitValue||!!i.groupIntervalValue||!!i.repeatIntervalValue),[h,x]=(0,n.useState)(S(i.groupBy));return(0,M.jsx)(l.Form,{defaultValues:i,onSubmit:a,children:({control:a,register:n,errors:i,setValue:f})=>{var b,y,C;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("input",Object.assign({type:"hidden"},n("id"))),(0,M.jsx)(l.FieldArray,{name:"object_matchers",control:a,children:({fields:e,append:t,remove:r})=>(0,M.jsxs)(M.Fragment,{children:[te||(te=(0,M.jsx)("div",{children:"Matching labels"})),(0,M.jsx)("div",{className:s.matchersContainer,children:e.map(((e,t)=>{var o,c,d,u,p,m,v,h,x,f;const b=`object_matchers[${t}]`;return(0,M.jsxs)(l.HorizontalGroup,{align:"flex-start",children:[(0,M.jsx)(l.Field,{label:"Label",invalid:!(null===(o=i.object_matchers)||void 0===o||null===(c=o[t])||void 0===c||!c.name),error:null===(d=i.object_matchers)||void 0===d||null===(u=d[t])||void 0===u||null===(p=u.name)||void 0===p?void 0:p.message,children:(0,M.jsx)(l.Input,Object.assign({},n(`${b}.name`,{required:"Field is required"}),{defaultValue:e.name,placeholder:"label"}))}),(0,M.jsx)(l.Field,{label:"Operator",children:(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=re(e.field,J);return(0,M.jsx)(l.Select,Object.assign({},t,{className:s.matchersOperator,onChange:e=>a(null==e?void 0:e.value),options:g.tA,"aria-label":"Operator"}))},defaultValue:e.operator,control:a,name:`${b}.operator`,rules:{required:{value:!0,message:"Required."}}})}),(0,M.jsx)(l.Field,{label:"Value",invalid:!(null===(m=i.object_matchers)||void 0===m||null===(v=m[t])||void 0===v||!v.value),error:null===(h=i.object_matchers)||void 0===h||null===(x=h[t])||void 0===x||null===(f=x.value)||void 0===f?void 0:f.message,children:(0,M.jsx)(l.Input,Object.assign({},n(`${b}.value`,{required:"Field is required"}),{defaultValue:e.value,placeholder:"value"}))}),(0,M.jsx)(l.IconButton,{className:s.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>r(t),children:"Remove"})]},e.id)}))}),(0,M.jsx)(l.Button,{className:s.addMatcherBtn,icon:"plus",onClick:()=>t(j),variant:"secondary",type:"button",children:"Add matcher"})]})}),(0,M.jsx)(l.Field,{label:"Contact point",children:(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,n=re(e.field,K);return(0,M.jsx)(l.Select,Object.assign({"aria-label":"Contact point"},n,{className:c.input,onChange:e=>a(_(e)),options:t,menuShouldPortal:!0}))},control:a,name:"receiver"})}),(0,M.jsx)(l.Field,{label:"Continue matching subsequent sibling nodes",children:(0,M.jsx)(l.Switch,Object.assign({id:"continue-toggle"},n("continue")))}),(0,M.jsx)(l.Field,{label:"Override grouping",children:(0,M.jsx)(l.Switch,{id:"override-grouping-toggle",value:d,onChange:()=>u((e=>!e))})}),d&&(0,M.jsx)(l.Field,{label:"Group by",description:"Group alerts when you receive a notification based on labels.",children:(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=re(e.field,Q);return(0,M.jsx)(l.MultiSelect,Object.assign({"aria-label":"Group by",menuShouldPortal:!0},t,{allowCustomValue:!0,className:c.input,onCreateOption:e=>{x((a=>[...a,I(e)])),f("groupBy",[...t.value,e])},onChange:e=>a(N(e)),options:h}))},control:a,name:"groupBy"})}),(0,M.jsx)(l.Field,{label:"Override general timings",children:(0,M.jsx)(l.Switch,{id:"override-timings-toggle",value:m,onChange:()=>v((e=>!e))})}),m&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.Field,{label:"Group wait",description:"The waiting time until the initial notification is sent for a new group created by an incoming alert.",invalid:!!i.groupWaitValue,error:null===(b=i.groupWaitValue)||void 0===b?void 0:b.message,children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Time","aria-label":"Group wait value"})),control:a,name:"groupWaitValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=re(e.field,X);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,onChange:e=>a(_(e)),options:p.qr,"aria-label":"Group wait type"}))},control:a,name:"groupWaitValueType"})]})})}),(0,M.jsx)(l.Field,{label:"Group interval",description:"The waiting time to send a batch of new alerts for that group after the first notification was sent.",invalid:!!i.groupIntervalValue,error:null===(y=i.groupIntervalValue)||void 0===y?void 0:y.message,children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Time","aria-label":"Group interval value"})),control:a,name:"groupIntervalValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=re(e.field,ee);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,onChange:e=>a(_(e)),options:p.qr,"aria-label":"Group interval type"}))},control:a,name:"groupIntervalValueType"})]})})}),(0,M.jsx)(l.Field,{label:"Repeat interval",description:"The waiting time to resend an alert after they have successfully been sent.",invalid:!!i.repeatIntervalValue,error:null===(C=i.repeatIntervalValue)||void 0===C?void 0:C.message,children:(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:(0,r.cx)(c.container,c.timingContainer),children:[(0,M.jsx)(l.InputControl,{render:({field:e,fieldState:{invalid:a}})=>(0,M.jsx)(l.Input,Object.assign({},e,{className:c.smallInput,invalid:a,placeholder:"Time","aria-label":"Repeat interval value"})),control:a,name:"repeatIntervalValue",rules:{validate:w}}),(0,M.jsx)(l.InputControl,{render:e=>{let{field:{onChange:a}}=e,t=re(e.field,ae);return(0,M.jsx)(l.Select,Object.assign({menuShouldPortal:!0},t,{className:c.input,menuPlacement:"top",onChange:e=>a(_(e)),options:p.qr,"aria-label":"Repeat interval type"}))},control:a,name:"repeatIntervalValueType"})]})})})]}),(0,M.jsxs)("div",{className:s.buttonGroup,children:[ne||(ne=(0,M.jsx)(l.Button,{type:"submit",children:"Save policy"})),o||(o=(0,M.jsx)(l.Button,{onClick:e,fill:"outline",type:"button",variant:"secondary",children:"Cancel"}))]})]})}})},ie=e=>{const a=e.spacing(3.5);return{addMatcherBtn:r.css`
      margin-bottom: ${a};
    `,matchersContainer:r.css`
      background-color: ${e.colors.background.secondary};
      margin: ${e.spacing(1,0)};
      padding: ${e.spacing(1,4.6,1,1.5)};
      width: fit-content;
    `,matchersOperator:r.css`
      min-width: 140px;
    `,nestedPolicies:r.css`
      margin-top: ${a};
    `,removeButton:r.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,buttonGroup:r.css`
      margin: ${e.spacing(6)} 0 ${a};

      & > * + * {
        margin-left: ${e.spacing(1.5)};
      }
    `}};var oe;const se=({onChange:e,receivers:a,routes:t,readOnly:r=!1})=>{const i=(0,l.useStyles2)(ce),o=(0,l.useStyles2)(A),s=t.groupWaitValue?`${t.groupWaitValue}${t.groupWaitValueType}`:"-",c=t.groupIntervalValue?`${t.groupIntervalValue}${t.groupIntervalValueType}`:"-",d=t.repeatIntervalValue?`${t.repeatIntervalValue}${t.repeatIntervalValueType}`:"-",[u,p]=(0,n.useState)(t.routes),[m,g]=(0,n.useState)(!1);return(0,M.jsxs)("div",{className:o.container,children:[(0,M.jsx)("div",{className:o.titleCell,children:"Group wait"}),(0,M.jsx)("div",{className:o.valueCell,children:s}),(0,M.jsx)("div",{className:o.titleCell,children:"Group interval"}),(0,M.jsx)("div",{className:o.valueCell,children:c}),(0,M.jsx)("div",{className:o.titleCell,children:"Repeat interval"}),(0,M.jsx)("div",{className:o.valueCell,children:d}),(0,M.jsx)("div",{className:o.titleCell,children:"Nested policies"}),(0,M.jsxs)("div",{className:o.valueCell,children:[u.length?(0,M.jsx)(ue,{isAddMode:m,onCancelAdd:()=>{g(!1),p((e=>{const a=[...e];return a.pop(),a}))},onChange:a=>{e(Object.assign({},t,{routes:a})),m&&g(!1)},receivers:a,routes:u}):oe||(oe=(0,M.jsx)("p",{children:"No nested policies configured."})),!m&&!r&&(0,M.jsx)(l.Button,{className:i.addNestedRoutingBtn,icon:"plus",onClick:()=>{p((e=>[...e,y])),g(!0)},variant:"secondary",type:"button",children:"Add nested policy"})]})]})},ce=e=>({addNestedRoutingBtn:r.css`
      margin-top: ${e.spacing(2)};
    `});var de=t("./public/app/features/alerting/unified/components/silences/Matchers.tsx");const ue=({isAddMode:e,onCancelAdd:a,onChange:t,receivers:r,routes:i,readOnly:o=!1})=>{const[s,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(),p=(0,n.useCallback)((e=>u(e.id)),[]),m=(0,n.useCallback)((()=>u(void 0)),[]),v=[{id:"matchingCriteria",label:"Matching labels",renderCell:e=>(0,M.jsx)(de.g,{matchers:e.data.object_matchers.map(g._J)}),size:10},{id:"groupBy",label:"Group by",renderCell:e=>e.data.groupBy.join(", ")||"-",size:5},{id:"receiverChannel",label:"Contact point",renderCell:e=>e.data.receiver||"-",size:5},...o?[]:[{id:"actions",label:"Actions",renderCell:(e,a)=>{if(e.renderExpandedContent)return null;return(0,M.jsxs)(l.HorizontalGroup,{children:[(0,M.jsx)(l.Button,{"aria-label":"Edit route",icon:"pen",onClick:()=>{p(e),c(!0)},size:"sm",type:"button",variant:"secondary",children:"Edit"}),(0,M.jsx)(l.IconButton,{"aria-label":"Delete route",name:"trash-alt",onClick:()=>{const e=[...i];e.splice(a,1),t(e)},type:"button"})]})},size:"100px"}]],h=(0,n.useMemo)((()=>((e,a)=>e.map(((e,t)=>{var n;return{id:null!==(n=null==a?void 0:a(e))&&void 0!==n?n:t,data:e}})))(i)),[i]);return(0,n.useEffect)((()=>{e&&h.length&&u(h[h.length-1].id)}),[e,h]),(0,M.jsx)(U.t,{cols:v,isExpandable:!0,items:h,testIdGenerator:()=>"am-routes-row",onCollapse:m,onExpand:p,isExpanded:e=>d===e.id,renderExpandedContent:(n,l)=>e||s?(0,M.jsx)(le,{onCancel:()=>{e&&a(),c(!1)},onSave:e=>{const a=[...i];a[l]=Object.assign({},a[l],e),c(!1),t(a)},receivers:r,routes:n.data}):(0,M.jsx)(se,{onChange:e=>{const a=[...i];a[l]=Object.assign({},n.data,e),t(a)},receivers:r,routes:n.data,readOnly:o})})},pe=({buttonIcon:e,buttonLabel:a,buttonSize:t="lg",buttonVariant:n="primary",onButtonClick:r,text:i})=>{const o=(0,l.useStyles)(me);return(0,M.jsx)(Z,{children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("p",{className:o.text,children:i}),(0,M.jsx)(l.Button,{className:o.button,icon:e,onClick:r,size:t,type:"button",variant:n,children:a})]})})},me=e=>({container:r.css`
      background-color: ${e.colors.bg2};
      color: ${e.colors.textSemiWeak};
      padding: ${e.spacing.xl};
      text-align: center;
    `,text:r.css`
      margin-bottom: ${e.spacing.md};
    `,button:r.css`
      margin: ${e.spacing.md} 0 ${e.spacing.sm};
    `});var ge,ve,he,xe;const fe=({onChange:e,onRootRouteEdit:a,receivers:t,routes:r,readOnly:i=!1})=>{const[o,s]=(0,n.useState)(r.routes),[c,d]=(0,n.useState)(!1),u=(0,l.useStyles2)(be),p=()=>{d(!0),s((e=>[...e,Object.assign({},y,{matchers:[j]})]))};return(0,M.jsxs)("div",{className:u.container,children:[ge||(ge=(0,M.jsx)("h5",{children:"Specific routing"})),ve||(ve=(0,M.jsx)("p",{children:"Send specific alerts to chosen contact points, based on matching criteria"})),r.receiver?o.length>0?(0,M.jsxs)(M.Fragment,{children:[!c&&!i&&(0,M.jsx)(l.Button,{className:u.addMatcherBtn,icon:"plus",onClick:p,type:"button",children:"New policy"}),(0,M.jsx)(ue,{isAddMode:c,readOnly:i,onCancelAdd:()=>{d(!1),s((e=>{const a=[...e];return a.pop(),a}))},onChange:a=>{e(Object.assign({},r,{routes:a})),c&&d(!1)},receivers:t,routes:o})]}):i?xe||(xe=(0,M.jsx)(Z,{children:(0,M.jsx)("p",{children:"There are no specific policies configured."})})):(0,M.jsx)(pe,{buttonIcon:"plus",buttonLabel:"New specific policy",onButtonClick:p,text:"You haven't created any specific policies yet."}):i?he||(he=(0,M.jsx)(Z,{children:(0,M.jsx)("p",{children:"There is no default contact point configured for the root route."})})):(0,M.jsx)(pe,{buttonIcon:"rocket",buttonLabel:"Set a default contact point",onButtonClick:a,text:"You haven't set a default contact point for the root route yet."})]})},be=e=>({container:r.css`
      display: flex;
      flex-flow: column nowrap;
    `,addMatcherBtn:r.css`
      align-self: flex-end;
      margin-bottom: ${e.spacing(3.5)};
    `});var je,ye,Ce=t("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts"),$e=t("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),Ie=t("./public/app/features/alerting/unified/state/actions.ts"),Se=t("./public/app/features/alerting/unified/utils/redux.ts");const _e=(0,l.withErrorBoundary)((()=>{var e;const a=(0,i.useDispatch)(),t=(0,l.useStyles2)(Ne),[r,u]=(0,n.useState)(!1),[p,m]=(0,Ce.k)(),g=!p||(0,v.RY)(p),h=(0,$e._)((e=>e.amConfigs)),x=(0,n.useCallback)((()=>{p&&a((0,Ie.Yh)(p))}),[p,a]);(0,n.useEffect)((()=>{x()}),[x]);const{result:f,loading:b,error:j}=p&&h[p]||Se.oq,y=null==f?void 0:f.alertmanager_config,[I,_]=(0,n.useMemo)((()=>C(null==y?void 0:y.route)),[null==y?void 0:y.route]),N=S((null!==(e=null==y?void 0:y.receivers)&&void 0!==e?e:[]).map((e=>e.name))),w=()=>{u(!0)},V=()=>{u(!1)};(0,s.x)((e=>e.unifiedAlerting.saveAMConfig));const k=e=>{if(!f)return;const t=$(p,Object.assign({},I,e),_);r&&V(),a((0,Ie.mM)({newConfig:Object.assign({},f,{alertmanager_config:Object.assign({},f.alertmanager_config,{route:t})}),oldConfig:f,alertManagerSourceName:p,successMessage:"Saved",refetch:!0}))};return p?(0,M.jsxs)(c.J,{pageId:"am-routes",children:[(0,M.jsx)(d.P,{current:p,onChange:m}),j&&!b&&(0,M.jsx)(l.Alert,{severity:"error",title:"Error loading Alertmanager config",children:j.message||"Unknown error."}),b&&(ye||(ye=(0,M.jsx)(l.LoadingPlaceholder,{text:"Loading Alertmanager config..."}))),f&&!b&&!j&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{alertManagerSourceName:p,isEditMode:r,onSave:k,onEnterEditMode:w,onExitEditMode:V,receivers:N,routes:I}),(0,M.jsx)("div",{className:t.break}),(0,M.jsx)(fe,{onChange:k,readOnly:g,onRootRouteEdit:w,receivers:N,routes:I})]})]}):je||(je=(0,M.jsx)(o.l_,{to:"/alerting/routes"}))}),{style:"page"}),Ne=e=>({break:r.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
  `})},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,a,t)=>{t.d(a,{J:()=>o});t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=t("./public/app/core/components/Page/Page.tsx"),r=t("./public/app/core/selectors/navModel.ts"),l=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({children:e,pageId:a,isLoading:t})=>{const o=(0,r.h)((0,l.useSelector)((e=>e.navIndex)),a);return(0,i.jsx)(n.Z,{navModel:o,children:(0,i.jsx)(n.Z.Contents,{isLoading:t,children:e})})}},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,a,t)=>{t.d(a,{t:()=>o});var n=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("./packages/grafana-ui/src/index.ts"),i=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({cols:e,items:a,isExpandable:t=!1,onCollapse:o,onExpand:c,isExpanded:d,renderExpandedContent:u,testIdGenerator:p,renderPrefixCell:m,renderPrefixHeader:g})=>{if((o||c||d)&&!(o&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((t||u)&&(!t||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const v=(0,l.useStyles2)(s(e,t,!!g)),[h,x]=(0,n.useState)([]);return(0,i.jsxs)("div",{className:v.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:v.row,"data-testid":"header",children:[g&&g(),t&&(0,i.jsx)("div",{className:v.cell}),e.map((e=>(0,i.jsx)("div",{className:v.cell,children:e.label},e.id)))]}),a.map(((n,s)=>{var g;const f=d?d(n):h.includes(n.id);return(0,i.jsxs)("div",{className:v.row,"data-testid":null!==(g=null==p?void 0:p(n,s))&&void 0!==g?g:"row",children:[m&&m(n,s,a),t&&(0,i.jsx)("div",{className:(0,r.cx)(v.cell,v.expandCell),children:(0,i.jsx)(l.IconButton,{"aria-label":(f?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:v.expandButton,name:f?"angle-down":"angle-right",onClick:()=>(e=>{d&&o&&c?d(e)?o(e):c(e):x(h.includes(e.id)?h.filter((a=>a!==e.id)):[...h,e.id])})(n),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,r.cx)(v.cell,v.bodyCell),"data-column":e.label,children:e.renderCell(n,s)},`${n.id}-${e.id}`))),f&&u&&(0,i.jsx)("div",{className:v.expandedContentRow,"data-testid":"expanded-content",children:u(n,s,a)})]},n.id)}))]})},s=(e,a,t)=>{const n=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return a&&n.unshift("calc(1em + 16px)"),t&&n.unshift("0"),e=>({container:r.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:r.css`
      display: grid;
      grid-template-columns: ${n.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${t?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:r.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:r.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:r.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:r.css`
      grid-column-end: ${n.length+1};
      grid-column-start: ${t?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:r.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/silences/Matchers.tsx":(e,a,t)=>{t.d(a,{g:()=>c});var n=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=t("./packages/grafana-ui/src/index.ts"),l=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("./public/app/features/alerting/unified/components/AlertLabel.tsx"),o=t("./public/app/features/alerting/unified/utils/alertmanager.ts"),s=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({matchers:e,onRemoveLabel:a})=>{const t=(0,r.useStyles)(d),l=(0,n.useCallback)((e=>{a&&a(e)}),[a]);return(0,s.jsx)("div",{className:t.wrapper,children:e.map(((e,t)=>{const{name:n,value:r}=e;return(0,s.jsx)(i.i,{labelKey:n,value:r,operator:(0,o.zy)(e),onRemoveLabel:a?()=>l(t):void 0},`${n}-${r}-${t}`)}))})},d=e=>({wrapper:l.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,a,t)=>{t.d(a,{k:()=>c});var n=t("./public/app/core/hooks/useQueryParams.ts"),r=t("./public/app/core/store.ts"),l=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=t("./public/app/features/alerting/unified/utils/constants.ts"),o=t("./public/app/features/alerting/unified/utils/datasource.ts");function s(e){return e===o.GC||!!(0,o.aM)().find((a=>a.name===e))}function c(){const[e,a]=(0,n.K)(),t=(0,l.useCallback)((e=>{s(e)&&(e===o.GC?(r.Z.delete(i.de),a({[i.c4]:null})):(r.Z.set(i.de,e),a({[i.c4]:e})))}),[a]),c=e[i.c4];if(c&&"string"==typeof c)return s(c)?[c,t]:[void 0,t];const d=r.Z.get(i.de);return d&&"string"==typeof d&&s(d)?(t(d),[d,t]):[o.GC,t]}}}]);
//# sourceMappingURL=AlertAmRoutes.1f65f885c5a67f13d9d6.js.map