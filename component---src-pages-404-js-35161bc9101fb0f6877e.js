"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[883],{9793:function(t,e,i){i.d(e,{Y:function(){return o},z:function(){return n}});var s=i(7294);const n=(0,s.createContext)(),o=t=>{let{children:e}=t;const{0:i,1:o}=(0,s.useState)(!1);return s.createElement(n.Provider,{value:{hovering:i,setHovering:o}},e)}},3922:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(7294);function n(t,e,i){return Math.max(t,Math.min(e,i))}class o{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let i=!1;if(this.duration&&this.easing){this.currentTime+=t;const e=n(0,this.currentTime/this.duration,1);i=e>=1;const s=i?1:this.easing(e);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(t,e,i,s){return function(t,e,i){return(1-i)*t+i*e}(t,e,1-Math.exp(-i*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,i=!0)):(this.value=this.to,i=!0);i&&this.stop(),null===(e=this.onUpdate)||void 0===e||e.call(this,this.value,i)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:n,onStart:o,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=n,this.currentTime=0,this.isRunning=!0,null==o||o(),this.onUpdate=r}}class r{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:s=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(t,e){let i;return function(){let s=arguments,n=this;clearTimeout(i),i=setTimeout((function(){t.apply(n,s)}),e)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class l{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let s=0,n=i.length;s<n;s++)i[s](...e)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}destroy(){this.events={}}}const h=100/6;class a{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{var e,i,s,n;const{clientX:o,clientY:r}=t.targetTouches?t.targetTouches[0]:t,l=-(o-(null!==(i=null===(e=this.touchStart)||void 0===e?void 0:e.x)&&void 0!==i?i:0))*this.touchMultiplier,h=-(r-(null!==(n=null===(s=this.touchStart)||void 0===s?void 0:s.y)&&void 0!==n?n:0))*this.touchMultiplier;this.touchStart.x=o,this.touchStart.y=r,this.lastDelta={x:l,y:h},this.emitter.emit("scroll",{deltaX:l,deltaY:h,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=1===s?h:2===s?this.windowWidth:1,i*=1===s?h:2===s?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new l,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("touchstart",this.onTouchStart),this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd)}}class c{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:n=!0,syncTouch:h=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:u=35,duration:d,easing:p=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:m=.1,infinite:v=!1,orientation:w="vertical",gestureOrientation:g="vertical",touchMultiplier:S=1,wheelMultiplier:f=1,autoResize:E=!0,prevent:y,virtualScroll:_,__experimental__naiveDimensions:T=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey)return;const n=s.type.includes("touch"),o=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&n&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var e,i,s,r,l;return t instanceof Element&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||n&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||o&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&n||this.options.smoothWheel&&o))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e);const u=n&&this.options.syncTouch,d=n&&"touchend"===s.type&&Math.abs(c)>5;d&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.6",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:n,syncTouch:h,syncTouchLerp:c,touchInertiaMultiplier:u,duration:d,easing:p,lerp:m,infinite:v,gestureOrientation:g,orientation:w,touchMultiplier:S,wheelMultiplier:f,autoResize:E,prevent:y,virtualScroll:_,__experimental__naiveDimensions:T},this.animate=new o,this.emitter=new l,this.dimensions=new r({wrapper:t,content:e,autoResize:E}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new a(s,{touchMultiplier:S,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:r=this.options.easing,lerp:l=this.options.lerp,onStart:h,onComplete:a,force:c=!1,programmatic:u=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||c){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}const s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t&&(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=n(0,t,this.limit),t!==this.targetScroll)){if(this.userData=d,i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==a||a(this),void(this.userData={});u||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:r,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==h||h(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),u&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==a||a(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextNativeScrollEvent}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,e){return(t%e+e)%e}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}var u=i(9793);var d=()=>{const{hovering:t}=(0,s.useContext)(u.z),{0:e,1:i}=(0,s.useState)({x:0,y:0});return(0,s.useEffect)((()=>{const t=t=>{i({x:t.clientX,y:t.clientY})};if("undefined"!=typeof window)return window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}}),[]),s.createElement("div",{className:"custom-cursor "+(t?"hovering":""),style:{top:e.y+"px",left:e.x+"px"}},t&&s.createElement("img",{src:t,alt:"cursor-image"}))},p=i(1883);var m=t=>{let{pageTitle:e,children:i}=t;return(0,s.useEffect)((()=>{if("undefined"!=typeof window){const t=new c;function e(i){t.raf(i),requestAnimationFrame(e)}requestAnimationFrame(e)}}),[]),s.createElement(u.Y,null,s.createElement(d,null),s.createElement("div",{className:"app-container"},s.createElement("p",{className:"icon"},s.createElement(p.Link,{to:"/"},"justin")),s.createElement("p",{className:"intro"},"IPA /ʤʌstɪn/ | Life-Long Learning"),s.createElement("p",null,e),s.createElement("main",null,i),s.createElement("nav",{className:"botnav"},s.createElement("p",null,"Justin Koo @ 2024"),s.createElement("div",{className:"socials"},s.createElement("p",null,"Contact: "),s.createElement("a",{href:"https://www.linkedin.com/in/koo-justin/",target:"_blank"},"LinkedIn"),s.createElement("a",{href:"https://github.com/jhtkoo0426/",target:"_blank"},"GitHub")))))}},9357:function(t,e,i){var s=i(7294),n=i(1883);e.Z=function(t){var e,i;let{description:o,title:r,children:l}=t;const{site:h}=(0,n.useStaticQuery)("63159454"),a=o||h.siteMetadata.description,c=null===(e=h.siteMetadata)||void 0===e?void 0:e.title;return s.createElement(s.Fragment,null,s.createElement("title",null,c?r+" | "+c:r),s.createElement("meta",{name:"description",content:a}),s.createElement("meta",{property:"og:title",content:r}),s.createElement("meta",{property:"og:description",content:a}),s.createElement("meta",{property:"og:type",content:"website"}),s.createElement("meta",{name:"twitter:card",content:"summary"}),s.createElement("meta",{name:"twitter:creator",content:(null===(i=h.siteMetadata)||void 0===i?void 0:i.author)||""}),s.createElement("meta",{name:"twitter:title",content:r}),s.createElement("meta",{name:"twitter:description",content:a}),l)}},429:function(t,e,i){i.r(e),i.d(e,{Head:function(){return r}});var s=i(7294),n=i(3922),o=i(9357);const r=()=>s.createElement(o.Z,{title:"404: Not Found"});e.default=()=>s.createElement(n.Z,null,s.createElement("h1",null,"404: Not Found"),s.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}]);
//# sourceMappingURL=component---src-pages-404-js-35161bc9101fb0f6877e.js.map