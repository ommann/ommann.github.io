function t(){}function e(t,e){for(var n in e)t[n]=e[n];return t}function n(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n)}function i(t){t.parentNode.removeChild(t)}function s(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function o(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function c(){return document.createComment("")}function u(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function h(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(var i=0;i<t.length;i+=1){var s=t[i];if(s.nodeName===e){for(var f=0;f<s.attributes.length;f+=1){var c=s.attributes[f];n[c.name]||s.removeAttribute(c.name)}return t.splice(i,1)[0]}}return r?o(e):a(e)}function l(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=e,t.splice(n,1)[0]}return f(e)}function d(t,e){t.data=""+e}function v(t,e){for(var n={},r={},i={},s=t.length;s--;){var a=t[s],o=e[s];if(o){for(var f in a)f in o||(r[f]=1);for(var f in o)i[f]||(n[f]=o[f],i[f]=1);t[s]=o}else for(var f in a)i[f]=1}for(var f in r)f in n||(n[f]=void 0);return n}function g(){return Object.create(null)}function m(t){t._lock=!0,b(t._beforecreate),b(t._oncreate),b(t._aftercreate),t._lock=!1}function p(t,e){t._handlers=g(),t._slots=g(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function b(t){for(;t&&t.length;)t.shift()()}var y={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var i=n[r];if(!i.__calling)try{i.__calling=!0,i.call(this,e)}finally{i.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||m(this.root)},_recompute:t,_set:function(t){var n=this._state,r={},i=!1;for(var s in t=e(this._staged,t),this._staged={},t)this._differs(t[s],n[s])&&(r[s]=i=!0);i&&(this._state=e(e({},n),t),this._recompute(r,this._state),this._bind&&this._bind(r,this._state),this._fragment&&(this.fire("state",{changed:r,current:this._state,previous:n}),this._fragment.p(r,this._state),this.fire("update",{changed:r,current:this._state,previous:n})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};export{e as a,y as b,p as c,a as d,f as e,_ as f,h as g,l as h,i,r as j,n as k,v as l,m,c as n,d as o,o as p,u as q,t as r,s};
//# sourceMappingURL=chunk.6c31995d.js.map
