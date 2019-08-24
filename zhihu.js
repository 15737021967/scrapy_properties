!
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e()
} (0,
function() {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        })(e)
    }
    function e(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r,
        t
    }
    function r(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
            if (null == t) return {};
            var r, n, i = {},
            o = Object.keys(t);
            for (n = 0; n < o.length; n++) r = o[n],
            e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i
        } (t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++) r = o[n],
            e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
    }
    var n = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
    var i, o = (function(t, e) {
        function r(t, e) {
            for (var r = 0; r < t.length; ++r) if (t[r] === e) return r;
            return - 1
        }
        function n(t, e) {
            var n = [],
            i = [];
            return null == e && (e = function(t, e) {
                return n[0] === e ? "[Circular ~]": "[Circular ~." + i.slice(0, r(n, e)).join(".") + "]"
            }),
            function(o, a) {
                if (n.length > 0) {
                    var s = r(n, this);~s ? n.splice(s + 1) : n.push(this),
                    ~s ? i.splice(s, 1 / 0, o) : i.push(o),
                    ~r(n, a) && (a = e.call(this, o, a))
                } else n.push(a);
                return null == t ? a instanceof Error ?
                function(t) {
                    var e = {
                        stack: t.stack,
                        message: t.message,
                        name: t.name
                    };
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                } (a) : a: t.call(this, o, a)
            }
        } (t.exports = function(t, e, r, i) {
            return JSON.stringify(t, n(e, i), r)
        }).getSerialize = n
    } (i = {
        exports: {}
    },
    i.exports), i.exports),
    a = (o.getSerialize, "undefined" != typeof window ? window: void 0 !== n ? n: "undefined" != typeof self ? self: {});
    function s(t) {
        return void 0 === t
    }
    function l(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    function c(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }
    function u(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    function f() {
        try {
            return new ErrorEvent(""),
            !0
        } catch(t) {
            return ! 1
        }
    }
    function h() {
        if (! ("fetch" in a)) return ! 1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch(t) {
            return ! 1
        }
    }
    function p(t, e) {
        var r, n;
        if (s(t.length)) for (r in t) d(t, r) && e.call(null, r, t[r]);
        else if (n = t.length) for (r = 0; r < n; r++) e.call(null, r, t[r])
    }
    function d(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    function g(t) {
        for (var e, r = [], n = 0, i = t.length; n < i; n++) c(e = t[n]) ? r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && r.push(e.source);
        return new RegExp(r.join("|"), "i")
    }
    function v(t) {
        var e, r, n, i, o, a = [];
        if (!t || !t.tagName) return "";
        if (a.push(t.tagName.toLowerCase()), t.id && a.push("#" + t.id), (e = t.className) && c(e)) for (r = e.split(/\s+/), o = 0; o < r.length; o++) a.push("." + r[o]);
        var s = ["type", "name", "title", "alt"];
        for (o = 0; o < s.length; o++) n = s[o],
        (i = t.getAttribute(n)) && a.push("[" + n + '="' + i + '"]');
        return a.join("")
    }
    function _(t, e) {
        return !! ( !! t ^ !!e)
    }
    function m(t, e) {
        if (_(t, e)) return ! 1;
        var r, n, i = t.frames,
        o = e.frames;
        if (i.length !== o.length) return ! 1;
        for (var a = 0; a < i.length; a++) if (r = i[a], n = o[a], r.filename !== n.filename || r.lineno !== n.lineno || r.colno !== n.colno || r.
        function !== n.
        function) return ! 1;
        return ! 0
    }
    var b = 3,
    y = 51200,
    E = 40;
    function x(t) {
        return function(t) {
            return~ - encodeURI(t).split(/%..|./).length
        } (JSON.stringify(t))
    }
    function S(t) {
        if ("string" == typeof t) return t.length <= 40 ? t: t.substr(0, 39) + "鈥�";
        if ("number" == typeof t || "boolean" == typeof t || void 0 === t) return t;
        var e = Object.prototype.toString.call(t);
        return "[object Object]" === e ? "[Object]": "[object Array]" === e ? "[Array]": "[object Function]" === e ? t.name ? "[Function: " + t.name + "]": "[Function]": t
    }
    var k = {
        isObject: function(e) {
            return "object" === t(e) && null !== e
        },
        isError: function(t) {
            switch ({}.toString.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return ! 0;
            default:
                return t instanceof Error
            }
        },
        isErrorEvent: function(t) {
            return f() && "[object ErrorEvent]" === {}.toString.call(t)
        },
        isUndefined: s,
        isFunction: function(t) {
            return "function" == typeof t
        },
        isPlainObject: l,
        isString: c,
        isArray: u,
        isEmptyObject: function(t) {
            if (!l(t)) return ! 1;
            for (var e in t) if (t.hasOwnProperty(e)) return ! 1;
            return ! 0
        },
        supportsErrorEvent: f,
        supportsFetch: h,
        supportsReferrerPolicy: function() {
            if (!h()) return ! 1;
            try {
                return new Request("pickleRick", {
                    referrerPolicy: "origin"
                }),
                !0
            } catch(t) {
                return ! 1
            }
        },
        supportsPromiseRejectionEvent: function() {
            return "function" == typeof PromiseRejectionEvent
        },
        wrappedCallback: function(t) {
            return function(e, r) {
                var n = t(e) || e;
                return r && r(n) || n
            }
        },
        each: p,
        objectMerge: function(t, e) {
            return e ? (p(e,
            function(e, r) {
                t[e] = r
            }), t) : t
        },
        truncate: function(t, e) {
            return ! e || t.length <= e ? t: t.substr(0, e) + "鈥�"
        },
        objectFrozen: function(t) {
            return !! Object.isFrozen && Object.isFrozen(t)
        },
        hasKey: d,
        joinRegExp: g,
        urlencode: function(t) {
            var e = [];
            return p(t,
            function(t, r) {
                e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r))
            }),
            e.join("&")
        },
        uuid4: function() {
            var t = a.crypto || a.msCrypto;
            if (!s(t) && t.getRandomValues) {
                var e = new Uint16Array(8);
                t.getRandomValues(e),
                e[3] = 4095 & e[3] | 16384,
                e[4] = 16383 & e[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                    return e
                };
                return r(e[0]) + r(e[1]) + r(e[2]) + r(e[3]) + r(e[4]) + r(e[5]) + r(e[6]) + r(e[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
            function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e: 3 & e | 8).toString(16)
            })
        },
        htmlTreeAsString: function(t) {
            for (var e, r = [], n = 0, i = 0, o = " > ".length; t && n++<5 && !("html" === (e = v(t)) || n > 1 && i + r.length * o + e.length >= 80);) r.push(e),
            i += e.length,
            t = t.parentNode;
            return r.reverse().join(" > ")
        },
        htmlElementAsString: v,
        isSameException: function(t, e) {
            return ! _(t, e) && (t = t.values[0], e = e.values[0], t.type === e.type && t.value === e.value && (r = t.stacktrace, n = e.stacktrace, (!s(r) || !s(n)) && m(t.stacktrace, e.stacktrace)));
            var r, n
        }, isSameStacktrace: m,
        parseUrl: function(t) {
            if ("string" != typeof t) return {};
            var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
            r = e[6] || "",
            n = e[8] || "";
            return {
                protocol: e[2],
                host: e[4],
                path: e[5],
                relative: e[5] + r + n
            }
        },
        fill: function(t, e, r, n) {
            if (null != t) {
                var i = t[e];
                t[e] = r(i),
                t[e].__raven__ = !0,
                t[e].__orig__ = i,
                n && n.push([t, e, i])
            }
        },
        safeJoin: function(t, e) {
            if (!u(t)) return "";
            for (var r = [], n = 0; n < t.length; n++) try {
                r.push(String(t[n]))
            } catch(t) {
                r.push("[value cannot be serialized]")
            }
            return r.join(e)
        },
        serializeException: function t(e, r, n) {
            if (!l(e)) return e;
            n = "number" != typeof(r = "number" != typeof r ? b: r) ? y: n;
            var i = function t(e, r) {
                return 0 === r ? S(e) : l(e) ? Object.keys(e).reduce(function(n, i) {
                    return n[i] = t(e[i], r - 1),
                    n
                },
                {}) : Array.isArray(e) ? e.map(function(e) {
                    return t(e, r - 1)
                }) : S(e)
            } (e, r);
            return x(o(i)) > n ? t(e, r - 1) : i
        },
        serializeKeysForMessage: function(t, e) {
            if ("number" == typeof t || "string" == typeof t) return t.toString();
            if (!Array.isArray(t)) return "";
            if (0 === (t = t.filter(function(t) {
                return "string" == typeof t
            })).length) return "[object has no keys]";
            if (e = "number" != typeof e ? E: e, t[0].length >= e) return t[0];
            for (var r = t.length; r > 0; r--) {
                var n = t.slice(0, r).join(", ");
                if (! (n.length > e)) return r === t.length ? n: n + "鈥�"
            }
            return ""
        },
        sanitize: function(t, e) {
            if (!u(e) || u(e) && 0 === e.length) return t;
            var r, n = g(e),
            i = "********";
            try {
                r = JSON.parse(o(t))
            } catch(e) {
                return t
            }
            return function t(e) {
                return u(e) ? e.map(function(e) {
                    return t(e)
                }) : l(e) ? Object.keys(e).reduce(function(r, o) {
                    return n.test(o) ? r[o] = i: r[o] = t(e[o]),
                    r
                },
                {}) : e
            } (r)
        }
    },
    w = {
        collectWindowErrors: !0,
        debug: !1
    },
    O = "undefined" != typeof window ? window: void 0 !== n ? n: "undefined" != typeof self ? self: {},
    C = [].slice,
    R = "?",
    j = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
    function T() {
        return "undefined" == typeof document || null == document.location ? "": document.location.href
    }
    w.report = function() {
        var t, e, r = [],
        n = null,
        i = null,
        o = null;
        function a(t, e) {
            var n = null;
            if (!e || w.collectWindowErrors) {
                for (var i in r) if (r.hasOwnProperty(i)) try {
                    r[i].apply(null, [t].concat(C.call(arguments, 2)))
                } catch(t) {
                    n = t
                }
                if (n) throw n
            }
        }
        function s(e, r, n, i, s) {
            var c = k.isErrorEvent(s) ? s.error: s,
            u = k.isErrorEvent(e) ? e.message: e;
            if (o) w.computeStackTrace.augmentStackTraceWithInitialElement(o, r, n, u),
            l();
            else if (c && k.isError(c)) a(w.computeStackTrace(c), !0);
            else {
                var f, h = {
                    url: r,
                    line: n,
                    column: i
                },
                p = void 0;
                if ("[object String]" === {}.toString.call(u))(f = u.match(j)) && (p = f[1], u = f[2]);
                h.func = R,
                a({
                    name: p,
                    message: u,
                    url: T(),
                    stack: [h]
                },
                !0)
            }
            return !! t && t.apply(this, arguments)
        }
        function l() {
            var t = o,
            e = n;
            n = null,
            o = null,
            i = null,
            a.apply(null, [t, !1].concat(e))
        }
        function c(t, e) {
            var r = C.call(arguments, 1);
            if (o) {
                if (i === t) return;
                l()
            }
            var a = w.computeStackTrace(t);
            if (o = a, i = t, n = r, setTimeout(function() {
                i === t && l()
            },
            a.incomplete ? 2e3: 0), !1 !== e) throw t
        }
        return c.subscribe = function(n) {
            e || (t = O.onerror, O.onerror = s, e = !0),
            r.push(n)
        },
        c.unsubscribe = function(t) {
            for (var e = r.length - 1; e >= 0; --e) r[e] === t && r.splice(e, 1)
        },
        c.uninstall = function() {
            e && (O.onerror = t, e = !1, t = void 0),
            r = []
        },
        c
    } (),
    w.computeStackTrace = function() {
        function t(t) {
            if (void 0 !== t.stack && t.stack) {
                for (var e, r, n, i = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                o = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                c = t.stack.split("\n"), u = [], f = (/^(.*) is undefined$/.exec(t.message), 0), h = c.length; f < h; ++f) {
                    if (r = i.exec(c[f])) {
                        var p = r[2] && 0 === r[2].indexOf("native");
                        r[2] && 0 === r[2].indexOf("eval") && (e = l.exec(r[2])) && (r[2] = e[1], r[3] = e[2], r[4] = e[3]),
                        n = {
                            url: p ? null: r[2],
                            func: r[1] || R,
                            args: p ? [r[2]] : [],
                            line: r[3] ? +r[3] : null,
                            column: r[4] ? +r[4] : null
                        }
                    } else if (r = o.exec(c[f])) n = {
                        url: r[2],
                        func: r[1] || R,
                        args: [],
                        line: +r[3],
                        column: r[4] ? +r[4] : null
                    };
                    else {
                        if (! (r = a.exec(c[f]))) continue;
                        r[3] && r[3].indexOf(" > eval") > -1 && (e = s.exec(r[3])) ? (r[3] = e[1], r[4] = e[2], r[5] = null) : 0 !== f || r[5] || void 0 === t.columnNumber || (u[0].column = t.columnNumber + 1),
                        n = {
                            url: r[3],
                            func: r[1] || R,
                            args: r[2] ? r[2].split(",") : [],
                            line: r[4] ? +r[4] : null,
                            column: r[5] ? +r[5] : null
                        }
                    } ! n.func && n.line && (n.func = R),
                    u.push(n)
                }
                return u.length ? {
                    name: t.name,
                    message: t.message,
                    url: T(),
                    stack: u
                }: null
            }
        }
        function e(t, e, r, n) {
            var i = {
                url: e,
                line: r
            };
            if (i.url && i.line) {
                if (t.incomplete = !1, i.func || (i.func = R), t.stack.length > 0 && t.stack[0].url === i.url) {
                    if (t.stack[0].line === i.line) return ! 1;
                    if (!t.stack[0].line && t.stack[0].func === i.func) return t.stack[0].line = i.line,
                    !1
                }
                return t.stack.unshift(i),
                t.partial = !0,
                !0
            }
            return t.incomplete = !0,
            !1
        }
        function r(t, i) {
            for (var o, a, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            l = [], c = {},
            u = !1, f = r.caller; f && !u; f = f.caller) if (f !== n && f !== w.report) {
                if (a = {
                    url: null,
                    func: R,
                    line: null,
                    column: null
                },
                f.name ? a.func = f.name: (o = s.exec(f.toString())) && (a.func = o[1]), void 0 === a.func) try {
                    a.func = o.input.substring(0, o.input.indexOf("{"))
                } catch(t) {}
                c["" + f] ? u = !0 : c["" + f] = !0,
                l.push(a)
            }
            i && l.splice(0, i);
            var h = {
                name: t.name,
                message: t.message,
                url: T(),
                stack: l
            };
            return e(h, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description),
            h
        }
        function n(e, n) {
            var i = null;
            n = null == n ? 0 : +n;
            try {
                if (i = t(e)) return i
            } catch(t) {
                if (w.debug) throw t
            }
            try {
                if (i = r(e, n + 1)) return i
            } catch(t) {
                if (w.debug) throw t
            }
            return {
                name: e.name,
                message: e.message,
                url: T()
            }
        }
        return n.augmentStackTraceWithInitialElement = e,
        n.computeStackTraceFromStackProp = t,
        n
    } ();
    var P = w;
    function F(t, e) {
        var r = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
    }
    function D(t, e, r, n, i, o) {
        return F((a = F(F(e, t), F(n, o))) << (s = i) | a >>> 32 - s, r);
        var a, s
    }
    function U(t, e, r, n, i, o, a) {
        return D(e & r | ~e & n, t, e, i, o, a)
    }
    function H(t, e, r, n, i, o, a) {
        return D(e & n | r & ~n, t, e, i, o, a)
    }
    function N(t, e, r, n, i, o, a) {
        return D(e ^ r ^ n, t, e, i, o, a)
    }
    function I(t, e, r, n, i, o, a) {
        return D(r ^ (e | ~n), t, e, i, o, a)
    }
    function B(t, e) {
        var r, n, i, o, a;
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        var s = 1732584193,
        l = -271733879,
        c = -1732584194,
        u = 271733878;
        for (r = 0; r < t.length; r += 16) n = s,
        i = l,
        o = c,
        a = u,
        s = U(s, l, c, u, t[r], 7, -680876936),
        u = U(u, s, l, c, t[r + 1], 12, -389564586),
        c = U(c, u, s, l, t[r + 2], 17, 606105819),
        l = U(l, c, u, s, t[r + 3], 22, -1044525330),
        s = U(s, l, c, u, t[r + 4], 7, -176418897),
        u = U(u, s, l, c, t[r + 5], 12, 1200080426),
        c = U(c, u, s, l, t[r + 6], 17, -1473231341),
        l = U(l, c, u, s, t[r + 7], 22, -45705983),
        s = U(s, l, c, u, t[r + 8], 7, 1770035416),
        u = U(u, s, l, c, t[r + 9], 12, -1958414417),
        c = U(c, u, s, l, t[r + 10], 17, -42063),
        l = U(l, c, u, s, t[r + 11], 22, -1990404162),
        s = U(s, l, c, u, t[r + 12], 7, 1804603682),
        u = U(u, s, l, c, t[r + 13], 12, -40341101),
        c = U(c, u, s, l, t[r + 14], 17, -1502002290),
        s = H(s, l = U(l, c, u, s, t[r + 15], 22, 1236535329), c, u, t[r + 1], 5, -165796510),
        u = H(u, s, l, c, t[r + 6], 9, -1069501632),
        c = H(c, u, s, l, t[r + 11], 14, 643717713),
        l = H(l, c, u, s, t[r], 20, -373897302),
        s = H(s, l, c, u, t[r + 5], 5, -701558691),
        u = H(u, s, l, c, t[r + 10], 9, 38016083),
        c = H(c, u, s, l, t[r + 15], 14, -660478335),
        l = H(l, c, u, s, t[r + 4], 20, -405537848),
        s = H(s, l, c, u, t[r + 9], 5, 568446438),
        u = H(u, s, l, c, t[r + 14], 9, -1019803690),
        c = H(c, u, s, l, t[r + 3], 14, -187363961),
        l = H(l, c, u, s, t[r + 8], 20, 1163531501),
        s = H(s, l, c, u, t[r + 13], 5, -1444681467),
        u = H(u, s, l, c, t[r + 2], 9, -51403784),
        c = H(c, u, s, l, t[r + 7], 14, 1735328473),
        s = N(s, l = H(l, c, u, s, t[r + 12], 20, -1926607734), c, u, t[r + 5], 4, -378558),
        u = N(u, s, l, c, t[r + 8], 11, -2022574463),
        c = N(c, u, s, l, t[r + 11], 16, 1839030562),
        l = N(l, c, u, s, t[r + 14], 23, -35309556),
        s = N(s, l, c, u, t[r + 1], 4, -1530992060),
        u = N(u, s, l, c, t[r + 4], 11, 1272893353),
        c = N(c, u, s, l, t[r + 7], 16, -155497632),
        l = N(l, c, u, s, t[r + 10], 23, -1094730640),
        s = N(s, l, c, u, t[r + 13], 4, 681279174),
        u = N(u, s, l, c, t[r], 11, -358537222),
        c = N(c, u, s, l, t[r + 3], 16, -722521979),
        l = N(l, c, u, s, t[r + 6], 23, 76029189),
        s = N(s, l, c, u, t[r + 9], 4, -640364487),
        u = N(u, s, l, c, t[r + 12], 11, -421815835),
        c = N(c, u, s, l, t[r + 15], 16, 530742520),
        s = I(s, l = N(l, c, u, s, t[r + 2], 23, -995338651), c, u, t[r], 6, -198630844),
        u = I(u, s, l, c, t[r + 7], 10, 1126891415),
        c = I(c, u, s, l, t[r + 14], 15, -1416354905),
        l = I(l, c, u, s, t[r + 5], 21, -57434055),
        s = I(s, l, c, u, t[r + 12], 6, 1700485571),
        u = I(u, s, l, c, t[r + 3], 10, -1894986606),
        c = I(c, u, s, l, t[r + 10], 15, -1051523),
        l = I(l, c, u, s, t[r + 1], 21, -2054922799),
        s = I(s, l, c, u, t[r + 8], 6, 1873313359),
        u = I(u, s, l, c, t[r + 15], 10, -30611744),
        c = I(c, u, s, l, t[r + 6], 15, -1560198380),
        l = I(l, c, u, s, t[r + 13], 21, 1309151649),
        s = I(s, l, c, u, t[r + 4], 6, -145523070),
        u = I(u, s, l, c, t[r + 11], 10, -1120210379),
        c = I(c, u, s, l, t[r + 2], 15, 718787259),
        l = I(l, c, u, s, t[r + 9], 21, -343485551),
        s = F(s, n),
        l = F(l, i),
        c = F(c, o),
        u = F(u, a);
        return [s, l, c, u]
    }
    function L(t) {
        var e, r = "",
        n = 32 * t.length;
        for (e = 0; e < n; e += 8) r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return r
    }
    function A(t) {
        var e, r = [];
        for (r[(t.length >> 2) - 1] = void 0, e = 0; e < r.length; e += 1) r[e] = 0;
        var n = 8 * t.length;
        for (e = 0; e < n; e += 8) r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return r
    }
    function M(t) {
        var e, r, n = "";
        for (r = 0; r < t.length; r += 1) e = t.charCodeAt(r),
        n += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
        return n
    }
    function q(t) {
        return unescape(encodeURIComponent(t))
    }
    function z(t) {
        return function(t) {
            return L(B(A(t), 8 * t.length))
        } (q(t))
    }
    function K(t, e) {
        return function(t, e) {
            var r, n, i = A(t),
            o = [],
            a = [];
            for (o[15] = a[15] = void 0, i.length > 16 && (i = B(i, 8 * t.length)), r = 0; r < 16; r += 1) o[r] = 909522486 ^ i[r],
            a[r] = 1549556828 ^ i[r];
            return n = B(o.concat(A(e)), 512 + 8 * e.length),
            L(B(a.concat(n), 640))
        } (q(t), q(e))
    }
    var J = function(t, e, r) {
        return e ? r ? K(e, t) : M(K(e, t)) : r ? z(t) : M(z(t))
    };
    function W(t) {
        this.name = "RavenConfigError",
        this.message = t
    }
    W.prototype = new Error,
    W.prototype.constructor = W;
    var $ = W,
    X = function(t, e, r) {
        var n = t[e],
        i = t;
        if (e in t) {
            var o = "warn" === e ? "warning": e;
            t[e] = function() {
                var t = [].slice.call(arguments),
                a = k.safeJoin(t, " "),
                s = {
                    level: o,
                    logger: "console",
                    extra: {
                        arguments: t
                    }
                };
                "assert" === e ? !1 === t[0] && (a = "Assertion failed: " + (k.safeJoin(t.slice(1), " ") || "console.assert"), s.extra.arguments = t.slice(1), r && r(a, s)) : r && r(a, s),
                n && Function.prototype.apply.call(n, i, t)
            }
        }
    },
    G = k.isError,
    V = k.isObject,
    Y = k.isPlainObject,
    Z = k.isErrorEvent,
    Q = k.isUndefined,
    tt = k.isFunction,
    et = k.isString,
    rt = k.isArray,
    nt = k.isEmptyObject,
    it = k.each,
    ot = k.objectMerge,
    at = k.truncate,
    st = k.objectFrozen,
    lt = k.hasKey,
    ct = k.joinRegExp,
    ut = k.urlencode,
    ft = k.uuid4,
    ht = k.htmlTreeAsString,
    pt = k.isSameException,
    dt = k.isSameStacktrace,
    gt = k.parseUrl,
    vt = k.fill,
    _t = k.supportsFetch,
    mt = k.supportsReferrerPolicy,
    bt = k.serializeKeysForMessage,
    yt = k.serializeException,
    Et = k.sanitize,
    xt = X,
    St = "source protocol user pass host port path".split(" "),
    kt = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;
    function wt() {
        return + new Date
    }
    var Ot = "undefined" != typeof window ? window: void 0 !== n ? n: "undefined" != typeof self ? self: {},
    Ct = Ot.document,
    Rt = Ot.navigator;
    function jt(t, e) {
        return tt(e) ?
        function(r) {
            return e(r, t)
        }: e
    }
    function Tt() {
        for (var e in this._hasJSON = !("object" !== ("undefined" == typeof JSON ? "undefined": t(JSON)) || !JSON.stringify), this._hasDocument = !Q(Ct), this._hasNavigator = !Q(Rt), this._lastCapturedException = null, this._lastData = null, this._lastEventId = null, this._globalServer = null, this._globalKey = null, this._globalProject = null, this._globalContext = {},
        this._globalOptions = {
            release: Ot.SENTRY_RELEASE && Ot.SENTRY_RELEASE.id,
            logger: "javascript",
            ignoreErrors: [],
            ignoreUrls: [],
            whitelistUrls: [],
            includePaths: [],
            headers: null,
            collectWindowErrors: !0,
            captureUnhandledRejections: !0,
            maxMessageLength: 0,
            maxUrlLength: 250,
            stackTraceLimit: 50,
            autoBreadcrumbs: !0,
            instrument: !0,
            sampleRate: 1,
            sanitizeKeys: []
        },
        this._fetchDefaults = {
            method: "POST",
            keepalive: !0,
            referrerPolicy: mt() ? "origin": ""
        },
        this._ignoreOnError = 0, this._isRavenInstalled = !1, this._originalErrorStackTraceLimit = Error.stackTraceLimit, this._originalConsole = Ot.console || {},
        this._originalConsoleMethods = {},
        this._plugins = [], this._startTime = wt(), this._wrappedBuiltIns = [], this._breadcrumbs = [], this._lastCapturedEvent = null, this._keypressTimeout, this._location = Ot.location, this._lastHref = this._location && this._location.href, this._resetBackoff(), this._originalConsole) this._originalConsoleMethods[e] = this._originalConsole[e]
    }
    Tt.prototype = {
        VERSION: "3.24.0",
        debug: !1,
        TraceKit: P,
        config: function(t, e) {
            var r = this;
            if (r._globalServer) return this._logDebug("error", "Error: Raven has already been configured"),
            r;
            if (!t) return r;
            var n = r._globalOptions;
            e && it(e,
            function(t, e) {
                "tags" === t || "extra" === t || "user" === t ? r._globalContext[t] = e: n[t] = e
            }),
            r.setDSN(t),
            n.ignoreErrors.push(/^Script error\.?$/),
            n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
            n.ignoreErrors = ct(n.ignoreErrors),
            n.ignoreUrls = !!n.ignoreUrls.length && ct(n.ignoreUrls),
            n.whitelistUrls = !!n.whitelistUrls.length && ct(n.whitelistUrls),
            n.includePaths = ct(n.includePaths),
            n.maxBreadcrumbs = Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100));
            var i = {
                xhr: !0,
                console: !0,
                dom: !0,
                location: !0,
                sentry: !0
            },
            o = n.autoBreadcrumbs;
            "[object Object]" === {}.toString.call(o) ? o = ot(i, o) : !1 !== o && (o = i),
            n.autoBreadcrumbs = o;
            var a = {
                tryCatch: !0
            },
            s = n.instrument;
            return "[object Object]" === {}.toString.call(s) ? s = ot(a, s) : !1 !== s && (s = a),
            n.instrument = s,
            P.collectWindowErrors = !!n.collectWindowErrors,
            r
        },
        install: function() {
            var t = this;
            return t.isSetup() && !t._isRavenInstalled && (P.report.subscribe(function() {
                t._handleOnErrorStackInfo.apply(t, arguments)
            }), t._globalOptions.captureUnhandledRejections && t._attachPromiseRejectionHandler(), t._patchFunctionToString(), t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch(), t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs(), t._drainPlugins(), t._isRavenInstalled = !0),
            Error.stackTraceLimit = t._globalOptions.stackTraceLimit,
            this
        },
        setDSN: function(t) {
            var e = this._parseDSN(t),
            r = e.path.lastIndexOf("/"),
            n = e.path.substr(1, r);
            this._dsn = t,
            this._globalKey = e.user,
            this._globalSecret = e.pass && e.pass.substr(1),
            this._globalProject = e.path.substr(r + 1),
            this._globalServer = this._getGlobalServer(e),
            this._globalEndpoint = this._globalServer + "/" + n + "api/" + this._globalProject + "/store/",
            this._resetBackoff()
        },
        context: function(t, e, r) {
            return tt(t) && (r = e || [], e = t, t = void 0),
            this.wrap(t, e).apply(this, r)
        },
        wrap: function(t, e, r) {
            var n = this;
            if (Q(e) && !tt(t)) return t;
            if (tt(t) && (e = t, t = void 0), !tt(e)) return e;
            try {
                if (e.__raven__) return e;
                if (e.__raven_wrapper__) return e.__raven_wrapper__
            } catch(t) {
                return e
            }
            function i() {
                var i = [],
                o = arguments.length,
                a = !t || t && !1 !== t.deep;
                for (r && tt(r) && r.apply(this, arguments); o--;) i[o] = a ? n.wrap(t, arguments[o]) : arguments[o];
                try {
                    return e.apply(this, i)
                } catch(e) {
                    throw n._ignoreNextOnError(),
                    n.captureException(e, t),
                    e
                }
            }
            for (var o in e) lt(e, o) && (i[o] = e[o]);
            return i.prototype = e.prototype,
            e.__raven_wrapper__ = i,
            i.__raven__ = !0,
            i.__orig__ = e,
            i
        },
        uninstall: function() {
            return P.report.uninstall(),
            this._detachPromiseRejectionHandler(),
            this._unpatchFunctionToString(),
            this._restoreBuiltIns(),
            this._restoreConsole(),
            Error.stackTraceLimit = this._originalErrorStackTraceLimit,
            this._isRavenInstalled = !1,
            this
        },
        _promiseRejectionHandler: function(t) {
            this._logDebug("debug", "Raven caught unhandled promise rejection:", t),
            this.captureException(t.reason)
        },
        _attachPromiseRejectionHandler: function() {
            return this._promiseRejectionHandler = this._promiseRejectionHandler.bind(this),
            Ot.addEventListener && Ot.addEventListener("unhandledrejection", this._promiseRejectionHandler),
            this
        },
        _detachPromiseRejectionHandler: function() {
            return Ot.removeEventListener && Ot.removeEventListener("unhandledrejection", this._promiseRejectionHandler),
            this
        },
        captureException: function(t, e) {
            if (e = ot({
                trimHeadFrames: 0
            },
            e || {}), Z(t) && t.error) t = t.error;
            else if (G(t)) t = t;
            else {
                if (!Y(t)) return this.captureMessage(t, ot(e, {
                    stacktrace: !0,
                    trimHeadFrames: e.trimHeadFrames + 1
                }));
                e = this._getCaptureExceptionOptionsFromPlainObject(e, t),
                t = new Error(e.message)
            }
            this._lastCapturedException = t;
            try {
                var r = P.computeStackTrace(t);
                this._handleStackInfo(r, e)
            } catch(e) {
                if (t !== e) throw e
            }
            return this
        },
        _getCaptureExceptionOptionsFromPlainObject: function(t, e) {
            var r = Object.keys(e).sort(),
            n = ot(t, {
                message: "Non-Error exception captured with keys: " + bt(r),
                fingerprint: [J(r)],
                extra: t.extra || {}
            });
            return n.extra.__serialized__ = yt(e),
            n
        },
        captureMessage: function(t, e) {
            if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
                var r, n = ot({
                    message: t += ""
                },
                e = e || {});
                try {
                    throw new Error(t)
                } catch(t) {
                    r = t
                }
                r.name = null;
                var i = P.computeStackTrace(r),
                o = rt(i.stack) && i.stack[1],
                a = o && o.url || "";
                if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(a)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(a))) {
                    if (this._globalOptions.stacktrace || e && e.stacktrace) {
                        n.fingerprint = null == n.fingerprint ? t: n.fingerprint,
                        (e = ot({
                            trimHeadFrames: 0
                        },
                        e)).trimHeadFrames += 1;
                        var s = this._prepareFrames(i, e);
                        n.stacktrace = {
                            frames: s.reverse()
                        }
                    }
                    return n.fingerprint && (n.fingerprint = rt(n.fingerprint) ? n.fingerprint: [n.fingerprint]),
                    this._send(n),
                    this
                }
            }
        },
        captureBreadcrumb: function(t) {
            var e = ot({
                timestamp: wt() / 1e3
            },
            t);
            if (tt(this._globalOptions.breadcrumbCallback)) {
                var r = this._globalOptions.breadcrumbCallback(e);
                if (V(r) && !nt(r)) e = r;
                else if (!1 === r) return this
            }
            return this._breadcrumbs.push(e),
            this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
            this
        },
        addPlugin: function(t) {
            var e = [].slice.call(arguments, 1);
            return this._plugins.push([t, e]),
            this._isRavenInstalled && this._drainPlugins(),
            this
        },
        setUserContext: function(t) {
            return this._globalContext.user = t,
            this
        },
        setExtraContext: function(t) {
            return this._mergeContext("extra", t),
            this
        },
        setTagsContext: function(t) {
            return this._mergeContext("tags", t),
            this
        },
        clearContext: function() {
            return this._globalContext = {},
            this
        },
        getContext: function() {
            return JSON.parse(o(this._globalContext))
        },
        setEnvironment: function(t) {
            return this._globalOptions.environment = t,
            this
        },
        setRelease: function(t) {
            return this._globalOptions.release = t,
            this
        },
        setDataCallback: function(t) {
            var e = this._globalOptions.dataCallback;
            return this._globalOptions.dataCallback = jt(e, t),
            this
        },
        setBreadcrumbCallback: function(t) {
            var e = this._globalOptions.breadcrumbCallback;
            return this._globalOptions.breadcrumbCallback = jt(e, t),
            this
        },
        setShouldSendCallback: function(t) {
            var e = this._globalOptions.shouldSendCallback;
            return this._globalOptions.shouldSendCallback = jt(e, t),
            this
        },
        setTransport: function(t) {
            return this._globalOptions.transport = t,
            this
        },
        lastException: function() {
            return this._lastCapturedException
        },
        lastEventId: function() {
            return this._lastEventId
        },
        isSetup: function() {
            return !! this._hasJSON && ( !! this._globalServer || (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this._logDebug("error", "Error: Raven has not been configured.")), !1))
        },
        afterLoad: function() {
            var t = Ot.RavenConfig;
            t && this.config(t.dsn, t.config).install()
        },
        showReportDialog: function(t) {
            if (Ct) {
                var e = (t = t || {}).eventId || this.lastEventId();
                if (!e) throw new $("Missing eventId");
                var r = t.dsn || this._dsn;
                if (!r) throw new $("Missing DSN");
                var n = encodeURIComponent,
                i = "";
                i += "?eventId=" + n(e),
                i += "&dsn=" + n(r);
                var o = t.user || this._globalContext.user;
                o && (o.name && (i += "&name=" + n(o.name)), o.email && (i += "&email=" + n(o.email)));
                var a = this._getGlobalServer(this._parseDSN(r)),
                s = Ct.createElement("script");
                s.async = !0,
                s.src = a + "/api/embed/error-page/" + i,
                (Ct.head || Ct.body).appendChild(s)
            }
        },
        _ignoreNextOnError: function() {
            var t = this;
            this._ignoreOnError += 1,
            setTimeout(function() {
                t._ignoreOnError -= 1
            })
        },
        _triggerEvent: function(t, e) {
            var r, n;
            if (this._hasDocument) {
                for (n in e = e || {},
                t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1), Ct.createEvent ? (r = Ct.createEvent("HTMLEvents")).initEvent(t, !0, !0) : (r = Ct.createEventObject()).eventType = t, e) lt(e, n) && (r[n] = e[n]);
                if (Ct.createEvent) Ct.dispatchEvent(r);
                else try {
                    Ct.fireEvent("on" + r.eventType.toLowerCase(), r)
                } catch(t) {}
            }
        },
        _breadcrumbEventHandler: function(t) {
            var e = this;
            return function(r) {
                if (e._keypressTimeout = null, e._lastCapturedEvent !== r) {
                    var n;
                    e._lastCapturedEvent = r;
                    try {
                        n = ht(r.target)
                    } catch(t) {
                        n = "<unknown>"
                    }
                    e.captureBreadcrumb({
                        category: "ui." + t,
                        message: n
                    })
                }
            }
        },
        _keypressEventHandler: function() {
            var t = this;
            return function(e) {
                var r;
                try {
                    r = e.target
                } catch(t) {
                    return
                }
                var n = r && r.tagName;
                if (n && ("INPUT" === n || "TEXTAREA" === n || r.isContentEditable)) {
                    var i = t._keypressTimeout;
                    i || t._breadcrumbEventHandler("input")(e),
                    clearTimeout(i),
                    t._keypressTimeout = setTimeout(function() {
                        t._keypressTimeout = null
                    },
                    1e3)
                }
            }
        },
        _captureUrlChange: function(t, e) {
            var r = gt(this._location.href),
            n = gt(e),
            i = gt(t);
            this._lastHref = e,
            r.protocol === n.protocol && r.host === n.host && (e = n.relative),
            r.protocol === i.protocol && r.host === i.host && (t = i.relative),
            this.captureBreadcrumb({
                category: "navigation",
                data: {
                    to: e,
                    from: t
                }
            })
        },
        _patchFunctionToString: function() {
            var t = this;
            t._originalFunctionToString = Function.prototype.toString,
            Function.prototype.toString = function() {
                return "function" == typeof this && this.__raven__ ? t._originalFunctionToString.apply(this.__orig__, arguments) : t._originalFunctionToString.apply(this, arguments)
            }
        },
        _unpatchFunctionToString: function() {
            this._originalFunctionToString && (Function.prototype.toString = this._originalFunctionToString)
        },
        _instrumentTryCatch: function() {
            var t = this,
            e = t._wrappedBuiltIns;
            function r(e) {
                return function(r, n) {
                    for (var i = new Array(arguments.length), o = 0; o < i.length; ++o) i[o] = arguments[o];
                    var a = i[0];
                    return tt(a) && (i[0] = t.wrap(a)),
                    e.apply ? e.apply(this, i) : e(i[0], i[1])
                }
            }
            var n = this._globalOptions.autoBreadcrumbs;
            function i(r) {
                var i = Ot[r] && Ot[r].prototype;
                i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (vt(i, "addEventListener",
                function(e) {
                    return function(i, o, a, s) {
                        try {
                            o && o.handleEvent && (o.handleEvent = t.wrap(o.handleEvent))
                        } catch(t) {}
                        var l, c, u;
                        return n && n.dom && ("EventTarget" === r || "Node" === r) && (c = t._breadcrumbEventHandler("click"), u = t._keypressEventHandler(), l = function(t) {
                            if (t) {
                                var e;
                                try {
                                    e = t.type
                                } catch(t) {
                                    return
                                }
                                return "click" === e ? c(t) : "keypress" === e ? u(t) : void 0
                            }
                        }),
                        e.call(this, i, t.wrap(o, void 0, l), a, s)
                    }
                },
                e), vt(i, "removeEventListener",
                function(t) {
                    return function(e, r, n, i) {
                        try {
                            r = r && (r.__raven_wrapper__ ? r.__raven_wrapper__: r)
                        } catch(t) {}
                        return t.call(this, e, r, n, i)
                    }
                },
                e))
            }
            vt(Ot, "setTimeout", r, e),
            vt(Ot, "setInterval", r, e),
            Ot.requestAnimationFrame && vt(Ot, "requestAnimationFrame",
            function(e) {
                return function(r) {
                    return e(t.wrap(r))
                }
            },
            e);
            for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < o.length; a++) i(o[a])
        },
        _instrumentBreadcrumbs: function() {
            var t = this,
            e = this._globalOptions.autoBreadcrumbs,
            r = t._wrappedBuiltIns;
            function n(e, r) {
                e in r && tt(r[e]) && vt(r, e,
                function(e) {
                    return t.wrap(e)
                })
            }
            if (e.xhr && "XMLHttpRequest" in Ot) {
                var i = Ot.XMLHttpRequest && Ot.XMLHttpRequest.prototype;
                vt(i, "open",
                function(e) {
                    return function(r, n) {
                        return et(n) && -1 === n.indexOf(t._globalKey) && (this.__raven_xhr = {
                            method: r,
                            url: n,
                            status_code: null
                        }),
                        e.apply(this, arguments)
                    }
                },
                r),
                vt(i, "send",
                function(e) {
                    return function() {
                        var r = this;
                        function i() {
                            if (r.__raven_xhr && 4 === r.readyState) {
                                try {
                                    r.__raven_xhr.status_code = r.status
                                } catch(t) {}
                                t.captureBreadcrumb({
                                    type: "http",
                                    category: "xhr",
                                    data: r.__raven_xhr
                                })
                            }
                        }
                        for (var o = ["onload", "onerror", "onprogress"], a = 0; a < o.length; a++) n(o[a], r);
                        return "onreadystatechange" in r && tt(r.onreadystatechange) ? vt(r, "onreadystatechange",
                        function(e) {
                            return t.wrap(e, void 0, i)
                        }) : r.onreadystatechange = i,
                        e.apply(this, arguments)
                    }
                },
                r)
            }
            e.xhr && _t() && vt(Ot, "fetch",
            function(e) {
                return function() {
                    for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
                    var i, o = r[0],
                    a = "GET";
                    if ("string" == typeof o ? i = o: "Request" in Ot && o instanceof Ot.Request ? (i = o.url, o.method && (a = o.method)) : i = "" + o, -1 !== i.indexOf(t._globalKey)) return e.apply(this, r);
                    r[1] && r[1].method && (a = r[1].method);
                    var s = {
                        method: a,
                        url: i,
                        status_code: null
                    };
                    return e.apply(this, r).then(function(e) {
                        return s.status_code = e.status,
                        t.captureBreadcrumb({
                            type: "http",
                            category: "fetch",
                            data: s
                        }),
                        e
                    })
                }
            },
            r),
            e.dom && this._hasDocument && (Ct.addEventListener ? (Ct.addEventListener("click", t._breadcrumbEventHandler("click"), !1), Ct.addEventListener("keypress", t._keypressEventHandler(), !1)) : (Ct.attachEvent("onclick", t._breadcrumbEventHandler("click")), Ct.attachEvent("onkeypress", t._keypressEventHandler())));
            var o = Ot.chrome,
            a = !(o && o.app && o.app.runtime) && Ot.history && history.pushState && history.replaceState;
            if (e.location && a) {
                var s = Ot.onpopstate;
                Ot.onpopstate = function() {
                    var e = t._location.href;
                    if (t._captureUrlChange(t._lastHref, e), s) return s.apply(this, arguments)
                };
                var l = function(e) {
                    return function() {
                        var r = arguments.length > 2 ? arguments[2] : void 0;
                        return r && t._captureUrlChange(t._lastHref, r + ""),
                        e.apply(this, arguments)
                    }
                };
                vt(history, "pushState", l, r),
                vt(history, "replaceState", l, r)
            }
            if (e.console && "console" in Ot && console.log) {
                var c = function(e, r) {
                    t.captureBreadcrumb({
                        message: e,
                        level: r.level,
                        category: "console"
                    })
                };
                it(["debug", "info", "warn", "error", "log"],
                function(t, e) {
                    xt(console, e, c)
                })
            }
        },
        _restoreBuiltIns: function() {
            for (var t; this._wrappedBuiltIns.length;) {
                var e = (t = this._wrappedBuiltIns.shift())[0],
                r = t[1],
                n = t[2];
                e[r] = n
            }
        },
        _restoreConsole: function() {
            for (var t in this._originalConsoleMethods) this._originalConsole[t] = this._originalConsoleMethods[t]
        },
        _drainPlugins: function() {
            var t = this;
            it(this._plugins,
            function(e, r) {
                var n = r[0],
                i = r[1];
                n.apply(t, [t].concat(i))
            })
        },
        _parseDSN: function(t) {
            var e = kt.exec(t),
            r = {},
            n = 7;
            try {
                for (; n--;) r[St[n]] = e[n] || ""
            } catch(e) {
                throw new $("Invalid DSN: " + t)
            }
            if (r.pass && !this._globalOptions.allowSecretKey) throw new $("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
            return r
        },
        _getGlobalServer: function(t) {
            var e = "//" + t.host + (t.port ? ":" + t.port: "");
            return t.protocol && (e = t.protocol + ":" + e),
            e
        },
        _handleOnErrorStackInfo: function() {
            this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
        },
        _handleStackInfo: function(t, e) {
            var r = this._prepareFrames(t, e);
            this._triggerEvent("handle", {
                stackInfo: t,
                options: e
            }),
            this._processException(t.name, t.message, t.url, t.lineno, r, e)
        },
        _prepareFrames: function(t, e) {
            var r = this,
            n = [];
            if (t.stack && t.stack.length && (it(t.stack,
            function(e, i) {
                var o = r._normalizeFrame(i, t.url);
                o && n.push(o)
            }), e && e.trimHeadFrames)) for (var i = 0; i < e.trimHeadFrames && i < n.length; i++) n[i].in_app = !1;
            return n = n.slice(0, this._globalOptions.stackTraceLimit)
        },
        _normalizeFrame: function(t, e) {
            var r = {
                filename: t.url,
                lineno: t.line,
                colno: t.column,
                function: t.func || "?"
            };
            return t.url || (r.filename = e),
            r.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(r.filename) || /(Raven|TraceKit)\./.test(r.
            function) || /raven\.(min\.)?js$/.test(r.filename)),
            r
        },
        _processException: function(t, e, r, n, i, o) {
            var a, s = (t ? t + ": ": "") + (e || "");
            if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e) && !this._globalOptions.ignoreErrors.test(s)) && (i && i.length ? (r = i[0].filename || r, i.reverse(), a = {
                frames: i
            }) : r && (a = {
                frames: [{
                    filename: r,
                    lineno: n,
                    in_app: !0
                }]
            }), (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(r)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(r)))) {
                var l = ot({
                    exception: {
                        values: [{
                            type: t,
                            value: e,
                            stacktrace: a
                        }]
                    },
                    culprit: r
                },
                o);
                this._send(l)
            }
        },
        _trimPacket: function(t) {
            var e = this._globalOptions.maxMessageLength;
            if (t.message && (t.message = at(t.message, e)), t.exception) {
                var r = t.exception.values[0];
                r.value = at(r.value, e)
            }
            var n = t.request;
            return n && (n.url && (n.url = at(n.url, this._globalOptions.maxUrlLength)), n.Referer && (n.Referer = at(n.Referer, this._globalOptions.maxUrlLength))),
            t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs),
            t
        },
        _trimBreadcrumbs: function(t) {
            for (var e, r, n, i = ["to", "from", "url"], o = 0; o < t.values.length; ++o) if ((r = t.values[o]).hasOwnProperty("data") && V(r.data) && !st(r.data)) {
                n = ot({},
                r.data);
                for (var a = 0; a < i.length; ++a) e = i[a],
                n.hasOwnProperty(e) && n[e] && (n[e] = at(n[e], this._globalOptions.maxUrlLength));
                t.values[o].data = n
            }
        },
        _getHttpData: function() {
            if (this._hasNavigator || this._hasDocument) {
                var t = {};
                return this._hasNavigator && Rt.userAgent && (t.headers = {
                    "User-Agent": navigator.userAgent
                }),
                Ot.location && Ot.location.href && (t.url = Ot.location.href),
                this._hasDocument && Ct.referrer && (t.headers || (t.headers = {}), t.headers.Referer = Ct.referrer),
                t
            }
        },
        _resetBackoff: function() {
            this._backoffDuration = 0,
            this._backoffStart = null
        },
        _shouldBackoff: function() {
            return this._backoffDuration && wt() - this._backoffStart < this._backoffDuration
        },
        _isRepeatData: function(t) {
            var e = this._lastData;
            return ! (!e || t.message !== e.message || t.culprit !== e.culprit) && (t.stacktrace || e.stacktrace ? dt(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || pt(t.exception, e.exception))
        },
        _setBackoffState: function(t) {
            if (!this._shouldBackoff()) {
                var e = t.status;
                if (400 === e || 401 === e || 429 === e) {
                    var r;
                    try {
                        r = _t() ? t.headers.get("Retry-After") : t.getResponseHeader("Retry-After"),
                        r = 1e3 * parseInt(r, 10)
                    } catch(t) {}
                    this._backoffDuration = r || (2 * this._backoffDuration || 1e3),
                    this._backoffStart = wt()
                }
            }
        },
        _send: function(t) {
            var e = this._globalOptions,
            r = {
                project: this._globalProject,
                logger: e.logger,
                platform: "javascript"
            },
            n = this._getHttpData();
            n && (r.request = n),
            t.trimHeadFrames && delete t.trimHeadFrames,
            (t = ot(r, t)).tags = ot(ot({},
            this._globalContext.tags), t.tags),
            t.extra = ot(ot({},
            this._globalContext.extra), t.extra),
            t.extra["session:duration"] = wt() - this._startTime,
            this._breadcrumbs && this._breadcrumbs.length > 0 && (t.breadcrumbs = {
                values: [].slice.call(this._breadcrumbs, 0)
            }),
            this._globalContext.user && (t.user = this._globalContext.user),
            e.environment && (t.environment = e.environment),
            e.release && (t.release = e.release),
            e.serverName && (t.server_name = e.serverName),
            t = this._sanitizeData(t),
            Object.keys(t).forEach(function(e) { (null == t[e] || "" === t[e] || nt(t[e])) && delete t[e]
            }),
            tt(e.dataCallback) && (t = e.dataCallback(t) || t),
            t && !nt(t) && (tt(e.shouldSendCallback) && !e.shouldSendCallback(t) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", t) : "number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t)))
        },
        _sanitizeData: function(t) {
            return Et(t, this._globalOptions.sanitizeKeys)
        },
        _getUuid: function() {
            return ft()
        },
        _sendProcessedPayload: function(t, e) {
            var r = this,
            n = this._globalOptions;
            if (this.isSetup()) if (t = this._trimPacket(t), this._globalOptions.allowDuplicates || !this._isRepeatData(t)) {
                this._lastEventId = t.event_id || (t.event_id = this._getUuid()),
                this._lastData = t,
                this._logDebug("debug", "Raven about to send:", t);
                var i = {
                    sentry_version: "7",
                    sentry_client: "raven-js/" + this.VERSION,
                    sentry_key: this._globalKey
                };
                this._globalSecret && (i.sentry_secret = this._globalSecret);
                var o = t.exception && t.exception.values[0];
                this._globalOptions.autoBreadcrumbs && this._globalOptions.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                    category: "sentry",
                    message: o ? (o.type ? o.type + ": ": "") + o.value: t.message,
                    event_id: t.event_id,
                    level: t.level || "error"
                });
                var a = this._globalEndpoint; (n.transport || this._makeRequest).call(this, {
                    url: a,
                    auth: i,
                    data: t,
                    options: n,
                    onSuccess: function() {
                        r._resetBackoff(),
                        r._triggerEvent("success", {
                            data: t,
                            src: a
                        }),
                        e && e()
                    },
                    onError: function(n) {
                        r._logDebug("error", "Raven transport failed to send: ", n),
                        n.request && r._setBackoffState(n.request),
                        r._triggerEvent("failure", {
                            data: t,
                            src: a
                        }),
                        n = n || new Error("Raven send failed (no additional details provided)"),
                        e && e(n)
                    }
                })
            } else this._logDebug("warn", "Raven dropped repeat event: ", t)
        },
        _makeRequest: function(t) {
            var e = t.url + "?" + ut(t.auth),
            r = null,
            n = {};
            if (t.options.headers && (r = this._evaluateHash(t.options.headers)), t.options.fetchParameters && (n = this._evaluateHash(t.options.fetchParameters)), _t()) {
                n.body = o(t.data);
                var i = ot({},
                this._fetchDefaults),
                a = ot(i, n);
                return r && (a.headers = r),
                Ot.fetch(e, a).then(function(e) {
                    if (e.ok) t.onSuccess && t.onSuccess();
                    else {
                        var r = new Error("Sentry error code: " + e.status);
                        r.request = e,
                        t.onError && t.onError(r)
                    }
                }).
                catch(function() {
                    t.onError && t.onError(new Error("Sentry error code: network unavailable"))
                })
            }
            var s = Ot.XMLHttpRequest && new Ot.XMLHttpRequest;
            s && (("withCredentials" in s || "undefined" != typeof XDomainRequest) && ("withCredentials" in s ? s.onreadystatechange = function() {
                if (4 === s.readyState) if (200 === s.status) t.onSuccess && t.onSuccess();
                else if (t.onError) {
                    var e = new Error("Sentry error code: " + s.status);
                    e.request = s,
                    t.onError(e)
                }
            }: (s = new XDomainRequest, e = e.replace(/^https?:/, ""), t.onSuccess && (s.onload = t.onSuccess), t.onError && (s.onerror = function() {
                var e = new Error("Sentry error code: XDomainRequest");
                e.request = s,
                t.onError(e)
            })), s.open("POST", e), r && it(r,
            function(t, e) {
                s.setRequestHeader(t, e)
            }), s.send(o(t.data))))
        },
        _evaluateHash: function(t) {
            var e = {};
            for (var r in t) if (t.hasOwnProperty(r)) {
                var n = t[r];
                e[r] = "function" == typeof n ? n() : n
            }
            return e
        },
        _logDebug: function(t) {
            this._originalConsoleMethods[t] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1))
        },
        _mergeContext: function(t, e) {
            Q(e) ? delete this._globalContext[t] : this._globalContext[t] = ot(this._globalContext[t] || {},
            e)
        }
    },
    Tt.prototype.setUser = Tt.prototype.setUserContext,
    Tt.prototype.setReleaseContext = Tt.prototype.setRelease;
    var Pt = Tt,
    Ft = "undefined" != typeof window ? window: void 0 !== n ? n: "undefined" != typeof self ? self: {},
    Dt = Ft.Raven,
    Ut = new Pt;
    Ut.noConflict = function() {
        return Ft.Raven = Dt,
        Ut
    },
    Ut.afterLoad();
    var Ht = Ut,
    Nt = Pt;
    Ht.Client = Nt,
    function() {
        if (["https:", "http:"].indexOf(window.location.protocol) >= 0 && !((t = window).callPhantom || t._phantom || t.__phantomas || t.buffer || t.Buffer || t.emit || t.spawn || t.webdriver || t.domAutomation || t.domAutomationController)) {
            var t, n = (document.currentScript ? document.currentScript: document.querySelector("script[data-sentry-config]")).dataset.sentryConfig,
            i = n && JSON.parse(n);
            if (i) {
                var o = i.dsn,
                a = i.ignoreErrorNames,
                s = void 0 === a ? [] : a,
                l = i.whitelistUrls,
                c = void 0 === l ? [] : l,
                u = r(i, ["dsn", "ignoreErrorNames", "whitelistUrls"]),
                f = c.map(function(t) {
                    return new RegExp(t)
                });
                Ht.config(o,
                function(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {},
                        i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))),
                        i.forEach(function(r) {
                            e(t, r, n[r])
                        })
                    }
                    return t
                } ({
                    shouldSendCallback: function(t) {
                        if (!window.document.body) return ! 1;
                        if (!t.exception || !t.exception.values) return ! 1;
                        if (t.exception.values.some(function(t) {
                            return s.indexOf(t.type) >= 0
                        })) return ! 1;
                        var e = function(t) {
                            var e = t.exception.values[0].stacktrace.frames,
                            r = e[e.length - 1],
                            n = e[e.length - 2];
                            return r.filename || n && n.filename
                        } (t);
                        return ! (e && f.length && !f.some(function(t) {
                            return t.test(e)
                        }))
                    }
                },
                u)).install(),
                window.Raven = Ht
            }
        }
    } ()
});