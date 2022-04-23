"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7429],{"./public/app/features/users/SignupInvited.tsx":(e,a,s)=>{s.r(a),s.d(a,{SignupInvitedPage:()=>g,default:()=>h});var n,r,i=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=s("./packages/grafana-runtime/src/index.ts"),l=s("./packages/grafana-ui/src/index.ts"),c=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useAsync.js"),o=s("./public/app/core/components/Page/Page.tsx"),d=s("./public/app/core/core.ts"),u=s("./public/app/core/config.ts"),m=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const p={main:{icon:"grafana",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},g=({match:e})=>{const a=e.params.code,[s,g]=(0,i.useState)(),[h,j]=(0,i.useState)(),[b,x]=(0,i.useState)();(0,c.Z)((async()=>{const e=await(0,t.getBackendSrv)().get(`/api/user/invite/${a}`);g({email:e.email,name:e.name,username:e.email}),j(e.name||e.email||e.username),x(e.invitedBy)}),[a]);return s?(0,m.jsx)(o.Z,{navModel:p,children:(0,m.jsxs)(o.Z.Contents,{children:[(0,m.jsxs)("h3",{className:"page-sub-heading",children:["Hello ",h||"there","."]}),(0,m.jsxs)("div",{className:"modal-tagline p-b-2",children:[(0,m.jsx)("em",{children:b||"Someone"})," has invited you to join Grafana and the organization"," ",(0,m.jsx)("span",{className:"highlight-word",children:d.Vt.user.orgName}),n||(n=(0,m.jsx)("br",{})),"Please complete the following and choose a password to accept your invitation and continue:"]}),(0,m.jsx)(l.Form,{defaultValues:s,onSubmit:async e=>{await(0,t.getBackendSrv)().post("/api/user/invite/complete",Object.assign({},e,{inviteCode:a})),window.location.href=(0,u.iE)().appSubUrl+"/"},children:({register:e,errors:a})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Field,{invalid:!!a.email,error:a.email&&a.email.message,label:"Email",children:(0,m.jsx)(l.Input,Object.assign({placeholder:"email@example.com"},e("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}})))}),(0,m.jsx)(l.Field,{invalid:!!a.name,error:a.name&&a.name.message,label:"Name",children:(0,m.jsx)(l.Input,Object.assign({placeholder:"Name (optional)"},e("name")))}),(0,m.jsx)(l.Field,{invalid:!!a.username,error:a.username&&a.username.message,label:"Username",children:(0,m.jsx)(l.Input,Object.assign({},e("username",{required:"Username is required"}),{placeholder:"Username"}))}),(0,m.jsx)(l.Field,{invalid:!!a.password,error:a.password&&a.password.message,label:"Password",children:(0,m.jsx)(l.Input,Object.assign({},e("password",{required:"Password is required"}),{type:"password",placeholder:"Password"}))}),r||(r=(0,m.jsx)(l.Button,{type:"submit",children:"Sign up"}))]})})]})}):null},h=g}}]);
//# sourceMappingURL=SignupInvited.1f65f885c5a67f13d9d6.js.map