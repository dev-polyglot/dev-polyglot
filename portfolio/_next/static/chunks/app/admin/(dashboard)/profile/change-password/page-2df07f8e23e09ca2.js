(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8576],{1755:function(e,r,n){Promise.resolve().then(n.bind(n,7660))},7660:function(e,r,n){"use strict";n.d(r,{default:function(){return c}});var s=n(7437),l=n(724),t=n(6934),a=n(1513),i=n(2265),u=n(9840),o=n(5575);function c(e){let{data:r}=e;(0,l.w)(1);let{form:n,validate:c,getValues:d}=(0,t.SL)({password:a.Z.password(),confirm_password:a.Z.password()});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(u.Z,{}),children:(0,s.jsx)("div",{className:"flex items-center justify-center mt-16",children:(0,s.jsxs)("div",{className:"w-full mx-16",children:[(0,s.jsx)("div",{className:"mb-5 text-2xl bold",children:(0,s.jsx)("h2",{children:"Change password"})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(o.Z,{placeholder:"Password",helper:n.password})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(o.Z,{placeholder:"Confirm Password",helper:n.confirm_password})}),(0,s.jsxs)("div",{className:"text-right mb-10  flex justify-end gap-4",children:[(0,s.jsx)("button",{className:"border rounded-full px-4 py-2 max-w-[200px] w-full",onClick:()=>{},children:"Cancel"}),(0,s.jsx)("button",{className:"border rounded-full px-4 py-2 max-w-[200px] w-full",onClick:()=>{c()},children:"Change Password"})]})]})})})})}},5537:function(e,r,n){"use strict";var s=n(7437);r.Z=function(e){let{children:r,f:n,className:l,...t}=e,a=" ".concat((()=>{let e=[];return n&&(e.push("flex"),n.includes("h")&&e.push("items-center"),n.includes("v")&&e.push("justify-center"),n.includes("fc")&&e.push("flex-col"),n.includes("fr")&&e.push("flex-row")),e.join(" ")})()," ").concat(l||""," ");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:" ".concat(a," "),...t,children:r})})}},2930:function(e,r,n){"use strict";var s=n(7437);let l=(0,n(2265).forwardRef)(function(e,r){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)("input",{className:"px-4 py-3 w-full rounded-lg ",ref:e.iref,...e})})})});function t(e){let{children:r,className:n,placeholder:l,...t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("input",{className:n||"",placeholder:l||"",...t})})}r.Z=function(e){return(null==e?void 0:e.iref)?(0,s.jsx)(l,{...e}):(0,s.jsx)(t,{...e})}},6638:function(e,r,n){"use strict";var s=n(7437);r.Z=function(e){let{children:r,...n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("li",{...n,children:r})})}},7858:function(e,r,n){"use strict";var s=n(7437);r.Z=function(e){let{children:r,...n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{...n,children:r})})}},9840:function(e,r,n){"use strict";n.d(r,{Z:function(){return l}});var s=n(7437);function l(e){let{}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-12 h-12 border-t-[#047857] border-[4px] rounded-[50%]",style:{animation:"loader-spinner 0.6s linear infinite"}})})}},4518:function(e,r,n){"use strict";var s=n(7437),l=n(2930),t=n(5537),a=n(7858),i=n(6638);r.Z=function(e){var r,n;let{children:u,helper:o,...c}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(t.Z,{f:"frh",className:"gap-2 my-2",children:[(0,s.jsx)(l.Z,{type:"radio",iref:null==o?void 0:o.ref,onChange:null==o?void 0:o.onChange,...c}),u]}),Array.isArray(null==o?void 0:o.errors)&&(null==o?void 0:null===(r=o.errors)||void 0===r?void 0:r.length)>0?(0,s.jsx)(a.Z,{className:"flex-col m-1 text-sm text-red-700",children:(null==o?void 0:o.errors)&&(null==o?void 0:null===(n=o.errors)||void 0===n?void 0:n.map((e,r)=>(0,s.jsx)(i.Z,{className:"mt-1",children:e},"k-".concat(r))))}):null]})})}},5575:function(e,r,n){"use strict";var s=n(7437),l=n(5537),t=n(7858),a=n(6638),i=n(2930);r.Z=function(e){var r,n;let{children:u,type:o,placeholder:c,helper:d,...f}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.Z,{f:"c",className:"flex-col mb-6",children:[(0,s.jsx)(i.Z,{className:"px-4 py-3 w-full rounded-lg border",placeholder:c||"",iref:d.ref,...f,onBlur:d.onChange}),Array.isArray(null==d?void 0:d.errors)&&(null==d?void 0:null===(r=d.errors)||void 0===r?void 0:r.length)>0?(0,s.jsx)(t.Z,{className:"flex-col m-1 text-sm text-red-700",children:(null==d?void 0:d.errors)&&(null==d?void 0:null===(n=d.errors)||void 0===n?void 0:n.map((e,r)=>(0,s.jsx)(a.Z,{className:"mt-1",children:e},"k-".concat(r))))}):null]})})}},6463:function(e,r,n){"use strict";var s=n(1169);n.o(s,"useParams")&&n.d(r,{useParams:function(){return s.useParams}}),n.o(s,"usePathname")&&n.d(r,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(r,{useRouter:function(){return s.useRouter}})},1513:function(e,r,n){"use strict";var s=n(9772);class l{static username(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:"Username must only contains letters, numbers hyphen and underscore."})}static password(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-\W]+$/.test(e),{message:""})}static firstName(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:""})}static lastName(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:""})}static email(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:""})}static phoneNumber(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:""})}static address(){return s.z.string().min(5).max(50).refine(e=>/^[a-zA-Z-0-9_-]+$/.test(e),{message:""})}}r.Z=l},6934:function(e,r,n){"use strict";n.d(r,{B$:function(){return v},SL:function(){return h}});var s=n(7437),l=n(2265),t=n(9772),a=n(5575),i=n(4518),u=n(2930),o=n(5537),c=n(7858),d=n(6638),f=function(e){var r,n;let{children:l,helper:t,...a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)(o.Z,{f:"frh",className:"gap-2 my-2",children:[(0,s.jsx)(u.Z,{type:"checkbox",iref:t.ref,onChange:t.onChange,...a}),l]}),Array.isArray(null==t?void 0:t.errors)&&(null==t?void 0:null===(r=t.errors)||void 0===r?void 0:r.length)>0?(0,s.jsx)(c.Z,{className:"flex-col m-1 text-sm text-red-700",children:(null==t?void 0:t.errors)&&(null==t?void 0:null===(n=t.errors)||void 0===n?void 0:n.map((e,r)=>(0,s.jsx)(d.Z,{className:"mt-1",children:e},"k-".concat(r))))}):null]})})};let m=e=>{let{component:r,...n}=e;return"textinput"==r?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{...n})}):"radio"==r?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{...n})}):"checkbox"==r?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f,{...n})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{...n})})},x=(e,r)=>{let[n,s]=(0,l.useState)(null),[t,a]=(0,l.useState)([]),i=(0,l.useRef)(null),u=()=>{if(r){var e,n;let s=r.safeParse(i.current.value);return a((null==s?void 0:null===(n=s.error)||void 0===n?void 0:null===(e=n.format())||void 0===e?void 0:e._errors)||[]),(null==s?void 0:s.success)||!1}return!1};return Object.freeze({ref:i,onChange:e=>{u()&&s(e)},getValue:()=>{var e;return null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.value},validate:u,validator:r,errors:t,setErrors:a})},h=(e,r)=>{let n=Object.keys(e),s=(()=>{let r={};return n.forEach(n=>{r[n]=x(n,e[n])}),r})();return{form:s,validate:()=>{let e={},r={};n.forEach(n=>{e[n]=s[n].getValue(),r[n]=s[n].validator,s[n].validate()});let l=t.z.object(r).safeParse(e);return(null==l?void 0:l.success)||!1},getValues:()=>{let e={};return n.forEach(r=>{e[r]=s[r].getValue()}),e}}},v=(e,r,n,l,a,i)=>{let u={},o=[],c=l?Object.keys(l):[];console.log(c),e.forEach(e=>{if("object"==typeof e&&"string"==typeof(null==e?void 0:e.slug)&&e.slug&&"inputgroup"!==e.type)u[e.slug]=x(e.slug,e.validator),c.includes(e.slug)&&(e.props.defaultValue=l[e.slug]),o.push((0,s.jsx)(m,{helper:u[e.slug],component:e.type,...e.props}));else if("inputgroup"==e.type){let r=[];e.children.forEach(e=>{!Array.isArray(e)&&"object"==typeof e&&"string"==typeof(null==e?void 0:e.slug)&&e.slug&&(u[e.slug]=x(e.slug,e.validator),c.includes(e.slug)&&(e.props.defaultValue=l[e.slug]),r.push((0,s.jsx)(m,{helper:u[e.slug],component:e.type,...e.props})))}),o.push((0,s.jsx)("div",{className:e.containerClassNames,children:r.map((r,n)=>(0,s.jsx)("div",{className:e.classNames,children:r},"k-".concat(n)))}))}});let d=(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-2xl my-6",children:r}),(0,s.jsxs)("form",{children:[o.map((e,r)=>(0,s.jsx)("div",{children:e},"k-".concat(r))),(0,s.jsxs)("div",{className:"flex justify-end gap-4",children:[a&&(0,s.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:a,children:"Cancel"}),i&&(0,s.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{i(f())},children:"Submit"})]})]})]}),f=()=>{let e=Object.keys(u),r={};return e.forEach(e=>{r[e]=u[e].getValue()}),r};return{formComponent:d,form:u,validate:()=>{var e;let r=Object.keys(u),s={},l={};r.forEach(e=>{s[e]=u[e].getValue(),l[e]=u[e].validator,u[e].validate()});let a=t.z.object(l);n.forEach(e=>{a=a.refine(e.check,e.ctx)});let i=a.safeParse(s),o=null==i?void 0:null===(e=i.error)||void 0===e?void 0:e.format();return r.forEach(e=>{if(null==o?void 0:o.hasOwnProperty(e)){var r;u[e].setErrors((null===(r=o[e])||void 0===r?void 0:r._errors)||[])}}),(null==i?void 0:i.success)||!1},getValues:f}}},724:function(e,r,n){"use strict";n.d(r,{w:function(){return t}});var s=n(6463),l=n(1444);let t=function(){var e;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=(0,s.usePathname)(),t=(0,l.v9)(e=>{var r;return(null==e?void 0:null===(r=e.base)||void 0===r?void 0:r.url)||""});if(r<1)return t;let a=null==n?void 0:null===(e=n.split("/"))||void 0===e?void 0:e.filter(e=>(null==e?void 0:e.trim())!="");return a.length<1?t:"".concat(t,"/").concat(a[0])}}},function(e){e.O(0,[1444,9772,2971,7023,1744],function(){return e(e.s=1755)}),_N_E=e.O()}]);