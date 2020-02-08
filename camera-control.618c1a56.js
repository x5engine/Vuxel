parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"e4Fe":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CameraControl=void 0;var i=function(){function t(a){e(this,t);var n=this.THREE=a.THREE;this.render=a.render,this.camera=a.camera,this.domElement=a.renderer.domElement,this.target=new n.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:n.MOUSE.ROTATE,MIDDLE:n.MOUSE.DOLLY,RIGHT:n.MOUSE.PAN},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.zoom0=this.camera.zoom,this._spherical=new n.Spherical,this._sphericalDelta=new n.Spherical,this._scale=1,this._panOffset=new n.Vector3,this._zoomChanged=!1,this._EPS=1e-6,this.panLeft=this.panLeft(),this.panUp=this.panUp(),this.pan=this.pan(),this.update=this.update(),this._STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},this._state=this._STATE.NONE,this._touches={ONE:n.TOUCH.ROTATE,TWO:n.TOUCH.DOLLY_PAN},this._rotateStart=new n.Vector2,this._rotateEnd=new n.Vector2,this._rotateDelta=new n.Vector2,this._panStart=new n.Vector2,this._panEnd=new n.Vector2,this._panDelta=new n.Vector2,this._dollyStart=new n.Vector2,this._dollyEnd=new n.Vector2,this._dollyDelta=new n.Vector2,this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseWheel=this.onMouseWheel.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.domElement.addEventListener("contextmenu",this.onContextMenu,!1),this.domElement.addEventListener("mousedown",this.onMouseDown,!1),this.domElement.addEventListener("wheel",this.onMouseWheel,!1),this.domElement.addEventListener("keydown",this.onKeyDown,!1),-1===this.domElement.tabIndex&&(this.domElement.tabIndex=0),this.update(),this.render()}return a(t,[{key:"getPolarAngle",value:function(){return this._spherical.phi}},{key:"getAzimuthalAngle",value:function(){return this._spherical.theta}},{key:"update",value:function(){var e=this,t=this.THREE,a=new t.Vector3,n=(new t.Quaternion).setFromUnitVectors(this.camera.up,new t.Vector3(0,1,0)),i=n.clone().inverse(),s=new t.Vector3,o=new t.Quaternion;return function(){var t=e.camera.position;return a.copy(t).sub(e.target),a.applyQuaternion(n),e._spherical.setFromVector3(a),e._spherical.theta+=e._sphericalDelta.theta,e._spherical.phi+=e._sphericalDelta.phi,e._spherical.theta=Math.max(e.minAzimuthAngle,Math.min(e.maxAzimuthAngle,e._spherical.theta)),e._spherical.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,e._spherical.phi)),e._spherical.makeSafe(),e._spherical.radius*=e._scale,e._spherical.radius=Math.max(e.minDistance,Math.min(e.maxDistance,e._spherical.radius)),e.target.add(e._panOffset),a.setFromSpherical(e._spherical),a.applyQuaternion(i),t.copy(e.target).add(a),e.camera.lookAt(e.target),e._sphericalDelta.set(0,0,0),e._panOffset.set(0,0,0),e._scale=1,!!(e._zoomChanged||s.distanceToSquared(e.camera.position)>e._EPS||8*(1-o.dot(e.camera.quaternion))>e._EPS)&&(s.copy(e.camera.position),o.copy(e.camera.quaternion),e._zoomChanged=!1,!0)}}},{key:"dispose",value:function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.domElement.removeEventListener("keydown",this.onKeyDown,!1)}},{key:"onMouseDown",value:function(e){e.preventDefault();var t,a=this.THREE;switch(this.domElement.focus?this.domElement.focus():window.focus(),e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.MOUSE.DOLLY:if(!1===this.enableZoom)return;this.handleMouseDownDolly(e),this._state=this._STATE.DOLLY;break;case a.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===this.enablePan)return;this.handleMouseDownPan(e),this._state=this._STATE.PAN}else{if(!1===this.enableRotate)return;this.handleMouseDownRotate(e),this._state=this._STATE.ROTATE}break;case a.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===this.enableRotate)return;this.handleMouseDownRotate(e),this._state=this._STATE.ROTATE}else{if(!1===this.enablePan)return;this.handleMouseDownPan(e),this._state=this._STATE.PAN}break;default:this._state=this._STATE.NONE}this._state!==this._STATE.NONE&&(document.addEventListener("mousemove",this.onMouseMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1))}},{key:"onMouseMove",value:function(e){switch(e.preventDefault(),this._state){case this._STATE.ROTATE:if(!1===this.enableRotate)return;this.handleMouseMoveRotate(e);break;case this._STATE.DOLLY:if(!1===this.enableZoom)return;this.handleMouseMoveDolly(e);break;case this._STATE.PAN:if(!1===this.enablePan)return;this.handleMouseMovePan(e)}}},{key:"onMouseUp",value:function(e){document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this._state=this._STATE.NONE}},{key:"onMouseWheel",value:function(e){!1===this.enableZoom||this._state!==this._STATE.NONE&&this._state!==this._STATE.ROTATE||(e.preventDefault(),e.stopPropagation(),this.handleMouseWheel(e))}},{key:"onKeyDown",value:function(e){!1!==this.enableKeys&&!1!==this.enablePan&&this.handleKeyDown(e)}},{key:"onContextMenu",value:function(e){e.preventDefault()}},{key:"handleMouseDownDolly",value:function(e){this._dollyStart.set(e.clientX,e.clientY)}},{key:"handleMouseDownPan",value:function(e){this._panStart.set(e.clientX,e.clientY)}},{key:"handleMouseDownRotate",value:function(e){this._rotateStart.set(e.clientX,e.clientY)}},{key:"handleMouseMoveRotate",value:function(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);var t=this.domElement;this.rotateLeft(2*Math.PI*this._rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update(),this.render()}},{key:"handleMouseMoveDolly",value:function(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(dollyEnd,dollyStart),this._dollyDelta.y>0?this.dollyIn(this.getZoomScale()):this._dollyDelta.y<0&&this.dollyOut(this.getZoomScale()),this._dollyStart.copy(this._dollyEnd),this.update(),this.render()}},{key:"handleMouseMovePan",value:function(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this.pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update(),this.render()}},{key:"handleMouseWheel",value:function(e){e.deltaY<0?this.dollyOut(this.getZoomScale()):e.deltaY>0&&this.dollyIn(this.getZoomScale()),this.update(),this.render()}},{key:"handleKeyDown",value:function(e){var t=!1;switch(e.keyCode){case this.keys.UP:this.pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:this.pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:this.pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:this.pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update(),this.render())}},{key:"rotateLeft",value:function(e){this._sphericalDelta.theta-=e}},{key:"rotateUp",value:function(e){this._sphericalDelta.phi-=e}},{key:"getZoomScale",value:function(){return Math.pow(.95,this.zoomSpeed)}},{key:"dollyIn",value:function(e){this.camera.isPerspectiveCamera?this._scale/=e:this.camera.isOrthographicCamera?(this.camera.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.camera.zoom*e)),this.camera.updateProjectionMatrix(),this._zoomChanged=!0):(console.warn("WARNING: camera-control encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"dollyOut",value:function(e){this.camera.isPerspectiveCamera?this._scale*=e:this.camera.isOrthographicCamera?(this.camera.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.camera.zoom/e)),this.camera.updateProjectionMatrix(),this._zoomChanged=!0):(console.warn("WARNING: camera-control encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}},{key:"pan",value:function(){var e=this,t=new this.THREE.Vector3;return function(a,n){var i=e.domElement;if(e.camera.isPerspectiveCamera){var s=e.camera.position;t.copy(s).sub(e.target);var o=t.length();o*=Math.tan(e.camera.fov/2*Math.PI/180),e.panLeft(2*a*o/i.clientHeight,e.camera.matrix),e.panUp(2*n*o/i.clientHeight,e.camera.matrix)}else e.camera.isOrthographicCamera?(e.panLeft(a*(e.camera.right-e.camera.left)/e.camera.zoom/i.clientWidth,e.camera.matrix),e.panUp(n*(e.camera.top-e.camera.bottom)/e.camera.zoom/i.clientHeight,e.camera.matrix)):(console.warn("WARNING: camera-control encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}},{key:"panLeft",value:function(){var e=this,t=new this.THREE.Vector3;return function(a,n){t.setFromMatrixColumn(n,0),t.multiplyScalar(-a),e._panOffset.add(t)}}},{key:"panUp",value:function(){var e=this,t=new this.THREE.Vector3;return function(a,n){!0===e.screenSpacePanning?t.setFromMatrixColumn(n,1):(t.setFromMatrixColumn(n,0),t.crossVectors(e.camera.up,t)),t.multiplyScalar(a),e._panOffset.add(t)}}}]),t}();exports.CameraControl=i,n(i,"meta",{name:"camera-control"});
},{}]},{},["e4Fe"], null)