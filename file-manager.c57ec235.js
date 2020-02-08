parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pg5z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.exporter=void 0;var o=function(o){var r,e={version:"1",voxels:[]};return o.forEach(function(o){r={position:o.position.toArray(),material:{color:o.material.color.toArray()}},e.voxels.push(r)}),e};exports.exporter=o;
},{}],"cqbQ":[function(require,module,exports) {
"use strict";function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function r(n,o,c){return(r=t()?Reflect.construct:function(t,r,n){var o=[null];o.push.apply(o,r);var c=new(Function.bind.apply(t,o));return n&&e(c,n.prototype),c}).apply(null,arguments)}function e(t,r){return(e=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function n(t){return u(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loader=void 0;var i=function(t,e){var o=[];return JSON.parse(e).voxels.forEach(function(e){var c=new t.Mesh(new t.BoxBufferGeometry(50,50,50),new t.MeshLambertMaterial({color:r(t.Color,n(e.material.color))}));c.position.fromArray(e.position),o.push(c)}),o};exports.loader=i;
},{}],"Rykw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileManager=void 0;var e=require("./exporter"),n=require("./loader");function t(e){return r(e)||a(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=function(){function i(e){var n=this;c(this,i),this.configs=e,document.querySelectorAll(".plugin-file-manager").forEach(function(e){e.addEventListener("click",function(t){return n.dispatchEvent(t,e.dataset.event)})}),this.fakeLink=document.createElement("a"),this.fakeLink.style.display="none",document.body.appendChild(this.fakeLink),this.fakeInput=document.createElement("input"),this.fakeInput.type="file",this.fakeInput.accept=".vxl",this.fakeInput.style.display="none",document.body.appendChild(this.fakeInput),this.fakeInput.addEventListener("change",function(e){return n.fileSelected(e)})}return l(i,[{key:"dispatchEvent",value:function(e,n){switch(n){case"new":this.handleNew();break;case"save":this.handleSave();break;case"open":this.handleOpen()}}},{key:"clearScene",value:function(){var e=this.configs.scene,n=this.configs.sceneObjects;e.remove.apply(e,t(n)),n.splice(0,n.length)}},{key:"handleNew",value:function(){confirm("Are you sure you want to create a new file?")&&(this.clearScene(),this.configs.render())}},{key:"handleSave",value:function(){var n=(0,e.exporter)(this.configs.sceneObjects),t=JSON.stringify(n,null,2);this.fakeLink.href=URL.createObjectURL(new Blob([t],{type:"text/plain"})),this.fakeLink.download="scene.vxl",this.fakeLink.click()}},{key:"handleOpen",value:function(){this.fakeInput.click()}},{key:"fileSelected",value:function(e){var t=this,i=e.target.files,a=this.configs.THREE,r=this.configs.scene,c=this.configs.sceneObjects;if(i&&i.length){var o=new FileReader;o.readAsText(i[0]),o.onload=function(){t.clearScene(),(0,n.loader)(a,o.result).forEach(function(e){r.add(e),c.push(e)}),t.configs.render()}}e.target.value=null}}]),i}();exports.FileManager=u,s(u,"meta",{name:"file-manager"});
},{"./exporter":"pg5z","./loader":"cqbQ"}]},{},["Rykw"], null)