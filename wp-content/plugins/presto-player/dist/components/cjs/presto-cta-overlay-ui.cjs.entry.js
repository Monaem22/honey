"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index=require("./index-4fce5d38.js"),fittext=require("./fittext-d0057d8c.js"),prestoCtaOverlayUiCss=':host{display:block;font-size:16px;width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;z-index:99999;user-select:none}*{box-sizing:border-box}a{color:#fff}.wrapper{height:100%;position:relative;color:#fff;font-family:var(--plyr-font-family, "San Francisco", -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", Avenir, "Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif)}.overlay{position:relative;display:flex;align-items:center;justify-content:center;padding:48px;height:100%}.overlay.has-link{cursor:pointer}.overlay:before{content:"";border-radius:var(--presto-player-border-radius, 0);opacity:var(--presto-player-cta-background-opacity, 0.75);position:absolute;top:0;left:0;bottom:0;right:0;background-color:var(--presto-player-cta-background, #000);z-index:-1;box-shadow:inset 0 0 100px black}.content{width:80%;max-width:600px}.content *~*{margin-top:22px}button{background:var(--plyr-color-main, #000);appearance:none;padding:6px 12px;align-items:center;display:inline-flex;border-width:1px;border-color:transparent;color:#fff;border-radius:0;cursor:pointer;font-size:0.8em;border-radius:0 var(--presto-player-cta-border-radius, 0) var(--presto-player-cta-border-radius) 0}@media screen and (min-width: 700px){button{padding:10px 18px}}button:focus{box-shadow:rgb(255, 255, 255) 0px 0px 0px 2px, var(--plyr-color-main, #000) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;z-index:1}button:focus,button:hover{outline:none}h1{font-size:1.5em;font-weight:500;margin:0;line-height:1.1em}.skip,.rewatch{font-size:0.8em;font-weight:600;position:absolute;top:0;right:0;padding:4%;cursor:pointer}.rewatch{display:inline-flex;align-items:center;right:auto;left:0}.rewatch .icon{margin-right:5px}p{font-size:0.85em;margin:0;margin-top:1.5em;line-height:1.4em;opacity:0.75}p.is-small{font-size:0.85em;margin:1.5em 0px 0px;line-height:0.1em;opacity:0.75}.is-centered{text-align:center}',PrestoCtaOverlayUiStyle0=prestoCtaOverlayUiCss,CTAOverlayUI=class{constructor(e){index.registerInstance(this,e),this.skip=index.createEvent(this,"skip",7),this.rewatch=index.createEvent(this,"rewatch",7),this.headline=void 0,this.defaultHeadline=void 0,this.bottomText=void 0,this.showButton=void 0,this.buttonText=void 0,this.buttonType=void 0,this.buttonLink=void 0,this.allowRewatch=void 0,this.allowSkip=void 0,this.direction=void 0,this.i18n=void 0,this.provider=void 0,this.type=void 0,this.isAudioProvider=void 0}componentDidLoad(){let e=this.type||this.provider;this.isAudioProvider="audio"===e,fittext.fitText(this.textInput,3,{maxFontSize:!0===this.isAudioProvider?15:20,minFontSize:8})}handleCTAClick(e){var t;(null===(t=this.buttonLink)||void 0===t?void 0:t.url)&&(e.preventDefault(),e.stopPropagation(),this.handleLink())}handleLink(){var e,t,i;(null===(e=this.buttonLink)||void 0===e?void 0:e.opensInNewTab)?window.open(null===(t=this.buttonLink)||void 0===t?void 0:t.url,"_blank"):window.location.href=null===(i=this.buttonLink)||void 0===i?void 0:i.url}render(){var e,t,i,o,n;return index.h("div",{key:"a1e3d863a9dd9e85626e1667edf27f2ade3c253a",class:"wrapper",ref:e=>this.textInput=e},index.h("div",{key:"1f432dff813e53ab62d24b587dea40c8d0b734fa",onClick:e=>this.handleCTAClick(e),class:`overlay ${"rtl"===this.direction?"rtl":""} ${(null===(e=this.buttonLink)||void 0===e?void 0:e.url)?"has-link":""}`},index.h("div",{key:"46a7df3774e82c9175b55c97b993f24ff07ccdb1",class:this.isAudioProvider?"content is-centered":"content"},index.h("h1",{key:"e94d920c1dc24ab999de23778b8176e0305d3731",part:"cta-headline"},this.headline||this.defaultHeadline),this.bottomText&&index.h("p",{key:"ff14def8afc4a67741ea33b0c3b31bcbc86be73a",class:this.isAudioProvider&&"is-small",part:"cta-bottom-text",innerHTML:this.bottomText}),this.showButton&&index.h("presto-player-button",{key:"842dc763f9cc56bccead8b26233f8417116c99ec",full:!0,onClick:e=>this.handleCTAClick(e),part:"cta-button",href:null===(t=null==this?void 0:this.buttonLink)||void 0===t?void 0:t.url,target:(null===(i=null==this?void 0:this.buttonLink)||void 0===i?void 0:i.opensInNewTab)?"_blank":"_self",class:"button",type:"primary"},this.buttonText))),!!this.allowRewatch&&index.h("div",{key:"5a62eb399fe702af41a0cf1cf1c8d5b5312d752e",class:"rewatch",onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.rewatch.emit()}},index.h("svg",{key:"48686a3db77f770638bcb6158c8b2259ba917428",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"icon icon-corner-up-left"},index.h("polyline",{key:"ede217473eecc81dde6497ef51f39d6b82608fbc",points:"9 14 4 9 9 4"}),index.h("path",{key:"bbdd7a09ee2c18cef2a48dda546965b7a3a55f33",d:"M20 20v-7a4 4 0 0 0-4-4H4"})),null===(o=null==this?void 0:this.i18n)||void 0===o?void 0:o.rewatch),!!this.allowSkip&&index.h("div",{key:"56eb1ebc96960b37d63c75cef159bf1bba291006",class:"skip",onClick:e=>{e.preventDefault(),this.skip.emit()}},null===(n=null==this?void 0:this.i18n)||void 0===n?void 0:n.skip," →"))}};CTAOverlayUI.style=PrestoCtaOverlayUiStyle0,exports.presto_cta_overlay_ui=CTAOverlayUI;