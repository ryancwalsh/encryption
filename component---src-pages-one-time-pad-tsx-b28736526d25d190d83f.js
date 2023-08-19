/*! For license information please see component---src-pages-one-time-pad-tsx-b28736526d25d190d83f.js.LICENSE.txt */
"use strict";(self.webpackChunkencryption=self.webpackChunkencryption||[]).push([[20],{7607:function(e,t,r){r.d(t,{F:function(){return o}});var n=r(7294);const o=()=>n.createElement(n.Fragment,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("title",null,"Encryption Tool"),n.createElement("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi",crossOrigin:"anonymous"}))},4367:function(e,t,r){r.r(t),r.d(t,{Head:function(){return s.F},default:function(){return d}});var n=r(7294);const o=new class{constructor(e={}){this._mode={dic:"",padding:!0,re:/ /,name:""},this._lastError={isError:!1,message:""};let t=this._mode=this.setMode(e.variant);void 0!==e.padding&&(!0===e.padding?t.padding=!0:t.padding=!1),void 0!==e.array&&e.array&&(t.array=!0),void 0!==e.raw&&e.raw&&(t.raw=!0),"crockford"===t.name&&(void 0!==e.split&&e.split&&(t.split=parseInt("0"+e.split)),void 0!==e.checksum&&e.checksum&&(t.checksum=!0))}setMode(e="4648"){switch(e){case"hex":return{dic:"0123456789ABCDEFGHIJKLMNOPQRSTUV",padding:!0,re:/^(()|[A-V0-9=]+)$/,name:"hex"};case"maki":case"wah":case"clockwork":return{dic:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",padding:!1,re:/^(()|[A-TV-Z0-9=]+)$/,name:"clockwork"};case"crockford":return{dic:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",padding:!1,re:/^(()|[A-TV-Z0-9*~$=U]+)$/,name:"crockford"}}return{dic:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",padding:!0,re:/^(()|[A-Z2-7=]+)$/,name:"4648"}}crockfordEncoder(e){let t="",r="";const n=this._mode.dic;if("number"==typeof e&&(e=Math.floor(e)),"number"!=typeof e&&"bigint"!=typeof e||e>-1&&(t=e.toString(32)),t.length<1)return this.setError("Invalid data: input number."),console.log("Invalid data: input number."),"";if(t.split("").map((e=>{r+=n[parseInt(e,32)]})),this._mode.checksum&&(r+=(n+"*~$=U")[Number(BigInt(e)%BigInt(37))]),this._mode.split&&this._mode.split>0&&r.length>0){const e=new RegExp("(.{1,"+this._mode.split+"})","g");r=r.match(e).join("-")}return r}multiEncoder(e){"object"!=typeof e&&(e=(new TextEncoder).encode(e)),e=new Uint8Array(e);const t=this._mode.dic;let r="",n=0,o=0;for(let l=0;l<e.byteLength;l++)for(n=n<<8|e[l],o+=8;o>=5;)r+=t[n>>>o-5&31],o-=5;return o>0&&(r+=t[n<<5-o&31]),this._mode.padding&&r.length%8&&(r+="=".repeat(8-r.length%8)),r}crockfordDecoder(e="0"){e=e.toUpperCase().replace(/[-\s]/g,"").replace(/O/g,"0").replace(/[IL]/g,"1"),!1===this._mode.re.test(e)&&(this.setError("Invalid data: input strings."),console.log("Invalid data: input strings."),e="0");const t=this._mode.dic,r=e.slice(-1);this._mode.checksum&&(e=e.slice(0,-1));const n=e.length,o=new Uint8Array(Math.ceil(5*n/8));let l="",a=o.byteLength,s=0,i=0;const c=()=>{l=(255&s).toString(16).padStart(2,"0")+l,o[--a]=255&s,i-=8,s>>>=8};for(let d=n-1;d>=0;d--)s|=t.indexOf(e[d])<<i,i+=5,i>=8&&c();if((s>0||"0"===e)&&c(),o.length>0&&this._mode.checksum){(e=>BigInt("0x"+e)%BigInt(37)!==BigInt((t+"*~$=U").indexOf(r)))(l)&&(this.setError("Invalid data: Checksum error."),console.log("Invalid data: Checksum error."))}if(this._lastError.isError){if(this._mode.raw)return new Uint8Array(1);l="0"}return this._mode.raw?o:"0x"+l.replace(/(^0+)(?!$)/,"")}multiDecoder(e=""){e=e.toUpperCase().replace(/\=+$/,"").replace(/[\s]/g,""),"clockwork"===this._mode.name&&(e=e.replace(/O/g,"0").replace(/[IL]/g,"1")),!1===this._mode.re.test(e)&&(this.setError("Invalid data: Input strings."),console.log("Invalid data: Input strings."),e="");const t=this._mode.dic,r=e.length,n=new Uint8Array(5*r/8);let o=0,l=0,a=0;for(let s=0;s<r;s++)o=o<<5|t.indexOf(e[s]),a+=5,a>=8&&(n[l++]=o>>>a-8&255,a-=8);return this._mode.raw?n:(new TextDecoder).decode(n.buffer)}returnArray(e){let t={data:e};return this._lastError.isError&&(t.error=this._lastError),t}setError(e){this._lastError={isError:!0,message:e}}resetError(){this._lastError={isError:!1,message:""}}encode(e){let t;return this.resetError(),t="crockford"===this._mode.name?this.crockfordEncoder(e):this.multiEncoder(e),this._mode.array?this.returnArray(t):t}decode(e){let t;return this.resetError(),t="crockford"===this._mode.name?this.crockfordDecoder(e):this.multiDecoder(e),this._mode.array?this.returnArray(t):t}lasterror(){return this._lastError}}({padding:!0});function l(e,t){const r=new TextEncoder,n=new TextDecoder,o=r.encode(e),l=r.encode(t),a=new Uint8Array(o.length);for(let s=0;s<o.length;s+=1)a[s]=o[s]^l[s];return n.decode(a)}function a(e,t){var r;return l((r=e,o.decode(r).toString()),t)}var s=r(7607);const i="MFSGUBINDQFAUAASCECAYCQGBQMB4GYBD4KBAAIFBUORIAQ4DEIQEDIQCMAQEBICAUGAMAA4AQLBO53ENZSRWBQIAQIAMHY2AMLR2EYCBUFBWFYYD4DRQEAIBN3X4ZT4CANR4FQKCAIQIGA5BEGRWBYBAE======";function c(e){let{decryptedString:t,wordObject:r}=e;const o=t.match(/.{1,4}/g)||[],l={paddingRight:"1rem",textAlign:"right"};return n.createElement(n.Fragment,null,n.createElement("table",{style:{fontSize:"70%"}},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:l},"#"),n.createElement("th",null,"Word"))),n.createElement("tbody",{style:{fontFamily:"monospace"}},o.map(((e,t)=>{const o=e in r?n.createElement(n.Fragment,null,n.createElement("span",{className:"importantPart"},e),n.createElement("span",{className:"unimportantPart",style:{color:"#ccc"}},r[e].substring(4))):function(e){return null!==e.match(/^[0-9]+$/)}(e)?"Find the word at line "+e+" in https://github.com/bitcoin/bips/blob/e643d247c8bc086745f3031cdee0899803edea2f/bip-0039/english.txt":"(error)";return n.createElement("tr",{key:t},n.createElement("td",{style:l},t+1),n.createElement("td",null,o))})))),o.length<24&&n.createElement("p",null,"ERROR: This result was supposed to have 24 words. Check the encrypted string and the key."))}var d=e=>{let{data:t}=e;const r=t.file.childPlainText.content.split("\n"),o=function(e){const t={};return e.forEach((e=>{const r=e.trim();if(r.length>=4){const e=r.slice(0,4).toUpperCase();t[e]=r.toUpperCase()}})),t}(r);console.log({words:r,wordObject:o});const[l,s]=n.useState("110_YNKNBWRKOEHXKPZJYXQWDZXGCHMTQEQWRWURQEAEKKZQGSWUMIDGXGRWURQEAEKKZQGSWSMJGMQEQUYSHECWKRGJZTQDIUMIDGXGPNAFZ_"),[d,u]=n.useState(i),[h,m]=n.useState("");n.useEffect((()=>{console.log("useEffect",{encryptedString:d,key:l});let e="";try{e=a(d,l)}catch(t){console.error("error when decrypting",t)}m(e)}),[d,l]);const p={width:"100%"};return n.createElement("main",null,n.createElement("h1",null,"Encryption Helper"),n.createElement("h2",null,"Prep (carefully read this section)"),n.createElement("ol",null,n.createElement("li",null,"Do not start doing any of these steps until you've read ALL of them at least one time carefully beforehand."),n.createElement("li",null,"Buy a brand new Ledger hardware wallet, even if you still own our original one. It's ideal to practice on a fresh one first."),n.createElement("li",null,"Find someone you trust who knows how to teach you all about Ledger hardware wallets and Ledger Live software on your computer."),n.createElement("li",null,"Have them teach you and show you and monitor you (with this fresh new Ledger hardware wallet that you're practicing on) where you will be using it and learning how it works and how to log in and move funds off of it.",n.createElement("ul",null,n.createElement("li",null,"If they are good enough at this step, you will be able to proceed with all of the following steps without their presence, which would be ideal so that they are not in a position to copy (steal) our seed phrase (and therefore all of the assets). But if you fully trust them and really do need their help below, that's your call."))),n.createElement("li",null,"Search our password manager for instructions."),n.createElement("li",null,"Open this Encryption Helper page only using your own computer (not somebody else's), and be sure to use Brave Private mode."),n.createElement("li",null,"After you've opened this Encryption Helper page, disconnect from wifi, unplug all USB devices, and disconnect any networking cables.",n.createElement("ul",null,n.createElement("li",null,"(You want to be sure that no devices are snooping.)"),n.createElement("li",null,"This Encryption Helper page will still work even when your computer is disconnected from the internet."))),n.createElement("li",null,n.createElement("strong",null,"Remember: never let anybody see what you're about to do on this page (unless you fully trust them not to take note of these details so that they can steal our assets one day)."),n.createElement("ul",null,n.createElement("li",null,"Someone having a copy of these details is as bad as if they now fully owned our crypto and you no longer own it at all."),n.createElement("li",null,"Ensure that nobody else is in the room."),n.createElement("li",null,"NEVER take a photo of the results that you're about to see. Photos (especially digital ones) too easily get found, especially by bots.")))),n.createElement("h2",null,"Main steps (carefully read Prep section first)"),n.createElement("ol",null,n.createElement("li",null,"Type the ",n.createElement("strong",null,"encrypted secrets (garbled text)")," here (replacing the demo value):",n.createElement("div",null,n.createElement("textarea",{rows:2,style:p,onChange:e=>{u(e.target.value)},value:d}))),n.createElement("li",null,"Type the ",n.createElement("strong",null,"key")," here (replacing the demo value):",n.createElement("div",null,n.createElement("textarea",{rows:2,style:p,onChange:e=>{s(e.target.value)},value:l}))),n.createElement("li",null,"Decrypted Result:",d===i&&n.createElement("div",null,n.createElement("span",{style:{backgroundColor:"yellow"}},"You're still using the sample inputs above, so this output is not real either (but this is where the real output will be when you start using real input values above):")),n.createElement(c,{decryptedString:h,wordObject:o}))),n.createElement("p",null,"(Characters after the first 4 of each word are unimportant, which is why they're faded.)"))}}}]);
//# sourceMappingURL=component---src-pages-one-time-pad-tsx-b28736526d25d190d83f.js.map