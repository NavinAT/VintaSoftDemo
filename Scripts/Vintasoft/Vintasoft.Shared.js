// Copyright 2014-2019 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(x){if(void 0==window.jQuery)throw Error("jQuery is not found.");if(void 0==x.version)x.version="1.4.0.1";else if("1.4.0.1"!==x.version)throw Error("Wrong script version.");x.Shared=x.Shared||(x.Shared={});(function(n){function Q(c){function e(){}e.prototype=c;return new e}Array.isArray||(Array.isArray=function(c){return"[object Array]"===Object.prototype.toString.call(c)});Array.prototype.indexOf||(Array.prototype.indexOf=function(c,e){var f;if(null==this)throw new TypeError('"this" is null or not defined');var h=
Object(this),l=h.length>>>0;if(0===l)return-1;f=+e||0;Infinity===Math.abs(f)&&(f=0);if(f>=l)return-1;for(f=Math.max(0<=f?f:l-Math.abs(f),0);f<l;){if(f in h&&h[f]===c)return f;f++}return-1});Math.trunc||(Math.trunc=function(c){c=+c;return c-c%1||(isFinite(c)&&0!==c?0>c?-0:0:c)});n.extend=function(c,e){c.prototype=Q(e.prototype);c.prototype.constructor=c;c.superclass=e.prototype};var c=function(){};c.te=function(c){throw Error(c);};c.tae=function(){c.te("Argument type exception.")};c.toe=function(){c.te("Argument out of range exception.")};
c.tne=function(){c.te("Not implemented exception.")};c.tof=function(c,e){return typeof c===e};c.iss=function(b){return c.tof(b,"string")};c.isn=function(b){return c.tof(b,"number")};c.isb=function(b){return c.tof(b,"boolean")};c._183=function(b){return c.tof(b,"object")};c.isf=function(b){return c.tof(b,"function")};c.n=function(){for(var b=0;b<arguments.length;b++){var e=arguments[b];c.isn(e)&&!isNaN(e)||c.tae()}};c.b=function(){for(var b=0;b<arguments.length;b++)c.isb(arguments[b])||c.tae()};c.d=
function(b){c.ic(b,Date)||(b=Date.parse(b),isNaN(b)&&c.tae(),b=new Date(b));return b};c.s=function(){for(var b=0;b<arguments.length;b++)c.iss(arguments[b])||c.tae()};c.sz=function(){for(var b=0;b<arguments.length;b++){var e=arguments[b];c.n(e.width);c.n(e.height)}};c.p=function(){for(var b=0;b<arguments.length;b++){var e=arguments[b];c.n(e.x);c.n(e.y)}};c.r=function(){for(var b=0;b<arguments.length;b++){var e=arguments[b];c.p(e);c.sz(e)}};c.e=function(b,e){var f=c.ic(b,G)?b.valueOf():b;return new e(f)};
c.ic=function(c,e){return c instanceof e};c.c=function(b,e,f){c.ic(b,e)||(null!=f?c.te(f):c.tae())};c.ad=function(b,e){Array.isArray(b)||c.tae();if(null!=e)for(var f=0;f<b.length;f++)e(b[f])};c.ac=function(b,e){c.ad(b,function(b){c.c(b,e)})};c.f=function(b,e){c.isf(b)||(null!=e?c.te(e):c.tae())};var G=function(){var c=G.prototype;c.getAllAvailableNames=function(){};c.getAllAvailableValues=function(){};c.valueOf=function(){};c.toString=function(){};c.equals=function(c){};c.isFlagged=function(){return!1}},
I=function(){var c=I.prototype;c.toArray=function(){};c.contains=function(c){};c.add=function(c){};c.remove=function(c){};c.isFlagged=function(){return!0}};n.extend(I,G);var C=function(){};C.create=function(b,e){function f(a,c){var k=[];if(null!=g[c])k.push(g[c]);else for(var s=1;s<=d;)0!==l(c,s)&&k.push(g[s]),s*=2;return k.join("|")}function h(a){return{low:a%4294967296|0,high:a/4294967296|0}}function l(a,c){var d=h(a),k=h(c);return 4294967296*(d.high&k.high)+((d.low&k.low)>>>0)}for(var g={},d=0,
a=0;a<b.length;a++){var k=b[a],m,E;if(c.iss(k.name)&&c.isn(k.value))m=k.value,E=k.name;else for(var s in k){c.iss(s)?(E=s,m=k[s]):c.isn(s)&&(m=s,E=k[s]);break}c.isn(m)&&c.iss(E)||c.te("Enum item must be an object with string name and numeric value.");g[E]=m;g[m]=E}Object.freeze&&Object.freeze(g);if(e)for(a in g)isNaN(+a)||(k=parseInt(a),0!==k&&0===l(k,k-1)&&(d+=k));else for(a in g)isNaN(+a)||(k=parseInt(a),k>d&&(d=k));var w=function(a){if(c.iss(a)){var k=+a;if(isNaN(k))if(null==g[a]){k=0;a=a.split("|");
for(var s=0;s<a.length;s++)k+=g[a[s]];a=k}else a=g[a];else a=k}a>d&&c.tae();k=g[a];null==k&&e&&(k=f(this,a));null!=k&&""!==k||c.tae();this[this[k]=+a]=k};e?n.extend(w,I):n.extend(w,G);a=w.prototype;a.getAllAvailableNames=function(){var a=[],c;for(c in g)isNaN(+c)&&a.push(c);return a};a.getAllAvailableValues=function(){var a=[],c;for(c in g)isNaN(+c)&&null!=g[c]&&a.push(g[c]);return a};a.valueOf=function(){for(var a in this){var c=+a;if(!isNaN(c))return c}};a.toString=function(){return f(this,this.valueOf())};
e&&(a.toArray=function(){var a=this.valueOf(),c=[];if(0===a&&null!=g[a])c.push(new w(0));else for(var k=1;k<=d;){if(0!==l(a,k))try{c.push(new w(k))}catch(s){}k*=2}return c},a.contains=function(a){var k=this.valueOf();c.iss(a)&&(a=g[a]);return l(k,a)===a+0},a.add=function(a){var k=this.valueOf();c.iss(a)&&(a=g[a]);k=h(k);a=h(a);return new w(4294967296*(k.high|a.high)+((k.low|a.low)>>>0))},a.remove=function(a){var k=this.valueOf();c.iss(a)&&(a=g[a]);var d=a;a=h(k);d=h(d);return new w(l(4294967296*(a.high^
d.high)+((a.low^d.low)>>>0),k))});a.equals=function(a){var k=this.valueOf();c.iss(a)&&(a=g[a]);return k===a+0};a.isFlagged=function(){return e};return w};n.WebPixelFormatEnumJS=C.create([{Undefined:0},{Indexed1:1},{BlackWhite:2},{Indexed4:4},{Indexed8:8},{Gray8:9},{Bgr555:14},{Bgr565:15},{Gray16:16},{Bgr24:24},{Bgr32:32},{Bgra32:33},{Bgr48:48},{Bgra64:64}],!1);n.WebInterpolationModeEnumJS=C.create([{Default:0},{Low:1},{High:2},{Bilinear:3},{Bicubic:4},{NearestNeighbor:5},{HighQualityBilinear:6},{HighQualityBicubic:7}],
!1);n.WebSmoothingModeEnumJS=C.create([{Default:0},{HighSpeed:1},{HighQuality:2},{None:3},{AntiAlias:4}],!1);n.WebImageTypeEnumJS=C.create([{Url:1},{Base64:2}],!1);var q=function(){};q._310=function(){};q._310=null;q.get_SessionId=function(){return q._310};q.set_SessionId=function(b){null!=q._310&&c.te("Session ID already initialized.");/^[\w,-]+$/.test(b)||c.te("Unsupported Session ID format: ID can contain only latin letters, numbers, '_' and '-' symbols.");q._310=b};q.get_ScrollSize=function(c){null==
c&&(c=document.body);c=$("<div>").appendTo(c);c.css({overflow:"scroll",visibility:"hidden",position:"absolute",width:"100px",height:"100px"});var e=c[0],f=e.offsetWidth-e.clientWidth;0>f&&(f=100-e.clientWidth);c.remove();return f};q.getScreenDpi=function(){var c=$("<div>").appendTo(document.body);$(c).css({position:"absolute",top:"-100%",left:"-100%",width:"1in",height:"1in"});var e=c[0],e={dpiX:e.offsetWidth,dpiY:e.offsetHeight};c.remove();return e};q.guid=function(){function c(){return Math.floor(65536*
(1+Math.random())).toString(16).substring(1)}return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()};var B=function(c,e,f,h,l){var g=B.prototype;g.get_ShortName=function(){return this._129};g.get_FullName=function(){return this._40};g.get_Value=function(){return this._120};g.get_ReadOnly=function(){return this._87};g.get_Items=function(){return this._171};g.get_RefreshFromParent=function(){return this._281};this._129=c;this._40=e;this._120=f;this._87=h;this._171=[];this._281=l?l:!1},M=function(b,
e,f,h){function l(a,c){a._120=c._120;a._40=c._40;a._129=c._129;a._87=c._87;a._281=c._281;for(var k=0;k<a._171.length;k++)l(a._171[k],c._171[k])}function g(a,c){for(;a._171.length>c._171.length;)a._171.splice(a._171.length-1,1);for(;a._171.length<c._171.length;)a._171[a._171.length]=c._171[a._171.length];for(var k=0;k<a._171.length;k++)g(a._171[k],c._171[k])}function d(a,c,k){if(a["set_"+c])a["set_"+c](k);else null!=a[c]&&(a[c]=k)}function a(k,d,m,u){if(c._183(d)){var g=[],b;for(b in d)(null==u?0:
-1!==u.indexOf(b))||g.push(b);g.sort();for(b=0;b<g.length;b++){var e=g[b],f="";if(0===e.lastIndexOf("get_",0)&&c.isf(d[e])){var f=e.split("_")[1],l=!0;null!=d["set_"+f]&&c.isf(d["set_"+f])&&(l=!1);var h;try{h=d[e]()}catch(n){h=null}if(null!=h)if(c._183(h))c.ic(h,HTMLElement)||(p=""!==m?m+"_"+f:f,f=new B(f,p,h,l),k.get_Items().push(f),a(f,h,p,u));else if(!c.isf(h)){var p=""!==m?m+"_"+f:f,f=new B(f,p,h,l);k.get_Items().push(f)}}}if(0===k._171.length&&c._183(d)){b=!0;for(e in d)if(c.isf(d[e])){b=!1;
break}e=Object.getOwnPropertyNames(d);h=Array.isArray(d);if(b&&!h)for(b=0;b<e.length;b++)"_"!==e[b][0]&&(p=""!==m?m+"_"+e[b]:e[b],h=d[e[b]],null!=h&&(c._183(h)?(f=new B(e[b],p,h,!1,!0),k.get_Items().push(f),a(f,h,p,u)):(f=new B(e[b],p,h,!1,!0),k.get_Items().push(f))));else if(h)for(m=k.get_FullName(),l=!1,b=0;b<d.length;b++)f=new B(""+b,m+"_"+b,d[b],l,!0),k.get_Items().push(f),a(f,d[b],m+"_"+b,u)}}}function k(a,d,m,b){var e=d.get_Items();if(e.length!==b._171.length)m.push({property:b,value:d._120,
updateMarkup:!0});else{for(var g=!1,f=0;f<e.length;f++){d=e[f];var h=b._171[f];if(d._40!==h._40){m.push({property:b,value:d._120,updateMarkup:!0});g=!0;break}}if(!g)for(f=0;f<e.length;f++)if(d=e[f],h=b._171[f],d._40!==h._40)m.push({property:h,value:h._120,updateMarkup:!0});else if(h._171.length!==d._171.length)m.push({property:h,value:h._120,updateMarkup:!0});else if(0!=d._171.length)k(a,d,m,h);else if(g=h._120,d._120!=g){h=!0;if(c.ic(d._120,Array)&&c.ic(g,Array))if(d._120.length!=g.length)h=!1;else for(var l=
0;l<d._120.length;l++){if(d._120[l]!=g[l]){h=!1;break}}else h=c.isf(d._120.equals)?d._120.equals(g):!1;h||m.push({property:d,value:g})}}}var m=M.prototype;m.get_ObjectProperties=function(){return this._35};m.setPropertyValue=function(a,c){for(var k=this._207,m=a.split("_"),b=this._35,e=-1,g=0;g<m.length;g++)for(var f=0;f<b._171.length;f++)if(b._171[f]._129===m[g]){b=b._171[f];-1==e||b._281||(e=-1);-1==e&&b._281&&(e=Math.max(g-1,0));break}var h;if(null!=b){f=[];switch(typeof b._120){case "boolean":c=
"True"===c?!0:!1;break;case "number":c=parseFloat(c)}try{if(1==m.length){var l=m[0];d(k,l,c)}else if(b._281){q=k;for(k=0;k<e;k++)q=Array.isArray(q)&&!isNaN(+m[k])?q[+m[k]]:q["get_"+m[k]]();for(var n=m[e],p=q["get_"+n](),k=p,g=e+1;g<m.length-1;g++)k=isNaN(+m[g])?k["get_"+m[g]]():k[+m[g]];l=m[m.length-1];k[l]=c;d(q,n,p)}else{for(var q=k,g=0;g<m.length-1;g++)q=Array.isArray(q)&&!isNaN(+m[g])?q[+m[g]]:q["get_"+m[g]]();l=m[m.length-1];d(q,l,c)}f=this.updatePropertyGrid(new M(this._207,"","",this._352))}catch(t){f.push(b),
h=t}0===f.length&&b._120!==c&&f.push(b);return{changedProperties:f,exception:h}}};m.updatePropertyGrid=function(a){var c=[],d=[];k(this,this._35,c,a._35);if(0!=c.length)for(var m=0;m<c.length;m++)c[m].property._120=c[m].value,d.push(c[m].property);g(this._35,a._35);l(this._35,a._35);return d};this._207=b;null==e&&(e="");null==f&&(f="");null!=h&&c.ad(h,c.s);this._352=h;this._35=new B(e,f,b,!1);a(this._35,b,f,h)},v=function(b,e,f,h){function l(d,a,k){if(c.iss(d))try{d=JSON.parse(d)}catch(m){}if(f){c.iss(d)&&
(d={errorMessage:d});var b=d.responseText;"error"!==a||null!=d.errorMessage||""!==b&&null!=b||(d.errorMessage="Unknown service error OR service is unavailable.");f(d,a,k)}}var g=v.prototype;g.get_ActionName=function(){return this._508};g._24=function(){var c=$.extend(!0,{},this._135);c.success=this._430;c.error=this._503;return c};c.s(b);""===b&&c.te("Action name can not be empty.");null!=e&&c.f(e,"Success callback must be defined as function.");null!=f&&c.f(f,"Error callback must be defined as function.");
this._508=b;this._503=l;this._430=function(d,a,k){if(c.iss(d))try{d=JSON.parse(d)}catch(m){l(d,a,k);return}d.success?e&&e(d,a,k):l(d,a,k)};this._135=h},J=function(b,e){var f=J.prototype;f.compositeError=function(c){};f.compositeSuccess=function(c){};f._24=function(){if(0!=this._547.length){for(var b=this._547[0]._24(),e=[],g=0;g<this._547.length;g++)e[g]=this._547[g]._135.data,e[g].requestId=g+"R";var d=this,a=function(a,m,b){if(c.iss(a))try{a=JSON.parse(a)}catch(g){}if(c._183(a)&&a.length)for(m=
0;m<a.length;m++)b=parseInt(a[m].requestId),b=d._547[b],null!=b._503&&b._503(a[m]);else for(b=a.responseText,"error"!==m||null!=a.errorMessage||""!==b&&null!=b||(a.errorMessage="Unknown service error OR service is unavailable."),m=0;m<d._547.length;m++)b=d._547[m],null!=b._503&&b._503(a);$(d).triggerHandler("compositeError")};b.data={requestsData:e};b.success=function(k,m,b){if(c.iss(k))try{k=JSON.parse(k)}catch(g){a(k,m,b);return}for(m=0;m<k.length;m++)b=parseInt(k[m].requestId),b=d._547[b],null!=
b._430&&b._430(k[m]);$(d).triggerHandler("compositeSuccess")};b.error=a;return b}};this._508=e;c.ac(b,v);this._547=b;delete f.compositeError;delete f.compositeSuccess};n.extend(J,v);var p=function(b){var e=p.prototype;e.get_ServiceRoute=function(){return this._173};e.addRequest=function(b){c.c(b,v);if(0===this._407)return this.sendRequest(b);this._163.push(b)};e.sendRequests=function(){var c=[],b=this._189();if(0!=b.length)for(var e=0;e<b.length;e++)c.push(this.sendRequest(b[e]));for(e=0;e<this._163.length;e++)c.push(this.sendRequest(this._163[e]));
this._163=[];return c};e.sendRequest=function(b){c.tne()};e.bi=function(){this._407++};e.ei=function(){this._407--;0>this._407&&(this._407=0);if(0===this._407)return this.sendRequests()};e._189=function(){for(var c=[],b=0;b<this._163.length;){var e=this._163[b]._508,g=p._446[e];if(null!=g){for(var d=b,a=[];d<this._163.length;)this._163[d]._508===e?(a.push(this._163[d]),this._163.splice(d,1)):d++;c.push(new J(a,g))}else b++}return c};this._173=b;this._407=0;this._163=[]};p.defaultImageService=-1;p._446=
function(){};p._446={};p.rcr=function(b,e){c.s(b,e);""!==b&&""!==e||c.tae();null!=p._446[b]&&c.tae();p._446[b]=e};p.rcr("RenderThumbnail","RenderThumbnails");p.rcr("GetImageInfo","GetImagesInfo");var K=function(b){K.superclass.constructor.call(this,b);K.prototype.sendRequest=function(b){var f=b._24(),h=q._310;c.ic(f.data,FormData)?null!=h&&f.data.append("sessionId",h):(null!=f.data?(c._183(f.data)&&null!=h&&(f.data.sessionId=h),f.data=JSON.stringify(f.data)):null!=h&&(f.data=JSON.stringify(h)),f.contentType=
"application/json");f.url=this._173+"/"+b._508;return{request:b,object:$.ajax(f)}}};n.extend(K,p);var L=function(b){L.superclass.constructor.call(this,b);L.prototype.sendRequest=function(b){var f=b._24();f.url=this._173;var h=f.data,l=q._310;c.ic(h,FormData)?(h.append("action",b._508),null!=l&&h.append("sessionId",l)):(null==h&&null!=l&&(h=l),c._183(h)?(null!=l&&(h.sessionId=l),h={requestParams:JSON.stringify(h),action:b._508}):h={requestParams:h,action:b._508});f.data=h;return{request:b,object:$.ajax(f)}}};
n.extend(L,p);var t=function(b,e,f){var h=t.prototype;h.changed=function(c){};h.get_Type=function(){return"Image"};h.get_Resolution=function(){return{x:this._461.x,y:this._461.y}};h.set_Resolution=function(b,g){var d;d=null==g?{x:b.x,y:b.y}:{x:b,y:g};c.p(d);var a=this._461;if(a.x!==d.x||a.y!==d.y)this._461=d,this.fce("Resolution")};h.get_InterpolationMode=function(){return this._5};h.set_InterpolationMode=function(b){b=c.e(b,n.WebInterpolationModeEnumJS);b.equals(this._5)||(this._5=b,this.fce("InterpolationMode"))};
h.get_SmoothingMode=function(){return this._206};h.set_SmoothingMode=function(b){b=c.e(b,n.WebSmoothingModeEnumJS);b.equals(this._206)||(this._206=b,this.fce("SmoothingMode"))};h.clone=function(){return new this.constructor(this._461,this._5,this._206)};h.equals=function(b){return c.ic(b,t)&&this.constructor===b.constructor?this._154(b):!1};h.isEmpty=function(){return this.equals(new t)};h.beginInit=function(){this._141||this._231||(this._231=!0,this._4=this.clone())};h.endInit=function(){if(!this._141&&
this._231&&(this._231=!1,null!=this._4)){var c=this.gcn(this._4);0!==c.length&&(this._4=null,this._318({properties:c}))}};h.toObject=function(){return this._378()};h.iai=function(c,b){var d=c._151._140;if(null==d)return!1;if("Pdf"===d||"Docx"===d){if(null==b)return!this._154(new t);if(-1!==b.indexOf("Resolution")||-1!==b.indexOf("InterpolationMode")||-1!==b.indexOf("SmoothingMode"))return!0}return!1};h.fce=function(b){c.iss(b)&&(b=[b]);this._231||this._318({properties:b})};h.gcn=function(c){var b=
[];this._461.x===c._461.x&&this._461.y===c._461.y||b.push("Resolution");this._5.equals(c._5)||b.push("InterpolationMode");this._206.equals(c._206)||b.push("SmoothingMode");return b};h.gsi=function(c){return this};h._154=function(c){return this._461.x===c._461.x&&this._461.y===c._461.y&&this._5.equals(c._5)&&this._206.equals(c._206)};h._378=function(){return{resolution:this._461,interpolationMode:this._5.valueOf(),smoothingMode:this._206.valueOf()}};h._318=function(c){$(this.evm).triggerHandler("changed",
c);$(this).triggerHandler("changed")};null==b&&(b={x:0,y:0});c.p(b);this._461={x:b.x,y:b.y};null==e&&(e=6);this._5=c.e(e,n.WebInterpolationModeEnumJS);null==f&&(f=4);this._206=c.e(f,n.WebSmoothingModeEnumJS);this._231=!1;this._4=null;this._141=!1;this.evm={};delete h.changed},F=function(b){function e(a,c){var d=a.data,b=d.c,d={obj:d.s,properties:c.properties};b._313?b._313.push(d):b._318({properties:[d]})}var f=F.prototype,h=F.superclass,l=[];c.ad(b,function(a){c.c(a,t);c.ic(a,F)&&c.te("Composite rendering settings can not contain other composite rendering settings.");
a=a.constructor;-1!==l.indexOf(a)&&c.te("Composite rendering settings can contain only unique settings.");l.push(a)});h.constructor.call(this);this._44=b;for(var g=0;g<b.length;g++){var d=b[g];$(d.evm).on("changed",{c:this,s:d},e)}this._313=null;f.get_Settings=function(){return this._44.slice()};f.set_Resolution=function(a,k){var d;d=null==k?{x:a.x,y:a.y}:{x:a,y:k};c.p(d);var b=!1;this._231||(this.beginInit(),b=!0);this._461=d;for(var e=0;e<this._44.length;e++)this._44[e].set_Resolution(d);b&&this.endInit()};
f.set_InterpolationMode=function(a){a=c.e(a,n.WebInterpolationModeEnumJS);var d=!1;this._231||(this.beginInit(),d=!0);this._5=a;for(var b=0;b<this._44.length;b++)this._44[b].set_InterpolationMode(a);d&&this.endInit()};f.set_SmoothingMode=function(a){a=c.e(a,n.WebSmoothingModeEnumJS);var d=!1;this._231||(this.beginInit(),d=!0);this._206=a;for(var b=0;b<this._44.length;b++)this._44[b].set_SmoothingMode(a);d&&this.endInit()};f.beginInit=function(){if(!this._231){this._231=!0;for(var a=this._44,c=0;c<
a.length;c++)a[c].beginInit(),a[c]._141=!0}};f.endInit=function(){if(this._231){this._313=[];this._231=!1;for(var a=this._44,c=0;c<a.length;c++)a[c]._141=!1,a[c].endInit();0!=this._313.length&&this._318({properties:this._313});this._313=null}};f.clone=function(){for(var a=[],d=this._44,b=0;b<d.length;b++)a.push(d[b].clone());a=new F(a);d=this._461;a._461={x:d.x,y:d.y};a._5=c.e(this._5,n.WebInterpolationModeEnumJS);a._206=c.e(this._206,n.WebSmoothingModeEnumJS);return a};f.equals=function(a){if(!h.equals.call(this,
a))return!1;var c=this._44;a=a._44;if(c.length!=a.length)return!1;for(var d=0;d<c.length;d++)if(!c[d].equals(a[d]))return!1;return!0};f.isEmpty=function(){for(var a=0;a<this._44.length;a++)if(!this._44[a].isEmpty())return!1;return!0};f.toObject=function(){for(var a=h.toObject.call(this),c=[],d=0;d<this._44.length;d++)c.push(this._44[d].toObject());a.additionalProperties=JSON.stringify({settings:c});return a};f.gcn=function(a){var c=[],d=this._44;a=a._44;for(var b=Math.min(d.length,a.length),e=0;e<
b;e++)if(d[e].constructor===a[e].constructor){var g=d[e].gcn(a[e]);0<g.length&&c.push({obj:d[e],properties:g})}else c.push({obj:d[e],properties:null});if(d.length>b)for(e=b;e<d.length;e++)c.push({obj:d[e],properties:null});return c};f.iai=function(a,c){var d=this.gsi(a);if(null==d)return!1;if(null!=c){for(var b=0;b<c.length;b++){var e=c[b],g=e.obj;if(g===d&&(c=e.properties,g.iai(a,c)))return!0}return!1}return d.iai(a)};f.gsi=function(a){var c=this._44,b=null,b=null!=a._151?a._151._140:a._140;if(null==
b)return null;a=null;for(var e=0;e<c.length;e++)if("Base"===c[e].get_Type()){a=c[e];break}var g=[];if(null==a)g=c;else for(e=0;e<c.length;e++)c[e]!==a&&g.push(c[e]);for(e=0;e<g.length;e++)if(g[e].get_Type()===b)return d;return null!=a?a:g[0]}};n.extend(F,t);var z=function(){var b=z.prototype;b.changed=function(c){};b.get_IsColorManagementEnabled=function(){return this._38};b.set_IsColorManagementEnabled=function(b){c.b(b);this._38!==b&&(this._38=b,$(this).triggerHandler("changed"),$(this._136).triggerHandler("changed"))};
b.clone=function(){var c=new this.constructor;c._38=this._38;return c};b.equals=function(b){return c.ic(b,z)?this._38===b._38:!1};b.toObject=function(){return this._378()};b._378=function(){return{isColorManagementEnabled:this._38}};this._38=!0;this._136={};delete b.changed},H=function(b,e,f){function h(c,d){null==d||d.isEmpty()||(c.renderingSettings=d.toObject())}function l(c,d){null!=d&&(c.decodingSettings=d.toObject())}this._309=b;null==e&&(e=p.defaultImageService);-1!==e&&c.c(e,p,"You should specify correct image service OR define the default image service.");
this._349=e;null==f&&(f=p.defaultAnnotationService);null!=f&&(c.c(f,p,"You should specify correct annotation service OR define the default annotation service"),this._56=f);this._140=null;b=H.prototype;b.get_ImageId=function(){return this._309};b.get_ImageService=function(){c.c(this._349,p,"Image service is not an instance of WebServiceJS class.");return this._349};b.get_AnnotationService=function(){c.c(this._56,p,"Image annotating service is not an instance of WebServiceJS class.");return this._56};
b.equals=function(b){if(this===b)return!0;if(!c.ic(b,H)||this._309!==b._309)return!1;var d=this._349,a=b._349,k=this._56;b=b._56;k=k===b||null!=k&&null!=b&&k._173===b._173;return(d===a||-1!==d&&-1!==a&&d._173===a._173)&&k};b._532=function(b,d,a,k,e){c.n(b);null!=d&&c.c(d,t);null!=a&&c.c(a,z);var f={};f.imageInfo={imageId:this._309,pageIndex:b};h(f,d);l(f,a);var s=this;b=new v("GetImageInfo",function(a){null==s._140&&null!=a.decoderName&&(s._140=a.decoderName);k&&k(a)},e,{type:"POST",data:f});return this.get_ImageService().addRequest(b)};
b._13=function(b,d,a,k,e,f,s,w,u){e=c.e(e,n.WebImageTypeEnumJS);c.n(b,d,a);c.b(k);null!=f&&c.c(f,t);null!=s&&c.c(s,z);var r={};r.imageInfo={imageId:this._309,pageIndex:b};r.thumbnailSize={width:d,height:a};r.imageType=e.valueOf();r.useCache=k;h(r,f);l(r,s);var D=this;b=new v("RenderThumbnail",function(a){null==D._140&&null!=a.decoderName&&(D._140=a.decoderName);w&&w(a)},u,{type:"POST",data:r});this.get_ImageService().addRequest(b)};b._296=function(b,d,a,k,e,f,s,w,u,r,D,p,q){u=c.e(u,n.WebImageTypeEnumJS);
c.n(b,d,a,k,e);c.b(s,w);c.p(f);null!=r&&c.c(r,t);null!=D&&c.c(D,z);var y={};y.imageInfo={imageId:this._309,pageIndex:b};y.tileSize={width:k,height:e};y.imagePoint={x:d,y:a};y.scale=f;y.useCache=s;y.renderNeighbourTiles=w;y.imageType=u.valueOf();h(y,r);l(y,D);b=new v("RenderImageTile",p,q,{type:"POST",data:y});return this.get_ImageService().sendRequest(b)};b._401=function(b,d,a,k,e,f,s,w,u){e=c.e(e,n.WebImageTypeEnumJS);c.n(b,d,a);c.p(k);null!=f&&c.c(f,t);null!=s&&c.c(s,z);var r={};r.imageInfo={imageId:this._309,
pageIndex:b};r.tileSize={width:d,height:a};r.scale=k;r.imageType=e.valueOf();h(r,f);l(r,s);b=new v("RenderImageTiles",w,u,{type:"POST",data:r});return this.get_ImageService().sendRequest(b)};b._582=function(b,d,a,k,e){c.n(b);null!=d&&c.c(d,t);null!=a&&c.c(a,z);var f={};f.imageInfo={imageId:this._309,pageIndex:b};h(f,d);l(f,a);b=new v("GetImageAsBase64String",k,e,{type:"POST",data:f});return this.get_ImageService().sendRequest(b)}},A=function(b,e){function f(a){var c="."+a._486;$(a._365.evm).on("changed"+
c,function(c,b){h(a,b)})}function h(a,c){a._365.iai(a,c?c.properties:null)&&a.ci("rsc");$(a).triggerHandler("renderingSettingsChanged",void 0)}function l(a){if(null!=a._181)$(a._181._136).on("changed."+a._486,function(){g(a)})}function g(a,c){c&&a.ci("dsc");$(a).triggerHandler("decodingSettingsChanged",void 0)}var d=A.prototype;d.renderingSettingsChanged=function(a){};d.decodingSettingsChanged=function(a){};d.icd=function(a,c){};d.get_ImageId=function(){return this._151._309};d.get_Size=function(){return null==
this._305||null==this._93?null:{width:this._305,height:this._93}};d.get_Resolution=function(){return null==this._524||null==this._131?null:{x:this._524,y:this._131}};d.get_PixelFormat=function(){return this._336};d.get_Source=function(){return this._151};d.get_PageIndex=function(){return this._560};d.get_IsVector=function(){return this._262};d.get_RenderingSettings=function(){return this._365};d.set_RenderingSettings=function(a){c.c(a,t);var b=this._365;if(!this._365.equals(a)){var d="."+this._486;
$(this._365.evm).off(d);this._365=a;f(this);b.isEmpty()&&a.isEmpty()||(d=null,b.constructor===a.constructor&&(d={properties:a.gcn(b)}),h(this,d))}};d.get_DecodingSettings=function(){return this._181};d.set_DecodingSettings=function(a){null!=a&&c.c(a,z);if(!(null!=this._181&&this._181.equals(a)||null==this._181&&null==a)){null!=this._181&&$(this._181._136).off("."+this._486);var b=this._181;this._181=a;l(this);g(this,null==b&&a._38||null==a&&b._38||null!=b&&null!=a)}};d.get_Guid=function(){return this._486};
d.get_IsBad=function(){return this._9};d.get_Metadata=function(){null==x.Imaging&&c.te("'Vintasoft.Imaging' script is not found.");null==this._53&&(this._53=new x.Imaging.WebImageMetadataJS(this));return this._53};d.get_DecoderName=function(){return this._151._140};d.equals=function(a){return this===a?!0:c.ic(a,A)?a._560===this._560&&this._151.equals(a._151):!1};d.renderTile=function(a,c,b){this._354(a,!1,c,b)};d.renderTileWithNeighbours=function(a,c,b){a.useCache=!0;this._354(a,!0,c,b)};d.renderTiles=
function(a,b,d){null!=a&&c._183(a)||c.te("The tiles rendering settings cannot be empty.");var e=a.width,f=a.height,g=a.scale;null==g&&(g={x:1,y:1});var h=a.format;null==h&&(h=new n.WebImageTypeEnumJS(1));var r=a.renderingSettings;null==r&&(r=this._365);var l=a.decodingSettings;null==l&&(l=this._181);var p=this;return this._151._401(this._560,e,f,g,h,r,l,function(a){a.image=p;a.renderingSettings=r;a.decodingSettings=l;b&&b(a)},function(a){a.image=p;a.renderingSettings=r;a.decodingSettings=l;a.blocked||
(p._9=!0);d&&d(a)})};d.renderThumbnail=function(a,b,d){function e(a){a.image=t;a.width=f;a.height=g;a.renderingSettings=p;a.decodingSettings=q}null!=a&&c._183(a)||c.te("The thumbnail rendering settings cannot be empty.");var f=a.width,g=a.height,h=a.format;null==h&&(h=new n.WebImageTypeEnumJS(1));var l=a.useCache;null==l&&(l=!0);var p=a.renderingSettings;null==p&&(p=this._365);var q=a.decodingSettings;null==q&&(q=this._181);var t=this;this._151._13(this._560,f,g,l,h,p,q,function(a){e(a);null!=a.imageParam&&
t._419(a.imageParam);b&&b(a)},function(a){e(a);null!=a.imageParam&&t._419(a.imageParam);a.blocked||(t._9=!0);d&&d(a)})};d.getImageInfo=function(a,c){function b(a){a.image=f;a.renderingSettings=d;null!=e&&(a.decodingSettings=e)}var d=this._365,e=this._181,f=this;return this._151._532(this._560,this._365,this._181,function(c){b(c);f._419(c);a&&a(c)},function(a){b(a);f._419(a);a.blocked||(f._9=!0);c&&c(a)})};d.getImageAsBase64String=function(a,c){function b(a){a.image=d;a.renderingSettings=e;null!=f&&
(a.decodingSettings=f)}var d=this,e=this._365,f=this._181;return this._151._582(this._560,e,f,function(c){b(c);a&&a(c)},function(a){b(a);a.blocked||(d._9=!0);c&&c(a)})};d.cto=function(){return{imageId:this._151._309,pageIndex:this._560}};d.csto=function(){var a={},c=this._365;null==c||c.isEmpty()||c.iai(this)&&(a.renderingSettings=c.toObject());null!=this._181&&(a.decodingSettings=this._181.toObject());return a};d.gi=function(){return this._417};d.ci=function(a,c){null==a&&(a="dc");null==c&&(c=!0);
this._417=q.guid();"dsc"!==a&&c&&(this._131=this._524=this._93=this._305=null,this._9=!1);var b={i:this,d:a,c:c};$(this.evm).triggerHandler("icd",b)};d.sm=function(a){null!=this._53&&c.te("Image already has metadata object. Use 'get_Metadata' property.");this._53=a};d._354=function(a,b,d,e){function f(a){a.image=A;a.pos={x:g,y:h};a.size={width:l,height:p};a.scale=q;a.renderingSettings=v;a.decodingSettings=x}null!=a&&c._183(a)||c.te("The tile rendering settings cannot be empty.");var g=a.x;null==g&&
(g=0);var h=a.y;null==h&&(h=0);var l=a.width,p=a.height,q=a.scale;null==q&&(q={x:1,y:1});var t=a.useCache;null==t&&(t=!0);var y=a.format;null==y&&(y=new n.WebImageTypeEnumJS(1));var v=a.renderingSettings;null==v&&(v=this._365);var x=a.decodingSettings;null==x&&(x=this._181);var z=a=Infinity;null!=this._305&&0!==this._305&&0!==this._93&&(a=this._305,z=this._93);(0>g||g>=a||0>h||h>=z)&&c.te("Tile must have coordinates inside the image.");var A=this;return this._151._296(this._560,g,h,l,p,q,t,b,y,v,
x,function(a){f(a);d&&d(a)},function(a){f(a);a.blocked||(A._9=!0);e&&e(a)})};d._419=function(a){if(null==this._305||null==this._93||null==this._524||null==this._131){var c=a.imageSize,b=a.imageResolution;if(null!=c&&null!=b){this._305=+c.width;this._93=+c.height;this._524=+b.width;this._131=+b.height;this._262=a.isVector;try{this._336=new n.WebPixelFormatEnumJS(a.pixelFormat)}catch(d){this._336=new n.WebPixelFormatEnumJS(0)}if(0===this._305||0===this._93)this._9=!0}}a.pixelFormat=this._336};c.c(b,
H);c.n(e);this._151=b;this._560=e;this._486=q.guid();this._417=q.guid();this._365=new t;f(this);this._53=this._181=null;this.evm={};this._262=this._336=this._131=this._524=this._93=this._305=null;this._9=!1;delete d.decodingSettingsChanged;delete d.renderingSettingsChanged;delete d.icd};p.defaultImageCollectionService=-1;var N=function(){function b(b){c.c(b,p,"Image collection service is not correct.")}function e(c){for(var a=c.imageInfos,b=[],e=[],f=0;f<a.length;f++){var g=a[f].imageId,h=b[g];null==
h&&(h=new H(g),b[g]=h);e.push(new A(h,a[f].pageIndex))}c.images=e}function f(b,a){var e={};c.ad(a,function(a){c.n(a);(0>a||a>=b._494.length)&&c.toe();null==e[a]&&(e[a]=1)});var f=[],g;for(g in e)f.push(+g);return f}function h(b,a,e){var f=!1,g=!1,h=!1;for(null==e._151._56&&(h=!0);a<b.length;a++){var l=b[a],u;a:{u=l;var r=e,n=!f;if(u._151.equals(r._151)&&(u._560===r._560&&c.te("Image already exists in collection."),n)){r._151=u._151;r._151._349=u._151._349;r._151._56=u._151._56;u=!0;break a}u=!1}u&&
(h=g=f=!0);g||e._151._349._173!==l._151._349._173||(e._151._349=l._151._349,g=!0);h||null==l._151._56||e._151._56._173!==l._151._56._173||(e._151._56=l._151._56,h=!0)}}function l(c,a){for(var b=-1,e=0;e<c._494.length;e++)if(c._494[e]._486==a){b=e;break}return b}var g=N.prototype;g.changing=function(c,a){};g.changed=function(c,a){};g.get_Count=function(){return this._494.length};g.get_Image=function(b){c.n(b);if(0<=b&&b<this._494.length)return this._494[b];c.toe()};g.indexOf=function(b){c.iss(b)||
c.c(b,A);b=c.iss(b)?b:b._486;return l(this,b)};g.clear=function(){if(0!==this._494.length){var c={actionName:"clear",images:this.toArray()};this._530(c);this._494=[];this._285(c)}};g.add=function(c){this.insert(this._494.length,c)};g.addRange=function(c){this.insertRange(this._494.length,c)};g.insert=function(b,a){c.n(b);c.c(a,A);if(0<=b&&b<=this._494.length){h(this._494,0,a);var e={actionName:"insert",imageIndex:b,image:a};this._530(e);this._494.splice(b,0,a);this._285(e)}else c.toe()};g.insertRange=
function(b,a){var e=!0;c.ic(a,N)&&(a=a._494,e=!1);c.n(b);e&&c.ac(a,A);if(0<=b&&b<=this._494.length){for(var f=a.length,e=a.concat(this._494),f=f-1;0<=f;f--)h(e,f+1,a[f]);e={actionName:"insertRange",imageIndex:b,images:a};this._530(e);for(f=0;f<a.length;f++)this._494.splice(b+f,0,a[f]);this._285(e)}else c.toe()};g.removeAt=function(b){c.n(b);if(0<=b&&b<this._494.length&&0!=this._494.length){var a={actionName:"removeAt",imageIndex:b,image:this._494[b]};this._530(a);this._494.splice(b,1);this._285(a)}else c.toe()};
g.remove=function(b){c.c(b,A);b=l(this,b._486);-1!==b?this.removeAt(b):c.te("Image does not exist.")};g.removeImages=function(b){var a=[],e=this;c.ad(b,function(b){c.c(b,A);b=l(e,b._486);-1!==b?a.push(b):c.te("Image does not exist.")});this.removeRange(a)};g.removeRange=function(c){c=f(this,c);for(var a=[],b=0;b<c.length;b++)a.push(this._494[c[b]]);a={actionName:"removeRange",imagesIndexes:c,images:a};this._530(a);for(b=c.length-1;0<=b;b--)this._494.splice(c[b],1);this._285(a)};g.set=function(b,a){c.n(b);
c.c(a,A);if(0<=b&&b<this._494.length&&0!=this._494.length){var e={actionName:"set",imageIndex:b,image:a,previousImage:this._494[b]};this._530(e);this._398=!1;this.removeAt(b);this.insert(b,a);this._398=!0;this._285(e)}else c.toe()};g.toArray=function(){return this._494.slice()};g.setRenderingSettings=function(b){c.c(b,t);for(var a=0;a<this._494.length;a++)this._494[a].set_RenderingSettings(b.clone())};g.setDecodingSettings=function(b){null!=b&&c.c(b,z);if(null!=b)for(var a=0;a<this._494.length;a++)this._494[a].set_DecodingSettings(b.clone());
else for(a=0;a<this._494.length;a++)this._494[a].set_DecodingSettings()};g.getImageFilesInfos=function(d,a,f,g){try{c.ad(d,c.s)}catch(h){c.te("fileIds parameter must be an array of strings")}g=p.defaultImageCollectionService;c.ic(a,p)&&(g=a);b(g);d=new v("GetImageFileInfo",function(b,d,f){e(b);c.isf(a)&&a(b,d,f)},f,{type:"POST",data:{fileIds:d}});return g.sendRequest(d)};g.openFile=function(b,a,e,f){c.s(b);return this.openFiles([b],a,e,f)};g.openFiles=function(b,a,e,f){c.ic(a,p)&&(f=a);var g=this;
return this.getImageFilesInfos(b,function(b,d,e){g.clear();g.addRange(b.images);c.isf(a)&&a(b,d,e)},e,f)};g.saveState=function(c,a,e){null==e&&(e=p.defaultImageCollectionService);b(e);for(var f=this.toArray(),g=[],h=0;h<f.length;h++){var l=f[h].get_Source();g.push({imageId:l._309,pageIndex:f[h]._560})}c=new v("SaveState",c,a,{type:"POST",data:{imageInfos:g}});return e.sendRequest(c)};g.loadState=function(d,a,f){null==f&&(f=p.defaultImageCollectionService);b(f);a=new v("LoadState",function(a,b,f){e(a);
c.isf(d)&&d(a,b,f)},a,{type:"POST",data:{}});return f.sendRequest(a)};g._530=function(c){this._398&&($(this.evm).triggerHandler("changing",c),$(this).triggerHandler("changing",c))};g._285=function(c){this._398&&($(this.evm).triggerHandler("changed",c),$(this).triggerHandler("changed",c))};this._494=[];this.evm={};this._398=!0;delete g.changing;delete g.changed},O=function(){var b=O.prototype;this._535={};b.setData=function(b,f){c.s(b);null!=f?this._535[b]=f:delete this._535[b]};b.getData=function(b){c.s(b);
return this._535[b]};b.clear=function(){this._535={}};b.contains=function(b){c.s(b);return null!=this._535[b]}},P=function(){function b(a,c){var b=$(c).attr(n);""!==b&&(b=a.getLocalizationInfo(b),null!=b&&e(c,b,a))}function e(a,c,d){var g=$(a),h=c.text;null!=h&&g.text(h);h=c.title;null!=h&&g.prop("title",h);h=c.alt;null!=h&&g.prop("alt",h);h=c.value;null!=h&&g.val(h);c=c.items;a=f(a);if(null!=c)for(g=0;g<a.length;g++){var h=a[g],k=$(h).attr(n),k=c[k];null!=k&&e(h,k,d)}else for(g=0;g<a.length;g++)b(d,
a[g])}function f(a){var c="["+n+"]";return null==a?$(c).filter(function(){return 0===$(this).parents(c).length}):$(a).find(c).filter(function(){for(var b=$(this).parents(c),d=b.length-1;0<=d;)if(b[d]!==a)d--;else break;b.splice(d,b.length-d);return 0===b.length})}function h(a){a._260||c.te("Localization dictionary is not available.")}function l(a,c){var b=new XMLHttpRequest;b.overrideMimeType&&b.overrideMimeType("text/plain");b.onreadystatechange=function(){4===b.readyState&&(200===b.status||0===
b.status?c(b.responseText):k("Not found: "+a))};b.open("GET",a);b.send("")}function g(a,c){var b=d(a);a:{for(var e=0;e<c.length;e++)if(c[e]===b){b=c[e];break a}b=null}return null!=b?b:c[0]}function d(a){a=a.toLowerCase();var c=a.indexOf("-");return 0<c?a.substring(0,c):a}function a(a,c){l(c,function(b){function e(b){var c=!1;try{a._373=JSON.parse(b)}catch(d){k("Cannot parse the localization dictionary file."),c=!0}c||(a._260=!0,$(a).triggerHandler("ready"))}var f;try{f=JSON.parse(b)}catch(h){k("Cannot parse the localization settings file.");
return}b=f.locales;if(null==b||0===b.length)k("The localization settings file does not contain information about locales.");else{for(f=0;f<b.length;f++)b[f]=d(b[f]);b=g(navigator.language||navigator.browserLanguage,b);b=c.split("/").slice(0,-1).concat(b+".txt").join("/");l(b,e)}})}function k(a){console.error?console.error(a):console.log("ERROR: "+a)}var m=P.prototype;m.get_IsReady=function(){return this._260};m.getLocalizationInfo=function(a){h(this);return this._373[a]};m.localizeDocument=function(){h(this);
for(var a=f(),c=0;c<a.length;c++)b(this,a[c])};var n="localizationId";this._260=!1;this._373=null;(function(b){var c=document.head.querySelector('link[rel="localization"]');c?a(b,c.href):k("Localization settings are not found. Please add 'link' element to your page for specifying how to find localization settings: '<link rel='localization' href = '/locales/settings.json'>'")})(this)};n.pv=c;n.WebImagingEnviromentJS=q;n.EnumGenerator=C;n.WebEnumItemBase=G;n.WebFlagsEnumItemBase=I;n.WebPropertyInfoJS=
B;n.WebPropertyGridJS=M;n.WebRequestJS=v;n.WebCompositeRequestJS=J;n.WebServiceJS=p;n.WebServiceControllerJS=K;n.WebServiceHandlerJS=L;n.WebDecodingSettingsJS=z;n.WebRenderingSettingsJS=t;n.WebCompositeRenderingSettingsJS=F;n.WebImageSourceJS=H;n.WebImageJS=A;n.WebImageCollectionJS=N;n.WebObjectClipboardJS=O;n.VintasoftLocalizationJS=P})(x.Shared||(x.Shared={}))})(Vintasoft||(Vintasoft={}));
