if(vui==undefined){var vui={};}vui.numberToArray=function(a){if(vui.isString(a)){a=parseInt(a);}if(vui.isNumber(a)){a=[a];}return a;};vui.indexOf=function(d,c){if(vui.isArray(d)){var a;for(var b=0;b<d.length;b++){if(d[b]==c){a=b;break;}else{a=-1;}}return a;}};vui.autoscroll=function(c,b){var a=$(c);if(!b){b=500;}var d=a.offset().top;$("html,body").animate({scrollTop:d},b);};vui.browser={ua:navigator.userAgent.toLowerCase(),ie:/msie/.test(navigator.userAgent.toLowerCase()),ie6:/msie 6/.test(navigator.userAgent.toLowerCase()),ie7:/msie 7/.test(navigator.userAgent.toLowerCase()),ie8:/msie 8/.test(navigator.userAgent.toLowerCase()),ie9:/msie 9/.test(navigator.userAgent.toLowerCase()),firefox:/firefox\/(\d+\.\d+)/i.test(navigator.userAgent.toLowerCase()),chrome:/chrome\/(\d+\.\d+)/i.test(navigator.userAgent.toLowerCase()),opera:/opera/.test(navigator.userAgent.toLowerCase()),webkit:/webkit/.test(navigator.userAgent.toLowerCase())};vui.clickhide=vui.clickHide=function(b){var a=$(b);var c=false;a.show();a.hover(function(){c=true;},function(){c=false;});$("html,body").mouseup(function(){if(!c){a.hide();}});};vui.contextmenu=function(c,a){a=$.extend({menu:null,zIndex:2,autoShow:true,preventContextmenu:true,diff:2,callback:null},a);var b={el:c,menu:a.menu,init:function(){if(a.preventContextmenu){this.preventContextmenu(a.preventContextmenu);}if(a.menu==null){alert("options error");}var d=this;this.hide();this.preventContextmenu(this.menu);this.setStyle();this.el.bind("contextmenu",function(h){h.preventDefault();var e=h.pageX+a.diff;var i=h.pageY+a.diff;if(a.autoShow){var f=$(window).height()+$(document).scrollTop();var g=i-a.diff+a.menu.outerHeight();if(g>f){i=i-a.menu.outerHeight();}}a.menu.css({left:e,top:i});d.show();d.clickBodyHide();});},clickBodyHide:function(){var d=this;$("html").one("click",function(){d.hide();});},preventContextmenu:function(d){d.bind("contextmenu",function(e){return false;});},setStyle:function(){this.menu.css({zIndex:a.zIndex,position:"absolute"});this.menu.appendTo("body");},show:function(){this.menu.show();},hide:function(){this.menu.hide();}};b.init();};vui.cookie=function(d,e,b){if(arguments.length>1&&(e===null||typeof e!=="object")){b=jQuery.extend({},b);if(e===null){b.expires=-1;}if(typeof b.expires==="number"){var g=b.expires,c=b.expires=new Date();c.setDate(c.getDate()+g);}return(document.cookie=[encodeURIComponent(d),"=",b.raw?String(e):encodeURIComponent(String(e)),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""));}b=e||{};var a,f=b.raw?function(h){return h;}:decodeURIComponent;return(a=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?f(a[1]):null;};vui.counter={k:[],v:[],get:function(a){var b=this.k.indexOf(a);if(b<0){return 0;}return this.v[b];},inc:function(a){var b=this.k.indexOf(a);if(b<0){this.k.push(a);this.v.push(1);return 1;}else{this.v[b]++;return this.v[b];}},dec:function(a){var b=this.k.indexOf(a);if(b<0){return 0;}else{if(this.v[b]>0){this.v[b]--;}return this.v[b];}}};vui.debug=function(){return/debug/.test(location.search);};vui.defaultchars=function(c){var b=$(c);if(b.val()){return;}var a=b.attr("defaultchars");b.val(a);b.focusin(function(){if(b.val()==a){b.val("");}}).focusout(function(){if(b.val()==""){b.val(a);}});};vui.dialog=function(j,i){var h="";j=$.extend({message:null,mask:true,opacity:0.15,drag:false,maskClass:"vuiDialogMask",dialogClass:"vuiDialog",close:true,maskIframe:false,appendType:true,stick:null,autoClientX:false,autoClientY:false,fixed:true,css:{width:null,height:null,top:null,left:null,zIndex:9998}},j);var b=vui.isObject(j.message);var e=j.stick;var f;if(j.mask){f=$(document.createElement("div"));f.attr("class",j.maskClass);f.addClass("vuiMaskLayer");f.css({position:"absolute",zIndex:j.css.zIndex,left:0,top:0,opacity:j.opacity,backgroundColor:"#000",width:vui.pageSize().docWidth,height:vui.pageSize().docHeight});if(!$("."+j.maskClass)[0]){f.appendTo("body");}if(vui.browser.ie6||j.maskIframe){f.append('<iframe src="javascript:;" class="vuiSelectBug" frameBorder="0" style="width:100%;height:100%;position:absolute;z-index:'+(j.css.zIndex+1)+';opacity:0;filter:alpha(opacity=0);top:0;left:0;">');}$(window).resize(function(){var k={width:vui.pageSize().docWidth,height:vui.pageSize().docHeight};$("."+j.maskClass).css(k);});}if(b){if(j.appendType){j.message.appendTo("body");}j.message.css({top:0,left:0});}var a=$(document.createElement("div"));if(vui.isString(j.message)){a.append(j.message);h=a.children().first();}else{if(b){h=j.message;}else{a.append(h);}}h.css({"float":"left",position:"",top:"",bottom:"",left:"",right:""});c();a.attr("class",j.dialogClass);if(!b){a.appendTo("body");}if(b){a=j.message;}var d={position:"absolute",zIndex:j.css.zIndex+2,display:"block"};function g(){c();var k=vui.browser.ie6;var l={position:k?"absolute":"fixed",top:(j.css.top==null)?($(window).height()-h.height())/2+(k?$(window).scrollTop():0):j.css.top,left:(j.css.left==null)?($(window).width()-h.width())/2+(k?$(window).scrollLeft():0):j.css.left};if(!j.fixed){l.position="absolute";}a.css(l);}if(e){d.left=e.offset().left+j.css.left;d.top=e.offset().top+j.css.top;}function c(){if(j.autoClientX){h.css({width:$(window).width()});}if(j.autoClientY){h.css({height:$(window).height()});}}a.css(d);if(!e){g();}if(vui.browser.ie6&&!e){if(j.fixed){$(window).bind("scroll",function(){g();});}}$(window).resize(function(){if(e){a.css({left:e.offset().left+j.css.left,top:e.offset().top+j.css.top});}else{g();}});$(".dialogclose",a).click(function(){a.remove();f.remove();});$(window).data("dialog.options.close",j.close);$(window).data("dialog.maskObj",f);$(window).data("dialog.dialogObj",a);if(i){i();}if(j.close){vui.preventScroll.init();}};vui.undialog=function(){if($(window).data("dialog.maskObj")&&($(window).data("dialog.options.close")==true)){$(window).data("dialog.maskObj").remove();$(window).data("dialog.dialogObj").remove();var a=$(".vuiMaskLayer:last");if(!a.is(":visible")||a.css("visibility")=="hidden"){vui.preventScroll.destroy();}}};vui.drag=function(b,a){a=$.extend({lockX:false,lockY:false,start:null,drag:null,end:null,maxLeft:null,maxRight:null,maxTop:null,maxBottom:null},a);var c={dragging:null,init:function(){this.bind();},diffX:0,diffY:0,unbind:function(){$(document).unbind("mousedown").unbind("mousemove").unbind("mouseup");},bind:function(){var d=this;$(document).bind("mousedown",function(e){if(e.target.className==b.attr("class")){d.dragging=true;d.diffX=e.clientX-b.offset().left;d.diffY=e.clientY-b.offset().top;if(a.start!=null){a.start.call();}}}).bind("mousemove",function(f){if(d.dragging){var h,g;if(!a.lockY){h=f.clientY-d.diffY;if(a.maxTop!=null&&h<a.maxTop){h=a.maxTop;}if(a.maxBottom!=null&&h>a.maxBottom){h=a.maxBottom;}b.css({top:h});}if(!a.lockX){g=f.clientX-d.diffX;if(a.maxLeft!=null&&h<a.maxLeft){h=a.maxLeft;}if(a.maxRight!=null&&h>a.maxRight){h=a.maxRight;}b.css({left:g});}var e=[h,g];if(h==undefined){e=g;}if(g==undefined){e=h;}if(a.drag!=null){a.drag.call(null,e);}}}).bind("mouseup",function(e){if(a.end!=null){a.end.call();}d.dragging=false;});}};c.init();};vui.fixed=function(b,a){a=$.extend({top:null,bottom:null,left:null,right:null,place:null,zIndex:2},a);var c={isIe6:vui.browser.ie6,init:function(){var d=["topLeft","topRight","topCenter","bottomLeft","bottomRight","bottomCenter"];if(a.place&&vui.indexOf(d,a.place)==-1){alert("place param error");return;}var e="fixed";if(this.isIe6){e="absolute";}b.css({position:e,zIndex:a.zIndex,top:"",bottom:"",left:"",right:""});this.set();this.bindResize();this.bindScroll();},set:function(){if(a.place){this.place();}else{this.normal();}},normal:function(){var d={};if(a.top!=null){d.top=this.isIe6?(a.top+this.css.scrollTop()):a.top;}if(a.left!=null){d.left=this.isIe6?(a.left+this.css.scrollLeft()):a.left;}if(a.bottom!=null){if(this.isIe6){d.top=this.css.top()-a.bottom;}else{d.bottom=a.bottom;}}if(a.right!=null){if(this.isIe6){d.left=this.css.left()-a.right;}else{d.right=a.right;}}b.css(d);},place:function(){var d=a.place;this[d]();},bindScroll:function(){var d=this;$(window).bind("scroll",function(){d.set();});},bindResize:function(){var d=this;$(window).resize(function(){d.set();});},css:{center:function(){return($(window).width())/2+this.scrollLeft()-(b.outerWidth()/2);},top:function(){return $(window).height()+this.scrollTop()-b.outerHeight();},left:function(){return $(window).width()+this.scrollLeft()-b.outerWidth();},scrollTop:function(){return $(document).scrollTop();},scrollLeft:function(){return $(document).scrollLeft();}},bottomLeft:function(){if(this.isIe6){var e=this.css.scrollLeft();var d=this.css.top();b.css({left:e,top:d});}else{b.css({left:0,bottom:0});}},bottomCenter:function(){if(this.isIe6){var e=this.css.center();var d=this.css.top();b.css({left:e,top:d});}else{b.css({left:"50%",bottom:0,marginLeft:-b.outerWidth()/2});}},bottomRight:function(){if(this.isIe6){var e=this.css.left();var d=this.css.top();b.css({left:e,top:d});}else{b.css({right:0,bottom:0});}},topLeft:function(){if(this.isIe6){var e=this.css.scrollLeft();var d=this.css.scrollTop();b.css({left:e,top:d});}else{b.css({left:0,top:0});}},topCenter:function(){if(this.isIe6){var e=this.css.center();var d=this.css.scrollTop();b.css({left:e,top:d});}else{b.css({left:"50%",top:0,marginLeft:-b.outerWidth()/2});}},topRight:function(){if(this.isIe6){var e=this.css.left();var d=$(document).scrollTop();b.css({left:e,top:d});}else{b.css({right:0,top:0});}}};c.init();};vui.focusclass=vui.focusClass=function(c,a){var b=$(c);b.focus(function(){b.toggleClass(a);}).blur(function(){b.toggleClass(a);});};vui.hotkeyArray={};vui.hotkey=function(a,d){a.event=a.event.toLowerCase();a.key=a.key.toLowerCase();var b=/^keypress|keydown|keyup$/;if(!b.test(a.event)){return;}var c={27:"esc",9:"tab",32:"space",13:"enter",8:"backspace",145:"scrollclock",20:"capslock",144:"numlock",19:"pause",45:"insert",36:"home",46:"delete",35:"end",33:"pageup",34:"pagedown",37:"left",38:"up",39:"right",40:"down",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",191:"/",17:"ctrl",16:"shift",109:"-",107:"=",219:"[",221:"]",220:"\\",222:"'",187:"=",188:",",189:"-",190:".",191:"/",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",110:".",111:"/",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"};vui.hotkeyArray[a.name]=d;$(document).bind(a.event,function(e){var f=0;$.each(c,function(g){if(c[g]==a.key){f=g;return false;}});if(e.which==f){vui.hotkeyArray[a.name]();}});};vui.unhotkey=function(a){delete vui.hotkeyArray[a];};vui.inputCursor={getSelection:function(e){var h=0,c=0,g,d,b,a,f;if(typeof e.selectionStart=="number"&&typeof e.selectionEnd=="number"){h=e.selectionStart;c=e.selectionEnd;}else{d=document.selection.createRange();if(d&&d.parentElement()==e){a=e.value.length;g=e.value.replace(/\r\n/g,"\n");b=e.createTextRange();b.moveToBookmark(d.getBookmark());f=e.createTextRange();f.collapse(false);if(b.compareEndPoints("StartToEnd",f)>-1){h=c=a;}else{h=-b.moveStart("character",-a);h+=g.slice(0,h).split("\n").length-1;if(b.compareEndPoints("EndToEnd",f)>-1){c=a;}else{c=-b.moveEnd("character",-a);c+=g.slice(0,c).split("\n").length-1;}}}}return{start:h,end:c};},getStartPos:function(a){return this.getSelection(a).start;},getEndPos:function(a){return this.getSelection(a).end;},insert:function(a,b){if(document.selection){a.focus();sel=document.selection.createRange();sel.text=b;a.focus();}else{if(a.selectionStart||a.selectionStart=="0"){startPos=a.selectionStart;endPos=a.selectionEnd;scrollTop=a.scrollTop;a.value=a.value.substring(0,startPos)+b+a.value.substring(endPos,a.value.length);a.focus();a.selectionStart=startPos+b.length;a.selectionEnd=startPos+b.length;a.scrollTop=scrollTop;}else{a.value+=b;a.focus();}}},select:function(c,d,a){if(typeof a=="undefined"||a<d){a=d;}c.focus();if(document.selection){var b=c.createTextRange();b.move("character",d);b.moveEnd("character",a);b.select();}else{c.selectionStart=d;c.selectionEnd=a;}},replace:function(c,e,b,d,a){c.value=c.value.substr(0,e)+d+c.value.substr(b,c.value.length);if(a){this.select(c,e+d.length);}}};vui.isScroll=function(b,a){a=$.extend({wrapWidth:500,wrapHeight:200,wrapClass:"isScrollWrap",scrollWidth:20,scrollMinHeight:50,scrollClass:"isScroll",step:5,setScrollOnce:false},a);var c={init:function(){b.data("data",a);if(a.setScrollOnce){a=b.data("data");this.setScrollHeight();this.dragInit();}else{this.setInit();}},setInit:function(){this.styleInit();this.createWrap();this.createScroll();this.setScrollHeight();this.bind();this.dragInit();},bind:function(){var e=this;var d="mousewheel";if(vui.browser.firefox){d="DOMMouseScroll";}$("."+a.wrapClass).bind(d,function(h){var f;var g=h.wheelDelta;if(vui.browser.firefox){g=-h.detail;}e.step(g);h.preventDefault();});},setContentTop:function(d){var g=b.outerHeight();var f=a.wrapHeight;var e=this.getElementHeight($("."+a.scrollClass));var h=[(g-f)/(f-e)]*d;b.css({top:-h});},dragInit:function(){var d=this;vui.drag($("."+a.scrollClass),{lockX:true,maxTop:0,maxBottom:a.wrapHeight-this.getElementHeight($("."+a.scrollClass)),drag:d.drag});},drag:function(d){c.setContentTop(d);},scrollTopValue:0,step:function(i){var h=b.outerHeight();var g=a.wrapHeight;var f=this.getElementHeight($("."+a.scrollClass));var e=a.step*parseInt((h-g)/g);var d=(1/e)*(g-f);if(i<0){this.scrollTopValue+=d;}else{this.scrollTopValue-=d;}if(this.scrollTopValue>(g-f)&&i<0){this.scrollTopValue=(g-f);}if(this.scrollTopValue<0&&i>0){this.scrollTopValue=0;}$("."+a.scrollClass).css({top:this.scrollTopValue});this.setContentTop(this.scrollTopValue);},setScrollHeight:function(){var d=b.outerHeight()-a.wrapHeight;if(d<0){this.hide();}else{var g=b.outerHeight();var f=a.wrapHeight;var e=parseInt((f*f)/g);if(e<a.scrollMinHeight){e=a.scrollMinHeight;}$("."+a.scrollClass).css({height:e});this.show();}},getElementHeight:function(e){var f=e.css("height");var d=parseFloat(f.slice(0,f.length-2));return d;},createWrap:function(){var f=$(document.createElement("div"));f.addClass(a.wrapClass);b.after(f);f.append(b);var e=this;var d={position:"relative",overflow:"hidden",width:a.wrapWidth,height:a.wrapHeight,border:"2px solid blue"};f.css(d);},createScroll:function(){var e=$(document.createElement("div"));e.addClass(a.scrollClass);b.after(e);var d={position:"absolute",right:0,top:0,width:a.scrollWidth,backgroundColor:"#333"};e.css(d);},styleInit:function(){b.css({position:"absolute",left:0,top:0});},show:function(){$("."+a.scrollClass).show();},hide:function(){$("."+a.scrollClass).hide();}};c.init();};vui.isArray=function(a){return Object.prototype.toString.apply(a)==="[object Array]";};vui.isEmpty=function(a){return a===null||typeof a==="undefined"||a===0||a===false||a===""||(typeof a.length==="number"&&a.length===0);};vui.isNumber=function(a){return typeof(a)==="number";};vui.isString=function(a){return typeof(a)==="string";};vui.isBoolean=function(a){return typeof(a)==="boolean";};vui.isObject=function(a){return typeof(a)==="object";};vui.isFunction=function(a){return typeof(a)==="function";};vui.isUndefined=function(a){return o===undefined;};vui.isNull=function(a){return o===null;};vui.log=function(a){window.console&&console.log(a);};vui.maxlength=vui.maxLength=function(b){var g=$(this);b=$.extend({maxCharacters:140,numClass:"num",btnClass:"btn",errorClass:"W_error"},b);var e=$("."+b.numClass);var f=$("."+b.btnClass);function d(q){var p=new RegExp("(http://)+(([-A-Za-z0-9]+(.[-A-Za-z0-9]+)*(.[-A-Za-z]{2,5}))|([0-9]{1,3}(.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_$.+!*(),;:@&=?/~#%]*)*","gi");var n=q.length;if(n>0){var j=41,s=140,l=q;var r=q.match(p)||[];var h=0;for(var k=0,n=r.length;k<n;k++){var m=a(r[k]);if(m>j){h+=m<=s?21:(21+(m-s)/2);l=l.replace(r[k],"");}}return Math.ceil(h+a(l)/2);}else{return 0;}}function a(i){if(typeof i=="undefined"){return 0;}var h=i.match(/[^\x00-\x80]/g);return(i.length+(!h?0:h.length));}function c(){var h=d(g.val());if(h>b.maxCharacters){e.html('<em>已超过</em><span class="errorNum">'+(h-b.maxCharacters)+"</span><em>字</em>");$("span",e).addClass(b.errorClass);f.attr("disabled","disabled");}else{e.html("<em>还可以输入</em>"+(b.maxCharacters-h)+"<em>字</em>");$("span",e).removeClass(b.errorClass);f.attr("disabled","");}if(h==0){f.attr("disabled","disabled");}}c();g.keyup(function(){c();});};vui.menu=function(a){a=$.extend({menuTop:$("#menuTop"),menu:$("#menu"),type:"click",autoShow:false,css:{left:null,top:null}},a);var b={init:function(){a.menu.appendTo("body");if(a.type=="click"){b.clickhide();a.menuTop.mouseup(function(){if(b.showTag){b.close();}else{b.show();}return false;});}else{if(a.type=="hover"){a.menuTop.click(function(){b.show();});a.menuTop.bind("mouseover",function(){b.show();});}}},showTag:false,show:function(){var c,d;if(a.css.left!=null||a.css.top!=null){vui.stick({stick:a.menuTop,stickTo:a.menu,autoShow:a.autoShow,css:{type:1,top:a.css.top,left:a.css.left}});}else{vui.stick({stick:a.menuTop,autoShow:a.autoShow,stickTo:a.menu});}b.showTag=true;},close:function(){a.menu.hide();b.showTag=false;},mouseInsideTag:false,clickhide:function(){a.menu.click(function(){b.close();});a.menu.hover(function(){b.mouseInsideTag=true;},function(){b.mouseInsideTag=false;});$("html,body").mouseup(function(){if(b.mouseInsideTag){b.show();}else{b.close();}});}};b.init();};vui.pageSize=function(){var f,b,c,a;var d;d=document.compatMode=="BackCompat"?document.body:document.documentElement;f=d.clientWidth;b=d.clientHeight;c=Math.max(f,d.scrollWidth);a=Math.max(b,d.scrollHeight);var e={};e.clientWidth=f;e.clientHeight=b;e.docWidth=c;e.docHeight=a;return e;};vui.preventScroll={mousewheelEvent:(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel",isIE:document.attachEvent?true:false,init:function(){if(this.isIE){document.attachEvent("on"+this.mousewheelEvent,this.handler,false);}else{document.addEventListener(this.mousewheelEvent,this.handler,false);}},destroy:function(){if(this.isIE){document.detachEvent("on"+this.mousewheelEvent,this.handler,false);}else{document.removeEventListener(this.mousewheelEvent,this.handler,false);}},handler:function(a){if(vui.preventScroll.isIE){a.returnValue=false;}else{a.preventDefault();}}};vui.selectCode=function(d,e,c){var b=d.value.length;if(e<0||c<0){return;}if(e>b){e=b;}if(c>b){c=b;}if(d.createTextRange){var a=d.createTextRange();a.moveStart("character",-b);a.moveEnd("character",-b);a.moveStart("character",e);a.moveEnd("character",c);a.select();}else{d.setSelectionRange(e,c);d.focus();}};vui.selectFileName=function(d,b){var a=d.value;var c=a.lastIndexOf(".");if(c==-1||b=="all"){c=a.length;}vui.selectCode(d,0,c);};vui.stick=function(b){b=$.extend({stick:null,stickTo:null,resize:true,autoShow:false,css:{type:0,position:"absolute",top:0,left:0,zIndex:2}},b);function a(){var c={};if(b.css.type){c={top:b.css.top,left:b.css.left};if(b.autoShow){var d=$(window).height()+$(document).scrollTop();var e=c.top+b.stickTo.outerHeight();if(e>d){c.top=c.top-b.stickTo.outerHeight();}}}else{c={top:b.stick.offset().top+b.css.top+b.stick.outerHeight(),left:b.stick.offset().left+b.css.left};if(b.autoShow){var d=$(window).height()+$(document).scrollTop();var e=c.top+b.stickTo.outerHeight();if(e>d){c.top=b.stick.offset().top-b.stickTo.outerHeight();}}}return c;}b.stickTo.css({position:"absolute",zIndex:b.css.zIndex,top:a().top,left:a().left}).show();if(b.resize){$(window).resize(function(){b.stickTo.css(a());});}};