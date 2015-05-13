/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",T="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",S="SWFObjectExprInst",x="onreadystatechange",Q=window,h=document,t=navigator,V=false,X=[],o=[],P=[],K=[],I,p,E,B,L=false,a=false,m,G,j=true,l=false,O=function(){var ad=typeof h.getElementById!=D&&typeof h.getElementsByTagName!=D&&typeof h.createElement!=D,ak=t.userAgent.toLowerCase(),ab=t.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=t.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof t.plugins!=D&&typeof t.plugins[T]==r){ae=t.plugins[T].description;if(ae&&(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&t.mimeTypes[q].enabledPlugin)){V=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=n(ae.replace(/^(.*)\..*$/,"$1"));aj[1]=n(ae.replace(/^.*\.(.*)\s.*$/,"$1"));aj[2]=/[a-zA-Z]/.test(ae)?n(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else{if(typeof Q.ActiveXObject!=D){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[n(ae[0]),n(ae[1]),n(ae[2])]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),i=function(){if(!O.w3){return}if((typeof h.readyState!=D&&(h.readyState==="complete"||h.readyState==="interactive"))||(typeof h.readyState==D&&(h.getElementsByTagName("body")[0]||h.body))){f()}if(!L){if(typeof h.addEventListener!=D){h.addEventListener("DOMContentLoaded",f,false)}if(O.ie){h.attachEvent(x,function aa(){if(h.readyState=="complete"){h.detachEvent(x,aa);f()}});if(Q==top){(function ac(){if(L){return}try{h.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()}())}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(h.readyState)){setTimeout(ab,0);return}f()}())}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=C("span");ad.style.display="none";ac=h.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function s(ab){if(typeof Q.addEventListener!=D){Q.addEventListener("load",ab,false)}else{if(typeof h.addEventListener!=D){h.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!=D){g(Q,"onload",ab)}else{if(typeof Q.onload=="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=h.getElementsByTagName("body")[0];var ae=C(r);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",q);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!=D){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[n(ag[0]),n(ag[1]),n(ag[2])]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;H()}())}else{H()}}function H(){var aj=o.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=o[ai].id;var ae=o[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(F(o[ai].swfVersion)&&!(O.wk&&O.wk<312)){w(ab,true);if(ae){ad.success=true;ad.ref=z(ab);ad.id=ab;ae(ad)}}else{if(o[ai].expressInstall&&A()){var al={};al.data=o[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{b(ah);if(ae){ae(ad)}}}}}else{w(ab,true);if(ae){var ac=z(ab);if(ac&&typeof ac.SetVariable!=D){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(V){Y()}else{H()}};function z(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(typeof ab.SetVariable!==D){aa=ab}else{aa=ab.getElementsByTagName(r)[0]||ab}}return aa}function A(){return !a&&F("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function R(ad,ae,aa,ac){var ah=c(aa);aa=W(aa);a=true;E=ac||null;B={success:false,id:aa};if(ah){if(ah.nodeName.toUpperCase()=="OBJECT"){I=J(ah);p=null}else{I=ah;p=aa}ad.id=S;if(typeof ad.width==D||(!/%$/.test(ad.width)&&n(ad.width)<310)){ad.width="310"}if(typeof ad.height==D||(!/%$/.test(ad.height)&&n(ad.height)<137)){ad.height="137"}var ag=O.ie?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+encodeURIComponent(h.title.slice(0,47)+" - Flash Player Installation");if(typeof ae.flashvars!=D){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&ah.readyState!=4){var ab=C("div");
aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";y(ah)}u(ad,ae,aa)}}function b(ab){if(O.ie&&ab.readyState!=4){ab.style.display="none";var aa=C("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(J(ab),aa);y(ab)}else{ab.parentNode.replaceChild(J(ab),ab)}}function J(af){var ae=C("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(r)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName=="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function k(aa,ab){var ac=C("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function u(ai,ag,ab){var aa,ad=c(ab);ab=W(ab);if(O.wk&&O.wk<312){return aa}if(ad){var ac=(O.ie)?C("div"):C(r),af,ah,ae;if(typeof ai.id==D){ai.id=ab}for(ae in ag){if(ag.hasOwnProperty(ae)&&ae.toLowerCase()!=="movie"){e(ac,ae,ag[ae])}}if(O.ie){ac=k(ai.data,ac.innerHTML)}for(af in ai){if(ai.hasOwnProperty(af)){ah=af.toLowerCase();if(ah==="styleclass"){ac.setAttribute("class",ai[af])}else{if(ah!=="classid"&&ah!=="data"){ac.setAttribute(af,ai[af])}}}}if(O.ie){P[P.length]=ai.id}else{ac.setAttribute("type",q);ac.setAttribute("data",ai.data)}ad.parentNode.replaceChild(ac,ad);aa=ac}return aa}function e(ac,aa,ab){var ad=C("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function y(ac){var ab=c(ac);if(ab&&ab.nodeName.toUpperCase()=="OBJECT"){if(O.ie){ab.style.display="none";(function aa(){if(ab.readyState==4){for(var ad in ab){if(typeof ab[ad]=="function"){ab[ad]=null}}ab.parentNode.removeChild(ab)}else{setTimeout(aa,10)}}())}else{ab.parentNode.removeChild(ab)}}}function U(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function W(aa){return(U(aa))?aa.id:aa}function c(ac){if(U(ac)){return ac}var aa=null;try{aa=h.getElementById(ac)}catch(ab){}return aa}function C(aa){return h.createElement(aa)}function n(aa){return parseInt(aa,10)}function g(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function F(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=n(aa[0]);aa[1]=n(aa[1])||0;aa[2]=n(aa[2])||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function v(af,ab,ag,ae){var ad=h.getElementsByTagName("head")[0];if(!ad){return}var aa=(typeof ag=="string")?ag:"screen";if(ae){m=null;G=null}if(!m||G!=aa){var ac=C("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);m=ad.appendChild(ac);if(O.ie&&typeof h.styleSheets!=D&&h.styleSheets.length>0){m=h.styleSheets[h.styleSheets.length-1]}G=aa}if(m){if(typeof m.addRule!=D){m.addRule(af,ab)}else{if(typeof h.createTextNode!=D){m.appendChild(h.createTextNode(af+" {"+ab+"}"))}}}}function w(ad,aa){if(!j){return}var ab=aa?"visible":"hidden",ac=c(ad);if(L&&ac){ac.style.visibility=ab}else{if(typeof ad==="string"){v("#"+ad,"visibility:"+ab)}}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!=null;return aa&&typeof encodeURIComponent!=D?encodeURIComponent(ab):ab}var d=function(){if(O.ie){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){y(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;o[o.length]=ab;w(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return z(aa)}},embedSWF:function(af,al,ai,ak,ab,ae,ad,ah,aj,ag){var ac=W(al),aa={success:false,id:ac};if(O.w3&&!(O.wk&&O.wk<312)&&af&&al&&ai&&ak&&ab){w(ac,false);M(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===r){for(var aq in aj){an[aq]=aj[aq]}}an.data=af;an.width=ai;an.height=ak;var ar={};if(ah&&typeof ah===r){for(var ao in ah){ar[ao]=ah[ao]}}if(ad&&typeof ad===r){for(var am in ad){if(ad.hasOwnProperty(am)){var ap=(l)?encodeURIComponent(am):am,at=(l)?encodeURIComponent(ad[am]):ad[am];if(typeof ar.flashvars!=D){ar.flashvars+="&"+ap+"="+at}else{ar.flashvars=ap+"="+at}}}}if(F(ab)){var au=u(an,ar,al);if(an.id==ac){w(ac,true)}aa.success=true;aa.ref=au;aa.id=au.id}else{if(ae&&A()){an.data=ae;R(an,ar,al,ag);return}else{w(ac,true)}}if(ag){ag(aa)}})}else{if(ag){ag(aa)}}},switchOffAutoHideShow:function(){j=false},enableUriEncoding:function(aa){l=(typeof aa===D)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(ac,ab,aa){if(O.w3){return u(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&A()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){y(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){v(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:s,getQueryParamValue:function(ad){var ac=h.location.search||h.location.hash;
if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(ad==null){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(S);if(aa&&I){aa.parentNode.replaceChild(I,aa);if(p){w(p,true);if(O.ie){I.style.display="block"}}if(E){E(B)}}a=false}},version:"2.3"}}();


/**
 * SWFAddress 2.4: Deep linking for Flash and Ajax <http://www.asual.com/swfaddress/>
 *
 * SWFAddress is (c) 2006-2009 Rostislav Hristov and contributors
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 */
if (typeof asual == "undefined") {
    var asual = {}
}
if (typeof asual.util == "undefined") {
    asual.util = {}
}
asual.util.Browser = new function() {
    var b = navigator.userAgent.toLowerCase(),
        a = /webkit/.test(b),
        e = /opera/.test(b),
        c = /msie/.test(b) && !/opera/.test(b),
        d = /mozilla/.test(b) && !/(compatible|webkit)/.test(b),
        f = parseFloat(c ? b.substr(b.indexOf("msie") + 4) : (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function() {
        return "[class Browser]"
    };
    this.getVersion = function() {
        return f
    };
    this.isMSIE = function() {
        return c
    };
    this.isSafari = function() {
        return a
    };
    this.isOpera = function() {
        return e
    };
    this.isMozilla = function() {
        return d
    }
};
asual.util.Events = new function() {
    var c = "DOMContentLoaded",
        j = "onstop",
        k = window,
        h = document,
        b = [],
        a = asual.util,
        e = a.Browser,
        d = e.isMSIE(),
        g = e.isSafari();
    this.toString = function() {
        return "[class Events]"
    };
    this.addListener = function(n, l, m) {
        b.push({
            o: n,
            t: l,
            l: m
        });
        if (!(l == c && (d || g))) {
            if (n.addEventListener) {
                n.addEventListener(l, m, false)
            } else {
                if (n.attachEvent) {
                    n.attachEvent("on" + l, m)
                }
            }
        }
    };
    this.removeListener = function(p, m, n) {
        for (var l = 0, o; o = b[l]; l++) {
            if (o.o == p && o.t == m && o.l == n) {
                b.splice(l, 1);
                break
            }
        }
        if (!(m == c && (d || g))) {
            if (p.removeEventListener) {
                p.removeEventListener(m, n, false)
            } else {
                if (p.detachEvent) {
                    p.detachEvent("on" + m, n)
                }
            }
        }
    };
    var i = function() {
        for (var m = 0, l; l = b[m]; m++) {
            if (l.t != c) {
                a.Events.removeListener(l.o, l.t, l.l)
            }
        }
    };
    var f = function() {
        if (h.readyState == "interactive") {
            function l() {
                h.detachEvent(j, l);
                i()
            }
            h.attachEvent(j, l);
            k.setTimeout(function() {
                h.detachEvent(j, l)
            }, 0)
        }
    };
    if (d || g) {
        (function() {
            try {
                if ((d && h.body) || !/loaded|complete/.test(h.readyState)) {
                    h.documentElement.doScroll("left")
                }
            } catch (m) {
                return setTimeout(arguments.callee, 0)
            }
            for (var l = 0, m; m = b[l]; l++) {
                if (m.t == c) {
                    m.l.call(null)
                }
            }
        })()
    }
    if (d) {
        k.attachEvent("onbeforeunload", f)
    }
    this.addListener(k, "unload", i)
};
asual.util.Functions = new function() {
    this.toString = function() {
        return "[class Functions]"
    };
    this.bind = function(f, b, e) {
        for (var c = 2, d, a = []; d = arguments[c]; c++) {
            a.push(d)
        }
        return function() {
            return f.apply(b, a)
        }
    }
};
var SWFAddressEvent = function(d) {
    this.toString = function() {
        return "[object SWFAddressEvent]"
    };
    this.type = d;
    this.target = [SWFAddress][0];
    this.value = SWFAddress.getValue();
    this.path = SWFAddress.getPath();
    this.pathNames = SWFAddress.getPathNames();
    this.parameters = {};
    var c = SWFAddress.getParameterNames();
    for (var b = 0, a = c.length; b < a; b++) {
        this.parameters[c[b]] = SWFAddress.getParameter(c[b])
    }
    this.parameterNames = c
};
SWFAddressEvent.INIT = "init";
SWFAddressEvent.CHANGE = "change";
SWFAddressEvent.INTERNAL_CHANGE = "internalChange";
SWFAddressEvent.EXTERNAL_CHANGE = "externalChange";
var SWFAddress = new function() {
    var _getHash = function() {
        var index = _l.href.indexOf("#");
        return index != -1 ? _ec(_dc(_l.href.substr(index + 1))) : ""
    };
    var _getWindow = function() {
        try {
            top.document;
            return top
        } catch (e) {
            return window
        }
    };
    var _strictCheck = function(value, force) {
        if (_opts.strict) {
            value = force ? (value.substr(0, 1) != "/" ? "/" + value : value) : (value == "" ? "/" : value)
        }
        return value
    };
    var _ieLocal = function(value, direction) {
        return (_msie && _l.protocol == "file:") ? (direction ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?")) : value
    };
    var _searchScript = function(el) {
        if (el.childNodes) {
            for (var i = 0, l = el.childNodes.length, s; i < l; i++) {
                if (el.childNodes[i].src) {
                    _url = String(el.childNodes[i].src)
                }
                if (s = _searchScript(el.childNodes[i])) {
                    return s
                }
            }
        }
    };
    var _titleCheck = function() {
        if (_d.title != _title && _d.title.indexOf("#") != -1) {
            _d.title = _title
        }
    };
    var _listen = function() {
        if (!_silent) {
            var hash = _getHash();
            var diff = !(_value == hash);
            if (_safari && _version < 523) {
                if (_length != _h.length) {
                    _length = _h.length;
                    if (typeof _stack[_length - 1] != UNDEFINED) {
                        _value = _stack[_length - 1]
                    }
                    _update.call(this, false)
                }
            } else {
                if (_msie && diff) {
                    if (_version < 7) {
                        _l.reload()
                    } else {
                        this.setValue(hash)
                    }
                } else {
                    if (diff) {
                        _value = hash;
                        _update.call(this, false)
                    }
                }
            }
            if (_msie) {
                _titleCheck.call(this)
            }
        }
    };
    var _bodyClick = function(e) {
        if (_popup.length > 0) {
            var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
            if (typeof _popup[3] != UNDEFINED) {
                eval(_popup[3])
            }
        }
        _popup = []
    };
    var _swfChange = function() {
        for (var i = 0, id, obj, value = SWFAddress.getValue(), setter = "setSWFAddressValue"; id = _ids[i]; i++) {
            obj = document.getElementById(id);
            if (obj) {
                if (obj.parentNode && typeof obj.parentNode.so != UNDEFINED) {
                    obj.parentNode.so.call(setter, value)
                } else {
                    if (!(obj && typeof obj[setter] != UNDEFINED)) {
                        var objects = obj.getElementsByTagName("object");
                        var embeds = obj.getElementsByTagName("embed");
                        obj = ((objects[0] && typeof objects[0][setter] != UNDEFINED) ? objects[0] : ((embeds[0] && typeof embeds[0][setter] != UNDEFINED) ? embeds[0] : null))
                    }
                    if (obj) {
                        obj[setter](value)
                    }
                }
            } else {
                if (obj = document[id]) {
                    if (typeof obj[setter] != UNDEFINED) {
                        obj[setter](value)
                    }
                }
            }
        }
    };
    var _jsDispatch = function(type) {
        this.dispatchEvent(new SWFAddressEvent(type));
        type = type.substr(0, 1).toUpperCase() + type.substr(1);
        if (typeof this["on" + type] == FUNCTION) {
            this["on" + type]()
        }
    };
    var _jsInit = function() {
        if (_util.Browser.isSafari()) {
            _d.body.addEventListener("click", _bodyClick)
        }
        _jsDispatch.call(this, "init")
    };
    var _jsChange = function() {
        _swfChange();
        _jsDispatch.call(this, "change")
    };
    var _update = function(internal) {
        _jsChange.call(this);
        if (internal) {
            _jsDispatch.call(this, "internalChange")
        } else {
            _jsDispatch.call(this, "externalChange")
        }
        _st(_functions.bind(_track, this), 10)
    };
    var _track = function() {
        var value = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, "");
        var fn = _t[_opts.tracker];
        if (typeof fn == FUNCTION) {
            fn(value)
        } else {
            if (typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION) {
                _t.pageTracker._trackPageview(value)
            } else {
                if (typeof _t.urchinTracker == FUNCTION) {
                    _t.urchinTracker(value)
                }
            }
        }
    };
    var _htmlWrite = function() {
        var doc = _frame.contentWindow.document;
        doc.open();
        doc.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";<\/script></head></html>');
        doc.close()
    };
    var _htmlLoad = function() {
        var win = _frame.contentWindow;
        var src = win.location.href;
        _value = (typeof win[ID] != UNDEFINED ? win[ID] : "");
        if (_value != _getHash()) {
            _update.call(SWFAddress, false);
            _l.hash = _ieLocal(_value, TRUE)
        }
    };
    var _load = function() {
        if (!_loaded) {
            _loaded = TRUE;
            if (_msie && _version < 8) {
                var frameset = _d.getElementsByTagName("frameset")[0];
                _frame = _d.createElement((frameset ? "" : "i") + "frame");
                if (frameset) {
                    frameset.insertAdjacentElement("beforeEnd", _frame);
                    frameset[frameset.cols ? "cols" : "rows"] += ",0";
                    _frame.src = "javascript:false";
                    _frame.noResize = true;
                    _frame.frameBorder = _frame.frameSpacing = 0
                } else {
                    _frame.src = "javascript:false";
                    _frame.style.display = "none";
                    _d.body.insertAdjacentElement("afterBegin", _frame)
                }
                _st(function() {
                    _events.addListener(_frame, "load", _htmlLoad);
                    if (typeof _frame.contentWindow[ID] == UNDEFINED) {
                        _htmlWrite()
                    }
                }, 50)
            } else {
                if (_safari) {
                    if (_version < 418) {
                        _d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>';
                        _form = _d.getElementById(ID)
                    }
                    if (typeof _l[ID] == UNDEFINED) {
                        _l[ID] = {}
                    }
                    if (typeof _l[ID][_l.pathname] != UNDEFINED) {
                        _stack = _l[ID][_l.pathname].split(",")
                    }
                }
            }
            _st(_functions.bind(function() {
                _jsInit.call(this);
                _jsChange.call(this);
                _track.call(this)
            }, this), 1);
            if (_msie && _version >= 8) {
                _d.body.onhashchange = _functions.bind(_listen, this);
                _si(_functions.bind(_titleCheck, this), 50)
            } else {
                _si(_functions.bind(_listen, this), 50)
            }
        }
    };
    var ID = "swfaddress",
        FUNCTION = "function",
        UNDEFINED = "undefined",
        TRUE = true,
        FALSE = false,
        _util = asual.util,
        _browser = _util.Browser,
        _events = _util.Events,
        _functions = _util.Functions,
        _version = _browser.getVersion(),
        _msie = _browser.isMSIE(),
        _mozilla = _browser.isMozilla(),
        _opera = _browser.isOpera(),
        _safari = _browser.isSafari(),
        _supported = FALSE,
        _t = _getWindow(),
        _d = _t.document,
        _h = _t.history,
        _l = _t.location,
        _si = setInterval,
        _st = setTimeout,
        _dc = decodeURI,
        _ec = encodeURI,
        _frame, _form, _url, _title = _d.title,
        _length = _h.length,
        _silent = FALSE,
        _loaded = FALSE,
        _justset = TRUE,
        _juststart = TRUE,
        _ref = this,
        _stack = [],
        _ids = [],
        _popup = [],
        _listeners = {},
        _value = _getHash(),
        _opts = {
            history: TRUE,
            strict: TRUE
        };
    if (_msie && _d.documentMode && _d.documentMode != _version) {
        _version = _d.documentMode != 8 ? 7 : 8
    }
    _supported = (_mozilla && _version >= 1) || (_msie && _version >= 6) || (_opera && _version >= 9.5) || (_safari && _version >= 312);
    if (_supported) {
        if (_opera) {
            history.navigationMode = "compatible"
        }
        for (var i = 1; i < _length; i++) {
            _stack.push("")
        }
        _stack.push(_getHash());
        if (_msie && _l.hash != _getHash()) {
            _l.hash = "#" + _ieLocal(_getHash(), TRUE)
        }
        _searchScript(document);
        var _qi = _url ? _url.indexOf("?") : -1;
        if (_qi != -1) {
            var param, params = _url.substr(_qi + 1).split("&");
            for (var i = 0, p; p = params[i]; i++) {
                param = p.split("=");
                if (/^(history|strict)$/.test(param[0])) {
                    _opts[param[0]] = (isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : (parseInt(param[1]) != 0))
                }
                if (/^tracker$/.test(param[0])) {
                    _opts[param[0]] = param[1]
                }
            }
        }
        if (_msie) {
            _titleCheck.call(this)
        }
        if (window == _t) {
            _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this))
        }
        _events.addListener(_t, "load", _functions.bind(_load, this))
    } else {
        if ((!_supported && _l.href.indexOf("#") != -1) || (_safari && _version < 418 && _l.href.indexOf("#") != -1 && _l.search != "")) {
            _d.open();
            _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>');
            _d.close()
        } else {
            _track()
        }
    }
    this.toString = function() {
        return "[class SWFAddress]"
    };
    this.back = function() {
        _h.back()
    };
    this.forward = function() {
        _h.forward()
    };
    this.up = function() {
        var path = this.getPath();
        this.setValue(path.substr(0, path.lastIndexOf("/", path.length - 2) + (path.substr(path.length - 1) == "/" ? 1 : 0)))
    };
    this.go = function(delta) {
        _h.go(delta)
    };
    this.href = function(url, target) {
        target = typeof target != UNDEFINED ? target : "_self";
        if (target == "_self") {
            self.location.href = url
        } else {
            if (target == "_top") {
                _l.href = url
            } else {
                if (target == "_blank") {
                    window.open(url)
                } else {
                    _t.frames[target].location.href = url
                }
            }
        }
    };
    this.popup = function(url, name, options, handler) {
        try {
            var popup = window.open(url, name, eval(options));
            if (typeof handler != UNDEFINED) {
                eval(handler)
            }
        } catch (ex) {}
        _popup = arguments
    };
    this.getIds = function() {
        return _ids
    };
    this.getId = function(index) {
        return _ids[0]
    };
    this.setId = function(id) {
        _ids[0] = id
    };
    this.addId = function(id) {
        this.removeId(id);
        _ids.push(id)
    };
    this.removeId = function(id) {
        for (var i = 0; i < _ids.length; i++) {
            if (id == _ids[i]) {
                _ids.splice(i, 1);
                break
            }
        }
    };
    this.addEventListener = function(type, listener) {
        if (typeof _listeners[type] == UNDEFINED) {
            _listeners[type] = []
        }
        _listeners[type].push(listener)
    };
    this.removeEventListener = function(type, listener) {
        if (typeof _listeners[type] != UNDEFINED) {
            for (var i = 0, l; l = _listeners[type][i]; i++) {
                if (l == listener) {
                    break
                }
            }
            _listeners[type].splice(i, 1)
        }
    };
    this.dispatchEvent = function(event) {
        if (this.hasEventListener(event.type)) {
            event.target = this;
            for (var i = 0, l; l = _listeners[event.type][i]; i++) {
                l(event)
            }
            return TRUE
        }
        return FALSE
    };
    this.hasEventListener = function(type) {
        return (typeof _listeners[type] != UNDEFINED && _listeners[type].length > 0)
    };
    this.getBaseURL = function() {
        var url = _l.href;
        if (url.indexOf("#") != -1) {
            url = url.substr(0, url.indexOf("#"))
        }
        if (url.substr(url.length - 1) == "/") {
            url = url.substr(0, url.length - 1)
        }
        return url
    };
    this.getStrict = function() {
        return _opts.strict
    };
    this.setStrict = function(strict) {
        _opts.strict = strict
    };
    this.getHistory = function() {
        return _opts.history
    };
    this.setHistory = function(history) {
        _opts.history = history
    };
    this.getTracker = function() {
        return _opts.tracker
    };
    this.setTracker = function(tracker) {
        _opts.tracker = tracker
    };
    this.getTitle = function() {
        return _d.title
    };
    this.setTitle = function(title) {
        if (!_supported) {
            return null
        }
        if (typeof title == UNDEFINED) {
            return
        }
        if (title == "null") {
            title = ""
        }
        title = _dc(title);
        _st(function() {
            _title = _d.title = title;
            if (_juststart && _frame && _frame.contentWindow && _frame.contentWindow.document) {
                _frame.contentWindow.document.title = title;
                _juststart = FALSE
            }
            if (!_justset && _mozilla) {
                _l.replace(_l.href.indexOf("#") != -1 ? _l.href : _l.href + "#")
            }
            _justset = FALSE
        }, 10)
    };
    this.getStatus = function() {
        return _t.status
    };
    this.setStatus = function(status) {
        if (!_supported) {
            return null
        }
        if (typeof status == UNDEFINED) {
            return
        }
        if (status == "null") {
            status = ""
        }
        status = _dc(status);
        if (!_safari) {
            status = _strictCheck((status != "null") ? status : "", TRUE);
            if (status == "/") {
                status = ""
            }
            if (!(/http(s)?:\/\//.test(status))) {
                var index = _l.href.indexOf("#");
                status = (index == -1 ? _l.href : _l.href.substr(0, index)) + "#" + status
            }
            _t.status = status
        }
    };
    this.resetStatus = function() {
        _t.status = ""
    };
    this.getValue = function() {
        if (!_supported) {
            return null
        }
        return _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE))
    };
    this.setValue = function(value) {
        if (!_supported) {
            return null
        }
        if (typeof value == UNDEFINED) {
            return
        }
        if (value == "null") {
            value = ""
        }
        value = _ec(_dc(_strictCheck(value, TRUE)));
        if (value == "/") {
            value = ""
        }
        if (_value == value) {
            return
        }
        _justset = TRUE;
        _value = value;
        _silent = TRUE;
        _update.call(SWFAddress, true);
        _stack[_h.length] = _value;
        // if (_safari) {
        //     if (_opts.history) {
        //         _l[ID][_l.pathname] = _stack.toString();
        //         _length = _h.length + 1;
        //         if (_version < 418) {
        //             if (_l.search == "") {
        //                 _form.action = "#" + _value;
        //                 _form.submit()
        //             }
        //         } else {
        //             if (_version < 523 || _value == "") {
        //                 var evt = _d.createEvent("MouseEvents");
        //                 evt.initEvent("click", TRUE, TRUE);
        //                 var anchor = _d.createElement("a");
        //                 anchor.href = "#" + _value;
        //                 anchor.dispatchEvent(evt)
        //             } else {
        //                 _l.hash = "#" + _value
        //             }
        //         }
        //     } else {
        //         _l.replace("#" + _value)
        //     }
        // } else {
        //     if (_value != _getHash()) {
        //         if (_opts.history) {
        //             _l.hash = "#" + _dc(_ieLocal(_value, TRUE))
        //         } else {
        //             _l.replace("#" + _dc(_value))
        //         }
        //     }
        // }
        // if ((_msie && _version < 8) && _opts.history) {
        //     _st(_htmlWrite, 50)
        // }
        // if (_safari) {
        //     _st(function() {
        //         _silent = FALSE
        //     }, 1)
        // } else {
        //     _silent = FALSE
        // }
    };
    this.getPath = function() {
        var value = this.getValue();
        if (value.indexOf("?") != -1) {
            return value.split("?")[0]
        } else {
            if (value.indexOf("#") != -1) {
                return value.split("#")[0]
            } else {
                return value
            }
        }
    };
    this.getPathNames = function() {
        var path = this.getPath(),
            names = path.split("/");
        if (path.substr(0, 1) == "/" || path.length == 0) {
            names.splice(0, 1)
        }
        if (path.substr(path.length - 1, 1) == "/") {
            names.splice(names.length - 1, 1)
        }
        return names
    };
    this.getQueryString = function() {
        var value = this.getValue(),
            index = value.indexOf("?");
        if (index != -1 && index < value.length) {
            return value.substr(index + 1)
        }
    };
    this.getParameter = function(param) {
        var value = this.getValue();
        var index = value.indexOf("?");
        if (index != -1) {
            value = value.substr(index + 1);
            var p, params = value.split("&"),
                i = params.length,
                r = [];
            while (i--) {
                p = params[i].split("=");
                if (p[0] == param) {
                    r.push(p[1])
                }
            }
            if (r.length != 0) {
                return r.length != 1 ? r : r[0]
            }
        }
    };
    this.getParameterNames = function() {
        var value = this.getValue();
        var index = value.indexOf("?");
        var names = [];
        if (index != -1) {
            value = value.substr(index + 1);
            if (value != "" && value.indexOf("=") != -1) {
                var params = value.split("&"),
                    i = 0;
                while (i < params.length) {
                    names.push(params[i].split("=")[0]);
                    i++
                }
            }
        }
        return names
    };
    this.onInit = null;
    this.onChange = null;
    this.onInternalChange = null;
    this.onExternalChange = null;
    (function() {
        var _args;
        if (typeof FlashObject != UNDEFINED) {
            SWFObject = FlashObject
        }
        if (typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
            var _s1 = SWFObject.prototype.write;
            SWFObject.prototype.write = function() {
                _args = arguments;
                if (this.getAttribute("version").major < 8) {
                    this.addVariable("$swfaddress", SWFAddress.getValue());
                    ((typeof _args[0] == "string") ? document.getElementById(_args[0]) : _args[0]).so = this
                }
                var success;
                if (success = _s1.apply(this, _args)) {
                    _ref.addId(this.getAttribute("id"))
                }
                return success
            }
        }
        if (typeof swfobject != UNDEFINED) {
            var _s2r = swfobject.registerObject;
            swfobject.registerObject = function() {
                _args = arguments;
                _s2r.apply(this, _args);
                _ref.addId(_args[0])
            };
            var _s2c = swfobject.createSWF;
            swfobject.createSWF = function() {
                _args = arguments;
                var swf = _s2c.apply(this, _args);
                if (swf) {
                    _ref.addId(_args[0].id)
                }
                return swf
            };
            var _s2e = swfobject.embedSWF;
            swfobject.embedSWF = function() {
                _args = arguments;
                if (typeof _args[8] == UNDEFINED) {
                    _args[8] = {}
                }
                if (typeof _args[8].id == UNDEFINED) {
                    _args[8].id = _args[1]
                }
                _s2e.apply(this, _args);
                _ref.addId(_args[8].id)
            }
        }
        if (typeof UFO != UNDEFINED) {
            var _u = UFO.create;
            UFO.create = function() {
                _args = arguments;
                _u.apply(this, _args);
                _ref.addId(_args[0].id)
            }
        }
        if (typeof AC_FL_RunContent != UNDEFINED) {
            var _a = AC_FL_RunContent;
            AC_FL_RunContent = function() {
                _args = arguments;
                _a.apply(this, _args);
                for (var i = 0, l = _args.length; i < l; i++) {
                    if (_args[i] == "id") {
                        _ref.addId(_args[i + 1])
                    }
                }
            }
        }
    })()
};