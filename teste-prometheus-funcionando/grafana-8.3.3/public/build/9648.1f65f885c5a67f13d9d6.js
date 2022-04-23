"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9648],{"./public/app/core/components/Signup/SignupPage.tsx":(e,a,i)=>{i.r(a),i.d(a,{SignupPage:()=>u,default:()=>m});i("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s,r=i("./packages/grafana-ui/src/index.ts"),n=i("./public/app/core/config.ts"),o=i("./packages/grafana-runtime/src/index.ts"),l=i("./public/app/core/app_events.ts"),d=i("./packages/grafana-data/src/index.ts"),t=i("./public/app/core/components/Login/LoginLayout.tsx"),c=i("./public/app/core/components/PasswordField/PasswordField.tsx"),p=i("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const u=e=>{const a={email:e.queryParams.email,code:e.queryParams.code};return(0,p.jsx)(t.dd,{children:(0,p.jsx)(t.$s,{children:(0,p.jsx)(r.Form,{defaultValues:a,onSubmit:async e=>{""===e.name&&delete e.name,delete e.confirm;"redirect-to-select-org"===(await(0,o.getBackendSrv)().post("/api/user/signup/step2",{email:e.email,code:e.code,username:e.email,orgName:e.orgName,password:e.password,name:e.name}).catch((e=>{var a;const i=(null===(a=e.data)||void 0===a?void 0:a.message)||e;l.Z.emit(d.AppEvents.alertWarning,[i])}))).code&&window.location.assign((0,n.iE)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign((0,n.iE)().appSubUrl+"/")},children:({errors:e,register:a,getValues:i})=>{var o,l,d;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.Field,{label:"Your name",children:(0,p.jsx)(r.Input,Object.assign({id:"user-name"},a("name"),{placeholder:"(optional)"}))}),(0,p.jsx)(r.Field,{label:"Email",invalid:!!e.email,error:null===(o=e.email)||void 0===o?void 0:o.message,children:(0,p.jsx)(r.Input,Object.assign({id:"email"},a("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}}),{type:"email",placeholder:"Email"}))}),!(0,n.iE)().autoAssignOrg&&(0,p.jsx)(r.Field,{label:"Org. name",children:(0,p.jsx)(r.Input,Object.assign({id:"org-name"},a("orgName"),{placeholder:"Org. name"}))}),(0,n.iE)().verifyEmailEnabled&&(0,p.jsx)(r.Field,{label:"Email verification code (sent to your email)",children:(0,p.jsx)(r.Input,Object.assign({id:"verification-code"},a("code"),{placeholder:"Code"}))}),(0,p.jsx)(r.Field,{label:"Password",invalid:!!e.password,error:null==e||null===(l=e.password)||void 0===l?void 0:l.message,children:(0,p.jsx)(c.Z,Object.assign({id:"new-password",autoFocus:!0,autoComplete:"new-password"},a("password",{required:"Password is required"})))}),(0,p.jsx)(r.Field,{label:"Confirm password",invalid:!!e.confirm,error:null==e||null===(d=e.confirm)||void 0===d?void 0:d.message,children:(0,p.jsx)(c.Z,Object.assign({id:"confirm-new-password",autoComplete:"new-password"},a("confirm",{required:"Confirmed password is required",validate:e=>e===i().password||"Passwords must match!"})))}),(0,p.jsxs)(r.HorizontalGroup,{children:[s||(s=(0,p.jsx)(r.Button,{type:"submit",children:"Submit"})),(0,p.jsx)(r.LinkButton,{fill:"text",href:(0,n.iE)().appSubUrl+"/login",children:"Back to login"})]})]})}})})})},m=u}}]);
//# sourceMappingURL=9648.1f65f885c5a67f13d9d6.js.map