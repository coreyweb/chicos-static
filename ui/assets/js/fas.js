/**********************
 * PLUGINS JS
 **********************/

/**
 * Simple JavaScript inheritance.
 *     - Inspired by base2 and Prototype
 * By John Resig http://ejohn.org/
 * @See: http://ejohn.org/blog/simple-javascript-inheritance/
 * MIT Licensed.
 */
(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.prototype=e;c.prototype.constructor=c;c.extend=arguments.callee;return c}})();

/**
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * @See: http://github.com/janl/mustache.js
 * MIT Licensed.
 */
(function(a,b){if(typeof exports==="object"&&exports){b(exports)}else{var c={};b(c);if(typeof define==="function"&&define.amd){define(c)}else{a.Mustache=c}}}(this,function(a){var e=/\s*/;var l=/\s+/;var j=/\S/;var h=/\s*=/;var n=/\s*\}/;var t=/#|\^|\/|>|\{|&|=|!/;var f=RegExp.prototype.test;function s(z,y){return f.call(z,y)}function g(y){return !s(j,y)}var v=Object.prototype.toString;var k=Array.isArray||function(y){return v.call(y)==="[object Array]"};function d(y){return y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function m(y){return String(y).replace(/[&<>"'\/]/g,function(z){return c[z]})}function u(y){this.string=y;this.tail=y;this.pos=0}u.prototype.eos=function(){return this.tail===""};u.prototype.scan=function(z){var y=this.tail.match(z);if(y&&y.index===0){this.tail=this.tail.substring(y[0].length);this.pos+=y[0].length;return y[0]}return""};u.prototype.scanUntil=function(z){var y,A=this.tail.search(z);switch(A){case -1:y=this.tail;this.pos+=this.tail.length;this.tail="";break;case 0:y="";break;default:y=this.tail.substring(0,A);this.tail=this.tail.substring(A);this.pos+=A}return y};function r(y,z){this.view=y||{};this.parent=z;this._cache={}}r.make=function(y){return(y instanceof r)?y:new r(y)};r.prototype.push=function(y){return new r(y,this)};r.prototype.lookup=function(y){var B=this._cache[y];if(!B){if(y=="."){B=this.view}else{var A=this;while(A){if(y.indexOf(".")>0){B=A.view;var C=y.split("."),z=0;while(B&&z<C.length){B=B[C[z++]]}}else{B=A.view[y]}if(B!=null){break}A=A.parent}}this._cache[y]=B}if(typeof B==="function"){B=B.call(this.view)}return B};function p(){this.clearCache()}p.prototype.clearCache=function(){this._cache={};this._partialCache={}};p.prototype.compile=function(A,y){var z=this._cache[A];if(!z){var B=a.parse(A,y);z=this._cache[A]=this.compileTokens(B,A)}return z};p.prototype.compilePartial=function(z,B,y){var A=this.compile(B,y);this._partialCache[z]=A;return A};p.prototype.getPartial=function(y){if(!(y in this._partialCache)&&this._loadPartial){this.compilePartial(y,this._loadPartial(y))}return this._partialCache[y]};p.prototype.compileTokens=function(A,z){var y=this;return function(B,D){if(D){if(typeof D==="function"){y._loadPartial=D}else{for(var C in D){y.compilePartial(C,D[C])}}}return o(A,y,r.make(B),z)}};p.prototype.render=function(A,y,z){return this.compile(A)(y,z)};function o(F,z,y,I){var C="";var A,G,H;for(var D=0,E=F.length;D<E;++D){A=F[D];G=A[1];switch(A[0]){case"#":H=y.lookup(G);if(typeof H==="object"){if(k(H)){for(var B=0,K=H.length;B<K;++B){C+=o(A[4],z,y.push(H[B]),I)}}else{if(H){C+=o(A[4],z,y.push(H),I)}}}else{if(typeof H==="function"){var J=I==null?null:I.slice(A[3],A[5]);H=H.call(y.view,J,function(L){return z.render(L,y)});if(H!=null){C+=H}}else{if(H){C+=o(A[4],z,y,I)}}}break;case"^":H=y.lookup(G);if(!H||(k(H)&&H.length===0)){C+=o(A[4],z,y,I)}break;case">":H=z.getPartial(G);if(typeof H==="function"){C+=H(y)}break;case"&":H=y.lookup(G);if(H!=null){C+=H}break;case"name":H=y.lookup(G);if(H!=null){C+=a.escape(H)}break;case"text":C+=G;break}}return C}function x(E){var z=[];var D=z;var F=[];var B;for(var A=0,y=E.length;A<y;++A){B=E[A];switch(B[0]){case"#":case"^":F.push(B);D.push(B);D=B[4]=[];break;case"/":var C=F.pop();C[5]=B[2];D=F.length>0?F[F.length-1][4]:z;break;default:D.push(B)}}return z}function b(D){var A=[];var C,z;for(var B=0,y=D.length;B<y;++B){C=D[B];if(C){if(C[0]==="text"&&z&&z[0]==="text"){z[1]+=C[1];z[3]=C[3]}else{z=C;A.push(C)}}}return A}function q(y){return[new RegExp(d(y[0])+"\\s*"),new RegExp("\\s*"+d(y[1]))]}function w(O,E){O=O||"";E=E||a.tags;if(typeof E==="string"){E=E.split(l)}if(E.length!==2){throw new Error("Invalid tags: "+E.join(", "))}var I=q(E);var A=new u(O);var G=[];var F=[];var D=[];var P=false;var N=false;function M(){if(P&&!N){while(D.length){delete F[D.pop()]}}else{D=[]}P=false;N=false}var B,z,H,J,C;while(!A.eos()){B=A.pos;H=A.scanUntil(I[0]);if(H){for(var K=0,L=H.length;K<L;++K){J=H.charAt(K);if(g(J)){D.push(F.length)}else{N=true}F.push(["text",J,B,B+1]);B+=1;if(J=="\n"){M()}}}if(!A.scan(I[0])){break}P=true;z=A.scan(t)||"name";A.scan(e);if(z==="="){H=A.scanUntil(h);A.scan(h);A.scanUntil(I[1])}else{if(z==="{"){H=A.scanUntil(new RegExp("\\s*"+d("}"+E[1])));A.scan(n);A.scanUntil(I[1]);z="&"}else{H=A.scanUntil(I[1])}}if(!A.scan(I[1])){throw new Error("Unclosed tag at "+A.pos)}C=[z,H,B,A.pos];F.push(C);if(z==="#"||z==="^"){G.push(C)}else{if(z==="/"){if(G.length===0){throw new Error('Unopened section "'+H+'" at '+B)}var y=G.pop();if(y[1]!==H){throw new Error('Unclosed section "'+y[1]+'" at '+B)}}else{if(z==="name"||z==="{"||z==="&"){N=true}else{if(z==="="){E=H.split(l);if(E.length!==2){throw new Error("Invalid tags at "+B+": "+E.join(", "))}I=q(E)}}}}}var y=G.pop();if(y){throw new Error('Unclosed section "'+y[1]+'" at '+A.pos)}F=b(F);return x(F)}a.name="mustache.js";a.version="0.7.2";a.tags=["{{","}}"];a.Scanner=u;a.Context=r;a.Writer=p;a.parse=w;a.escape=m;var i=new p();a.clearCache=function(){return i.clearCache()};a.compile=function(z,y){return i.compile(z,y)};a.compilePartial=function(z,A,y){return i.compilePartial(z,A,y)};a.compileTokens=function(z,y){return i.compileTokens(z,y)};a.render=function(A,y,z){return i.render(A,y,z)};a.to_html=function(B,z,A,C){var y=a.render(B,z,A);if(typeof C==="function"){C(y)}else{return y}}}));

/**
 * SerializeObject jQuery Plugin
 * By: Tobias Cohen via StackOverflow
 * @See: http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 * CC-Wiki Licensed.
 */
$.fn.serializeObject=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||"");}else{o[this.name]=this.value||"";}});return o;};

(function($) {
    "use strict";


})(jQuery);

/**
 * Get brand domain in brand.com format
 */
function getFASDomain(){return window.location.hostname.replace(/([a-zA-Z0-9]+.)?/,"");}


/**********************
 * VENDORS JS
**********************/

/**
 * Begin Monetate ExpressTag Sync v8. Place at start of document head. DO NOT ALTER.
 * @See: https://monetate.formstack.com/forms/tag?u=Y&s=a-47d6e760/p/chicos.com,a-47d6e760/p/soma.com,a-47d6e760/p/whitehouseblackmarket.com&a=0014000000IuZna&n=Chico%27s%20FAS%20Inc.
 * Monetate Licensed.
 */
if(getFASDomain() != 'bostonproper.com'){
    monetateT = new Date().getTime();
    (function() {
        var p = document.location.protocol;
        if (p == "http:" || p == "https:") {
            var m = document.createElement("script"); m.type = "text/javascript"; m.src = (p == "https:" ? "https://s" : "http://") + "e.monetate.net/js/2/a-47d6e760/p/"+getFASDomain()+"/entry.js";
            var e = document.createElement("div"); e.appendChild(m); document.write(e.innerHTML);
        }
    })();
}