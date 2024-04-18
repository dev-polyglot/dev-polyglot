"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[257],{"./stories/components/BlogSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_components_main_BlogSection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/main/BlogSection.tsx");__webpack_require__("./app/globals.css");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/BlogSection",component:_components_main_BlogSection__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Primary={args:{primary:!0,label:"",variant:""}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: '',\n    variant: ''\n  }\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./components/main/BlogSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BlogSection});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_TextOverImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/main/TextOverImage.tsx");function Img(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{...props,className:"absolute top-0 left-0 w-full h-full object-cover"})})}function ImageTextSection(param){let{className,src}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:Boolean(className)?className:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative h-full w-full overflow-hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Img,{src,width:450,height:450})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mb-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl font-semibold",children:"Lorem Ipsum"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-xs sm:text-md mt-3",children:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ..."})]})]})})}function ListCard(param){let{className,src,heading,text}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:Boolean(className)?className:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative h-auto w-[35%] overflow-hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Img,{src,width:450,height:450})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-[65%] overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl font-semibold",children:heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-xs sm:text-md mt-3",children:text})]})]})})}function BlogSection(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"relative text-gray-700 container mx-auto py-16 px-8 h-full ",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-full  pb-8 ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextOverImage__WEBPACK_IMPORTED_MODULE_1__.A,{className:"relative w-full flex flex-col gap-2 items-center justify-center max-w-[90%] md:max-w-[60%] mx-auto my-8 ",variant:"5xl",heading:{text:"Blog",className:"text-center font-extrabold"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:min-h-screen ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex flex-col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageTextSection,{className:"flex flex-col h-[300px] md:h-[600px] gap-8 overflow-hidden",src:"/images/restraunt/thomas-tucker-MNtag_eXMKw-unsplash.jpg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-4 ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListCard,{className:"flex flex-row h-[100px] md:h-[200px] gap-8",src:"/images/restraunt/daniel-oberg-3sl9_ubYIno-unsplash.jpg",heading:"Lorem Ipsum",text:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum... "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListCard,{className:"flex flex-row h-[100px] md:h-[200px] gap-8",src:"/images/restraunt/brooke-lark-jUPOXXRNdcA-unsplash.jpg",heading:"Lorem Ipsum",text:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum... "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListCard,{className:"flex flex-row h-[100px] md:h-[200px] gap-8",src:"/images/restraunt/luke-michael-1cWZgnBhZRs-unsplash.jpg",heading:"Lorem Ipsum",text:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum... "})]})]})]})})})}BlogSection.__docgenInfo={description:"",methods:[],displayName:"BlogSection"}},"./components/main/TextOverImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextOverImage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-in-view.mjs");const container={hidden:{opacity:0,y:10},show:{opacity:1,type:"tween",y:0,transition:{staggerChildren:.25,type:"tween"}}},item={hidden:{opacity:0,y:50,type:"tween"},show:{opacity:1,y:0,type:"tween",transition:{duration:.3}}};function TextOverImageChild(param){let{className,category,heading,paragraph,buttons,buttonParentClasses,classes}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[category&&category.text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.p,{variants:item,className:" ".concat((null==classes?void 0:classes.category)&&(null==classes?void 0:classes.category)," ").concat((null==category?void 0:category.className)&&(null==category?void 0:category.className)," "),children:category.text}),heading&&heading.text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.h1,{variants:item,className:" ".concat((null==classes?void 0:classes.heading)&&(null==classes?void 0:classes.heading)," ").concat((null==heading?void 0:heading.className)&&(null==heading?void 0:heading.className)," "),children:heading.text}),paragraph&&paragraph.text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.p,{variants:item,className:" ".concat((null==classes?void 0:classes.paragraph)&&(null==classes?void 0:classes.paragraph)," ").concat((null==paragraph?void 0:paragraph.className)&&(null==paragraph?void 0:paragraph.className)," "),children:paragraph.text}),buttons&&buttons.length>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,{variants:item,className:"flex gap-4 ".concat(buttonParentClasses),children:buttons.map(((b,key)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:" ".concat((null==b?void 0:b.className)&&(null==b?void 0:b.className)," "),children:b.text},key)))})]})}const TextClassNames=variant=>{let category="",heading="",paragraph="";switch(variant){case"5xl":category="",heading="text-5xl leading-tight ",paragraph="mb-3";break;case"4xl":category="",heading="text-4xl leading-tight",paragraph="mb-3";break;case"3xl":category="",heading="text-3xl leading-tight",paragraph="mb-3";break;case"2xl":category="",heading="text-2xl leading-tight",paragraph="mb-3";break;case"xl":category="",heading="text-xl leading-tight",paragraph="mb-3";break;case"lg":category="",heading="text-lg leading-tight",paragraph="mb-3";break;case"md":category="",heading="text-md leading-tight",paragraph="mb-3";break;case"sm":category="",heading="text-sm leading-tight",paragraph="mb-3";break;case"xs":category="",heading="text-xs leading-tight",paragraph="mb-3"}return{category,heading,paragraph}};function Img(param){let{variant,className,src,imageWidth,imageHeight,scaleOnHover=!0,height}=param;return scaleOnHover?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src,width:imageWidth,height:imageHeight,className:"absolute top-0 left-0 w-full object-cover z-[0] hover:scale-[110%] transition ease-in duration-[0.6s]",style:{height:"auto"==height?"auto":"100%"}})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src,width:imageWidth,height:imageHeight,className:"absolute top-0 left-0 w-full object-cover z-[0]",style:{height:"auto"==height?"auto":"100%"}})})}function TextOverImage(param){let{variant,className,src,imageWidth,imageHeight,scaleOnHover=!0,height,...props}=param;const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),isInView=(0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.W)(ref,{once:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative w-full h-full overflow-hidden flex",ref,children:[isInView&&src&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Img,{src,width:imageWidth,imageHeight,className:"absolute top-0 left-0 bg-cover w-full h-auto z-[0]",scaleOnHover,height}),isInView&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.P.div,{variants:container,initial:"hidden",animate:"show",className:className&&className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextOverImageChild,{...props,classes:TextClassNames(variant)})})]})})}TextOverImage.__docgenInfo={description:"",methods:[],displayName:"TextOverImage",props:{scaleOnHover:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./node_modules/framer-motion/dist/es/utils/use-in-view.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>useInView});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),resolve_element=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs");const thresholds={some:0,all:1};function useInView(ref,{root,margin,amount,once=!1}={}){const[isInView,setInView]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(!ref.current||once&&isInView)return;const options={root:root&&root.current||void 0,margin,amount};return function inView(elementOrSelector,onStart,{root,margin:rootMargin,amount="some"}={}){const elements=(0,resolve_element.K)(elementOrSelector),activeIntersections=new WeakMap,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const onEnd=activeIntersections.get(entry.target);if(entry.isIntersecting!==Boolean(onEnd))if(entry.isIntersecting){const newOnEnd=onStart(entry);"function"==typeof newOnEnd?activeIntersections.set(entry.target,newOnEnd):observer.unobserve(entry.target)}else onEnd&&(onEnd(entry),activeIntersections.delete(entry.target))}))}),{root,rootMargin,threshold:"number"==typeof amount?amount:thresholds[amount]});return elements.forEach((element=>observer.observe(element))),()=>observer.disconnect()}(ref.current,(()=>(setInView(!0),once?void 0:()=>setInView(!1))),options)}),[root,ref,margin,once,amount]),isInView}}}]);