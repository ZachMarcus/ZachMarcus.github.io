(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.AnchorScroller = factory());
}(this, (function () { 'use strict';

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

class Scroller{constructor(a,b){this.position=a,this.options=b,this.documentLength=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),this.positionRelativeToBottom=this.documentLength-this.position,this.time=0,this.start=window.scrollY,this.change=this.calculateChange(),this.scroll=this.scrollUnbound.bind(this),requestAnimationFrame(this.scroll);}userHasCanceledScroll(){return window.scrollY!==Math.floor(this.options.animation(this.time,this.start,this.change,this.options.time.duration))&&window.scrollY!==Math.ceil(this.options.animation(this.time,this.start,this.change,this.options.time.duration))||window.scrollY!==Math.floor(this.options.animation(this.time,this.start,this.change,this.options.time.duration))&&window.scrollY===Math.ceil(this.options.animation(this.time,this.start,this.change,this.options.time.duration))&&!1}calculateChange(){return this.positionRelativeToBottom<window.innerHeight?this.documentLength-window.innerHeight-this.start:this.position-this.start}scrollUnbound(){return this.userHasCanceledScroll()?void cancelAnimationFrame(this.scroll):void(this.time+=this.options.time.increment,window.scroll(window.scrollX,this.options.animation(this.time,this.start,this.change,this.options.time.duration)),this.time<this.options.time.duration&&requestAnimationFrame(this.scroll))}}

class AnchorScroller{constructor(a){this.optionalOptions=a,this.handlers={click:this.check.bind(this)},this.options=__assign({checkParent:!1,class:void 0,animation:(b,c,d,e)=>{return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},time:{increment:25,duration:1500}},a),this.addListeners();}destroy(){this.removeListeners();}addListeners(){document.addEventListener('click',this.handlers.click);}removeListeners(){document.removeEventListener('click',this.handlers.click);}check(a){const b=a.target;if('A'===b.nodeName)this.checkElement(b,a);else if(this.options.checkParent&&b.parentNode&&'A'===b.parentNode.nodeName){const c=b.parentNode;this.checkElement(c,a);}}checkElement(a,b){if(!this.options.class||a.classList.contains(this.options.class)){const c=a.getAttribute('href');if(c&&'#'===c.charAt(0)){const d=document.getElementById(c.slice(1,c.length));d&&(b.preventDefault(),window.scrollY!==d.offsetTop&&new Scroller(d.offsetTop,{animation:this.options.animation,time:this.options.time}));}}}}

return AnchorScroller;

})));
//# sourceMappingURL=AnchorScroller.js.map
