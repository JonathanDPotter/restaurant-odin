(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n  top: 0;\n}\n\nbody {\n  background-color: rgb(73, 86, 76);\n  color: rgb(210, 210, 210);\n}\n\n#header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n\n}\n\n#nav {\n  width: 200px;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  background-color: rgb(73, 86,76) ;\n  color: rgb(210, 210, 210);\n  border: none;\n  border-bottom: 3px solid rgb(73, 86,76);\n  transition: border-bottom 1s ease;\n}\n\nimg {\n  width: 200px\n}\n\n#content {\n  height: 100vh;\n  width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  \n}\n\n.invis {\n  opacity: 0;\n  transition: opacity 1s ease;\n}\n\n.vis {\n  opacity: 1;\n  transition: opacity 1s ease;\n}\n\n#page-title {\n  font-size: 60px;\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n#sandwich-image {\n  margin: 10px auto;\n}\n\n.menu-item {\n  margin: 20px auto;\n  \n}\n\n\n",""]);const r=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var a,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:f(p,t),references:1}),a.push(l)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t,n){var a=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,h=0;function f(e,t){var n,a,o;if(t.singleton){var r=h++;n=m||(m=s(t)),a=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=s(t),a=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=i(n[a]);r[o].references--}for(var s=c(e,t),d=0;d<n.length;d++){var l=i(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=s}}}},88:(e,t,n)=>{e.exports=n.p+"8190178582dc31da3971.jpeg"},445:(e,t,n)=>{e.exports=n.p+"5312886c7cfe9ecacffd.jpeg"},226:(e,t,n)=>{e.exports=n.p+"70eacf6f63727eb4510c.jpeg"},524:(e,t,n)=>{e.exports=n.p+"d445965548cc12d25ee5.jpeg"},444:(e,t,n)=>{e.exports=n.p+"74269c51c9209f2faff7.jpeg"},786:(e,t,n)=>{e.exports=n.p+"090991f7073da85dad78.jpeg"},567:(e,t,n)=>{e.exports=n.p+"626c74dac4167671105a.jpeg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(88),t=n(445);const a=[["Garden Veggie",n(226),"Fresh avocado, tomato, and cucumber on country wheat."],["Oyster Mushroom",n(524),"Smoky sauteed oyster mushrooms, tomatoes, lettuce, and avocado on country wheat."],["Spicy Meatball",n(444),"Now that's a spicy meatball!  Gardein meatballs, marinara and Violife parmesan on an italian roll"],["Tofu Salad",n(786),"Eggy, creamy tofu salad with pickles, letuce, and tomato on country wheat."],["Curried Tempeh",t,"Savory curried tempeh with cashews, raisins, celery and carrots on a ciabatta roll."],["Bahn mi",e,"Our sweet, sour, spicy take on traditional vietnamese sandwiches.  Grilled tofu, pickled veggies and fresh cilantro on demi baguette."]];class o{constructor(e,t,n){this.name=e,this.image=t,this.description=n}makeItem(){const e=document.createElement("div");e.classList="menu-item";const t=document.createElement("h3");t.textContent=this.name;const n=document.createElement("img");n.classList="item-image",n.src=this.image;const a=document.createElement("p");return a.textContent=this.description,e.appendChild(t),e.appendChild(n),e.appendChild(a),e}}const r=document.createElement("div");r.className="invis";const i=document.createElement("h2");i.textContent="Menu",r.appendChild(i),a.forEach((e=>{let t=new o(e[0],e[1],e[2]);r.appendChild(t.makeItem())}));const c=r,s=document.createElement("div");s.className="invis",s.textContent="Sandwiches is your source for amazing vegan sandwiches!  We have a wide variety of sandwiches on the menu as well as sides, local sodas, kombucha, coffee, and tea.  We do cater, and we are always willing to make custom sandwiches for any occasion.  Come on in, call, or e-mail to get yourself some tasty sandwiches.";const d=s,l=document.createElement("div");l.id="contact",l.className="invis";const u=document.createElement("h1");u.textContent="Contact Us!";const p=document.createElement("p");p.textContent="Phone: (555)555-5555";const m=document.createElement("p");m.textContent="E-mail: Sandwiches@bmail.com";const h=document.createElement("p");h.textContent="twitter: @sandwichesrest",l.appendChild(u),l.appendChild(p),l.appendChild(m),l.appendChild(h);const f=l;var g=n(567);var v=n(379),b=n.n(v),y=n(426);b()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,function(){function e(e,t){const n=document.createElement("button");return n.id=e,n.classList="btn",n.textContent=e,n.addEventListener("click",(e=>{const a=document.querySelectorAll(".btn");console.log(a),a.forEach((e=>{e.style.borderBottomColor="rgb(73, 86,76)"})),n.style.borderBottomColor="black",i.firstChild.classList="invis",window.setTimeout((()=>{i.removeChild(i.firstChild),window.setTimeout((()=>{t.classList="vis"}),20),i.appendChild(t)}),500)})),n}const t=document.createElement("header");t.id="header";const n=document.createElement("h1");n.id="page-title",n.textContent="Sandwiches";const a=new Image;a.src=g,a.id="sandwich-image",a.alt="a picture of a veggie sandwich";const o=document.createElement("div");o.id="nav",o.appendChild(e("menu",c)),o.appendChild(e("contact",f)),o.appendChild(e("about",d));const r=document.getElementById("content"),i=document.createElement("div");i.id="main",r.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(o),r.appendChild(i),i.appendChild(document.createElement("div"))}(),document.getElementById("about").click()})()})();