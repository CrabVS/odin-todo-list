(()=>{"use strict";var n={841:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"aside {\n    width: 20%;\n    height: 100%;\n    background-color: red;\n    display: flex;\n    justify-content: flex-end;\n    overflow: auto;\n}\n\n#aside-content {\n    max-width: 300px;\n    width: 100%;\n    padding: 16px;\n    margin-top: 10px;\n}\n\n#aside-content hr {\n    width: 80%;\n}\n\n#aside-content > div:first-child {\n    margin-bottom: 40px;\n}\n\n#aside-content ul {\n    margin-top: 16px;\n}\n\n#aside-content ul li {\n    width: 100%;\n    height: 30px;\n    margin: 4px 0;\n}\n\n#aside-content ul li a:hover {\n    text-decoration: underline;\n}\n\n#aside-content ul li a {\n    display: block;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-left: 8px;\n}\n\n#aside-content ul:last-child li {\n    display: flex;\n    align-items: center;\n}\n\n#add-project-btn {\n    width: 100%;\n    margin-top: 14px;\n    padding: 6px 0;\n    border: 1px dashed gray;\n}\n\n#project-list {\n    padding-bottom: 16px;\n}\n",""]);const s=a},239:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"header {\n    background-color: blue;\n    height: 20vh;\n}",""]);const s=a},778:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"main {\n    background-color: cyan;\n    width: 80%;\n    height: 100%;\n    overflow: auto;\n    padding: 30px 40px;\n}\n\nmain h2 {\n    margin-bottom: 20px;\n}\n\n#task-btn {\n    width: 100%;\n    height: 40px;\n    border: 1px dashed #aaa;\n}\n\n#task-container {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}",""]);const s=a},772:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,".task {\n    width: 100%;\n    height: 40px;\n    background-color: pink;\n    display: flex;\n    justify-content: space-between;\n}\n\n.task > * {\n    outline: 1px solid black;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.task > h6 {\n    flex: 3;\n}\n\n.task > div {\n    flex: 2;\n}\n\n.icon {\n    height: 100%;\n    cursor: icon;\n}\n\n.icon:hover {\n    transform: scale(0.9);\n}\n\n.task-buttons {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.task-buttons > img {\n    cursor: pointer;\n}",""]);const s=a},55:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"#task-form {\n    background-color: #0000001c;\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-form form {\n    background-color: #fff;\n    padding: 20px;\n    min-width: 300px;\n    border-radius: 8px;\n}\n\n#task-form form fieldset legend {\n    margin-bottom: 16px;\n}\n\n#task-form form fieldset {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#task-form .form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\n#task-form .form-group input,\n#task-form .form-group textarea {\n    padding: 4px 10px;\n    border: 1px solid #aaa;\n    outline: none;\n    border-radius: 4px;\n}\n\n#task-form .form-group textarea {\n    padding: 8px 10px;\n    resize: none;\n}\n\n#task-form #priority-box {\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 0;\n}\n\n#form-buttons {\n    margin: 14px 0 6px;\n    display: flex;\n    justify-content: space-evenly;\n}",""]);const s=a},917:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=a},426:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Times New Roman', Times, serif;\n}\n\nh2 {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\n.btn {\n    cursor: pointer;\n}\n\n.btn:hover {\n    filter: brightness(94%);\n}\n\n.btn:active {\n    transform: scale(0.98);\n}\n\n#page-container {\n    position: relative;\n    min-height: 100vh;\n}\n\n#content {\n    padding-bottom: 2.5rem;\n    display: flex;\n    flex-direction: column;\n}\n\n#content > div {\n    background-color: purple;\n    height: calc(80vh - 2.5rem);\n    display: flex;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 2.5rem;\n    background-color: yellow;\n}",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(917),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=e(426),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),t()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var h=e(55),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=e(778),k={};k.styleTagTransform=p(),k.setAttributes=c(),k.insert=a().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=d(),t()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;var x=e(772),E={};E.styleTagTransform=p(),E.setAttributes=c(),E.insert=a().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=d(),t()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;const w=e.p+"bde675c38d54979f589e.svg",I=e.p+"96fed0b6f4ffd9b99e71.svg",T=e.p+"67d7ac9ac639190752c4.svg";let Z={default:[]},S="default",j=0;const B=function(n){let t;return Z[S].forEach((e=>{e.id===n&&(t=e)})),t},L=function(){return Z[S]},A=function(n){const t=document.createElement("div");return t.classList.add("task"),function(n,t){n.innerHTML='<h6>Title</h6>\n    <h6>Notes</h6>\n    <h6>00-00-0000</h6>\n    <div class="task-buttons"></div>';const e=n.querySelectorAll("h6");e[0].textContent=t.title,e[1].textContent=t.notes,e[2].textContent=t.duedate,function(n){n.querySelector(".task-buttons").innerHTML=`<img src="${w}" alt="delete-icon" class="icon">\n    <img src="${I}" alt="check-icon" class="icon">\n    <img src="${T}" alt="edit-icon" class="icon">`}(n)}(t,n),function(n,t){const e=n.querySelectorAll(".task-buttons .icon");e[0].addEventListener("click",(()=>{var e;e=t.id,Z[S].forEach(((n,t)=>{n.id===e&&Z[S].splice(t,1)})),n.remove()})),e[1].addEventListener("click",(()=>{!function(n){const t=B(n);t.completed=!t.completed}(t.id),e[1].classList.toggle("task-completed")})),e[2].addEventListener("click",(()=>{O(t)}))}(t,n),t},C=document.getElementById("page-container"),q=document.getElementById("task-container"),M=function(n){return n.toString().padStart(2,"0")},P=function(n){return[n.getFullYear(),M(n.getMonth()+1),M(n.getDate())].join("-")},D=function(n){const t=A(n);q.appendChild(t)},N=function(n){const t=P(new Date);return""===n.title&&(n.title="Title"),""===n.taskDescription&&(n.description="Description"),n.duedate<t&&(n.duedate=t),""===n.notes&&(n.notes="Notes Empty"),n},H=function(){const n=document.getElementById("task-form");C.removeChild(n)},$=function(){const n=document.querySelectorAll("#form-buttons .btn");n[0].addEventListener("click",(n=>{n.preventDefault();const t=function(){const n=document.getElementById("task-title").value,t=document.getElementById("task-description").value,e=document.getElementById("task-duedate").value,o=document.getElementById("task-notes").value,r=document.getElementById("task-priority").checked,i=function(){const n=j;return j+=1,n}();return N({id:i,title:n,description:t,duedate:e,notes:o,priority:r,completed:!1})}();!function(n){Z[S].push(n)}(t),D(t),H()})),n[1].addEventListener("click",(()=>{H()}))},O=function(n={}){const t=document.createElement("div"),e=P(new Date);t.id="task-form",t.innerHTML=`<form>\n        <fieldset>\n            <legend>Task Creator</legend>\n            <div class="form-group">\n                <label for="task-title">Title</label>\n                <input type="text" id="task-title" name="task-title">\n            </div>\n            <div class="form-group">\n                <label for="task-description">Description</label>\n                <textarea name="task-description" id="task-description" cols="20" rows="4"></textarea>\n            </div>\n            <div class="form-group">\n                <label for="task-duedate">Due Date</label>\n                <input type="date" id="task-duedate" name="task-duedate" min="${e}" value="${e}">\n            </div>\n            <div class="form-group">\n                <label for="task-notes">Notes</label>\n                <input type="text" id="task-notes" name="task-notes">\n            </div>\n            <div class="form-group" id="priority-box">\n                <label for="task-priority">Priority</label>\n                <input type="checkbox" name="task-priority" id="task-priority">\n            </div>\n        </fieldset>\n        <div id="form-buttons">\n            <button type="submit" class="btn">Submit</button>\n            <button type="button" class="btn">Cancel</button>\n        </div>\n    </form>`,C.appendChild(t),0!==Object.keys(n).length||n.constructor!==Object?(z(n),function(n){const t=document.querySelectorAll("#form-buttons .btn");t[0].addEventListener("click",(t=>{t.preventDefault(),function(n,t){const e=B(t);e.title=n.title,e.description=n.description,e.duedate=n.duedate,e.notes=n.notes,e.priority=n.priority}(function(){const n=document.getElementById("task-title").value,t=document.getElementById("task-description").value,e=document.getElementById("task-duedate").value,o=document.getElementById("task-notes").value,r=document.getElementById("task-priority").checked;return N({title:n,description:t,duedate:e,notes:o,priority:r})}(),n),K(),H()})),t[1].addEventListener("click",(()=>{H()}))}(n.id)):$()},z=function(n){const t=document.getElementById("task-title"),e=document.getElementById("task-description"),o=document.getElementById("task-duedate"),r=document.getElementById("task-notes"),i=document.getElementById("task-priority");t.value=n.title,e.value=n.description,o.value=n.duedate,r.value=n.notes,i.checked=n.priority};var F=e(841),R={};R.styleTagTransform=p(),R.setAttributes=c(),R.insert=a().bind(null,"head"),R.domAPI=r(),R.insertStyleElement=d(),t()(F.Z,R),F.Z&&F.Z.locals&&F.Z.locals;const U=document.getElementById("page-container"),_=document.getElementById("project-list"),J=function(n){S=n,K()},X=function(){const n=document.getElementById("task-form");U.removeChild(n),K()},Y=function(){const n=document.querySelectorAll("#form-buttons .btn");n[0].addEventListener("click",(n=>{n.preventDefault();const t=document.getElementById("project-title").value;(function(n){return!!Z.hasOwnProperty(n)})(t)||""===t||(function(n){Z[n]=[],S=n}(t),function(n){const t=document.createElement("li");t.innerHTML=`<a>${n}</a><button class="btn" tabindex="-1">X</button>`,_.appendChild(t),t.querySelector("button").addEventListener("click",(()=>{t.remove(),function(n){const t=(e=n,Object.keys(Z).reduce(((n,t)=>{const o=Z[t];return t!==e&&(n[t]=o),n}),{}));var e;Z=t,S===n&&(S="default")}(n),K()})),t.querySelector("a").addEventListener("click",(()=>J(n)))}(t)),X()})),n[1].addEventListener("click",(()=>{X()}))},G=function(){const n=document.createElement("div");n.id="task-form",n.innerHTML='<form>\n        <fieldset>\n            <legend>Task Creator</legend>\n            <div class="form-group">\n                <label for="project-title">Project Name</label>\n                <input type="text" id="project-title" name="project-title">\n            </div>\n        </fieldset>\n        <div id="form-buttons">\n            <button type="submit" class="btn">Submit</button>\n            <button type="button" class="btn">Cancel</button>\n        </div>\n    </form>',U.appendChild(n),Y()},K=function(){const n=document.getElementById("task-container"),t=L();n.innerHTML="",t.forEach((n=>{D(n)}))};var Q=e(239),V={};V.styleTagTransform=p(),V.setAttributes=c(),V.insert=a().bind(null,"head"),V.domAPI=r(),V.insertStyleElement=d(),t()(Q.Z,V),Q.Z&&Q.Z.locals&&Q.Z.locals,function(){const n=document.getElementById("task-btn");n.addEventListener("click",(()=>{n.blur(),O()}))}(),K(),function(){const n=document.getElementById("add-project-btn"),t=document.getElementById("project-default");n.addEventListener("click",G),n.blur(),t.addEventListener("click",(()=>J("default")))}()})()})();