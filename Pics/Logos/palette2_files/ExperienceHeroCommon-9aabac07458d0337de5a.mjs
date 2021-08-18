(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["ExperienceHeroCommon",127],{"0PSK":function(e,t,n){var a=n("q1tI"),i=n.n(a);t.a=i.a.createContext(null)},KDF4:function(e,t,n){n.r(t);var a=n("q1tI"),i=n.n(a),s=n("/MKj"),o=n("gxu6"),r=n("n6mq");const l=70,c=40;var p=function(e){const{accessibilityLabel:t,iconType:n,iconBackgroundColor:a,iconColor:s,onClickHander:o,text:p,widthInColumn:d}=e;return i.a.createElement(r.d,{column:d,display:"flex",justifyContent:"center",minWidth:248},i.a.createElement(r.Q,{onTap:o},i.a.createElement(r.d,{display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(r.d,{color:a,display:"flex",justifyContent:"center",alignItems:"center",width:l,height:l,rounding:"circle"},i.a.createElement(r.q,{accessibilityLabel:t,color:s,icon:n,size:c})),i.a.createElement(r.d,{display:"inlineBlock",marginStart:2},i.a.createElement(r.R,{inline:!0},i.a.createElement("span",{className:"deprecatedTextSizeXL"},p))))))},d=n("Ye/N"),u=n("eOdZ"),m=n("TiQD"),h=n("c50B");function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f extends a.Component{constructor(...e){super(...e),b(this,"state",{websiteUrl:this.props.websiteUrl||"",websiteUrlErrors:[]}),b(this,"validators",{websiteUrl:[Object(h.q)({message:d.a._("Not a valid url.","[m10n] Validation error when a url is not a valid format","[m10n] Validation error when a url is not a valid format")})]}),b(this,"handleWebsiteChange",({value:e})=>{const t=Object(h.r)(this.validators.websiteUrl,e);this.setState({websiteUrl:e,websiteUrlErrors:t});const{onWebsiteInputChange:n}=this.props;n&&n(e)})}render(){const{onDismiss:e,onComplete:t}=this.props,{websiteUrlErrors:n}=this.state;return i.a.createElement(m.b,{accessibilityModalLabel:d.a._("What's your website","Accessibility label for modal to input user website","Accessibility label for modal to input user website"),footer:i.a.createElement(r.d,{alignItems:"center",column:12,display:"flex",justifyContent:"end",paddingX:2},i.a.createElement(r.d,{"data-test-id":"user-website-input-close",flex:"shrink",paddingX:4},i.a.createElement(r.e,{color:"gray",onClick:e,text:d.a._("Cancel","Button label for cancelling the action to set profile cover pins","Button label for cancelling the action to set profile cover pins")})),i.a.createElement(r.d,{"data-test-id":"user-website-input-next",flex:"shrink"},i.a.createElement(r.e,{color:"red",onClick:n=>{e(),t()},text:d.a._("Next","Button label for opening the claim website modal","Button label for opening the claim website modal")}))),heading:d.a._("What's your website","Header for the user website input modal.","Header for the user website input modal."),onDismiss:e,size:"sm"},i.a.createElement(r.d,{height:130,padding:6},i.a.createElement(r.T,{errorMessage:n&&n.join(", "),id:"userWebsite",name:"website_url",onChange:this.handleWebsiteChange,placeholder:d.a._("www.red-shoes-online.com","Sample website prompt for claiming a website","Sample website prompt for claiming a website"),size:"lg",value:this.state.websiteUrl||""})))}}var E=n("33Sm"),g=n("joD6"),C=n("fArA"),x=n("U4JR"),w=n("C0mq");function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(C.compose)(Object(s.connect)((function({creatorChecklist:e}){if(e){const{pinCreatedViaCreatorChecklist:t}=e;return{pinCreatedViaCreatorChecklist:t}}return{pinCreatedViaCreatorChecklist:!1}}),()=>({})),g.a,w.a)(class extends a.Component{constructor(...e){super(...e),y(this,"state",{attemptToClaimWebsite:"1"===o.a("attemptToClaimWebsite"),showUserWebsiteInputModal:!1,websiteModalShown:!1,websiteUrl:this.props.viewer.domainUrl}),y(this,"handleClaimWebsiteSuccess",()=>{Object(x.a)(7509,{view:1,viewParameter:92,component:13233}),this.setState({attemptToClaimWebsite:"1"===o.a("attemptToClaimWebsite")})}),y(this,"closeUserWebsiteInputModal",()=>this.setState({showUserWebsiteInputModal:!1})),y(this,"closeClaimWebsiteModal",()=>{this.setState({websiteModalShown:!1})}),y(this,"handleWebsiteChange",e=>{this.setState({websiteUrl:e})}),y(this,"navigateToCreatePin",()=>{const{history:e}=this.props;Object(x.a)(101,{view:1,viewParameter:92,component:13233,element:10797}),e.push("/pin-builder/")}),y(this,"openClaimWebsiteModal",()=>{if(this.setState({websiteModalShown:!0}),this.state.websiteUrl!==this.props.viewer.domainUrl){u.a.create("UserSettingsResource",{website_url:this.state.websiteUrl}).callUpdate().finally(()=>{o.c("attemptToClaimWebsite")})}}),y(this,"showUserWebsiteInputModal",()=>{Object(x.a)(101,{view:1,viewParameter:92,component:13233,element:10796}),this.setState({showUserWebsiteInputModal:!0})}),y(this,"renderChecklistAction",(e,t)=>{let n;switch(e){case"show_claim_website":const{attemptToClaimWebsite:e}=this.state;return n=d.a._("Claim your website","Label for claiming website","Label for claiming website"),i.a.createElement(p,{accessibilityLabel:n,iconType:e?"ellipsis":"globe",iconBackgroundColor:"white",iconColor:"blue",onClickHander:this.showUserWebsiteInputModal,text:n,widthInColumn:t});case"show_create_pin":const{pinCreatedViaCreatorChecklist:a}=this.props;return n=d.a._("Create your first Pin","Label for creating the first pin","Label for creating the first pin"),i.a.createElement(p,{accessibilityLabel:n,iconType:a?"check":"pin",iconBackgroundColor:a?"green":"white",iconColor:a?"white":"blue",onClickHander:this.navigateToCreatePin,text:n,widthInColumn:t});default:return null}})}render(){const{actionList:e,handleDismiss:t,header:n,viewer:a}=this.props,{websiteModalShown:s,websiteUrl:o}=this.state,l=e&&e.length?Math.floor(12/e.length):1,c=n||d.a._("Follow these steps to get going on Pinterest","The headline of new business user's checklist","The headline of new business user's checklist");return i.a.createElement(r.d,{display:"flex",justifyContent:"between",height:150,color:"lightGray",position:"relative"},i.a.createElement(r.d,{color:"blue",display:"flex",alignItems:"center",justifyContent:"center",width:"40%",minWidth:352,paddingX:8,paddingY:8,dangerouslySetInlineStyle:{__style:{borderTopRightRadius:"240px 476px"}}},i.a.createElement(r.p,{color:"white"},c)),i.a.createElement(r.d,{display:"flex",width:"60%",alignItems:"center",justifyContent:"center",paddingX:12},e.map(e=>this.renderChecklistAction(e,l))),i.a.createElement(r.d,{position:"absolute",top:!0,right:!0,padding:2},i.a.createElement(r.r,{accessibilityLabel:d.a._("Close","Close the experience UI","Close the experience UI"),icon:"cancel",onClick:t})),this.state.showUserWebsiteInputModal&&i.a.createElement(f,{onComplete:this.openClaimWebsiteModal,onDismiss:this.closeUserWebsiteInputModal,onWebsiteInputChange:this.handleWebsiteChange,websiteUrl:a.domainUrl}),s&&i.a.createElement(E.a,{onHide:this.closeClaimWebsiteModal,attemptToClaimWebsite:()=>{},onResourceError:()=>{},onSuccess:this.handleClaimWebsiteSuccess,websiteUrl:o}))}}),T=n("c4Fo"),S=n("5JIi"),_=({color:e,completeButtonText:t,completeButtonUrl:n,completeButtonUrlInNewTab:a,dismissButtonText:s,handleComplete:o=(()=>{}),handleDismiss:r=(()=>{}),header:l="",headerSubtitle:c=""})=>i.a.createElement(S.a,{message:(l+" "+c).trim(),dismissButtonText:s||d.a._("Close","Closing a Hero banner","Closing a Hero banner"),completeButtonText:t||d.a._("Go","Completing the Hero banner","Completing the Hero banner"),completeUrl:n,onComplete:o,onDismiss:r,useNewTab:a,color:e});var k=function({color:e,completeButtonText:t,completeButtonUrl:n,completeButtonUrlInNewTab:a,handleComplete:s=(()=>{}),header:o="",headerSubtitle:r=""}){return i.a.createElement(S.a,{message:(o+" "+r).trim(),completeButtonText:t||d.a._("Go","Completing the Hero banner","Completing the Hero banner"),completeUrl:n,onComplete:s,useNewTab:a,color:e||"darkGray"})},I=n("T8nx"),N=n("NdXn"),O=n("N0Eu"),U=n("rYoy"),L=n("w70y");const j=Object(a.lazy)(()=>n.e("RenuxContainerCommon").then(n.bind(null,"ItC7"))),W=5,B=120;function D(e){const[t,n]=Object(a.useState)(!1),[s,o]=Object(a.useState)(!1),l=Object(L.a)({name:"InterestFollowingResource",options:{page_size:W,field_set_key:"grid_item_nux"}}),{data:c,isFetching:p,isLoaded:u,refreshData:m}=l,h=()=>{s?m():Object(x.a)(101,{component:13215,viewParameter:3197}),o(!s)};return i.a.createElement(r.d,{color:"white",marginTop:6,paddingY:2,position:"relative"},i.a.createElement(r.d,{marginEnd:5,position:"absolute",right:!0,top:!0},i.a.createElement(r.r,{accessibilityLabel:d.a._("Close","homefeed.topicEducation.dismissButtonLabel","Dismiss button label for topic education experience banner"),icon:"cancel",iconColor:"darkGray",onClick:e.handleDismiss,size:"lg"})),i.a.createElement(r.p,{align:"center",size:"md"},d.a._("Ideas in your feed are based on these topics","homefeed.topicEducation.header","Educating user that his HF is made of these topics")),i.a.createElement(r.d,{display:"flex",justifyContent:"center",paddingY:6},!p&&u&&(null==c?void 0:c.length)?(e=>i.a.createElement(r.Q,{fullWidth:!1,mouseCursor:"pointer",onTap:h,rounding:4},e.map(e=>i.a.createElement(r.d,{key:e.id,paddingX:1,display:"inlineBlock"},i.a.createElement(O.a,{interest:e,key:e.id,isSelected:!1,isTopicEdu:!0,size:"md_120"})))))(c):null,i.a.createElement(r.d,{alignItems:"center",display:"flex",justifyContent:"center"},i.a.createElement(r.K,{accessibilityLabel:d.a._("Loading additional topics","Label for the loading state spinner in the Topics section of the Following page","Label for the loading state spinner in the Topics section of the Following page"),show:p||!u})),(()=>i.a.createElement(r.d,{display:"inlineBlock",paddingX:1},!p&&i.a.createElement(r.Q,{fullWidth:!1,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onTap:h,rounding:4},i.a.createElement(r.d,{alignItems:"center",color:t?"darkWash":"lightWash",display:"flex",height:B,justifyContent:"center",rounding:4,width:B},i.a.createElement(r.q,{accessibilityLabel:d.a._("Modify Topics","homefeed.topicEducation.editButtonLabel","Edit topics button label in topic education experience at home feed"),color:"darkGray",icon:"add",size:24}))),i.a.createElement(U.a,null,s&&i.a.createElement(j,{isSimpleRenux:!0,hideFollowedInterests:!1,dismissCallback:h,completeCallback:h}))))()))}var M=n("Cufx"),P=n("v/Q4"),H=n("vvax");const A=1016,R="#EBF4FE";function z({completeButtonText:e,headerSubtitle:t,handleComplete:n,handleDismiss:a}){const s=Object(P.a)(),{firstName:o,imageLargeUrl:l}=s.isAuth?s:{};return i.a.createElement(r.d,{display:"flex",justifyContent:"center",position:"relative"},i.a.createElement(r.d,{display:"flex",alignItems:"center",justifyContent:"between",marginTop:4,marginBottom:2,marginStart:8,marginEnd:8,rounding:4,padding:8,position:"relative",width:A,dangerouslySetInlineStyle:{__style:{backgroundColor:R,boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.1)"}}},i.a.createElement(r.d,{display:"flex",alignItems:"center"},i.a.createElement(r.d,{marginEnd:6,marginTop:-2,marginBottom:-2},i.a.createElement(M.a,{name:o,src:l,size:"lg",outline:!0})),i.a.createElement(r.d,{display:"flex",direction:"column",justifyContent:"center"},i.a.createElement(r.d,{marginBottom:2},i.a.createElement(r.p,{size:"sm"},Object(H.b)(d.a._("Welcome back, {{ name }}",'shown on a banner, "welcome back, first_name"','shown on a banner, "welcome back, first_name"'),{name:o}))),i.a.createElement(r.R,null,t))),i.a.createElement(r.d,{marginEnd:4},i.a.createElement(r.e,{color:"white",size:"lg",text:e,onClick:n,inline:!0})),i.a.createElement(r.d,{position:"absolute",padding:2,top:!0,right:!0},i.a.createElement(r.r,{accessibilityLabel:d.a._("Close","accessible label for close button","accessible label for close button"),iconColor:"darkGray",icon:"cancel",onClick:a,size:"sm"}))))}var F=n("pQ8y"),q=n("gC5q"),V=n("pLLR");function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"ExperienceHero",(function(){return K}));const G=400;class K extends a.PureComponent{constructor(...e){super(...e),X(this,"state",{animateIn:!1}),X(this,"startTransition",()=>{const{animateIn:e}=this.state;e||this.setState({animateIn:!0})})}getHeroClass(e){switch(e){case 501370:return I.b;case 500863:return z;case 500689:return D;case 500840:return v;case 501117:case 501153:case 501487:return k;default:return _}}render(){const{placementId:e,requestContext:t,completeButtonUrl:n,onDismiss:a}=this.props,{animateIn:s}=this.state;return i.a.createElement(T.a,{placementId:e,type:13},({experience_id:e,complete:o,dismiss:r,display_data:l})=>{n&&(l.complete_button_url=n);const c=this.getHeroClass(e),p={requestContext:t,experienceId:e,handleComplete:o,handleDismiss:()=>{a&&a(),r()},color:"blue",...Object(q.a)(N.a)(l)};return this.startTransition(),i.a.createElement(F.a,{in:s,timeout:G,classNames:"ExperienceHero",unmountOnExit:!0},i.a.createElement(i.a.StrictMode,null,i.a.createElement(c,p)))})}}t.default=Object(V.e)(K)},ZTTo:function(e,t,n){e.exports=n("en5+")()},dI71:function(e,t,n){function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},"en5+":function(e,t,n){var a=n("uOrA");function i(){}e.exports=function(){function e(e,t,n,i,s,o){if(o!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=i,n.PropTypes=n,n}},pQ8y:function(e,t,n){var a=n("wx14"),i=n("zLVn"),s=n("dI71");n("ZTTo");function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n("q1tI"),l=n.n(r),c=n("i8i4"),p=n.n(c),d=!1,u=n("0PSK"),m="unmounted",h="exited",b="entering",f="entered",E=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var i,s=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?s?(i=h,a.appearStatus=b):i=f:i=t.unmountOnExit||t.mountOnEnter?m:h,a.state={status:i},a.nextCallback=null,a}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===m?{status:h}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==b&&n!==f&&(t=b):n!==b&&n!==f||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=p.a.findDOMNode(this);t===b?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:m})},n.performEnter=function(e,t){var n=this,a=this.props.enter,i=this.context?this.context.isMounting:t,s=this.getTimeouts(),o=i?s.appear:s.enter;!t&&!a||d?this.safeSetState({status:f},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,i),this.safeSetState({status:b},(function(){n.props.onEntering(e,i),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(e,i)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!d?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:h},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:h},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children,a=Object(i.a)(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return l.a.createElement(u.a.Provider,{value:null},n(e,a));var s=l.a.Children.only(n);return l.a.createElement(u.a.Provider,{value:null},l.a.cloneElement(s,a))},t}(l.a.Component);function g(){}E.contextType=u.a,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},E.UNMOUNTED=0,E.EXITED=1,E.ENTERING=2,E.ENTERED=3,E.EXITING=4;var C=E,x=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"==typeof n.className?n.className=o(n.className,a):n.setAttribute("class",o(n.className&&n.className.baseVal||"",a)));var n,a}))},w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"==typeof n,i=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:a?i+"-active":n[e+"Active"],doneClassName:a?i+"-done":n[e+"Done"]}},t}Object(s.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"==typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,i=n.active,s=n.done;this.appliedClasses[t]={},a&&x(e,a),i&&x(e,i),s&&x(e,s)},n.render=function(){var e=this.props,t=(e.classNames,Object(i.a)(e,["classNames"]));return l.a.createElement(C,Object(a.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.a.Component);w.defaultProps={classNames:""},w.propTypes={};t.a=w},uOrA:function(e,t,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/ExperienceHeroCommon-9aabac07458d0337de5a.mjs.map