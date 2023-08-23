// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function(wnd) {
    var n, aa = this;

    function q(a) {
        return void 0 !== a
    }

    function ba() {}

    function ca(a) {
        a.f = function() {
            return a.yb ? a.yb : a.yb = new a
        }
    }

    function da(a) {
        var d = typeof a;
        if ("object" == d)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return d;
                var e = Object.prototype.toString.call(a);
                if ("[object Window]" == e) return "object";
                if ("[object Array]" == e || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == e || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == d && "undefined" == typeof a.call) return "object";
        return d
    }

    function ea(a) {
        return null != a
    }

    function fa(a) {
        return "array" == da(a)
    }

    function ga(a) {
        var d = da(a);
        return "array" == d || "object" == d && "number" == typeof a.length
    }

    function ha(a) {
        return "string" == typeof a
    }

    function ia(a) {
        return "number" == typeof a
    }

    function ja(a) {
        return "function" == da(a)
    }

    function ka(a) {
        var d = typeof a;
        return "object" == d && null != a || "function" == d
    }

    function la(a) {
        return a[ma] || (a[ma] = ++na)
    }
    var ma = "closure_uid_" + (1E9 * Math.random() >>> 0),
        na = 0;

    function pa(a, d, e) {
        return a.call.apply(a.bind, arguments)
    }

    function qa(a, d, e) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var f = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, f);
                return a.apply(d, e)
            }
        }
        return function() {
            return a.apply(d, arguments)
        }
    }

    function t(a, d, e) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
        return t.apply(null, arguments)
    }
    var ra = Date.now || function() {
        return +new Date
    };

    function u(a, d) {
        var e = a.split("."),
            f = aa;
        e[0] in f || !f.execScript || f.execScript("var " + e[0]);
        for (var k; e.length && (k = e.shift());) !e.length && q(d) ? f[k] = d : f[k] ? f = f[k] : f = f[k] = {}
    }

    function v(a, d) {
        function e() {}
        e.prototype = d.prototype;
        a.i = d.prototype;
        a.prototype = new e;
        a.prototype.constructor = a;
        a.Jc = function(a, e, l) {
            for (var p = Array(arguments.length - 2), r = 2; r < arguments.length; r++) p[r - 2] = arguments[r];
            return d.prototype[e].apply(a, p)
        }
    };

    function sa() {
        0 != ta && (ua[la(this)] = this);
        this.Da = this.Da;
        this.Ha = this.Ha
    }
    var ta = 0,
        ua = {};
    sa.prototype.Da = !1;
    sa.prototype.dispose = function() {
        if (!this.Da && (this.Da = !0, this.B(), 0 != ta)) {
            var a = la(this);
            delete ua[a]
        }
    };
    sa.prototype.B = function() {
        if (this.Ha)
            for (; this.Ha.length;) this.Ha.shift()()
    };
    var va;

    function wa(a, d) {
        this.type = a;
        this.a = this.target = d;
        this.g = !1;
        this.Hb = !0
    }
    wa.prototype.stopPropagation = function() {
        this.g = !0
    };
    wa.prototype.preventDefault = function() {
        this.Hb = !1
    };
    var xa = "closure_listenable_" + (1E6 * Math.random() | 0);

    function ya(a) {
        return !(!a || !a[xa])
    }
    var za = 0;

    function Aa(a, d, e, f, k) {
        this.listener = a;
        this.a = null;
        this.src = d;
        this.type = e;
        this.La = !!f;
        this.Pa = k;
        this.key = ++za;
        this.na = this.Ka = !1
    }

    function Ba(a) {
        a.na = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.Pa = null
    };

    function Ca(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (d) {}
        throw Error("Invalid JSON string: " + a);
    };

    function Da(a, d) {
        this.width = a;
        this.height = d
    }
    n = Da.prototype;
    n.clone = function() {
        return new Da(this.width, this.height)
    };
    n.Lb = function() {
        return this.width * this.height
    };
    n.isEmpty = function() {
        return !this.Lb()
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ea(a) {
        this.a = a
    }
    var Fa = /\s*;\s*/;

    function Ga(a, d, e, f, k, l) {
        if (/[;=\s]/.test(d)) throw Error('Invalid cookie name "' + d + '"');
        if (/[;\r\n]/.test(e)) throw Error('Invalid cookie value "' + e + '"');
        q(f) || (f = -1);
        l = l ? ";domain=" + l : "";
        k = k ? ";path=" + k : "";
        f = 0 > f ? "" : 0 == f ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ra() + 1E3 * f)).toUTCString();
        a.a.cookie = d + "=" + e + l + k + f + ""
    }
    n = Ea.prototype;
    n.get = function(a, d) {
        for (var e = a + "=", f = (this.a.cookie || "").split(Fa), k = 0, l; l = f[k]; k++) {
            if (0 == l.lastIndexOf(e, 0)) return l.substr(e.length);
            if (l == a) return ""
        }
        return d
    };
    n.ea = function() {
        return Ha(this).keys
    };
    n.V = function() {
        return Ha(this).values
    };
    n.isEmpty = function() {
        return !this.a.cookie
    };
    n.eb = function() {
        return this.a.cookie ? (this.a.cookie || "").split(Fa).length : 0
    };
    n.clear = function() {
        for (var a = Ha(this).keys, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            this.get(e);
            Ga(this, e, "", 0, void 0, void 0)
        }
    };

    function Ha(a) {
        a = (a.a.cookie || "").split(Fa);
        for (var d = [], e = [], f, k, l = 0; k = a[l]; l++) f = k.indexOf("="), -1 == f ? (d.push(""), e.push(k)) : (d.push(k.substring(0, f)), e.push(k.substring(f + 1)));
        return {
            keys: d,
            values: e
        }
    }
    var Ia = new Ea(document);
    Ia.b = 3950;

    function Ja(a) {
        switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
        }
    };

    function w(a, d, e) {
        for (var f in a) d.call(e, a[f], f, a)
    }

    function Ka(a, d, e) {
        var f = {},
            k;
        for (k in a) d.call(e, a[k], k, a) && (f[k] = a[k]);
        return f
    }

    function Ma(a) {
        var d = [],
            e = 0,
            f;
        for (f in a) d[e++] = a[f];
        return d
    }

    function Na(a) {
        var d = [],
            e = 0,
            f;
        for (f in a) d[e++] = f;
        return d
    }

    function Oa(a, d, e) {
        for (var f in a)
            if (d.call(e, a[f], f, a)) return f
    }

    function Pa(a) {
        for (var d in a) return !1;
        return !0
    }

    function Qa(a, d, e) {
        if (null !== a && d in a) throw Error('The object already contains the key "' + d + '"');
        a[d] = e
    }

    function Ra(a) {
        var d = da(a);
        if ("object" == d || "array" == d) {
            if (ja(a.clone)) return a.clone();
            var d = "array" == d ? [] : {},
                e;
            for (e in a) d[e] = Ra(a[e]);
            return d
        }
        return a
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ta(a, d) {
        for (var e, f, k = 1; k < arguments.length; k++) {
            f = arguments[k];
            for (e in f) a[e] = f[e];
            for (var l = 0; l < Sa.length; l++) e = Sa[l], Object.prototype.hasOwnProperty.call(f, e) && (a[e] = f[e])
        }
    };

    function Ua(a) {
        Ua[" "](a);
        return a
    }
    Ua[" "] = ba;
    var Va = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Wa(a) {
        if (!Xa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ab, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(bb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(cb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;"));
        return a
    }
    var Ya = /&/g,
        Za = /</g,
        ab = />/g,
        bb = /"/g,
        cb = /'/g,
        db = /\x00/g,
        Xa = /[\x00&<>"']/;

    function eb(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }

    function fb(a, d) {
        return a < d ? -1 : a > d ? 1 : 0
    }

    function gb(a) {
        return String(a).replace(/\-([a-z])/g, function(a, e) {
            return e.toUpperCase()
        })
    }

    function ib(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function jb(a) {
        var d = ha(void 0) ? eb(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, d, k) {
            return d + k.toUpperCase()
        })
    };
    var kb = Array.prototype.indexOf ? function(a, d, e) {
            return Array.prototype.indexOf.call(a, d, e)
        } : function(a, d, e) {
            e = null == e ? 0 : 0 > e ? Math.max(0, a.length + e) : e;
            if (ha(a)) return ha(d) && 1 == d.length ? a.indexOf(d, e) : -1;
            for (; e < a.length; e++)
                if (e in a && a[e] === d) return e;
            return -1
        },
        y = Array.prototype.forEach ? function(a, d, e) {
            Array.prototype.forEach.call(a, d, e)
        } : function(a, d, e) {
            for (var f = a.length, k = ha(a) ? a.split("") : a, l = 0; l < f; l++) l in k && d.call(e, k[l], l, a)
        },
        lb = Array.prototype.filter ? function(a, d, e) {
            return Array.prototype.filter.call(a,
                d, e)
        } : function(a, d, e) {
            for (var f = a.length, k = [], l = 0, p = ha(a) ? a.split("") : a, r = 0; r < f; r++)
                if (r in p) {
                    var x = p[r];
                    d.call(e, x, r, a) && (k[l++] = x)
                }
            return k
        },
        mb = Array.prototype.reduce ? function(a, d, e, f) {
            f && (d = t(d, f));
            return Array.prototype.reduce.call(a, d, e)
        } : function(a, d, e, f) {
            var k = e;
            y(a, function(e, p) {
                k = d.call(f, k, e, p, a)
            });
            return k
        },
        nb = Array.prototype.some ? function(a, d, e) {
            return Array.prototype.some.call(a, d, e)
        } : function(a, d, e) {
            for (var f = a.length, k = ha(a) ? a.split("") : a, l = 0; l < f; l++)
                if (l in k && d.call(e, k[l], l, a)) return !0;
            return !1
        };

    function ob(a, d, e) {
        var f = 0;
        y(a, function(a, l, p) {
            d.call(e, a, l, p) && ++f
        }, e);
        return f
    }

    function pb(a, d) {
        return 0 <= kb(a, d)
    }

    function qb(a) {
        return 0 == a.length
    }

    function rb(a, d) {
        pb(a, d) || a.push(d)
    }

    function sb(a, d) {
        var e = kb(a, d),
            f;
        (f = 0 <= e) && Array.prototype.splice.call(a, e, 1);
        return f
    }

    function tb(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function ub(a) {
        var d = a.length;
        if (0 < d) {
            for (var e = Array(d), f = 0; f < d; f++) e[f] = a[f];
            return e
        }
        return []
    }

    function vb(a, d, e, f) {
        Array.prototype.splice.apply(a, wb(arguments, 1))
    }

    function wb(a, d, e) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, d) : Array.prototype.slice.call(a, d, e)
    }

    function xb(a) {
        for (var d = {}, e = 0, f = 0; f < a.length;) {
            var k = a[f++],
                l;
            l = k;
            l = ka(l) ? "o" + la(l) : (typeof l).charAt(0) + l;
            Object.prototype.hasOwnProperty.call(d, l) || (d[l] = !0, a[e++] = k)
        }
        a.length = e
    };

    function yb(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return ha(a) && a.match(/\S+/g) || []
    }

    function zb(a, d) {
        return a.classList ? a.classList.contains(d) : pb(yb(a), d)
    }

    function Ab(a, d) {
        a.classList ? a.classList.add(d) : zb(a, d) || (a.className += 0 < a.className.length ? " " + d : d)
    }

    function Db(a, d) {
        a.classList ? a.classList.remove(d) : zb(a, d) && (a.className = lb(yb(a), function(a) {
            return a != d
        }).join(" "))
    }

    function Eb(a, d, e) {
        e ? Ab(a, d) : Db(a, d)
    };

    function Fb(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }

    function Gb(a, d, e, f, k, l) {
        var p = d.toString();
        d = a.a[p];
        d || (d = a.a[p] = [], a.b++);
        var r = Hb(d, e, k, l); - 1 < r ? (a = d[r], f || (a.Ka = !1)) : (a = new Aa(e, a.src, p, !!k, l), a.Ka = f, d.push(a));
        return a
    }

    function Ib(a, d) {
        var e = d.type;
        e in a.a && sb(a.a[e], d) && (Ba(d), 0 == a.a[e].length && (delete a.a[e], a.b--))
    }
    Fb.prototype.removeAll = function(a) {
        a = a && a.toString();
        var d = 0,
            e;
        for (e in this.a)
            if (!a || e == a) {
                for (var f = this.a[e], k = 0; k < f.length; k++) ++d, Ba(f[k]);
                delete this.a[e];
                this.b--
            }
        return d
    };

    function Jb(a, d, e, f, k) {
        a = a.a[d.toString()];
        d = -1;
        a && (d = Hb(a, e, f, k));
        return -1 < d ? a[d] : null
    }

    function Hb(a, d, e, f) {
        for (var k = 0; k < a.length; ++k) {
            var l = a[k];
            if (!l.na && l.listener == d && l.La == !!e && l.Pa == f) return k
        }
        return -1
    };
    var Kb;
    a: {
        var Lb = aa.navigator;
        if (Lb) {
            var Mb = Lb.userAgent;
            if (Mb) {
                Kb = Mb;
                break a
            }
        }
        Kb = ""
    }

    function z(a) {
        return -1 != Kb.indexOf(a)
    };

    function Nb() {
        return z("Opera") || z("OPR")
    }

    function Ob() {
        return (z("Chrome") || z("CriOS")) && !Nb() && !z("Edge")
    };

    function Pb() {
        return z("iPhone") && !z("iPod") && !z("iPad")
    };

    function Qb(a, d) {
        this.x = q(a) ? a : 0;
        this.y = q(d) ? d : 0
    }
    Qb.prototype.clone = function() {
        return new Qb(this.x, this.y)
    };
    Qb.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Qb.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Qb.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Rb(a, d, e, f) {
        this.top = a;
        this.right = d;
        this.bottom = e;
        this.left = f
    }
    n = Rb.prototype;
    n.getHeight = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new Rb(this.top, this.right, this.bottom, this.left)
    };
    n.contains = function(a) {
        return this && a ? a instanceof Rb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Sb(a, d, e, f) {
        this.left = a;
        this.top = d;
        this.width = e;
        this.height = f
    }
    n = Sb.prototype;
    n.clone = function() {
        return new Sb(this.left, this.top, this.width, this.height)
    };

    function Tb(a, d) {
        var e = Math.max(a.left, d.left),
            f = Math.min(a.left + a.width, d.left + d.width);
        if (e <= f) {
            var k = Math.max(a.top, d.top),
                l = Math.min(a.top + a.height, d.top + d.height);
            if (k <= l) return new Sb(e, k, f - e, l - k)
        }
        return null
    }
    n.difference = function(a) {
        var d = Tb(this, a);
        if (d && d.height && d.width) {
            var d = [],
                e = this.top,
                f = this.height,
                k = this.left + this.width,
                l = this.top + this.height,
                p = a.left + a.width,
                r = a.top + a.height;
            a.top > this.top && (d.push(new Sb(this.left, this.top, this.width, a.top - this.top)), e = a.top, f -= a.top - this.top);
            r < l && (d.push(new Sb(this.left, r, this.width, l - r)), f = r - e);
            a.left > this.left && d.push(new Sb(this.left, e, a.left - this.left, f));
            p < k && d.push(new Sb(p, e, k - p, f));
            a = d
        } else a = [this.clone()];
        return a
    };
    n.contains = function(a) {
        return a instanceof Sb ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    n.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ub() {
        this.b = "";
        this.c = Vb;
        this.a = null
    }
    var Vb = {};

    function Wb(a) {
        var d = new Ub;
        d.b = a;
        d.a = 0
    }
    Wb("<!DOCTYPE html>");
    Wb("");
    Wb("<br>");
    var Xb = {};

    function Yb() {
        throw Error("Do not instantiate directly");
    }
    Yb.prototype.ab = null;
    Yb.prototype.getContent = function() {
        return this.content
    };
    Yb.prototype.toString = function() {
        return this.content
    };

    function Zb(a, d) {
        this.b = {};
        this.a = [];
        this.g = this.c = 0;
        var e = arguments.length;
        if (1 < e) {
            if (e % 2) throw Error("Uneven number of arguments");
            for (var f = 0; f < e; f += 2) $b(this, arguments[f], arguments[f + 1])
        } else if (a) {
            a instanceof Zb ? (e = a.ea(), f = a.V()) : (e = Na(a), f = Ma(a));
            for (var k = 0; k < e.length; k++) $b(this, e[k], f[k])
        }
    }
    n = Zb.prototype;
    n.eb = function() {
        return this.c
    };
    n.V = function() {
        ac(this);
        for (var a = [], d = 0; d < this.a.length; d++) a.push(this.b[this.a[d]]);
        return a
    };
    n.ea = function() {
        ac(this);
        return this.a.concat()
    };
    n.equals = function(a, d) {
        if (this === a) return !0;
        if (this.c != a.eb()) return !1;
        var e = d || bc;
        ac(this);
        for (var f, k = 0; f = this.a[k]; k++)
            if (!e(this.get(f), a.get(f))) return !1;
        return !0
    };

    function bc(a, d) {
        return a === d
    }
    n.isEmpty = function() {
        return 0 == this.c
    };
    n.clear = function() {
        this.b = {};
        this.g = this.c = this.a.length = 0
    };

    function ac(a) {
        if (a.c != a.a.length) {
            for (var d = 0, e = 0; d < a.a.length;) {
                var f = a.a[d];
                cc(a.b, f) && (a.a[e++] = f);
                d++
            }
            a.a.length = e
        }
        if (a.c != a.a.length) {
            for (var k = {}, e = d = 0; d < a.a.length;) f = a.a[d], cc(k, f) || (a.a[e++] = f, k[f] = 1), d++;
            a.a.length = e
        }
    }
    n.get = function(a, d) {
        return cc(this.b, a) ? this.b[a] : d
    };

    function $b(a, d, e) {
        cc(a.b, d) || (a.c++, a.a.push(d), a.g++);
        a.b[d] = e
    }
    n.forEach = function(a, d) {
        for (var e = this.ea(), f = 0; f < e.length; f++) {
            var k = e[f],
                l = this.get(k);
            a.call(d, l, k, this)
        }
    };
    n.clone = function() {
        return new Zb(this)
    };

    function cc(a, d) {
        return Object.prototype.hasOwnProperty.call(a, d)
    };

    function dc(a) {
        if (a.V && "function" == typeof a.V) return a.V();
        if (ha(a)) return a.split("");
        if (ga(a)) {
            for (var d = [], e = a.length, f = 0; f < e; f++) d.push(a[f]);
            return d
        }
        return Ma(a)
    }

    function ec(a, d, e) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(d, e);
        else if (ga(a) || ha(a)) y(a, d, e);
        else {
            var f;
            if (a.ea && "function" == typeof a.ea) f = a.ea();
            else if (a.V && "function" == typeof a.V) f = void 0;
            else if (ga(a) || ha(a)) {
                f = [];
                for (var k = a.length, l = 0; l < k; l++) f.push(l)
            } else f = Na(a);
            for (var k = dc(a), l = k.length, p = 0; p < l; p++) d.call(e, k[p], f && f[p], a)
        }
    };
    var fc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function gc(a, d) {
        if (a)
            for (var e = a.split("&"), f = 0; f < e.length; f++) {
                var k = e[f].indexOf("="),
                    l = null,
                    p = null;
                0 <= k ? (l = e[f].substring(0, k), p = e[f].substring(k + 1)) : l = e[f];
                d(l, p ? decodeURIComponent(p.replace(/\+/g, " ")) : "")
            }
    };

    function hc(a, d) {
        this.c = this.O = this.b = "";
        this.l = null;
        this.h = this.a = "";
        this.g = !1;
        var e;
        a instanceof hc ? (this.g = q(d) ? d : a.g, ic(this, a.b), this.O = a.O, this.c = a.c, jc(this, a.l), kc(this, a.a), lc(this, a.m.clone()), this.h = a.h) : a && (e = String(a).match(fc)) ? (this.g = !!d, ic(this, e[1] || "", !0), this.O = mc(e[2] || ""), this.c = mc(e[3] || "", !0), jc(this, e[4]), kc(this, e[5] || "", !0), lc(this, e[6] || "", !0), this.h = mc(e[7] || "")) : (this.g = !!d, this.m = new nc(null, 0, this.g))
    }
    hc.prototype.toString = function() {
        var a = [],
            d = this.b;
        d && a.push(oc(d, pc, !0), ":");
        var e = this.c;
        if (e || "file" == d) a.push("//"), (d = this.O) && a.push(oc(d, pc, !0), "@"), a.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e = this.l, null != e && a.push(":", String(e));
        if (e = this.a) this.c && "/" != e.charAt(0) && a.push("/"), a.push(oc(e, "/" == e.charAt(0) ? qc : rc, !0));
        (e = this.m.toString()) && a.push("?", e);
        (e = this.h) && a.push("#", oc(e, sc));
        return a.join("")
    };
    hc.prototype.clone = function() {
        return new hc(this)
    };

    function ic(a, d, e) {
        a.b = e ? mc(d, !0) : d;
        a.b && (a.b = a.b.replace(/:$/, ""))
    }

    function jc(a, d) {
        if (d) {
            d = Number(d);
            if (isNaN(d) || 0 > d) throw Error("Bad port number " + d);
            a.l = d
        } else a.l = null
    }

    function tc(a) {
        return a.a
    }

    function kc(a, d, e) {
        a.a = e ? mc(d, !0) : d
    }

    function lc(a, d, e) {
        d instanceof nc ? (a.m = d, uc(a.m, a.g)) : (e || (d = oc(d, vc)), a.m = new nc(d, 0, a.g))
    }

    function mc(a, d) {
        return a ? d ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function oc(a, d, e) {
        return ha(a) ? (a = encodeURI(a).replace(d, wc), e && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function wc(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var pc = /[#\/\?@]/g,
        rc = /[\#\?:]/g,
        qc = /[\#\?]/g,
        vc = /[\#\?@]/g,
        sc = /#/g;

    function nc(a, d, e) {
        this.c = this.a = null;
        this.b = a || null;
        this.g = !!e
    }

    function xc(a) {
        a.a || (a.a = new Zb, a.c = 0, a.b && gc(a.b, function(d, e) {
            var f = decodeURIComponent(d.replace(/\+/g, " "));
            xc(a);
            a.b = null;
            var f = yc(a, f),
                k = a.a.get(f);
            k || $b(a.a, f, k = []);
            k.push(e);
            a.c = a.c + 1
        }))
    }
    n = nc.prototype;
    n.eb = function() {
        xc(this);
        return this.c
    };

    function zc(a, d) {
        xc(a);
        d = yc(a, d);
        if (cc(a.a.b, d)) {
            a.b = null;
            a.c = a.c - a.a.get(d).length;
            var e = a.a;
            cc(e.b, d) && (delete e.b[d], e.c--, e.g++, e.a.length > 2 * e.c && ac(e))
        }
    }
    n.clear = function() {
        this.a = this.b = null;
        this.c = 0
    };
    n.isEmpty = function() {
        xc(this);
        return 0 == this.c
    };
    n.ea = function() {
        xc(this);
        for (var a = this.a.V(), d = this.a.ea(), e = [], f = 0; f < d.length; f++)
            for (var k = a[f], l = 0; l < k.length; l++) e.push(d[f]);
        return e
    };
    n.V = function(a) {
        xc(this);
        var d = [];
        if (ha(a)) {
            var e = a;
            xc(this);
            e = yc(this, e);
            cc(this.a.b, e) && (d = tb(d, this.a.get(yc(this, a))))
        } else
            for (a = this.a.V(), e = 0; e < a.length; e++) d = tb(d, a[e]);
        return d
    };
    n.get = function(a, d) {
        var e = a ? this.V(a) : [];
        return 0 < e.length ? String(e[0]) : d
    };
    n.toString = function() {
        if (this.b) return this.b;
        if (!this.a) return "";
        for (var a = [], d = this.a.ea(), e = 0; e < d.length; e++)
            for (var f = d[e], k = encodeURIComponent(String(f)), f = this.V(f), l = 0; l < f.length; l++) {
                var p = k;
                "" !== f[l] && (p += "=" + encodeURIComponent(String(f[l])));
                a.push(p)
            }
        return this.b = a.join("&")
    };
    n.clone = function() {
        var a = new nc;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };

    function yc(a, d) {
        var e = String(d);
        a.g && (e = e.toLowerCase());
        return e
    }

    function uc(a, d) {
        d && !a.g && (xc(a), a.b = null, a.a.forEach(function(a, d) {
            var k = d.toLowerCase();
            d != k && (zc(this, d), zc(this, k), 0 < a.length && (this.b = null, $b(this.a, yc(this, k), ub(a)), this.c = this.c + a.length))
        }, a));
        a.g = d
    };
    var Ac = Nb(),
        A = z("Trident") || z("MSIE"),
        Bc = z("Edge"),
        Cc = z("Gecko") && !(-1 != Kb.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        Dc = -1 != Kb.toLowerCase().indexOf("webkit") && !z("Edge");
    Dc && z("Mobile");
    var Ec = z("Macintosh");
    z("Windows");
    z("Linux") || z("CrOS");
    var Fc = aa.navigator || null;
    Fc && (Fc.appVersion || "").indexOf("X11");
    z("Android");
    Pb();
    z("iPad");

    function Gc() {
        var a = aa.document;
        return a ? a.documentMode : void 0
    }
    var Hc;
    a: {
        var Ic = "",
            Jc = function() {
                var a = Kb;
                if (Cc) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Bc) return /Edge\/([\d\.]+)/.exec(a);
                if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Dc) return /WebKit\/(\S+)/.exec(a);
                if (Ac) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jc && (Ic = Jc ? Jc[1] : "");
        if (A) {
            var Kc = Gc();
            if (null != Kc && Kc > parseFloat(Ic)) {
                Hc = String(Kc);
                break a
            }
        }
        Hc = Ic
    }
    var Lc = {};

    function Mc(a) {
        var d;
        if (!(d = Lc[a])) {
            d = 0;
            for (var e = Va(String(Hc)).split("."), f = Va(String(a)).split("."), k = Math.max(e.length, f.length), l = 0; 0 == d && l < k; l++) {
                var p = e[l] || "",
                    r = f[l] || "",
                    x = RegExp("(\\d*)(\\D*)", "g"),
                    K = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var oa = x.exec(p) || ["", "", ""],
                        $a = K.exec(r) || ["", "", ""];
                    if (0 == oa[0].length && 0 == $a[0].length) break;
                    d = fb(0 == oa[1].length ? 0 : parseInt(oa[1], 10), 0 == $a[1].length ? 0 : parseInt($a[1], 10)) || fb(0 == oa[2].length, 0 == $a[2].length) || fb(oa[2], $a[2])
                } while (0 == d)
            }
            d = Lc[a] = 0 <= d
        }
        return d
    }
    var Nc = aa.document,
        Oc = Nc && A ? Gc() || ("CSS1Compat" == Nc.compatMode ? parseInt(Hc, 10) : 5) : void 0;
    var Pc = !A || 9 <= Number(Oc),
        Qc = !Cc && !A || A && 9 <= Number(Oc) || Cc && Mc("1.9.1");
    A && Mc("9");
    var Rc = A || Ac || Dc;

    function Sc(a) {
        var d = document;
        return ha(a) ? d.getElementById(a) : a
    }

    function Tc(a, d) {
        var e = d || document;
        return e.querySelectorAll && e.querySelector ? e.querySelectorAll("." + a) : Uc("*", a, d)
    }

    function B(a, d) {
        var e = d || document,
            f = null;
        e.getElementsByClassName ? f = e.getElementsByClassName(a)[0] : e.querySelectorAll && e.querySelector ? f = e.querySelector("." + a) : f = Uc("*", a, d)[0];
        return f || null
    }

    function Uc(a, d, e) {
        var f = document;
        e = e || f;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (e.querySelectorAll && e.querySelector && (a || d)) return e.querySelectorAll(a + (d ? "." + d : ""));
        if (d && e.getElementsByClassName) {
            e = e.getElementsByClassName(d);
            if (a) {
                for (var f = {}, k = 0, l = 0, p; p = e[l]; l++) a == p.nodeName && (f[k++] = p);
                f.length = k;
                return f
            }
            return e
        }
        e = e.getElementsByTagName(a || "*");
        if (d) {
            f = {};
            for (l = k = 0; p = e[l]; l++) a = p.className, "function" == typeof a.split && pb(a.split(/\s+/), d) && (f[k++] = p);
            f.length = k;
            return f
        }
        return e
    }

    function Vc(a, d) {
        w(d, function(d, f) {
            "style" == f ? a.style.cssText = d : "class" == f ? a.className = d : "for" == f ? a.htmlFor = d : Wc.hasOwnProperty(f) ? a.setAttribute(Wc[f], d) : 0 == f.lastIndexOf("aria-", 0) || 0 == f.lastIndexOf("data-", 0) ? a.setAttribute(f, d) : a[f] = d
        })
    }
    var Wc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Xc() {
        var a = window.document,
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Da(a.clientWidth, a.clientHeight)
    }

    function Yc(a) {
        return a.scrollingElement ? a.scrollingElement : Dc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Zc(a, d, e) {
        var f = arguments,
            k = document,
            l = f[0],
            p = f[1];
        if (!Pc && p && (p.name || p.type)) {
            l = ["<", l];
            p.name && l.push(' name="', Wa(p.name), '"');
            if (p.type) {
                l.push(' type="', Wa(p.type), '"');
                var r = {};
                Ta(r, p);
                delete r.type;
                p = r
            }
            l.push(">");
            l = l.join("")
        }
        l = k.createElement(l);
        p && (ha(p) ? l.className = p : fa(p) ? l.className = p.join(" ") : Vc(l, p));
        2 < f.length && $c(k, l, f, 2);
        return l
    }

    function $c(a, d, e, f) {
        function k(e) {
            e && d.appendChild(ha(e) ? a.createTextNode(e) : e)
        }
        for (; f < e.length; f++) {
            var l = e[f];
            !ga(l) || ka(l) && 0 < l.nodeType ? k(l) : y(ad(l) ? ub(l) : l, k)
        }
    }

    function bd(a, d) {
        $c(cd(a), a, arguments, 1)
    }

    function ed(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function fd(a, d) {
        var e = d.parentNode;
        e && e.replaceChild(a, d)
    }

    function gd(a) {
        return Qc && void 0 != a.children ? a.children : lb(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }

    function hd(a) {
        for (; a && 1 != a.nodeType;) a = a.nextSibling;
        return a
    }

    function id(a) {
        var d;
        if (Rc && !(A && Mc("9") && !Mc("10") && aa.SVGElement && a instanceof aa.SVGElement) && (d = a.parentElement)) return d;
        d = a.parentNode;
        return ka(d) && 1 == d.nodeType ? d : null
    }

    function cd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function ad(a) {
        if (a && "number" == typeof a.length) {
            if (ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ja(a)) return "function" == typeof a.item
        }
        return !1
    }

    function jd(a) {
        return kd(a, function(a) {
            return ha(a.className) && pb(a.className.split(/\s+/), "logo-content")
        })
    }

    function kd(a, d) {
        for (var e = 0; a;) {
            if (d(a)) return a;
            a = a.parentNode;
            e++
        }
        return null
    }

    function ld(a) {
        this.a = a || aa.document || document
    }
    ld.prototype.createElement = function(a) {
        return this.a.createElement(a)
    };
    ld.prototype.contains = function(a, d) {
        if (!a || !d) return !1;
        if (a.contains && 1 == d.nodeType) return a == d || a.contains(d);
        if ("undefined" != typeof a.compareDocumentPosition) return a == d || !!(a.compareDocumentPosition(d) & 16);
        for (; d && a != d;) d = d.parentNode;
        return d == a
    };
    var md = !A || 9 <= Number(Oc),
        nd = A && !Mc("9");
    !Dc || Mc("528");
    Cc && Mc("1.9b") || A && Mc("8") || Ac && Mc("9.5") || Dc && Mc("528");
    Cc && !Mc("8") || A && Mc("9");
    var od = "ontouchstart" in aa || !!(aa.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!aa.navigator || !aa.navigator.msMaxTouchPoints);

    function pd(a, d) {
        wa.call(this, a ? a.type : "");
        this.a = this.target = null;
        this.keyCode = this.clientY = this.clientX = 0;
        this.h = this.l = this.c = this.m = !1;
        this.b = this.state = null;
        a && this.init(a, d)
    }
    v(pd, wa);
    pd.prototype.init = function(a, d) {
        this.type = a.type;
        var e = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = d;
        var f = a.relatedTarget;
        if (f && Cc) try {
            Ua(f.nodeName)
        } catch (k) {}
        null === e ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY);
        this.keyCode = a.keyCode || 0;
        this.m = a.ctrlKey;
        this.c = a.altKey;
        this.l = a.shiftKey;
        this.h = a.metaKey;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    };
    pd.prototype.stopPropagation = function() {
        pd.i.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    pd.prototype.preventDefault = function() {
        pd.i.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, nd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (d) {}
    };
    var qd = "closure_lm_" + (1E6 * Math.random() | 0),
        td = {},
        ud = 0;

    function vd(a, d, e, f, k) {
        if (fa(d)) {
            for (var l = 0; l < d.length; l++) vd(a, d[l], e, f, k);
            return null
        }
        e = wd(e);
        return ya(a) ? a.u(d, e, f, k) : xd(a, d, e, !1, f, k)
    }

    function xd(a, d, e, f, k, l) {
        if (!d) throw Error("Invalid event type");
        var p = !!k,
            r = yd(a);
        r || (a[qd] = r = new Fb(a));
        e = Gb(r, d, e, f, k, l);
        if (e.a) return e;
        f = zd();
        e.a = f;
        f.src = a;
        f.listener = e;
        if (a.addEventListener) a.addEventListener(d.toString(), f, p);
        else if (a.attachEvent) a.attachEvent(Ad(d.toString()), f);
        else throw Error("addEventListener and attachEvent are unavailable.");
        ud++;
        return e
    }

    function zd() {
        var a = Bd,
            d = md ? function(e) {
                return a.call(d.src, d.listener, e)
            } : function(e) {
                e = a.call(d.src, d.listener, e);
                if (!e) return e
            };
        return d
    }

    function Cd(a, d, e, f, k) {
        if (fa(d))
            for (var l = 0; l < d.length; l++) Cd(a, d[l], e, f, k);
        else e = wd(e), ya(a) ? Gb(a.a, String(d), e, !0, f, k) : xd(a, d, e, !0, f, k)
    }

    function Dd(a, d, e, f, k) {
        if (fa(d))
            for (var l = 0; l < d.length; l++) Dd(a, d[l], e, f, k);
        else e = wd(e), ya(a) ? a.nb(d, e, f, k) : a && (a = yd(a)) && (d = Jb(a, d, e, !!f, k)) && Ed(d)
    }

    function Ed(a) {
        if (!ia(a) && a && !a.na) {
            var d = a.src;
            if (ya(d)) Ib(d.a, a);
            else {
                var e = a.type,
                    f = a.a;
                d.removeEventListener ? d.removeEventListener(e, f, a.La) : d.detachEvent && d.detachEvent(Ad(e), f);
                ud--;
                (e = yd(d)) ? (Ib(e, a), 0 == e.b && (e.src = null, d[qd] = null)) : Ba(a)
            }
        }
    }

    function Ad(a) {
        return a in td ? td[a] : td[a] = "on" + a
    }

    function Fd(a, d, e, f) {
        var k = !0;
        if (a = yd(a))
            if (d = a.a[d.toString()])
                for (d = d.concat(), a = 0; a < d.length; a++) {
                    var l = d[a];
                    l && l.La == e && !l.na && (l = Gd(l, f), k = k && !1 !== l)
                }
        return k
    }

    function Gd(a, d) {
        var e = a.listener,
            f = a.Pa || a.src;
        a.Ka && Ed(a);
        return e.call(f, d)
    }

    function Bd(a, d) {
        if (a.na) return !0;
        if (!md) {
            var e;
            if (!(e = d)) a: {
                e = ["window", "event"];
                for (var f = aa, k; k = e.shift();)
                    if (null != f[k]) f = f[k];
                    else {
                        e = null;
                        break a
                    }
                e = f
            }
            k = e;
            e = new pd(k, this);
            f = !0;
            if (!(0 > k.keyCode || void 0 != k.returnValue)) {
                a: {
                    var l = !1;
                    if (0 == k.keyCode) try {
                        k.keyCode = -1;
                        break a
                    } catch (x) {
                        l = !0
                    }
                    if (l || void 0 == k.returnValue) k.returnValue = !0
                }
                k = [];
                for (l = e.a; l; l = l.parentNode) k.push(l);
                for (var l = a.type, p = k.length - 1; !e.g && 0 <= p; p--) {
                    e.a = k[p];
                    var r = Fd(k[p], l, !0, e),
                        f = f && r
                }
                for (p = 0; !e.g && p < k.length; p++) e.a = k[p],
                r =
                Fd(k[p], l, !1, e),
                f = f && r
            }
            return f
        }
        return Gd(a, new pd(d, this))
    }

    function yd(a) {
        a = a[qd];
        return a instanceof Fb ? a : null
    }
    var Hd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function wd(a) {
        if (ja(a)) return a;
        a[Hd] || (a[Hd] = function(d) {
            return a.handleEvent(d)
        });
        return a[Hd]
    };

    function Id(a) {
        sa.call(this);
        this.b = a;
        this.a = {}
    }
    v(Id, sa);
    var Jd = [];
    n = Id.prototype;
    n.u = function(a, d, e, f) {
        fa(d) || (d && (Jd[0] = d.toString()), d = Jd);
        for (var k = 0; k < d.length; k++) {
            var l = vd(a, d[k], e || this.handleEvent, f || !1, this.b || this);
            if (!l) break;
            this.a[l.key] = l
        }
        return this
    };
    n.nb = function(a, d, e, f, k) {
        if (fa(d))
            for (var l = 0; l < d.length; l++) this.nb(a, d[l], e, f, k);
        else e = e || this.handleEvent, k = k || this.b || this, e = wd(e), f = !!f, d = ya(a) ? Jb(a.a, String(d), e, f, k) : a ? (a = yd(a)) ? Jb(a, d, e, f, k) : null : null, d && (Ed(d), delete this.a[d.key]);
        return this
    };
    n.removeAll = function() {
        w(this.a, function(a, d) {
            this.a.hasOwnProperty(d) && Ed(a)
        }, this);
        this.a = {}
    };
    n.B = function() {
        Id.i.B.call(this);
        this.removeAll()
    };
    n.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function Kd() {
        sa.call(this);
        this.a = new Fb(this);
        this.c = this;
        this.b = null
    }
    v(Kd, sa);
    Kd.prototype[xa] = !0;
    n = Kd.prototype;
    n.addEventListener = function(a, d, e, f) {
        vd(this, a, d, e, f)
    };
    n.removeEventListener = function(a, d, e, f) {
        Dd(this, a, d, e, f)
    };

    function Ld(a, d) {
        var e, f = a.b;
        if (f)
            for (e = []; f; f = f.b) e.push(f);
        var f = a.c,
            k = d,
            l = k.type || k;
        if (ha(k)) k = new wa(k, f);
        else if (k instanceof wa) k.target = k.target || f;
        else {
            var p = k,
                k = new wa(l, f);
            Ta(k, p)
        }
        var p = !0,
            r;
        if (e)
            for (var x = e.length - 1; !k.g && 0 <= x; x--) r = k.a = e[x], p = Md(r, l, !0, k) && p;
        k.g || (r = k.a = f, p = Md(r, l, !0, k) && p, k.g || (p = Md(r, l, !1, k) && p));
        if (e)
            for (x = 0; !k.g && x < e.length; x++) r = k.a = e[x], p = Md(r, l, !1, k) && p
    }
    n.B = function() {
        Kd.i.B.call(this);
        this.removeAllListeners();
        this.b = null
    };
    n.u = function(a, d, e, f) {
        return Gb(this.a, String(a), d, !1, e, f)
    };
    n.nb = function(a, d, e, f) {
        var k;
        k = this.a;
        a = String(a).toString();
        if (a in k.a) {
            var l = k.a[a];
            d = Hb(l, d, e, f); - 1 < d ? (Ba(l[d]), Array.prototype.splice.call(l, d, 1), 0 == l.length && (delete k.a[a], k.b--), k = !0) : k = !1
        } else k = !1;
        return k
    };
    n.removeAllListeners = function(a) {
        return this.a ? this.a.removeAll(a) : 0
    };

    function Md(a, d, e, f) {
        d = a.a.a[String(d)];
        if (!d) return !0;
        d = d.concat();
        for (var k = !0, l = 0; l < d.length; ++l) {
            var p = d[l];
            if (p && !p.na && p.La == e) {
                var r = p.listener,
                    x = p.Pa || p.src;
                p.Ka && Ib(a.a, p);
                k = !1 !== r.call(x, f) && k
            }
        }
        return k && 0 != f.Hb
    };

    function Nd(a, d, e, f, k) {
        if (!(A || Bc || Dc && Mc("525"))) return !0;
        if (Ec && k) return Od(a);
        if (k && !f) return !1;
        ia(d) && (d = Pd(d));
        if (!e && (17 == d || 18 == d || Ec && 91 == d)) return !1;
        if ((Dc || Bc) && f && e) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (A && f && d == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(Dc || Bc)
        }
        return Od(a)
    }

    function Od(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Dc || Bc) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function Pd(a) {
        if (Cc) a = Qd(a);
        else if (Ec && Dc) a: switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    }

    function Qd(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function Rd(a, d) {
        Kd.call(this);
        a && (this.Ra && Sd(this), this.xa = a, this.Qa = vd(this.xa, "keypress", this, d), this.gb = vd(this.xa, "keydown", this.g, d, this), this.Ra = vd(this.xa, "keyup", this.m, d, this))
    }
    v(Rd, Kd);
    n = Rd.prototype;
    n.xa = null;
    n.Qa = null;
    n.gb = null;
    n.Ra = null;
    n.Z = -1;
    n.ga = -1;
    n.Za = !1;
    var Td = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Ud = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Vd = A || Bc || Dc && Mc("525"),
        Wd = Ec && Cc;
    Rd.prototype.g = function(a) {
        if (Dc || Bc)
            if (17 == this.Z && !a.m || 18 == this.Z && !a.c || Ec && 91 == this.Z && !a.h) this.ga = this.Z = -1; - 1 == this.Z && (a.m && 17 != a.keyCode ? this.Z = 17 : a.c && 18 != a.keyCode ? this.Z = 18 : a.h && 91 != a.keyCode && (this.Z = 91));
        Vd && !Nd(a.keyCode, this.Z, a.l, a.m, a.c) ? this.handleEvent(a) : (this.ga = Pd(a.keyCode), Wd && (this.Za = a.c))
    };
    Rd.prototype.m = function(a) {
        this.ga = this.Z = -1;
        this.Za = a.c
    };
    Rd.prototype.handleEvent = function(a) {
        var d = a.b,
            e, f, k = d.altKey;
        A && "keypress" == a.type ? e = this.ga : (Dc || Bc) && "keypress" == a.type ? e = this.ga : Ac && !Dc ? e = this.ga : (e = d.keyCode || this.ga, f = d.charCode || 0, Wd && (k = this.Za), Ec && 63 == f && 224 == e && (e = 191));
        f = e = Pd(e);
        var l = d.keyIdentifier;
        e ? 63232 <= e && e in Td ? f = Td[e] : 25 == e && a.l && (f = 9) : l && l in Ud && (f = Ud[l]);
        a = f == this.Z;
        this.Z = f;
        d = new Xd(f, 0, a, d);
        d.c = k;
        Ld(this, d)
    };

    function Sd(a) {
        a.Qa && (Ed(a.Qa), Ed(a.gb), Ed(a.Ra), a.Qa = null, a.gb = null, a.Ra = null);
        a.xa = null;
        a.Z = -1;
        a.ga = -1
    }
    Rd.prototype.B = function() {
        Rd.i.B.call(this);
        Sd(this)
    };

    function Xd(a, d, e, f) {
        pd.call(this, f);
        this.type = "key";
        this.keyCode = a;
        this.repeat = e
    }
    v(Xd, pd);
    A && Mc(8);

    function Yd(a) {
        if (null != a) switch (a.ab) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Zd() {
        Yb.call(this)
    }
    v(Zd, Yb);
    Zd.prototype.Mb = Xb;

    function $d(a) {
        if (null == a || a.Mb !== Xb)
            if (a instanceof Ub) {
                var d = ae,
                    e;
                a instanceof Ub && a.constructor === Ub && a.c === Vb ? e = a.b : (da(a), e = "type_error:SafeHtml");
                a = d(e, a.a)
            } else a = ae(Wa(String(String(a))), Yd(a));
        return a
    }
    var ae = function(a) {
            function d(a) {
                this.content = a
            }
            d.prototype = a.prototype;
            return function(a, f) {
                var k = new d(String(a));
                void 0 !== f && (k.ab = f);
                return k
            }
        }(Zd),
        be = function(a) {
            function d(a) {
                this.content = a
            }
            d.prototype = a.prototype;
            return function(a, f) {
                var k = String(a);
                if (!k) return "";
                k = new d(k);
                void 0 !== f && (k.ab = f);
                return k
            }
        }(Zd);

    function ce(a, d, e) {
        var f = de[e];
        if (!f) {
            var k = gb(e),
                f = k;
            void 0 === a.style[k] && (k = (Dc ? "Webkit" : Cc ? "Moz" : A ? "ms" : Ac ? "O" : null) + jb(k), void 0 !== a.style[k] && (f = k));
            de[e] = f
        }(e = f) && (a.style[e] = d)
    }
    var de = {};

    function ee(a, d) {
        var e = cd(a);
        return e.defaultView && e.defaultView.getComputedStyle && (e = e.defaultView.getComputedStyle(a, null)) ? e[d] || e.getPropertyValue(d) || "" : ""
    }

    function fe() {
        var a = document,
            d = a.body,
            a = a.documentElement;
        return new Qb(d.scrollLeft || a.scrollLeft, d.scrollTop || a.scrollTop)
    }

    function ge(a) {
        var d;
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        A && a.ownerDocument.body && (a = a.ownerDocument, d.left -= a.documentElement.clientLeft + a.body.clientLeft, d.top -= a.documentElement.clientTop + a.body.clientTop);
        return d
    }

    function he(a) {
        var d = cd(a),
            e = new Qb(0, 0),
            f;
        f = d ? cd(d) : document;
        var k;
        (k = !A || 9 <= Number(Oc)) || (k = "CSS1Compat" == (f ? new ld(cd(f)) : va || (va = new ld)).a.compatMode);
        if (a == (k ? f.documentElement : f.body)) return e;
        a = ge(a);
        f = (d ? new ld(cd(d)) : va || (va = new ld)).a;
        d = Yc(f);
        f = f.parentWindow || f.defaultView;
        d = A && Mc("10") && f.pageYOffset != d.scrollTop ? new Qb(d.scrollLeft, d.scrollTop) : new Qb(f.pageXOffset || d.scrollLeft, f.pageYOffset || d.scrollTop);
        e.x = a.left + d.x;
        e.y = a.top + d.y;
        return e
    }

    function ie(a) {
        if (1 == a.nodeType) return a = ge(a), new Qb(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Qb(a.clientX, a.clientY)
    }

    function le(a, d, e) {
        if (d instanceof Da) e = d.height, d = d.width;
        else if (void 0 == e) throw Error("missing height argument");
        a.style.width = me(d);
        a.style.height = me(e)
    }

    function me(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }

    function ne(a) {
        var d = oe;
        if ("none" != (ee(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return d(a);
        var e = a.style,
            f = e.display,
            k = e.visibility,
            l = e.position;
        e.visibility = "hidden";
        e.position = "absolute";
        e.display = "inline";
        a = d(a);
        e.display = f;
        e.position = l;
        e.visibility = k;
        return a
    }

    function oe(a) {
        var d = a.offsetWidth,
            e = a.offsetHeight,
            f = Dc && !d && !e;
        return q(d) && !f || !a.getBoundingClientRect ? new Da(d, e) : (a = ge(a), new Da(a.right - a.left, a.bottom - a.top))
    }

    function pe(a, d) {
        a.style.display = d ? "" : "none"
    }
    var qe = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function re(a, d) {
        if ("none" == (a.currentStyle ? a.currentStyle[d + "Style"] : null)) return 0;
        var e = a.currentStyle ? a.currentStyle[d + "Width"] : null,
            f;
        if (e in qe) f = qe[e];
        else if (/^\d+px?$/.test(e)) f = parseInt(e, 10);
        else {
            f = a.style.left;
            var k = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = e;
            e = a.style.pixelLeft;
            a.style.left = f;
            a.runtimeStyle.left = k;
            f = e
        }
        return f
    };
    z("Firefox");
    Pb() || z("iPod");
    z("iPad");
    !z("Android") || Ob() || z("Firefox") || Nb() || z("Silk");
    Ob();
    !z("Safari") || Ob() || z("Coast") || Nb() || z("Edge") || z("Silk") || z("Android") || Pb() || z("iPad") || z("iPod");
    var se = !A;

    function te(a, d, e) {
        se && a.dataset ? a.dataset[d] = e : a.setAttribute("data-" + ib(d), e)
    }

    function C(a, d) {
        return se && a.dataset ? d in a.dataset ? a.dataset[d] : null : a.getAttribute("data-" + ib(d))
    }

    function D(a, d) {
        return se && a.dataset ? d in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + ib(d)) : !!a.getAttribute("data-" + ib(d))
    };
    var ue, ve = {
        mvc: {
            DataType: "MVCModelData"
        },
        View: {
            contentElementTypeAttr: "wnd_mvc_type"
        },
        PageStyles: {
            dataType: "page_and_template_styles"
        },
        StaticContent: {
            staticImagePlaceholder: "47w60u",
            staticImagePlaceholderDetail: "0dms4l",
            staticImagePlaceholderDetailPath: "/0d/0dm/0dms4l.svg"
        },
        StaticServerCategory: {
            templates: "templates",
            logo: "logo",
            background: "background",
            layoutBackground: "layoutBackground",
            socialIcons: "socialIcons",
            content: "content",
            microtemplate: "microtemplate",
            sectionBackgroundPrefix: "sectionBackground_",
            microtemplatePrefix: "microtemplate_",
            favicon: "favicon"
        },
        Error: {
            unknownJs: {
                whiteList: "d1di2lzuh97fh2.cloudfront.net webnode keen google typekit newrelic nr-data.net".split(" ")
            }
        }
    };

    function E(a, d) {
        var e = null != F.labels[a] ? F.labels[a] : "";
        d && (e = e.replace(/\{(\w+)}/g, function(a, e) {
            e = e.toLowerCase();
            return e in d ? d[e] : a
        }));
        return e
    };

    function G() {
        sa.call(this);
        this.Ga = []
    }
    v(G, sa);
    G.prototype.B = function() {
        for (var a = 0; a < this.Ga.length; a++) this.Ga[a] && xe(this.Ga[a], this);
        G.i.B.call(this)
    };
    G.prototype.sb = function(a) {
        this.Ga.push(a)
    };

    function ye(a, d, e, f, k) {
        var l = f ? a : Ra(a);
        null != l || (l = {});
        w(d, function(d, f) {
            fa(l) && qb(l) && !ia(f) && (l = {});
            if (null != a && "object" === typeof a[f] && "object" === typeof d) null != k ? k.push(f) : k = [f], l[f] = ye(l[f], d, e, !0, k);
            else if ("object" === typeof d) l[f] = Ra(d), e && (e.changed = !0);
            else if (null == a || a[f] !== d)
                if (l[f] = d, e)
                    if (e.changed = !0, "undefined" === typeof e.ob && (e.ob = {}), k) {
                        var x = e.ob;
                        y(k, function(a) {
                            x[a] || (x[a] = {});
                            x = x[a]
                        });
                        x[f] = d
                    } else e.ob[f] = d
        });
        return l
    }

    function ze(a) {
        var d = H.checkout_order;
        if (null === d || void 0 === d) throw new TypeError("Cannot convert undefined or null to object");
        d = Object(d);
        if (null !== a && void 0 !== a)
            for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (d[e] = a[e]);
        return d
    };

    function I() {
        G.call(this);
        this.O = {}
    }
    v(I, G);
    I.prototype.observe = function(a, d, e) {
        "undefined" == typeof this.O[a] && (this.O[a] = []);
        for (var f = 0; f < this.O[a].length; f++)
            if (this.O[a][f].la === d && this.O[a][f].ta === e) return;
        this.O[a].push({
            la: d,
            ta: e
        });
        ja(e.sb) && e.sb(this)
    };
    I.prototype.notify = function(a, d) {
        var e;
        if ("undefined" != typeof this.O[a])
            for (var f = this.O[a].length, k = 0; k < f && (e = this.O[a][k], !q(e) || e.ta instanceof sa && e.ta.Da || (e.la.apply(e.ta, arguments), q(this.O[a]))); k++);
    };

    function xe(a, d) {
        for (var e in a.O) a.O[e] = lb(a.O[e], function(a) {
            return a.ta != d
        })
    };
    var Ae = 0;

    function Be(a, d) {
        if (null != window.wnd.trackerConfig && window.wnd.trackerConfig.events[a]) {
            var e = window.wnd.trackerConfig.data;
            e.action.identifier = a;
            e.action.name = window.wnd.trackerConfig.events[a].name;
            e.browser.resolution = window.screen.width + "x" + window.screen.height;
            d && (e = ye(e, d));
            Ce(e, function() {})
        }
    }

    function Ce(a, d) {
        var e = window.wnd.trackerConfig.collection || "PROD",
            f = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
            k = (new Date).getTime(),
            l = "trackerJSONPCallback" + k + "_" + Ae++,
            e = window.wnd.trackerConfig.urlPrefix + e + "?api_key=-&data=" + f + "&modified=" + k + "&jsonp=" + l,
            p = document.createElement("script");
        p.type = "text/javascript";
        p.src = e;
        window[l] = function(a) {
            d(a);
            document.getElementsByTagName("head")[0].removeChild(p);
            p = null;
            delete window[l]
        };
        document.getElementsByTagName("head")[0].appendChild(p)
    };
    var De = null !== navigator.userAgent.match(/Android|iPhone|iPad|iPod|BB10|BlackBerry|Windows Phone|IEMobile|Opera Mini/i),
        Ee = null !== navigator.userAgent.match(/Chrome/) && null === navigator.userAgent.match(/Edge\/[0-9]{2,}/),
        Fe = null !== navigator.userAgent.match(/Firefox/);
    null !== navigator.userAgent.match(/Safari/) && navigator.userAgent.match(/Chrome/);
    var Ge = null !== navigator.userAgent.match(/MSIE /) || null !== navigator.userAgent.match(/Trident/);
    navigator.userAgent.match(/Edge\/[0-9]{2,}/);
    var He = od,
        Ie;
    if (Ie = He) Ie = null === navigator.userAgent.match(/Android/);
    Ie && (Ee || Fe || Ge) && (He = !1);

    function Je(a) {
        G.call(this);
        this.a = a;
        this.ca = {}
    }
    v(Je, G);

    function Ke() {
        var a = new Je("tab__" + F.windowId);
        w(ue, function(a, e) {
            e = e.replace("gui_pages_gui_pages.content_items_", "ci_").replace("gui_page_templates_gui_page_templates.content_items_", "ly_").replace("listing_items_listing_items.content_items", "li_");
            this.ca[e] = a
        }, a);
        return a
    }

    function Le(a) {
        var d = [];
        w(a.ca, function(a, f) {
            d.push(f + ":" + a)
        });
        d = d.join("|");
        Ga(Ia, a.a, d, -1, "/");
        return a
    }
    Je.prototype.equals = function(a) {
        a = a.ca;
        var d = Na(a),
            e = d.length;
        if (a.length != this.ca.length) return !1;
        for (var f = 0; f < e; f++) {
            var k = d[f];
            if (!q(this.ca[k]) || a[k] != this.ca[k]) return !1
        }
        return !0
    };

    function Me() {
        G.call(this);
        this.a = {}
    }
    v(Me, G);
    ca(Me);

    function Ne() {
        var a, d = Me.f();
        a || (a = Le(Ke()));
        w(d.a, function(d) {
            var f;
            a: {
                f = Na(a.ca);
                for (var k = 0; k < f.length; k++)
                    if (q(d.ca[f[k]])) {
                        f = !0;
                        break a
                    }
                f = !1
            }
            if (f && !d.equals(a)) {
                f = Na(d.ca);
                for (var k = a.ca, l = 0; l < f.length; l++) {
                    var p = f[l];
                    q(k[p]) && (d.ca[p] = k[p])
                }
                Le(d)
            }
        })
    };

    function Oe(a, d, e, f) {
        G.call(this);
        this.m = la(this);
        this.l = a;
        this.c = d;
        this.a = null;
        e && (this.a = e);
        this.g = f || ""
    }
    v(Oe, G);
    Oe.prototype.getType = function() {
        return this.l
    };
    Oe.prototype.stopPropagation = function() {
        this.c = "propagation_stopped"
    };

    function Pe(a) {
        a.c = "children_propagation"
    }
    Oe.prototype.B = function() {
        this.a = null;
        Oe.i.B.call(this)
    };

    function J(a, d, e, f, k) {
        this.data = k || {};
        Oe.call(this, a, e || "parent_propagation", d, f)
    }
    v(J, Oe);
    J.prototype.getData = function() {
        var a = this.data,
            d = {},
            e;
        for (e in a) d[e] = a[e];
        return d
    };

    function Qe(a, d, e, f, k) {
        Oe.call(this, a, d, f);
        this.b = e;
        this.h = k
    }
    v(Qe, Oe);

    function Re(a, d) {
        this.b = a;
        this.a = d || "";
        this.c = Error(a).stack || ""
    }
    Re.prototype.toString = function() {
        return "wnd.core.Exception: " + this.b + (this.a ? "(" + this.a + ")" : "")
    };

    function L(a, d) {
        Re.call(this, a);
        d || (d = {
            error: {
                message: a,
                filename: "",
                lineno: "",
                stack: this.c
            }
        });
        this.log(d)
    }
    v(L, Re);
    L.prototype.log = function(a) {
        if (F.isCms) {
            var d;
            d = document.getElementsByTagName("script");
            for (var e = ve.Error.unknownJs.whiteList, f = "", k = "", l = 0, p = d.length; l < p; l++)(f = d[l].getAttribute("src")) && !Se(e, f) && (k += f + "; ");
            (d = k) && (a.error.unknownJs = d);
            a: {
                d = "";null != a.error && (null != a.error.message && (d += a.error.message), null != a.error.filename && (d += a.error.filename), null != a.error.lineno && (d += a.error.lineno));
                if ("" != d) {
                    for (f = e = 0; f < d.length; ++f) e = 31 * e + d.charCodeAt(f) >>> 0;
                    d = "eh" + e;
                    e = window.localStorage.getItem(d);
                    f = new Date;
                    if (null === e || parseInt(e, 10) <= f.getTime()) window.localStorage.setItem(d, (f.getTime() + 36E5).toString());
                    else if (parseInt(e, 10) > f.getTime()) {
                        d = !1;
                        break a
                    }
                }
                d = !0
            }
            d && Te.Ia("error", a)
        }
    };

    function Se(a, d) {
        return 0 < a.filter(function(a) {
            return -1 !== d.indexOf(a)
        }).length
    }
    window.addEventListener("error", function(a) {
        var d = "";
        q(a.message) && (d = a.message);
        if (-1 == d.indexOf("Script error")) {
            var e = "";
            q(a.filename) && (e = a.filename);
            var f = "";
            q(a.lineno) && (f = a.lineno);
            new L(d, {
                error: {
                    message: d,
                    filename: e,
                    lineno: f
                }
            })
        }
    }, !1);

    function Ue() {
        G.call(this);
        this.b = {};
        this.c = {}
    }
    v(Ue, G);
    n = Ue.prototype;
    n.Ma = null;
    n.jb = !1;
    n.Oa = null;
    n.register = function(a, d) {
        if (q(this.b[a])) throw new L('Class "' + a + '" already registered in factory');
        this.b[a] = d
    };
    n.get = function(a, d) {
        if (this.jb) {
            var e = this.xb.apply(this, arguments);
            q(this.c[e]) || (this.c[e] = this.vb.apply(this, arguments));
            return this.c[e]
        }
        return this.vb.apply(this, arguments)
    };
    n.vb = function(a, d) {
        null === this.Ma && (this.Ma = this.g());
        var e;
        if (q(this.Ma[a])) e = this.Ma[a];
        else {
            if (null === this.Oa) throw new L('No valid class found for "' + a + '"');
            e = this.Oa
        }
        if (!q(this.b[e])) throw new L('Unregistered class "' + e + '" in factory');
        e = this.b[e];
        var f = ub(arguments);
        f.unshift(null);
        return new(Function.prototype.bind.apply(e, f))
    };
    n.xb = function(a) {
        return a
    };

    function Ve(a) {
        I.call(this);
        this.g = a || null;
        this.m = [];
        this.Y = [];
        this.g && this.g.m.push(this)
    }
    v(Ve, I);

    function We(a, d) {
        if (a.m) {
            var e = a.m.indexOf(d);
            0 <= e && a.m.splice(e, 1)
        }
    }

    function M(a, d) {
        if ("parent_propagation" == d.c) a.g ? Xe(a.g, d) : d.stopPropagation();
        else if ("children_propagation" == d.c)
            if (a.m)
                for (var e = a.m.length, f = 0; f < e; f++) Xe(a.m[f], d);
            else d.stopPropagation();
        "propagation_stopped" == d.c && d.dispose()
    }

    function Xe(a, d) {
        -1 == a.Y.indexOf(d.m) && (d.a && d.a === a || a.handleEvent(d), a.Y.push(d.m));
        M(a, d)
    }
    Ve.prototype.handleEvent = function(a) {
        a instanceof J ? this.J(a) : a instanceof Qe && this.P(a)
    };
    Ve.prototype.P = function() {};
    Ve.prototype.J = function() {};
    Ve.prototype.B = function() {
        this.g && We(this.g, this);
        var a = ub(this.m);
        y(a, function(a) {
            a.dispose()
        }, this);
        Ve.i.B.call(this)
    };

    function Ye(a) {
        return (F.isCms ? F.cmsReleasedFeatures : F.feReleasedFeatures)[a] || !1
    };

    function Ze(a, d) {
        Ve.call(this);
        this.c = d
    }
    v(Ze, Ve);
    Ze.prototype.P = function(a) {
        "parent_propagation" == a.c ? $e(af.f(), a) : "children_propagation" == a.c && pb(this.c.ModuleDataEventFilter, a.b) && M(this, a)
    };
    Ze.prototype.J = function(a) {
        var d;
        d = null;
        var e = a.a;
        if (null !== e) {
            var f = e.b.c;
            if ("keenInfoAdd" == a.getType()) switch (f) {
                case "wnd.pc.InsertContentPopup":
                case "wnd.pc.EditZone":
                    d = "add_content";
                    break;
                case "wnd.pc.SectionWrapper":
                    d = "new_section";
                    break;
                case "wnd.pc.BlogRecentPosts":
                    d = "new_blog_recent_posts"
            } else if ("keenInfoChange" == a.getType()) switch (f) {
                case "wnd.pm.PagesTree":
                    d = "change_page_order";
                    break;
                case "wnd.pc.EditSectionPopup":
                    d = "background_options_change";
                    break;
                case "wnd.pc.LogoBlock":
                    d = "change_logo"
            } else if ("keenInfoDelete" ==
                a.getType()) {
                switch (f) {
                    case "wnd.pm.PageEdit":
                        d = "delete_page"
                }
                d || (ja(e.Bb) && e.Bb() ? d = "delete_cell" : ja(e.Ab) && e.Ab() ? d = "delete_microtemplate" : ja(e.zb) && e.zb() && (d = "delete_content"));
                !d && ja(e.Cb) && e.Cb() && (d = "delete_section")
            } else if ("keenInfoOpen" == a.getType()) switch (f) {
                case "wnd.pm.PagesAdminPopup":
                case "wnd.pm.PagesPopup":
                    d = "open_pages"
            } else "keenCookieBarShow" === a.getType() ? d = "cookiebar_show" : "keenCookieBarAcceptAll" === a.getType() ? d = "cookiebar_accept_all" : "keenCookieBarAcceptNecessary" === a.getType() &&
                (d = "cookiebar_accept_necessary")
        }
        if ("inspectletInfo1" == a.getType() || "inspectletInfo2" == a.getType() || "inspectletInfo3" == a.getType() || "inspectletInfo4" == a.getType() || "inspectletInfo5" == a.getType() || "inspectletInfo6" == a.getType() || "inspectletInfo7" == a.getType()) {
            window.__insp = window.__insp || [];
            if ("inspectletInfo1" == a.getType()) switch (a.a.b.c) {
                case "wnd.tb.ToolbarContent":
                case "wnd.tb.Navbar":
                    window.__insp.push(["tagSession", "published"]);
                    d = "publish";
                    break;
                case "wnd.pc.ImageBlock":
                    window.__insp.push(["tagSession",
                        "edit image"
                    ]);
                    break;
                case "wnd.pc.TextBlock":
                    window.__insp.push(["tagSession", "wysiwyg"]);
                    break;
                case "wnd.pm.NewPageForm":
                    window.__insp.push(["tagSession", "added page"]);
                    d = "add_page";
                    break;
                case "wnd.pm.PagesAdminPopup":
                case "wnd.pm.PagesPopup":
                    window.__insp.push(["tagSession", "opened pages"]);
                    break;
                case "wnd.pc.InsertContentPopup":
                    window.__insp.push(["tagSession", "content add open"]);
                    break;
                case "wnd.pc.EditSectionPopup":
                    window.__insp.push(["tagSession", "section remove"]);
                    break;
                case "wnd.pc.MicroTemplate":
                    window.__insp.push(["tagSession",
                        "microtemplate cell add"
                    ]);
                    break;
                case "wnd.ui.EshopPromoPopup":
                case "wnd.ui.EshopActivationArea":
                    window.__insp.push(["tagSession", "eshop activation"]);
                    break;
                case "wnd.es.ProductOptionRow":
                    window.__insp.push(["tagSession", "eshop variants create group"]);
                    break;
                case "wnd.es.ProductVariantRow":
                    window.__insp.push(["tagSession", "eshop variants edit variant"])
            }
            if ("inspectletInfo2" == a.getType()) switch (a.a.b.c) {
                case "wnd.pc.InsertContentPopup":
                    window.__insp.push(["tagSession", "section add open"]);
                    break;
                case "wnd.pc.EditSectionPopup":
                    window.__insp.push(["tagSession",
                        "layout edit open"
                    ])
            }
            "inspectletInfo3" == a.getType() && "wnd.pc.EditSectionPopup" == a.a.b.c && window.__insp.push(["tagSession", "section edit open"]);
            "inspectletInfo4" == a.getType() && window.__insp.push(["tagSession", "member login activation open"]);
            "inspectletInfo5" == a.getType() && window.__insp.push(["tagSession", "member login activated"]);
            "inspectletInfo6" == a.getType() && window.__insp.push(["tagSession", "design panel opened"]);
            "inspectletInfo7" == a.getType() && window.__insp.push(["tagSession", "design panel closed"])
        } else d ||
            ("parent_propagation" == a.c && Pe(a), M(this, a));
        null != Te && ja(Te.Ia) && d && (e = a.a, a = {
            data: {
                MVCType: e.b.c,
                MVCId: e.L()
            }
        }, (e = e.Pb ? e.D : null) && e.L && (a.data.parentMVCId = e.L()), Te.Ia(d, a))
    };

    function af() {
        I.call(this);
        this.a = {}
    }
    v(af, I);
    ca(af);
    af.prototype.register = function(a, d) {
        var e = new d(a);
        this.a[a] = e
    };
    af.prototype.init = function() {
        w(this.a, function(a, d) {
            a.init();
            this.notify("onInit", d)
        }, this)
    };
    af.prototype.get = function(a) {
        if (!q(this.a[a])) throw new L("Invalid module namespace `" + a + "`");
        return this.a[a]
    };

    function $e(a, d) {
        Pe(d);
        w(a.a, function(a, f) {
            void 0 != f && a.P(d)
        }, a)
    }

    function bf(a, d) {
        Pe(d);
        w(a.a, function(a, f) {
            void 0 != f && a.J(d)
        }, a)
    }

    function cf(a) {
        var d = af.f();
        return mb(Ma(d.a), function(d, f) {
            var k = q(f.c[a]) ? f.c[a] : null;
            return null === k ? d : ye(d, k)
        }, q(ve[a]) ? ve[a] : {}, d)
    };

    function N(a, d) {
        I.call(this);
        this.T = a;
        this.a = d;
        this.a.observe("onUpdate", this.Wa, this)
    }
    v(N, I);
    n = N.prototype;
    n.X = !0;
    n.ub = !1;

    function df(a) {
        if (a.ub && !a.j()) {
            var d = a.cb();
            a.b = Zc("div", d);
            null != d.tabindex && a.j().setAttribute("tabindex", d.tabindex);
            d = a.j();
            te(d, ve.View.contentElementTypeAttr, a.a.c);
            if (!a.T) throw new L("Neexistuje baseElement bloku `" + a.a.L() + "`");
            d = a.j();
            a.T.appendChild(d)
        }
        a.notify("onBeforeRenderContent");
        a.S();
        a.notify("onRender");
        a.tb();
        a.notify("onRenderContent")
    }
    n.j = function() {
        return this.b
    };
    n.cb = function() {
        var a = {};
        !0 === (null != ef(this.a)) && (!1 === ka(this.c) ? this.c = {
            "class": ""
        } : !0 === (null != this.c["class"]) && (this.c["class"] += " "), this.c["class"] += ef(this.a));
        if ("object" == typeof this.c) {
            var d = this.c,
                e;
            for (e in d) a[e] = d[e]
        }
        return a
    };
    n.B = function() {
        this.b && ed(this.b);
        N.i.B.call(this)
    };
    n.aa = function() {
        this.b && pe(this.b, !0)
    };
    n.qa = function() {
        this.b && pe(this.b, !1)
    };
    n.Va = function() {
        return this.b ? "none" != this.b.style.display : !1
    };
    n.Wa = function() {
        ff(this)
    };

    function ff(a) {
        a.j() && (a.notify("onBeforeRenderContent"), a.S(), a.notify("onRenderContent"))
    }
    n.I = function() {
        return {}
    };
    n.tb = function() {};

    function gf(a, d) {
        N.call(this, a, d)
    }
    v(gf, N);
    var hf = {
        DataObjectFactory: {
            gui_pages: "wnd.data.DbDataObject",
            gui_page_templates: "wnd.data.DbDataObject",
            filesystem_files: "wnd.data.DbDataObject",
            filesystem_dir: "wnd.data.DbDataObject",
            my_videos: "wnd.data.DbDataObject",
            listing_items: "wnd.data.DbDataObject",
            server_projects: "wnd.data.ServerProjectDbDataObject",
            fe_users: "wnd.data.DbDataObject",
            e_product: "wnd.data.DbDataObject",
            e_category: "wnd.data.DbDataObject",
            e_cart: "wnd.data.DbDataObject",
            e_order: "wnd.data.DbDataObject",
            e_order_item: "wnd.data.DbDataObject",
            server_content_items: "wnd.data.DbDataObject",
            project_settings: "wnd.data.ProjectSettingsDbDataObject"
        },
        DataCollectionFactory: {
            fe_languages: "wnd.data.DbDataCollection",
            admin_languages: "wnd.data.DbDataCollection",
            gui_pages: "wnd.data.DbDataCollection",
            filesystem_files: "wnd.data.DbDataCollection",
            my_videos: "wnd.data.DbDataCollection",
            listing_items: "wnd.data.DbDataCollection",
            static_server: "wnd.data.StaticServerDataCollection",
            tpl_page_templates: "wnd.data.DbDataCollection",
            page_and_template_styles: "wnd.data.PageAndTemplateStylesCollection",
            tpl_color_sets: "wnd.data.PrecachedDataCollection",
            tpl_forms: "wnd.data.DbDataCollection",
            tpl_form_fields: "wnd.data.DbDataCollection",
            server_projects: "wnd.data.DbDataCollection",
            fe_users: "wnd.data.DbDataCollection",
            e_product: "wnd.data.DbDataCollection",
            e_category: "wnd.data.DbDataCollection",
            e_product_zones_collections: "wnd.data.DbDataCollection",
            e_cart: "wnd.data.DbDataCollection",
            e_order: "wnd.data.DbDataCollection",
            e_order_item: "wnd.data.DbDataCollection",
            e_tax: "wnd.data.DbDataCollection",
            e_product_option_group: "wnd.data.DbDataCollection",
            e_product_option: "wnd.data.DbDataCollection",
            e_product_variant: "wnd.data.DbDataCollection",
            server_content_items: "wnd.data.DbDataCollection",
            fulltextSearch: "wnd.data.DbDataCollection",
            project_settings: "wnd.data.DbDataCollection"
        },
        UndoRedoManager: {
            fade: {
                start: .25,
                end: 1,
                time: 1E3
            }
        },
        PremiumContentChecker: {
            content_items: {
                backgroundVideo: {
                    path: "style/backgroundSettings/*/*/mediaType",
                    value: ["videos", "myVideos"],
                    packageLevel: 2,
                    exceptionCode: 2003
                }
            },
            styles: {
                backgroundVideo: {
                    path: "backgroundSettings/*/mediaType",
                    value: ["videos", "myVideos"],
                    packageLevel: 2,
                    exceptionCode: 2003
                }
            }
        }
    };

    function jf(a) {
        I.call(this);
        this.b = a
    }
    v(jf, I);
    jf.prototype.getData = function(a) {
        this.data || this.a();
        return a ? q(this.data[a]) ? this.data[a] : void 0 : this.data
    };

    function kf(a) {
        delete a.data;
        a.notify("onEraseCache")
    };

    function lf(a) {
        jf.call(this, a)
    }
    v(lf, jf);
    lf.prototype.a = function() {
        if ("undefined" != typeof H[this.b]) this.data = H[this.b];
        else throw new L("Datatype " + this.b + " doesn't exist in JSONDataCollection (wnd.$data)");
    };

    function O() {
        Ue.call(this);
        this.jb = !0;
        this.Oa = "wnd.data.JSONDataCollection";
        this.a = {}
    }
    v(O, Ue);
    ca(O);

    function mf(a, d) {
        q(a.a[d]) && w(a.a[d], function(a, f) {
            kf(this.c[d + "_" + f])
        }, a)
    }
    O.prototype.xb = function(a, d) {
        return this.m.apply(this, arguments)
    };
    O.prototype.m = function(a, d) {
        var e = d ? JSON.stringify(d) : "no_settings";
        q(this.a[a]) || (this.a[a] = {});
        this.a[a][e] = !0;
        return a + "_" + e
    };
    O.prototype.g = function() {
        return ye(hf.DataCollectionFactory, cf("DataCollectionFactory"))
    };
    O.f().register("wnd.data.JSONDataCollection", lf);

    function nf(a) {
        I.call(this);
        this.a = a
    }
    v(nf, I);
    nf.prototype.create = function(a, d) {
        var e = this.b(a, d);
        this.G();
        return e
    };
    nf.prototype["delete"] = function(a) {
        this.c(a);
        this.G()
    };
    nf.prototype.G = function() {
        mf(O.f(), this.a)
    };

    function of (a) {
        return O.f().get(a.a)
    };

    function pf(a) {
        nf.call(this, a)
    }
    v(pf, nf);
    pf.prototype.b = function(a) {
        "undefined" == typeof H[this.a] && (H[this.a] = {});
        if ("undefined" == typeof a.id) {
            do a.id = Math.floor(1E4 * Math.random()).toString(); while ("undefined" != typeof H[this.a][a.id])
        }
        H[this.a][a.id] = a;
        return a.id
    };
    pf.prototype.g = function(a, d) {
        H[this.a][a] = d
    };
    pf.prototype.c = function(a) {
        delete H[this.a][a]
    };

    function qf() {
        Ue.call(this);
        this.jb = !0;
        this.Oa = "wnd.data.JSONDataObject"
    }
    v(qf, Ue);
    ca(qf);
    qf.prototype.g = function() {
        return ye(hf.DataObjectFactory, cf("DataObjectFactory"))
    };
    qf.f().register("wnd.data.JSONDataObject", pf);

    function P(a, d, e) {
        I.call(this);
        this.sa = a;
        this.c = d;
        d.slice(0, d.lastIndexOf("."));
        this.b = e || {
            id: a,
            create: {},
            properties: {}
        };
        q(this.b.create) && (a = this.b, Q.f(), d = this.c, e = {}, "undefined" != typeof rf[d] && (e = Ra(rf[d]), sf(e)), e.type = d, d = e, "undefined" != typeof this.b.create.data && (d = ye(d, this.b.create.data)), this.b.id && (d.id = this.b.id), d = tf(this).create(d, this.b.create), a.id = d);
        q(this.b.properties) || (this.b.properties = {});
        this.id = this.b.id;
        this.N = !1
    }
    v(P, I);
    n = P.prototype;
    n.W = ve.mvc.DataType;
    n.va = null;

    function tf(a) {
        a.F || (a.F = qf.f().get(a.W));
        return a.F
    }
    n.getData = function() {
        var a = uf(this).getData();
        return this.id ? a[this.id] : a
    };

    function R(a, d) {
        var e = a.getData();
        return e ? e[d] : {}
    }

    function vf(a, d, e) {
        var f = a.getData();
        if (f[d] !== e) {
            var k = tf(a);
            f[d] = e;
            k.g(a.id, f, void 0);
            k.G();
            a.notify("onUpdate", "data_updated", null, !0)
        }
    }

    function wf(a, d, e, f) {
        kf(uf(a));
        a.notify("onUpdate", d, f, e)
    }
    n.L = function() {
        return this.sa
    };
    n.B = function() {
        0 == this.N && tf(this)["delete"](this.id);
        P.i.B.call(this)
    };

    function uf(a) {
        if (!a.va || q(a.b.collectionSettingsFunc)) q(a.b.collectionSettings) ? a.va = O.f().get(a.W, a.b.collectionSettings) : q(a.b.collectionSettingsFunc) && ja(a.b.collectionSettingsFunc) ? a.va = O.f().get(a.W, a.b.collectionSettingsFunc()) : a.va = O.f().get(a.W);
        return a.va
    }

    function ef(a) {
        return "undefined" !== typeof a.b.properties.extendCssClass ? a.b.properties.extendCssClass : null
    };

    function S(a, d, e) {
        Ve.call(this, e);
        this.b = a;
        this.a = d;
        this.b.observe("onUpdate", this.Ea, this);
        this.b.observe("onChangeId", this.jc, this);
        this.a.observe("onRender", this.ib, this);
        this.a.observe("onBeforeRenderContent", this.Ub, this);
        this.a.observe("onRenderContent", this.oc, this);
        a = this.b;
        q(a.b.create) && null != a.id && this.b.W !== ve.mvc.DataType && (a = new Qe("dataCreate", "parent_propagation", this.b.W, this, this.b.id), M(this, a));
        this.j() && !1 === this.a.X && this.A()
    }
    v(S, Ve);
    n = S.prototype;
    n.j = function() {
        return this.a.j()
    };
    n.Ea = function(a, d, e, f) {
        this.b.W !== ve.mvc.DataType && f && (a = new Qe("dataUpdate", "parent_propagation", this.b.W, this, this.b.id), e && (a.O = e), M(this, a))
    };
    n.jc = function() {};
    n.ib = function() {
        this.notify("onViewRender")
    };
    n.fa = function() {
        this.j() ? this.a.aa() : df(this.a)
    };

    function xf(a) {
        a.a.qa()
    }
    n.B = function() {
        this.b.dispose();
        this.a.dispose();
        var a = Q.f(),
            d = this.L();
        delete a.b[d];
        a.notify("onDisposeMVC", d);
        this.b.W !== ve.mvc.DataType && (a = new Qe("dataDelete", "parent_propagation", this.b.W, this, this.b.id), M(this, a));
        S.i.B.call(this)
    };
    n.L = function() {
        return this.b.L()
    };
    n.Ub = function() {
        this.c && this.c.removeAll()
    };
    n.oc = function() {
        this.A()
    };
    n.A = function() {
        this.c = new Id(this)
    };

    function zf(a) {
        ka(window.history) && ja(window.history.replaceState) && window.history.replaceState({}, "", a)
    };

    function Q() {
        I.call(this);
        this.a = {};
        this.b = {}
    }
    v(Q, I);
    ca(Q);
    Q.prototype.register = function(a, d, e, f) {
        if ("undefined" == typeof this.a[a]) this.a[a] = {
            Model: d,
            View: e,
            Controller: f
        };
        else throw new L("MVC triad `" + a + "` already registered");
    };
    Q.prototype.create = function(a, d, e, f, k) {
        if ("undefined" == typeof this.a[d]) throw new L("MVC triad `" + d + "` hasn't been registered");
        if ("undefined" != typeof this.b[a]) throw new L("MVC triad `" + a + "` was already instancied");
        k = new this.a[d].Model(a, d, k);
        e = new this.a[d].View(e, k);
        d = new this.a[d].Controller(k, e, f);
        this.b[a] = {
            Model: k,
            View: e,
            Controller: d
        };
        e.X && df(e);
        this.notify("onCreateMVC", d);
        return d
    };
    Q.prototype.get = function(a) {
        if ("undefined" == typeof this.b[a]) throw new L("MVC triad `" + a + "` hasn't been instancied");
        return this.b[a].Controller
    };

    function Af(a, d) {
        return "object" === typeof a.b[d]
    }

    function sf(a) {
        ka(a.refs) && fa(a.refDataTypes) && (w(a.refs, function(d, e) {
            -1 === a.refDataTypes.indexOf(e) && delete a.refs[e]
        }), Pa(a.refs) && delete a.refs, delete a.refDataTypes)
    };

    function Bf(a, d, e) {
        S.call(this, a, d, e)
    }
    v(Bf, S);

    function Cf(a, d, e) {
        P.call(this, a, d, e)
    }
    v(Cf, P);
    Cf.prototype.B = function() {
        tf(this)["delete"](this.id);
        this.N = !0;
        Cf.i.B.call(this)
    };

    function Df(a) {
        nf.call(this, a)
    }
    v(Df, pf);
    qf.f().register("wnd.data.ServerJSONDataObject", Df);
    var Ef = {
        Server: {
            xhrUri: "/servers/usot/",
            transactionsInProcess: {
                "default": 1,
                fileUpload: 5
            },
            maxWaitingTransactions: 8,
            maxReSendTransactionsCount: 3,
            reSendTransactionTimeout: 1E3
        },
        errorCode: {
            notEnoughStorage: 10202
        },
        DbObjectServerRequest: {
            type: "DbDataRequest"
        },
        UpdateCheckoutOrderRequest: {
            type: "updateCheckoutOrder"
        },
        ShippingMethodsRequest: {
            type: "shippingMethods"
        },
        ShippingPickupPointRequest: {
            type: "shippingPickupPoint"
        },
        CreatePaymentIntentRequest: {
            type: "createPaymentIntent"
        },
        FinishCheckoutOrderRequest: {
            type: "finishCheckoutOrder"
        },
        FileUploadServerRequest: {
            type: "fileUpload"
        },
        FeLangDataRequest: {
            type: "feLangData"
        },
        VideoDataRequest: {
            type: "DbDataRequest"
        },
        CreateMyVideoRequest: {
            type: "createMyVideo"
        },
        StaticServerCollectionServerRequest: {
            type: "staticServer"
        },
        PublishWebServerRequest: {
            type: "publishWeb"
        },
        PremiumContentCheckServerRequest: {
            type: "premiumContentCheck"
        },
        ProjectInfoServerRequest: {
            type: "projectInfo"
        },
        DbCollectionServerRequest: {
            type: "DbCollectionRequest"
        },
        UniversalServerTransaction: {
            type: "universal"
        },
        UpdateJsDataServerRequest: {
            type: "updateJsData"
        },
        JSONServerRequest: {
            type: "JSONServer"
        },
        ContentItemServerRequest: {
            type: "ContentItemServer"
        },
        LoginRefreshRequest: {
            type: "LoginRefresh"
        },
        PrecachedCollectionRequest: {
            type: "PrecachedCollectionRequest"
        },
        CartServerRequest: {
            type: "cart"
        },
        LoginRefresh: {
            usotRefreshTime: 3E5,
            authRefreshTime: 3E5
        },
        ServerProjectServerRequest: {
            type: "ServerProjectDbDataRequest"
        },
        MoveBlockRequest: {
            type: "moveBlockRequest"
        },
        ProjectSettingsServerRequest: {
            type: "ProjectSettingsDbDataRequest"
        },
        VimeoApiRequest: {
            type: "VimeoApiRequest"
        },
        ContentItemsValidatorRequest: {
            type: "ContentItemsValidatorRequest"
        }
    };

    function Ff(a) {
        G.call(this);
        this.id = Math.random().toString(36).substring(7);
        this.a = [];
        this.b = [];
        a && (this.id = a + "_" + this.id);
        this.data = {}
    }
    v(Ff, G);
    Ff.prototype.getJSON = function() {
        return {
            id: this.id,
            type: this.getType(),
            data: this.getData()
        }
    };

    function T(a, d) {
        a.a.push(d)
    }
    Ff.prototype.getData = function() {
        return this.data
    };

    function Gf() {
        Ff.call(this, "CartServerRequest");
        this.data = {}
    }
    v(Gf, Ff);
    Gf.prototype.getType = function() {
        return Ef.CartServerRequest.type
    };

    function Hf(a) {
        a || (a = "CreatePaymentIntentRequest");
        Ff.call(this, a);
        T(this, t(this.c, this))
    }
    v(Hf, Ff);
    Hf.prototype.c = function(a, d) {
        "error" === a && d.code === If && window.location.reload()
    };
    Hf.prototype.getType = function() {
        return Ef.CreatePaymentIntentRequest.type
    };

    function Jf(a) {
        a || (a = "UpdateCheckoutOrderRequest");
        Ff.call(this, a);
        T(this, t(this.c, this));
        this.data = {
            screen: {
                width: screen.width,
                height: screen.height
            }
        }
    }
    v(Jf, Ff);
    Jf.prototype.c = function(a, d) {
        "error" === a && d.code === If && window.location.reload()
    };
    Jf.prototype.getType = function() {
        return Ef.FinishCheckoutOrderRequest.type
    };

    function Kf(a) {
        a || (a = "ProjectInfoRequest");
        Ff.call(this, a);
        T(this, t(this.c, this))
    }
    v(Kf, Ff);
    Kf.prototype.getType = function() {
        return Ef.ProjectInfoServerRequest.type
    };
    Kf.prototype.c = function(a, d) {
        if ("success" == a) {
            var e = qf.f().get("project_info");
            H[e.a] = d;
            e.G();
            e = new Qe("dataUpdate", "children_propagation", "project_info");
            $e(af.f(), e)
        }
    };

    function Lf(a) {
        jf.call(this, a);
        this.c = {}
    }
    v(Lf, lf);
    Lf.prototype.a = function() {
        Lf.i.a.call(this);
        Pa(this.c) && (this.c = Ra(this.getData()))
    };
    O.f().register("wnd.data.ServerJSONDataCollection", Lf);

    function Mf(a) {
        a || (a = "ShippingMethodsRequest");
        Ff.call(this, a)
    }
    v(Mf, Ff);
    Mf.prototype.getType = function() {
        return Ef.ShippingMethodsRequest.type
    };

    function Nf(a) {
        a || (a = "ShippingPickupPointRequest");
        Ff.call(this, a)
    }
    v(Nf, Ff);
    Nf.prototype.getType = function() {
        return Ef.ShippingPickupPointRequest.type
    };

    function Of(a) {
        a || (a = "UpdateCheckoutOrderRequest");
        Ff.call(this, a);
        T(this, t(this.c, this))
    }
    v(Of, Ff);
    Of.prototype.c = function(a, d) {
        "error" !== a || d.code !== Pf && d.code !== If || window.location.reload()
    };
    Of.prototype.getType = function() {
        return Ef.UpdateCheckoutOrderRequest.type
    };

    function Qf(a, d) {
        I.call(this);
        this.id = a + "_" + Math.random().toString(36).substring(7);
        this.name = a;
        this.R = [];
        this.b = d ? d : 1;
        this.status = "ready"
    }
    v(Qf, I);
    Qf.prototype.a = !0;
    Qf.prototype.getStatus = function() {
        return this.status
    };

    function Rf(a, d) {
        a.status = d;
        a.notify(d)
    }
    Qf.prototype.getName = function() {
        return this.name
    };
    Qf.prototype.getJSON = function() {
        for (var a = [], d = 0; d < this.R.length; d++) a.push(this.R[d].getJSON());
        return {
            id: this.id,
            type: this.getType(),
            headers: {
                langBe: F.backendLanguage,
                langFe: F.frontendLanguage,
                langFeId: F.frontendLanguageId
            },
            requests: a
        }
    };

    function Sf(a, d) {
        y(a.R, function(a) {
            if (d.id == a.id) throw new L("Request `" + d.id + "` already exist in transaction");
        }, a);
        a.R.push(d)
    }

    function Tf(a) {
        return nb(a.R, function() {
            return !1
        }, a)
    }

    function Uf(a) {
        y(a.R, function() {}, a)
    }

    function Vf(a) {
        y(a.R, function() {}, a)
    }

    function Wf(a) {
        y(a.R, function() {}, a)
    };

    function Xf(a, d) {
        Qf.call(this, a, d)
    }
    v(Xf, Qf);
    Xf.prototype.getType = function() {
        return Ef.UniversalServerTransaction.type
    };

    function Yf() {
        Kd.call(this);
        this.M = new XMLHttpRequest
    }
    v(Yf, Kd);
    n = Yf.prototype;
    n.ja = !1;
    n.M = null;
    n.send = function(a) {
        if (!0 === (null === this.M)) throw new L("XMLHttpRequest not getting initialized");
        this.M.open("POST", a, !0);
        Zf(this);
        this.M.ontimeout = this.Ac.bind(this);
        this.M.onerror = this.Gb.bind(this);
        this.M.onreadystatechange = this.Ic.bind(this);
        try {
            this.M.send($f(this))
        } catch (d) {
            this.Gb(this)
        }
        this.ja = !0
    };

    function $f(a) {
        for (var d, e = JSON.stringify(a.pa.getJSON()), f = a.pa.R, k = 0; k < f.length; k++)
            if (f[k].getType() == Ef.FileUploadServerRequest.type) {
                f = f[k];
                d = new FormData;
                d.append("transaction", e);
                d.append("file", f.Qb());
                a.M.upload.onprogress = a.zc.bind(a);
                break
            }
        d || (d = "transaction=" + encodeURIComponent(e), a.M.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8"));
        return d
    }

    function Zf(a) {
        var d = new Zb;
        $b(d, "Accept", "**/*//*");
        ec(d, function(a, d) {
            this.M.setRequestHeader(d, a)
        }, a)
    }
    n.Ic = function() {
        if (1 == this.M.readyState) Ld(this, {
            type: "progress",
            data: null
        });
        else if (4 == this.M.readyState && !0 === Ja(this.M.status)) {
            this.ja = !1;
            var a;
            try {
                var d = "";
                a = d = JSON.parse(this.M.responseText)
            } catch (e) {
                Ld(this, {
                    type: "error",
                    data: null
                });
                return
            }
            Ld(this, {
                type: "success",
                data: a
            })
        } else 0 < this.M.status && !1 === Ja(this.M.status) && Ld(this, {
            type: "error",
            data: null
        })
    };
    n.zc = function(a) {
        Ld(this, {
            type: "progress",
            data: {
                id: this.pa.id,
                requests: this.pa.R,
                event: a
            }
        })
    };
    n.Ac = function() {
        this.ja = !1;
        Ld(this, {
            type: "complete",
            data: null
        });
        Ld(this, {
            type: "timeout",
            data: null
        })
    };
    n.Gb = function(a) {
        this.ja = !1;
        Ld(this, {
            type: "complete",
            data: null
        });
        Ld(this, {
            type: "error",
            data: a
        })
    };
    n.B = function() {
        !1 !== this.ja && (this.M.onreadystatechange = ba, this.M.abort(), this.ja = !1, Ld(this, {
            type: "complete",
            data: null
        }), Ld(this, {
            type: "abort",
            data: null
        }));
        this.M = null;
        this.ja = !1
    };

    function U() {
        I.call(this);
        this.m = [];
        this.g = {};
        this.v = Ef.Server.xhrUri; - 1 === this.v.indexOf("//") && (this.v = "//" + location.host + this.v);
        this.a = {};
        this.b = [];
        this.c = [];
        this.o = this.T.bind(this);
        this.l = {};
        this.C = !1
    }
    v(U, I);
    ca(U);
    var Pf = 4009,
        If = 4020;

    function ag(a, d) {
        if (!q(a.a[d])) throw new L("Transaction `" + d + "` doesn' exist");
        return a.a[d]
    }

    function V(a, d, e) {
        if (d.getType() === Ef.FileUploadServerRequest.type && !d.Qb()) throw new L("FileUploadRequest must contain file for upload");
        if (e) {
            if (d.getType() === Ef.FileUploadServerRequest.type)
                for (var f = e.R, k = 0; k < f.length; k++)
                    if (f[k].getType() === Ef.FileUploadServerRequest.type) throw new L("Transaction can contain maximum one FileUploadRequest");
        } else e = new Xf("default", 1);
        a.a[e.id] || (a.a[e.id] = e);
        Sf(e, d);
        0 < e.R.length && e.R.length == e.b && a.h(e)
    }

    function bg(a, d) {
        var e = Ef.Server.transactionsInProcess["default"];
        q(Ef.Server.transactionsInProcess[d]) && (e = Ef.Server.transactionsInProcess[d]);
        return a.b.length >= e
    }
    U.prototype.h = function(a) {
        if (!1 === bg(this, a.getName())) {
            cg(this, a.id, "process");
            var d = a.id;
            this.l[d] = new Yf;
            vd(this.l[d], "progress complete success timeout error abort".split(" "), this.o);
            this.l[d].pa = a;
            this.l[d].send(this.v)
        } else dg(this) && Tf(a) && (Uf(a), Vf(a), eg("undoRedoClearStack")), cg(this, a.id, "waiting");
        a.a && eg("renewLoginRefreshTimers")
    };

    function dg(a) {
        var d = !1;
        y(a.b.concat(a.c), function(a) {
            Tf(ag(this, a)) && (d = !0)
        }, a);
        return d
    }

    function eg(a, d) {
        var e = new J(a, void 0, void 0, d);
        bf(af.f(), e)
    }

    function cg(a, d, e) {
        var f = ag(a, d);
        Rf(f, e);
        switch (e) {
            case "process":
                rb(a.b, d);
                sb(a.c, d);
                1 === a.b.length && a.notify("onTransactionsInProcess");
                break;
            case "waiting":
                e = ob(a.c, function(a) {
                    return "savePageData" === ag(this, a).getName()
                }, a);
                if ("savePageData" === f.getName() && e > Ef.Server.maxWaitingTransactions) throw eg("connectionError"), new L("Connection error. Waiting transactions " + e);
                rb(a.c, d);
                sb(a.b, d);
                break;
            case "ready":
            case "delete":
                sb(a.b, d), sb(a.c, d), 0 === a.b.length && a.notify("onTransactionsFinished"), "delete" ===
                    e && (delete a.a[d], null != a.g[d] && delete a.g[d])
        }
    }
    U.prototype.T = function(a) {
        if (null !== a.data && a.data.id) {
            var d = a.data.id,
                e = this.a[d];
            if ("process" !== e.getStatus()) throw new L("Transaction `" + d + "` isn't in processed status. Current status is " + e.getStatus());
            fg(this, e, a);
            "progress" !== a.type && (cg(this, d, "delete"), 0 < this.c.length && (d = this.a[this.c[0]], "waiting" === d.getStatus() && !1 === bg(this, d.getName()) && this.h(d)), ec(a.data.serverChangedDataTypes, function(a, d) {
                null != H[d] && null != hf.DataCollectionFactory[d] && delete H[d];
                mf(O.f(), d);
                ec(a, function(a, e) {
                    y(a,
                        function(a) {
                            var f;
                            switch (e) {
                                case "create":
                                    f = "dataCreate";
                                    break;
                                case "update":
                                    f = "dataUpdate";
                                    break;
                                case "delete":
                                    f = "dataDelete"
                            }
                            a = new Qe(f, "children_propagation", d, null, null === a ? void 0 : a);
                            $e(af.f(), a)
                        })
                });
                "project_info" === d && V(U.f(), new Kf)
            }));
            "delete" === e.getStatus() && Rf(e, "complete")
        }
        "error" === a.type && (0 === a.target.M.status ? gg(this, a) : hg(this, a))
    };

    function hg(a, d) {
        if (null != d.data && null != d.data.id) {
            var e = a.a[d.data.id];
            if (null != e && "loginRefresh" === e.getName()) return
        }
        eg("connectionError");
        throw new L("Connection error. Status: " + d.target.M.status + ", Transaction name: " + d.target.pa.name);
    }

    function gg(a, d) {
        var e = d.target.pa.id;
        null != a.a[e] && (null != a.g[e] ? a.g[e]++ : a.g[e] = 1, a.g[e] < Ef.Server.maxReSendTransactionsCount ? (cg(a, e, "ready"), setTimeout(t(a.h, a, a.a[e]), Ef.Server.reSendTransactionTimeout)) : hg(a, d))
    }

    function fg(a, d, e) {
        ec(e.data.requests, function(a) {
            var k = e.type,
                l;
            l = a.id;
            for (var p, r = 0; r < d.R.length; r++)
                if (d.R[r].id == l) {
                    p = d.R[r];
                    break
                }
            if (!p) throw new L("Request `" + l + "` doesn't exist in transaction `" + d.id + "`");
            l = p;
            if ("progress" === e.type) {
                if (a = l.b)
                    for (k = 0; k < a.length; k++) a[k](e.type, e.data.event, l)
            } else {
                if (p = l.a) {
                    if ("success" === e.type && !1 === a.result) {
                        k = "error";
                        a: {
                            if (null != a.data && null != a.data.errorCode) {
                                r = !0;
                                switch (a.data.errorCode) {
                                    case 1001:
                                        eg("authFailed");
                                        break;
                                    case 1002:
                                    case 1003:
                                        this.m.push(d);
                                        F.isDev ? eg("jsonPatchFailed") : this.C = !0;
                                        r = !1;
                                        break;
                                    case 1005:
                                        this.m.push(d);
                                        eg("invalidContentItemsSaved");
                                        r = !0;
                                        break;
                                    case 1004:
                                        eg("longPageContent");
                                        r = !0;
                                        break;
                                    case 2001:
                                        eg("formItemsLimitExceeded");
                                        r = !1;
                                        break;
                                    case 2002:
                                        eg("formUploadFieldUnavailable");
                                        r = !1;
                                        break;
                                    case 4001:
                                        eg("eshopUniqueSKU", JSON.parse(a.error.text));
                                        r = !1;
                                        break;
                                    case 4002:
                                        eg("eshopOutOfStock");
                                        r = !1;
                                        break;
                                    case 4003:
                                        r = !1;
                                        break;
                                    default:
                                        d.getName(), r = !1
                                }
                                Rf(d, "complete");
                                if (r) {
                                    r = !1;
                                    break a
                                }
                            }
                            r = !0
                        }
                        if (!r) return
                    }
                    for (r = 0; r < p.length; r++) p[r](k, !1 === a.result ? a.error : a.data, l, a);
                    this.C && (y(this.m, t(this.s, this), this), this.m = [], this.C = !1)
                }
                q(a.datachecksum) && (ig(this, a.datachecksum), Ne())
            }
        }, a)
    }

    function ig(a, d) {
        q(ue) || (ue = window.wnd.$datachecksum);
        w(d, function(a, d) {
            ue[d] = a
        }, a)
    }
    U.prototype.s = function(a) {
        var d = new Xf(a.getName(), a.R.length);
        y(a.R, function(a) {
            Sf(d, a)
        });
        Uf(d);
        Vf(d);
        Wf(d);
        eg("undoRedoClearStack");
        Rf(d, "ready");
        this.a[d.id] = d;
        this.h(d)
    };
    var jg = {
        ImageSizeManager: {
            mvcID: "ImageSizeManager",
            DataType: "image_content_items",
            backgroundClass: "wnd-background-image",
            allowTypes: "wnd.pc.ImageBlock wnd.pc.ThumbnailBlock wnd.pc.BannerBlock wnd.pc.PhotoGalleryBlock wnd.pc.PhotoImageBlock wnd.pc.ProductsZone wnd.pc.ProductGalleryBlock wnd.pc.ProductPhotoImageBlock wnd.pc.LogoBlock wnd.pc.Section wnd.pc.HeaderSection wnd.pc.NavlineSection wnd.pc.FooterSection".split(" "),
            replaceTimeout: 150
        },
        ImageTools: {
            identifier: "imageTools",
            orientationRatio: 1
        },
        VideoLoaderManager: {
            mvcID: "VideoLoaderManager",
            className: "wnd-video-background",
            orientationClassName: {
                landscape: "orientation-landscape",
                portrait: "orientation-portrait"
            },
            videoApi: {
                youtube: "https://www.youtube.com/iframe_api",
                vimeo: "https://player.vimeo.com/api/player.js"
            }
        },
        UploadManager: {
            supportedImagesMime: ["image/png", "image/jpeg", "image/gif", "image/svg+xml", "image/webp"],
            supportedFaviconMime: ["image/x-icon"],
            supportedExifMime: ["image/jpeg"],
            supportedImportExt: [".csv", ".xml", ".txt"],
            maxResizeImageDimension: 1920,
            maxCanvasResolution: {
                normal: 8E3,
                high: 32E3
            },
            processImagesCount: 1,
            imageOrientation: [1, 2, 3, 4, 5, 6, 7, 8],
            imageTransformation: {
                1: {
                    degree: 0,
                    flip: !1,
                    ratio: !1
                },
                2: {
                    degree: 0,
                    flip: !0,
                    ratio: !1
                },
                3: {
                    degree: 180,
                    flip: !1,
                    ratio: !1
                },
                4: {
                    degree: 180,
                    flip: !1,
                    ratio: !1
                },
                5: {
                    degree: 90,
                    flip: !0,
                    ratio: !0
                },
                6: {
                    degree: 90,
                    flip: !1,
                    ratio: !0
                },
                7: {
                    degree: -90,
                    flip: !0,
                    ratio: !0
                },
                8: {
                    degree: -90,
                    flip: !1,
                    ratio: !0
                }
            }
        },
        FilesystemPreviewSize: {
            detail: 700,
            normal: 450,
            small: 200
        }
    };

    function kg(a, d, e) {
        P.call(this, a, d, e)
    }
    v(kg, P);

    function lg() {
        var a = jg.ImageSizeManager.DataType;
        return O.f().get(a)
    }

    function mg() {
        var a = jg.ImageSizeManager.DataType;
        return qf.f().get(a)
    };

    function ng(a, d) {
        N.call(this, a, d);
        this.X = !1;
        this.o = null;
        this.D = [];
        this.F = [];
        this.g = {
            vimeo: {},
            youtube: {}
        };
        this.s = new Id(this)
    }
    v(ng, N);
    var og = null,
        pg = null,
        qg = !1,
        rg = !1;

    function sg(a) {
        a = a.o;
        for (var d = 0; d < a.length; d++) {
            "VIDEO" === a[d].nodeName && a[d].src && (tg(a[d]) ? a[d].paused && a[d].play() : a[d].paused || a[d].pause());
            var e = parseInt(C(a[d], "thumbnailWidth"), 10),
                f = parseInt(C(a[d], "thumbnailHeight"), 10);
            isNaN(e) || isNaN(f) || (a[d].className = ug(e, f))
        }
    }

    function tg(a) {
        a.parentNode && (a = a.parentNode);
        for (var d = 0, e = 0, f = a.offsetWidth, k = a.offsetHeight; a && a !== document.body;) d += a.offsetLeft, e += a.offsetTop, a = a.offsetParent;
        return .2 < Math.max(0, Math.min(f, window.pageXOffset + window.innerWidth - d, d + f - window.pageXOffset)) * Math.max(0, Math.min(k, window.pageYOffset + window.innerHeight - e, e + k - window.pageYOffset)) / (f * k)
    }

    function ug(a, d) {
        var e = jg.VideoLoaderManager.className + " ",
            f = jg.VideoLoaderManager.orientationClassName.landscape,
            k = jg.VideoLoaderManager.orientationClassName.portrait;
        a = parseInt(a, 10);
        d = parseInt(d, 10);
        return a >= d ? e + f : e + k
    }

    function vg(a) {
        w(a.g, function(a, e) {
            w(a, function(a, d) {
                if ("hidden" !== a.style.visibility)
                    if (null != a.contentWindow) {
                        var l = tg(a);
                        switch (e) {
                            case "vimeo":
                                l = JSON.stringify({
                                    method: l ? "play" : "pause"
                                });
                                a.contentWindow.postMessage(l, "*");
                                break;
                            case "youtube":
                                l ? ja(a.playVideo) && a.playVideo() : ja(a.pauseVideo) && a.pauseVideo()
                        }
                    } else l = this.g[e], d in l && delete l[d]
            }, this)
        }, a)
    }

    function wg(a) {
        y(a.o, function(a) {
            if (D(a, "my_videos")) {
                var e = xg(a, a.width, a.height);
                le(a, e.width + "%", e.height + "%")
            }
        }, a)
    }

    function xg(a, d, e) {
        a = ne(a.parentNode);
        d = a.width / d;
        e = a.height / e;
        var f = a = 100;
        d < e ? a = e / d * 100 : d > e && (f = d / e * 100);
        return new Da(parseFloat(a.toFixed(2)), parseFloat(f.toFixed(2)))
    }
    n = ng.prototype;
    n.pc = function() {
        rg = !0;
        y(this.F, function(a) {
            yg(this, a)
        }, this);
        this.F = []
    };

    function zg(a, d) {
        var e = {
            api: 1,
            autoplay: 1,
            autopause: 0,
            badge: 0,
            title: 0,
            byline: 0,
            portrait: 0,
            muted: 1,
            loop: 1
        };
        e.background = Ag(d.K) ? 0 : 1;
        d.K.attributes.getNamedItem("data-no-cookie") && !F.isCms && Qa(e, "dnt", !0);
        var f = [];
        w(e, function(a, d) {
            f.push(d + "=" + a)
        }, a);
        return f.join("&")
    }

    function yg(a, d) {
        var e = C(d.K, "video"),
            e = e + "?" + zg(a, d) + "#t=" + Bg(d.K),
            e = Zc("iframe", {
                src: e,
                width: d.width,
                height: d.height,
                "class": d.qb,
                "data-my_videos": "vimeo"
            });
        d.fb && e.setAttribute("loading", "lazy");
        var f = Math.random().toString(36).substring(7);
        a.g.vimeo[f] = e;
        le(e, d.Ca.width + "%", d.Ca.height + "%");
        e.style.visibility = "hidden";
        Cg(d.K);
        var k = d.K;
        k.parentNode && k.parentNode.insertBefore(e, k.nextSibling);
        a.s.u(e, "load", t(a.ic, a, f, d.K, Ag(d.K), Bg(d.K)))
    }
    n.ic = function(a, d, e) {
        var f = this.g.vimeo[a];
        this.g.vimeo[a] && (f.style.visibility = "", ed(d), Dg(f, e ? 1 : 0))
    };

    function Dg(a, d) {
        var e = JSON.stringify({
            method: "setVolume",
            value: d
        });
        a.contentWindow.postMessage(e, "*")
    }
    n.uc = function() {
        this.H = window.YT || {};
        this.H.hasOwnProperty("ready") && this.H.ready(t(this.tc, this))
    };
    n.tc = function() {
        qg = !0;
        y(this.D, function(a) {
            Eg(this, a)
        }, this);
        this.D = []
    };

    function Fg(a, d) {
        var e = {
            rel: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            "iv_load_policy:": 3,
            mute: 1,
            start: Bg(d.K),
            enablejsapi: 1,
            widget_referrer: window.location.href,
            origin: window.location.origin,
            loop: 1
        };
        D(d.K, "video") && Qa(e, "playlist", C(d.K, "video").split("/").pop());
        e.background = Ag(d.K) ? 0 : 1;
        var f = [];
        w(e, function(a, d) {
            f.push(d + "=" + a)
        }, a);
        return f.join("&")
    }

    function Eg(a, d) {
        var e = C(d.K, "video"),
            e = e + "?" + Fg(a, d) + "#t=" + Bg(d.K);
        d.K.attributes.getNamedItem("data-no-cookie") && !F.isCms && (e = e.replace("youtube.com", "youtube-nocookie.com"));
        e = Zc("iframe", {
            src: e,
            width: d.width,
            height: d.height,
            "class": d.qb,
            "data-my_videos": "youtube",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        });
        d.fb && e.setAttribute("loading", "lazy");
        var f = Math.random().toString(36).substring(7);
        a.g.youtube[f] = e;
        le(e, d.Ca.width + "%", d.Ca.height +
            "%");
        e.style.visibility = "hidden";
        Cg(d.K);
        var k = d.K;
        k.parentNode && k.parentNode.insertBefore(e, k.nextSibling);
        a.s.u(e, "load", t(a.vc, a, f, d.K, Ag(d.K), Bg(d.K)))
    }
    n.vc = function(a, d, e) {
        var f = this.g.youtube[a];
        this.g.youtube[a] && (f.style.visibility = "", ed(d), Dg(f, e ? 1 : 0))
    };

    function Bg(a) {
        var d = 0;
        D(a, "videoStart") && (d = (d = C(a, "videoStart")) ? parseInt(d, 10) : 0);
        return d
    }

    function Ag(a) {
        return D(a, "videoSound")
    }

    function Cg(a) {
        for (var d = !1; d = q(a.nextElementSibling) ? a.nextElementSibling : hd(a.nextSibling);) ed(d)
    };

    function Gg(a, d, e) {
        S.call(this, a, d, e);
        a = this.a;
        a.o = document.getElementsByClassName(jg.VideoLoaderManager.className);
        d = a.o;
        for (e = 0; e < d.length; e++)
            if ("IMG" === d[e].nodeName || "DIV" === d[e].nodeName)
                if (De) {
                    var f = d[e],
                        k = parseInt(C(f, "videoWidth"), 10),
                        l = parseInt(C(f, "videoHeight"), 10),
                        p = parseInt(C(f, "thumbnailWidth"), 10),
                        r = parseInt(C(f, "thumbnailHeight"), 10),
                        x = ug(p, r);
                    "DIV" === f.nodeName && D(f, "src") ? (k = Zc("img", {
                            src: C(f, "src"),
                            "class": x,
                            "data-video-width": k,
                            "data-video-height": l,
                            "data-thumbnail-width": p,
                            "data-thumbnail-height": r
                        }),
                        fd(k, f)) : f.className = x
                } else if (D(d[e], "video")) {
            var k = a,
                f = d[e],
                K = tg(d[e]);
            if (D(f, "video")) {
                var l = null,
                    oa = C(f, "video"),
                    p = f.src ? f.src : "",
                    r = parseInt(C(f, "videoWidth"), 10),
                    x = parseInt(C(f, "videoHeight"), 10),
                    $a = parseInt(C(f, "thumbnailWidth"), 10),
                    yf = parseInt(C(f, "thumbnailHeight"), 10),
                    dd = ug(r, x),
                    je = "1" === C(f, "lazy"),
                    ke = xg(f, r, x); - 1 != oa.indexOf("vimeo.com") ? (pg || (K = document.createElement("script"), K.src = jg.VideoLoaderManager.videoApi.vimeo, document.head.appendChild(K), pg = K, k.s.u(K, "load", t(k.pc, k))), p = {
                    qb: dd,
                    Ca: ke,
                    K: f,
                    poster: p,
                    width: r,
                    height: x,
                    fb: je
                }, rg ? yg(k, p) : k.F.push(p)) : -1 != oa.indexOf("youtube.com") ? (og || (K = document.createElement("script"), K.src = jg.VideoLoaderManager.videoApi.youtube, document.head.appendChild(K), og = K, k.s.u(K, "load", t(k.uc, k))), p = {
                    qb: dd,
                    Ca: ke,
                    K: f,
                    poster: p,
                    width: r,
                    height: x,
                    fb: je
                }, qg ? Eg(k, p) : k.D.push(p)) : (k = {
                    src: oa,
                    poster: p,
                    "class": dd,
                    "data-video-width": r,
                    "data-video-height": x,
                    "data-thumbnail-width": $a,
                    "data-thumbnail-height": yf
                }, K && (k.autoplay = !0), k.loop = !0, l = Zc("video", k));
                l && fd(l,
                    f)
            }
        }
        this.A()
    }
    v(Gg, S);
    Gg.prototype.A = function() {
        Gg.i.A.call(this);
        F.isCms || this.c.u(document.body, "wnd-redraw-done", t(this.h, this))
    };
    Gg.prototype.h = function() {
        sg(this.a);
        vg(this.a);
        wg(this.a)
    };
    Gg.prototype.J = function(a) {
        if ("scrollWindow" == a.getType() || "resizeWindow" == a.getType()) sg(this.a), vg(this.a);
        "resizeWindow" != a.getType() && "contentChangeFinished" != a.getType() || wg(this.a)
    };
    Q.f().register("wnd.static.VideoLoaderManager", P, ng, Gg);

    function Hg(a, d) {
        N.call(this, a, d);
        this.X = !1
    }
    v(Hg, N);

    function Ig(a, d, e) {
        if (!window.location.href.match(/[&?]screenshoter=1/) && (d = Sc(d), null != d)) {
            var f = !1;
            q(e) && "wnd.pc.Section" === e ? (e = d.querySelectorAll("img[class~=wnd-video-background]"), f = !0) : e = d.getElementsByTagName("IMG");
            y(e, function(a) {
                a.complete ? this.g(a, f) : vd(a, "load", t(this.g, this, a, f))
            }, a)
        }
    }
    Hg.prototype.Jb = function(a, d) {
        Ig(this, a, d)
    };
    Hg.prototype.g = function(a, d) {
        if (!a.srcset) {
            if (!a.hasAttribute("data-original-width") || !a.hasAttribute("data-original-height")) return null;
            var e = Jg(a);
            if (zb(a, "wnd-logo-img")) {
                var f = jd(a);
                f && (e = Jg(f))
            }
            var f = new hc(a.getAttribute("src")),
                k;
            k = D(a, "maxThumbnail") ? tc(new hc(C(a, "maxThumbnail"))) : Kg(f, e);
            k !== f.a && (kc(f, k), d || Lg(a, e), a.setAttribute("src", f.toString()), f = id(a), "PICTURE" === f.tagName && (f = Uc("source", null, f), y(f, function(a) {
                var d = new hc(a.getAttribute("srcset")),
                    f = Kg(d, e);
                kc(d, f);
                a.setAttribute("srcset",
                    d.toString())
            }, this)))
        }
    };

    function Kg(a, d) {
        var e = [],
            f = a.a.substr(1).split("/"),
            k = !1,
            l = a.b + "://" + a.c + "/";
        (l = l === F.localFilesPath || l + "_files/" === F.localFilesPath) || (k = a.b + "://" + a.c + "/", l = a.a.substr(1).split("/"), l = fa(l) && 1 < l.length ? l[0] : "", l = k = k + l + "/" === F.awsS3FilesPath);
        if (l) return k ? (e.push(f[0]), f.shift()) : pb(f, "_files") && (e.push(f[0]), f.shift()), e.push(f[0]), 0 < d && e.push(d), e.push(f[f.length - 1]), "/" + e.join("/");
        if (/\/files\/\w{2}\/\w{3}(\/\d+)?\/\w{6}\.\w+/.test(a.toString())) {
            for (;
                "files" !== f[0];) e.push(f[0]), f.shift();
            e.push("files");
            e.push(f[1]);
            e.push(f[2]);
            if (k = 0 < d) k = (new hc(a.a)).a, l = k.lastIndexOf("/") + 1, k = k.slice(l).replace(/\.+/g, "."), l = k.lastIndexOf("."), k = "svg" != (0 >= l ? "" : k.substr(l + 1));
            k && e.push(d);
            e.push(f[f.length - 1]);
            return "/" + e.join("/")
        }
        return a.a
    }

    function Jg(a) {
        var d = 0;
        a = a.clientWidth > a.clientHeight ? a.clientWidth : a.clientHeight;
        a <= jg.FilesystemPreviewSize.normal ? d = jg.FilesystemPreviewSize.normal : a > jg.FilesystemPreviewSize.normal && a <= jg.FilesystemPreviewSize.detail && (d = jg.FilesystemPreviewSize.detail);
        return d
    }

    function Lg(a, d) {
        if (a.hasAttribute("width") && a.hasAttribute("height")) {
            var e = parseInt(a.getAttribute("width"), 10),
                f = parseInt(a.getAttribute("height"), 10),
                k = parseInt(a.getAttribute("data-original-width"), 10),
                l = parseInt(a.getAttribute("data-original-height"), 10);
            0 === d && (d = k > l ? k : l);
            e > f ? (k = d, e = Math.round(d / e * f)) : (k = Math.round(d / f * e), e = d);
            a.setAttribute("width", k);
            a.setAttribute("height", e)
        }
    };

    function Mg(a, d, e) {
        S.call(this, a, d, e);
        this.h = new Set;
        window.location.href.match(/[&?]screenshoter=1/) || Ng(this)
    }
    v(Mg, S);
    Mg.prototype.J = function(a) {
        switch (a.getType()) {
            case "contentMove":
            case "photoGalleryChange":
                a.a && Og(a.a.b.c) && Ig(this.a, a.a.b.id);
                break;
            case "resizeWindow":
                Ng(this);
                break;
            case "sectionCreated":
            case "microTemplateCellCreated":
            case "gridCountChanged":
                a.a && Ig(this.a, a.a.b.id);
                break;
            case "dynamicContentChange":
                a.a && Ig(this.a, a.a.b.id)
        }
    };
    Mg.prototype.P = function(a) {
        if (a.a && "content_items" == a.b) switch (a.getType()) {
            case "dataCreate":
                var d = a.a.b.id;
                a = a.a.b.c;
                Og(a) && mg().create({
                    id: d,
                    type: a
                });
                break;
            case "dataDelete":
                d = a.a.b.id;
                Og(a.a.b.c) && mg()["delete"](d);
                break;
            case "dataUpdate":
                Og(a.a.b.c) && Ig(this.a, a.a.b.id)
        }
    };

    function Ng(a) {
        var d = lg().getData();
        null != d && w(d, function(a) {
            if (Og(a.type)) {
                if ("wnd.pc.ProductsZone" === a.type && !this.h.has(a.id)) {
                    var d = Sc(a.id);
                    null != d && d.addEventListener("wnd-redraw-done", this.a.Jb.bind(this, a.id, a.type));
                    this.h.add(a.id)
                }
                Ig(this.a, a.id, a.type)
            }
        }, a)
    }

    function Og(a) {
        return pb(jg.ImageSizeManager.allowTypes, a)
    }
    Q.f().register("wnd.static.ImageSizeManager", kg, Hg, Mg);

    function Pg(a, d, e) {
        G.call(this);
        this.b = d || O.f().get("project_info").getData()["currencies.template"];
        this.a = e || F.format[a || "fe"].CURRENCY.mask
    }
    v(Pg, G);

    function Qg(a, d) {
        var e = Rg(a, d);
        return a.b.replace("%", e)
    }

    function Rg(a, d) {
        d = parseFloat(d).toFixed(a.a.decimals);
        var e, f = "";
        0 < a.a.decimals ? (f = d.split(".", 2), e = f[0], f = null != f[1] ? f[1] : "") : e = d;
        var k = a.a.thousands;
        e = String(e).replace(/./g, function(a, d, e) {
            return d && "." !== a && 0 === (e.length - d) % 3 ? k + a : a
        });
        "" !== f && (e = e + a.a.point + f);
        return e
    };

    function Sg() {
        G.call(this)
    }
    v(Sg, G);

    function Tg(a) {
        return Rg(Ug(), a)
    }

    function Ug(a) {
        var d = Ra(F.format.fe.CURRENCY.mask);
        d.decimals = null != a ? a : F.currencyInfo.decimals;
        null != F.currencyInfo.decimalsSeparator && (d.point = F.currencyInfo.decimalsSeparator);
        null != F.currencyInfo.thousandsSeparator && (d.thousands = F.currencyInfo.thousandsSeparator);
        return new Pg(void 0, F.currencyInfo.mask, d)
    }

    function Vg(a) {
        if (F.currencyInfo.isDefault) return Ug(a);
        var d = F.format.fe.CURRENCY.mask;
        d.decimals = null != a ? a : F.currencyInfo.defaultDecimals;
        null != F.currencyInfo.defaultDecimalsSeparator && (d.point = F.currencyInfo.defaultDecimalsSeparator);
        null != F.currencyInfo.defaultThousandsSeparator && (d.thousands = F.currencyInfo.defaultThousandsSeparator);
        return new Pg(void 0, F.currencyInfo.defaultMask, d)
    };

    function Wg(a, d) {
        if (d) return "";
        var e = Xg(14),
            f = Xg(15),
            k = Xg(16),
            l = Xg(17),
            p = Xg(18),
            r = Xg(19);
        switch (a) {
            case "IN_STOCK":
                return e;
            case "3_DAYS":
                return f;
            case "7_DAYS":
                return k;
            case "14_DAYS":
                return l;
            case "MONTH":
                return p;
            case "MORE_THAN_MONTH":
                return r;
            default:
                return ""
        }
    };
    var Yg = {
        Debug: !1,
        DefaultEditZoneId: "wnd_EditZone_1",
        ContentItem: {
            fxDurationRemove: 500
        },
        ContentItemModel: {
            DataType: "content_items"
        },
        ContentItemView: {
            redrawTimeout: 100
        },
        PageZoneModel: {
            ZoneId: "wnd_PageZone_1",
            topOffset: 50
        },
        ContentZoneColModel: {
            DataType: "content_items"
        },
        ContentBlock: {
            DataType: "content_items",
            separableParts: {
                tagNames: "h1 h2 h3 h4 h5 h6 p blockquote pre address ul ol dl form fieldset table hr article aside audio canvas figcaption figure footer header hgroup output section video".split(" "),
                typeIsSeparable: "wnd_is_separable",
                typeSeparableIndex: "wnd_separable_index",
                typeSeparableId: "wnd_separable_id"
            },
            dropdownHeight: {
                changeStyle: 275,
                changeVariants: 275,
                listingCategory: 275,
                productCategory: 275
            },
            alignCssClass: {
                right: "wnd-align-right",
                left: "wnd-align-left",
                center: "wnd-align-center"
            }
        },
        ResizableBlock: {
            minHeight: 10,
            maxHeight: 50,
            minWidth: 200,
            maxWidth: 70
        },
        SpacingBlock: {
            minHeight: 0
        },
        EditZoneController: {
            textContentMaxLength: 1E3
        },
        InsertFormFieldPopup: {
            mvcId: "wnd_insert_form_field",
            formFields: {
                "wnd.pc.ShortTextField": {
                    cssType: "short-text-field"
                },
                "wnd.pc.LongTextField": {
                    cssType: "long-text-field"
                },
                "wnd.pc.RadioGroupField": {
                    cssType: "radio-group-field"
                },
                "wnd.pc.CheckboxGroupField": {
                    cssType: "checkbox-group-field"
                },
                "wnd.pc.SelectboxField": {
                    cssType: "selectbox-field"
                },
                "wnd.pc.EmailField": {
                    cssType: "email-field"
                },
                "wnd.pc.FileUploadField": {
                    cssType: "file-upload-field"
                },
                "wnd.pc.DateField": {
                    cssType: "date-field"
                },
                "wnd.pc.PhoneField": {
                    cssType: "phone-field"
                },
                "wnd.pc.NumberField": {
                    cssType: "number-field"
                },
                "wnd.pc.CheckboxField": {
                    cssType: "agreement"
                }
            }
        },
        InsertContentPopup: {
            mvcId: "wnd_insert_content",
            arrowHeight: 10,
            arrowOffset: 56,
            itemsPerGroup: 8,
            showAnimationTime: 500,
            hideAnimationTime: 400,
            blocks: {
                "wnd.pc.TextBlock": {
                    cssType: "wysiwyg"
                },
                "wnd.pc.ImageBlock": {
                    cssType: "image"
                },
                "wnd.pc.PhotoGalleryBlock": {
                    cssType: "photogallery"
                },
                "wnd.pc.VideoBlock": {
                    cssType: "video"
                },
                "wnd.pc.ProductsFeaturedZone": {
                    cssType: "products-featured-zone"
                },
                "wnd.pc.ProductsZone": {
                    cssType: "section-eshop_products"
                },
                "wnd.pc.HrLineBlock": {
                    cssType: "hrline"
                },
                "wnd.pc.SpacingBlock": {
                    cssType: "spacing"
                },
                "wnd.pc.MapBlock": {
                    cssType: "maps"
                },
                "wnd.pc.ButtonBlock": {
                    cssType: "button"
                },
                "dfc.form.contact": {
                    cssType: "contact-form",
                    contentBlockType: "wnd.pc.FormBlock",
                    contentIdentifier: "dfc.form.contact"
                },
                "dfc.form.blank": {
                    cssType: "blank-form",
                    contentBlockType: "wnd.pc.FormBlock",
                    contentIdentifier: "dfc.form.blank"
                },
                "wnd.pc.HtmlBlock": {
                    cssType: "html"
                },
                "wnd.pc.FileBlock": {
                    cssType: "file"
                },
                "wnd.pc.BlogRecentPosts": {
                    cssType: "recent-posts"
                }
            }
        },
        ContentResizeStripe: {
            width: 20,
            suffixId: "_contentResizeStripe",
            className: "wnd-resize-stripe",
            borderClassName: "wnd-resize-stripe-border",
            minWidth: 5,
            minDifference: 1,
            zIndex: 35,
            fadeInTime: 150,
            fadeOutTime: 300
        },
        HoverManager: {
            type: {
                PageBaseHover: {
                    dragDrop: "wnd.pc.PageZoneDragDrop",
                    "class": "wnd.pc.BaseHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                PageEditHover: {
                    dragDrop: "wnd.pc.PageZoneDragDrop",
                    "class": "wnd.pc.EditHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                PageVerticalEditHover: {
                    dragDrop: "wnd.pc.PageZoneDragDrop",
                    "class": "wnd.pc.VerticalEditHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                ListingItemHover: {
                    dragDrop: "wnd.pc.PageZoneDragDrop",
                    "class": "wnd.pc.BaseHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                ButtonHover: {
                    "class": "wnd.pc.ButtonHover",
                    properties: {
                        toolbox: {
                            arrow: !0,
                            overContainer: !0
                        }
                    }
                },
                MicroTemplateCellBaseHover: {
                    dragDrop: "wnd.pc.ContainerDragDrop",
                    "class": "wnd.pc.BaseHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                FormFieldBaseHover: {
                    dragDrop: "wnd.pc.ContainerDragDrop",
                    "class": "wnd.pc.BaseHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                },
                FormSubmitBaseHover: {
                    "class": "wnd.pc.BaseHover",
                    properties: {
                        toolbox: {
                            arrow: !0
                        }
                    }
                }
            },
            instNum: 2
        },
        Hover: {
            width: 20,
            maxSize: 20,
            className: "wnd-base wnd-block-hover",
            classNameRemove: "remove",
            classNameMove: "move",
            activeZIndex: {
                top: 34,
                bottom: 34,
                left: 34,
                right: 34
            },
            zIndexOffset: 2
        },
        ImageBlock: {
            minWidth: 100,
            defaultPaddingBottom: 72.48,
            directoryId: "50000001",
            sliderOffset: 30,
            rangeAreaOffset: 3,
            rangeAreaZindex: 37,
            snapOffset: 5
        },
        PhotoGalleryBlock: {
            limit: {
                min: 1,
                max: 20
            },
            dimension: {
                withImages: {
                    width: 740,
                    height: 450
                },
                withoutImages: {
                    width: 470,
                    height: 200
                }
            }
        },
        FileBlock: {
            directoryId: "50000000"
        },
        Section: {
            toolboxHeight: 32,
            toolboxTopOffset: 30,
            toolboxRightOffset: 10,
            animation: {
                start: 0,
                end: 150,
                expandTime: 400,
                collapseTime: 100
            },
            renderAnimation: {
                start: 0,
                expandTime: 2E3
            },
            fadeOverlay: {
                className: "wnd-section-fade-overlay",
                duration: 400,
                finalOpacity: .85
            }
        },
        PageWysiwyg: {
            editorSettings: {
                skin: "wnd",
                toolbar: {
                    spacing: {}
                },
                pageOffset: {
                    top: 65
                },
                replaceHeadings: !0,
                externalLinkAsTargetBlank: !0
            },
            allowedFormatsForBlock: {
                "wnd.pc.ProductDescriptionBlock": ["h3", "h4", "p"]
            },
            allowedFormats: "h1 h2 h3 h4 p blockquote".split(" "),
            replaceTags: {
                h1: "Heading1",
                h2: "Heading2",
                h3: "Heading3",
                h4: "Heading4",
                p: "Paragraph",
                blockquote: "Blockquote"
            }
        },
        WorkareaElementId: "wnd_workarea",
        DataObjectFactory: {
            content_items: "wnd.pc.ContentItemDataObject",
            temp_content_items: "wnd.pc.ContentItemDataObject"
        },
        DataCollectionFactory: {
            content_items: "wnd.pc.ContentItemDataCollection",
            temp_content_items: "wnd.pc.ContentItemDataCollection"
        },
        EditImageFormModel: {
            DataType: "content_items"
        },
        EditLinkFormModel: {
            DataType: "content_items"
        },
        EditFieldSettingsForm: {
            DataType: "content_items"
        },
        EditProductsZoneSettingsForm: {
            DataType: "content_items"
        },
        EditFormActionForm: {
            DataType: "content_items",
            height: 150
        },
        EditDefaultPageForm: {
            DataType: "content_items",
            height: 80
        },
        EditSelectboxFieldOptionsFormModel: {
            DataType: "content_items"
        },
        EditEmailNotificationFormModel: {
            DataType: "content_items"
        },
        BlogAdminPopup: {
            mvcId: "wnd_blog_admin",
            addButton: "blogAddArticle",
            editButton: "blogEditPost",
            DataType: "content_items",
            dataSettings: {
                filter: [{
                    prefix: "",
                    key: "listing_items.listing_page_id",
                    operator: "IN",
                    value: null,
                    suffix: ""
                }]
            }
        },
        EditMapFormModel: {
            DataType: "content_items"
        },
        EditVideoFormModel: {
            DataType: "content_items"
        },
        VideoUrlParser: {
            youtube: {
                url: "//www.youtube.com/embed/",
                thumbnail: "https://img.youtube.com/vi/"
            },
            vimeo: {
                url: "//player.vimeo.com/video/",
                thumbnail: "https://vimeo.com/api/v2/video/"
            }
        },
        EditHtmlFormModel: {
            DataType: "content_items"
        },
        AddContentManager: {
            priority: 0,
            minDistance: 10,
            defaultDistance: 15,
            maxDistance: 15,
            maxInnerDistance: 35,
            zIndex: 39,
            stripeOffset: 20,
            horizontalBoxOffset: -35,
            fadeInTime: 150,
            fadeOutTime: 150,
            innerFadeInTime: 150,
            innerFadeOutTime: 150,
            maxAnimatedStripes: 2,
            hoverOffset: 15
        },
        AddSectionManager: {
            maxDistance: 35,
            fadeInTime: 150,
            fadeOutTime: 450,
            fadeOutExp: 7,
            innerFadeInTime: 150,
            innerFadeOutTime: 600
        },
        AddContentContainerManager: {
            priority: 1,
            vertical: {
                minDistance: 10,
                defaultDistance: 14,
                maxDistance: 30
            },
            horizontal: {
                minDistance: 3,
                defaultDistance: 20,
                maxDistance: 8
            },
            fadeInTime: 125,
            fadeOutTime: 150,
            innerFadeInTime: 125,
            innerFadeOutTime: 150
        },
        LayoutPopup: {
            mvcId: "wnd_change_layout",
            viewedImages: 8
        },
        SystemFooterBlock: {
            DataType: "project_info",
            packages: {
                available: ["mini", "standard", "professional"],
                canBeEdit: "professional"
            }
        },
        WelcomePopup: {
            mvcId: "wnd_welcome"
        },
        DefaultPopupProperties: {
            "wnd.pc.AddListingItemPopup": {
                width: 470
            },
            "wnd.pc.EditImagePopup": {
                blockId: "=blockId",
                imageId: "=imageId",
                directoryId: "=dirId",
                width: 550
            },
            "wnd.pc.EditSectionPopup": {
                sectionId: "=sectionId",
                width: 302
            },
            "wnd.pc.HtmlPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.BlogAdminPopup": {
                zoneId: "=zoneId",
                width: 920,
                height: 548
            },
            "wnd.pc.NewMapPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.MapPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.PhotoGalleryPopup": {
                blockId: "=blockId",
                isEmpty: !0,
                width: 740,
                height: 572
            },
            "wnd.pc.SelectMediaPopup": {
                directoryId: "=dirId",
                onClick: "confirm",
                multipleUpload: !1,
                width: 470,
                height: 322
            },
            "wnd.pc.NewVideoPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.NewButtonPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.NewProductsPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.NewProductsFeaturedPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.NewProductSimplePopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.NewHtmlPopup": {
                blockId: "=blockId",
                width: 470
            },
            "wnd.pc.WelcomePopup": {
                width: 700
            },
            "wnd.pc.GalleryImageEdit": {
                width: 370
            },
            "wnd.pc.LayoutPopup": {
                width: 326
            },
            "wnd.pc.SocialIconsEditPopup": {
                blockId: "=blockId",
                width: 525
            },
            "wnd.pc.MoveListingItemPopup": {
                width: 470
            },
            "wnd.pc.MoveBlockIntoPagePopup": {
                width: 470
            }
        },
        CreateSectionServerRequest: {
            type: "createSection"
        },
        CreatePageServerRequest: {
            type: "createPage"
        },
        CopyPageServerRequest: {
            type: "copyPage"
        },
        CreateListingServerRequest: {
            type: "createListing"
        },
        CopyListingItemServerRequest: {
            type: "copyListingItem"
        },
        CreateMicroTemplateCellServerRequest: {
            type: "createMicroTemplateCell"
        },
        CreateFormFieldServerRequest: {
            type: "createFormField"
        },
        CreateFormServerRequest: {
            type: "createForm"
        },
        CreateProductSimpleBlockServerRequest: {
            type: "createProductSimpleBlock"
        },
        CreateBlockServerRequest: {
            type: "createBlock"
        },
        CreateDynamicZoneServerRequest: {
            type: "createDynamicZone",
            variant: {
                "wnd.pc.BlogRecentPosts": "basic",
                "wnd.pc.BlogZone": "basic"
            }
        },
        DynamicZoneUpdateRequest: {
            type: "dynamicZoneUpdate"
        },
        FulltextSearchRequest: {
            type: "fulltextSearch"
        },
        ProductVariantsUpdateRequest: {
            type: "productVariantsUpdate"
        },
        ReplaceImageWithPlaceholderServerRequest: {
            type: "replaceImageWithPlaceholder"
        },
        DeleteFormDataServerRequest: {
            type: "deleteFormData"
        },
        RefreshThumbnailRequest: {
            type: "refreshThumbnail"
        },
        ChangeAllSectionsStyleRequest: {
            type: "changeAllSectionsStyle"
        },
        StaticServerDataRequest: {
            type: "staticServerData"
        },
        NewContentItemPopupsManager: {
            "wnd.pc.ImageBlock": {
                mvcType: "wnd.pc.SelectMediaPopup",
                properties: {
                    directoryId: "50000001",
                    fileGroup: "image"
                }
            },
            "wnd.pc.VideoBlock": {
                mvcType: "wnd.pc.NewVideoPopup"
            },
            "wnd.pc.MapBlock": {
                mvcType: "wnd.pc.NewMapPopup"
            },
            "wnd.pc.ButtonBlock": {
                mvcType: "wnd.pc.NewButtonPopup"
            },
            "wnd.pc.ProductsZone": {
                mvcType: "wnd.pc.NewProductsPopup"
            },
            "wnd.pc.ProductSimpleBlock": {
                mvcType: "wnd.pc.NewProductSimplePopup"
            },
            "wnd.pc.ProductsFeaturedZone": {
                mvcType: "wnd.pc.NewProductsFeaturedPopup"
            },
            "wnd.pc.HtmlBlock": {
                mvcType: "wnd.pc.NewHtmlPopup"
            },
            "wnd.pc.FileBlock": {
                mvcType: "wnd.pc.SelectMediaPopup",
                properties: {
                    directoryId: "50000000",
                    fileGroup: "file"
                }
            }
        },
        PhotoGalleryListContent: {
            fxDurationRemove: 500,
            width: "100%"
        },
        AddContentItem: {
            startOpacity: 0,
            endOpacity: 1,
            fxDuration: 1500
        },
        ModuleDataEventFilter: "content_items gui_pages filesystem_files my_videos fe_languages server_projects project_info listing_items e_product e_category".split(" "),
        ContainerDropStripe: {
            DDBoxHorizMaxInnerPos: .5
        },
        EditSection: {
            groups: {
                "default": "SectionEditDefault",
                sectionEffects: "SectionEditEffects",
                layoutEffects: "LayoutEditEffects"
            },
            heightCorrection: 10
        },
        InlineTextBlock: {
            fontSizePrefix: "wnd-font-size-",
            fontChangeStep: 10,
            fontSizePercentageMinimal: 10,
            fontSizePxMinimal: 12,
            wrapLimits: [80, 60, 40],
            waitForResize: {
                time: 50,
                count: 10
            }
        },
        GalleryImageEditForm: {
            width: 230
        },
        EditMapForm: {
            width: 360
        },
        NewEditForm: {
            width: "100%",
            height: "115px"
        },
        WysiwygBlock: {
            topOffset: 110,
            className: "wnd-touchwysiwyg",
            placeholder: {
                visibilityWidth: 85
            }
        },
        ImageDetailPopupContent: {
            width: "140px",
            height: "200px"
        },
        SelectMediaContent: {
            width: "100%",
            height: 200
        },
        SelectMediaFooter: {
            height: 66
        },
        SocialIconsImage: {
            width: 140,
            height: 200
        },
        SocialIconsEditForm: {
            width: 365
        },
        WysiwygLinkForm: {
            width: "100%"
        },
        "wnd.pc.CheckboxGroupOptions": {
            optionMVCType: "wnd.pc.CheckboxGroupOption"
        },
        "wnd.pc.RadioGroupOptions": {
            optionMVCType: "wnd.pc.RadioGroupOption"
        },
        "wnd.pc.FromBlock": {
            placeholder: {
                height: 100
            },
            toolbox: {
                expandedArea: {
                    height: 70
                }
            }
        },
        "wnd.pc.Field": {
            placeholder: {
                height: 60
            }
        },
        "wnd.pc.GroupField": {
            paddingBottom: 20
        },
        frontendElements: {
            "wnd.pc.FeFooter": "fe_footer"
        },
        NewListingItemForm: {
            width: "100%",
            height: 100
        },
        MoveListingItemForm: {
            width: "100%",
            height: 100
        },
        ListingZone: {
            activeItem: {
                className: "wnd-active-listing-zone"
            },
            disabled: {
                className: "wnd-disabled"
            },
            maxItemsOnPage: 30
        },
        ProductsZone: {
            gridCountLimits: {
                "grid-2": 20,
                "grid-3": 18,
                "grid-4": 24,
                "grid-5": 20,
                "grid-6": 24
            }
        },
        ProductsFeaturedZone: {
            maxItemsOnPage: 8
        },
        PerexBlock: {
            wordsLimit: 60,
            minChars: 30,
            charsLimit: 350
        },
        LogoBlock: {
            styleClasses: {
                withText: "wnd-logo-with-text",
                vector: "wnd-image-vector",
                "img-1-1": "wnd-iar-1-1",
                "img-2-1": "wnd-iar-2-1",
                "img-3-1": "wnd-iar-3-1",
                "img-4-1": "wnd-iar-4-1",
                "img-max": "wnd-iar-max"
            }
        },
        AddContentBlock: {
            width: 480,
            blocks: {
                "wnd.pc.TextBlock": {
                    svg: "addContent.basic"
                },
                "wnd.pc.ImageBlock": {
                    svg: "addContent.image"
                },
                "wnd.pc.PhotoGalleryBlock": {
                    svg: "addContent.photogallery"
                },
                "wnd.pc.VideoBlock": {
                    svg: "addContent.video"
                },
                "wnd.pc.ProductsFeaturedZone": {
                    svg: "addContent.productList"
                },
                "wnd.pc.ProductsZone": {
                    svg: "addContent.productList"
                },
                "wnd.pc.HrLineBlock": {
                    svg: "addContent.hrLine"
                },
                "wnd.pc.SpacingBlock": {
                    svg: "addContent.spacing"
                },
                "wnd.pc.MapBlock": {
                    svg: "addContent.map"
                },
                "wnd.pc.ButtonBlock": {
                    svg: "addContent.button"
                },
                "dfc.form.contact": {
                    svg: "addContent.contactForm",
                    contentBlockType: "wnd.pc.FormBlock",
                    contentIdentifier: "dfc.form.contact"
                },
                "dfc.form.blank": {
                    svg: "addContent.blankForm",
                    contentBlockType: "wnd.pc.FormBlock",
                    contentIdentifier: "dfc.form.blank"
                },
                "wnd.pc.HtmlBlock": {
                    svg: "addContent.html"
                },
                "wnd.pc.FileBlock": {
                    svg: "addContent.file"
                },
                "wnd.pc.BlogRecentPosts": {
                    svg: "addContent.recentPosts"
                }
            }
        },
        AddSectionBlock: {
            width: 480,
            sectionSvg: {
                "default": "addSection.default",
                text_image: "addSection.textImage",
                two_cols: "addSection.twoColumns",
                two_columns: "addSection.twoColumns",
                heading: "addSection.heading",
                eshop_products: "addContent.productList",
                services: "addSection.services",
                pricelist: "addSection.pricelist",
                blog_recent_posts: "addContent.recentPosts",
                order: "addSection.order",
                cta: "addSection.headingButton",
                two_cols_image: "addSection.twoColumns",
                three_cols_image: "addSection.threeColumns",
                photogallery: "addSection.photogallery",
                contact: "addSection.contact",
                products: "addSection.portfolio",
                newsletter: "addSection.newsletter",
                testimonials: "addSection.testimonial",
                reservation: "addSection.reservation",
                faq: "addSection.faq"
            }
        },
        AddFormFieldBlock: {
            width: 480,
            formFields: {
                "wnd.pc.ShortTextField": {
                    svg: "formField.shortTextField"
                },
                "wnd.pc.LongTextField": {
                    svg: "formField.longTextField"
                },
                "wnd.pc.RadioGroupField": {
                    svg: "formField.radioGroupField"
                },
                "wnd.pc.CheckboxGroupField": {
                    svg: "formField.checkboxGroupField"
                },
                "wnd.pc.SelectboxField": {
                    svg: "formField.selectboxField"
                },
                "wnd.pc.EmailField": {
                    svg: "formField.emailField"
                },
                "wnd.pc.FileUploadField": {
                    svg: "formField.fileUploadField"
                },
                "wnd.pc.DateField": {
                    svg: "formField.dateField"
                },
                "wnd.pc.PhoneField": {
                    svg: "formField.phoneField"
                },
                "wnd.pc.NumberField": {
                    svg: "formField.numberField"
                },
                "wnd.pc.CheckboxField": {
                    svg: "formField.agreement"
                }
            }
        },
        ModifierFactory: {
            upperCase: "wnd.pc.Modifier.ChangeCase",
            upperCaseFirst: "wnd.pc.Modifier.ChangeCase",
            lowerCase: "wnd.pc.Modifier.ChangeCase",
            slice: "wnd.pc.Modifier.Slice"
        },
        dfcTextCollection: {
            datatype: "dfc_text",
            searchColumn: "text",
            keyColumn: "identifier",
            filter: [{
                prefix: "",
                key: "deprecated",
                operator: "=",
                value: !1,
                suffix: ""
            }]
        }
    };

    function Zg(a) {
        Ff.call(this, a);
        this.data = {
            pageId: F.page.id,
            pageDataType: "gui_pages",
            pageTemplateId: F.page.template.id,
            langId: F.page.langId
        };
        F.isListingDetail && (this.data.pageId = F.listing_item.id, this.data.pageDataType = "listing_items", this.data.pageTemplateId = F.listing_page.template_id, this.data.isListingDetail = F.isListingDetail, this.data.listingIdentifier = F.listing_item.identifier);
        F.isProductDetail && (this.data.pageId = F.e_product.id, this.data.pageDataType = "e_product", this.data.isProductDetail = F.isProductDetail,
            this.data.productIdentifier = F.e_product.identifier)
    }
    v(Zg, Ff);

    function $g(a) {
        nf.call(this, a)
    }
    v($g, Df);
    $g.prototype.b = function(a, d) {
        var e = $g.i.b.call(this, a, d);
        if ("undefined" != typeof d.parentId) {
            var f = d.parentId,
                f = of (this).getData(f);
            if (d && (d.before || d.after)) {
                var k = f.content.indexOf(d.before ? d.before : d.after);
                d.after && k++;
                f.content.splice(k, 0, a.id)
            } else "undefined" == typeof f.content && (f.content = []), f.content.push(a.id)
        }
        return e
    };
    $g.prototype.c = function(a) {
        var d = of (this).getData(a);
        if (d && q(d.content)) {
            var e = [];
            q(d.contentMap) ? (w(d.content, function(a) {
                e = tb(e, a)
            }), xb(e)) : e = d.content;
            y(e, t(function(a) {
                this["delete"](a)
            }, this))
        }
        $g.i.c.call(this, a);
        (d = ah(this, a)) && d.content && (a = d.content.indexOf(a), d.content.splice(a, 1))
    };

    function ah(a, d) {
        var e = of (a).getData(),
            f = {},
            k = null,
            l;
        for (l in e)
            if (fa(e[l].content) && (f = e[l].content, -1 != f.indexOf(d))) {
                k = e[l];
                break
            }
        return k
    }
    $g.prototype.G = function() {
        $g.i.G.call(this)
    };
    $g.prototype.g = function(a, d, e) {
        var f = e ? e.parentId : null,
            k = e ? e.before : null,
            l = e ? e.after : null;
        f || k || l ? (f ? ((d = ah(this, a)) && d.content && sb(d.content, a), f = of (this).getData(f)) : f = ah(this, a), k || l ? (sb(f.content, a), k = f.content.indexOf(k ? k : l), l && k++, vb(f.content, k, 0, a)) : ("undefined" == typeof f.content && (f.content = []), f.content.push(a))) : $g.i.g.call(this, a, d, e)
    };
    qf.f().register("wnd.pc.ContentItemDataObject", $g);

    function bh(a) {
        var d = a.text,
            e = ae,
            f, k = "";
        switch (ka(f = a.ma) ? f.toString() : f) {
            case "wnd.pc.ListingZone":
            case "wnd.pc.BlogZone":
                f = Xg(6);
                k += f;
                break;
            case "wnd.pc.ProductsZone":
            case "wnd.pc.ProductsFeaturedZone":
                f = Xg(7), k += f
        }
        k = '<div class="wnd-empty-placeholder"><p><strong>' + ae(k) + "</strong><br />";
        if (d) a = $d(d);
        else {
            var l, d = "";
            switch (ka(l = a.ma) ? l.toString() : l) {
                case "wnd.pc.ListingZone":
                case "wnd.pc.BlogZone":
                    a = Xg(8);
                    d += a;
                    break;
                case "wnd.pc.ProductsZone":
                case "wnd.pc.ProductsFeaturedZone":
                    a = Xg(9), d += a
            }
            a = ae(d)
        }
        return e(k +
            a + "</p></div>")
    };

    function W() {}
    W.map = null;
    W.styles = null;
    W.formatters = null;
    W.blockSettings = null;
    W.variantSettings = null;
    W.colorSets = null;
    W.colorSets = null;

    function ch(a, d) {
        if (null === d || "undefined" === typeof d) d = {};
        var e = "render_" + a.replace(/\./g, "_"),
            f = q(d.variant) ? d.variant : "default";
        return W.hasOwnProperty(e) ? W[e](d, f) : ""
    }
    u("wnd.tpl.T", W);
    u("wnd.tpl.T.as", function(a) {
        var d = "";
        w(a, function(a, f) {
            "boolean" == typeof a ? !0 === a && (d += " " + dh(f)) : d += " " + dh(f) + '="' + dh(a) + '"'
        });
        return d
    });

    function eh(a, d) {
        if ("" === d) return a;
        d = eb(d);
        return a.replace(new RegExp("^" + d + "+|" + d + "+$", "g"), "")
    }
    u("wnd.tpl.T.a", function(a, d, e, f, k) {
        a = k(a);
        a = eh(a, e);
        return "" === a ? "" : " " + dh(d) + '="' + dh(a) + '"'
    });
    u("wnd.tpl.T.aV", function(a, d, e) {
        a = e(a);
        a = eh(a, d);
        return "" === a ? "" : dh(d) + dh(a)
    });

    function dh(a) {
        a = Wa("" + a);
        return a = a.replace(/&#39;/g, "'")
    }
    u("wnd.tpl.T.e", dh);
    u("wnd.tpl.T.j", function(a, d) {
        var e = d ? d : "";
        return fa(a) ? a.join(e) : a
    });
    u("wnd.tpl.T.i", function(a, d) {
        fa(a) || (a = []);
        for (var e = "", f = 0; f < a.length; f++) e += d(a[f]);
        return e
    });
    u("wnd.tpl.T.eD", function(a, d, e, f) {
        var k = !a;
        ga(a) ? k = qb(a) : ka(a) && (k = Pa(a));
        switch (e) {
            case "wnd.pc.PhotoGalleryBlock":
                d = function() {
                    var a = "",
                        d = Xg(12),
                        e = Xg(13);
                    return ae(a + ('<div class="wnd-empty-placeholder"><p><strong>' + d + "</strong><br />" + e + "</p></div>"))
                };
                break;
            case "wnd.pc.ShoppingCartTable":
                d = function() {
                    var a = E("wnd.pc.ShoppingCartTable.placeholder.title"),
                        d = E("wnd.pc.ShoppingCartTable.placeholder.text");
                    return ae('<div class="wnd-empty-placeholder"><p><strong>' + $d(a) + "</strong><br />" + $d(d) + "</p></div>")
                };
                break;
            case "wnd.pc.ListingZone":
            case "wnd.pc.BlogZone":
            case "wnd.pc.ProductsZone":
            case "wnd.pc.ProductsFeaturedZone":
                d = function() {
                    var a = "";
                    if (q(f)) {
                        var d = {
                            ma: e
                        };
                        if ("notExists" === f.placeholderType) var a = d.ma,
                            d = "",
                            k = Xg(10),
                            d = d + bh({
                                text: be("" + k),
                                ma: a
                            }),
                            a = ae(d);
                        else "noItems" === f.placeholderType ? a = ae(bh(d)) : "noProductsInCategory" === f.placeholderType && (a = d.ma, d = "", k = Xg(11), d += bh({
                            text: be("" + k),
                            ma: a
                        }), a = ae(d))
                    }
                    return a
                };
                break;
            case "wnd.pc.EditZone":
                d = function() {
                    return ""
                }
        }
        return fh(k, d)
    });

    function fh(a, d) {
        return a ? d() : ""
    }
    u("wnd.tpl.T.c", fh);
    u("wnd.tpl.T.mL", function(a, d, e) {
        if (!ka(a) || Pa(a)) return "";
        w(a, function(a) {
            a.callback = d
        });
        q(e) && null !== e ? e.level += 1 : e = {
            level: 1,
            active: !1,
            activePath: !1
        };
        e.items = Ma(a);
        return d(e)
    });
    u("wnd.tpl.T.mC", function(a, d, e, f, k) {
        switch (d) {
            case "active":
                return a.active ? "wnd-active" : "";
            case "activePath":
                return a.activePath ? "wnd-active-path" : "";
            case "hasChildren":
                return 0 < a.children.length ? "wnd-with-submenu" : "";
            case "level":
                switch (e = Va(e), f = parseInt(f, 10), k) {
                    case ">":
                        return a.level > f ? e : "";
                    case "<":
                        return a.level < f ? e : "";
                    default:
                        return a.level == f ? e : ""
                }
            case "homepage":
                return a.homepage ? "wnd-homepage" : "";
            default:
                return ""
        }
    });
    u("wnd.tpl.T.fL", function(a, d, e) {
        if (!ka(a) || Pa(a)) return "";
        w(a, function(a) {
            a.callback = d
        });
        q(e) && null !== e ? e.level += 1 : e = {
            level: 1
        };
        e.items = Ma(a);
        return d(e)
    });
    u("wnd.tpl.T.fC", function(a, d, e, f, k) {
        switch (d) {
            case "withSubcategory":
                return 0 < a.children.length ? "wnd-with-subcategory" : "";
            case "level":
                switch (e = Va(e), f = parseInt(f, 10), k) {
                    case ">":
                        return a.level > f ? e : "";
                    case "<":
                        return a.level < f ? e : "";
                    default:
                        return a.level == f ? e : ""
                }
        }
        return ""
    });
    W.variants = null;
    u("wnd.tpl.T.cI", function(a, d, e) {
        return '<div id="' + gh(d, e, a["contentElement.attributes"].id) + '"></div>'
    });

    function gh(a, d, e) {
        return "contentElements_" + a.replace(/\./g, "_") + "_" + e + "_" + d
    }
    u("wnd.tpl.T.t", function(a) {
        return q(F.labels[a]) ? F.labels[a] : ""
    });
    u("wnd.tpl.T.gc", function(a) {
        switch (a) {
            case "wnd-cms":
                return "wnd-cms" + ("mobile" === F.mode ? " wnd-mobile-cms" : "");
            case "wnd-multilang":
                return H.project_info.isMultilanguage ? "wnd-multilang" : "";
            case "wnd-fonts-fallback":
                return F.isFontsFallbackEnable ? "wnd-fonts-fallback" : "";
            case "wnd-eshop":
                return F.isEshop ? "wnd-eshop" : "";
            default:
                return ""
        }
    });
    W.im = W.a;
    W.is = W.g;
    W.iS = W.c;
    W.iM = W.b;
    W.sections = null;
    W.layouts = null;
    W.fonts = null;
    W.microTemplates = null;

    function hh(a, d) {
        var e = document.createEvent("Event");
        e.initEvent(a, !0, !0);
        d.dispatchEvent(e)
    };

    function ih(a, d) {
        N.call(this, a, d);
        this.g = null
    }
    v(ih, N);
    ih.prototype.S = function() {};

    function jh(a) {
        null === a.g && (a.g = document.querySelectorAll("[data-wnd_product_add_to_cart]"));
        return a.g
    };

    function kh(a, d, e) {
        P.call(this, a, d, e);
        this.Y = !1
    }
    v(kh, P);

    function lh(a, d) {
        N.call(this, a, d);
        this.b = this.g = null
    }
    v(lh, N);
    lh.prototype.S = function() {};
    lh.prototype.j = function() {
        null === this.b && (this.b = Sc("wnd_cookie_bar"));
        null === this.b && (this.b = Sc("cookiebar"), this.a.Y = !0);
        return this.b
    };
    lh.prototype.aa = function() {
        lh.i.aa.call(this);
        0 === window.scrollY && window.scrollTo(0, 1)
    };

    function mh(a, d, e) {
        S.call(this, a, d, e);
        a = nh("identifier");
        this.j() && !Ia.get(a) && (this.a.aa(), a = new J("keenCookieBarShow", this), M(this, a))
    }
    v(mh, S);
    mh.prototype.A = function() {
        mh.i.A.call(this);
        if (null != this.j() && this.b.Y) this.c.u(this.j(), "click", this.h, !0);
        else {
            var a;
            a = this.a;
            null === a.g && (a.g = Sc("wnd_cookie_bar_close"));
            a = a.g;
            null != a && this.c.u(a, "click", this.l)
        }
    };
    mh.prototype.l = function() {
        this.a.qa();
        oh()
    };

    function nh(a) {
        return ph.CookieBar.cookies[a]
    }
    mh.prototype.h = function(a) {
        a = a.target;
        var d = null;
        do {
            if (D(a, "action")) {
                d = C(a, "action");
                if (fa(void 0) && pb(void 0, d)) continue;
                break
            }
            if (a === this.j()) break
        } while (a = a.parentNode);
        a = {
            target: a,
            action: d
        };
        if (null !== a.action) {
            d = null;
            switch (a.action) {
                case "accept-necessary":
                    d = new J("keenCookieBarAcceptNecessary", this);
                    M(this, d);
                    qh(this, {
                        necessary: 1
                    });
                    break;
                case "accept-all":
                    d = new J("keenCookieBarAcceptAll", this);
                    M(this, d);
                    qh(this, {
                        necessary: 1,
                        functional: 1,
                        performance: 1,
                        marketing: 1
                    });
                    break;
                case "advanced-save":
                    rh(this);
                    break;
                default:
                    return
            }
            location.reload()
        }
    };

    function rh(a) {
        var d = a.j().querySelectorAll("input[type=checkbox]"),
            e = {};
        y(d, function(a) {
            a.checked && (e[a.getAttribute("name")] = 1)
        }, a);
        qh(a, e)
    }

    function qh(a, d) {
        Ga(Ia, String(nh("accepted")), JSON.stringify(d), Number(nh("age")), "/");
        oh();
        sh(a, d);
        var e = null !== d && "functional" in d,
            f = null !== d && "performance" in d,
            k = {};
        try {
            null !== d && "marketing" in d && (k.ad_storage = "granted", k.analytics_storage = "granted"), e && (k.functionality_storage = "granted", k.personalization_storage = "granted", k.security_storage = "granted"), f && (k.analytics_storage = "granted"), ja(window.gtm) && window.gtm("consent", "update", k)
        } catch (l) {}
        th(a, d)
    }

    function oh() {
        Ga(Ia, nh("identifier"), "1", nh("age"), "/")
    }

    function sh(a, d) {
        var e = Oa(d, function(a, d) {
            return "marketing" === d
        }, a);
        try {
            e && ja(window.gtag) && window.gtag("consent", "update", {
                ad_storage: "granted",
                analytics_storage: "granted"
            })
        } catch (f) {}
    }

    function th(a, d) {
        var e = Oa(d, function(a, d) {
            return "marketing" === d
        }, a);
        try {
            e && ja(window.fbq) && window.fbq("consent", "grant")
        } catch (f) {}
    }
    Q.f().register("wnd.fe.CookieBar", kh, lh, mh);

    function uh(a, d, e) {
        P.call(this, a, d, e)
    }
    v(uh, P);

    function vh(a, d) {
        N.call(this, a, d);
        this.X = !1;
        this.s = this.o = this.H = this.Y = this.N = this.F = this.D = this.da = this.g = null
    }
    v(vh, N);

    function wh(a, d) {
        var e;
        null === a.da && (a.da = B(xh("productPrice")));
        if (e = a.da) e.innerText = d
    }

    function yh(a, d, e) {
        var f;
        null === a.F && (a.F = B(xh("comparativePriceArea")));
        f = a.F;
        Eb(f, xh("empty"), !e);
        pe(f, e);
        null === a.D && (a.D = B(xh("comparativePrice")));
        if (a = a.D) a.innerText = d
    }

    function zh(a, d) {
        var e;
        null === a.N && (a.N = B(xh("prefixText")));
        e = a.N;
        null != e && pe(e, d);
        null === a.Y && (a.Y = B(xh("suffixText")));
        e = a.Y;
        null != e && pe(e, d)
    }

    function Ah(a, d) {
        var e;
        null === a.H && (a.H = Bh(a.g, "wnd-price-info-container"));
        e = a.H;
        var f = C(a.g, "wndPriceInfoTemplate");
        a.o = a.o || Bh(e, "wnd-product-info-shipping");
        a.s = a.s || Bh(e, "wnd-product-info-vat-msg");
        for (var k = Ye("dualCurrency") && "EUR" === F.currencyInfo.code ? (d.wb || null) && f.replace("{value}", d.wb) : null, l = Ye("eshopPriceDisplaySettings") && H.eshopSettings.ESHOP_SETTINGS_DISPLAY_PRICE_WITHOUT_VAT ? (d.Fb || null) && f.replace("{value}", d.Fb) : null, f = (d.Ib || null) && f.replace("{value}", d.Ib), p; p = e.firstChild;) e.removeChild(p);
        Ch(e, [k, a.s, a.o, l, f])
    }

    function Ch(a, d) {
        y(d, function(d) {
            d instanceof Element ? a.appendChild(d) : ha(d) && a.insertAdjacentHTML("beforeend", d)
        })
    }

    function Bh(a, d) {
        return a.querySelector("[data-wnd-identifier=" + d + "]")
    }

    function xh(a) {
        return ph.EshopProductManager.classNames[a]
    };

    function Dh(a, d) {
        N.call(this, a, d);
        this.X = !1;
        this.ba = null
    }
    v(Dh, N);
    Dh.prototype.C = function(a, d) {
        var e = Eh(this),
            f = ie(a).y - ph.template.topOffset,
            k = ne(a),
            l = fe(),
            p = l.y;
        f < e.top || d ? p = l.y + f - e.top : f + k.height > e.height && (p = l.y + f + k.height + e.top - e.height);
        window.scrollTo(l.x, parseInt(p, 10))
    };

    function Eh(a) {
        var d = Xc(),
            e = new Sb(0, 0, d.width, d.height);
        y(Fh(a), function(a) {
            var d = ie(a);
            a = ne(a);
            d = new Sb(d.x, d.y, a.width, a.height);
            (a = Tb(e, d)) && 0 < a.width && 0 < a.height && (d = e.difference(d), e = d[0], y(d, function(a) {
                if (e.height < a.height || e.width < a.width) e = a
            }, this))
        }, a);
        return e
    }

    function Fh(a) {
        null === a.ba && (a.ba = document.getElementsByClassName(ph.template.classNames.fixed));
        return a.ba
    }

    function Gh(a, d) {
        a && Eb(a, Hh(), d)
    }

    function Ih(a) {
        for (var d = ph.template.classNames.formField; a && !zb(a, d);) a = a.parentNode;
        return a
    }

    function Hh() {
        return ph.template.classNames.invalidFormField
    };

    function Jh(a, d) {
        N.call(this, a, d);
        this.o = this.g = this.s = this.F = null
    }
    v(Jh, N);
    Jh.prototype.S = function() {};

    function Kh(a) {
        var d = Lh(a),
            e = Mh(a);
        e && d && (e.appendChild(d), y(yb(d), function(a) {
            -1 != a.indexOf("section-") && Db(d, a)
        }, a))
    }

    function Nh() {
        return ph.SocialButtons.colorscheme.light
    }

    function Oh(a) {
        null === a.F && (a.F = document.querySelector("[data-wnd_last_section]"));
        return a.F
    }

    function Mh(a) {
        var d = Oh(a);
        null === a.s && d && (a.s = B("section-inner", d) || B("s-c", d));
        return a.s
    }

    function Lh(a) {
        null === a.g && (a.g = document.querySelector("[data-wnd_social_buttons]"), a.g || (a.g = B("blog-detail-footer-01")));
        return a.g
    };

    function Ph(a, d, e) {
        S.call(this, a, d, e);
        (a = Lh(this.a)) && pe(a, !1);
        Kh(this.a);
        (a = Lh(this.a)) && pe(a, !0);
        d = this.a;
        null === d.o && (d.o = Sc("wnd-fb-comments"));
        if (a = d.o) {
            d = Oh(d);
            e = 1;
            D(d, "wnd_brightness") && (e = parseFloat(C(d, "wnd_brightness")));
            d = e;
            e = Nh();
            D(a, "colorscheme") && (e = C(a, "colorscheme"));
            var f = Nh();
            if (.5 >= d)
                if (ha("background-color")) ce(a, "white", "background-color");
                else
                    for (var k in "background-color") ce(a, "background-color" [k], k);
            f != e && (te(a, "colorscheme", f), q(window.FB) && q(window.FB.XFBML) && ja(window.FB.XFBML.parse) &&
                window.FB.XFBML.parse(a))
        }
    }
    v(Ph, S);
    Q.f().register("wnd.fe.SocialButtons", P, Jh, Ph);

    function Qh() {
        I.call(this);
        this.la = null;
        this.events = {};
        Rh(this);
        this.c();
        return this
    }
    v(Qh, I);

    function Rh(a) {
        var d = a.a();
        a.la = ja(window[d]) ? window[d] : t(function() {}, a)
    }
    Qh.prototype.send = function(a, d) {
        var e = null != this.events[a] ? this.events[a] : null;
        null === e || this.b(e, this.getData(e, d))
    };

    function Sh() {
        Qh.call(this);
        return this
    }
    v(Sh, Qh);
    Sh.prototype.c = function() {
        this.events[Th] = "view_item_list";
        this.events[Uh] = "select_content";
        this.events[Vh] = "view_item";
        this.events[Wh] = "add_to_cart";
        this.events[Xh] = "remove_from_cart";
        this.events[Yh] = "begin_checkout";
        this.events[Zh] = "checkout_progress";
        this.events[$h] = "set_checkout_option";
        this.events[ai] = "purchase";
        this.events[bi] = "view_cart"
    };
    Sh.prototype.a = function() {
        return "gtag"
    };
    Sh.prototype.getData = function(a, d) {
        var e = null;
        switch (a) {
            case "view_item_list":
                break;
            case "select_content":
                e = {
                    content_type: "product",
                    items: [{
                        id: d.id,
                        name: d.name,
                        category: d.category,
                        list_position: d.list_position,
                        price: d.price
                    }]
                };
                break;
            case "view_item":
                break;
            case "add_to_cart":
            case "remove_from_cart":
                e = {
                    items: [{
                        id: d.id,
                        name: d.name,
                        category: d.category,
                        list_position: d.list_position,
                        quantity: d.quantity,
                        price: d.price
                    }]
                };
                break;
            case "begin_checkout":
                e = {
                    items: [],
                    coupon: ""
                };
                fa(d) && y(d, function(a) {
                    e.items.push({
                        id: a.id,
                        name: a.name,
                        category: a.category,
                        list_position: a.list_position,
                        quantity: a.quantity,
                        price: a.price
                    })
                }, this);
                break;
            case "set_checkout_option":
                e = {
                    checkout_step: d.checkout_step,
                    checkout_option: d.checkout_option,
                    value: d.value
                };
                break;
            case "purchase":
                break;
            case "view_cart":
                break;
            default:
                console.log("not implemented event type", a)
        }
        return e
    };
    Sh.prototype.b = function(a, d) {
        null != F.gTagId && (null != d || (d = {}), d.send_to = F.gTagId);
        this.la("event", a, d)
    };

    function ci() {
        Sh.call(this);
        return this
    }
    v(ci, Sh);
    ci.prototype.a = function() {
        return "gtm"
    };

    function di() {
        Qh.call(this);
        return this
    }
    v(di, Qh);
    di.prototype.a = function() {
        return "fbq"
    };
    di.prototype.c = function() {
        this.events[Vh] = "ViewContent";
        this.events[Wh] = "AddToCart";
        this.events[Yh] = "InitiateCheckout";
        this.events[ai] = "Purchase";
        this.events[bi] = "ViewCart"
    };
    di.prototype.getData = function(a, d) {
        var e = null;
        switch (a) {
            case "ViewContent":
                break;
            case "AddToCart":
                e = {
                    content_type: "product",
                    contents: [{
                        id: d.id,
                        quantity: d.quantity,
                        item_price: d.price
                    }]
                };
                break;
            case "InitiateCheckout":
                e = {
                    content_type: "product",
                    contents: []
                };
                if (fa(d)) {
                    var f = 0,
                        k = "",
                        l = [];
                    y(d, function(a) {
                        e.contents.push({
                            id: a.id,
                            quantity: a.quantity,
                            item_price: a.price
                        });
                        f += parseFloat(a.price);
                        k = a.currency;
                        l.push(a.id)
                    }, this);
                    e.value = f;
                    e.currency = k;
                    e.content_ids = l
                }
                break;
            case "Purchase":
                break;
            case "ViewCart":
                break;
            default:
                console.log("not implemented event type", a)
        }
        return e
    };
    di.prototype.b = function(a, d) {
        this.la("track", a, d)
    };

    function ei() {
        I.call(this);
        this.a = [new Sh, new ci, new di]
    }
    v(ei, I);
    ca(ei);
    var Th = "view_item_list",
        Uh = "select_content",
        Vh = "view_item",
        Wh = "add_to_cart",
        Xh = "remove_from_cart",
        Yh = "begin_checkout",
        Zh = "checkout_progress",
        $h = "set_checkout_option",
        ai = "purchase",
        bi = "view_cart";
    ei.prototype.send = function(a, d) {
        F.hasEshopAnalytics && y(this.a, function(e) {
            e.send(a, d)
        }, this)
    };

    function fi() {
        I.call(this);
        this.c = 1E6;
        this.a = null;
        this.b = {
            totalItems: "0",
            totalPrice: "$ 0.00"
        }
    }
    v(fi, I);
    ca(fi);
    n = fi.prototype;
    n.init = function() {
        if (F.isEshop && !F.isCheckout) {
            var a = new Gf;
            a.data.type = "GET";
            T(a, t(this.Ya, this));
            var d = new Xf("getCartData", 1);
            d.a = !1;
            V(U.f(), a, d);
            gi(this)
        }
    };

    function gi(a) {
        var d = new Id(a);
        y(document.querySelectorAll("[data-wnd_cart_product]"), t(function(a) {
            var e = parseInt(C(a, "wnd_cart_product"), 10),
                l = C(a, "wnd_cart_variant"),
                l = l ? parseInt(l, 10) : null;
            d.u(a.querySelector('[data-wnd_cart_part="item-delete"]'), "click", this["delete"].bind(this, e, l), !1);
            d.u(a.querySelector('[data-wnd_cart_part="item-quantity"]'), "change", this.Xb.bind(this, e, l), !1);
            d.u(a.querySelector('[data-wnd_cart_part="item-quantity"]'), "keydown", t(this.Sb, this), !1)
        }, a));
        var e = document.querySelector('[data-wnd_cart_part="submit"]');
        null != e && d.u(e, "click", a.Nb.bind(a), !1)
    }
    n.Sb = function(a) {
        return isNaN(parseInt(a.b.key, 10)) && 8 !== a.keyCode && 46 !== a.keyCode && 37 !== a.keyCode && 39 !== a.keyCode && 36 !== a.keyCode && 35 !== a.keyCode ? (a.preventDefault(), !1) : !0
    };
    n["delete"] = function(a, d) {
        var e = hi(this, a, d);
        ii(a, e["e_cart.quantity"], "REMOVE");
        e = new Gf;
        e.data.type = "REMOVE";
        e.data.productId = a;
        e.data.variantId = d;
        T(e, t(this.Ya, this));
        var f = new Xf("removeFromCart", 1);
        f.a = !1;
        V(U.f(), e, f)
    };

    function ji(a, d, e) {
        var f = !0;
        e.setCustomValidity("");
        e.checkValidity() || (f = !1);
        a = '[data-wnd_cart_product="' + a + '"]';
        d && (a = '[data-wnd_cart_variant="' + d + '"]');
        a = document.querySelector(a);
        null != a && Eb(a, "wnd-out-of-stock", !f);
        if (!f) {
            e = (d = Yc(document)) || Yc(document);
            var k = he(a),
                l = he(e),
                p;
            if (!A || 9 <= Number(Oc)) r = ee(e, "borderLeftWidth"), p = ee(e, "borderRightWidth"), x = ee(e, "borderTopWidth"), K = ee(e, "borderBottomWidth"), p = new Rb(parseFloat(x), parseFloat(p), parseFloat(K), parseFloat(r));
            else {
                var r = re(e, "borderLeft");
                p = re(e, "borderRight");
                var x = re(e, "borderTop"),
                    K = re(e, "borderBottom");
                p = new Rb(x, p, K, r)
            }
            e == Yc(document) ? (r = k.x - e.scrollLeft, k = k.y - e.scrollTop, !A || 10 <= Number(Oc) || (r += p.left, k += p.top)) : (r = k.x - l.x - p.left, k = k.y - l.y - p.top);
            l = e.clientHeight - a.offsetHeight;
            p = e.scrollLeft;
            x = e.scrollTop;
            p += Math.min(r, Math.max(r - (e.clientWidth - a.offsetWidth), 0));
            x += Math.min(k, Math.max(k - l, 0));
            a = new Qb(p, x);
            d.scrollLeft = a.x;
            d.scrollTop = a.y;
            d = document.querySelector(".wnd-fixed");
            null != d && window.scrollBy(0, -d.scrollHeight)
        }
        return f
    }
    n.Xb = function(a, d, e) {
        null != this.a && (clearTimeout(this.a), this.a = null);
        this.a = setTimeout(t(function() {
            this.a = null;
            var f = e.target;
            if (ji(a, d, f)) {
                var k = parseInt(f.value, 10);
                0 >= k || (k > this.c && (k = this.c, f.value = k), f = new Gf, f.data.type = "UPDATE", f.data.productId = a, f.data.variantId = d, f.data.quantity = k, T(f, t(this.Ya, this)), k = new Xf("updateQuantity", 1), k.a = !1, V(U.f(), f, k))
            }
        }, this), 350)
    };

    function ki(a, d, e) {
        var f = !0,
            k, l, p = null;
        y(d, function(a) {
            if (pb(["input", "select"], a.nodeName.toLowerCase())) {
                switch (a.name) {
                    case "id":
                        k = a.value;
                        break;
                    case "quantity":
                        l = a.value;
                        break;
                    case "variant_id":
                        p = a.value || !1
                }!1 === a.checkValidity() && (f = !1)
            }
        }, a);
        if (!ia(l) || 0 >= l) l = 1;
        null != k && !1 !== f && !1 !== p && li(a, k, e, l, p)
    }

    function li(a, d, e, f, k) {
        if (!ia(f) || 0 >= f) f = 1;
        var l = hi(a, d, k, "PUBLISHED");
        null != l && null != l["e_cart.items_in_stock"] && l["e_cart.items_in_stock"] <= l["e_cart.quantity"] || (ii(d, f, "ADD"), hh("wnd-add-to-cart", e), l = new Gf, l.data.type = "ADD", l.data.productId = d, l.data.quantity = f, l.data.variantId = k, T(l, t(a.Tb, a, e)), a = new Xf("addToCart", 1), a.a = !1, V(U.f(), l, a))
    }
    n.Tb = function(a, d, e, f) {
        "success" !== d && 4011 === e.code && location.reload();
        hh("wnd-add-to-cart-done", a);
        this.Ya(d, e, f)
    };

    function ii(a, d, e) {
        var f = null,
            k = null,
            l = null;
        switch (e) {
            case "ADD":
                l = Wh;
                k = document.querySelector('[data-wnd_product_item="' + a + '"]');
                break;
            case "REMOVE":
                l = Xh, k = document.querySelector('[data-wnd_cart_product="' + a + '"]')
        }
        D(k, "wnd_product_data") && (f = Ca(C(k, "wnd_product_data")), f.quantity = d);
        null != l && null != f && ei.f().send(l, f)
    }
    n.Ya = function(a, d, e) {
        if ("success" === a && null != d) {
            this.b = d;
            if (e instanceof Gf && "GET" === e.data.type && F.isProductDetail) {
                if (null != F.e_product.workingId && (a = document.querySelector('[data-wnd_product_item="' + F.e_product.workingId + '"]'), D(a, "wnd_product_data")))
                    if (a = Ca(C(a, "wnd_product_data")), 0 < a.variants.length) {
                        d = null;
                        e = a.out_of_stock;
                        for (var f = "", k = 0; k < a.variants.length; k++)
                            if (a.variants[k].identifier === F.e_product.identifier) {
                                d = a.variants[k].id;
                                e = a.variants[k].out_of_stock;
                                f = a.variants[k].availability;
                                break
                            }
                        null === d || mi(this, a.id, d, e, f)
                    } else mi(this, a.id, null, a.out_of_stock, a.availability)
            } else mi(this, e.data.productId, e.data.variantId);
            ni(this);
            oi(this);
            pi(this);
            0 === this.b.totalItems ? qi(!0) : qi(!1)
        }
    };

    function qi(a) {
        var d = document.querySelector("[data-wnd_cart_container]"),
            e = document.querySelector(".wnd-page");
        a ? (d && d.classList.add("wnd-cart-empty"), e && (e.classList.add("wnd-cart-empty"), a = document.createEvent("Event"), a.initEvent("wnd-cart-empty", !0, !0), e.dispatchEvent(a))) : (d && d.classList.remove("wnd-cart-empty"), e && e.classList.remove("wnd-cart-empty"))
    }

    function mi(a, d, e, f, k) {
        if (null != d) {
            var l = document.querySelector("[data-wnd_product_item]");
            a = hi(a, d, null != e ? e : null, "PUBLISHED");
            f = !!f;
            l && (null != a && (f = null != a["e_cart.items_in_stock"] && a["e_cart.items_in_stock"] <= a["e_cart.quantity"]), Eb(l, "wnd-out-of-stock", f));
            if (e) {
                if (e = document.querySelector("[data-wnd-identifier=wnd-stock-info-container]")) e.classList.remove("wnd-in-stock", "wnd-available"), (l = !k || "DO_NOT_SHOW" === k || "OUT_OF_STOCK" === k || f ? "" : "IN_STOCK" === k ? "wnd-in-stock" : "wnd-available") && e.classList.add(l);
                if (e = document.querySelector("[data-wnd-identifier=wnd-stock-info]")) e.firstElementChild.innerText = Wg(k, f)
            }
        }
    }

    function ni(a) {
        var d = parseInt(ri(a, "totalQuantity"), 10);
        y(document.querySelectorAll("[data-wnd_cart_part]"), function(a) {
            switch (C(a, "wnd_cart_part")) {
                case "count":
                    a.innerHTML = d;
                    te(a, "count", d.toString());
                    break;
                case "text":
                    a.innerHTML = si(d);
                    te(a, "text", si(d));
                    break;
                case "price":
                    a.innerHTML = ri(this, "totalPriceLocalised"), te(a, "price", ri(this, "totalPriceLocalised"))
            }
        }, a)
    }

    function oi(a) {
        var d, e, f;
        y(document.querySelectorAll("[data-wnd_cart_product]"), t(function(a) {
            e = parseInt(C(a, "wnd_cart_product"), 10);
            f = (f = C(a, "wnd_cart_variant")) ? parseInt(f, 10) : null;
            if (d = hi(this, e, f)) {
                var l = d["e_cart.quantity"];
                y(a.querySelectorAll("[data-wnd_cart_part]"), function(a) {
                    switch (C(a, "wnd_cart_part")) {
                        case "item-price-total":
                            a.innerHTML = d["e_cart.total_price_localised"];
                            break;
                        case "item-quantity":
                            l = parseInt(a.value, 10);
                            null != d["e_cart.items_in_stock"] ? a.setAttribute("max", parseInt(d["e_cart.items_in_stock"],
                                10)) : a.removeAttribute("max");
                            break;
                        case "item-in-stock":
                            var e = "";
                            if (null != d["e_cart.items_in_stock"]) {
                                var e = parseInt(d["e_cart.items_in_stock"], 10),
                                    f = "wnd.fe.ShoppingCartTable.label.itemsInStock.moreThan5";
                                switch (e) {
                                    case 0:
                                        f = "wnd.fe.ShoppingCartTable.label.outOfStock";
                                        break;
                                    case 1:
                                        f = "wnd.fe.ShoppingCartTable.label.itemsInStock.one";
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        f = "wnd.fe.ShoppingCartTable.label.itemsInStock.between2And4"
                                }
                                e = E(f, {
                                    count: e
                                })
                            }
                            a.innerHTML = e
                    }
                }, this);
                Eb(a, "wnd-out-of-stock", null != d["e_cart.items_in_stock"] &&
                    d["e_cart.items_in_stock"] < l)
            } else ed(a)
        }, a))
    }

    function pi(a) {
        y(document.querySelectorAll(".eshop-cart-product-variant"), t(function(a) {
            /^[\s\xa0]*$/.test(a.textContent) && pe(a, !1)
        }, a))
    }

    function hi(a, d, e, f) {
        var k = null,
            l = "PUBLISHED" === f ? "e_cart.e_product_variant_published_id" : "e_cart.e_product_variant_id";
        w(a.b.items, t(function(a) {
            Number(a["e_cart.e_product_id"]) !== Number(d) || null !== e && Number(a[l]) !== Number(e) || (k = a)
        }, a), a);
        return k
    }

    function si(a) {
        var d = "wnd.fe.ShoppingCartManager.count.moreThan5";
        1 === a ? d = "wnd.fe.ShoppingCartManager.count.one" : 1 < a && 5 > a && (d = "wnd.fe.ShoppingCartManager.count.between2And4");
        return E(d, {
            count: a
        })
    }

    function ri(a, d) {
        return null != a.b[d] ? a.b[d] : null
    }
    n.Nb = function(a) {
        var d = !0;
        y(document.querySelectorAll("[data-wnd_cart_product]"), function(a) {
            var f = parseInt(C(a, "wnd_cart_product"), 10),
                k = D(a, "wnd_cart_variant") ? parseInt(C(a, "wnd_cart_variant"), 10) : null;
            ji(f, k, a.querySelector('[data-wnd_cart_part="item-quantity"]')) || (d = !1)
        }, this);
        d || (a.stopPropagation(), a.preventDefault())
    };
    var ph = {
        FormManager: {
            mvcID: "FormManager"
        },
        EshopProductManager: {
            mvcID: "EshopProductManager",
            classNames: {
                empty: "wnd-empty",
                productPrice: "wnd-product-price",
                comparativePriceArea: "wnd-product-comparative-price-area",
                comparativePrice: "wnd-product-comparative-price-content",
                prefixText: "wnd-product-prefix-text",
                suffixText: "wnd-product-suffix-text",
                unitPrice: "wnd-product-unit-price",
                dualCurrency: "wnd-product-dual-currency"
            }
        },
        AddToCartButton: {
            mvcID: "AddToCartButton"
        },
        template: {
            classNames: {
                fixed: "wnd-fixed",
                invalidFormField: "wnd-validate-error",
                formField: "wnd-form-field",
                formSubmitted: "wnd-form-submitted",
                formCaptcha: "form-captcha"
            },
            topOffset: 100
        },
        CookieBar: {
            mvcID: "CookieBar",
            cookies: {
                age: 31536E3,
                identifier: "cookieWarning",
                accepted: "cookieAccepted"
            }
        },
        SocialButtons: {
            mvcID: "SocialButtons",
            colorscheme: {
                light: "light",
                dark: "dark"
            }
        },
        LogoBlock: {
            mvcID: "LogoBlock"
        },
        CheckoutPageZoneModel: {
            ZoneId: "wnd_PageZone_1"
        },
        ModuleDataEventFilter: ["e_order"]
    };

    function ti(a, d, e) {
        S.call(this, a, d, e);
        ui(this)
    }
    v(ti, S);
    Q.f().register("wnd.fe.AddToCartButton", P, ih, ti);

    function ui(a) {
        y(jh(a.a), function(a) {
            vd(a, "click", t(this.h, this))
        }, a)
    }
    ti.prototype.h = function(a) {
        a.stopPropagation();
        a.preventDefault();
        a = a.currentTarget;
        var d = C(a, "wnd_product_add_to_cart");
        if (d) {
            var e = fi.f();
            li(e, parseInt(d, 10), a, 1)
        }
    };

    function vi(a, d, e) {
        S.call(this, a, d, e);
        this.C = null;
        this.l = {};
        this.h = {};
        this.v = null;
        wi(this)
    }
    v(vi, S);

    function wi(a) {
        if (F.isEshop) {
            var d = document.querySelector("form[data-wnd_sys_form=add-to-cart]");
            null !== d && (xi(a, d), y(d.querySelectorAll("input, select, textarea"), function(a) {
                "variant_id" === a.name && (this.C = a);
                if (D(a, "wnd_option_group")) {
                    var d = a[0];
                    null != d && "" === d.text && "" === d.value && (a.selectedIndex = -1, pe(d, !1));
                    d = C(a, "wnd_option_group");
                    this.l[d] = a;
                    vd(a, "change", t(this.s, this, d))
                }
            }, a), Pa(a.l) || (yi(a), zi(a, d)))
        }
    }

    function zi(a, d) {
        var e = Ai(a);
        if (Bi !== e.detail_url) {
            var f = null,
                k, l;
            k = 0;
            for (l = e.variants.length; k < l; k++)
                if (e.variants[k].identifier === F.e_product.identifier) {
                    f = e.variants[k];
                    break
                }
            null === f || qb(f.option_ids) || y(f.option_ids, function(a) {
                var e = d.querySelector('option[value="' + a + '"]');
                null != e && (e = e.parentElement, null !== e && "SELECT" === e.nodeName && (e.value = a, Db(e, "not-clicked"), a = document.createEvent("Event"), a.initEvent("change", !0, !0), e.dispatchEvent(a)))
            }, a)
        }
    }

    function xi(a, d) {
        var e = Ai(a);
        null == e.out_of_stock || e.out_of_stock || (e = d.querySelector("[data-wnd_add_to_cart_button]"), null != e && (e.disabled = !1))
    }
    vi.prototype.s = function(a) {
        var d = this.l[a].value,
            e = Ai(this);
        null != e && null != e.variants && (d ? this.h[a] = d : delete this.h[a], yi(this, a))
    };

    function yi(a, d) {
        var e = Ai(a),
            f = a.h[d],
            k = Ma(a.h).sort(),
            l = [],
            p = {},
            r = {},
            x = null,
            K = {};
        y(e.variants, function(a) {
            var d = lb(a.option_ids, function(d) {
                    K[d] = K[d] || !!a.visibility;
                    return !pb(k, d)
                }),
                l = e.out_of_stock;
            d.length + k.length === a.option_ids.length ? (0 === d.length && (d = ub(a.option_ids), x = a), sb(d, f), y(d, function(d) {
                l = a.out_of_stock;
                if (!a.visibility || l) r[d] = r[d] + 1 || 1;
                p[d] = p[d] + 1 || 1
            }, this)) : a.out_of_stock && 1 === a.option_ids.length && (d = a.option_ids[0], r[d] = r[d] + 1 || 1, p[d] = p[d] + 1 || 1)
        }, a);
        w(r, function(a, d) {
            p[d] === a &&
                l.push(d)
        }, a);
        l = tb(l, Na(Ka(K, function(a, d) {
            return !a && !~l.indexOf(d)
        }, a)));
        Ci(a, l, x, d)
    }

    function Ci(a, d, e, f) {
        w(a.l, function(a, l) {
            y(a, function(p) {
                pb(d, p.value) ? (p.disabled = !0, a.value === p.value && (a.value = "", delete this.h[l], e = null, yi(this, f))) : p.disabled = !1
            }, this)
        }, a);
        Di(a, e);
        Ei(e)
    }

    function Di(a, d) {
        var e = Ai(a),
            f = e.price,
            k = e.comparative_price,
            l = e.out_of_stock,
            p = e.availability,
            r = null,
            x = null,
            K = null,
            oa = null;
        null == d && !1 === e.variants_active && null != e.variants && null != e.variants[0] && 1 === e.variants.length && (d = e.variants[0]);
        d && (r = d.id, f = d.price, l = d.out_of_stock, p = d.availability, x = d.price_ex_vat_message || null, K = d.unit_price_localised || null, oa = d.dual_currency || null);
        Number(k) <= Number(f) && (k = "");
        mi(fi.f(), e.id, r, l, p);
        a.C && (a.C.value = r);
        new Sg;
        wh(a.a, Tg(f));
        yh(a.a, Tg(k), 0 < k);
        zh(a.a, null ===
            d);
        nb([x, K, oa], function(a) {
            return null !== a
        }) && Ah(a.a, {
            Fb: x,
            Ib: K,
            wb: oa
        })
    }

    function Ai(a) {
        if (null === a.v) {
            var d;
            d = a.a;
            null === d.g && (d.g = document.querySelector("[data-wnd_product_item]"));
            d = d.g;
            null != d && D(d, "wnd_product_data") && (a.v = Ca(C(d, "wnd_product_data")))
        }
        return a.v
    }

    function Ei(a) {
        var d = F.productPrefix,
            d = d + ((null === a ? F.e_product : a).identifier + "/");
        zf(d)
    }
    Q.f().register("wnd.fe.EshopProductManager", uh, vh, vi);

    function Fi(a, d, e) {
        S.call(this, a, d, e);
        Gi(this);
        Hi(this);
        Ii(this);
        Ji(this);
        Ki(this);
        a = document.getElementsByClassName(ph.template.classNames.formSubmitted);
        qb(a) || this.a.C(a[0], !0);
        a = this.a;
        d = document.getElementsByClassName(Hh());
        if (!qb(d)) {
            for (e = d = d[0]; e && "form" != e.nodeName.toLowerCase();) e = e.parentNode;
            var f;
            if (f = null != e) {
                f = Eh(a);
                f = new Da(f.width, f.height);
                var k = ne(e);
                f = k.width <= f.width && k.height <= f.height
            }
            f && (d = e);
            a.C(d, !0)
        }
    }
    v(Fi, S);
    Q.f().register("wnd.fe.FormManager", P, Dh, Fi);
    n = Fi.prototype;
    n.ua = {};
    n.pb = {};

    function Gi(a) {
        y(document.querySelectorAll("input[type=checkbox][data-required]"), function(a) {
            Li(this, a.name, a);
            vd(a, "change", t(function(a) {
                Mi(this, a.target)
            }, this));
            Mi(this, a)
        }, a)
    }

    function Ji(a) {
        y(document.forms, function(a) {
            a.addEventListener("invalid", t(this.fc, this), !0);
            var e = C(a, "wnd_sys_form");
            y(a.elements, function(f) {
                pb(["input", "select", "textarea"], f.nodeName.toLowerCase()) && (vd(f, "change", t(this.Wb, this)), "password" === f.type && "user-change-password" === e && (vd(f, "change", t(this.$a, this, a)), vd(f, "keyup", t(this.$a, this, a))))
            }, this)
        }, a)
    }

    function Ki(a) {
        var d = null;
        y(document.forms, function(a) {
            D(a, "wnd_sys_form") && "user-login" == C(a, "wnd_sys_form") && (d = a)
        }, a);
        if (null != d && Tc(Hh(), d).length) {
            var e = d.elements.send;
            if (e) {
                var f = !1;
                y(d.elements, function(a) {
                    if (D(a, "error_message")) {
                        f = !0;
                        a.setCustomValidity(C(a, "error_message"));
                        var d = t(this.Yb, this);
                        Cd(a, "keypress", d);
                        Cd(a, "click", d)
                    }
                }, a);
                f && setTimeout(t(e.click, e), 200)
            }
        }
    }

    function Li(a, d, e) {
        null != a.ua[d] || (a.ua[d] = []);
        a.ua[d].push(e)
    }

    function Mi(a, d) {
        if (null != a.ua[d.name]) {
            var e = a.ua[d.name],
                f = !1;
            y(e, function(a) {
                f |= a.checked
            });
            y(e, function(a) {
                a.required = !f
            })
        }
    }

    function Hi(a) {
        y(document.querySelectorAll("[data-filename-for]"), function(a) {
            var e = C(a, "filenameFor");
            e && (this.pb[e] = a)
        }, a);
        y(document.querySelectorAll("input[type=file]"), function(a) {
            vd(a, "change", t(function(a) {
                Ni(this, a.target)
            }, this));
            Ni(this, a)
        }, a)
    }

    function Ni(a, d) {
        null != a.pb[d.name] && (a.pb[d.name].innerHTML = d.value)
    }

    function Ii(a) {
        y(document.querySelectorAll("form"), function(a) {
            vd(a, "submit", t(function(a) {
                    if (!1 === Oi(this, a.target)) return a.stopPropagation(), a.preventDefault(), !1;
                    var d = a.target,
                        k = !0,
                        l = 0;
                    D(d, "lastSentTime") && (l = C(d, "lastSentTime"), 1E4 > new Date - new Date(l) && (k = !1));
                    if (D(d, "wnd_sys_form")) switch (C(d, "wnd_sys_form")) {
                        case "add-to-cart":
                            a.stopPropagation(), a.preventDefault(), ki(fi.f(), d.elements, d.elements.send)
                    } else k ? te(d, "lastSentTime", (new Date).toString()) : (a.stopPropagation(), a.preventDefault())
                },
                this))
        }, a)
    }
    n.Wb = function(a) {
        requestAnimationFrame(t(function() {
            var d = a.target;
            "file" === d.type && Pi(d);
            var e = !d.checkValidity();
            Gh(Ih(d), e)
        }, this))
    };
    n.Yb = function(a) {
        a = a.target;
        D(a, "error_message") && a.setCustomValidity("")
    };
    n.fc = function(a) {
        a = a.target;
        this.a.C(a);
        Gh(Ih(a), !0)
    };

    function Oi(a, d) {
        if (D(d, "wnd_sys_form")) return Qi(a, d, C(d, "wnd_sys_form"));
        var e = !0;
        y(d.elements, function(a) {
            if (pb(["input", "select", "textarea"], a.nodeName.toLowerCase())) {
                var d = !a.checkValidity() || "file" === a.type && !1 === Pi(a);
                Gh(Ih(a), d);
                d && (e = !1)
            }
        }, a);
        return e
    }

    function Qi(a, d, e) {
        var f = !0;
        if ("user-change-password" === e) {
            e = d.elements;
            var k = !1;
            a.$a(d);
            y(e, function(a) {
                k = !a.checkValidity();
                "password" === a.type && Gh(Ih(a), k)
            }, a);
            k && (f = !1)
        }
        return f
    }
    n.$a = function(a, d) {
        if (null == d || "keyup" != d.type || 13 != d.keyCode) {
            var e = [],
                f = !1;
            y(a.elements, function(a) {
                "password" === a.type && e.push(a)
            }, this);
            var k = e[1],
                l = "";
            e[0].value !== k.value && (l = E("wnd.fe.FormManager.error.userChangePassword"), f = !0);
            k.setCustomValidity(l);
            Gh(Ih(k), f)
        }
    };

    function Pi(a) {
        var d = a.files[0],
            e = "",
            f = !0,
            k = null == d,
            l = null != d ? d.name.substr(d.name.lastIndexOf(".") + 1).toLowerCase() : "";
        k ? null != a.getAttribute("required") && (e = E("wnd.fe.FormManager.error.file.required"), f = !1) : pb(F.fileUploadAllowExtension, l) ? d.size >= F.maxUserFormFileLimit && (e = E("wnd.fe.FormManager.error.file.sizeExceeded", {
            size: Math.round(F.maxUserFormFileLimit / 1024 / 1024)
        }), f = !1) : (e = E("wnd.fe.FormManager.error.file.notAllowedExtension", {
            extension: l
        }), f = !1);
        a.setCustomValidity(e);
        !f && ja(a.reportValidity) &&
            a.reportValidity();
        return f
    }
    n.J = function(a) {
        if ("scrollWindow" == a.getType() || "resizeWindow" == a.getType()) this.a.ba = null
    };

    function Ri() {
        I.call(this);
        this.a = null
    }
    v(Ri, I);
    ca(Ri);

    function Si() {
        var a = O.f().get("project_info").getData();
        return "1" === a.eshop_tax_enabled && "SALES_TAX" === a.eshop_tax_type
    }

    function Ti(a) {
        var d = O.f().get("project_info").getData();
        return null != a.a && String(a.a.getValue()) === d.contact_state && Si()
    }

    function Ui(a) {
        Si() && Vi(a, Wi(a, 0), 0)
    }

    function Xi(a, d) {
        if (Ti(a)) {
            var e;
            e = String(a.a.getValue());
            e = q(H.e_tax) && q(H.e_tax[e]) ? Number(H.e_tax[e]["e_tax.value"]) : null;
            (null === e || isNaN(e)) && Ui(a);
            var f = Wi(a, e, d);
            Vi(a, f, e)
        } else Ui(a)
    }

    function Wi(a, d, e) {
        e = e || O.f().get("checkout_order").getData();
        a = Yi(a, e) + e["e_order.shipping_price_ex_vat"] + e["e_order.payment_price_ex_vat"];
        return d = parseFloat((a + d / 100 * a).toFixed(2))
    }

    function Yi(a, d) {
        var e = 0,
            f = d["e_order.subtotal_price_ex_vat"];
        null != d["e_order.discounts"] && w(d["e_order.discounts"], t(function(a) {
            "FREE_SHIPPING" !== a.type && (e += a.priceOff)
        }, a), a);
        f = f - e;
        return 0 > f ? 0 : f
    }

    function Vi(a, d, e) {
        var f = Zi($i(a.a));
        Pa(f) || (f[a.a.getName()] = f[a.a.getName()] || "");
        "@" === f.email && delete f.email;
        f.total_price = d;
        f.us_sales_tax_rate = e;
        d = new Of;
        d.data = f;
        T(d, t(a.b, a));
        V(U.f(), d)
    }
    Ri.prototype.b = function(a, d) {
        "success" === a && $i(this.a).ia(d)
    };

    function aj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(aj, Cf);
    aj.prototype.W = Yg.ContentItemModel.DataType;
    aj.prototype.s = function() {
        return R(this, "variant") ? R(this, "variant") : "default"
    };

    function bj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(bj, aj);
    bj.prototype.W = Yg.ContentBlock.DataType;

    function fj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(fj, bj);

    function gj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(gj, bj);

    function hj(a, d, e) {
        P.call(this, a, d, e);
        this.C = this.v = ij
    }
    v(hj, bj);

    function jj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(jj, bj);

    function kj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(kj, bj);

    function lj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(lj, aj);
    lj.prototype.g = function() {
        var a = R(this, "content");
        return a ? a : []
    };

    function mj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(mj, lj);
    mj.prototype.D = "";
    mj.prototype.s = function() {
        var a = uf(this).getData(this.D);
        return q(a.variant) ? a.variant : "default"
    };
    mj.prototype.h = function() {
        var a = O.f().get("checkout_order").getData();
        return a ? a : null
    };
    mj.prototype.a = function(a) {
        var d = this.h();
        return null != d && null != d[a] ? d[a] : ""
    };

    function nj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(nj, lj);

    function oj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(oj, lj);

    function pj(a, d) {
        N.call(this, a, d);
        this.ub = !0;
        this.j() && (this.X = !1)
    }
    v(pj, gf);
    n = pj.prototype;
    n.S = function() {
        qj(this, this.I())
    };

    function qj(a, d) {
        a.Ja();
        a.j().outerHTML = ch(a.a.c, d);
        a.U()
    }
    n.Ja = function() {};
    n.U = function() {
        this.b = null;
        this.j() && hh("wnd-redraw", this.j())
    };
    n.tb = function() {
        this.notify("onCreateBlock")
    };
    n.I = function() {
        var a = {
            "contentElement.attributes": {
                id: this.a.L()
            },
            variant: this.a.s()
        };
        a["contentElement.attributes"]["data-" + ve.View.contentElementTypeAttr] = this.a.c;
        return a
    };
    n.cb = function() {
        var a = pj.i.cb.call(this);
        null != a.id === !1 && (a.id = this.a.L());
        return a
    };
    n.j = function() {
        this.b || (this.b = document.getElementById(this.a.L()));
        return this.b
    };

    function rj(a, d) {
        pj.call(this, a, d)
    }
    v(rj, pj);

    function sj(a, d) {
        pj.call(this, a, d);
        this.o = this.T.querySelector('[data-wnd_mvc_type="wnd.fe.LogoBlock"]');
        this.X = !1
    }
    v(sj, rj);

    function tj(a) {
        a.o && !a.g && (a.g = a.o.querySelector("img"));
        return a.g
    }
    sj.prototype.U = function() {
        this.g = null;
        sj.i.U.call(this);
        ea(tj(this)) && vd(tj(this), "load", t(function() {
            hh("wnd-redraw", tj(this))
        }, this))
    };

    function uj(a, d) {
        pj.call(this, a, d);
        this.X = !1
    }
    v(uj, rj);

    function vj(a, d) {
        pj.call(this, a, d);
        this.g = {}
    }
    v(vj, rj);

    function wj(a, d) {
        return q(a.g[d]) ? a.g[d] : a.g[d] = a.j().querySelector(".wnd-step-" + d + " a")
    }
    vj.prototype.S = function() {
        this.g = {};
        vj.i.S.call(this)
    };
    vj.prototype.I = function() {
        var a = vj.i.I.call(this),
            d = this.a.v;
        return ye(a, {
            "cart.class": "",
            "cartLink.show": !0,
            "cartLink.attributes": {
                href: F.cartPrefix
            },
            "customer.class": "wnd-step-customer" + (d === ij ? " wnd-active" : ""),
            "customerLink.show": xj(this, ij),
            "customerLink.attributes": {
                href: ""
            },
            "shipping.class": "wnd-step-shipping" + (d === yj ? " wnd-active" : ""),
            "shippingLink.show": xj(this, yj),
            "shippingLink.attributes": {
                href: ""
            },
            "payment.class": "wnd-step-payment" + (d === zj ? " wnd-active" : ""),
            "paymentLink.show": xj(this,
                zj),
            "paymentLink.attributes": {
                href: ""
            },
            "confirm.class": "wnd-step-confirm" + (d === Aj ? " wnd-active" : ""),
            "confirmLink.show": xj(this, Aj),
            "confirmLink.attributes": {
                href: ""
            }
        })
    };

    function xj(a, d) {
        return a.a.C >= d && a.a.v !== d
    };

    function Bj(a, d) {
        pj.call(this, a, d)
    }
    v(Bj, rj);

    function Cj(a, d) {
        pj.call(this, a, d);
        this.X = !1
    }
    v(Cj, rj);

    function Dj(a, d) {
        pj.call(this, a, d);
        this.F = {};
        var e = this.a.getData();
        this.a.H = Ra(e)
    }
    v(Dj, pj);
    n = Dj.prototype;
    n.Ua = null;
    n.Na = null;
    n.Wa = function(a, d, e) {
        var f = !1,
            k = this.a.H,
            l;
        if (l = q(k.content)) {
            a: {
                l = k.content;
                var p = this.a.g();
                if (ga(l) && ga(p) && l.length == p.length) {
                    for (var r = l.length, x = 0; x < r; x++)
                        if (l[x] !== p[x]) {
                            l = !1;
                            break a
                        }
                    l = !0
                } else l = !1
            }
            l = l || !qb(k.content) && qb(this.a.g()) || qb(k.content) && !qb(this.a.g())
        }
        l && (f = !0);
        f && Dj.i.Wa.call(this, a, d, e);
        a = this.a.getData();
        this.a.H = Ra(a)
    };
    n.Ja = function() {
        if (this.ra()) {
            this.Ua = document.createElement("div");
            var a = [],
                a = gd(this.ra());
            if (this.j()) {
                var d;
                d = this.j();
                d = ne(d);
                le(this.j(), d)
            }
            bd(this.Ua, a)
        }
        Dj.i.Ja.call(this)
    };
    n.U = function() {
        Dj.i.U.call(this);
        this.Na = null;
        var a = this.ra();
        this.Ua && a && (bd(a, gd(this.Ua)), this.j() && le(this.j(), "", ""))
    };
    n.I = function() {
        var a = Dj.i.I.call(this);
        return ye(a, {
            "containerElement.attributes": {
                id: this.a.L() + "_container"
            },
            contentItems: this.a.g().map(function() {
                return ""
            })
        })
    };
    n.ra = function() {
        this.Na || (this.Na = document.getElementById(this.a.L() + "_container"));
        return this.Na
    };

    function Ej(a, d) {
        Dj.call(this, a, d)
    }
    v(Ej, Dj);
    Ej.prototype.I = function() {
        return ye(Ej.i.I.call(this), {
            title: R(this.a, "title"),
            showTitle: !!R(this.a, "title")
        })
    };

    function Fj(a, d) {
        Dj.call(this, a, d)
    }
    v(Fj, Dj);

    function Gj(a, d) {
        Dj.call(this, a, d)
    }
    v(Gj, Dj);

    function X(a, d, e) {
        S.call(this, a, d, e);
        this.a.X || this.Aa();
        this.s = null;
        this.a.observe("onCreateBlock", t(this.notify, this, "onCreateBlock", this.b.id), this)
    }
    v(X, Bf);
    n = X.prototype;
    n.kb = null;
    n.za = null;
    n.zb = function() {
        return "block" == this.C()
    };
    n.Cb = function() {
        return "section" == this.C()
    };
    n.Ab = function() {
        return "microtemplate" == this.C()
    };
    n.Bb = function() {
        return "microtemplate_cell" == this.C()
    };
    n.Pb = function() {
        return this.D
    };
    n.B = function() {
        X.i.B.call(this);
        var a = new J("contentRemove", this);
        M(this, a);
        wf(this.D.b, "data_deleted", void 0);
        hh("wnd-redraw", this.D.j());
        !1 === (null === this.s) && this.s.dispose()
    };
    n.A = function() {
        X.i.A.call(this);
        var a = this.j();
        a && (this.s = new Rd(document.body), this.c.u(this.s, "key", t(this.Rb, this)), this.c.u(a, "wnd-redraw-done", t(this.mc, this)))
    };
    n.Rb = function() {};
    n.dispose = function() {
        X.i.dispose.call(this);
        this.notify("onRemoveBlock", this.b.id)
    };
    n.mc = function() {
        var a = new J("contentChange", this);
        M(this, a)
    };
    n.P = function(a) {
        X.i.P.call(this, a);
        "dataUpdate" == a.getType() && a.b == this.b.W && a.h == this.b.id && wf(this.b, "data_updated", !1, a.O)
    };
    n.Aa = function() {};
    n.ib = function(a) {
        X.i.ib.call(this, a);
        this.Aa()
    };

    function Hj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Hj, X);
    Hj.prototype.C = function() {
        return "block"
    };

    function Ij(a, d, e) {
        X.call(this, a, d, e);
        this.A()
    }
    v(Ij, Hj);
    Ij.prototype.A = function() {
        Ij.i.A.call(this);
        tj(this.a) && this.c.u(tj(this.a), "load", t(this.h, this), !1)
    };
    Ij.prototype.h = function(a) {
        hh("wnd-redraw", a.a)
    };
    Q.f().register("wnd.pc.LogoBlock", fj, sj, Ij);

    function Jj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Jj, Hj);
    Q.f().register("wnd.pc.CheckoutErrorBannerBlock", gj, uj, Jj);

    function Kj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Kj, Hj);
    n = Kj.prototype;
    n.J = function(a) {
        Kj.i.J.call(this, a);
        if ("checkoutChangeStep" === a.getType() && "children_propagation" === a.c) {
            var d = this.b,
                e = a.a.o;
            d.v = e;
            d.C < e && (d.C = e);
            wf(this.b, "data_updated", !1)
        }
        "checkoutResetNavigationMaxStep" === a.getType() && (a = this.b, a.C = a.v, wf(this.b, "data_updated", !1))
    };
    n.A = function() {
        Kj.i.A.call(this);
        wj(this.a, "customer") && this.c.u(wj(this.a, "customer"), "click", t(this.Ta, this, ij));
        wj(this.a, "shipping") && this.c.u(wj(this.a, "shipping"), "click", t(this.Ta, this, yj));
        wj(this.a, "payment") && this.c.u(wj(this.a, "payment"), "click", t(this.Ta, this, zj));
        wj(this.a, "confirm") && this.c.u(wj(this.a, "confirm"), "click", t(this.Ta, this, Aj))
    };
    n.Ta = function(a, d) {
        d.preventDefault();
        Lj(this.g, a);
        if (a === ij) {
            var e = this.b;
            e.C = e.v;
            wf(this.b, "data_updated", !1)
        }
        e = new Of;
        e.data = {
            step: a
        };
        T(e, t(this.Gc, this));
        V(U.f(), e)
    };
    n.Gc = function(a, d) {
        "success" === a && this.ia(d)
    };
    n.ia = function(a) {
        H.checkout_order = ze(a);
        mf(O.f(), "checkout_order");
        M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order", this))
    };
    Q.f().register("wnd.pc.CheckoutNavigationBlock", hj, vj, Kj);

    function Mj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Mj, Hj);
    Q.f().register("wnd.pc.CheckoutSummaryProductRow", jj, Bj, Mj);

    function Nj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Nj, Hj);
    Q.f().register("wnd.pc.CheckoutUpgradeBannerBlock", kj, Cj, Nj);

    function Oj() {
        G.call(this)
    }
    v(Oj, G);
    ca(Oj);
    Oj.prototype.getItem = function(a) {
        return Q.f().get(a)
    };

    function Pj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Pj, X);
    Pj.prototype.C = function() {
        return "container"
    };
    Pj.prototype.ba = function() {
        return {}
    };

    function Qj(a) {
        return Oj.f().getItem(a)
    }

    function Rj(a, d, e) {
        a = a.b.g();
        var f, k = [];
        f = [];
        if (a)
            for (var l = a.length, p = 0; p < l; p++) f = Qj(a[p]), k.push(f), d && f instanceof Pj && (!e || -1 !== e.indexOf(f.C())) && (f = Rj(f, !0, e), k = k.concat(f));
        return k
    }
    Pj.prototype.Ea = function(a, d, e, f) {
        Pj.i.Ea.call(this, a, d, e, f);
        "data_created" !== d && "data_deleted" !== d && "data_updated" !== d || Sj(this)
    };

    function Sj(a) {
        a = Rj(a);
        for (var d = 0; d < a.length; d++) a[d].kb = 0 === d ? null : a[d - 1], a[d].za = d === a.length - 1 ? null : a[d + 1]
    }

    function Tj(a) {
        var d = null;
        qb(a.b.g()) || (a = a.b.g(), d = Qj(a[0]));
        return d
    }
    Pj.prototype.Aa = function() {
        for (var a = this.b.g(), d = a.length, e = uf(this.b).getData(), f, k = 0; k < d; k++) {
            f = e[a[k]].type;
            var l = a[k];
            Oj.f();
            var p = {
                id: l,
                properties: this.ba(l, f)
            };
            Af(Q.f(), l) ? Q.f().get(l) : Q.f().create(l, f, this.a.ra(), this, p)
        }
        Sj(this)
    };

    function Uj(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Uj, Pj);
    Q.f().register("wnd.pc.CheckoutSummaryProductTable", oj, Gj, Uj);

    function Vj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(Vj, lj);
    Vj.prototype.g = function() {
        var a = R(this, "content")[this.s()];
        return a ? a : []
    };

    function Wj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(Wj, Vj);
    Wj.prototype.h = function() {
        var a = O.f().get("checkout_order").getData();
        return a ? a : null
    };
    Wj.prototype.a = function(a) {
        var d = this.h();
        return null != d && null != d[a] ? d[a] : ""
    };
    Wj.prototype.ya = function(a) {
        return null !== a && null != H.e_shipping_method[a] ? H.e_shipping_method[a].storeAddress : ""
    };

    function Xj(a) {
        return null != a.on && 1 === a.on && null != a.extended.verifiedCustomers && "" != a.extended.verifiedCustomers
    };

    function Yj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(Yj, Vj);

    function Zj(a, d, e) {
        P.call(this, a, d, e)
    }
    v(Zj, Vj);

    function ak(a, d, e) {
        P.call(this, a, d, e)
    }
    v(ak, Zj);

    function bk(a, d, e) {
        P.call(this, a, d, e)
    }
    v(bk, Vj);

    function ck(a, d, e) {
        P.call(this, a, d, e);
        this.T = ""
    }
    v(ck, Vj);

    function dk(a, d, e) {
        P.call(this, a, d, e);
        this.o = !1
    }
    v(dk, Vj);

    function ek(a) {
        return !!R(a, "showShippingAddress") || !!R(a, "showStoreAddress") || !!R(a, "showMethodNote") || !!R(a, "showMethodApiNote") || a.o
    }
    dk.prototype.h = function() {
        var a = O.f().get("checkout_order").getData();
        return a ? a : null
    };
    dk.prototype.ya = function(a) {
        return null !== a && null != H.e_shipping_method[a] ? H.e_shipping_method[a].storeAddress : ""
    };

    function fk(a) {
        return null !== a && null != H.e_shipping_method[a] ? H.e_shipping_method[a].note : ""
    };

    function gk(a, d, e) {
        dk.call(this, a, d, e)
    }
    v(gk, dk);

    function hk(a, d, e) {
        dk.call(this, a, d, e);
        this.m = !1
    }
    v(hk, dk);

    function ik() {
        return null != O.f().get("checkout_order").getData()["e_order.shipping_pickup_point_id"]
    }

    function jk() {
        var a = O.f().get("checkout_order").getData();
        return null != a["e_order.shipping_country"] ? a["e_order.shipping_country"].toLowerCase() : ""
    };

    function kk(a, d, e) {
        P.call(this, a, d, e);
        this.l = ""
    }
    v(kk, Vj);
    kk.prototype.h = function() {
        var a = O.f().get("checkout_order").getData();
        return a ? a : null
    };

    function lk() {
        if (F.currencyInfo.isDefault || !1 === F.currencyInfo.paymentInDefaultCurrency) return "";
        var a = O.f().get("checkout_order").getData();
        new Sg;
        var d = Qg(Vg(0), 1),
            e = String(F.currencyInfo.conversionRate).split(".", 2),
            f;
        f = F.currencyInfo.conversionRate;
        f = Qg(Ug(null != e[1] ? e[1].length : 0), f);
        e = E("wnd.pc.CheckoutSummaryBlock.exchangeRate.title");
        a = a["e_order.default_total_price"];
        d = {
            final_price: Qg(Vg(void 0), a),
            default_currency_code: F.currencyInfo.defaultCurrencyCode,
            exchange_rate: d + "&nbsp;=&nbsp;" + f
        };
        d = E("wnd.pc.CheckoutSummaryBlock.exchangeRate.exchangeInfo", d);
        return "<strong>" + e + "</strong><br><br>" + d
    };

    function mk(a, d, e) {
        P.call(this, a, d, e);
        this.ba = ""
    }
    v(mk, Yj);

    function Y(a, d) {
        Dj.call(this, a, d);
        this.c = {};
        this.g = null
    }
    v(Y, Dj);
    Y.prototype.Ja = function() {
        y(this.a.g(), function(a) {
            nk(this.Kb, a, this.j())
        }, this);
        var a = this.a.getData();
        this.F = {};
        this.g = document.createElement("div");
        pe(this.g, !1);
        document.body.appendChild(this.g);
        w(a.contentMap, function(a, e) {
            this.F[e] = {};
            var f = null;
            w(a, function(a, d) {
                try {
                    f = Qj(a).j(), this.g && bd(this.g, f)
                } catch (p) {
                    f = null
                }
                this.F[e][d] = f
            }, this)
        }, this)
    };
    Y.prototype.U = function() {
        this.b = null;
        this.j() && hh("wnd-redraw", this.j());
        w(this.F, function(a, d) {
            w(a, function(a, f) {
                var k = gh(d, f, this.a.L());
                (k = Sc(k)) && a && fd(a, k)
            }, this)
        }, this);
        this.g && ed(this.g)
    };
    Y.prototype.Wa = function() {
        ff(this)
    };
    Y.prototype.ra = function() {
        return this.j()
    };

    function ok(a, d) {
        Y.call(this, a, d);
        this.D = this.H = this.s = this.o = this.N = null
    }
    v(ok, Y);

    function pk(a) {
        return a.N || (a.N = B("wnd-shipping-address", a.j()))
    }

    function qk(a) {
        return a.o || (a.o = B("wnd-billing-address", a.j()))
    }

    function rk(a) {
        return a.s || (a.s = B("wnd-delivery-address", a.j()))
    }

    function sk(a) {
        return a.H || (a.H = B("wnd-payment-address", a.j()))
    }

    function tk(a) {
        return a.D || (a.D = Sc("ch-agree"))
    }
    n = ok.prototype;
    n.S = function() {
        ok.i.S.call(this);
        this.D = this.H = this.N = this.s = this.o = null
    };
    n.I = function() {
        var a = ok.i.I.call(this),
            d = this.a.a("e_order.step"),
            e = this.a.h(),
            f = e["e_order.billing_ic"] || e["e_order.billing_dic"],
            e = e["e_order.billing_first_name"] === e["e_order.shipping_first_name"] && e["e_order.billing_last_name"] === e["e_order.shipping_last_name"] && e["e_order.billing_company"] === e["e_order.shipping_company"] && e["e_order.billing_street"] === e["e_order.shipping_street"] && e["e_order.billing_apt"] === e["e_order.shipping_apt"] && e["e_order.billing_city"] === e["e_order.shipping_city"] && e["e_order.billing_country"] ===
            e["e_order.shipping_country"] && e["e_order.billing_state"] === e["e_order.shipping_state"] && e["e_order.billing_zip"] === e["e_order.shipping_zip"],
            k = this.a.a("e_order.payment_method_name"),
            l = ye,
            p = this.a.a("e_order.email"),
            r = this.a.a("e_order.phone"),
            x = this.a.a("e_order.billing_ic"),
            K = this.a.a("e_order.billing_dic"),
            oa = this.a.a("e_order.billing_recipient_code"),
            $a = this.a.a("e_order.billing_pec"),
            yf = this.a.a("e_order.billing_fiscal_code"),
            f = d > ij && (!e || f),
            dd = this.a.a("e_order.billing_company"),
            je = this.a.a("e_order.billing_full_name"),
            ke = this.a.a("e_order.billing_address"),
            Ll = this.a.a("e_order.billing_country_localised"),
            Ml = this.Bc(),
            Nl = this.a.a("e_order.shipping_method_name"),
            Ol = this.a.a("e_order.shipping_company"),
            Pl = this.a.a("e_order.shipping_full_name"),
            Ql = this.a.a("e_order.shipping_address"),
            Rl = this.a.a("e_order.shipping_country_localised"),
            Sl = this.a.a("e_order.shipping_phone"),
            Tl = this.Cc(),
            Ul = this.ya(),
            d = d > zj,
            k = "card" !== k.toLowerCase() ? k : "",
            Vl = window.location.origin,
            Wl = window.location.hostname,
            Bb;
        var hb = H.projectSettings;
        Bb = H.isDach;
        var rd = window.location.hostname,
            sd = window.location.origin,
            La = hb.ESHOP_CANCEL_CONDITION_PAGE,
            Cb = hb.ESHOP_PRIVACY_POLICY_PAGE,
            hb = hb.ESHOP_TERMS_CONDITION_PAGE;
        if (La || Cb || hb) {
            var cj = E("wnd.templates.confirmTAC") || "Obchodn\u00edmi podm\u00ednkami",
                dj = E("wnd.templates.confirmPP") || "Pravidly ochrany osobn\u00edch \u00fadaj\u016f",
                we = E("wnd.templates.confirmCP") || "Storno podm\u00ednky",
                we = Bb ? La ? '<a href="' + La + '" target="_blank">' + we + "</a>" : '<a href="' + sd + '" target="_blank">' + we + "</a>" : "",
                ej =
                "wnd.templates.confirmTACandPP";
            Bb && (ej = "wnd.templates.confirmTACandPPandCP");
            Bb = E(ej, {
                terms_and_conditions: hb ? '<a href="' + hb + '" target="_blank">' + cj + "</a>" : cj,
                privacy_policy: Cb ? '<a href="' + Cb + '" target="_blank">' + dj + "</a>" : dj,
                cancelation_policy: we,
                eshop: (hb && Cb || Bb) && (hb && Cb && La || !Bb) ? rd : '<a href="' + sd + '" target="_blank">' + rd + "</a>"
            })
        } else Bb = E("wnd.templates.confirmTermsAndConditions") + ' <a href="' + sd + '" target="_blank">' + rd + "</a>";
        rd = this.a.a("e_order.customer_note");
        sd = this.a.a("e_order.customer_note") ?
            "not-empty" : null;
        La = H.xml_feed;
        ka(La) && Ye("HeurekaSatisfactionSurvey") ? (Cb = this.a.a("e_order.currency"), La = Xj(La.HEUREKA) && "CZK" === Cb || Xj(La.HEUREKA_SK) && "EUR" === Cb) : La = !1;
        return l(a, {
            customerEmail: p,
            customerPhone: r,
            customerIC: x,
            customerDIC: K,
            customerDTIN: oa,
            customerPEC: $a,
            customerTIN: yf,
            showBillingInfo: f,
            billingCompany: dd,
            billingFullName: je,
            billingAddress: ke,
            billingCountry: Ll,
            showShippingInfo: Ml,
            shippingMethod: Nl,
            shippingCompany: Ol,
            shippingFullName: Pl,
            shippingAddress: Ql,
            shippingCountry: Rl,
            shippingPhone: Sl,
            showStoreInfo: Tl,
            storeAddress: Ul,
            showSameAddress: e,
            dontShowSameAddress: !e,
            showPaymentInfo: d,
            paymentMethod: k,
            paymentError: "",
            termsLink: Vl,
            termsTitle: Wl,
            termsHtml: Bb,
            customerNoteValue: rd,
            "customerNoteInput.class": sd,
            showCustomerNote: !0,
            showSatisfactionSurvey: La,
            showOldCustomerSummary: !1,
            showNewCustomerSummary: !0,
            "shippingAddressEdit.attributes": {
                href: "#"
            },
            "shippingAddressEdit.class": "wnd-shipping-address",
            "billingAddressEdit.attributes": {
                href: "#"
            },
            "billingAddressEdit.class": "wnd-billing-address",
            "deliveryAddressEdit.attributes": {
                href: "#"
            },
            "deliveryAddressEdit.class": "wnd-delivery-address",
            "paymentAddressEdit.attributes": {
                href: "#"
            },
            "paymentAddressEdit.class": "wnd-payment-address"
        })
    };
    n.Bc = function() {
        var a = this.a.a("e_order.shipping_type"),
            d = this.a.a("e_order.step");
        return "in-store" !== a && "zasilkovna" !== a && d > yj
    };
    n.Cc = function() {
        var a = this.a.a("e_order.shipping_type"),
            d = this.a.a("e_order.step");
        return ("in-store" === a || "zasilkovna" === a) && d > yj
    };
    n.ya = function() {
        switch (this.a.a("e_order.shipping_type")) {
            case "in-store":
                return this.a.ya(this.a.a("e_order.shipping_method"));
            case "zasilkovna":
                return this.a.a("e_order.shipping_pickup_point_name");
            default:
                return ""
        }
    };

    function uk(a, d) {
        Y.call(this, a, d);
        this.s = null
    }
    v(uk, Y);
    n = uk.prototype;
    n.getValue = function() {
        return this.w().value
    };
    n.Xa = function(a) {
        this.w().value = a
    };

    function vk(a, d) {
        d ? a.w().setAttribute("required", "") : a.w().removeAttribute("required")
    }

    function wk(a, d) {
        d ? a.w().setAttribute("disabled", "disabled") : a.w().removeAttribute("disabled")
    }
    n.w = function() {
        return this.s || (this.s = this.j().querySelector("input, select, textarea"))
    };
    n.I = function() {
        var a = this.a.getData(),
            d = ye,
            e = uk.i.I.call(this),
            a = a.label,
            f = this.a.getData(),
            k = {
                type: f.inputType ? f.inputType : "text",
                name: f.name ? f.name : "",
                required: !!f.required,
                autocomplete: f.autocomplete ? f.autocomplete : "off",
                placeholder: f.label
            };
        f.pattern && (k.pattern = f.pattern);
        return d(e, {
            "label-text": a,
            "label.attributes": {},
            "input.attributes": k,
            items: [{
                attributes: {},
                text: "\u010cesk\u00e1 republika"
            }]
        })
    };
    n.Va = function() {
        var a = this.j();
        return null != a && "none" !== a.style.display && 0 !== a.clientWidth && 0 !== a.clientHeight && 0 !== a.style.opacity && "hidden" !== a.style.visibility
    };

    function xk(a, d) {
        Eb(a.j(), "wnd-invalid", !d)
    };

    function yk(a, d) {
        uk.call(this, a, d)
    }
    v(yk, uk);
    yk.prototype.getValue = function() {
        return this.w().checked
    };
    yk.prototype.Xa = function(a) {
        this.w().checked = a
    };
    yk.prototype.G = function() {
        Eb(this.j(), "wnd-checked", !!this.getValue())
    };

    function zk(a, d) {
        uk.call(this, a, d)
    }
    v(zk, uk);
    zk.prototype.m = function(a) {
        this.j().querySelector(".ch-form-select-error").textContent = a
    };
    zk.prototype.l = function() {
        this.m("")
    };
    zk.prototype.sa = function() {
        Ab(this.j(), "wnd-loading")
    };
    zk.prototype.v = function() {
        Db(this.j(), "wnd-loading")
    };

    function Ak(a, d) {
        Y.call(this, a, d);
        this.o = this.s = this.D = null
    }
    v(Ak, Y);

    function Bk(a) {
        return a.D || (a.D = B("wnd-button-submit", a.j()))
    }

    function Ck(a, d) {
        Bk(a).disabled = d;
        Eb(Bk(a), "wnd-waiting", d)
    }

    function Dk(a) {
        return a.s || (a.s = B("wnd-button-back", a.j()))
    }
    Ak.prototype.S = function() {
        Ak.i.S.call(this);
        this.s = this.s = null
    };
    Ak.prototype.aa = function() {
        this.j() && (Ab(this.j(), "wnd-show"), Db(this.j(), "wnd-hide"))
    };
    Ak.prototype.qa = function() {
        this.j() && (Ab(this.j(), "wnd-hide"), Db(this.j(), "wnd-show"))
    };
    Ak.prototype.I = function() {
        return ye(Ak.i.I.call(this), {
            "form.attributes": {
                action: "",
                method: "post"
            },
            "submit.attributes": {
                type: "submit",
                name: "send",
                value: this.a.L()
            },
            "submit.class": "wnd-button-submit",
            "back.attributes": {
                href: ""
            },
            "back.class": "wnd-button-back",
            terms: R(this.a, "termsLabel"),
            shippingMethod: "PPL - next day delivery",
            "shippingMethodEdit.attributes": {
                href: "?"
            },
            shippingAddress: "Jmeno P\u0159\u00edjmen\u00ed\nHlinky 995/70, Brno 603 00\nCzech Republic\n+420 777 123 456",
            "shippingAddressEdit.attributes": {
                href: "?"
            }
        })
    };

    function Ek(a, d) {
        Ak.call(this, a, d)
    }
    v(Ek, Ak);

    function Fk(a, d) {
        Y.call(this, a, d);
        this.X = !0
    }
    v(Fk, Y);
    Fk.prototype.m = function(a) {
        this.j().querySelector(".checkout-stripe-error").textContent = a
    };
    Fk.prototype.l = function() {
        this.m("")
    };
    Fk.prototype.U = function() {
        Fk.i.U.call(this);
        var a = {
            base: {
                color: "#364354",
                lineHeight: "36px",
                fontFamily: '"Open Sans", "Trebuchet MS", sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "transparent"
                }
            },
            invalid: {
                color: "#f59b99",
                iconColor: "#f59b99"
            }
        };
        if (null != window.Stripe) {
            var d = R(this.a, "locale");
            null == window.b && (window.b = window.Stripe(R(this.a, "public_key"), {
                locale: d
            }));
            var e = window.b.elements({
                    locale: d
                }),
                d = e.create("cardNumber", {
                    style: a
                }),
                f = e.create("cardExpiry", {
                    style: a
                }),
                a = e.create("cardCvc", {
                    style: a
                });
            window.c = d;
            window.h = f;
            window.m = a;
            d.mount(".checkout-stripe-card-number");
            f.mount(".checkout-stripe-card-expiry");
            a.mount(".checkout-stripe-card-cvc");
            d.addEventListener("change", t(this.l, this));
            f.addEventListener("change", t(this.l, this));
            a.addEventListener("change", t(this.l, this))
        }
        Db(this.j(), "wnd-loading");
        a = O.f().get("checkout_order").getData();
        a["e_order.step"] === Aj && ("8" === a["e_order.payment_service_id"] ? this.aa() : this.qa())
    };

    function Gk(a, d) {
        Y.call(this, a, d);
        this.X = !0
    }
    v(Gk, Y);
    Gk.prototype.U = function() {
        Gk.i.U.call(this);
        Hk(this);
        Db(this.j(), "wnd-loading");
        var a = O.f().get("checkout_order").getData();
        a["e_order.step"] === Aj && ("12" === a["e_order.payment_service_id"] ? this.aa() : this.qa())
    };

    function Hk(a) {
        var d = {
            base: {
                color: "#364354",
                lineHeight: "36px",
                fontFamily: '"Open Sans", "Trebuchet MS", sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                padding: "0 10px",
                "::placeholder": {
                    color: "transparent"
                }
            },
            invalid: {
                color: "#f59b99",
                iconColor: "#f59b99"
            }
        };
        if (null != window.Stripe) {
            var e = R(a.a, "locale");
            null == window.b && (window.b = window.Stripe(R(a.a, "public_key"), {
                locale: e
            }));
            d = window.b.elements({
                locale: e
            }).create("idealBank", {
                style: d
            });
            window.g = d;
            d.mount("#ideal-bank-element");
            d.on("change", t(function(a) {
                this.a.T =
                    a.value
            }, a))
        }
    };

    function Ik(a, d) {
        Y.call(this, a, d);
        this.o = null
    }
    v(Ik, Y);
    n = Ik.prototype;
    n.S = function() {
        R(this.a, "isAvailable") && (qj(this, this.I()), this.aa())
    };
    n.w = function() {
        return this.o || (this.o = this.j().querySelector("input[type=radio]"))
    };
    n.U = function() {
        Ik.i.U.call(this);
        this.o = null
    };
    n.G = function() {
        Eb(this.j(), "wnd-checked", this.w().checked)
    };
    n.getName = function() {
        return this.w().name
    };
    n.I = function() {
        var a = this.a.getData(),
            d = this.a.h(),
            e = a.price;
        if ("shipping" === a.methodType) {
            var f = !1;
            null != d["e_order.discounts"] && w(d["e_order.discounts"], t(function(a) {
                "FREE_SHIPPING" === a.type && (f = !0)
            }, this), this);
            f && (e = E("wnd.pc.CheckoutPageZone.label.free") || "free")
        }
        var k = "",
            l = "";
        "shipping" === a.methodType && (k = this.a.ya(a.value), l = fk(a.value));
        return ye(Ik.i.I.call(this), {
            title: a.label,
            price: e,
            "label.attributes": {
                "for": "input_" + this.a.L()
            },
            "input.attributes": {
                id: "input_" + this.a.L(),
                type: "radio",
                name: this.getName(),
                value: a.value,
                checked: this.w().checked,
                required: !0
            },
            "contentElement.class": Jk(this).join(" "),
            showMethodContent: ek(this.a),
            showShippingAddress: !!a.showShippingAddress,
            showStoreAddress: !!a.showStoreAddress,
            showFieldset: this.a.o,
            shippingFullName: d["e_order.shipping_full_name"] ? d["e_order.shipping_full_name"] : "",
            shippingAddress: d["e_order.shipping_address"] ? d["e_order.shipping_address"] : "",
            shippingCountry: d["e_order.shipping_country_localised"] ? d["e_order.shipping_country_localised"] : "",
            shippingPhone: d["e_order.shipping_phone"] ? d["e_order.shipping_phone"] : "",
            storeAddress: k,
            showMethodNote: "" !== l,
            methodNote: l ? l : "",
            showMethodApiNote: a.showMethodApiNote,
            methodApiNote: a.methodApiNote,
            showMethodError: !1,
            methodError: "",
            showDisabledNote: a.showDisabledNote,
            disabledNote: a.disabledNote
        })
    };
    n.aa = function() {
        Eb(this.j(), "wnd-hide", !1);
        N.prototype.aa()
    };

    function Jk(a) {
        var d = [];
        d.push("wnd-" + R(a.a, "cssClass"));
        a.w().checked && d.push("wnd-checked");
        ek(a.a) || d.push("wnd-simple");
        return d
    };

    function Kk(a, d) {
        Ik.call(this, a, d)
    }
    v(Kk, Ik);
    Kk.prototype.U = function() {
        Kk.i.U.call(this);
        var a = R(this.a, "showDisabledNote");
        a && (this.w().checked = !1);
        (this.w().disabled = a) ? Ab(this.j(), "wnd-disabled"): Db(this.j(), "wnd-disabled")
    };
    Kk.prototype.S = function() {
        Kk.i.S.call(this);
        qj(this, this.I());
        this.aa()
    };

    function Lk(a, d) {
        Ik.call(this, a, d)
    }
    v(Lk, Ik);
    Lk.prototype.U = function() {
        Lk.i.U.call(this);
        var a = ik(),
            d;
        d = a ? E("wnd.fe.CheckoutSelectMethodZasilkovnaItem.change") || "Change pickup point" : E("wnd.fe.CheckoutSelectMethodZasilkovnaItem.choose") || "Choose pickup point";
        var e = this.j().querySelector(".ch-form-method-info-note");
        a && (a = document.createElement("br"), e.appendChild(a));
        this.h = document.createElement("a");
        this.h.href = "#";
        this.h.id = this.a.id + "_zasilkovna_pickup";
        this.h.textContent = d;
        e.appendChild(this.h);
        this.a.m && Eb(this.j(), "wnd-invalid", !0)
    };
    Lk.prototype.I = function() {
        var a = ye,
            d = Lk.i.I.call(this),
            e = O.f().get("checkout_order").getData();
        return a(d, {
            showMethodContent: !0,
            showMethodNote: !0,
            methodNote: null != e["e_order.shipping_pickup_point_name"] ? e["e_order.shipping_pickup_point_name"] : "",
            showMethodApiNote: !1,
            methodApiNote: "",
            showMethodError: this.a.m,
            methodError: E("wnd.fe.CheckoutSelectMethodZasilkovnaItem.error") || "Please select dispensing point"
        })
    };

    function Mk(a, d) {
        Ak.call(this, a, d)
    }
    v(Mk, Ak);

    function Nk(a, d) {
        Y.call(this, a, d);
        this.Y = this.o = this.D = this.N = this.H = this.s = null
    }
    v(Nk, Y);
    Nk.prototype.S = function() {
        Nk.i.S.call(this);
        this.Y = this.o = this.D = this.N = this.H = this.s = null
    };

    function Ok() {
        var a = O.f().get("project_info").getData();
        return "1" === a.eshop_tax_enabled && "SALES_TAX" !== a.eshop_tax_type
    }

    function Pk(a) {
        return a.s || (a.s = B("checkout-discount", a.j()))
    }

    function Qk(a) {
        return a.H || (a.H = B("checkout-discount-form", a.j()))
    }

    function Rk(a) {
        return a.N || (a.N = B("checkout-discount-form-button", a.j()))
    }

    function Sk(a) {
        return a.D || (a.D = B("checkout-discount-form-input", a.j()))
    }

    function Tk(a) {
        return a.o || (a.o = B("checkout-discount-active-cancel", a.j()))
    }

    function Uk(a) {
        (a.Y || (a.Y = B("checkout-discount-form-error", a.j()))).innerHTML = a.a.l;
        "" !== a.a.l ? Ab(Qk(a), "error") : Db(Qk(a), "error")
    }
    Nk.prototype.I = function() {
        var a = Nk.i.I.call(this),
            d = this.a.h(),
            e = [];
        w(d["e_order.taxes_rates_prices_localised"], t(function(a, d) {
            var f = E("wnd.pc.CheckoutSummaryBlock.tax.label", {
                taxrate: d
            });
            e.push(ch("wnd.pc.CheckoutSummaryTaxRow", {
                label: f,
                price: a
            }))
        }, this), this);
        var f = [],
            k = "",
            l = null,
            p = E("wnd.pc.CheckoutPageZone.label.discount") || "Discount",
            r = E("wnd.pc.CheckoutPageZone.label.voucher") || "Voucher";
        Pa(d["e_order.discounts"]) || w(d["e_order.discounts"], t(function(a) {
            if ("FREE_SHIPPING" === a.type) k = a.localisedName;
            else {
                var d = "",
                    d = null == a.code || /^[\s\xa0]*$/.test(a.code) ? p : r;
                f.push(ch("wnd.pc.CheckoutSummaryDiscountRow", {
                    name: d,
                    label: a.localisedName,
                    price: a.priceOffLocalised
                }))
            }
            null != a.code && !/^[\s\xa0]*$/.test(a.code) && (l = a.code)
        }, this), this);
        var x = {
            paymentMethod: d["e_order.payment_method_name"],
            subtotalPrice: d["e_order.subtotal_price_localised"],
            showShippingPrice: !0,
            shippingPrice: d["e_order.shipping_price_localised"],
            showPaymentPrice: 0 < d["e_order.payment_price"],
            paymentPrice: d["e_order.payment_price_localised"],
            showTaxes: !qb(e),
            showPriceVat: Ok(),
            showPriceExVat: Ok(),
            taxesPrice: d["e_order.taxes_price_localised"],
            totalPrice: d["e_order.total_price_localised"],
            totalPriceExVat: d["e_order.total_price_ex_vat_localised"],
            totalDualCurrency: "EUR" === d["e_order.currency"] && Ye("dualCurrency") ? d["e_order.total_dual_currency"] : "",
            taxes: e.join(""),
            "finishButton.class": "wnd-button-finish " + (d["e_order.step"] === Aj ? "wnd-show" : "wnd-hide"),
            "taxes.class": "wnd-taxes wnd-show",
            showDiscount: !0,
            discountCode: null != l ? l : "",
            discountActiveClass: null !=
                l ? "open" : "close",
            discountError: this.a.l,
            discounts: f.join(""),
            "discountCodeInput.attributes": {
                autocomplete: "off",
                name: "voucher",
                "class": "checkout-discount-form-input"
            },
            shippingDiscount: k,
            priceExchangeInfo: lk(),
            dualCurrencyInfo: "EUR" === d["e_order.currency"] && Ye("dualCurrency") ? d["e_order.dual_currency_info"] : ""
        };
        d.shippingPriceLabel && (x.shippingPriceLabel = d.shippingPriceLabel);
        return ye(a, x)
    };

    function Vk(a, d) {
        uk.call(this, a, d);
        this.o = null
    }
    v(Vk, uk);
    Vk.prototype.sa = function() {
        Ab(this.j(), "wnd-loading")
    };
    Vk.prototype.v = function() {
        Db(this.j(), "wnd-loading")
    };

    function Z(a, d, e) {
        X.call(this, a, d, e);
        this.a.Kb = this
    }
    v(Z, Pj);
    Z.prototype.Ea = function(a, d, e, f) {
        y(this.b.g(), function(a) {
            nk(this, a, this.j())
        }, this);
        Z.i.Ea.call(this, a, d, e, f)
    };

    function nk(a, d, e, f) {
        var k = Q.f(),
            l;
        f = f || a;
        if (Af(k, d)) l = k.get(d), l.a.T = e, l.a.Va() || l.fa();
        else {
            var p = O.f().get("content_items").getData(d).type,
                r = {
                    id: d
                };
            f instanceof Z && (r.properties = {
                contentMap: Wk(f, d, p)
            });
            l = k.create(d, p, e, f, r);
            d = new Qe("dataCreate", "parent_propagation", l.b.W, l, l.b.id);
            M(a, d);
            l instanceof Pj && (d = l.b.g(), y(d, function(a) {
                nk(this, a, l.a.ra(), l)
            }, a))
        }
    }

    function Wk(a, d, e) {
        var f = R(a.b, "contentMap"),
            k;
        if (null != f[e] && ka(f[e])) {
            e = f[e];
            f = {};
            for (k in e) f[e[k]] = k;
            k = f
        } else k = {};
        f = k;
        d = null != f[d] ? f[d] : null;
        k = a.b.c;
        (a = R(a.b, "contentIdentifier")) && (k += "_" + a);
        return {
            parent: k,
            identifier: d
        }
    }
    Z.prototype.ba = function(a, d) {
        return ye(Z.i.ba.call(this, a, d), {
            contentMap: Wk(this, a, d)
        })
    };
    Z.prototype.B = function() {
        var a = Q.f(),
            d = qf.f().get("content_items"),
            e = [];
        w(R(this.b, "content"), function(a) {
            e = tb(e, a)
        });
        xb(e);
        y(e, function(e) {
            Af(a, e) || d["delete"](e)
        });
        Z.i.B.call(this)
    };

    function Xk(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(Xk, Z);
    n = Xk.prototype;
    n.A = function() {
        Xk.i.A.call(this);
        pk(this.a) && this.c.u(pk(this.a), "click", t(this.Sa, this, yj));
        qk(this.a) && this.c.u(qk(this.a), "click", t(this.Sa, this, ij));
        rk(this.a) && this.c.u(rk(this.a), "click", t(this.Sa, this, ij));
        sk(this.a) && this.c.u(sk(this.a), "click", t(this.Sa, this, zj));
        tk(this.a) && this.c.u(tk(this.a), ["invalid", "change"], t(this.Dc, this));
        var a = Sc("ch-customer-note");
        a && this.c.u(a, "change", t(this.xc, this))
    };
    n.Dc = function(a) {
        var d = !1;
        "invalid" !== a.type && (d = tk(this.a).checkValidity());
        a = d;
        d = tk(this.a).parentNode;
        Eb(d, "wnd-invalid", !a)
    };
    n.Sa = function(a, d) {
        d.preventDefault();
        Lj(this.g.g, a);
        if (a === ij) {
            var e = new J("checkoutResetNavigationMaxStep", this);
            M(this, e)
        }
        e = new Of;
        e.data = {
            step: a
        };
        T(e, t(this.Ec, this));
        V(U.f(), e)
    };
    n.Ec = function(a, d) {
        "success" === a && this.ia(d)
    };
    n.ia = function(a) {
        H.checkout_order = ze(a);
        mf(O.f(), "checkout_order");
        wf(this.b, "data_updated", !1);
        M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order", this))
    };
    n.P = function(a) {
        "dataUpdate" === a.getType() && "checkout_order" === a.b && wf(this.b, "data_updated", !1);
        Xk.i.P.call(this, a)
    };
    n.xc = function() {
        var a = Sc("ch-customer-note");
        if (a) {
            var a = a.value,
                d = new Of;
            d.data = {
                customer_note: a
            };
            V(U.f(), d)
        }
    };
    Q.f().register("wnd.pc.CheckoutAddressBlock", Wj, ok, Xk);

    function Yk(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(Yk, Z);

    function $i(a) {
        for (a = a.g; !1 === a instanceof Zk;) a = a.g;
        return a
    }
    n = Yk.prototype;
    n.A = function() {
        Yk.i.A.call(this);
        this.c.u(this.a.w(), "change", this.G);
        this.c.u(this.a.w(), "keyup", this.gc);
        this.c.u(this.a.w(), "blur", this.hb);
        this.c.u(this.a.w(), "invalid", this.ec)
    };
    n.getName = function() {
        return R(this.b, "name")
    };
    n.getValue = function() {
        return this.a.getValue()
    };
    n.Fa = function(a) {
        this.a.Xa(a)
    };

    function $k(a, d) {
        return R(a.b, "requiredIfChecked") === d
    }
    n.G = function() {
        this.notify("onChange")
    };
    n.gc = function() {
        var a = this.a.w();
        xk(this.a, a.checkValidity())
    };
    n.hb = function() {
        var a = this.a.w();
        xk(this.a, a.checkValidity())
    };
    n.ec = function() {
        xk(this.a, !1)
    };
    n.fa = function() {
        Yk.i.fa.call(this);
        zb(this.j(), "wnd-hide") && Db(this.j(), "wnd-hide")
    };
    Q.f().register("wnd.pc.CheckoutShortTextField", Yj, uk, Yk);
    Q.f().register("wnd.pc.CheckoutSelectboxField", Yj, uk, Yk);

    function al(a, d, e) {
        Z.call(this, a, d, e);
        this.l = !1;
        this.h = !0;
        a = document.querySelector('input[name="differentShippingAddress"]').checked;
        d = this.getName();
        "billing_country" === d && a ? this.h = !1 : "shipping_country" !== d || a || (this.h = !1);
        a = O.f().get("checkout_order").getData();
        this.h && a["e_order.step"] === ij && bl($i(this));
        cl(this)
    }
    v(al, Yk);
    n = al.prototype;
    n.J = function(a) {
        al.i.J.call(this, a);
        "checkoutRenewShippingMethodsCountryOk" === a.getType() && (xk(this.a, !0), this.a.w().setCustomValidity(""), this.a.v());
        "checkoutRenewShippingMethodsCountryFail" === a.getType() && this.h && (a = a.g, this.l && xk(this.a, !1), this.a.w().setCustomValidity(a), this.a.m(a), this.a.v())
    };
    n.Fa = function(a) {
        this.a.Xa(a)
    };
    n.G = function(a) {
        al.i.G.call(this, a);
        this.l = !0;
        this.a.l();
        this.h && (this.a.sa(), bl($i(this)));
        cl(this)
    };

    function cl(a) {
        var d = new J("checkoutCountrySelectChanged", a);
        M(a, d)
    }
    n.lb = function() {
        this.h = !1;
        xk(this.a, !0);
        this.a.w().setCustomValidity("")
    };
    n.mb = function() {
        this.h = !0;
        xk(this.a, !0);
        this.a.w().setCustomValidity("")
    };
    Q.f().register("wnd.pc.CheckoutCountryField", Yj, zk, al);

    function dl(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(dl, Z);
    dl.prototype.J = function(a) {
        dl.i.J.call(this, a);
        "checkoutChangeStep" === a.getType() && a.a.o === Aj && el(this);
        "stripeCardError" === a.getType() && this.a.m(a.g)
    };
    dl.prototype.P = function(a) {
        "dataUpdate" === a.getType() && "checkout_order" === a.b && el(this);
        dl.i.P.call(this, a)
    };

    function el(a) {
        "8" === O.f().get("checkout_order").getData()["e_order.payment_service_id"] ? a.fa() : xf(a)
    }
    Q.f().register("wnd.pc.CheckoutPaymentStripeCardBlock", bk, Fk, dl);

    function fl(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(fl, Z);
    fl.prototype.J = function(a) {
        fl.i.J.call(this, a);
        "checkoutChangeStep" === a.getType() && a.a.o === Aj && gl(this)
    };
    fl.prototype.P = function(a) {
        "dataUpdate" === a.getType() && "checkout_order" === a.b && gl(this);
        fl.i.P.call(this, a)
    };

    function gl(a) {
        "12" === O.f().get("checkout_order").getData()["e_order.payment_service_id"] ? a.fa() : xf(a)
    }
    Q.f().register("wnd.pc.CheckoutPaymentStripeIdealBlock", ck, Gk, fl);

    function hl(a, d, e) {
        Z.call(this, a, d, e);
        d = Tj(this);
        a.o = !qb(d.m)
    }
    v(hl, Z);
    n = hl.prototype;
    n.A = function() {
        hl.i.A.call(this);
        this.c.u(this.a.w(), "change", t(this.wc, this))
    };
    n.P = function(a) {
        "dataUpdate" !== a.getType() || "checkout_order" !== a.b && "discounts_update" !== a.b || wf(this.b, "data_updated", !1);
        hl.i.P.call(this, a)
    };
    n.wc = function() {
        var a = this.g.getName(),
            d = this.g.getValue(),
            e = {};
        e[a] = d;
        a = new Of;
        a.data = e;
        T(a, t(this.Hc, this));
        V(U.f(), a);
        y(this.g.m, function(a) {
            a.G()
        });
        "shipping" !== R(this.b, "methodType") || this instanceof il || (jl(this).bb = !1)
    };
    n.G = function() {
        this.a.G();
        var a = Tj(this);
        y(a.m, t(function(a) {
            if (a instanceof Yk && $k(a, this.L())) {
                var e = this.a.w().checked;
                vk(a.a, e)
            }
        }, this))
    };
    n.Hc = function(a, d) {
        if ("success" === a) {
            var e = {};
            e[yj] = {
                Ba: "selected shipping method",
                value: d["e_order.shipping_method_name"]
            };
            e[zj] = {
                Ba: "selected payment method",
                value: d["e_order.payment_method_name"]
            };
            e = e[d["e_order.step"]];
            null != e && ei.f().send($h, {
                checkout_step: d["e_order.step"],
                checkout_option: e.Ba,
                value: e.value
            });
            e = Ri.f();
            Ti(e) ? Xi(e, d) : this.ia(d)
        }
    };
    n.ia = function(a) {
        H.checkout_order = ze(a);
        mf(O.f(), "checkout_order");
        M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order", this))
    };
    n.rb = function(a) {
        var d = this.a;
        d.w().checked = a;
        d.G()
    };
    n.Aa = function() {
        Pj.prototype.Aa.call(this);
        ("shipping" === R(this.b, "methodType") ? R(this.b, "isAvailable") : 1) ? this.fa(): xf(this)
    };
    n.getValue = function() {
        return R(this.b, "value")
    };

    function jl(a) {
        for (a = a.g; !(a instanceof Zk);) a = a.g;
        return a
    }
    Q.f().register("wnd.pc.CheckoutSelectMethodItem", dk, Ik, hl);

    function kl(a, d, e) {
        hl.call(this, a, d, e)
    }
    v(kl, hl);
    Q.f().register("wnd.pc.CheckoutSelectMethodKlarnaItem", gk, Kk, kl);

    function il(a, d, e) {
        hl.call(this, a, d, e);
        ff(this.a);
        this.a.w().checked && !ik() && this.wa();
        jl(this).observe("clickOnDisabledContinue", this.ac, this)
    }
    v(il, hl);
    var ll = "";
    n = il.prototype;
    n.A = function() {
        il.i.A.call(this);
        this.a.h && this.c.u(this.a.h, "click", t(this.kc, this))
    };
    n.ac = function() {
        this.a.w().checked && (this.b.m = !0, ff(this.a))
    };
    n.G = function() {
        il.i.G.call(this);
        this.a.w().checked ? ik() ? ml(this) : (this.wa(), nl(this)) : (this.b.m = !1, ff(this.a))
    };
    n.kc = function(a) {
        a.preventDefault();
        a.stopPropagation();
        nl(this)
    };

    function nl(a) {
        var d = a.b.getData().value;
        window.Packeta.Widget.pick(null != H.e_shipping_method[d].apiKey ? H.e_shipping_method[d].apiKey : "", t(a.Zb, a), {
            country: jk(),
            language: ol(),
            appIdentity: "webnode",
            webUrl: window.location.hostname
        })
    }

    function ol() {
        switch (F.frontendLanguage) {
            case "cz":
                return "cs";
            case "en-us":
                return "en";
            default:
                return F.frontendLanguage
        }
    }
    n.wa = function() {
        ll = this.b.id;
        jl(this).wa()
    };

    function ml(a) {
        ll = "";
        a.b.m = !1;
        jl(a).bb = !1
    }
    n.Zb = function(a) {
        if (null !== a) {
            ml(this);
            var d = a.id;
            a = a.place + ("" !== a.place ? ", " : "") + a.street + ", " + a.city + ", " + a.zip;
            var e = new Nf;
            e.data = {
                pickupPointId: d,
                pickupPointName: a
            };
            V(U.f(), e);
            H.checkout_order = ze({
                "e_order.shipping_pickup_point_id": d,
                "e_order.shipping_pickup_point_name": a
            });
            mf(O.f(), "checkout_order");
            wf(this.b, "data_updated", !1);
            M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order", this))
        }
        ff(this.a)
    };
    n.rb = function(a) {
        var d = this.a;
        d.w().checked = a;
        d.G();
        a && !ik() ? this.wa() : ll === this.b.id && ml(this)
    };
    Q.f().register("wnd.pc.CheckoutSelectMethodZasilkovnaItem", hk, Lk, il);

    function pl(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(pl, Z);
    n = pl.prototype;
    n.A = function() {
        pl.i.A.call(this);
        this.c.u(Pk(this.a), "click", t(this.$b, this));
        this.c.u(Rk(this.a), "click", this.Eb);
        this.c.u(Tk(this.a), "click", this.Vb);
        this.c.u(Sk(this.a), "change", this.Db);
        this.c.u(Sk(this.a), "keyup", this.Db);
        this.c.u(Sk(this.a), "focus", this.bc)
    };
    n.$b = function(a) {
        a.stopPropagation();
        a.preventDefault()
    };
    n.P = function(a) {
        "dataUpdate" !== a.getType() || "checkout_order" !== a.b && "checkout_order_shipping" !== a.b || wf(this.b, "data_updated", !1);
        pl.i.P.call(this, a)
    };
    n.Eb = function() {
        var a = Sk(this.a);
        if ("" === a.value.trim()) a.focus();
        else {
            var d = Rk(this.a);
            d.innerHTML = '<span class="ch-loading"></span> &nbsp;';
            d = B("ch-loading", d);
            d.style.opacity = 1;
            d.style.display = "block";
            d = new Of;
            d.data = {
                voucher: a.value
            };
            T(d, t(this.sc, this));
            V(U.f(), d)
        }
    };
    n.sc = function(a, d) {
        var e = Rk(this.a),
            f = E("wnd.templates.checkoutReviewDiscountFormButton") || "Send";
        e.innerHTML = f;
        if ("success" === a) ql(this, d);
        else {
            e = "";
            if (null != d.code) {
                var f = E("wnd.pc.CheckoutPageZone.voucherError.notFound") || "Voucher not found",
                    k = E("wnd.pc.CheckoutPageZone.voucherError.samePromotion") || "Same promotion has already been applied",
                    l = E("wnd.pc.CheckoutPageZone.voucherError.tooLittleDiscount") || "Higher discount has been applied",
                    p = E("wnd.pc.CheckoutPageZone.voucherError.cannotUse") || "Voucher can not be used for this order";
                switch (d.code) {
                    case 4004:
                        e = f;
                        break;
                    case 4005:
                        e = k;
                        break;
                    case 4006:
                        e = l;
                        break;
                    case 4007:
                        e = p
                }
            }
            this.b.l = e;
            Uk(this.a)
        }
    };
    n.Vb = function() {
        var a = new Of;
        a.data = {
            voucher: ""
        };
        T(a, t(this.qc, this));
        V(U.f(), a)
    };
    n.qc = function(a, d) {
        ql(this, d)
    };

    function ql(a, d) {
        H.checkout_order = ze(d);
        mf(O.f(), "checkout_order");
        wf(a.b, "data_updated", !1);
        M(a, new Qe("dataUpdate", "parent_propagation", "discounts_update", a))
    }
    n.Db = function(a) {
        var d = Sk(this.a);
        "" === d.value.trim() ? Db(d, "not-empty") : 13 === a.keyCode ? (this.Eb(), d.blur()) : Ab(d, "not-empty");
        "" !== this.b.l && (this.b.l = "", Uk(this.a))
    };
    n.bc = function() {
        "" !== this.b.l && (this.b.l = "", Uk(this.a))
    };
    Q.f().register("wnd.pc.CheckoutSummaryBlock", kk, Nk, pl);

    function rl(a, d, e) {
        Z.call(this, a, d, e);
        this.v = !1;
        this.h = !0;
        this.l = "";
        a = document.querySelector('input[name="differentShippingAddress"]').checked;
        d = this.getName();
        "billing_zip" === d && a ? this.h = !1 : "shipping_zip" !== d || a || (this.h = !1);
        sl(this)
    }
    v(rl, Yk);
    n = rl.prototype;
    n.J = function(a) {
        rl.i.J.call(this, a);
        if ("checkoutCountrySelectChanged" === a.getType()) {
            var d = this.getName(),
                e = a.a.getName();
            if ("billing_country" === e && "billing_zip" === d || "shipping_country" === e && "shipping_zip" === d) this.l = a.a.getValue(), sl(this)
        }
        "checkoutRenewShippingMethodsZipOk" === a.getType() && (tl(this), sl(this), this.a.v());
        "checkoutRenewShippingMethodsZipFail" === a.getType() && this.h && (ul(this, a.g), this.a.v())
    };
    n.lb = function() {
        this.h = !1;
        tl(this)
    };
    n.mb = function() {
        this.h = !0;
        sl(this)
    };

    function sl(a) {
        a.h && (vl(a) ? tl(a) : ul(a, null))
    }

    function vl(a) {
        var d = !0,
            e = a.getValue();
        "BR" === a.l && (d = /([\d]{5})([-]{0,1})([\d]{3})/gm.test(e));
        return d
    }

    function tl(a) {
        xk(a.a, !0);
        wl(a, "")
    }

    function ul(a, d) {
        a.v && xk(a.a, !1);
        if (null === d) switch (a.l) {
            case "BR":
                d = E("wnd.fe.CheckoutZipField.brInvalid");
                break;
            default:
                d = "Invalid ZIP"
        }
        wl(a, d)
    }
    n.G = function(a) {
        rl.i.G.call(this, a);
        this.v = !0;
        sl(this)
    };

    function wl(a, d) {
        a.a.w().setCustomValidity(d);
        a.b.ba = d;
        var e = a.a;
        null === e.o && (e.o = e.j().querySelector(".ch-form-text-error"));
        e.o.textContent = e.a.ba
    }
    n.hb = function() {
        rl.i.hb.call(this);
        this.h && vl(this) && (this.a.sa(), bl($i(this)))
    };
    Q.f().register("wnd.pc.CheckoutZipField", mk, Vk, rl);

    function xl(a, d, e) {
        Z.call(this, a, d, e)
    }
    v(xl, Yk);
    xl.prototype.Fa = function(a) {
        this.a.Xa(a)
    };
    xl.prototype.G = function(a) {
        xl.i.G.call(this, a);
        this.a.G();
        yl(this)
    };

    function yl(a) {
        var d = a.za,
            e = !1;
        d instanceof zl && y(d.m, function(a) {
            if (a instanceof Yk && $k(a, this.L())) {
                var d = !!this.getValue();
                vk(a.a, d)
            }
            if (a instanceof al || a instanceof rl) this.getValue() ? a.mb() : a.lb(), e = !0
        }, a);
        if (e)
            for (d = a.kb; d;) {
                if (d instanceof al || d instanceof rl) a.getValue() ? d.lb() : d.mb();
                d = d.kb
            }
        e && bl($i(a))
    }
    Q.f().register("wnd.pc.CheckoutCheckboxField", Yj, yk, xl);

    function zl(a, d, e) {
        X.call(this, a, d, e);
        a.D = e.L();
        this.H = ["billing_country", "shipping_country"];
        this.N = ["billing_state_us", "shipping_state_us"];
        this.F = ["billing_state_br", "shipping_state_br"];
        this.h = this.l = this.v = null;
        !1 !== Al(this) && (this.v.observe("onChange", t(this.T, this), this), "billing_country" === this.v.getName() && (this.h.observe("onChange", t(this.da, this), this), Ri.f().a = this.h), this.T())
    }
    v(zl, Pj);
    zl.prototype.P = function(a) {
        if ("dataUpdate" === a.getType() && "checkout_order" === a.b) {
            var d = this.b.h();
            y(this.m, function(a) {
                if (a instanceof Yk) {
                    var f = "e_order." + a.getName();
                    q(d[f]) && a.Fa(d[f])
                }
            });
            null != this.v && null != this.h && null != this.h && this.T()
        }
        zl.i.P.call(this, a)
    };
    zl.prototype.V = function() {
        var a = [];
        y(this.m, function(d) {
            d.a.Va() && a.push({
                name: d.getName(),
                value: d.getValue()
            })
        });
        return a
    };

    function Al(a) {
        y(a.m, t(function(a) {
            a instanceof Yk && (pb(this.H, a.getName()) ? this.v = a : pb(this.F, a.getName()) ? this.l = a : pb(this.N, a.getName()) && (this.h = a))
        }, a), a);
        return null != a.v && null != a.h && null != a.l
    }
    zl.prototype.T = function() {
        if ("US" === this.v.getValue()) this.h.fa(), vk(this.h.a, !0), wk(this.h.a, !1), xf(this.l), vk(this.l.a, !1), wk(this.l.a, !0);
        else if ("BR" === this.v.getValue()) this.l.fa(), vk(this.l.a, !0), wk(this.l.a, !1), xf(this.h), vk(this.h.a, !1), wk(this.h.a, !0);
        else if (xf(this.l), vk(this.l.a, !1), wk(this.l.a, !0), xf(this.h), vk(this.h.a, !1), wk(this.h.a, !0), "" !== this.h.getValue() || "" !== this.l.getValue()) this.h.Fa(""), this.l.Fa(""), "billing_country" === this.v.getName() && Ui(Ri.f())
    };
    zl.prototype.da = function() {
        Xi(Ri.f())
    };
    Q.f().register("wnd.pc.CheckoutFormFieldsetBlock", mj, Ej, zl);

    function Bl(a, d, e) {
        X.call(this, a, d, e)
    }
    v(Bl, Pj);
    Bl.prototype.getName = function() {
        return R(this.b, "name")
    };
    Bl.prototype.getValue = function() {
        var a = null;
        y(this.m, function(d) {
            d.a.w().checked && (a = d.getValue())
        });
        return a
    };
    Q.f().register("wnd.pc.CheckoutSelectMethodContainer", nj, Fj, Bl);

    function Zk(a, d, e) {
        Z.call(this, a, d, e);
        this.h = ij;
        this.l = !1
    }
    v(Zk, Z);
    n = Zk.prototype;
    n.A = function() {
        Zk.i.A.call(this);
        Bk(this.a) && this.c.u(Bk(this.a), "click", this.ka);
        Dk(this.a) && this.c.u(Dk(this.a), "click", this.ha)
    };
    n.J = function(a) {
        Zk.i.J.call(this, a);
        "checkoutChangeStep" === a.getType() && "children_propagation" === a.c && (a.a.o === this.h ? this.a.aa() : this.a.qa(), hh("wnd-redraw", this.j()))
    };

    function Cl(a) {
        var d = [];
        y(a.m, function(a) {
            a instanceof Yk ? a.a.Va() && d.push({
                name: a.getName(),
                value: a.getValue()
            }) : a instanceof Bl ? (d.push({
                name: a.getName(),
                value: a.getValue()
            }), d = d.concat(d, Cl(a))) : a.m && (d = d.concat(d, Cl(a)))
        }, this);
        return d
    }
    n.V = function() {
        return Cl(this)
    };

    function Zi(a) {
        var d = {};
        y(a.V(), function(a) {
            d[a.name] = a.value
        });
        return d
    }
    n.ka = function(a) {
        if (!this.l && a.a.form.checkValidity()) {
            if (He) {
                var d = document.createElement("input");
                document.body.appendChild(d);
                d.focus();
                d.blur();
                ed(d);
                d = this.a;
                d.o || (d.o = document.querySelector('meta[name="viewport"]'));
                d.o && (d.o.setAttribute("content", "width=device-width; minimum-scale=1.0; maximum-scale=1.0; initial-scale=1.0"), d.o.setAttribute("content", "user-scalable=no; width=device-width; minimum-scale=1.0; initial-scale=1.0"));
                window.scrollTo(0, 0)
            }
            a.preventDefault();
            this.oa(Zi(this))
        }
    };
    n.ha = function(a) {
        a.preventDefault();
        a.stopPropagation();
        a = new Of;
        a.data = {
            step: Math.max(this.h - 1, 0)
        };
        V(U.f(), a)
    };
    n.oa = function(a) {
        a.step = this.h + 1;
        var d = new Of;
        d.data = a;
        T(d, t(this.Fc, this));
        V(U.f(), d)
    };
    n.Fc = function(a, d) {
        if ("success" === a) {
            var e = {};
            e[yj] = {
                Ba: "selected shipping method",
                value: d["e_order.shipping_method_name"]
            };
            e[zj] = {
                Ba: "selected payment method",
                value: d["e_order.payment_method_name"]
            };
            e = e[d["e_order.step"]];
            null != e && ei.f().send($h, {
                checkout_step: d["e_order.step"],
                checkout_option: e.Ba,
                value: e.value
            });
            this.ia(d)
        }
    };
    n.ia = function(a) {
        H.checkout_order = ze(a);
        mf(O.f(), "checkout_order");
        M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order", this))
    };

    function Dl(a, d, e) {
        Zk.call(this, a, d, e);
        this.h = Aj;
        this.v = {}
    }
    v(Dl, Zk);
    n = Dl.prototype;
    n.oa = function(a) {
        var d = O.f().get("checkout_order").getData();
        this.l = !0;
        Ck(this.a, !0);
        a.show_in_customers = 1;
        if ("8" === d["e_order.payment_service_id"] && null != window.b && null != window.c && Number(d["e_order.total_price"]) > Number.EPSILON) d = new J("stripeCardError", this, "parent_propagation", ""), M(this, d), this.v = a, a = new Hf, T(a, t(this.yc, this)), V(U.f(), a);
        else {
            if ("12" === d["e_order.payment_service_id"] && null != window.b && null != window.g) {
                for (var d = "", e = Tj(this); null !== e;) e instanceof fl && (d = e.b.T), e = Tj(e);
                a.stripe_token =
                    d
            }
            El(this, a)
        }
    };

    function El(a, d) {
        var e = new Of;
        e.data = d;
        T(e, t(a.Ob, a));
        V(U.f(), e)
    }
    n.yc = function(a, d) {
        null != d.intentClientSecret ? window.b.handleCardPayment(d.intentClientSecret, window.c, {}).then(t(function(a) {
            a.error ? (Fl(this, a.error.message), this.v.stripe_token = "") : (this.v.stripe_token = a.paymentIntent.id, El(this, this.v))
        }, this)) : Fl(this, d.text)
    };

    function Fl(a, d) {
        a.l = !1;
        Ck(a.a, !1);
        var e = new J("stripeCardError", a, "parent_propagation", d);
        M(a, e)
    }
    n.Ob = function() {
        var a = new Jf;
        a.data.customerNote = Sc("ch-customer-note") ? Sc("ch-customer-note").value : null;
        a.data.acceptsMarketing = Sc("ch-marketing") ? Sc("ch-marketing").checked : !1;
        a.data.acceptsSatisfactionSurvey = Sc("ch-survey") ? Sc("ch-survey").checked : !1;
        T(a, t(this.dc, this));
        V(U.f(), a)
    };
    n.dc = function(a, d) {
        if ("success" === a) {
            var e = Zc("form", {
                    method: d.method,
                    action: d.url
                }),
                f;
            w(d.data, function(a, d) {
                f = Zc("input", {
                    type: "hidden",
                    name: d,
                    value: a
                });
                bd(e, f)
            });
            document.body.appendChild(e);
            e.submit()
        } else {
            if (4008 === d.code) {
                var k = E("wnd.pc.CheckoutPageZone.voucherError.invalidDiscounts");
                window.location.href = "?error=" + k
            }
            4010 === d.code && Lj(this.g, ij);
            this.l = !1;
            Ck(this.a, !1)
        }
    };
    n.ha = function(a) {
        Dl.i.ha.call(this, a);
        Lj(this.g, zj)
    };
    Q.f().register("wnd.pc.CheckoutConfirmFormBlock", Zj, Ak, Dl);

    function Gl(a, d, e) {
        this.N = this.H = this.T = this.v = this.F = null;
        Zk.call(this, a, d, e);
        this.h = ij
    }
    v(Gl, Zk);
    Gl.prototype.ka = function(a) {
        Gl.i.ka.call(this, a);
        a.a.form.checkValidity() && Lj(this.g, yj)
    };
    Gl.prototype.oa = function(a) {
        a.shipping_method = Zi(this.za).shipping_method;
        Gl.i.oa.call(this, a)
    };
    Gl.prototype.ha = function() {};

    function bl(a) {
        Bk(a.a).disabled = !0;
        var d;
        Hl(a) ? (null === a.H && (a.H = document.querySelector('select[name="shipping_country"]')), d = a.H.value) : (null === a.v && (a.v = document.querySelector('select[name="billing_country"]')), d = a.v.value);
        var e;
        Hl(a) ? (null === a.N && (a.N = document.querySelector('input[name="shipping_zip"]')), e = a.N.value) : (null === a.T && (a.T = document.querySelector('input[name="billing_zip"]')), e = a.T.value);
        var f = new Mf;
        f.data = {
            country: d,
            zip: e
        };
        T(f, t(a.da, a));
        V(U.f(), f)
    }
    Gl.prototype.da = function(a, d) {
        Bk(this.a).disabled = !1;
        if ("success" !== a || Pa(d.methods)) {
            var e = d.text,
                f, k;
            "zip" === d.code ? (k = "checkoutRenewShippingMethodsZipFail", f = "checkoutRenewShippingMethodsCountryOk") : (k = "checkoutRenewShippingMethodsCountryFail", f = "checkoutRenewShippingMethodsZipOk");
            M(this, new J(k, this, "children_propagation", e));
            M(this, new J(f, this, "children_propagation"))
        } else {
            e = d.methods;
            f = this;
            for (k = !1; f && !k;) f instanceof Il && (Jl(f, e), k = !0), f = f.za;
            H.checkout_order = ze(d.order);
            mf(O.f(), "checkout_order");
            M(this, new Qe("dataUpdate", "parent_propagation", "checkout_order_shipping", this));
            M(this, new J("checkoutRenewShippingMethodsZipOk", this));
            M(this, new J("checkoutRenewShippingMethodsCountryOk", this))
        }
    };

    function Hl(a) {
        null === a.F && (a.F = document.querySelector('input[name="differentShippingAddress"]'));
        return a.F.checked
    }
    Q.f().register("wnd.pc.CheckoutCustomerFormBlock", ak, Ek, Gl);

    function Kl(a, d, e) {
        Zk.call(this, a, d, e);
        this.h = zj
    }
    v(Kl, Zk);
    Kl.prototype.J = function(a) {
        Kl.i.J.call(this, a);
        if ("checkoutCountrySelectChanged" === a.getType())
            for (var d = this.m[0].m, e = 0; e < d.length; e++) {
                var f = d[e];
                if (f instanceof kl) {
                    var k = f.b.h(),
                        l = "" !== a.a.getValue() ? a.a.getValue() : H.project_info.country_code,
                        p = f.b.getData().validCountryCurrencyLanguage,
                        k = !(p ? p : null).includes(l.toUpperCase() + "-" + k["e_order.currency"].toUpperCase() + "-" + F.frontendLanguage.toLowerCase());
                    vf(f.b, "showDisabledNote", k);
                    1 === d.length && (f = k, Bk(this.a).disabled = f)
                }
            }
    };
    Kl.prototype.ka = function(a) {
        Kl.i.ka.call(this, a);
        a.a.form.checkValidity() && Lj(this.g, Aj)
    };
    Kl.prototype.ha = function(a) {
        Kl.i.ha.call(this, a);
        Lj(this.g, yj)
    };
    Q.f().register("wnd.pc.CheckoutPaymentFormBlock", Zj, Ak, Kl);

    function Il(a, d, e) {
        Zk.call(this, a, d, e);
        this.h = yj
    }
    v(Il, Zk);
    Il.prototype.ka = function(a) {
        this.bb ? (a.preventDefault(), a.stopPropagation(), this.notify("clickOnDisabledContinue")) : (Il.i.ka.call(this, a), a.a.form.checkValidity() && Lj(this.g, zj))
    };
    Il.prototype.oa = function(a) {
        a.payment_method = Zi(this.za).payment_method;
        Il.i.oa.call(this, a)
    };
    Il.prototype.wa = function() {
        this.bb = !0
    };
    Il.prototype.ha = function(a) {
        Il.i.ha.call(this, a);
        Lj(this.g, ij);
        a = new J("checkoutResetNavigationMaxStep", this);
        M(this, a)
    };

    function Jl(a, d) {
        var e = !0;
        y(a.m[0].m, function(a) {
            if (null != d[parseInt(a.getValue(), 10)]) {
                var k = d[parseInt(a.getValue(), 10)];
                e && (a.rb(!0), e = !1);
                vf(a.b, "isAvailable", !0);
                a.fa();
                vf(a.b, "price", k.price);
                vf(a.b, "label", k.label);
                k = k.apiNote;
                vf(a.b, "showMethodApiNote", "" !== k);
                vf(a.b, "methodApiNote", k)
            } else a.rb(!1), vf(a.b, "isAvailable", !1), xf(a)
        }, a)
    }
    Q.f().register("wnd.pc.CheckoutShippingFormBlock", Zj, Mk, Il);

    function Xl(a, d, e) {
        Z.call(this, a, d, e);
        this.o = F.checkout.actualStep || ij;
        F.checkout.actualStep === ij && null != H.trackingData && ei.f().send(Yh, H.trackingData)
    }
    v(Xl, Z);
    var ij = 0,
        yj = 1,
        zj = 2,
        Aj = 3;

    function Lj(a, d) {
        switch (d) {
            case ij:
            case yj:
            case zj:
            case Aj:
                a.o = d;
                var e = new J("checkoutChangeStep", a);
                M(a, e)
        }
    }
    Xl.prototype.J = function(a) {
        Xl.i.J.call(this, a);
        "eshopOutOfStock" === a.getType() && (window.location.href = F.cartPrefix)
    };
    Q.f().register("wnd.fe.CheckoutPageZone", Vj, Y, Xl);

    function Yl(a, d, e) {
        P.call(this, a, d, e);
        this.da = "";
        this.href = location.href;
        this.W = "content_items"
    }
    v(Yl, P);

    function Zl(a, d) {
        N.call(this, a, d);
        this.X = !1;
        this.s = null
    }
    v(Zl, N);
    Zl.prototype.j = function() {
        this.b || (this.b = document.getElementById(this.a.L()));
        return this.b
    };

    function $l(a) {
        a.s || (a.s = a.j().querySelectorAll("[data-wnd_product_item_data]"));
        return a.s
    }

    function am(a) {
        a.g || (a.g = Tc("wnd-link", a.j()));
        return a.g
    }

    function bm(a) {
        a.o || (a.o = Tc("wnd-filter-select", a.j()));
        return a.o
    }
    Zl.prototype.S = function() {
        this.j().outerHTML = this.a.da;
        this.o = this.g = this.b = null
    };
    Zl.prototype.C = function() {
        var a = Xc(),
            d = fe(),
            e;
        e = this.j();
        e = ne(e);
        var f = ie(this.j()),
            k = Number(d.y);
        if (0 > f.y || f.y + e.height > a.height) k += f.y, k -= document.querySelector(".wnd-fixed").scrollHeight, e.height < a.height && (k -= (a.height - e.height) / 2);
        k !== d.y && window.scrollTo(d.x, k)
    };
    var cm = document.location.href,
        dm = document.location.hash,
        em = document.location.host,
        fm = document.location.hostname,
        Bi = document.location.pathname,
        gm = document.location.port,
        hm = document.location.protocol,
        im = document.location.search;
    u("wnd.fe.Location", function() {});
    u("wnd.fe.Location.href", cm);
    u("wnd.fe.Location.hash", dm);
    u("wnd.fe.Location.host", em);
    u("wnd.fe.Location.hostname", fm);
    u("wnd.fe.Location.pathname", Bi);
    u("wnd.fe.Location.port", gm);
    u("wnd.fe.Location.protocol", hm);
    u("wnd.fe.Location.search", im);
    u("wnd.fe.Location.assign", function() {});
    u("wnd.fe.Location.replace", function() {});
    u("wnd.fe.Location.reload", function() {});

    function jm(a) {
        Zg.call(this, a || "UpdateBlockRequest");
        T(this, t(this.c, this))
    }
    v(jm, Zg);
    jm.prototype.getType = function() {
        return "updateBlockRequest"
    };
    jm.prototype.c = function() {};

    function km(a, d, e) {
        S.call(this, a, d, e);
        this.h = !1
    }
    v(km, S);
    n = km.prototype;
    n.A = function() {
        km.i.A.call(this);
        this.c.u(document.body, "touchmove", t(this.nc, this));
        y(am(this.a), function(a) {
            this.c.u(a, "click", t(this.hc, this))
        }, this);
        y(bm(this.a), function(a) {
            this.c.u(a, "change", t(this.lc, this))
        }, this);
        y($l(this.a), function(a) {
            this.c.u(a, "click", t(this.cc, this))
        }, this)
    };
    n.nc = function() {
        this.h = !0
    };
    n.hc = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.b.href = a.target.href;
        lm(this)
    };
    n.lc = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.b.href = a.target.value;
        lm(this)
    };
    n.cc = function(a) {
        if (!0 === this.h) this.h = !1;
        else {
            a.preventDefault();
            a.stopPropagation();
            a = a.a;
            var d = Ca(C(a, "wnd_product_item_data"));
            null != d && ei.f().send(Uh, d);
            window.location = a.getAttribute("href")
        }
    };

    function lm(a) {
        Eb(a.a.j(), "wnd-loading", !0);
        var d = new jm;
        d.data.mvcId = a.L();
        d.data.href = a.b.href;
        T(d, t(function(a, d) {
            "success" === a && (zf(this.b.href), this.b.da = d.html, wf(this.b, "data_updated", !0), Eb(this.a.j(), "wnd-loading", !1), requestAnimationFrame(t(this.a.C, this.a)), hh("wnd-dynamic-content-change", this.j()))
        }, a));
        a = new Xf("updateBlock", 1);
        V(U.f(), d, a)
    }
    Q.f().register("wnd.pc.ProductsZone", Yl, Zl, km);

    function mm() {
        Ze.call(this, 0, ph)
    }
    v(mm, Ze);
    mm.prototype.init = function() {
        Q.f().create(ph.SocialButtons.mvcID, "wnd.fe.SocialButtons", document.body, this);
        Q.f().create(ph.LogoBlock.mvcID, "wnd.pc.LogoBlock", document.body, this);
        Q.f().create(jg.VideoLoaderManager.mvcID, "wnd.static.VideoLoaderManager", document.body, this);
        Q.f().create(jg.ImageSizeManager.mvcID, "wnd.static.ImageSizeManager", document.body, this);
        Q.f().create(ph.FormManager.mvcID, "wnd.fe.FormManager", document.body, this);
        F.isEshop && Q.f().create(ph.EshopProductManager.mvcID, "wnd.fe.EshopProductManager",
            document.body, this);
        Q.f().create(ph.CookieBar.mvcID, "wnd.fe.CookieBar", document.body, this);
        Q.f().create(ph.AddToCartButton.mvcID, "wnd.fe.AddToCartButton", document.body, this);
        fi.f().init();
        F.isCheckout && Q.f().create(ph.CheckoutPageZoneModel.ZoneId, "wnd.fe.CheckoutPageZone", document.body, this, {
            id: ph.CheckoutPageZoneModel.ZoneId
        });
        y(document.querySelectorAll('[data-wnd_mvc_type="wnd.pc.ProductsZone"]'), function(a) {
            Q.f().create(a.id, C(a, "wnd_mvc_type"), a.parentElement, this, {
                id: a.id
            })
        }, this)
    };

    function nm() {
        var a = af.f().get("wnd.fe"),
            d = new J("resizeWindow", a);
        Pe(d);
        M(a, d)
    }

    function om() {
        var a = af.f().get("wnd.fe"),
            d = new J("scrollWindow", a);
        Pe(d);
        M(a, d)
    }
    window.addEventListener("load", function() {
        window.addEventListener("resize", nm, !1);
        window.addEventListener("scroll", om, !1);
        H = window.wnd.$data;
        pm = window.wnd.$metadata;
        F = window.wnd.$system;
        af.f().register("wnd.fe", mm);
        af.f().init()
    }, !1);
    if (!H) var H = {};
    if (!pm) var pm = {};
    if (!rf) var rf = {};
    if (!F) var F = {};
    if (!Te) var Te = {};
    Te.Ia = function(a, d) {
        Be(a, d)
    };
    u("wnd.keen", Te);
    Te.addKeenEvent = Te.Ia;

    function Xg(a) {
        a = 0 > a || !window.translations || !window.translations[a] ? "ERROR: UNDEFINED TEXT" : window.translations[a];
        return a
    };
}({}));