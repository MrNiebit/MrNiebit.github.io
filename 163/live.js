/*! pro BUILD by webid: Thu Feb 20 2020 13:15:48 GMT+0800 (CST) */
!function(e, t) {
    for (var i in t)
        e[i] = t[i]
}(window, function(s) {
    function e(e) {
        for (var t, i, n = e[0], o = e[1], r = 0, a = []; r < n.length; r++)
            i = n[r],
            l[i] && a.push(l[i][0]),
            l[i] = 0;
        for (t in o)
            Object.prototype.hasOwnProperty.call(o, t) && (s[t] = o[t]);
        for (u && u(e); a.length; )
            a.shift()()
    }
    var i = {}
      , l = {
        1: 0
    };
    function c(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c),
        t.l = !0,
        t.exports
    }
    c.e = function(r) {
        var e = []
          , i = l[r];
        if (0 !== i)
            if (i)
                e.push(i[2]);
            else {
                var t = new Promise(function(e, t) {
                    i = l[r] = [e, t]
                }
                );
                e.push(i[2] = t);
                var n, a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 120,
                c.nc && a.setAttribute("nonce", c.nc),
                a.src = function o(e) {
                    return c.p + "" + ({
                        0: "live.feedback"
                    }[e] || e) + "." + {
                        0: "571bea39a576056fe20a"
                    }[e] + ".js"
                }(r),
                n = function(e) {
                    a.onerror = a.onload = null,
                    clearTimeout(s);
                    var t = l[r];
                    if (0 !== t) {
                        if (t) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , n = e && e.target && e.target.src
                              , o = new Error("Loading chunk " + r + " failed.\n(" + i + ": " + n + ")");
                            o.type = i,
                            o.request = n,
                            t[1](o)
                        }
                        l[r] = undefined
                    }
                }
                ;
                var s = setTimeout(function() {
                    n({
                        type: "timeout",
                        target: a
                    })
                }, 12e4);
                a.onerror = a.onload = n,
                document.head.appendChild(a)
            }
        return Promise.all(e)
    }
    ,
    c.m = s,
    c.c = i,
    c.d = function(e, t, i) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(t, e) {
        if (1 & e && (t = c(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (c.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                c.d(i, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return i
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "//static.iqiyi.com/js/qlive/plugin/player/uniplayer/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var t = window.webpack4Jsonp = window.webpack4Jsonp || []
      , n = t.push.bind(t);
    t.push = e,
    t = t.slice();
    for (var o = 0; o < t.length; o++)
        e(t[o]);
    var u = n;
    return c(c.s = "cf75a731eb9f59898fe8")
}({
    "0343a4db3af6c2f53d0e": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = c(i("790825d0dabf4060a0d9"))
          , o = c(i("1787093d7720fc0d37ae"))
          , r = c(i("343def12cad299c54e12"))
          , a = c(i("c779f0f9ff7f0eb554cb"))
          , s = (c(i("12343932e39887317ee6")),
        c(i("48845084357dc7708026")))
          , l = c(i("ae19a1d24e6ded12b0b9"));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var u, f = (function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(d, u = r["default"]),
        d.prototype.bindEvents = function() {
            var i = this;
            this.handlers = {
                killTimeEvent: this._killTimeEvent.bind(this)
            },
            this.player.on(n["default"].VIDEO_STATUS, function(e) {
                if (!s["default"].isAres() && e) {
                    var t = e.type;
                    switch (e.data,
                    t) {
                    case n["default"].VIDEO_PLAY:
                    case n["default"].VIDEO_READY:
                        i.isPlaying = !0;
                        break;
                    case n["default"].VIDEO_PAUSE:
                    case n["default"].VIDEO_WAITE:
                    case n["default"].VIDEO_STOP:
                        break;
                    case n["default"].VIDEO_AUTOPLAY_FAIL:
                        i.isAutoPlayError = !0;
                        break;
                    case n["default"].VIDEO_TIMEUPDATE:
                        i.isPlaying = !0
                    }
                }
            }),
            this.player.on(o["default"].PPC_TRYWATCH, function(e) {
                i.tryWatchData = e,
                s["default"].setPhase(s["default"].CHARGE_READY),
                l["default"].info("tryWatch", "试看模块接收到试看消息"),
                i.player.emit(n["default"].CHARGE_CHECK_DONE, {
                    error: !1
                }),
                null === i.tryWatchTimer && (i.player.emit(n["default"].TRY_WATCH_CHANGED, 0),
                i.tryWatchTimer = setInterval(i.handlers.killTimeEvent, 1e3))
            }),
            this.player.on(n["default"].MOVIE_RESET, function(e) {
                clearInterval(i.tryWatchTimer),
                i.tryWatchTimer = null,
                i.isPlaying = !1
            })
        }
        ,
        d.prototype._killTimeEvent = function() {
            this.isPlaying && (this.tryWatchData.previewTime--,
            this.tryWatchData.previewTime,
            10 < this.tryWatchData.previewTime ? this.player.emit(o["default"].PPC_TRYWATCH_TIMER) : 0 === this.tryWatchData.previewTime ? (this.player.emit(n["default"].RECHARGE),
            this.player.emit(n["default"].NOTIFY_LIVE_STATUS, {
                type: n["default"].NOTIFY_LIVE_STOP
            }),
            this.player.emit(n["default"].NOTIFY_LIVE_STATUS, {
                type: o["default"].ACT_CHECK_BLOCK
            }),
            clearInterval(this.tryWatchTimer),
            this.tryWatchTimer = null) : this.tryWatchData.previewTime <= 10 && this.player.emit(o["default"].PPC_TRYWATCH_CUTTIMER, this.tryWatchData.previewTime))
        }
        ,
        d);
        function d(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, u.call(this, null, e));
            return t._type = a["default"].TRYWATCH_PPC,
            t.player = e,
            t.tryWatchTimer = null,
            t.bindEvents(),
            t
        }
        t["default"] = f
    },
    "039120ee892916dfcbc1": function(e, t, i) {
        "use strict";
        t.f = Object.getOwnPropertySymbols
    },
    "03a5eeee30e0865c3e7f": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.start = function(e, t, i, n) {
            this._dom ? e.appendChild(this._dom) : this.$$render(e),
            this._dom.style.top = i + "px",
            this._state = o.STATE_MOVE,
            o.TRAN ? (this._dom.style.left = null,
            this._dom.style.transition = "none inline",
            this._dom.style.transform = "translateX(" + t + "px)") : (this._x = t,
            this._dom.style.left = t + "px"),
            this._speed = n,
            this._time = (this._width + t + 10) / (60 * n)
        }
        ,
        o.prototype.stop = function() {
            this._state === o.STATE_MOVE && (this._time = 0,
            this._state = o.STATE_STOP,
            this._stopX = this.getX(),
            this._dom.style.transition = null,
            this._dom.style.transform = "translateX(0px)",
            this._dom.style.left = this._stopX + "px")
        }
        ,
        o.prototype.recover = function() {
            this._time = 0,
            this._state = o.STATE_READY,
            this._dom.style.transition = "none inline",
            this._dom.parentNode && this._dom.parentNode.removeChild(this._dom)
        }
        ,
        o.prototype.destroy = function() {
            this._dom && this._dom.parentNode && this._dom.parentNode.removeChild(this._dom),
            this._state = o.STATE_DEST,
            this._time = 0
        }
        ,
        o.prototype.update = function() {
            this._state === o.STATE_MOVE && (o.TRAN ? 0 < this._time && (this._dom.style.transition = "transform " + this._time + "s linear",
            this._dom.style.transform = "translateX(-" + (this._width + 10) + "px)",
            this._time = 0) : (this._x -= this._speed,
            this._dom.style.left = this._x + "px"))
        }
        ,
        o.prototype.getX = function() {
            return o.TRAN ? this._dom.getBoundingClientRect().left - this._dom.parentNode.getBoundingClientRect().left : this._x
        }
        ,
        o.prototype.getWidth = function() {
            return this._width
        }
        ,
        o.prototype.getState = function() {
            return this._state
        }
        ,
        o.prototype.isMove = function() {
            return this._state === o.STATE_MOVE
        }
        ,
        o.prototype.isStop = function() {
            return this._state === o.STATE_STOP
        }
        ,
        o.prototype.isReady = function() {
            return this._state === o.STATE_READY
        }
        ,
        o.prototype.isHover = function() {
            return !1
        }
        ,
        o.prototype.$$render = function(e) {}
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this._width = 0,
            this._x = 0,
            this._speed = 0,
            this._time = 0,
            this._state = 0,
            this._stopX = 0,
            this._dom = null
        }
        (t["default"] = n).TRAN = !/msie 9/.test(navigator.userAgent.toLowerCase()),
        n.STATE_READY = 0,
        n.STATE_MOVE = 1,
        n.STATE_STOP = 2,
        n.STATE_DEST = 3
    },
    "05d80536c02f0c10b599": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function(e) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
        }
          , o = function(e, t, i) {
            var n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : "/"
              , o = 4 < arguments.length && arguments[4] !== undefined ? arguments[4] : "iqiyi.com"
              , r = arguments[5];
            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
                return !1;
            var a = "";
            if (i)
                switch (i.constructor) {
                case Number:
                    a = i === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + i;
                    break;
                case String:
                    a = "; expires=" + i;
                    break;
                case Date:
                    a = "; expires=" + i.toUTCString()
                }
            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + (o ? "; domain=" + o : "") + (n ? "; path=" + n : "") + (r ? "; secure" : ""),
            !0
        };
        t.getCookie = n,
        t.setCookie = o,
        t.getAuthCookie = n("P00001"),
        t.getDeviceId = n("QC005")
    },
    "08171cb2ca5542fd13db": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var r = n(i("53065c83966dce0d1759"))
          , a = n(i("fd0b44f556392d6a75ac"))
          , s = i("bef7a691bb63f7f92f11");
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var o = (l.prototype.req = function(e, n) {
            var t = ["task_id=" + r["default"].createUUID().replace(new RegExp("-","g"), "").toLowerCase(), "tick=" + parseInt(Date.parse(new Date) / 1e3, 10), "client_id=" + r["default"].getJsuid(), "channel_id=" + e, "app=h5", "stream_type=flv", "play_type=1"]
              , i = window.location.protocol + "//liveheart.video.iqiyi.com/v1/getLiveType?" + t.join("&");
            s.apiStat.getStat(s.apiType.getlivetype).reqStart(i);
            try {
                a["default"].ajax({
                    url: i,
                    "dataType": "json",
                    "withCredentials": !1,
                    "success": function(e) {
                        s.apiStat.getStat(s.apiType.getlivetype).reqSucc(e),
                        e || s.apiStat.getStat(s.apiType.getlivetype).parseFail("no res"),
                        s.apiStat.getStat(s.apiType.getlivetype).pingbackQos(),
                        n(e)
                    },
                    "failure": function(e, t, i) {
                        s.apiStat.getStat(s.apiType.getlivetype).reqFail(i, e),
                        s.apiStat.getStat(s.apiType.getlivetype).pingbackQos(),
                        n({})
                    }
                })
            } catch (o) {
                s.apiStat.getStat(s.apiType.getlivetype).reqFail(0, "req_error"),
                s.apiStat.getStat(s.apiType.getlivetype).pingbackQos(),
                n({})
            }
        }
        ,
        l);
        function l() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l)
        }
        t["default"] = new o
    },
    "0aac488a388d7f2d0eea": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t)
                throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e)
                return e;
            var o = t.protocol + "//" + t.host
              , r = o + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var i, n = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n) ? e : (i = 0 === n.indexOf("//") ? n : 0 === n.indexOf("/") ? o + n : r + n.replace(/^\.\//, ""),
                "url(" + JSON.stringify(i) + ")")
            })
        }
    },
    "0be1f102f2a6be1b2fbc": function(e, t, i) {
        "use strict";
        var n = i("8b7f35c7088a7864b506")
          , o = Math.min;
        e.exports = function(e) {
            return 0 < e ? o(n(e), 9007199254740991) : 0
        }
    },
    "0d9c226b3bb7881f714f": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.start = function() {
            var e = this;
            this._start = (new Date).getTime(),
            this._interval = setInterval(function() {
                e._start + e._duration <= (new Date).getTime() && (e._callback(),
                e.clear())
            }, this._step)
        }
        ,
        o.prototype.step = function(e) {
            return this._step = e,
            this
        }
        ,
        o.prototype.after = function(e) {
            return this._duration = e,
            this
        }
        ,
        o.prototype.execute = function(e) {
            return this._callback = e,
            this
        }
        ,
        o.prototype.clear = function() {
            return clearInterval(this._interval),
            this._callback = null,
            this
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this._duration = 0,
            this._start = 0,
            this._callback = null,
            this._interval,
            this._step = 1e3
        }
        t["default"] = n
    },
    "0ea7086ffc65fc9f07b7": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADAUlEQVRoQ+1ZUW7aQBB9g5T+NjdocoJQKeGbHKAtOUHpCUpOUDhB4AQhJ2ilHqBE/QOkwg3oDdpfLDHV7BJn117jtXHqRWJ/EPZ6PW/ezJvZNeHABx24/TgCqJvBIwNHBvb0QPUhxM0z4OQLgDMAKyC6BS3+7Gln5uPVAuBWB+B7gE6f38gLILp+KRDVAODmKfDqHkAnw1U3oOm3l2BhfwB82Qboq+31lKkD0LQfFgDldYl16nkYFhgAvmpqr6tE9RkBAeCWKExGOPBfgPtA4y6BKgAAyusQhZFf11gC3AXNFuAW1wNAx7V4r5OTlEkAtofrA9ASqfvgE9TbOb8B7iivm6NGAEnqd2DhERD1nQUqbAAqUTug+SQTXVEAOnQvgGjpdojKP6SYlku7qedHgBKGroe5bUERALqK/9KSzNIzXVuG8tUYoI/azs0taD40bc4BgHLyVwhASyRZpHk7DBCW8XJb7kXnpgMDAGB62ATBP4HGu3SYrgXA6ul6AABU+70A6LXBQiq69T0egWZW61I/AGWXStKJBiFC6Oox+QE06yYZCQNADIKnQOMkHTab76D5e5fqhQTAUBurKsqftDptp4QBIKU2cTIb4eSQ2Pw68D9k9KoLkOzmEmMTOcJpBZqeF6gDLImVLGSjaguZq//iBwBSsLaJbYXUW7PQ5YWQI2+ESr6prJVQW9LGD0NCn9XGUieV6Y+gWbsAA668j+NzCESDSpo5vuwBJC38JLV31ru/7QZq3TOLmFiSZKBoO73SbATTTqvGagywnDQYlXEXE+peHzQdxLOK9EK5S++e4H+soqkcA7hwLykHWPhU75bSxxuc7B4thZCC0wfIanmBknLsYY8/A5adig3Jlzce75Ap5dpyj8XLAVCKpnZR4u3PHu8JEECspkrHJTd2sREwgJgNUa/ME42AD3et3FDH69JVmhK8BNbt3PbDIw5dU8rnQNYLdW6ICj194JDqeSAfOEp6cZ/HqmdgH2tKPHsEUMJplT5yZKBSd5ZY7OAZ+AcvsXBA+DaYYgAAAABJRU5ErkJggg=="
    },
    "0ec8a62d90e8400cef80": function(e, t, i) {
        "use strict";
        var d = i("d2d397351e5e28db50b1")
          , n = i("7e90ea0061b5194ffb11")
          , p = i("2148c97488151eca122f")
          , h = i("039120ee892916dfcbc1")
          , _ = i("2109d1707607aea0c0f4")
          , g = i("3da48ce483d53779cf6b")
          , y = i("3aea0cd6eefeca140496")
          , o = Object.assign;
        e.exports = !o || n(function() {
            var e = {}
              , t = {}
              , i = Symbol()
              , n = "abcdefghijklmnopqrst";
            return e[i] = 7,
            n.split("").forEach(function(e) {
                t[e] = e
            }),
            7 != o({}, e)[i] || p(o({}, t)).join("") != n
        }) ? function(e, t) {
            for (var i = g(e), n = arguments.length, o = 1, r = h.f, a = _.f; o < n; )
                for (var s, l = y(arguments[o++]), c = r ? p(l).concat(r(l)) : p(l), u = c.length, f = 0; f < u; )
                    s = c[f++],
                    d && !a.call(l, s) || (i[s] = l[s]);
            return i
        }
        : o
    },
    "0f8fae83cfa19428c8cc": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAiCAYAAACHpl23AAAAAXNSR0IArs4c6QAAAx5JREFUaAXtm0tIVFEYx/8zzow6jxxNx6jRjNQIfEI+CklrEURBVhBBDzDBVZskWhSkLXJRLdukWRAIYS0kiR5QjBhWuMicWYROhc5QNmOpzDRDjWX33IU4MjPYuQ+48B24cO8953zfn/+P87pwdXhWvR9/l7oBOIWLinYc8EOva9PhSZVP0EzwtANupVK/nuCt9ENz904GkIqGHSCAGobHpBNAAqhxBzQun0YgAdS4AxqXTyNQ4wANUvXb0sw4v+U0DjmasNVcgNjSIryRaQx8c+GW7yG+xxakpqD+KRxgX2KWUtSnrNqbU4M75Z3YnLkRvugMxkOTIsByW7EIcyEWwonxi3gcfJUyDlXyO8ANcE/ODryo6cZU9CvOfbiOgYArTsW+9fXoKbsMZ0Y+Dr9rx6PAUFw9PcjjABdANm26Gx7ApDOi9vVJ+H8FEqpxmLIxurMPlrRMbB8+gmBsLmE7esnvANcmhq15bNps9VxJCo9JCvyew7GxC/CEvfwKqWdKB7hG4Niu+8gVRlfj21aUWArxZn4c84vhlImoUhkHuHahbLdpNZjhbRwUVV2auImuT71xCjP0JhzM241KWykqbCWYjc2LIzauET1IdoALYP/Mc+Qa7eKu831oAoMJNijtRadwtfTsssDwYoQALrsh3w3XFLqW9HaDFfX2Ckz+nMZQXS+CwnpYPXJ8LV2pzX84wLWJyTNmw1Xbg7qssqSp2Jr4dHYE2yxF2JThEI4RrqRtqYLfAS6ALF25tQT9VdfAjgrJijPdgdvCWXAq+gU3Pt9L1ozeS3CACyA7z7V4OsRDOjvnsUP76tIsfFobrruLDem5aHF3IPQnsroJPcvggKQ18EBeA/oqupBltOFjxAd3yAujzoDKdaUiXDbyzrg78fLHqAxSKUQiByQBZAHZbrSt4Cia85tQbC4UAXoFmGzNY9MmjbxEtsv3TjJA+aRQJB4HuNZAnkTURxkHCKAyvqoWlQCqZrUyiQigMr6qFpUAqma1MokIoDK+qhaVAKpmtTKJGEC/MqEpqgoOCL+XCT8JEkQVrJY/hfiD5z8XMs9BFrAIDwAAAABJRU5ErkJggg=="
    },
    "1056f768b57656bfd017": function(e, t, i) {
        "use strict";
        var r = i("f11c62a07e5387a88d2c")
          , a = i("6b0eb2cb0eb384618cfe")
          , s = [].slice
          , l = {}
          , c = function c(e, t, i) {
            if (!(t in l)) {
                for (var n = [], o = 0; o < t; o++)
                    n[o] = "a[" + o + "]";
                l[t] = Function("C,a", "return new C(" + n.join(",") + ")")
            }
            return l[t](e, i)
        };
        e.exports = Function.bind || function(t) {
            var i = r(this)
              , n = s.call(arguments, 1)
              , o = function() {
                var e = n.concat(s.call(arguments));
                return this instanceof o ? c(i, e.length, e) : i.apply(t, e)
            };
            return a(i.prototype) && (o.prototype = i.prototype),
            o
        }
    },
    "12343932e39887317ee6": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.setType = function(e) {
            this._type = e
        }
        ,
        o.prototype.getType = function() {
            return this._type
        }
        ,
        o.prototype.getLiveTypes = function() {
            return [this.FLV, this.F4V, this.M3U8]
        }
        ,
        o.prototype.getCutTypes = function() {
            return [this.TS, this.DATA]
        }
        ,
        o.prototype.isLiveType = function(e) {
            return -1 != this.getLiveTypes().indexOf(e || this.getType())
        }
        ,
        o.prototype.isHCDNLiveType = function(e) {
            return e === undefined && (e = this.getType()),
            e !== this.F4V && this.isLiveType(e)
        }
        ,
        o.prototype.isHCDNType = function(e) {
            return e === undefined && (e = this.getType()),
            -1 != [this.TS, this.DATA, this.FLV].indexOf(e)
        }
        ,
        o.prototype.isCutType = function(e) {
            return -1 != this.getCutTypes().indexOf(e || this.getType())
        }
        ,
        o.prototype.isF4v = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.F4V
        }
        ,
        o.prototype.isMp4 = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.MP4
        }
        ,
        o.prototype.isFlv = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.FLV
        }
        ,
        o.prototype.isTs = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.TS
        }
        ,
        o.prototype.isData = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.DATA
        }
        ,
        o.prototype.isM3u8 = function(e) {
            return e === undefined && (e = this.getType()),
            e == this.M3U8
        }
        ,
        o.prototype.probe = function(e) {
            var t = /\.m3u8\?|\.m3u8$/.test(e);
            if (/\.f4v\?|\.f4v$/.test(e))
                return this.F4V;
            if (t)
                return this.M3U8;
            if (/\.mp4\?|\.mp4$/.test(e))
                return this.MP4;
            if (/^hcdnlive/.test(e)) {
                var i = /hl_pltp=1/.test(e);
                if (i)
                    return this.FLV;
                if (!i && /hl_sttp=ts/.test(e))
                    return this.TS;
                if (!i && /hl_sttp=flv/.test(e))
                    return this.DATA
            }
            return null
        }
        ,
        o.prototype.trimM3u8Url = function(e) {
            return e = e.replace(/^https?:/, ""),
            "https:" === location.protocol && (e = e.replace("m3u8.live.video.qiyi.com", "hlslive.video.iqiyi.com")),
            e
        }
        ,
        o.prototype.hcdnRealtimeToCut = function(e) {
            return e = e.replace(/hl_pltp=1/, "hl_pltp=0")
        }
        ,
        o.prototype.hcdnCutToRealtime = function(e) {
            return e = e.replace(/hl_pltp=0/, "hl_pltp=1")
        }
        ,
        o.prototype.hcdnDataToTs = function(e, t, i) {
            return "ts" != t.remark.key.hl_sttp && (e = (e = e.replace("hl_sttp=" + t.remark.key.hl_sttp, "hl_sttp=ts")).replace(t.streamName, i.streamName)),
            e
        }
        ,
        o.prototype.hcdnTsToData = function(e, t, i) {
            return "ts" != t.remark.key.hl_sttp && (e = (e = e.replace(/hl_sttp=ts/, "hl_sttp=" + t.remark.key.hl_sttp)).replace(i.streamName, t.streamName)),
            e
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.FLV = "flv",
            this.TS = "ts",
            this.DATA = "data",
            this.F4V = "f4v",
            this.MP4 = "mp4",
            this.M3U8 = "m3u8",
            this._type = null
        }
        t["default"] = new n
    },
    "127dbe605fc6cf6d616f": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0;
        var _http = __webpack_require__("fd0b44f556392d6a75ac")
          , _http2 = _interopRequireDefault(_http)
          , _cookies = __webpack_require__("fb885b8dee52c75a3d84")
          , _cookies2 = _interopRequireDefault(_cookies)
          , _uuid = __webpack_require__("53065c83966dce0d1759")
          , _uuid2 = _interopRequireDefault(_uuid)
          , _i18n = __webpack_require__("41fc02f452bd7cebf8a1")
          , _i18n2 = _interopRequireDefault(_i18n)
          , _md = __webpack_require__("fa4e6c91b6a23ac6e195")
          , _md2 = _interopRequireDefault(_md)
          , _serverRemote = __webpack_require__("e19fa061fe0ac399731b")
          , _serverRemote2 = _interopRequireDefault(_serverRemote)
          , _userInfo = __webpack_require__("bc88cc10e20a281fbbb3")
          , _userInfo2 = _interopRequireDefault(_userInfo)
          , _GlobalInfo = __webpack_require__("458af3e271aa64a9b91f")
          , _GlobalInfo2 = _interopRequireDefault(_GlobalInfo)
          , _platform = __webpack_require__("162f473717848ae5cb34")
          , _PluginBase2 = __webpack_require__("343def12cad299c54e12")
          , _PluginBase3 = _interopRequireDefault(_PluginBase2)
          , _PlayerConst = __webpack_require__("790825d0dabf4060a0d9")
          , _PlayerConst2 = _interopRequireDefault(_PlayerConst)
          , _apiLog = __webpack_require__("ac885c5555753d8707b6")
          , _PluginType = __webpack_require__("c779f0f9ff7f0eb554cb")
          , _PluginType2 = _interopRequireDefault(_PluginType)
          , _ProgramPhase = __webpack_require__("48845084357dc7708026")
          , _ProgramPhase2 = _interopRequireDefault(_ProgramPhase)
          , _ErrorCode = __webpack_require__("4a077be629d240592d7a")
          , _ErrorCode2 = _interopRequireDefault(_ErrorCode)
          , _apiStat = __webpack_require__("bef7a691bb63f7f92f11")
          , _link = __webpack_require__("6dfc805bb169defe8df1")
          , _link2 = _interopRequireDefault(_link);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _possibleConstructorReturn(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var user = function(_PluginBase) {
            function user(e) {
                _classCallCheck(this, user);
                var t = _possibleConstructorReturn(this, _PluginBase.call(this, null, e));
                return t._vipTypes = [],
                t._heartBeatTimer = null,
                t._keepaliveTime = 120,
                t._player = e,
                t._player.mount("user", t),
                t._type = _PluginType2["default"].USER,
                t._player = e,
                _serverRemote2["default"].serRequest(),
                t.isVip(function() {
                    _PluginBase.prototype.init.call(t)
                }),
                t.bindEvent(),
                t
            }
            return _inherits(user, _PluginBase),
            user.prototype.bindEvent = function() {
                var t = this;
                this._player.on(_PlayerConst2["default"].MOVIE_ENTER, function(e) {
                    t.openHeartBeat()
                })
            }
            ,
            user.prototype.getUserInfo = function getUserInfo() {
                var userInfo = {}
                  , p00002 = _cookies2["default"].get("P00002");
                return null !== p00002 && "" !== p00002 && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"),
                userInfo.uid = p00002.uid,
                userInfo.name = p00002.nickname,
                userInfo.email = p00002.email),
                userInfo
            }
            ,
            user.prototype.getUid = function() {
                return this.getUserInfo().uid || ""
            }
            ,
            user.prototype.passportCookie = function() {
                return this.getP00001() || ""
            }
            ,
            user.prototype.isLogin = function() {
                return "" != this.getUid()
            }
            ,
            user.prototype.getP00001 = function() {
                return _cookies2["default"].get("P00001")
            }
            ,
            user.prototype.getAgentType = function() {
                return _platform.browser.iPad ? 23 : _platform.os.androidTablet ? 24 : 1
            }
            ,
            user.prototype.getPTID = function() {
                return _platform.browser.iPad ? _i18n2["default"].isTWLocale() ? "03030031010010000000" : "03030031010000000000" : _i18n2["default"].isTWLocale() ? "01010031010010000000" : "01010031010000000000"
            }
            ,
            user.prototype.allVipType = function() {
                return this._vipTypes
            }
            ,
            user.prototype.matchVipType = function(e) {
                var t = !1;
                if (null == e || e == undefined)
                    return t;
                var i = e.vipType
                  , n = e.status
                  , o = e.surplus
                  , r = 1e3 * Math.ceil(e.deadline.t / 1e3)
                  , a = _serverRemote2["default"].getServerTime();
                return (0 < o || "" == o) && 0 < i && 1 == n && a < r && (this._vipTypes.push(i),
                _userInfo2["default"].allVipTypes.push(i),
                t = !0),
                t
            }
            ,
            user.prototype.isVip = function(n) {
                var a = this;
                this._vipTypes = [],
                _userInfo2["default"].allVipTypes = [];
                if (this.getP00001()) {
                    var s = "//passport.iqiyi.com/apis/user/info.action"
                      , l = {
                        "authcookie": this.getP00001(),
                        "agenttype": this.getAgentType(),
                        "device_id": _uuid2["default"].getFluid(),
                        "ptid": this.getPTID(),
                        "fields": ["qiyi_vip", "qiyi_tennis_vip", "sport_vip", "fun_vip"].join(",")
                    };
                    (0,
                    _apiLog.record)("info", s, "send", l),
                    _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).reqStart(s, l),
                    _http2["default"].jsonp({
                        url: s,
                        params: l,
                        timeout: 2e3,
                        memory: !0,
                        success: function(e) {
                            (0,
                            _apiLog.record)("info", s, "receive/success", e),
                            _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).reqSucc(e);
                            var t = !1;
                            if (e)
                                if (_link2["default"].add({
                                    content: {
                                        url: s,
                                        params: l,
                                        data: e,
                                        step: _link2["default"].STEPS.INFOACTION,
                                        result: 1
                                    },
                                    stage: _link2["default"].STAGE.PROCESS
                                }),
                                "A00000" == e.code) {
                                    _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).pingbackQos();
                                    var i = e.data.qiyi_vip_info
                                      , n = e.data.qiyi_tennis_vip
                                      , o = e.data.sport_vip
                                      , r = e.data.fun_vip;
                                    t = a.matchVipType(i, "qiyi_vip_info") || t,
                                    t = a.matchVipType(n, "qiyi_tennis_vip") || t,
                                    t = a.matchVipType(o, "sport_vip") || t,
                                    t = a.matchVipType(r, "fun_vip") || t
                                } else
                                    _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).parseFail(e.code),
                                    _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).pingbackQos(),
                                    e.code;
                            else
                                _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).parseFail("no data"),
                                _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).pingbackQos(),
                                _link2["default"].add({
                                    content: {
                                        url: s,
                                        params: l,
                                        step: _link2["default"].STEPS.INFOACTION,
                                        result: 1
                                    },
                                    stage: _link2["default"].STAGE.PROCESS
                                });
                            a._isVip = t,
                            "pgc" === window.QYP.playerType || "epg" === window.QYP.playerType || a.getIsVIP() && a.checkVip(),
                            _PluginBase.prototype.init.call(a)
                        },
                        failure: function(e, t, i) {
                            _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).reqFail(i, e),
                            _apiStat.apiStat.getStat(_apiStat.apiType.userinfo).pingbackQos(),
                            _link2["default"].add({
                                content: {
                                    url: s,
                                    params: l,
                                    step: _link2["default"].STEPS.INFOACTION,
                                    result: 1
                                },
                                stage: _link2["default"].STAGE.PROCESS
                            }),
                            a._isVip = !1,
                            n && n()
                        }
                    })
                } else
                    n && n()
            }
            ,
            user.prototype.getIsVIP = function() {
                return !!this._isVip
            }
            ,
            user.prototype.checkVip = function() {
                var t = this
                  , e = {
                    "authcookie": this.getP00001(),
                    "agenttype": this.getAgentType(),
                    "device_id": _uuid2["default"].getFluid(),
                    "sign": (0,
                    _md2["default"])(this.getP00001().slice(4, 36) + "|" + this.getAgentType() + "|w0JD89dhtS7BdPLU2"),
                    "ptid": this.getPTID(),
                    "version": 3
                };
                _http2["default"].jsonp({
                    url: "//cmonitor.iqiyi.com/apis/user/check_vip.action",
                    params: e,
                    timeout: 2e3,
                    memory: !0,
                    success: function(e) {
                        "A00000" === e.code ? t._keepaliveTime = e.data.keepalive : "A10001" === e.code ? t._isVip = !1 : "Q00305" === e.code && (t._isVip = !1),
                        _GlobalInfo2["default"].check_vip = !0
                    }
                })
            }
            ,
            user.prototype.onHeartBeatTimer = function() {
                var e = Math.random()
                  , t = ["authcookie=" + _cookies2["default"].get("P00001"), "tn=" + e, "tv_id=" + window.QYP.qpId || !1, "device_id=" + _uuid2["default"].getFluid(), "agenttype=" + this.getAgentType(), "ptid=" + this.getPTID()];
                t.sort();
                for (var i = "", n = 0; n < t.length; n++)
                    i += t[n] + "|";
                i += "jfaljluixn39012$#",
                i = (0,
                _md2["default"])(i);
                var o = {
                    authcookie: _cookies2["default"].get("P00001"),
                    agenttype: this.getAgentType(),
                    sign: i,
                    device_id: _uuid2["default"].getFluid(),
                    ptid: this.getPTID(),
                    tv_id: window.QYP.qpId || "",
                    tn: e
                };
                _http2["default"].beacon(o, "//cmonitor.iqiyi.com/apis/cmonitor/keepalive.action", !1)
            }
            ,
            user.prototype.openHeartBeat = function() {
                !this._heartBeatTimer && this.getIsVIP() && 2 == window.QYP.boss && (this.onHeartBeatTimer(),
                this._heartBeatTimer = setInterval(this.onHeartBeatTimer.bind(this), 1e3 * this._keepaliveTime))
            }
            ,
            user.prototype.stopHeartBeat = function() {
                this._heartBeatTimer && (clearInterval(this._heartBeatTimer),
                this._heartBeatTimer = null)
            }
            ,
            user
        }(_PluginBase3["default"]);
        exports["default"] = user
    },
    "1303bb930a7a9d14bc5b": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        n(i("790825d0dabf4060a0d9"));
        var o = n(i("c779f0f9ff7f0eb554cb"))
          , r = n(i("e2263676467d036c3349"));
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var a = (s.prototype._initContainer = function() {
            this._container.style.backgroundColor = "#000",
            this._container.style.height = "100%"
        }
        ,
        s.prototype._createStage = function() {
            var e = document.createElement("div");
            e.setAttribute("class", "pw-player"),
            e.style.width = "100%",
            e.style.height = "100%",
            e.style.position = "relative",
            e.style.overflow = "hidden",
            e.style.zIndex = "0",
            e.style.backgroundColor = "#000000",
            this._stage = e,
            this._container.appendChild(this._stage)
        }
        ,
        s.prototype._createLayers = function() {
            var n = this
              , e = [];
            r["default"].isPPC() ? e = [o["default"].ENGINE, o["default"].FEEDBACK, o["default"].BARRAGE, o["default"].COMPERE, o["default"].MSGWAY, o["default"].ARES, o["default"].PANO] : r["default"].isPGC() && (e = [o["default"].ENGINE, o["default"].FEEDBACK, o["default"].BARRAGE, o["default"].COMPERE, o["default"].MSGWAY, o["default"].PANO]),
            e.forEach(function(e, t, i) {
                n._layers[e] = n._createLayer(e),
                n._stage.appendChild(n._layers[e])
            }),
            this._layers[o["default"].CONTROL] = this.getStage(),
            this._layers[o["default"].NOTIFICATION] = this.getStage(),
            this._layers[o["default"].CAROUSEL] = this._layers[o["default"].CONTROL],
            this._layers[o["default"].BARRSET] = this._layers[o["default"].CONTROL],
            this._layers[o["default"].EFFECT] = this._effectContainer
        }
        ,
        s.prototype._createLayer = function(e) {
            var t = document.createElement("div");
            return t.setAttribute("class", "pw-" + e),
            t
        }
        ,
        s.prototype.getLayer = function(e) {
            return this._layers[e]
        }
        ,
        s.prototype.getStage = function() {
            return this._stage
        }
        ,
        s.prototype.destroy = function() {
            if (this._container) {
                for (; this._container.firstChild; )
                    this._container.removeChild(this._container.firstChild);
                this._container = null,
                this._layers = null,
                this._stage = null
            }
        }
        ,
        s);
        function s(e, t) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s),
            this._layers = {},
            this._container = e,
            this._stage = null,
            this._effectContainer = t,
            this._initContainer(),
            this._createStage(),
            this._createLayers()
        }
        t["default"] = a
    },
    "14ab29ff69c7f7db26c3": function(e, t, i) {
        "use strict";
        var n = i("d280362e5865b5c09927")
          , o = i("6b0eb2cb0eb384618cfe")
          , r = n.document
          , a = o(r) && o(r.createElement);
        e.exports = function(e) {
            return a ? r.createElement(e) : {}
        }
    },
    "162f473717848ae5cb34": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var n = ""
              , o = {}
              , r = {}
              , a = {}
              , s = navigator
              , l = s.platform
              , c = s.userAgent.toLowerCase()
              , u = c.match(/rtrident/)
              , f = !u && c.match(/(ipad).*os\s([\d_]+)/)
              , d = !u && !f && c.match(/(iphone\sos)\s([\d_]+)/)
              , p = c.match(/Android\s+([\d.]+)/i);
            r.userAgent = c,
            r.IE11 = /rv\:11/.test(c),
            r.IE = /msie/.test(c) || r.IE11,
            a.ie = c.match(/msie \d+/) ? c.match(/msie \d+/)[0].replace(/msie /, "") : 8,
            r.IE11 && (a.ie = 11),
            r.IE6 = /msie 6/.test(c),
            r.IE7 = /msie 7/.test(c),
            r.IE8 = /msie 8/.test(c),
            r.IE9 = /msie 9/.test(c),
            r.IE10 = /msie 10/.test(c),
            r.edge = /edge/.test(c),
            r.iPhone = /iphone os/.test(c) && !u,
            r.iPhone4 = /iphone os [45]_/.test(c) && !u,
            r.iPad = /ipad/.test(c) && !u,
            r.iPod = /iPod/i.test(c) && !u,
            r.isTouch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            r.CHROME = /chrome/.test(c),
            r.SAFARI = /safari/.test(c) && !/chrome/.test(c),
            r.FIREFOX = /firefox/.test(c),
            r.mobile = /mobile/gi.test(c),
            r.mobileSafari = r.iPhone || r.iPhone || r.iPad,
            r.QQ = /QQBrowser/gi.test(c),
            a.edge = c.match(/edge\/\d+/) ? c.match(/edge\/\d+/)[0].replace(/edge\//, "") : "-1",
            a.firefox = c.match(/firefox\/\d+/) ? c.match(/firefox\/\d+/)[0].replace(/firefox\//, "") : "-1",
            a.chrome = c.match(/chrome\/\d+/) ? c.match(/chrome\/\d+/)[0].replace(/chrome\//, "") : "-1",
            a.safari = c.match(/version\/\d+/) ? c.match(/version\/\d+/)[0].replace(/version\//, "") : "-1";
            var h = /mac/i.test(l)
              , _ = "X11" == l && !h
              , g = /win/i.test(l) && !_
              , y = /android/.test(c);
            o.unix = _,
            o.win = g,
            o.mac = h,
            o.android = y,
            o.androidMobile = y && r.mobile,
            o.androidTablet = y && !r.mobile,
            p && (o.version = p[1]),
            o.ios = !1,
            d && (o.ios = !0,
            o.version = d[2].replace(/_/g, ".")),
            f && (o.ios = !0,
            o.version = f[2].replace(/_/g, ".")),
            r.iPod && (o.ios = !0),
            n = r.iPad ? "b85da1cf3ae44351" : "b6c13e26323c537d",
            i.exports = {
                browser: r,
                os: o,
                code: n,
                version: a
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "1787093d7720fc0d37ae": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            ACT_IDENTIFY_COMPLETE: "actIdentifyComplete",
            ACT_IDENTIFY_FAILURE: "actIdentifyFailure",
            ACT_CHECK_PASS: "actCheckPass",
            ACT_CHECK_TRIALTIME: "actCheckTrialTime",
            ACT_CHECK_BLOCK: "actCheckBlock",
            ACT_TRYWATCH_HEART: "actTrywatchHeart",
            ACT_TRYWATCH_STATE_CHANGE: "actTryWatchStateChange",
            ACT_TOPLAYER_PLAY: "actToplayerPlay",
            ACT_TRYWATCH_SHOWTIPS: "actTryWatchShowTips",
            ACT_TRYWATCH_HIDETIPS: "actTryWatchHideTips",
            ACT_TRYWATCH_REMAINING: "actTryWatchRemaining",
            ACT_TRYWATCH_CONTROL: "actTryWatchControl",
            PPC_TRYWATCH: "ppcTryWatch",
            PPC_TRYWATCH_TIMER: "ppcTryWatchTimer",
            PPC_TRYWATCH_CUTTIMER: "ppcTryWatchCutTimer",
            TRYWATCH_CLICK_VIP: "trywatchClickVip"
        }
    },
    "17ad7c1cae7862a7b5c1": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = u(i("790825d0dabf4060a0d9"))
          , o = u(i("343def12cad299c54e12"))
          , r = u(i("f179acb195d3655b3843"))
          , a = u(i("d250e0db234b92e363b8"))
          , s = u(i("c627e4f58ec4241c41a2"))
          , l = (u(i("fb885b8dee52c75a3d84")),
        u(i("ae19a1d24e6ded12b0b9")),
        u(i("96598f2d6ae9c8676ba4")))
          , c = u(i("c779f0f9ff7f0eb554cb"));
        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var f, d = (function h(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(p, f = o["default"]),
        p.prototype.nextProgram = function(e) {
            if (this._proList && 0 < this._proList.length) {
                this._proCur++;
                for (var t = 0; t < this._proList.length; t++)
                    if (this._proList[t].qipuId === e) {
                        this._proCur = t;
                        break
                    }
                this._proCur >= this._proList.length && (this._proCur = 0),
                this._view.setCur(this._proCur),
                this.__controlRemind(s["default"].getRenderedStringByKey2("carousel.remindCur", [this._proList[this._proCur].properTitle]))
            }
        }
        ,
        p.prototype.destroy = function() {
            this._handlers && (this._player.off(n["default"].ROOM_STATUS_CHANGE, this._handlers.onStatusChange),
            this._player.off(n["default"].PLUGIN_EVENT_INITED, this._handlers.onPluginInit),
            this._player.off(n["default"].VIDEO_STATUS, this._handlers.onVideoStatus),
            this._player.off(n["default"].CONTROL, this._handlers.onControl)),
            this._handlers = null,
            this._view && this._view.destroy()
        }
        ,
        p.prototype.__initStatus = function(e) {
            this._roomStatus = e,
            l["default"].isRoomCarousel(this._roomStatus) && (this._playRemind = "initRemind",
            this._player.emitAsync(n["default"].CALL_JS_CAROUSEL_LIST, {
                onSuccess: this.__menuSuccess.bind(this),
                onFail: this.__menuFail.bind(this)
            }))
        }
        ,
        p.prototype.__menuSuccess = function(e) {
            if ("A00000" === e.code) {
                this._proList = [];
                for (var t = 0, i = null; t < e.data.length; t++)
                    i = new a["default"](e.data[t]),
                    this._proCur = i.isPlaying ? t : this._proCur,
                    this._proList.push(i);
                "initRemind" === this._playRemind && 0 < this._proList.length && (this._playRemind = s["default"].getRenderedStringByKey2("carousel.remindCur", [this._proList[this._proCur].properTitle])),
                this._view.setList(this._proList, this._proCur)
            } else
                this.__menuFail()
        }
        ,
        p.prototype.__menuFail = function() {}
        ,
        p.prototype.__menuClear = function() {
            this._proList = undefined,
            this._proCur = 0,
            this._view.clear(),
            this._view.hide()
        }
        ,
        p.prototype.__initView = function() {
            this._view = new r["default"](this.__controlProBtnUnSelect.bind(this))
        }
        ,
        p.prototype.__initEvent = function() {
            this._handlers.onStatusChange = this.__onStatusChange.bind(this),
            this._handlers.onPluginInit = this.__onPluginInit.bind(this),
            this._handlers.onVideoStatus = this.__onVideoStatus.bind(this),
            this._handlers.onControl = this.__onControl.bind(this),
            this._player.on(n["default"].ROOM_STATUS_CHANGE, this._handlers.onStatusChange),
            this._player.on(n["default"].PLUGIN_EVENT_INITED, this._handlers.onPluginInit),
            this._player.on(n["default"].VIDEO_STATUS, this._handlers.onVideoStatus),
            this._player.on(n["default"].CONTROL, this._handlers.onControl)
        }
        ,
        p.prototype.__onStatusChange = function(e) {
            (l["default"].isRoomLive(this._roomStatus) || l["default"].isRoomStop(this._roomStatus)) && l["default"].isRoomCarousel(e) ? (this._player.emitAsync(n["default"].CALL_JS_CAROUSEL_LIST, {
                onSuccess: this.__menuSuccess.bind(this),
                onFail: this.__menuFail.bind(this)
            }),
            this.__controlLoadingRemind(s["default"].getConfig("carousel.loadingCar")),
            this._playRemind = s["default"].getConfig("carousel.remindCar")) : (l["default"].isRoomCarousel(this._roomStatus) || l["default"].isRoomStop(this._roomStatus)) && l["default"].isRoomLive(e) && (this.__menuClear(),
            this.__controlLoadingRemind(s["default"].getConfig("carousel.loadingLive")),
            this._playRemind = s["default"].getConfig("carousel.remindLive")),
            this._roomStatus = e,
            this.__controlProBtn(l["default"].isRoomCarousel(this._roomStatus))
        }
        ,
        p.prototype.__onPluginInit = function(e) {
            e && e.getType() === c["default"].CONTROL && this.__controlProBtn(l["default"].isRoomCarousel(this._roomStatus))
        }
        ,
        p.prototype.__onVideoStatus = function(e) {
            e && (e.type === n["default"].VIDEO_PLAY ? (this._playRemind && 0 < this._playRemind.length && "initRemind" !== this._playRemind && this.__controlRemind(this._playRemind),
            this._playRemind = "",
            this.__controlProBtn(l["default"].isRoomCarousel(this._roomStatus)),
            this.__controlLoadingRemind("")) : e.type === n["default"].VIDEO_ERROR && this._view.hide())
        }
        ,
        p.prototype.__onControl = function(e) {
            e && e.type === n["default"].CONTROL_PROLIST ? this._view.showOrHide(this.__getCon()) : e && e.type === n["default"].CONTROL_SHOW && e.data && !1 === e.data.value && this._view.hide()
        }
        ,
        p.prototype.__controlRemind = function(e) {
            this._player.emit(n["default"].NOTIFY_CONTROL, {
                type: n["default"].NOTIFY_CONTROL_REMIND,
                data: {
                    content: e,
                    hideWhenPlay: !1,
                    stayTime: 5
                }
            })
        }
        ,
        p.prototype.__controlLoadingRemind = function(e) {
            this._player.emit(n["default"].NOTIFY_CONTROL, {
                type: n["default"].NOTIFY_CONTROL_LOADING_REMIND,
                data: e
            })
        }
        ,
        p.prototype.__controlProBtn = function(e) {
            this._player.emit(n["default"].NOTIFY_CONTROL, {
                type: n["default"].NOTIFY_CONTROL_PROLIST,
                data: e
            })
        }
        ,
        p.prototype.__controlProBtnUnSelect = function(e) {
            this._player.emit(n["default"].NOTIFY_CONTROL, {
                type: n["default"].NOTIFY_CONTROL_PROLIST_UNSELECT,
                data: e
            })
        }
        ,
        p.prototype.__getCon = function() {
            var e = document.getElementsByClassName("M706C61796572-control-liveList");
            return e && 0 < e.length ? e[0] : null
        }
        ,
        p);
        function p(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, p);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, f.call(this, e, t));
            return i._type = c["default"].CAROUSEL,
            i._handlers = {},
            i._view = undefined,
            i._proList = undefined,
            i._proCur = 0,
            i._roomStatus = 0,
            i._playRemind = null,
            i.__initView(),
            i.__initEvent(),
            i.__initStatus(i._player.getConfig().getEntryConfig("status")),
            f.prototype.init.call(i),
            window.test_live_carousel = i
        }
        t["default"] = d
    },
    "1c08e871c75ebedb8822": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = l(i("343def12cad299c54e12"))
          , o = l(i("790825d0dabf4060a0d9"))
          , r = l(i("b35597b9e5190ca54b21"))
          , a = l(i("c779f0f9ff7f0eb554cb"))
          , s = l(i("fb885b8dee52c75a3d84"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, u = (function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, c = n["default"]),
        f.prototype.append = function(e, t, i) {
            this._startup && this._switch && (this._view || this.__initView(),
            this._view.append(e, t, i))
        }
        ,
        f.prototype.destroy = function() {
            clearInterval(this._resizeTid),
            this._view && this._view.destroy(),
            this._view = undefined,
            c.prototype.destroy.call(this)
        }
        ,
        f.prototype.__initView = function() {
            var e = this;
            this._container.id = "video-compere-container",
            this._container.style.width = "100%",
            this._container.style.height = "100%",
            this._container.style.position = "absolute",
            this._container.style.left = "0px",
            this._container.style.top = "0px",
            this._container.style.right = "0px",
            this._container.style.bottom = "0px",
            this._container.style["pointer-events"] = "none",
            this._view = new r["default"](this._container),
            this._view.full(this._isFull),
            clearInterval(this._resizeTid),
            this._resizeTid = setInterval(function() {
                e._container.parentNode && e._view._width !== e._container.parentNode.offsetWidth && e.__onResize(null)
            }, 500)
        }
        ,
        f.prototype.__initEvent = function() {
            this._player.on(o["default"].VIDEO_STATUS, this.__onVideoStatus.bind(this)),
            this._player.on(o["default"].CONTROL, this.__onControl.bind(this)),
            this._player.on(o["default"].PLAYER_RESIZE, this.__onResize.bind(this)),
            this._player.on(o["default"].COMPERE_SWITCH, this.__onSwitch.bind(this)),
            this._player.on(o["default"].MOVIE_ENTER, this.__onMovieEnter.bind(this)),
            this._player.on(o["default"].MOVIE_RESET, this.__onMovieReset.bind(this))
        }
        ,
        f.prototype.__onVideoStatus = function(e) {
            this._view
        }
        ,
        f.prototype.__onControl = function(e) {
            e.type === o["default"].CONTROL_FULLSCREEN_SWITCH && (this._isFull = e.data.value,
            this._view && this._view.full(this._isFull))
        }
        ,
        f.prototype.__onResize = function(e) {
            if (this._view) {
                var t = this._container.offsetWidth;
                0 === t && this._container.parentNode && (t = this._container.parentNode.offsetWidth),
                this._view.resize(t)
            }
        }
        ,
        f.prototype.__onSwitch = function(e) {
            this._switch = e,
            this._view && (e ? this._view.show() : this._view.hide())
        }
        ,
        f.prototype.__onMovieEnter = function(e) {
            this._startup = !0
        }
        ,
        f.prototype.__onMovieReset = function(e) {
            this._view && (clearInterval(this._resizeTid),
            this._view.destroy(),
            this._view = null)
        }
        ,
        f);
        function f(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this, e, t));
            return i._type = a["default"].COMPERE,
            i._view = undefined,
            i._isFull = !1,
            i._startup = !0,
            i._switch = !("false" === s["default"].get("compereSwitch")),
            i.__initEvent(),
            i
        }
        t["default"] = u
    },
    "1e278b3d53391649aa62": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            "error": {
                "report": "報告錯誤",
                "refresh": "刷新試試",
                "pluginInitFail": "插件初始化失敗",
                "pluginInitFailFlash": "加載異常，請確認瀏覽器是否允許加載Flash插件",
                "pluginInitFailPCA": "加載異常，請更新客戶端版本後重新打開直播",
                "pluginError": "插件錯誤",
                "ProgramNotExist": "節目信息不存在",
                "vrs": {
                    "default": "播放出了點問題，點擊刷新看看吧",
                    "qpidWrong": "該節目無效，請確認輸入網址是否正確",
                    "A00001": "請求參數無效",
                    "A00003": "內部請求異常",
                    "A00004": "播放出了點問題，點擊刷新看看吧【A00004】",
                    "A00005": "請求數據不可用",
                    "A00011": "您還沒有獲得觀看當前付費直播的權限",
                    "A00013": "很抱歉，本直播節目因為版權原因在您所在區域下線",
                    "A00020": "時間戳超時",
                    "A00110": "暫時無法觀看，去看看其他節目吧【A00110】",
                    "A00111": "地域受限，去看看其他節目吧【A00111】",
                    "A00119": "您還沒有獲得觀看當前付費直播的權限（網球會員）",
                    "A00120": "您還沒有獲得觀看當前付費直播的權限（體育會員）"
                },
                "askQpIds": {
                    "default": "節目信息獲取失敗"
                },
                "ChargeFailed": "您還沒有獲得觀看當前付費直播的權限",
                "SupportError_Flash": '當前瀏覽器尚未運行flashplayer，<a href="//www.adobe.com/go/getflashplayer" target="_blank" class="theme-color">點擊運行</a><br/>請先下載安裝flashplayer插件，並前去<br/>瀏覽器設置，將flash插件設置為在此網站上【始終允許】',
                "SupportError_FlashNotEnabled": '當前瀏覽器尚未運行flashplayer，<span class="theme-color">點擊運行</span>，<br/>並前去瀏覽器設置，將flash插件設置為在此網站上【始終允許】',
                "SupportError_Mobile": "手機網頁端不支持該類直播節目，<br/>請前往PC網頁端/手機客戶端觀看當前直播節目",
                "SupportError_Engine": "當前平台不支持播放，<br/>請前往PC網頁端/手機客戶端觀看當前直播節目",
                "SupportError_PCA": "本節目暫時無法播放，<br />請重啟客戶端或者瀏覽器試試。",
                "BrowserLow": "瀏覽器版本過低，推薦您下載使用高級瀏覽器提升體驗",
                "PlayError": "對不起，播放出錯了",
                "NetError": "網絡出了點問題，點擊刷新看看吧",
                "TechError": "網絡出了點問題，點擊刷新看看吧",
                "userCheckVipError": "您已同時在超過兩臺設備觀看會員節目，如需繼續觀看，請先在其他設備上退出觀看。"
            },
            "feedback": {
                "LiveWaiting_PPC": "直播未開始，去看看其他節目吧",
                "LiveWaiting_PGC": "直播未開始，去看看其他節目吧",
                "LivePaused": "主播暫時離開了，馬上回來",
                "LiveEnded": "直播已結束，去看看其他節目吧",
                "LiveEndWithVOD": "直播已結束，<span class='theme-color'><a target='_blank' href='{0}'><u>全場回放</u></a></span>",
                "LiveEndWithReplay": "直播已結束，<span class='theme-color'><a href='{0}'><u>點擊回看</u></a></span>",
                "LivePlaybackEnded": "直播已結束，去看看其他節目吧"
            },
            "control": {},
            "definition": {
                "speed": ["極速", "極速"],
                "smooth": ["流暢 360P", "流暢"],
                "high": ["高清 480P", "高清"],
                "super": ["超清", "超清"],
                "720p": ["超清 720P", "超清"],
                "1080p": ["藍光 4M", "藍光 4M"],
                "1080p_ppc": ["藍光 1080P", "藍光"],
                "1080p50": ["藍光 1080P50", "1080P50"],
                "1080p6m": ["藍光 6M", "藍光 6M"],
                "1080p8m": ["藍光 8M", "藍光 8M"],
                "2K": ["2K", "2K"],
                "4k": ["藍光 4K", "藍光 4K"],
                "720po": ["原畫", "原畫"],
                "1080po": ["原畫", "原畫"],
                "2Ko": ["原畫", "原畫"]
            },
            "tips": {
                "seeking": "正在切換到<font color='#00cc36'>{0}</font>碼流",
                "seekend": "已成功切換到<font color='#00cc36'>{0}</font>畫質",
                "ppcTryWatch": "免費試看<font color='#00cc36'> 6 </font>分鐘，收看完整版請<a href='javascript:;'> <font color='#00cc36'>立即購買</font></a>",
                "ppcTryWatchCountDown": "試看即將結束…<font color='#00cc36'>{0}</font>秒 <a href='javascript:;'><font color='#00cc36'>立即購買</font></a>",
                "waiting": {
                    "pgc": "loading",
                    "pgc_delay": "loading \n網絡有點慢，正在努力加載",
                    "ppc": "直播正在緩沖, 請稍候 ...",
                    "timeout_def": "您的網絡環境不順暢，請稍候",
                    "timeout_defs": "『{0}』碼流在當前網絡環境比較卡，降低清晰度試試",
                    "download_rate": "下載速率：",
                    "buffer_ing": "正在緩沖..."
                },
                "backlive": "已同步至最新進度",
                "panolowtips": "瀏覽器版本過低，不支持全景播放，推薦您下載高級瀏覽器",
                "userCheckVipTips": "您的賬號在多臺設備同時播放視頻，存在安全風險，請盡快退登其他設備或立即修改密碼"
            },
            "carousel": {
                "listTitle": "播單 ({0})",
                "listCur": "正在播放",
                "listNext": "即將播放",
                "loadingCar": "即將輪播",
                "loadingLive": "即將直播",
                "remindCar": "已切換為輪播",
                "remindLive": "已切換為直播",
                "remindCur": "<font color='#00ff00'>當前播放：</font>{0}"
            },
            "barrset": {
                "titleArea": "彈幕區域",
                "titleSize": "字體大小",
                "titleAlpha": "不透明度",
                "titleSpeed": "彈幕速度",
                "titleCompere": "開啟主持人彈幕",
                "full": "全屏",
                "top": "上方",
                "bottom": "下方",
                "size0": "極小",
                "size1": "小",
                "size2": "正常",
                "size3": "大",
                "size4": "極大",
                "speed0": "極慢",
                "speed1": "慢",
                "speed2": "正常",
                "speed3": "快",
                "speed4": "極快"
            },
            "rightmenu": {
                "version": "版本號",
                "save": "保存日誌",
                "upload": "上傳日誌",
                "feedback": "反饋問題",
                "intro": "快捷鍵說明"
            }
        }
    },
    "1e3c198142669569cbfc": function(e, t, i) {
        "use strict";
        i("d74500aba3b3c0a9555d");
        var n = i("a765f2839f9467561505");
        e.exports = n.Object.assign
    },
    "1e4534d1d62a11482e97": function(e, t, o) {
        var i, n, r, l = {}, c = (i = function() {
            return window && document && document.all && !window.atob
        }
        ,
        function() {
            return void 0 === n && (n = i.apply(this, arguments)),
            n
        }
        ), a = (r = {},
        function(e, t) {
            if ("function" == typeof e)
                return e();
            if ("undefined" == typeof r[e]) {
                var i = function(e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e)
                }
                .call(this, e, t);
                if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                    try {
                        i = i.contentDocument.head
                    } catch (n) {
                        i = null
                    }
                r[e] = i
            }
            return r[e]
        }
        ), u = null, f = 0, s = [], d = o("0aac488a388d7f2d0eea");
        function p(e, t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i]
                  , o = l[n.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++)
                        o.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++)
                        o.parts.push(m(n.parts[r], t))
                } else {
                    var a = [];
                    for (r = 0; r < n.parts.length; r++)
                        a.push(m(n.parts[r], t));
                    l[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function h(e, t) {
            for (var i = [], n = {}, o = 0; o < e.length; o++) {
                var r = e[o]
                  , a = t.base ? r[0] + t.base : r[0]
                  , s = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
                n[a] ? n[a].parts.push(s) : i.push(n[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return i
        }
        function _(e, t) {
            var i = a(e.insertInto);
            if (!i)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = s[s.length - 1];
            if ("top" === e.insertAt)
                n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
                s.push(t);
            else if ("bottom" === e.insertAt)
                i.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = a(e.insertAt.before, i);
                i.insertBefore(t, o)
            }
        }
        function g(e) {
            if (null === e.parentNode)
                return !1;
            e.parentNode.removeChild(e);
            var t = s.indexOf(e);
            0 <= t && s.splice(t, 1)
        }
        function y(e) {
            var t = document.createElement("style");
            if (e.attrs.type === undefined && (e.attrs.type = "text/css"),
            e.attrs.nonce === undefined) {
                var i = function n() {
                    0;
                    return o.nc
                }();
                i && (e.attrs.nonce = i)
            }
            return b(t, e.attrs),
            _(e, t),
            t
        }
        function b(t, i) {
            Object.keys(i).forEach(function(e) {
                t.setAttribute(e, i[e])
            })
        }
        function m(t, e) {
            var i, n, o, r;
            if (e.transform && t.css) {
                if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform["default"](t.css)))
                    return function() {}
                    ;
                t.css = r
            }
            if (e.singleton) {
                var a = f++;
                i = u = u || y(e),
                n = E.bind(null, i, a, !1),
                o = E.bind(null, i, a, !0)
            } else
                o = t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function s(e) {
                    var t = document.createElement("link");
                    return e.attrs.type === undefined && (e.attrs.type = "text/css"),
                    e.attrs.rel = "stylesheet",
                    b(t, e.attrs),
                    _(e, t),
                    t
                }(e),
                n = function l(e, t, i) {
                    var n = i.css
                      , o = i.sourceMap
                      , r = t.convertToAbsoluteUrls === undefined && o;
                    (t.convertToAbsoluteUrls || r) && (n = d(n));
                    o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var a = new Blob([n],{
                        type: "text/css"
                    })
                      , s = e.href;
                    e.href = URL.createObjectURL(a),
                    s && URL.revokeObjectURL(s)
                }
                .bind(null, i, e),
                function() {
                    g(i),
                    i.href && URL.revokeObjectURL(i.href)
                }
                ) : (i = y(e),
                n = function c(e, t) {
                    var i = t.css
                      , n = t.media;
                    n && e.setAttribute("media", n);
                    if (e.styleSheet)
                        e.styleSheet.cssText = i;
                    else {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(i))
                    }
                }
                .bind(null, i),
                function() {
                    g(i)
                }
                );
            return n(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    n(t = e)
                } else
                    o()
            }
        }
        e.exports = function(e, a) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {},
            a.singleton || "boolean" == typeof a.singleton || (a.singleton = c()),
            a.insertInto || (a.insertInto = "head"),
            a.insertAt || (a.insertAt = "bottom");
            var s = h(e, a);
            return p(s, a),
            function(e) {
                for (var t = [], i = 0; i < s.length; i++) {
                    var n = s[i];
                    (o = l[n.id]).refs--,
                    t.push(o)
                }
                e && p(h(e, a), a);
                for (i = 0; i < t.length; i++) {
                    var o;
                    if (0 === (o = t[i]).refs) {
                        for (var r = 0; r < o.parts.length; r++)
                            o.parts[r]();
                        delete l[o.id]
                    }
                }
            }
        }
        ;
        var v, A = (v = [],
        function(e, t) {
            return v[e] = t,
            v.filter(Boolean).join("\n")
        }
        );
        function E(e, t, i, n) {
            var o = i ? "" : n.css;
            if (e.styleSheet)
                e.styleSheet.cssText = A(t, o);
            else {
                var r = document.createTextNode(o)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
    },
    "1e962945d4ab7b72ce9d": function(e, t, i) {
        "use strict";
        var n = i("d2d397351e5e28db50b1")
          , o = i("2109d1707607aea0c0f4")
          , r = i("b413932bb091b555777a")
          , a = i("a1ce88ca7866e21ff551")
          , s = i("8ff0c3383d7639777422")
          , l = i("f7c33656140074fd558a")
          , c = i("6cf71ab803f6b2f90582")
          , u = Object.getOwnPropertyDescriptor;
        t.f = n ? u : function(e, t) {
            if (e = a(e),
            t = s(t, !0),
            c)
                try {
                    return u(e, t)
                } catch (i) {}
            if (l(e, t))
                return r(!o.f.call(e, t), e[t])
        }
    },
    "1eaf8541db0a260d091b": function(e, t, i) {
        var n = i("c56ea7011aca6b6c26e2");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "1f080957c4fbd4f86028": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            i.exports = function s(i, e, n, o) {
                function r(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                return e && function a(e, t) {
                    var i;
                    for (i in e)
                        if (r(e, i) && t(e[i], i))
                            break
                }(e, function(e, t) {
                    !n && r(i, t) || (o && "string" != typeof e && "boolean" != typeof e ? (i[t] || (i[t] = {}),
                    s(i[t], e, n, o)) : i[t] = e)
                }),
                i
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "204fed67376905d4fa7d": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var u = n(i("790825d0dabf4060a0d9"))
          , f = n(i("6e17927251314b1df531"))
          , d = n(i("8325c57259cd5407e807"))
          , p = n(i("e6063aaa6fb614e861d5"))
          , h = n(i("2aa1923b8115b66e68f1"))
          , _ = n(i("52709c6e9caa542af9ee"))
          , a = n(i("127dbe605fc6cf6d616f"))
          , s = n(i("a778cf529f0c62089670"))
          , l = n(i("17ad7c1cae7862a7b5c1"))
          , c = n(i("4a077be629d240592d7a"))
          , g = n(i("20f38f1c3315ea55479a"))
          , y = n(i("0343a4db3af6c2f53d0e"))
          , b = n(i("ae19a1d24e6ded12b0b9"))
          , m = n(i("c3588537ba2b4b983642"))
          , v = n(i("8caaca8a977cdce4f65c"))
          , A = n(i("fea8cc477f6f9024901c"))
          , E = n(i("1c08e871c75ebedb8822"))
          , T = n(i("bdf5dee806fd95ed0891"))
          , w = n(i("91a51c8c5e0f660076d7"))
          , S = n(i("e2263676467d036c3349"))
          , C = n(i("48845084357dc7708026"))
          , P = n(i("c779f0f9ff7f0eb554cb"))
          , R = n(i("868ff663f49075869e0f"))
          , I = n(i("6fac10ab8352e9a71530"));
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var o = (r.prototype._asyncInstall = function() {
            var e = this;
            this._asTid = setTimeout(function() {
                e._installComponents(),
                e._installPlugins(),
                e._player.emitAsync(u["default"].PLAYER_PLUGINS_INSTALLING)
            }, 0)
        }
        ,
        r.prototype._installComponents = function() {
            var e = [[s["default"], P["default"].FEEDBACK], [A["default"], P["default"].NOTIFICATION], [a["default"], P["default"].USER], [l["default"], P["default"].CAROUSEL], [m["default"], P["default"].SENSOR], [v["default"], P["default"].PINGBACK], [E["default"], P["default"].COMPERE], [R["default"], P["default"].MSGWAY], [T["default"], P["default"].BARRSET], [w["default"], P["default"].PANO]];
            S["default"].isPGC() && e.push([g["default"], P["default"].TRYWATCH_PGC]),
            S["default"].isPPC() && e.push([y["default"], P["default"].TRYWATCH_PPC]);
            for (var t = 0; t < e.length; t++) {
                var i = e[t]
                  , n = i[0]
                  , o = i[1]
                  , r = this._player.getView().getLayer(o);
                r !== undefined ? this.install(new n(r,this._player)) : this.install(new n(this._player))
            }
        }
        ,
        r.prototype._initEngine = function() {
            C["default"].setPhase(C["default"].ENGINE_START),
            this._player.once(u["default"].PLAYER_ENGINE_INITED, function() {
                C["default"].setPhase(C["default"].ENGINE_READY)
            })
        }
        ,
        r.prototype._installPlugins = function() {
            var t = this;
            this._initEngine();
            var e = void 0;
            S["default"].isPPC() ? (e = [[f["default"], P["default"].ENGINE], [d["default"], P["default"].CONTROL], [_["default"], P["default"].ARES], [p["default"], P["default"].EFFECT], [h["default"], P["default"].BARRAGE]],
            this._pluginsToLoad = [P["default"].ENGINE, P["default"].CONTROL, P["default"].ARES, P["default"].EFFECT, P["default"].BARRAGE]) : S["default"].isPGC() && (e = [[f["default"], P["default"].ENGINE], [d["default"], P["default"].CONTROL], [p["default"], P["default"].EFFECT], [h["default"], P["default"].BARRAGE]],
            this._pluginsToLoad = [P["default"].ENGINE, P["default"].CONTROL, P["default"].EFFECT, P["default"].BARRAGE]);
            for (var i = [], n = this._player.getConfig().getPluginConfig(), o = 0; o < e.length; o++) {
                var r = e[o]
                  , a = r[0]
                  , s = r[1];
                if (n[s]) {
                    var l = this._player.getView().getLayer(s)
                      , c = void 0;
                    c = l !== undefined ? new a(l,this._player) : new a(this._player),
                    i.push(c)
                }
            }
            this.allInit(i, function(e) {
                t._player.emitAsync(u["default"].PLAYER_PLUGINS_READY, e),
                C["default"].setPhase(C["default"].PLUGINS_READY)
            })
        }
        ,
        r.prototype.allInit = function(e, o) {
            var t = this;
            clearTimeout(this.__tid);
            var r = e.length
              , a = 0;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = e[i];
                    n.getState() != P["default"].STATE_INITED ? n.once(u["default"].PLUGIN_EVENT_INITED, l) : "" != l(n) && this._pluginsSuccess.push(type),
                    this.install(n)
                }
            var s = this.__tid = setTimeout(function() {
                clearTimeout(s);
                var e = void 0;
                e = t.checkPluginError() == P["default"].ENGINE && I["default"].getRecommendTypeByBrowser().type == I["default"].FLASH ? c["default"].PLUGIN_INIT_FAIL_FLASH : c["default"].PLUGIN_INIT_FAIL,
                o({
                    error: !0,
                    code: e,
                    messasge: "plugin timeout 20s"
                })
            }, 4e4);
            function l(e, t) {
                var i = e && e.getType && e.getType() || ""
                  , n = "";
                return t ? t.success != undefined && t.success || t.error != undefined && !t.error ? (a++,
                b["default"].info("PluginManager", "#" + a + "/" + r + " plugin " + (e.getType && e.getType() || "") + " init ok"),
                n = i) : (clearTimeout(s),
                o({
                    error: !0,
                    code: t.code,
                    messasge: t.message
                })) : (a++,
                b["default"].info("PluginManager", "#" + a + "/" + r + " plugin " + i + " init ok")),
                r <= a && (clearTimeout(s),
                b["default"].info("PluginManager", "Emit PlayerConst.PLAYER_PLUGINS_READY"),
                o({
                    error: !1
                })),
                n
            }
        }
        ,
        r.prototype.getPlugin = function(e) {
            return this._plugins && this._plugins[e]
        }
        ,
        r.prototype.install = function(e) {
            return e ? e.getType() ? void (this._plugins[e.getType()] = e) : b["default"].debug("PluginManager", "install plugin: invalid type " + e.getType()) : b["default"].debug("PluginManager", "install invalid plugin")
        }
        ,
        r.prototype.uninstall = function(e) {
            e && (e.type && this._plugins[e.type] && delete this._plugins[e.type],
            e.destroy && e.destroy(),
            e = null)
        }
        ,
        r.prototype.checkPluginError = function() {
            for (var e = 0; e < this._pluginsToLoad.length; e++) {
                var t = this._pluginsToLoad[e];
                if (this._pluginsSuccess.indexOf(t) <= -1)
                    return t
            }
            return !1
        }
        ,
        r.prototype.destroy = function() {
            for (var e in clearTimeout(this.__tid),
            clearTimeout(this._asTid),
            this._plugins)
                this.uninstall(this._plugins[e]);
            this._plugins = null,
            this._player = null,
            this._layerConfig = null
        }
        ,
        r);
        function r(e, t) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._player = e,
            this._layerConfig = t,
            this._plugins = {},
            this._components = {},
            this._asyncInstall(),
            this._pluginsSuccess = [],
            this._pluginsToLoad = []
        }
        t["default"] = o
    },
    "205195d30df1e600fa89": function(e, t, i) {
        var n = i("3465df4eaa86765e7709");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "20f38f1c3315ea55479a": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = c(i("790825d0dabf4060a0d9"))
          , a = c(i("1787093d7720fc0d37ae"))
          , o = c(i("8b66265a44b334c61f32"))
          , r = c(i("343def12cad299c54e12"))
          , s = c(i("3930818c395b7bf90095"))
          , l = c(i("c779f0f9ff7f0eb554cb"));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var u, f = (function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(d, u = r["default"]),
        d.prototype.bindEvents = function() {
            var i = this;
            this.player.on(n["default"].VIDEO_STATUS, function(e) {
                if (e) {
                    var t = e.type;
                    switch (e.data,
                    t) {
                    case n["default"].VIDEO_PLAY:
                        i.isPlaying = !0,
                        i.isFirstPlay && (i.isFirstPlay = !1),
                        i.tryWatch && !i.isCountTime && i.tryWatchStart(Math.ceil(i.tryWatchTime / 60));
                        break;
                    case n["default"].VIDEO_PAUSE:
                    case n["default"].VIDEO_WAITE:
                    case n["default"].VIDEO_STOP:
                        break;
                    case n["default"].VIDEO_AUTOPLAY_FAIL:
                        i.isAutoPlayError = !0;
                        break;
                    case n["default"].VIDEO_TIMEUPDATE:
                    }
                }
            }),
            this.player.on(a["default"].ACT_TRYWATCH_STATE_CHANGE, function(e) {
                if (i.tryWatch = e,
                i.tryWatch)
                    i.tryWatchStart(Math.ceil(i.tryWatchTime / 60));
                else {
                    if (i.clearTryWatch(!1),
                    "block" == (arguments.length <= 1 ? undefined : arguments[1]))
                        return;
                    i.isPlaying || i.getMovie()
                }
                i.tryWatch && i.isPlaying || i.tryWatch && !i.isPlaying && i.getMovie()
            }),
            this.on(a["default"].ACT_CHECK_TRIALTIME, function() {
                i.tryWatchEvent()
            }),
            this.player.on(a["default"].ACT_TOPLAYER_PLAY, function(e) {
                if (e && !i.isPlaying) {
                    if (window.QYP.userPause)
                        return;
                    if (i.isAutoPlayError)
                        return;
                    i.isFirstPlay || i.player.updateLiveStatus({
                        status: i.player.getLiveStatus()
                    })
                } else
                    !e && i.isPlaying && (i.isFirstPlay || (i.isPlaying = !1,
                    i.player.emit(n["default"].CONTROL, {
                        type: n["default"].CONTROL_PAUSE
                    })))
            })
        }
        ,
        d.prototype.tryWatchEvent = function() {
            var e = this;
            this.tryWatchTime = this.trialTime - this.trialledTime,
            this.tryWatchTimer || (this.tryWatchTimer = setInterval(function() {
                e.tryWatch ? 0 < e.tryWatchTime ? (e.getMovie(),
                e.isPlaying && (e.tryWatchTime--,
                e._count++,
                e.isCountTime = !0,
                e.tryWatchTime <= 0 ? (e.clearTryWatch(!0),
                o["default"].exitFullScreen(),
                window.QL.Event.emit("authCover", window.QL.isLogin() ? "001" : "000")) : e.tryWatchTime <= 5 && 0 < e.tryWatchTime && e.player.emit(a["default"].ACT_TRYWATCH_REMAINING, "试看即将结束：" + e.tryWatchTime + "秒"),
                e._count % 10 == 0 && (e._count = 0,
                e._actheart.request()))) : e.clearTryWatch(!0) : e.isCountTime = !1
            }, 1e3))
        }
        ,
        d.prototype.tryWatchStart = function(e) {
            var t = document.createElement("span");
            t.innerHTML = "试看" + e + "分钟，";
            var i = document.createElement("a");
            i.style.color = "#0dfd9b",
            i.href = "//vip.iqiyi.com/order.html?&fc=bd6263f92d31c86c",
            i.target = "view_window",
            i.innerHTML = "开通VIP会员";
            var n = document.createElement("span");
            n.innerHTML = "观看完整直播" + (window.QL.isLogin() ? "" : "，已是会员");
            var o = document.createElement("span");
            if (o.appendChild(t),
            o.appendChild(i),
            o.appendChild(n),
            !window.QL.isLogin()) {
                var r = document.createElement("a");
                r.href = "javascript:void(0);",
                r.style.color = "#ffc731",
                r.addEventListener("click", function() {
                    window.QL.isLogin() || window.QL.reLogin()
                }),
                r.innerHTML = "请登录",
                o.appendChild(r)
            }
            this.player.emit(a["default"].ACT_TRYWATCH_SHOWTIPS, {
                left: o,
                right: this.tryWatchAllIn()
            })
        }
        ,
        d.prototype.tryWatchAllIn = function() {
            var e = document.createElement("a");
            e.style.color = "#0dfd9b",
            e.href = "//vip.iqiyi.com/order.html?&fc=bd6263f92d31c86c",
            e.target = "view_window",
            e.innerHTML = "开通VIP";
            var t = document.createElement("span");
            if (t.appendChild(e),
            !window.QL.isLogin()) {
                var i = document.createElement("a");
                i.href = "javascript:void(0);",
                i.style.color = "#ffc731",
                i.style.marginLeft = "10px",
                i.addEventListener("click", function() {
                    window.QL.isLogin() || window.QL.reLogin()
                }),
                i.innerHTML = "立即登录",
                t.appendChild(i)
            }
            return t
        }
        ,
        d.prototype.clearTryWatch = function(e) {
            this.isCountTime = !1,
            this.player.emit(a["default"].ACT_TRYWATCH_HIDETIPS),
            e && this.isPlaying && this.player.emit(n["default"].CONTROL, {
                type: n["default"].CONTROL_PAUSE
            })
        }
        ,
        d.prototype.getMovie = function() {
            this.isFirstActMsg && (this.isFirstActMsg = !1,
            this.player.updateLiveStatus({
                status: this.player.getLiveStatus()
            }))
        }
        ,
        d.prototype.actStateChange = function(e) {
            o["default"].initialized || o["default"].init(this.player, this);
            var t = this.wrapParam(e);
            o["default"].handleNotify(t)
        }
        ,
        d.prototype.checkLoginManager = function(e) {
            o["default"].initialized || o["default"].init(this.player, this),
            o["default"].loginManager(e)
        }
        ,
        d.prototype.wrapParam = function(e) {
            var t = "actVideoPlayTime actNotifyType actVideoQpid actAlbumQpid actVideoTitle actVideoDuration actVipType"
              , i = "videoPlayTime notifyType videoQpId albumQpId videoTitle videoDuration vipType";
            t = t.split(/ +/),
            i = i.split(/ +/);
            var n = {};
            for (var o in e) {
                var r = t.indexOf(o);
                -1 !== r ? n[i[r]] = e[o] : n[o] = e[o]
            }
            return n
        }
        ,
        d);
        function d(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, u.call(this, null, e));
            return t.tryWatch = !1,
            t.trialTime = 0,
            t.trialledTime = 0,
            t.tryWatchTime = 0,
            t.tryWatchTimer = null,
            t.isPlaying = !1,
            t.isCountTime = !1,
            t._count = 0,
            t.isFirstActMsg = !0,
            t.isFirstPlay = !0,
            t.isAutoPlayError = !1,
            t._type = l["default"].TRYWATCH_PGC,
            t._isInited = !1,
            t._isCompatible = !1,
            t.player = e,
            t._actheart = new s["default"](t),
            t.bindEvents(),
            t
        }
        t["default"] = f
    },
    "2109d1707607aea0c0f4": function(e, t, i) {
        "use strict";
        var n = {}.propertyIsEnumerable
          , o = Object.getOwnPropertyDescriptor
          , r = o && !n.call({
            1: 2
        }, 1);
        t.f = r ? function(e) {
            var t = o(this, e);
            return !!t && t.enumerable
        }
        : n
    },
    "210b3a341843dbd006ae": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABB0lEQVQ4T62UIVIDQRBF33dIHEhyAsIJIA6ZI+AxQUWSSBwKj+EOUcANcgMiQ1TicE19akMNA1Q2XdtyZ+d19+/fIzoOdczjBzAi+sBC0jqb6BsYESfAGzAHBoZGxAVwC9xI8vedUVfoS6dbKDBqgFNJk500+NXyIfBSQGfAGMgBXUFElNAlcJwGNpqdAwfAVQNznlyFEeF2DazjWtJDRkPbZlhdXAFPba3U2tiNtnZAHZvSUvsA7cnnP4Cvknz2FVmgp/8IfNhmkqx9GvgOHJUbVVadqfAOuCw3qhxYBjgF7suNknSWadmWMmhizaqN6kla7DWU/0ztV2oL6wRYJ2qtYZu18z+fpFBpFdDUAF4AAAAASUVORK5CYII="
    },
    "2148c97488151eca122f": function(e, t, i) {
        "use strict";
        var n = i("228d4a235ae4e2e71076")
          , o = i("7ff1de9f80f76987ddef");
        e.exports = Object.keys || function(e) {
            return n(e, o)
        }
    },
    "228d4a235ae4e2e71076": function(e, t, i) {
        "use strict";
        var a = i("f7c33656140074fd558a")
          , s = i("a1ce88ca7866e21ff551")
          , l = i("98d7901d460baa73790b").indexOf
          , c = i("23b436057eb7cddbd440");
        e.exports = function(e, t) {
            var i, n = s(e), o = 0, r = [];
            for (i in n)
                !a(c, i) && a(n, i) && r.push(i);
            for (; t.length > o; )
                a(n, i = t[o++]) && (~l(r, i) || r.push(i));
            return r
        }
    },
    "23b436057eb7cddbd440": function(e, t, i) {
        "use strict";
        e.exports = {}
    },
    "23c9104dcc3910d185c2": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var r = T(i("790825d0dabf4060a0d9"))
          , n = T(i("ddb8338bcecb054d6eee"))
          , o = T(i("1303bb930a7a9d14bc5b"))
          , a = T(i("204fed67376905d4fa7d"))
          , s = T(i("5a06b39f0db0ab642b30"))
          , l = T(i("ae19a1d24e6ded12b0b9"))
          , c = T(i("9dc446da53b44c304edf"))
          , u = T(i("5d0dd1cf8e8f85b48e82"))
          , f = T(i("ced5a6888eb062195e56"))
          , d = T(i("e2263676467d036c3349"))
          , p = T(i("96598f2d6ae9c8676ba4"))
          , h = T(i("694316029b4ae3dbacea"))
          , _ = T(i("48845084357dc7708026"))
          , g = T(i("c779f0f9ff7f0eb554cb"))
          , y = T(i("3563452857edbdae56b6"))
          , b = T(i("7e5547880fa3f17f0b5c"))
          , m = i("a374d1afb460e7ecf645")
          , v = T(i("d49b774756187ce732a3"))
          , A = T(i("6dfc805bb169defe8df1"))
          , E = T(i("61637bf383ae9d72a949"));
        function T(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var w, S = (function P(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(C, w = s["default"]),
        C.prototype._initLogger = function() {
            l["default"].clear();
            var e = n["default"].env == n["default"].RELEASE
              , t = c["default"].query("__showconsole__")
              , i = !1;
            i = t ? "show" == t : !e,
            l["default"].setShowConsole(i)
        }
        ,
        C.prototype._playerEvents = function() {
            this.once(r["default"].PLAYER_PLUGINS_INSTALLING, this._analyzeProgram.bind(this)),
            this.once(r["default"].PLAYER_PLUGINS_READY, this._pluginsReady.bind(this)),
            this.on(r["default"].CHARGE_CHECK_DONE, this._chargeCheckComplete.bind(this)),
            this.on(r["default"].NOTIFY_FILLER_START, this._startFiller.bind(this)),
            this.on(r["default"].MOVIE_ENTER, this._onMovieEnter.bind(this)),
            this.on(r["default"].CONTROL, this._onControl.bind(this)),
            this.on(r["default"].MOVIE_RESET, this._onBeforeUnload.bind(this)),
            this._addWindowEvents()
        }
        ,
        C.prototype._addWindowEvents = function() {
            this._winHandlers || (this._winHandlers = {
                beforeunload: this._onBeforeUnload.bind(this)
            },
            window.addEventListener && window.addEventListener("beforeunload", this._winHandlers.beforeunload))
        }
        ,
        C.prototype._removeWindowEvents = function() {
            this._winHandlers || (window.removeEventListener && window.removeEventListener("beforeunload", this._winHandlers.beforeunload),
            this._winHandlers = null)
        }
        ,
        C.prototype._onBeforeUnload = function(e) {
            var t = this.getProgramInfo();
            t && p["default"].isPlaybackPlaying() && b["default"].savePlayMemory(t.tvid, Math.max(this.getVideoTime() - this.getBeginTime(), 0))
        }
        ,
        C.prototype._onControl = function(e) {
            var t = e.type
              , i = e.data;
            t == r["default"].CONTROL_FULLPAGE_SWITCH && this.emit(r["default"].PAGE_FULL, i)
        }
        ,
        C.prototype._onResize = function(e) {
            this.emitAsync(r["default"].PLAYER_RESIZE)
        }
        ,
        C.prototype._initConfig = function() {
            l["default"].info("LiveBasePlayer", "init config"),
            this._config = new n["default"](this._baseInfo,this._extraInfo),
            _["default"].setPhase(_["default"].CONFIG_READY),
            this._initStage()
        }
        ,
        C.prototype.updateConfig = function(e, t) {
            this._config = new n["default"](e,t)
        }
        ,
        C.prototype._initStage = function() {
            var e = this._config.getEntryConfig("parentId")
              , t = void 0;
            if (!(t = e ? document.getElementById(e) : this._config.getEntryConfig("container")))
                throw new Error("container #" + e + " or element not exists");
            if (this._view = new o["default"](t,this._config.getEntryConfig("effectContainer")),
            u["default"].registElement(t),
            u["default"].on("resize", this._onResize.bind(this)),
            E["default"].getInstance().isIE() && E["default"].getInstance().getVersion() <= 10)
                ;
            else {
                var i = this
                  , n = new MutationObserver(function(e, t) {
                    i.checkResize()
                }
                );
                document.querySelector(".pw-player"),
                n.observe(t.parentNode, {
                    childList: !0,
                    characterData: !0
                })
            }
            _["default"].setPhase(_["default"].VIEW_READY),
            this._initPlugins()
        }
        ,
        C.prototype.checkResize = function() {
            u["default"].getElement().offsetWidth != this.lastStageOffsetWidth && this._onResize(),
            this.lastStageOffsetWidth = u["default"].getElement().offsetWidth
        }
        ,
        C.prototype._initPlugins = function() {
            l["default"].info("LiveBasePlayer", "init plugins"),
            this._initMountKeys(),
            this.__pluginsreadyflag = !1,
            this.__vrscheckflag = !1,
            this._pluginManager = new a["default"](this,this._config.layerConfig)
        }
        ,
        C.prototype._initMountKeys = function() {
            this.$engine = {},
            this.$control = {},
            this.$ares = {},
            this.$user = {},
            this.$pingback = f["default"]
        }
        ,
        C.prototype._pluginsReady = function(e) {
            e.error ? (A["default"].add({
                content: {
                    step: A["default"].STEPS.INITPLAYER,
                    result: 0,
                    code: e.code,
                    message: e.message
                },
                stage: A["default"].STAGE.INIT
            }),
            this.notifyError({
                code: e.code,
                message: e.message
            })) : (A["default"].add({
                content: {
                    step: A["default"].STEPS.INITPLAYER,
                    result: 1
                },
                stage: A["default"].STAGE.INIT
            }),
            this.emitAsync(r["default"].PLAYER_INITED),
            this.__pluginsreadyflag = !0,
            l["default"].info("LiveBasePlayer", "_checkReady:" + JSON.stringify(e)),
            this._checkReady())
        }
        ,
        C.prototype._analyzeProgram = function() {
            window.QYP.isAct = window.QL && window.QL.liveTypeId && 3 == window.QL.liveTypeId && null != window.QYP.actId;
            var e = this._config.getEntryConfig("status");
            p["default"].setRoomStatus(e),
            window.QYP.isAct || (e != undefined && null != e ? this.updateLiveStatus({
                status: e
            }) : this.startMovie())
        }
        ,
        C.prototype._chargeCheckComplete = function(e) {
            e.error ? (this.emitAsync(r["default"].PLAYER_INITED, {
                error: !0,
                code: e.code,
                message: e.message
            }),
            this.emitAsync(r["default"].CHARGE_FAIL, {})) : (this.__vrscheckflag = !0,
            this._checkReady())
        }
        ,
        C.prototype._checkReady = function() {
            l["default"].info("LiveBasePlayer", "_checkReady:" + this.__pluginsreadyflag + "," + this.__vrscheckflag),
            this.__pluginsreadyflag && this.__vrscheckflag && (this.emitAsync(r["default"].PLAYER_READY),
            d["default"].isPPC() || this.emitAsync(r["default"].MOVIE_ENTER))
        }
        ,
        C.prototype._onMovieEnter = function(e) {
            h["default"].getStatus() != h["default"].IDLE && this.getPlugin(g["default"].ENGINE).stopPlay(),
            _["default"].setPhase(_["default"].MOVIE_START),
            p["default"].setProgramStatus(null),
            p["default"].setPlayStatus(null),
            h["default"].setStatus(h["default"].IDLE),
            this._checkProgram()
        }
        ,
        C.prototype._checkProgram = function() {
            this._clearProgramCheck(),
            d["default"].isEPG() ? (this._checkProgramChange(p["default"].PLAYING, p["default"].MOVIE_LIVING),
            this.emit(r["default"].CHECKPLAY_PASS)) : d["default"].isPGC() ? this._checkPGCProgram() : d["default"].isPPC() && this._checkPPCProgram()
        }
        ,
        C.prototype._clearProgramCheck = function() {
            y["default"].clear("wait-for-filler-start"),
            y["default"].clear("wait-for-live-start")
        }
        ,
        C.prototype._checkProgramChange = function(e, t) {
            var i = {
                old: {}
            }
              , n = e != p["default"].getProgramStatus()
              , o = t != p["default"].getPlayStatus();
            n && (i.programStatus = e,
            i.old.programStatus = p["default"].getProgramStatus(),
            p["default"].setProgramStatus(e)),
            o && (i.playStatus = t,
            i.old.playStatus = p["default"].getPlayStatus(),
            p["default"].setPlayStatus(t),
            p["default"].isLivePlaying() && (this.canVertifyEndTime = !0,
            this.vertifyEndTime())),
            (n || o) && this.emitAsync(r["default"].PROGRAM_STATUS_CHANGED, i)
        }
        ,
        C.prototype.vertifyEndTime = function() {
            var e = this;
            if (this.canVertifyEndTime && d["default"].isPPC() && p["default"].isLivePlaying()) {
                var t = 240 + 60 * Math.random()
                  , i = this.getEndTime() - this.getServerTime() - t;
                if (this.getEndTime() < this.getServerTime())
                    return;
                this.getEndTime() > this.getServerTime() + t ? setTimeout(function() {
                    e.requestVrsAgain()
                }, 1e3 * i) : this.getEndTime() > this.getServerTime() && setTimeout(function() {
                    l["default"].info("LiveBasePlayer", "vertifyEndTime  到时间点停流"),
                    e.stopMovie()
                }, 1e3 * (this.getEndTime() - this.getServerTime()))
            }
        }
        ,
        C.prototype.requestVrsAgain = function() {
            var n = this;
            new v["default"]({
                qpId: this._programInfo.tvid,
                channelId: this._programInfo.channelId,
                complete: function(e) {
                    if (!e.error) {
                        var t = e.data.data;
                        if (t.hasOwnProperty("program")) {
                            var i = t.program;
                            if (n._programInfo.endTime = i.endTime != undefined ? Math.ceil(Number(i.endTime) / 1e3) : -1,
                            0 == n._programInfo.endTime)
                                return void (n._programInfo.endTime = -1);
                            n.getServerTime() >= n.getEndTime() && (l["default"].info("LiveBasePlayer", "requestVrsAgain  执行停播操作"),
                            n.stopMovie()),
                            300 < n.getEndTime() - n.getServerTime() ? (n.canVertifyEndTime = !0,
                            n.vertifyEndTime()) : (n.canVertifyEndTime = !1,
                            setTimeout(function() {
                                l["default"].info("LiveBasePlayer", "离结束时间<=5分钟，到时间点停流"),
                                n.stopMovie()
                            }, 1e3 * (n.getEndTime() - n.getServerTime())))
                        }
                    }
                }
            },this)
        }
        ,
        C.prototype.stopMovie = function() {
            this.emitAsync(r["default"].NOTIFY_LIVE_STATUS, {
                type: r["default"].NOTIFY_LIVE_STOP
            })
        }
        ,
        C.prototype._checkPGCProgram = function() {
            var e = this
              , t = this.getBeginTime()
              , i = this.getServerTime()
              , n = p["default"].isRoomCarousel();
            clearTimeout(this.__delayPlayTid),
            !n || n && t + 110 <= i ? (this._checkProgramChange(p["default"].PLAYING, p["default"].MOVIE_LIVING),
            this.emit(r["default"].CHECKPLAY_PASS)) : this.__delayPlayTid = setTimeout(function() {
                clearTimeout(e.__delayPlayTid),
                e._checkProgramChange(p["default"].PLAYING, p["default"].MOVIE_LIVING),
                e.emit(r["default"].CHECKPLAY_PASS)
            }, 1e3 * (t + 110 - i))
        }
        ,
        C.prototype._checkPPCProgram = function() {
            var e = this;
            this._clearProgramCheck();
            var t = this._getProgramStatus();
            t && (t.programStatus == p["default"].PLAYING ? (this.emitAsync(r["default"].CHECKPLAY_PASS),
            t.playStatus == p["default"].FILLER_PLAYING ? (_["default"].setPhase(_["default"].FILLER_START),
            0 < t.toLiveStart && y["default"].create("wait-for-live-start", y["default"].WAIT_UNTIL).after(1e3 * t.toLiveStart).execute(function() {
                e._onLiveStart(!0)
            }).start()) : t.playStatus == p["default"].MOVIE_LIVING ? _["default"].setPhase(_["default"].MAIN_MOVIE_START) : t.playStatus == p["default"].MOVIE_PLAYBACK && _["default"].setPhase(_["default"].PLAYBACK_START)) : t.programStatus == p["default"].WAITING ? t.hasFiller ? 0 < t.toFillerStart && y["default"].create("wait-for-filler-start", y["default"].WAIT_UNTIL).after(1e3 * t.toFillerStart).execute(this._startFiller.bind(this)).start() : 0 < t.toLiveStart && y["default"].create("wait-for-live-start", y["default"].WAIT_UNTIL).after(1e3 * t.toLiveStart).execute(function() {
                e._onLiveStart(!1)
            }).start() : t.canPlayback ? _["default"].setPhase(_["default"].PLAYBACK_END) : _["default"].setPhase(_["default"].MAIN_MOVIE_END),
            this._checkProgramChange(t.programStatus, t.playStatus))
        }
        ,
        C.prototype._getProgramStatus = function() {
            var e = this.getProgramInfo();
            if (!e)
                return null;
            var t = e.beginTime
              , i = e.startFillerTime
              , n = e.endTime
              , o = this.getServerTime()
              , r = void 0
              , a = void 0
              , s = e.playbackDuration && 0 < e.playbackDuration
              , l = e.startFillerTime && 0 < e.startFillerTime;
            return s && o >= n + e.playbackDuration || !s && n <= o ? r = p["default"].ENDED : s && n <= o && o < n + e.playbackDuration ? (r = p["default"].PLAYING,
            a = p["default"].MOVIE_PLAYBACK) : t <= o && o <= n ? (r = p["default"].PLAYING,
            a = p["default"].MOVIE_LIVING) : l && i <= o && o < t ? (r = p["default"].PLAYING,
            a = p["default"].FILLER_PLAYING) : (l && o < i || !l && o < t) && (r = p["default"].WAITING),
            {
                programStatus: r,
                playStatus: a,
                hasFiller: l,
                canPlayback: s,
                toFillerStart: l ? i - o : -1,
                toLiveStart: t - o
            }
        }
        ,
        C.prototype._startFiller = function() {
            this.__enterFiller || (this.__enterFiller = !0,
            this.refreshMovie())
        }
        ,
        C.prototype._onLiveStart = function(e) {
            e ? (this._checkPPCProgram(),
            this.emit(r["default"].LIVE_START)) : this.refreshMovie()
        }
        ,
        C.prototype.destroy = function() {
            this._clearProgramCheck(),
            this._removeWindowEvents(),
            this._pluginManager && (this._pluginManager.destroy(),
            this._pluginManager = null),
            this._view && (this._view.destroy(),
            this._view = null),
            this._config && (this._config.destroy(),
            this._config = null),
            this._programInfo && (this._programInfo.destroy(),
            this._programInfo = null),
            this.emit("destroy"),
            this.removeAllListeners()
        }
        ,
        C);
        function C(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null;
            !function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, C);
            var i = function r(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, w.call(this));
            i.setMaxListeners(100),
            i._baseInfo = e,
            i._extraInfo = t,
            A["default"].setSDK(i._baseInfo.chainlog),
            A["default"].add({
                content: {
                    step: A["default"].STEPS.INITPLAYER,
                    data: Object.assign({}, i._baseInfo, i._extraInfo)
                },
                stage: A["default"].STAGE.INIT
            }),
            i._initLogger(),
            l["default"].info("LiveBasePlayer", "enviroment info: \nhref=" + window.location.href + ", \nreferer=" + document.referrer + ", \nplatform=" + navigator.platform + ", \nvendor=" + navigator.vendor + ", \nuseragent=" + navigator.userAgent),
            l["default"].info("LiveBasePlayer", "init player: base=" + JSON.stringify(e, m.safeStringify) + ", extra=" + (t ? JSON.stringify(t, m.safeStringify) : ""));
            var n = 99.5 < 100 * Math.random();
            return window.QYP = {
                qpId: e.tvid,
                actId: window.QL && window.QL.actId || null,
                userPause: !1,
                isAd: !0,
                bstp: "h5",
                actQpId: window.QL && window.QL.actVideoQpId || null,
                anchorId: window.QL && window.QL.anchorId || 0,
                playerType: d["default"].getType(),
                sensorEnabled: n,
                userNet: {
                    ip: "读取不到",
                    netAreaMain: "读取不到",
                    netAreaExt: "读取不到",
                    netType: "读取不到",
                    operator: "读取不到"
                },
                stopPlayTime: e.stopPlayTime,
                startPlayTime: e.startPlayTime
            },
            i._playerEvents(),
            i._initConfig(),
            QYP.playerType = d["default"].getType(),
            i
        }
        t["default"] = S
    },
    "26d59f808dff3e83c741": function(e, t, i) {
        "use strict";
        var n, o, r = e.exports = {};
        function a() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function l(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === a || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                n = a
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                o = s
            }
        }();
        var c, u = [], f = !1, d = -1;
        function p() {
            f && c && (f = !1,
            c.length ? u = c.concat(u) : d = -1,
            u.length && h())
        }
        function h() {
            if (!f) {
                var e = l(p);
                f = !0;
                for (var t = u.length; t; ) {
                    for (c = u,
                    u = []; ++d < t; )
                        c && c[d].run();
                    d = -1,
                    t = u.length
                }
                c = null,
                f = !1,
                function i(e) {
                    if (o === clearTimeout)
                        return clearTimeout(e);
                    if ((o === s || !o) && clearTimeout)
                        return o = clearTimeout,
                        clearTimeout(e);
                    try {
                        return o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function _(e, t) {
            this.fun = e,
            this.array = t
        }
        function g() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
            u.push(new _(e,t)),
            1 !== u.length || f || l(h)
        }
        ,
        _.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = g,
        r.addListener = g,
        r.once = g,
        r.off = g,
        r.removeListener = g,
        r.removeAllListeners = g,
        r.emit = g,
        r.prependListener = g,
        r.prependOnceListener = g,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    },
    "2963f220367348be9066": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABDElEQVQ4T7WUMU7DQBBF3+9SUNClDAU9XCFdunATTEeDgJIKuEFyg6AcgByBA0QKJXTcYNBHa2NFFmw2zjRbWPt2/v8zFj2XeubRACPiGLgFvrYeeZH0lvtwG/gEXHZcNPCiBHiXOvTdD2CezoWk932An8AQsMyxpG0L/mS3JdcdPgAT4KwE2gW8AmbAKkFXksYlks8Bd1nZs5S6oUjyt6w63BzmPO+u/wspu8NkwQbwCP2kHxEnwCNwXw9/NtAKIsKj1KQP2NvXBLT/v6uXK7mVvuE3wLIYmLr0ztcjtQZOi4HJsxFwBHj3DXPZwyLJC2DaYc+zpKrEQ4fQ/vMMAFtwXY/TTinnBNc78BtLtGMVrLQRAAAAAABJRU5ErkJggg=="
    },
    "2a95cc0dd8e54fcba43d": function(e, t, i) {
        "use strict";
        var n = i("a765f2839f9467561505")
          , o = i("d280362e5865b5c09927")
          , r = function r(e) {
            return "function" == typeof e ? e : undefined
        };
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(n[e]) || r(o[e]) : n[e] && n[e][t] || o[e] && o[e][t]
        }
    },
    "2aa1923b8115b66e68f1": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = l(i("48978116bed354cb6d8f"))
          , o = l(i("790825d0dabf4060a0d9"))
          , r = (l(i("5d0dd1cf8e8f85b48e82")),
        l(i("343def12cad299c54e12")))
          , a = l(i("fb885b8dee52c75a3d84"))
          , s = l(i("c779f0f9ff7f0eb554cb"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, u = (function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, c = r["default"]),
        f.prototype._load = function() {
            var e = this;
            c.prototype.load.call(this),
            this._handlers || (this._handlers = {
                onVideoStatus: this._onVideoStatus.bind(this),
                onControl: this._onControl.bind(this),
                onResize: this._onResize.bind(this),
                onBarrageChange: this.__onBarrageChange.bind(this),
                onMovieEnter: this.__onMovieEnter.bind(this),
                onMovieReset: this.__onMovieReset.bind(this)
            },
            this._player.on(o["default"].VIDEO_STATUS, this._handlers.onVideoStatus),
            this._player.on(o["default"].CONTROL, this._handlers.onControl),
            this._player.on(o["default"].PLAYER_RESIZE, this._handlers.onResize),
            this._player.on(o["default"].BARRAGE_CHANE, this._handlers.onBarrageChange),
            this._player.on(o["default"].MOVIE_ENTER, this._handlers.onMovieEnter),
            this._player.on(o["default"].MOVIE_RESET, this._handlers.onMovieReset));
            var t = this._config.refName;
            if (window[t])
                this._assemble();
            else {
                var i = this._player.getJsUrl(this._config.path);
                n["default"].seriesLoadScripts([i], function() {
                    e._assemble()
                })
            }
        }
        ,
        f.prototype._assemble = function() {
            this._initContainer(),
            this._barrage = window[this._config.refName].getCommon();
            var e = this._player.getView().getStage();
            this._barrage.initialize(this._container, {
                adapt: !0,
                fps: 60,
                sleepClearTime: 1e4,
                fontSize: this._size,
                alpha: this._alpha,
                liveTime: this._speed,
                faceUrl: "//www.iqiyipic.com/qlive/fix/img/emoji/",
                poolNum: 45,
                poolStet: 15,
                poolDamp: 200,
                x: 0,
                y: 0,
                width: e.offsetWidth,
                height: e.offsetHeight,
                topGap: 20,
                bottomGap: 50,
                leftGap: 0,
                rightGap: 0,
                pwAlign: this._area,
                pwMinGap: Math.ceil(this._size / 2),
                pwMaxGap: Math.ceil(2 * this._size / 3),
                pwNum: "full" === this._area ? 10 : 5,
                itemMinGap: 2.5 * this._size | 0
            }),
            c.prototype.init.call(this),
            this._executeCache()
        }
        ,
        f.prototype._onVideoStatus = function(e) {
            e && this._barrage && e.type
        }
        ,
        f.prototype._onControl = function(e) {
            if (e && this._barrage)
                if (e.type === o["default"].CONTROL_FULLSCREEN_SWITCH) {
                    var t = e.data.value;
                    this._barrage.changeParams({
                        topGap: t ? 60 : 20
                    })
                } else if (e.type === o["default"].CONTROL_DANMU_SWITCH) {
                    var i = e.data.value;
                    this._barrage.openOrClose(i)
                }
        }
        ,
        f.prototype.openOrClose = function(e) {
            this._barrage.openOrClose(e)
        }
        ,
        f.prototype._onResize = function(e) {}
        ,
        f.prototype._initContainer = function() {
            var e = this._container;
            e.id = "video-barrage-container",
            e.style["z-index"] = 8,
            e.style.width = "100%",
            e.style.height = "100%",
            e.style.position = "absolute",
            e.style.left = 0,
            e.style.top = 0,
            e.style.right = 0,
            e.style.bottom = 0,
            e.style["pointer-events"] = "none"
        }
        ,
        f.prototype._executeCache = function() {
            if (this._caches)
                for (var e = 0; e < this._caches.length; e++)
                    this._appendBarrage(this._caches[e][0], this._caches[e][1], this._caches[e][2]);
            this._caches = []
        }
        ,
        f.prototype.appendBarrage = function(e, t, i) {
            this._barrage && this._startup ? this._appendBarrage(e, t, i) : this._caches.push([e, t, i])
        }
        ,
        f.prototype._appendBarrage = function(e, t, i) {
            this._barrage.appendBarrage(e, t, i)
        }
        ,
        f.prototype.destroy = function() {
            this._handlers && (this._player.off(o["default"].VIDEO_STATUS, this._handlers.onVideoStatus),
            this._player.off(o["default"].CONTROL, this._handlers.onControl),
            this._player.off(o["default"].PLAYER_RESIZE, this._handlers.onResize),
            this._player.off(o["default"].BARRAGE_CHANE, this._handlers.onBarrageChange),
            this._handlers = null),
            this._barrage && (this._barrage.clear(),
            this._barrage.destroy && this._barrage.destroy(),
            this._barrage = null),
            this._caches = null,
            c.prototype.destroy.call(this)
        }
        ,
        f.prototype.__onBarrageChange = function(e) {
            var t = e.type
              , i = e.data;
            if ("area" === t) {
                var n = "top0" == (this._area = i) ? 3 : 5;
                i = "top0" == i ? "top" : i,
                this._barrage && this._barrage.changeParams({
                    pwAlign: i,
                    pwNum: n
                })
            } else
                "size" === t ? (this._size = i,
                this._barrage && this._barrage.changeParams({
                    fontSize: i,
                    pwMaxGap: Math.ceil(2 * this._size / 3),
                    itemMinGap: Math.ceil(this._size / 2)
                })) : "alpha" === t ? (this._alpha = i,
                this._barrage && this._barrage.changeParams({
                    alpha: i
                })) : "speed" === t && (this._speed = i,
                this._barrage && this._barrage.changeParams({
                    liveTime: i
                }))
        }
        ,
        f.prototype.__onMovieEnter = function(e) {
            this._startup = !0,
            this._executeCache()
        }
        ,
        f.prototype.__onMovieReset = function(e) {
            this._barrage && this._barrage.clear(),
            this._startup = !1,
            this._caches = []
        }
        ,
        f);
        function f(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this, e, t));
            return i._type = s["default"].BARRAGE,
            i._config = i._player.getConfig().getEnvConfig("barrage"),
            i._caches = [],
            i._barrage = null,
            i._area = "" !== a["default"].get("barrageArea") ? a["default"].get("barrageArea") : "full",
            i._size = "" !== a["default"].get("barrageSize") ? parseInt(a["default"].get("barrageSize")) : 24,
            i._alpha = "" !== a["default"].get("barrageAlpha") ? parseFloat(a["default"].get("barrageAlpha")) : 1,
            i._speed = "" !== a["default"].get("barrageSpeed") ? parseInt(a["default"].get("barrageSpeed")) : 16e3,
            i._startup = !1,
            i._load(),
            i
        }
        t["default"] = u
    },
    "2ae2a4b52ce9baf37628": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("162f473717848ae5cb34"));
        var o = "01";
        n["default"].browser.iPhone || n["default"].os.android ? o = "02" : n["default"].browser.iPad && (o = "03");
        var r = "01";
        n["default"].os.android ? r = "02" : n["default"].os.ios && (r = "03");
        t["default"] = {
            getPtid: function s(e) {
                var t = "00"
                  , i = "002";
                return e && e.istw != undefined && (t = e.istw ? "10" : "00"),
                e && e.isflash != undefined && (i = e.isflash ? "001" : "002"),
                "" + o + r + i + "10100" + t + "000000"
            }
        }
    },
    "2ede7d11d137dfe1423d": function(e, t, i) {
        var n = i("644e97dfa15d7e58b890");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "343def12cad299c54e12": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var r = o(i("790825d0dabf4060a0d9"))
          , n = o(i("5a06b39f0db0ab642b30"));
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var a, s = (function c(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(l, a = n["default"]),
        l.prototype.load = function() {
            this._state = r["default"].PLUGIN_STATE_LOADING,
            this.emitAsync(r["default"].PLUGIN_EVENT_LOADING, this)
        }
        ,
        l.prototype.init = function(e) {
            this._state = r["default"].PLUGIN_STATE_INITED,
            this.emitAsync(r["default"].PLUGIN_EVENT_INITED, this, e)
        }
        ,
        l.prototype.destroy = function() {
            this.asyncDestroy(),
            this._state = r["default"].PLUGIN_STATE_DESTROY,
            this.emitAsync(r["default"].PLUGIN_EVENT_DESTROYED, this),
            this.__playerEventsObj = null,
            this._container = null,
            this._player = null
        }
        ,
        l.prototype.asyncDo = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 0
              , i = void 0;
            return e && (i = setTimeout(e, t),
            this.__asyncList.push(i)),
            i
        }
        ,
        l.prototype.asyncClear = function(e) {
            clearTimeout(e);
            var t = this.__asyncList.indexOf(e);
            -1 != t && this.__asyncList.splice(t, 1)
        }
        ,
        l.prototype.asyncDestroy = function() {
            for (var e = 0; e < this.__asyncList.length; e++)
                clearTimeout(this.__asyncList[e]);
            this.__asyncList = null
        }
        ,
        l.prototype.addPlayerEvent = function(e, t) {
            this.__playerEventsObj[e] || (this.__playerEventsObj[e] = t,
            this._player.on(e, t))
        }
        ,
        l.prototype.removeAllPlayerEvents = function() {
            if (this.__playerEventsObj) {
                for (var e in this.__playerEventsObj)
                    this.__playerEventsObj.hasOwnProperty(e) && this._player.off(e, this.__playerEventsObj[e]);
                this.__playerEventsObj = {}
            }
        }
        ,
        l.prototype.isInited = function() {
            return this._state == r["default"].PLUGIN_STATE_INITED
        }
        ,
        l.prototype.waitInit = function(e) {
            this.isInited() ? e && e() : this.once(r["default"].PLUGIN_EVENT_INITED, e)
        }
        ,
        l.prototype.getState = function() {
            return this._state
        }
        ,
        l.prototype.getType = function() {
            return this._type
        }
        ,
        l);
        function l(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, a.call(this));
            return i._state = r["default"].PLUGIN_STATE_IDLE,
            i._container = e,
            i._player = t,
            i._type = "unknown",
            i.__playerEventsObj = {},
            i.__asyncList = [],
            i
        }
        t["default"] = s
    },
    "3465df4eaa86765e7709": function(e, t, i) {
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M706C61796572-engine {\n  background: #000000;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  opacity: 0.3;\n  transition: width 2s;\n}\n.M706C61796572-engine-ad {\n  z-index: 1;\n  position: absolute;\n}\n", ""])
    },
    "3563452857edbdae56b6": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("0d9c226b3bb7881f714f"));
        var o = (r.prototype.create = function(e, t) {
            if (this._timers[e])
                throw new Error("duplicate timer name: " + e);
            var i = null;
            switch (t) {
            case this.WAIT_UNTIL:
                i = new n["default"]
            }
            return i && (this._timers[e] = i),
            i
        }
        ,
        r.prototype.clear = function(e) {
            this._timers[e] && delete this._timers[e]
        }
        ,
        r);
        function r() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this.WAIT_UNTIL = "waitUntil",
            this._timers = {}
        }
        t["default"] = new o
    },
    "38e2fc952b08ad92fe17": function(e, t, i) {
        "use strict";
        var n = i("2a95cc0dd8e54fcba43d")
          , o = i("497dbe25c69684c13d68")
          , r = i("039120ee892916dfcbc1")
          , a = i("d106339100d5557eedda");
        e.exports = n("Reflect", "ownKeys") || function(e) {
            var t = o.f(a(e))
              , i = r.f;
            return i ? t.concat(i(e)) : t
        }
    },
    "38eba46e8b8bd6b4cff1": function(e, t, i) {
        "use strict";
        e.exports = Object.assign || function(e, t) {
            if (null == e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var i = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (null != o)
                    for (var r in o)
                        Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r])
            }
            return i
        }
    },
    "3923ac886da45705f8da": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACsUlEQVRoQ+2Zy03DQBCG/zlwhg6ACoAOoABeFRAqACoAKgAqACoAiQIAceNC6AA6gDOHQX80jjabdTxOHHkjeS+I+DXf/PNaW7DgSxbcfnQAbSvYKdApMKMHGg8hVV0DcA6Af78AnInIz4x2ll7eKICqHgC4BbASPLEPYGdeEI0AqCoNpuEESK1DEXmchwozA6jqNoCHyOuxrZcicpEVgHmdsX7qMCwvAFXdNK8zUT0rHwBVpdfLwuHXjl1FVO0DmNeZqPR+an0C6IlIX1W1FQCLa3qP1SQshVVhMuLhNgFY6varrA2OfxOWXg+vaRMgln4Syw3jPdWgcgdgotLrL2V0dQEsdDcAfJY4ZJB3sdKD3yqkfwUQG3pdNRbUATDjP2x24szEsWMYkqp6B+DI7ORcdR3aXAUwVfmrCcCSzNJcrCFEZDyP89h66MAcAEIPhxBvAHYTYUoATrmDlQMAuzlDZtlR/W5EZGR0aR2ARluTZK5NgrgXkV4MmQVAAPEOYCmhxJOI7KUUygkglQtjiZ2lAolqk3L2WInNJYkZ1xwS4/WXCKcvEVmv0weYWHEjYyWYuEmv2QdS89c9ADasVGJvhY2uKgfKpOQet5FRwrakz8GDhtUmUZ1eRYRb2OGaBqC4mB5ipx5To44CVoFY2znCv8R7Z4MoNlCnYRNL5UDdcZodkWpkM05zE8NyRpk8nbFQg2P1ZfFPXQUcHbj0FPdrFZOScBx7U4sqHLe6pfR4QlXj6TG8jPnA4yMjr+VKPu+FTA3my6oHOjsAqxzMF3r1xAEx1b7Ccd/ZPzFZHWduTFIjX4BADUKUvdHI9+VuKLO9XidIWIL5wmu7avzwhEvqHHcZ9T7ANumsQsUHDnbPxfjA4YVs8rzGFWjSOM+9OgCPl+Z5TqfAPL3ruffCK/AP5DKFQMKaHT0AAAAASUVORK5CYII="
    },
    "3930818c395b7bf90095": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = a(i("3db7b7aef52b79d4d289"))
          , o = a(i("fb885b8dee52c75a3d84"))
          , r = (a(i("fd0b44f556392d6a75ac")),
        a(i("b46d390f19c21708f72a")));
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = (l.prototype.request = function(e) {
            var n = this.getInfo(e);
            return new Promise(function(i, t) {
                r["default"].doPost("//apis-live.iqiyi.com/v1/live/act/recordTrialTime", n).then(function(e) {
                    var t = JSON.parse(e);
                    i(t.data)
                })["catch"](function(e) {
                    t(e)
                })
            }
            )
        }
        ,
        l.prototype.getInfo = function(e) {
            var t = {
                qpId: window.QYP.qpId,
                heartBeatTime: 10,
                version: this._parent._player.getConfig().getEnvConfig("version"),
                platform: "1_10_101_1021",
                tl: "pcw",
                deviceId: o["default"].get("QC005") || "",
                ua: navigator.userAgent
            };
            return t.sn = n["default"].sign(t),
            t
        }
        ,
        l);
        function l(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l),
            this._parent = e
        }
        t["default"] = s
    },
    "39b4fc83201597c7a21f": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAiCAYAAACHpl23AAAAAXNSR0IArs4c6QAAAwpJREFUaAXtm19IU1Ecx793LXT1FGGZOqVhZQQpozBCM+hBinowerGHkNCICHS+hZYailDREorC/iD10Fs991qCFZHTElrT1ZijMswwasTm1n4H7tjdReheTzcu/H4P2+45v/M7P74fzrnnd8dVGo60HUylMZxGugxstlFAgTLrUHDKwfBsw0yTKC04YufglafRxVYXxM5hq4w5WZ0CDFAnib0aGKC9eOmyZYA6SezVwADtxUuXLQPUSWKvBgZoL166bJ26FoMNLlcBmpsaUVdbjdJNG8To2Kc5jL6YwMPHTxCP/zYYkd2NKKDUHW5NGxmQ6+vdWYVz7S0oWr8O0x+iCE5HRPe2ygpUbnbj6/wCBodG8HryXe4w/i1RAdMACd61/k6EIzEM+O8hFI5q0tricaPLdxKeilJ0dF9liBp15F2YAkjb5v3rffj5K4423wASySRchQVo2OsV32Ov3uDz3DxWO5247e/C2jUunDjbw9upPG7ZSKYOMXTPo22TVp4K7+7QebHifKeP48GNPpSXFYs+8iFfGsMmXwFTAOv31Ih7nrpt7qjywF2yERev3EHPpWEUZlbjrurtIlvyofsjHXLY5CtgCmBJcVH2wEIpjU8G0drRj9GXATQd2o9EIomJqVA2WzrcqCfUbCP/kKKAKYD5My+lUgjORHCm5RhoNXZe8GPm42y+G1//AwVMAaQ6j0qFfAtltspbI48QePte00W+NIZNvgKmAFKRTnUelQq5Vl9bgwP7duc2CR/ypTFs8hUwBZCesFCRTnUelQqqfV/8oVlp1Ec+5Etj2OQrsKp8q7fXaNhkcknc45qPNoJOpFPBML4tLOLZ8wCejo2LcLQ6L/e2i0K+e/AmorEvRqdh/79QwFQhr8blR2mqEv/ve0UAKW31YTatRCovyPhhtpDBko8VA7QkS55kWQVMHWKWjcYdlivAAC2XXO6EDFCunpZHY4CWSy53QgYoV0/LozFAyyWXOyEDlKun5dEyr5gp/L+P5bLLmVC8I0gvCTJEOYJaGUV9wfMPwhb+XJsNaiAAAAAASUVORK5CYII="
    },
    "3aea0cd6eefeca140496": function(e, t, i) {
        "use strict";
        var n = i("7e90ea0061b5194ffb11")
          , o = i("7df98bf002cb00a5c6c9")
          , r = "".split;
        e.exports = n(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == o(e) ? r.call(e, "") : Object(e)
        }
        : Object
    },
    "3c5c0e2a3424018cbe00": function(e, t, i) {
        "use strict";
        var n = i("d280362e5865b5c09927")
          , o = i("69d4ebc1bc0e9a108375");
        e.exports = function(e, t) {
            try {
                o(n, e, t)
            } catch (i) {
                n[e] = t
            }
            return t
        }
    },
    "3da48ce483d53779cf6b": function(e, t, i) {
        "use strict";
        var n = i("9401241c289bc4a99b79");
        e.exports = function(e) {
            return Object(n(e))
        }
    },
    "3db7b7aef52b79d4d289": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var o = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("fa4e6c91b6a23ac6e195"));
        var n = (r.prototype.sign = function(e) {
            var t = [];
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var n = e[i];
                    t.push(i + "=" + n)
                }
            return t.sort(),
            (0,
            o["default"])(t.join("|") + "|" + this.secKey)
        }
        ,
        r);
        function r() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this.secKey = "pcw-9561de8a659f9e292d44bc"
        }
        t["default"] = new n
    },
    "3dec7d080e821aa42743": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            i.exports = {
                win: "01010031010000000000",
                win_tw: "01010031010010000000",
                Mac: "01080031010000000000",
                Mac_tw: "01080031010010000000",
                flash: "01010021010000000000",
                flash_tw: "01010021010010000000",
                aPad: "03020031010000000000",
                aPad_tw: "03020031010010000000",
                iPad: "03030031010000000000",
                iPad_tw: "03030031010010000000",
                phone: "02020031010000000000",
                phone_tw: "02020031010010000000"
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "3ebda80d5e01a06bc66d": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAE7UlEQVRYhe2YO2wcRRjH/9/cYy35AbZAQgkUyFJwGkfEimQoKAgtRqQLiRHGxmcpKYAOiVQUdECRFBfyQHnIEkgJjwqJtIAUOSEU+IgUUSACOPFl72737L3d/T6K9d3t7s29L0hIfNLqdmdmv/3N95q5Af4DQr2+aC2lp9NJOqggzxNhD4CnAIxUuwH8LoLbDPq+4sm1kTOVn/8VyNwcRid3GcuKZFER7e3mXRZZZ6Gzd+46p6e+RmngkNkZpBZmjGMJJSeUooluPhAXZsn7TB+cX3NOZdbgDgSy+JaxZzghq0rR/n7g4sIsN2yfDo996txuN7Yl5HbGeDlFclkpGh0cXl1YxHKZXhvKOt+0GqeadTiZ9NEUydWHBQgAimgkRXK1spKabzVOa0knk34lqXBFETWdxCCFRdhjHDKyla90/Q2QxeX01HAC1xXRiO6FhyUsYtk+DoydruTifcnwQ3YGqWGFy10DfmICqaFIk7gO6O1HOlahiEaGlVzOzmA2nvURdy7MGMd6yuKtQkOTb5nY2OCu1ChF+xcOGMcb2qs3uTmMJpSc6BoQALbMhia2TGzmGX93CZqAvJ+bQyRZa5CTu4zlngt1WWfJAogA02Rs3OscVCmamNxlLGshFcliT4BAU0uCACKgUOgSNMaiAMDKpPZ1uxZHITWWtE2oHUgiQqkkuNchqCLaa2VS+yKQaVIv9gzYBLJuSQIhgLVswb37nYEaUAcjkAoy2xdkWeNu2wzgAJCqWhQolwX3NxkirVVSiEkFDejd1UDTmCSiWlyGr60tQT7fGpQIUxFIALv7gtRYUmwTRKjHJVBzOxGw7QgePGgJWmMKIAn9bSJ0MVkugnbIwnAUSianEpQoLWiIaTAbiBaWrIHGAKv3FTcoUa1cH0BKd9v5BtHFZNmMgKGJ24kA1wOKJYmChpiqlvyjP8hGd4ctGQWlOmyoz/MEJSsCWmNSACCChu1RV6Jzd7nQAKLi2Y4QLADfE1g7oGGmABL0Y1+Q28VGSNsM6iPqcQiCPkZDk2EOammYKQkADvhasp8ccrdRmDeQz3PIarFEATSu14cCM2DZfK2qXgHASNa9xSLrvVMCzNIcAtFVJz4m/suQ9fFL7q0IZPAROtcfZDOIUKKgOWh1HABAJMJSg7zzp5NllnxfkA0QmmURuotq9wx58FfRy4Z1U/ihsmK8k1L4qCfKU9uRx7uH0rHM1q060cJOBHgi745fdD8O64pky/nrzklmudETZEzaJYoO0If89Pkv7sm4rghkZg2uzTjCIlbfkBqoJr4GCPBFbM91D+vOhxrqztjpSs5jHGWR7v5B6SARsyg0VgQgIiw+H3lsVb+okK4RACorqfkE0WednmKUy4JCMVjTmsZftbiret0UCLNgYfySe6HphFt92FlJv5okXFREw52Aeh5gFhi+H4BCmzD1OGSILeDXxy/6V1rpbQkJAMU3jWeG07KqFD3bCagIYFmCbSda3FWoJKkgSW564h5+/BJ+bacz0W7Ahzf9zd3in5t+IpknklkiGmo1nggwDEIyEVg2bkWBmL7gvS/W3eUXvsVGJxNva8mw/PYGHn3SMJYUyaJSNNVuvO8Dti1gEbBQDuCzxbJ35ukv0bhtGhRkWKyl9LSRoJeI5DmqH+xXt/wl7Bzsi9APpS35buJC7wf7/8ug5B8O1Rfght+QCwAAAABJRU5ErkJggg=="
    },
    "41fc02f452bd7cebf8a1": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            i.exports = {
                locale: "cn_s",
                isTraditionalChinese: function() {
                    var e = !1
                      , t = this.locale;
                    return "tw_t" !== t && "cn_t" !== t || (e = !0),
                    e
                },
                isTWLocale: function() {
                    var e = !1
                      , t = this.locale;
                    return "tw_t" !== t && "tw_s" !== t || (e = !0),
                    e
                },
                local: function() {
                    return this.locale
                },
                setLocale: function(e) {
                    this.locale = e
                }
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "421f2d6f2d3b0788eae4": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var n = {}
              , o = {}
              , r = {}
              , a = 0
              , s = "_Q_test"
              , l = {
                getItem: function(e) {
                    return n[e]
                },
                setItem: function(e, t) {
                    n[e] = t
                },
                removeItem: function(e) {
                    delete n[e]
                }
            }
              , c = function() {
                try {
                    return window.sessionStorage.setItem(s, "1"),
                    window.sessionStorage.removeItem(s),
                    window.sessionStorage
                } catch (e) {}
                return l
            }()
              , u = function u() {
                0 === a && (clearTimeout(a),
                a = setTimeout(function() {
                    for (var e in a = 0,
                    o)
                        c.setItem(e, o[e]),
                        delete o[e];
                    for (var t in r)
                        c.removeItem(t),
                        delete r[e]
                }, 1e3))
            };
            i.exports = {
                read: function(e) {
                    return n[e] || (n[e] = c.getItem(e)),
                    n[e]
                },
                write: function(e, t) {
                    n[e] = t,
                    o[e] = t,
                    u()
                },
                remove: function(e) {
                    delete n[e],
                    r[e] = 0,
                    u()
                }
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "43dece7ece229ff96ccd": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("9f02978f1998980c265b"));
        var l, o = (function a(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(c, l = n["default"]),
        c.prototype.append = function(e) {
            this._switch && this._itemList.push(e)
        }
        ,
        c.prototype.destroy = function() {}
        ,
        c.prototype.enable = function(e) {
            if (this._switch = e,
            !this._switch) {
                for (var t = 0; t < this._itemList.length; t++)
                    this._itemList[t].destroy();
                this._itemList.length = 0
            }
        }
        ,
        c.prototype.update = function() {
            if (this._switch)
                for (var e = null, t = null, i = 0; i < this._itemList.length; i++) {
                    if ((e = this._itemList[i]).update(),
                    e.isMove() || e.isStop())
                        if (e.getX() > this._width)
                            e.recover();
                        else {
                            if (e.getX() <= -e.getWidth()) {
                                e.destroy(),
                                this._itemList.splice(i, 1),
                                i--,
                                t = null;
                                break
                            }
                            t && t.isStop() && t.getX() + t.getWidth() + this._gap > e.getX() ? e.stop() : e.isMove() && e.isHover() ? e.stop() : !e.isStop() || e.isHover() || t && t.isStop() || e.start(this._view, e.getX(), 0, this._speed)
                        }
                    else if (e.isReady())
                        if (t) {
                            if (t.isMove() || t.isStop()) {
                                var n = t.getX() + t.getWidth() + this._gap;
                                n <= this._width && (this._width - n > this._speed + 1 ? e.start(this._view, this._width, 0, this._speed) : e.start(this._view, n, 0, this._speed))
                            }
                        } else
                            e.start(this._view, this._width, 0, this._speed);
                    t = e
                }
        }
        ,
        c.prototype.setWidth = function(e) {
            this._width = e,
            this.__refresh()
        }
        ,
        c.prototype.setTime = function(e) {
            this._time = e,
            this.__refresh()
        }
        ,
        c.prototype.setTop = function(e) {
            this._view.style.top = e + "px"
        }
        ,
        c.prototype.__refresh = function() {
            this._speed = Math.round(this._width / (60 * this._time) * 10) / 10;
            for (var e = 0, t = null; e < this._itemList.length; e++)
                (t = this._itemList[e]).isMove() && t.start(this._view, t.getX(), 0, this._speed)
        }
        ,
        c);
        function c(e, t, i, n, o) {
            !function a(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c);
            var r = function s(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, l.call(this));
            return r._parent = e,
            r._view = null,
            r._time = t,
            r._width = i,
            r._gap = o,
            r._itemList = [],
            r._speed = 0,
            r._switch = !0,
            r._view = document.createElement("div"),
            r._view.style.width = "100%",
            r._view.style.position = "absolute",
            r._view.style.left = "0px",
            r._view.style.top = n + "px",
            r._view.style["pointer-events"] = "none",
            r._parent.appendChild(r._view),
            r.__refresh(),
            r
        }
        t["default"] = o
    },
    "44b23fa0638ec66d909a": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMxJREFUSA3tVcENAjEMc0+MwRToBKwA7MFQ7AGsAOjEFMxBaZvyQLJVeurrdH30kaRObEspMJ+CAi7ln9sd3v4E+GWh/s+0e6FzR6xu1y69aAoeEcOgCRNY2Eh58v5hjCw4/h7W/quGMRgPVXyZGZC6YXMOU+xJhoTcBf39QBJoxSBIwo9mICbiMDraioHsoBlQD7TWqkMtA6m1aqAZTNQDJYT2ptYD1UF6MxkPwv6OKzZtQaVCbTxiIu+i+DnAArUwvD5/ODw5R38V+ABR0zIlu+Q80gAAAABJRU5ErkJggg=="
    },
    "458af3e271aa64a9b91f": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            refresh: {
                currentTime: -1,
                refreshing: !1
            },
            pingback: {
                firstPlayBase: !0,
                movieFirstPlay: !0
            },
            firstVrs: !0,
            send603: !1,
            firstPlay: !0,
            check_vip: !1
        }
    },
    "466d284dd3ebdb570244": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAC91BMVEUAAAAAAAAEAwEAAAABAAEGBQIAAAABAQACAQEAAAAAAAD4MGT8xcCTGzNTFxe9gjOjhTJUPCbzByz/0gD+ysb+yVDyL2LyL2HlLV3onSrSoSD+vkL+tzr3L2P5tzzpLl7ztDyxOhnRKVXfK1q1JErUK1bmqjqxJ0r+tj34cBn2uQDBCwL/pSL8oRX4MGP9tzrsYhr1L2PweWzmVRj4tDmzBQD0L2L4rTHdWU/xsTnYxgbdThDwoyvQww2jUg/mrz3WhT3IPleokBFgSA/+rzD/yz35MGTzUQfuRkr4XBv2cR/7uTzywBj5trD7niD0wkvv2gfgWRXmLVzvmzCgAwDj2A31pCrMVBDzrKnYKlfqrKforT2SFC21RBekpAJbIwrboHT94gDzZFjqJTz5zwD8v0T65xPqOkX4m5HhEzX2WxjyqAC7BwPVWgDuZRXtUUztWQ31zgD1XSH24xL5n5fzfin7qy3cMT/WHjrpoADvgXbXeQDovAD2MGPpgXbp3A3slo/QThvUUiHBcQDnv1CrEy7mnZX6MGTyUAD/5gD4WBD1Uwb2Vgr+uTv8Xh35WhT/dgDzHzj7XBj/vgj/ggD7t7D1k4n1jYL0h3vybGHxZl7xYVvyQEj/yAD/ewD5rKTye23xdmjxcGTyUlPzREv0EDD/mQj/igL/bwD4pp7yf3LyWFbySU7zOkbzNUT0MEHzKz/+1yL/qwT/nwP+pAL/2QD/7Lz2nJL2mI7/wGbyXFjyTlD/r0T+mz/0Jjz+wzP/yS3+4Br/tQX3XQH/3wD/kgD/78b8wbv7vLb5sqv/36L/6J74opr3n5b/1pPzg3fyVVT/4lD/oEL8kDb9szX1GDXVJwD/0c7/8cv9zsr/6a3/0Gf7jDP5fCb5dyHPEhn+5BfSJArJFwT/////1YP/32r/q0j/pkj9lDf7hy//3Cz6gSr+zyj+YSP9YCD/zBbfYADvXQD/9uD/5JP/qUn+o0bqMDvhIC3cDSX9wyTbCiToZQDWVwDR55+PAAAAh3RSTlMAAwcLFg4TERofJOX+LCQdExL+/v39tahrT0T98te5hIFcWU09OzIY/v79+/rv6+PEwLqnoZ+dkYBuamRhWEE8OSonGP349fXv7u3SurayoKCTj4V9e3dzamZYVkxMNjIp+fb27Oro5uPj49/e3tbR0dHQz83Hwrazq6CYkY6MioiCfG9sakbddbzHAAAFFklEQVRYw+3YV1ATURQGYHf37iYh0lSUoggi9t5777333nvvva9RItHQVBAQpdhDFQUpAiogVREpUuy9dx88N2smoIzZDQ++eGYyk3355j/nnrszSQWuCIIgye7mbTbDlwp6F0bsmrNQdYEph1K3Khg12tiRJFEOxV7KstVqi2gKGEJvpXsTVmrHMAxNUcDo3ZGUrWGIEGNobq8vAwrVhpWCUhtmLAUGl3CGJO1ZthZC4/vAjM0pEooQTkGYamxVhGqxbHOYMUxnz7hx04AS5pBk3T4QxrAJWAwj6rbK+VrFu3eqDDYRBpGUHStFaATbxAiGvCHZ84bz9YpVAJqAEwlgauKepKw5QqiFS1hygKfz9WsYAkcAA6MZgWqzLIRpl+rqcvFmAATCUEVjiCOEqQkDroGQ0WGvU26uLmEaaDAFjiDGsOp4BrU7ctz7VKobBErGkLOzKTgCZmPO4EJLjx45fFwd6CKMKMDTcxvvOMCY2sO60CIR6pd2GiBvr1SAQAq7OY/mHYckKXXRwJzxSbsEgby9oDU3VwjVnTdDkABhi0Zz3U9c9jl96SiWgAJoC823KwI7mKKZtefOup844wOtYQlDLXh3RXAFDmN74bwawpE4qAWDh8wbgg8w4plXfoPaIYHvQ2BEaN3Bg6WgGaNat17cYJgAB+LQaNLJ2yWhtIKGPxrEyaabCHFwV/NPloDci9808KgcIpN1gAEJ6mpSpUoa6FPRm8BYJTBxsuX42PkzNJLsrsRBn4u+BwUHxvZ++PAZxOkBcQQMhzEatajg25eChllv/eJ9g81yEt4nZafHyTbxjwNpDFs3LC4uysrKeqtw8otvlBiaq1R6pCfEyGaJ+G8h2bHv3l91VXHMyS8xJRAPxyM0XSaz5M2QZMf9+zWO/zGniNCg4Af330V75EBXg/h2BT317OuwH0uYUTiFp/gGWd3PVr7OfhYnq4y74nveLR0cMMR1FZ4SD3GUyqQkvDo9+TPM5H379nEQdJWR4OsbFGgWmvS6ckjIeiFpxAscHQHCEnSVEhoenpOQC0Ne2AXRAhg0/NAhgLCEzyo8MTE3NlbZeKdEzOAR876aXQ4c0ED+cOTx0FXwRgOJWB2G4H81V7zSQP4KtRPcARSGU/jfqY4vXwKEJfUG+n2NGcYp/Bl1nMk7WjbrjyFHf4XiiTxaNYfrCCv84zBiicTAYKrt9pb9r9bPzIiIUhVaMlxHvBm1g8QgAWXQ7N7TyEfyFzFbuZUR5lC0iEGYMrCt//zJ43rRqpVCGeyQFEiYEkuW5OdBVy8KewhlwAGIVGdC4rHQ1Qd5dAz3JhYMYQqvtNGA55kf60WpOms3WHgmOPzh9/IiI6IKp9CUHox2F42a5ec9jooZreNa6rzwkmX5kXJVZ1F5GBJ20bZ+ZoRqStkMgYtfW+KpAzKi/0xDlCqdu4hPPVOunY3WgLAm0+rUMeZ+XvBwVj8aVJLhiDo21k1vQfXqtWaMMZZ0jEeEukT25hit0bapvLp1204WlpYWY4Y0atTWGDt/jQPXYqTZLorLjhGT9gPl1VtZmFKaMh7ZuHEnYHQ5oqFmEzmHJLu2ql7PeiJnaKEhvhaE7ivf09psaFeKNOlqM1De1KYH9Wd1MwFGp0PbzLayspLjZmjqV5Ga4h4IXm8OU8v27Tt1My1t4Da5wowuB6BSxQna4p753PayjN8Wmu+bjCPK2lrdiHbntIbef2HouIdCpQr/61/WT7lu/CLKSHzPAAAAAElFTkSuQmCC"
    },
    "46a6014a9c7af6bb18f4": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            version: "2.2.12"
        }
    },
    "472c8e0e64ce03027885": function(e, t, i) {
        var n;
        (n = function(e, t, i) {
            try {
                function n(e) {
                    if ("undefined" == typeof ArrayBuffer || "undefined" == typeof Float64Array || "undefined" == typeof Uint8Array)
                        return "iloveiqiyi";
                    var t = new ArrayBuffer(16384)
                      , i = new Int32Array(t)
                      , n = new Uint8Array(t)
                      , o = new Int8Array(t)
                      , r = new Int32Array(t)
                      , a = 1760
                      , s = 0
                      , l = Math.floor
                      , c = Math.abs
                      , u = Math.min
                      , f = 0;
                    i[0] = 255;
                    for (var d = Math.imul || function(e, t) {
                        return (65535 & e) * (65535 & t) + ((e >>> 16 & 65535) * (65535 & t) + (65535 & e) * (t >>> 16 & 65535) << 16 >>> 0) | 0
                    }
                    , p = 0, h = 0; h < e.length; ++h) {
                        55296 <= (s = e.charCodeAt(h)) && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++h)),
                        s <= 127 ? ++p : p += s <= 2047 ? 2 : s <= 65535 ? 3 : s <= 2097151 ? 4 : s <= 67108863 ? 5 : 6
                    }
                    var _ = new Array(p + 1)
                      , g = 0;
                    i[51] = 3920,
                    i[54] = 8328;
                    var y = g + p;
                    for (h = 0; h < e.length; ++h) {
                        if (55296 <= (s = e.charCodeAt(h)) && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++h)),
                        s <= 127) {
                            if (y <= g)
                                break;
                            _[g++] = s
                        } else if (s <= 2047) {
                            if (y <= g + 1)
                                break;
                            _[g++] = 192 | s >> 6,
                            _[g++] = 128 | 63 & s
                        } else if (s <= 65535) {
                            if (y <= g + 2)
                                break;
                            _[g++] = 224 | s >> 12,
                            _[g++] = 128 | s >> 6 & 63,
                            _[g++] = 128 | 63 & s
                        } else if (s <= 2097151) {
                            if (y <= g + 3)
                                break;
                            _[g++] = 240 | s >> 18,
                            _[g++] = 128 | s >> 12 & 63,
                            _[g++] = 128 | s >> 6 & 63,
                            _[g++] = 128 | 63 & s
                        } else if (s <= 67108863) {
                            if (y <= g + 4)
                                break;
                            _[g++] = 248 | s >> 24,
                            _[g++] = 128 | s >> 18 & 63,
                            _[g++] = 128 | s >> 12 & 63,
                            _[g++] = 128 | s >> 6 & 63,
                            _[g++] = 128 | 63 & s
                        } else {
                            if (y <= g + 5)
                                break;
                            _[g++] = 252 | s >> 30,
                            _[g++] = 128 | s >> 24 & 63,
                            _[g++] = 128 | s >> 18 & 63,
                            _[g++] = 128 | s >> 12 & 63,
                            _[g++] = 128 | s >> 6 & 63,
                            _[g++] = 128 | 63 & s
                        }
                    }
                    _[g] = 0,
                    n.set(_, 5136),
                    e = 5136;
                    var b, m, v, A, E, T, w, S, C, P, R, I, L, O, k, N, x, M, D, V, F, B, U, Y, G, H, Q, q, W, j, z, K, J, X, Z, $, ee, te, ie, ne, oe, re, ae, se, le, ce, ue, fe, de, pe, he, _e, ge, ye, be, me, ve, Ae, Ee, Te, we, Se = 0, Ce = 0, Pe = 0, Re = 0, Ie = (s = 0,
                    t = 0,
                    0), Le = 0, Oe = (f = 0,
                    0), ke = 0, Ne = 0, xe = 0, Me = 0, De = 0, Ve = 0, Fe = 0, Be = 0, Ue = 0, Ye = 0, Ge = 0, He = 0, Qe = 0, qe = 0, We = 0, je = 0, ze = 0, Ke = 0, Je = 0, Xe = 0, Ze = 0, $e = 0, et = 0, tt = 0, it = 0, nt = 0, ot = 0, rt = 0, at = 0, st = 0, lt = 0, ct = 0, ut = 0, ft = 0, dt = 0, pt = 0, ht = 0, _t = 0, gt = 0, yt = 0, bt = 0, mt = 0, vt = 0, At = 0, Et = 0;
                    a = (we = a) + 304 | 0,
                    b = 4 + (Ee = (Te = we) + 40 | 0) | 0,
                    m = 8 + Ee | 0,
                    s = 12 + Ee | 0,
                    U = 16 + Ee | 0,
                    K = 20 + Ee | 0,
                    oe = 24 + Ee | 0,
                    _e = 28 + Ee | 0,
                    me = 32 + Ee | 0,
                    ve = 36 + Ee | 0,
                    Ae = 40 + Ee | 0,
                    v = 44 + Ee | 0,
                    A = 48 + Ee | 0,
                    E = 52 + Ee | 0,
                    T = 56 + Ee | 0,
                    w = 60 + Ee | 0,
                    S = 64 + Ee | 0,
                    C = 68 + Ee | 0,
                    P = 72 + Ee | 0,
                    R = 76 + Ee | 0,
                    I = 80 + Ee | 0,
                    L = 84 + Ee | 0,
                    O = 88 + Ee | 0,
                    k = 92 + Ee | 0,
                    N = 96 + Ee | 0,
                    x = 100 + Ee | 0,
                    M = 104 + Ee | 0,
                    D = 108 + Ee | 0,
                    V = 112 + Ee | 0,
                    F = 116 + Ee | 0,
                    B = 120 + Ee | 0,
                    Y = 124 + Ee | 0,
                    G = 128 + Ee | 0,
                    H = 132 + Ee | 0,
                    Q = 136 + Ee | 0,
                    q = 140 + Ee | 0,
                    l = 144 + Ee | 0,
                    c = 148 + Ee | 0,
                    W = 152 + Ee | 0,
                    j = 156 + Ee | 0,
                    z = 160 + Ee | 0,
                    t = 164 + Ee | 0,
                    J = 168 + Ee | 0,
                    X = 172 + Ee | 0,
                    Z = 176 + Ee | 0,
                    $ = 180 + Ee | 0,
                    ee = 184 + Ee | 0,
                    te = 188 + Ee | 0,
                    ie = 192 + Ee | 0,
                    u = 196 + Ee | 0,
                    ne = 200 + Ee | 0,
                    re = 204 + Ee | 0,
                    ae = 208 + Ee | 0,
                    se = 212 + Ee | 0,
                    le = 216 + Ee | 0,
                    ce = 220 + Ee | 0,
                    ue = 224 + Ee | 0,
                    fe = 228 + Ee | 0,
                    de = 232 + Ee | 0,
                    pe = 236 + Ee | 0,
                    he = 240 + Ee | 0,
                    ge = 244 + Ee | 0,
                    ye = 248 + Ee | 0,
                    be = 252 + Ee | 0,
                    Pe = 78,
                    qe = Qe = He = Ge = Ye = Se = Ce = Ue = Be = Fe = Ve = De = Me = xe = Ne = ke = Oe = f = Le = Ie = 0;
                    e: for (; ; )
                        switch (0 | Pe) {
                        case 62:
                            break e;
                        case 145:
                            We = 136;
                            break e;
                        case 112:
                            ut = qe,
                            ct = Qe,
                            st = Ge,
                            at = Ye,
                            rt = Se,
                            ot = Ce,
                            nt = Ue,
                            it = Be,
                            tt = Fe,
                            et = Ve,
                            $e = De,
                            Ze = Me,
                            Xe = xe,
                            Je = ke,
                            Ke = Oe,
                            ze = f,
                            je = Le,
                            Pe = 99,
                            Ne = 0 | r[Te + ((lt = He) + 1588902052 + -1 + -1588902052 + -1250383377 - (Re = Ie) + 1250383377 << 2) >> 2],
                            qe = ut,
                            Qe = ct,
                            He = lt,
                            Ge = st,
                            Ye = at,
                            Se = rt,
                            Ce = ot,
                            Ue = nt,
                            Be = it,
                            Fe = tt,
                            Ve = et,
                            De = $e,
                            Me = Ze,
                            xe = Xe,
                            ke = Je,
                            Oe = Ke,
                            f = ze,
                            Le = je,
                            Ie = Re;
                            continue e;
                        case 111:
                            Pe = (0 | (je = He)) == (0 | (ut = Ie)) ? 110 : 107,
                            qe = ft = qe,
                            Qe = Re = Qe,
                            He = je,
                            Ge = ze = Ge,
                            Ye = Ke = Ye,
                            Se = Je = Se,
                            Ce = Xe = Ce,
                            Ue = Ze = Ue,
                            Be = $e = Be,
                            Fe = et = Fe,
                            Ve = tt = Ve,
                            De = it = De,
                            Me = nt = Me,
                            xe = ot = xe,
                            Ne = rt = Ne,
                            ke = at = ke,
                            Oe = st = Oe,
                            f = lt = f,
                            Le = ct = Le,
                            Ie = ut;
                            continue e;
                        case 110:
                            Pe = 0 < (0 | (Ze = Ce)) ? 109 : 107,
                            qe = Re = qe,
                            Qe = je = Qe,
                            He = ze = He,
                            Ge = Ke = Ge,
                            Ye = Je = Ye,
                            Se = Xe = Se,
                            Ce = Ze,
                            Ue = $e = Ue,
                            Be = et = Be,
                            Fe = tt = Fe,
                            Ve = it = Ve,
                            De = nt = De,
                            Me = ot = Me,
                            xe = rt = xe,
                            Ne = at = Ne,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft = Ie;
                            continue e;
                        case 109:
                            je = qe,
                            ze = Qe,
                            Ke = He,
                            Je = Ge,
                            Xe = Ye,
                            Ze = Se,
                            $e = Ce,
                            et = Ue,
                            tt = Be,
                            it = Fe,
                            nt = Ve,
                            ot = De,
                            rt = Me,
                            at = xe,
                            st = ke,
                            lt = Oe,
                            ct = f,
                            ut = Le,
                            ft = Ie,
                            Pe = 99,
                            Ne = 0 | r[Te >> 2],
                            qe = je,
                            Qe = ze,
                            He = Ke,
                            Ge = Je,
                            Ye = Xe,
                            Se = Ze,
                            Ce = $e,
                            Ue = et,
                            Be = tt,
                            Fe = it,
                            Ve = nt,
                            De = ot,
                            Me = rt,
                            xe = at,
                            ke = st,
                            Oe = lt,
                            f = ct,
                            Le = ut,
                            Ie = ft;
                            continue e;
                        case 107:
                            Pe = ((ft = Ie) - 1017329338 + 1 + 1017329338 | 0) < (0 | (ze = He)) ? 106 : 105,
                            qe = Re = qe,
                            Qe = je = Qe,
                            He = ze,
                            Ge = Ke = Ge,
                            Ye = Je = Ye,
                            Se = Xe = Se,
                            Ce = Ze = Ce,
                            Ue = $e = Ue,
                            Be = et = Be,
                            Fe = tt = Fe,
                            Ve = it = Ve,
                            De = nt = De,
                            Me = ot = Me,
                            xe = rt = xe,
                            Ne = at = Ne,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft;
                            continue e;
                        case 106:
                            Pe = 99,
                            Ne = 0,
                            qe = je = qe,
                            Qe = ze = Qe,
                            He = Ke = He,
                            Ge = Je = Ge,
                            Ye = Xe = Ye,
                            Se = Ze = Se,
                            Ce = $e = Ce,
                            Ue = et = Ue,
                            Be = tt = Be,
                            Fe = it = Fe,
                            Ve = nt = Ve,
                            De = ot = De,
                            Me = rt = Me,
                            xe = at = xe,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft = Ie;
                            continue e;
                        case 105:
                            ze = Qe,
                            Je = Ge,
                            Xe = Ye,
                            Ze = Se,
                            $e = Ce,
                            et = Ue,
                            tt = Be,
                            it = Fe,
                            nt = Ve,
                            ot = De,
                            rt = Me,
                            at = xe,
                            st = ke,
                            lt = Oe,
                            ct = f,
                            ut = Le,
                            ft = Ie,
                            Pe = 99,
                            Ne = 0 | r[(je = qe) + ((Ke = He) << 2) >> 2],
                            qe = je,
                            Qe = ze,
                            He = Ke,
                            Ge = Je,
                            Ye = Xe,
                            Se = Ze,
                            Ce = $e,
                            Ue = et,
                            Be = tt,
                            Fe = it,
                            Ve = nt,
                            De = ot,
                            Me = rt,
                            xe = at,
                            ke = st,
                            Oe = lt,
                            f = ct,
                            Le = ut,
                            Ie = ft;
                            continue e;
                        case 104:
                            Pe = (0 | (ze = He)) == (14 & (Pe = De - 520486856 + 40 + 520486856 >> 6 << 4) | 14 ^ Pe | 0) ? 103 : 102,
                            qe = Re = qe,
                            Qe = je = Qe,
                            He = ze,
                            Ge = Ke = Ge,
                            Ye = Je = Ye,
                            Se = Xe = Se,
                            Ce = Ze = Ce,
                            Ue = $e = Ue,
                            Be = et = Be,
                            Fe = tt = Fe,
                            Ve = it = Ve,
                            De = nt = De,
                            Me = ot = Me,
                            xe = rt = xe,
                            Ne = at = Ne,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft = Ie;
                            continue e;
                        case 103:
                            Pe = 99,
                            Ne = ((ot = De) << 3) - 906020365 + 256 + 906020365 | 0,
                            qe = je = qe,
                            Qe = ze = Qe,
                            He = Ke = He,
                            Ge = Je = Ge,
                            Ye = Xe = Ye,
                            Se = Ze = Se,
                            Ce = $e = Ce,
                            Ue = et = Ue,
                            Be = tt = Be,
                            Fe = it = Fe,
                            Ve = nt = Ve,
                            De = ot,
                            Me = rt = Me,
                            xe = at = xe,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft = Ie;
                            continue e;
                        case 102:
                            Pe = ((ft = Ie) - 2136007327 + 1 + 2136007327 | 0) < (0 | (ze = He)) ? 101 : 100,
                            qe = Re = qe,
                            Qe = je = Qe,
                            He = ze,
                            Ge = Ke = Ge,
                            Ye = Je = Ye,
                            Se = Xe = Se,
                            Ce = Ze = Ce,
                            Ue = $e = Ue,
                            Be = et = Be,
                            Fe = tt = Fe,
                            Ve = it = Ve,
                            De = nt = De,
                            Me = ot = Me,
                            xe = rt = xe,
                            Ne = at = Ne,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft;
                            continue e;
                        case 101:
                            Pe = 99,
                            Ne = 0,
                            qe = je = qe,
                            Qe = ze = Qe,
                            He = Ke = He,
                            Ge = Je = Ge,
                            Ye = Xe = Ye,
                            Se = Ze = Se,
                            Ce = $e = Ce,
                            Ue = et = Ue,
                            Be = tt = Be,
                            Fe = it = Fe,
                            Ve = nt = Ve,
                            De = ot = De,
                            Me = rt = Me,
                            xe = at = xe,
                            ke = st = ke,
                            Oe = lt = Oe,
                            f = ct = f,
                            Le = ut = Le,
                            Ie = ft = Ie;
                            continue e;
                        case 100:
                            ze = Qe,
                            Je = Ge,
                            Xe = Ye,
                            Ze = Se,
                            $e = Ce,
                            et = Ue,
                            tt = Be,
                            it = Fe,
                            nt = Ve,
                            ot = De,
                            rt = Me,
                            at = xe,
                            st = ke,
                            lt = Oe,
                            ct = f,
                            ut = Le,
                            ft = Ie,
                            Pe = 99,
                            Ne = 0 | r[(je = qe) + ((Ke = He) << 2) >> 2],
                            qe = je,
                            Qe = ze,
                            He = Ke,
                            Ge = Je,
                            Ye = Xe,
                            Se = Ze,
                            Ce = $e,
                            Ue = et,
                            Be = tt,
                            Fe = it,
                            Ve = nt,
                            De = ot,
                            Me = rt,
                            xe = at,
                            ke = st,
                            Oe = lt,
                            f = ct,
                            Le = ut,
                            Ie = ft;
                            continue e;
                        case 99:
                            ft = f,
                            Le = ke,
                            Pe = 119,
                            f = 0 - (0 - ((-1973195180 & (pt = ~(ht = -1 & ~(-2 | ~(Ze = (ze = (Ie = 0 - (0 - ((-405859795 & (ze = ~(Ke = -1 & ~(1 | ~(0 - (0 - (He = ((-1404706964 & (je = ~(Ye = -1 & ~(1 | ~(((1 ^ (Ie = 0 | r[Ee + (Me << 2) >> 2])) & Ie) - (0 - Ne))))) | Ye & (He = 1404706963)) ^ (-1404706964 & (Ke = ~(ze = (-2 ^ Ie) & Ie)) | ze & He) | ~(je | Ke) & (-1404706964 | He)) - (0 - ((-2 ^ Ne) & Ne)) | 0) + (0 - ((1 ^ Ge) & Ge))))))) | Ke & (Ze = 405859794)) ^ (-405859795 & (Ye = ~(je = (-2 ^ Ge) & Ge)) | je & Ze) | ~(ze | Ye) & (-405859795 | Ze)) + (0 - (-1 & ~(-2 | ~(Ie + 125479053 + Ne - 125479053))))) | 0) << (Ye = (Ze = 0 - (0 - ((Ze = (0 | Me) % 4 | 0) << 2) - 1639813410) - 1628865018 + ((0 | d(Ze + -946902778 + -1 + 946902778 | 0, Ze)) / 2 | 0) + 1628865018 | 0) + -705355747 + -1639813405 + 705355747 | 0)) & (Ze = Ie >>> (-135710764 - Ze + 1775524201 | 0)) | ze ^ Ze)))) | ht & (Re = 1973195179)) ^ (-1973195180 & (dt = 1859242101) | -1859242102 & Re) | ~(pt | dt) & (-1973195180 | Re)) + (0 - ((-2075741683 & (Ke = ~(je = -1 & ~(1 | ~(403699684 + ((1 ^ (je = 0 - (0 - f - 1859242102) | 0)) & je) + Ze + -403699684)))) | je & (Xe = 2075741682)) ^ (-2075741683 & (Je = ~(ze = (-2 ^ f) & f)) | ze & Xe) | ~(Ke | Je) & (-2075741683 | Xe)))) | 0,
                            Ne = Ze,
                            Me = 0 - (0 - Me - 1) | 0,
                            qe = $e = qe,
                            Qe = et = Qe,
                            Ge = tt = Ge,
                            Se = it = Se,
                            Ce = nt = Ce,
                            Ue = ot = Ue,
                            Be = rt = Be,
                            Fe = at = Fe,
                            Ve = st = Ve,
                            De = lt = De,
                            xe = ct = xe,
                            ke = ut = Oe,
                            Oe = ft;
                            continue e;
                        case 97:
                            Pe = (0 | (st = Me)) < 48 ? 95 : 63,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 95:
                            Ke = 0 - (0 - (-1 & ~(1 | ~Le)) + (0 - (Ge = (-1719848737 & ~(Ke = f & ~Oe | Oe & ~f) | Ke & (Ge = 1719848736)) ^ (-1719848737 & ~ke | ke & Ge)))) | 0,
                            Pe = 94,
                            Ie = 0 - (0 - (lt = De) + 1) >> 2,
                            Ge = ((373881474 & (Xe = ~(Ke &= 1 ^ Ke)) | Ke & (He = -373881475)) ^ (373881474 & (Ze = ~(Je = (-2 ^ Le) & Le)) | Je & He) | ~(Xe | Ze) & (373881474 | He)) - (0 - (-1 & ~(-2 | ~(Ne = Ge)))) | 0,
                            He = ((0 - (0 - (3 * (ct = Me) | 0) - 5) | 0) % 16 | 0) - 169207214 + (ut = xe) + 169207214 | 0,
                            qe = $e = qe,
                            Qe = et = Qe,
                            Ye = tt = Ye,
                            Se = it = Se,
                            Ce = nt = Ce,
                            Ue = ot = Ue,
                            Be = rt = Be,
                            Fe = at = Fe,
                            Ve = st = Ve,
                            De = lt,
                            Me = ct,
                            xe = ut,
                            ke = ft = ke,
                            Oe = dt = Oe,
                            f = pt = f,
                            Le = ht = Le;
                            continue e;
                        case 94:
                            Pe = ((at = De) + 1934808656 + 32 - 1934808656 >> 2 | 0) < (0 | (Xe = He)) ? 82 : 93,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 93:
                            Pe = (0 | (ht = Ie)) < (0 | (Xe = He)) ? 92 : 89,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 92:
                            Pe = 0 < (0 | (tt = Ce)) ? 91 : 90,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 91:
                            Je = qe,
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            Pe = 75,
                            Ne = 0 | r[Te + ((Ze = He) + (0 - (ht = Ie)) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 90:
                            Je = qe,
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            Pe = 75,
                            Ne = 0 | r[Te + ((Ze = He) + 692823717 + -1 - 692823717 + 2024697286 - (ht = Ie) - 2024697286 << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 89:
                            Pe = (0 | (Xe = He)) == (0 | (ht = Ie)) ? 88 : 85,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 88:
                            Pe = 0 < (0 | (tt = Ce)) ? 87 : 85,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 87:
                            Je = qe,
                            Xe = Qe,
                            Ze = He,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 75,
                            Ne = 0 | r[Te >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 85:
                            Pe = (0 - (0 - (ht = Ie) - 1) | 0) < (0 | (Xe = He)) ? 84 : 83,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 84:
                            Pe = 75,
                            Ne = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 83:
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 75,
                            Ne = 0 | r[(Je = qe) + ((Ze = He) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 82:
                            Pe = (0 | (Xe = He)) == ((-2004298390 & (je = ~(Re = De + 430907182 + 40 - 430907182 >> 6 << 4)) | Re & (Pe = 2004298389)) ^ (-2004298390 & (ze = -15) | 14 & Pe) | ~(je | ze) & (-2004298390 | Pe) | 0) ? 81 : 80,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 81:
                            Pe = 75,
                            Ne = ((st = De) << 3) - -256 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 80:
                            Pe = (0 - (0 - (ht = Ie) - 1) | 0) < (0 | (Xe = He)) ? 79 : 77,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 79:
                            Pe = 75,
                            Ne = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 78:
                            r[Ee >> 2] = -680876936,
                            r[b >> 2] = -389564586,
                            r[m >> 2] = 606105819,
                            r[s >> 2] = -1044525330,
                            r[U >> 2] = -176418897,
                            r[K >> 2] = 1200080426,
                            r[oe >> 2] = -1473231341,
                            r[_e >> 2] = -45705983,
                            r[me >> 2] = 1770035416,
                            r[ve >> 2] = -1958414417,
                            r[Ae >> 2] = -42063,
                            r[v >> 2] = -1990404162,
                            r[A >> 2] = 1804603682,
                            r[E >> 2] = -40341101,
                            r[T >> 2] = -1502002290,
                            r[w >> 2] = 1236535329,
                            r[S >> 2] = -165796510,
                            r[C >> 2] = -1069501632,
                            r[P >> 2] = 643717713,
                            r[R >> 2] = -373897302,
                            r[I >> 2] = -701558691,
                            r[L >> 2] = 38016083,
                            r[O >> 2] = -660478335,
                            r[k >> 2] = -405537848,
                            r[N >> 2] = 568446438,
                            r[x >> 2] = -1019803690,
                            r[M >> 2] = -187363961,
                            r[D >> 2] = 1163531501,
                            r[V >> 2] = -1444681467,
                            r[F >> 2] = -51403784,
                            r[B >> 2] = 1735328473,
                            r[Y >> 2] = -1926607734,
                            r[G >> 2] = -378558,
                            r[H >> 2] = -2022574463,
                            r[Q >> 2] = 1839030562,
                            r[q >> 2] = -35309556,
                            r[l >> 2] = -1530992060,
                            r[c >> 2] = 1272893353,
                            r[W >> 2] = -155497632,
                            r[j >> 2] = -1094730640,
                            r[z >> 2] = 681279174,
                            r[t >> 2] = -358537222,
                            r[J >> 2] = -722521979,
                            r[X >> 2] = 76029189,
                            r[Z >> 2] = -640364487,
                            r[$ >> 2] = -421815835,
                            r[ee >> 2] = 530742520,
                            r[te >> 2] = -995338651,
                            r[ie >> 2] = -198630844,
                            r[u >> 2] = 1126891415,
                            r[ne >> 2] = -1416354905,
                            r[re >> 2] = -57434055,
                            r[ae >> 2] = 1700485571,
                            r[se >> 2] = -1894986606,
                            r[le >> 2] = -1051523,
                            r[ce >> 2] = -2054922799,
                            r[ue >> 2] = 1873313359,
                            r[fe >> 2] = -30611744,
                            r[de >> 2] = -1560198380,
                            r[pe >> 2] = 1309151649,
                            r[he >> 2] = -145523070,
                            r[ge >> 2] = -1120210379,
                            r[ye >> 2] = 718787259,
                            r[be >> 2] = -343485551,
                            Pe = 74,
                            f = -271733879,
                            Oe = -1732584194,
                            ke = 271733878,
                            Ne = Le = 1732584193,
                            De = Me = xe = Ie = 0,
                            Ye = 1,
                            qe = rt = qe,
                            Qe = at = Qe,
                            He = st = He,
                            Ge = lt = Ge,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve;
                            continue e;
                        case 77:
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 75,
                            Ne = 0 | r[(Je = qe) + ((Ze = He) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 75:
                            Le = ke,
                            Pe = 73,
                            Ie = 506753693 + ((-234558882 & (Ke = ~(je = -1 & ~(1 | ~((He = ((-268273123 & (ze = ~(Je = -1 & ~(1 | ~(((1 ^ (Ie = 0 | r[Ee + (Me << 2) >> 2])) & Ie) - (0 - Ne))))) | Je & (He = 268273122)) ^ (-268273123 & (je = ~(Ke = -1 & ~(-2 | ~Ie))) | Ke & He) | ~(ze | je) & (-268273123 | He)) - 1134317627 + ((-2 ^ Ne) & Ne) + 1134317627 | 0) + 796911875 + (-1 & ~(1 | ~Ge)) + -796911875)))) | je & (Xe = 234558881)) ^ (-234558882 & (Je = ~(ze = (-2 ^ Ge) & Ge)) | ze & Xe) | ~(Ke | Je) & (-234558882 | Xe)) + ((-2 ^ (Ie = Ie - (0 - Ne) | 0)) & Ie) - 506753693 | 0,
                            qe = Ze = qe,
                            Qe = $e = Qe,
                            Ge = et = Ge,
                            Ye = tt = Ye,
                            Se = it = Se,
                            Ce = nt = Ce,
                            Ue = ot = Ue,
                            Be = rt = Be,
                            Fe = at = Fe,
                            Ve = st = Ve,
                            De = lt = De,
                            Me = ct = Me,
                            xe = ut = xe,
                            Ne = ft = Ne,
                            ke = dt = Oe,
                            Oe = pt = f,
                            f = ht = f;
                            continue e;
                        case 74:
                            Pe = 72,
                            xe = 0 - (0 - (Qe = xe) - 1) | 0,
                            qe = Xe = qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 73:
                            Pe = (0 | (0 | (st = Me)) % 4) < 2 ? 71 : 69,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 72:
                            Ke = qe,
                            Xe = He,
                            Ze = Ge,
                            $e = Ye,
                            et = Se,
                            tt = Ce,
                            it = Ue,
                            nt = Be,
                            ot = Fe,
                            rt = Ve,
                            at = De,
                            st = Me,
                            lt = xe,
                            ct = Ne,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 0 == (0 | o[e + (Je = Qe) >> 0]) ? 66 : 68,
                            qe = Ke,
                            Qe = Je,
                            He = Xe,
                            Ge = Ze,
                            Ye = $e,
                            Se = et,
                            Ce = tt,
                            Ue = it,
                            Be = nt,
                            Fe = ot,
                            Ve = rt,
                            De = at,
                            Me = st,
                            xe = lt,
                            Ne = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 71:
                            Pe = 67,
                            Ye = 4,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 69:
                            Pe = 67,
                            Ye = 2,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 68:
                            Pe = 74,
                            De = 0 - (0 - De - 1) | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 67:
                            Pe = 97,
                            f = 1763856666 + ((-861084163 & (Je = ~(ze = -1 & ~(1 | ~(0 - (0 - (Ne = (1172163969 & (Ke = ~(Xe = Ie >>> (-117621897 - (Ze = 0 - (0 - (7 * ((0 | Me) % 4 | 0) | 0) + (0 - Ye)) | 0) + 117621929 | 0))) | Xe & (Ne = -1172163970)) ^ (1172163969 & (ze = ~(Je = Ie << Ze)) | Je & Ne) | ~(Ke | ze) & (1172163969 | Ne)) + (0 - (-1 & ~(1 | ~Oe)))))))) | ze & (f = 861084162)) ^ (-861084163 & (Xe = ~(Ke = (-2 ^ Oe) & Oe)) | Ke & f) | ~(Je | Xe) & (-861084163 | f)) + ((-2 ^ Ne) & Ne) - 1763856666 | 0,
                            Me = Me + 1402583234 + 1 - 1402583234 | 0,
                            Ye = Ze,
                            qe = $e = qe,
                            Qe = et = Qe,
                            He = tt = He,
                            Ge = it = Ge,
                            Se = nt = Se,
                            Ce = ot = Ce,
                            Ue = rt = Ue,
                            Be = at = Be,
                            Fe = st = Fe,
                            Ve = lt = Ve,
                            De = ct = De,
                            xe = ut = xe,
                            ke = ft = ke,
                            Oe = dt = Oe,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 66:
                            Pe = 64,
                            Ce = (at = De) >> 2,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 64:
                            Pe = (0 | (at = De)) < 6 ? 62 : 60,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 63:
                            Pe = (0 | (st = Me)) < 64 ? 59 : 21,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 60:
                            Pe = 58,
                            Ge = 0 - (0 - (tt = Ce) - 1) | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 59:
                            Ke = f & (Ke = 0 | ~ke | 0 & ke) | f ^ Ke,
                            Ke = 794469430 + ((1 ^ Le) & Le) + (Ge = (Ke &= Ke ^ ~(0 | ~Oe | 0 & Oe)) & (Ge = -1 & ~(~(-1 & ~(~Oe | ~((659082404 & ~f | f & (Ge = -659082405)) ^ (0 | -1 & Ge)))) | ~ke)) | Ke ^ Ge) - 794469430 | 0,
                            Pe = 57,
                            Ie = 0 - (0 - (lt = De) + 1) >> 2,
                            Ge = 394913534 + ((-797466866 & (Xe = ~(Ke &= 1 ^ Ke)) | Ke & (He = 797466865)) ^ (-797466866 & (Ze = ~(Je = -1 & ~(-2 | ~Le))) | Je & He) | ~(Xe | Ze) & (-797466866 | He)) + (-1 & ~(-2 | ~(Ne = Ge))) - 394913534 | 0,
                            He = ((7 * (ct = Me) | 0) % 16 | 0) - (0 - (ut = xe)) | 0,
                            qe = $e = qe,
                            Qe = et = Qe,
                            Ye = tt = Ye,
                            Se = it = Se,
                            Ce = nt = Ce,
                            Ue = ot = Ue,
                            Be = rt = Be,
                            Fe = at = Fe,
                            Ve = st = Ve,
                            De = lt,
                            Me = ct,
                            xe = ut,
                            ke = ft = ke,
                            Oe = dt = Oe,
                            f = pt = f,
                            Le = ht = Le;
                            continue e;
                        case 58:
                            Pe = (0 | (Ze = Ge)) < 33 ? 56 : 54,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 57:
                            Pe = ((at = De) - 817781417 + 32 + 817781417 >> 2 | 0) < (0 | (Xe = He)) ? 33 : 55,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 56:
                            Pe = 54,
                            Ge = 33,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 55:
                            Pe = (0 | (ht = Ie)) < (0 | (Xe = He)) ? 53 : 47,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 54:
                            Pe = (248548091 + ((at = De) - -32 >> 2) + 8 - 248548091 | 0) < (0 | (Ze = Ge)) ? 50 : 52,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 53:
                            Pe = 0 < (0 | (tt = Ce)) ? 51 : 49,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 52:
                            Pe = 50,
                            Ge = 0 - (0 - ((at = De) - 721543188 + 32 + 721543188 >> 2) - 8) | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 51:
                            Je = qe,
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            Pe = 23,
                            Ne = 0 | r[Te + ((Ze = He) - 845217744 - (ht = Ie) + 845217744 << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 50:
                            Xe = Qe,
                            Ze = He,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = Ne,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 46,
                            qe = (xe = 0) | Rt(($e = Ge) << 2, r, 5136),
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            Ne = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 49:
                            Je = qe,
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            Pe = 23,
                            Ne = 0 | r[Te + ((Ze = He) - 1 + 1839362061 - (ht = Ie) - 1839362061 << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 161:
                            Pe = 157,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Ne = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 47:
                            Pe = (0 | (Xe = He)) == (0 | (ht = Ie)) ? 45 : 39,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 160:
                            Pe = (0 | (Xe = He)) < 10 ? 158 : 156,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 46:
                            Pe = (0 | (lt = xe)) < (0 | (Ze = Ge)) ? 42 : 40,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 159:
                            Pe = 157,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = Ne = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 45:
                            Pe = 0 < (0 | (tt = Ce)) ? 43 : 39,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 158:
                            Pe = 154,
                            He = He - 1241365298 + 32 + 1241365298 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 157:
                            Pe = 155,
                            Ne = -1 & ~(-16 | ~(Ne >> ((419482005 & ~(ze = -1 & ~(-29 | ~(Me << 2))) | ze & (Ke = -419482006)) ^ (419482001 | 4 & Ke)))),
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 43:
                            Je = qe,
                            Xe = Qe,
                            Ze = He,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 23,
                            Ne = 0 | r[Te >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 156:
                            Pe = 154,
                            He = He - -72 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 42:
                            Pe = 46,
                            xe = xe - 1417402377 + 1 + 1417402377 | (r[qe + (xe << 2) >> 2] = 0),
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 155:
                            Pe = (0 | (ct = Ne)) < 10 ? 153 : 151,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 154:
                            Xe = He + -735801710 + 16 + 735801710 << (((0 | (Je = Me - (0 - Ce) | 0)) % 4 | 0) << 3),
                            Ze = 0 | r[(Je = Te + (Je - (0 - (xe << 2)) >> 2 << 2) | 0) >> 2],
                            r[Je >> 2] = Ze & Xe | Ze ^ Xe,
                            Pe = 4,
                            Me = Me + 744675608 + 1 - 744675608 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 40:
                            Pe = 36,
                            xe = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 153:
                            Pe = 149,
                            Ne = Ne - 1763841430 + 48 + 1763841430 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 39:
                            Pe = ((ht = Ie) + -27115808 + 1 + 27115808 | 0) < (0 | (Xe = He)) ? 37 : 35,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 152:
                            Pe = 12,
                            xe = xe + 1905239980 + 1 - 1905239980 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 151:
                            Pe = 149,
                            Ne = Ne + 522724937 + 87 - 522724937 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 37:
                            Pe = 23,
                            Ne = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 150:
                            et = 128 << (((0 | Ce) % 4 | 0) << 3),
                            $e = ~(tt = 0 | r[(Je = Te + ((xe << 2) - 395027463 + Ce + 395027463 >> 2 << 2) | 0) >> 2]),
                            Ze = ~et,
                            Xe = -503206211,
                            r[Je >> 2] = (503206210 & $e | tt & Xe) ^ (503206210 & Ze | et & Xe) | ~($e | Ze) & (503206210 | Xe),
                            Pe = 146,
                            xe = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 36:
                            Pe = (0 | (lt = xe)) < (0 | (at = De)) ? 32 : 30,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 149:
                            o[Se + Me >> 0] = Ne,
                            Pe = 15,
                            Me = Me + -2060210203 + 1 + 2060210203 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 35:
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 23,
                            Ne = 0 | r[(Je = qe) + ((Ze = He) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 147:
                            o[Se + 32 >> 0] = 0,
                            Pe = 145,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 33:
                            Pe = (0 | (Xe = He)) == (14 & (Pe = De + 1999768042 + 40 + -1999768042 >> 6 << 4) | 14 ^ Pe | 0) ? 31 : 29,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 146:
                            Pe = (0 | (lt = xe)) < ((1388890711 & (je = ~(Re = De - -40 >> 6 << 4)) | Re & (Pe = -1388890712)) ^ (1388890711 & (ze = -15) | 14 & Pe) | ~(je | ze) & (1388890711 | Pe) | 0) ? 143 : 19,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 32:
                            Ze = o[e + xe >> 0] << (((0 | xe) % 4 | 0) << 3),
                            Xe = 0 | r[(Je = qe + (xe >> 2 << 2) | 0) >> 2],
                            r[Je >> 2] = Ze & Xe | Ze ^ Xe,
                            Pe = 36,
                            xe = xe - -1 | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 31:
                            Pe = 23,
                            Ne = 0 - (0 - ((st = De) << 3) - 256) | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 30:
                            for (Pe = 128 << (((0 | (Ce = 0 - (0 - De - 32) | 0)) % 4 | 0) << 3),
                            Re = 0 | r[(Ce = qe + (Ce >> 2 << 2) | 0) >> 2],
                            r[Ce >> 2] = Re & Pe | Re ^ Pe,
                            Ce = (0 | De) % 4 | 0,
                            Re = (Pe = Te) + 36 | 0; (0 | (Pe = Pe + 4 | (r[Pe >> 2] = 0))) < (0 | Re); )
                                ;
                            Pe = 28,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 143:
                            Pe = 141,
                            Me = 0,
                            qe = et = qe,
                            Qe = tt = Qe,
                            He = it = He,
                            Ge = nt = Ge,
                            Ye = ot = Ye,
                            Se = rt = Se,
                            Ce = at = Ce,
                            De = st = De,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = Ue = ke,
                            Oe = ft = Be = Oe,
                            f = dt = Fe = f,
                            Le = pt = Ve = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 29:
                            Pe = (0 - (0 - (ht = Ie) - 1) | 0) < (0 | (Xe = He)) ? 27 : 25,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 28:
                            Pe = 0 < (0 | (tt = Ce)) ? 26 : 16,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 141:
                            Pe = (0 | (st = Me)) < 16 ? 139 : 119,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 27:
                            Pe = 23,
                            Ne = 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it = Ce,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st = De,
                            Me = lt = Me,
                            xe = ct = xe,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 26:
                            Pe = 22,
                            xe = (st = De) + (0 - (it = Ce)) | 0,
                            qe = Je = qe,
                            Qe = Xe = Qe,
                            He = Ze = He,
                            Ge = $e = Ge,
                            Ye = et = Ye,
                            Se = tt = Se,
                            Ce = it,
                            Ue = nt = Ue,
                            Be = ot = Be,
                            Fe = rt = Fe,
                            Ve = at = Ve,
                            De = st,
                            Me = lt = Me,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 139:
                            He = (-529461708 & ~ke | ke & (He = 529461707)) ^ (-529461708 & ~f | f & He),
                            Ze = 0 - (0 - (-1 & ~(1 | ~Le)) + (0 - (Ge = (1514409254 & ~(He &= He ^ ~(0 | ~f | 0 & f)) | He & (Ge = -1514409255)) ^ (1514409254 & ~(Ze = (Oe ^ ~f) & Oe) | Ze & Ge)))) | 0,
                            Pe = 138,
                            Ie = (lt = De) - 1332493879 - 1 + 1332493879 >> 2,
                            Ge = 1330564622 + ((Ze &= 1 ^ Ze) & (He = -1 & ~(-2 | ~Le)) | Ze ^ He) + (-1 & ~(-2 | ~(Ne = Ge))) - 1330564622 | 0,
                            He = ((0 | (ct = Me)) % 16 | 0) - (0 - (ut = xe)) | 0,
                            qe = $e = qe,
                            Qe = et = Qe,
                            Ye = tt = Ye,
                            Se = it = Se,
                            Ce = nt = Ce,
                            Ue = ot = Ue,
                            Be = rt = Be,
                            Fe = at = Fe,
                            Ve = st = Ve,
                            De = lt,
                            Me = ct,
                            xe = ut,
                            ke = ft = ke,
                            Oe = dt = Oe,
                            f = pt = f,
                            Le = ht = Le;
                            continue e;
                        case 25:
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            ht = Ie,
                            Pe = 23,
                            Ne = 0 | r[(Je = qe) + ((Ze = He) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 138:
                            Pe = ((at = De) - -32 >> 2 | 0) < (0 | (Xe = He)) ? 126 : 137,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 137:
                            Pe = (0 | (ht = Ie)) < (0 | (Xe = He)) ? 136 : 133,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht;
                            continue e;
                        case 23:
                            Ye = 729837134 + (-1 & ~(1 | ~(Ie = 0 | r[Ee + (Me << 2) >> 2]))) + Ne + -729837134 | 0,
                            Ye = (He = ((Ye &= 1 ^ Ye) & (He = (-2 ^ Ie) & Ie) | Ye ^ He) - 1663655995 + (-1 & ~(-2 | ~Ne)) + 1663655995 | 0) + -2098496209 + ((1 ^ Ge) & Ge) + 2098496209 | 0,
                            Je = (-1 & ~(1 | ~(f + -1742022525 + 1578590490 + 1742022525))) - 702715349 + (tt = (-1777071147 & (Je = ~($e = (Ie = ((Ye &= 1 ^ Ye) & (Ze = (-2 ^ Ge) & Ge) | Ye ^ Ze) - (0 - (-1 & ~(-2 | ~(0 - (0 - Ie + (0 - Ne)))))) | 0) << (Ye = (Ze = ((Ze = (0 | Me) % 4 | 0) << 2) - 23571533 + 601048392 + 23571533 - (0 - ((0 | d(0 - (0 - Ze + 1) | 0, Ze)) / 2 | 0)) | 0) - 601048386 | 0))) | $e & (tt = 1777071146)) ^ (-1777071147 & (Xe = ~(Ze = Ie >>> (0 - Ze + 601048418 | 0))) | Ze & tt) | ~(Je | Xe) & (-1777071147 | tt)) + 702715349 | 0,
                            Le = ke,
                            Pe = 63,
                            f = 0 - (0 - ((225229394 & (je = ~(Re = (-2 ^ tt) & tt)) | Re & (Ke = -225229395)) ^ (225229394 & (ze = 1578590489) | -1578590490 & Ke) | ~(je | ze) & (225229394 | Ke)) + (0 - ((1317685325 & (Ze = ~(Je &= 1 ^ Je)) | Je & (et = -1317685326)) ^ (1317685325 & ($e = ~(Xe = (-2 ^ (ht = f)) & f)) | Xe & et) | ~(Ze | $e) & (1317685325 | et)))) | 0,
                            Ne = tt,
                            Me = Me + 1021816955 + 1 - 1021816955 | 0,
                            qe = it = qe,
                            Qe = nt = Qe,
                            Ge = ot = Ge,
                            Se = rt = Se,
                            Ce = at = Ce,
                            Ue = st = Ue,
                            Be = lt = Be,
                            Fe = ct = Fe,
                            Ve = ut = Ve,
                            De = ft = De,
                            xe = dt = xe,
                            ke = pt = Oe,
                            Oe = ht;
                            continue e;
                        case 136:
                            Pe = 0 < (0 | (tt = Ce)) ? 135 : 134,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at = De,
                            Me = st = Me,
                            xe = lt = xe,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 22:
                            Pe = (0 | (lt = xe)) < (0 | (at = De)) ? 18 : 16,
                            qe = Ke = qe,
                            Qe = Je = Qe,
                            He = Xe = He,
                            Ge = Ze = Ge,
                            Ye = $e = Ye,
                            Se = et = Se,
                            Ce = tt = Ce,
                            Ue = it = Ue,
                            Be = nt = Be,
                            Fe = ot = Fe,
                            Ve = rt = Ve,
                            De = at,
                            Me = st = Me,
                            xe = lt,
                            Ne = ct = Ne,
                            ke = ut = ke,
                            Oe = ft = Oe,
                            f = dt = f,
                            Le = pt = Le,
                            Ie = ht = Ie;
                            continue e;
                        case 135:
                            Je = qe,
                            Xe = Qe,
                            $e = Ge,
                            et = Ye,
                            tt = Se,
                            it = Ce,
                            nt = Ue,
                            ot = Be,
                            rt = Fe,
                            at = Ve,
                            st = De,
                            lt = Me,
                            ct = xe,
                            ut = ke,
                            ft = Oe,
                            dt = f,
                            pt = Le,
                            Pe = 121,
                            Ne = 0 | r[Te + ((Ze = He) + (0 - (ht = Ie)) << 2) >> 2],
                            qe = Je,
                            Qe = Xe,
                            He = Ze,
                            Ge = $e,
                            Ye = et,
                            Se = tt,
                            Ce = it,
                            Ue = nt,
                            Be = ot,
                            Fe = rt,
                            Ve = at,
                            De = st,
                            Me = lt,
                            xe = ct,
                            ke = ut,
                            Oe = ft,
                            f = dt,
                            Le = pt,
                            Ie = ht;
                            continue e;
                        case 21:
                            bt = Le - -33242356 + 252947873 + ((1 ^ Ve) & Ve) - 252947873 | 0,
                            Je = ((1 ^ Be) & Be) - 1609523247 + Oe + 1609523247 | 0,
                            ze = f - -924935704 - 2103109303 + ((1 ^ Fe) & Fe) + 2103109303 | 0,
                            Pe = 146,
                            Le = ((-306070462 & (At = ~(Et = -1 & ~(-2 | ~Le))) | Et & (mt = 306070461)) ^ (-306070462 & (vt = 33242355) | -33242356 & mt) | ~(At | vt) & (-306070462 | mt)) - (0 - ((-380726747 & (gt = ~(bt &= 1 ^ bt)) | bt & (Re = 380726746)) ^ (-380726747 & (_t = ~(yt = (-2 ^ Ve) & Ve)) | yt & Re) | ~(gt | _t) & (-380726747 | Re))) | 0,
                            f = (-924935704 & (je = (-2 ^ f) & f) | -924935704 ^ je) - 937268693 + ((ze &= 1 ^ ze) & (Ke = (-2 ^ Fe) & Fe) | ze ^ Ke) + 937268693 | 0,
                            Oe = 0 - (0 - ((Je &= 1 ^ Je) & (Xe = -1 & ~(-2 | ~Be)) | Je ^ Xe) + (0 - (-1 & ~(-2 | ~Oe)))) | 0,
                            ke = ((Ze = -1 & ~(1 | ~(((1 ^ Ue) & Ue) - 1778799498 + ke + 1778799498))) & ($e = (-2 ^ Ue) & Ue) | Ze ^ $e) - (0 - ((-2 ^ ke) & ke)) | 0,
                            xe = 0 - (0 - xe - 16) | 0,
                            qe = et = qe,
                            Qe = tt = Qe,
                            He = it = He,
                            Ge = nt = Ge,
                            Ye = ot = Ye,
                            Se = rt = Se,
                            Ce = at = Ce,
                            Ue = st = Ue,
                            Be = lt = Be,
                            Fe = ct = Fe,
                            Ve = ut = Ve,
                            De = ft = De,
                            Me = dt = Me,
                            Ne = pt = Ne,
                            Ie = ht = Ie;
                            continue e;
                        case 134:
                            ot = qe,
                            rt = Qe,
                            st = Ge,
                            lt = Ye,
                            ct = Se,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = Me,
                            yt = xe,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Pe = 121,
                            Ne = 0 | r[Te + ((at = He) - 2095981013 - 1 + 2095981013 - 1028988577 - (Et = Ie) + 1028988577 << 2) >> 2],
                            qe = ot,
                            Qe = rt,
                            He = at,
                            Ge = st,
                            Ye = lt,
                            Se = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            Me = gt,
                            xe = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 133:
                            Pe = (0 | (rt = He)) == (0 | (Et = Ie)) ? 132 : 129,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et;
                            continue e;
                        case 19:
                            rt = qe,
                            at = Qe,
                            st = He,
                            lt = Ge,
                            ct = Ye,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = xe,
                            yt = Ne,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Et = Ie,
                            Pe = 15,
                            Se = (Me = 0) | Rt(33, r, 5136),
                            qe = rt,
                            Qe = at,
                            He = st,
                            Ge = lt,
                            Ye = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            xe = gt,
                            Ne = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 132:
                            Pe = 0 < (0 | (ct = Ce)) ? 131 : 129,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 18:
                            rt = o[e + xe >> 0] << (((0 | xe) % 4 | 0) << 3),
                            ot = 0 | r[Te >> 2],
                            r[Te >> 2] = rt & ot | rt ^ ot,
                            Pe = 22,
                            xe = xe + -1916722598 + 1 + 1916722598 | 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 131:
                            ot = qe,
                            rt = Qe,
                            at = He,
                            st = Ge,
                            lt = Ye,
                            ct = Se,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = Me,
                            yt = xe,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Et = Ie,
                            Pe = 121,
                            Ne = 0 | r[Te >> 2],
                            qe = ot,
                            Qe = rt,
                            He = at,
                            Ge = st,
                            Ye = lt,
                            Se = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            Me = gt,
                            xe = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 16:
                            Pe = 12,
                            xe = 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 129:
                            Pe = ((Et = Ie) + 1849332518 + 1 - 1849332518 | 0) < (0 | (rt = He)) ? 128 : 127,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et;
                            continue e;
                        case 15:
                            Pe = (0 | (_t = Me)) < 32 ? 11 : 147,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 128:
                            Pe = 121,
                            Ne = 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            xe = yt = xe,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 127:
                            rt = Qe,
                            st = Ge,
                            lt = Ye,
                            ct = Se,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = Me,
                            yt = xe,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Et = Ie,
                            Pe = 121,
                            Ne = 0 | r[(ot = qe) + ((at = He) << 2) >> 2],
                            qe = ot,
                            Qe = rt,
                            He = at,
                            Ge = st,
                            Ye = lt,
                            Se = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            Me = gt,
                            xe = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 126:
                            Pe = (0 | (rt = He)) == (14 & (Pe = De - -40 >> 6 << 4) | 14 ^ Pe | 0) ? 125 : 124,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 12:
                            Pe = (0 | (gt = xe)) < 8 ? 8 : 150,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 125:
                            Pe = 121,
                            Ne = 961017688 + ((_t = De) << 3) + 256 - 961017688 | 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t,
                            Me = gt = Me,
                            xe = yt = xe,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 11:
                            Pe = 9,
                            xe = (0 | (gt = Me)) / 8 | 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 124:
                            Pe = ((Et = Ie) + -1509393712 + 1 + 1509393712 | 0) < (0 | (rt = He)) ? 123 : 122,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et;
                            continue e;
                        case 123:
                            Pe = 121,
                            Ne = 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            xe = yt = xe,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 9:
                            Pe = 0 == (0 | (gt = xe)) ? 7 : 5,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 122:
                            rt = Qe,
                            st = Ge,
                            lt = Ye,
                            ct = Se,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = Me,
                            yt = xe,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Et = Ie,
                            Pe = 121,
                            Ne = 0 | r[(ot = qe) + ((at = He) << 2) >> 2],
                            qe = ot,
                            Qe = rt,
                            He = at,
                            Ge = st,
                            Ye = lt,
                            Se = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            Me = gt,
                            xe = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 8:
                            Pe = 4,
                            Me = 0,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 121:
                            Ie = -1 & ~(-2 | ~(He = 0 | r[Ee + (Me << 2) >> 2])),
                            Le = ke,
                            Pe = 141,
                            f = ((st = -1 & ~(1 | ~((ct = (st = (Ie = ((-1186168603 & (st = ~(ut = -1 & ~(1 | ~((He = 0 - (0 - (Ie = 0 - (0 - ((-205119057 & (st = ~(Ye = (-2 ^ Ne) & Ne)) | Ye & (lt = 205119056)) ^ (-205119057 & (ut = 524507311) | -524507312 & lt) | ~(st | ut) & (-205119057 | lt)) + (0 - ((He = -1 & ~(1 | ~(0 - (0 - (0 - (0 - Ne + 96809952)) + (0 - (-1 & ~(1 | ~He))))))) & Ie | He ^ Ie))) | 0) - 621317264) | 0) - (0 - ((1 ^ Ge) & Ge)))))) | ut & (ct = 1186168602)) ^ (-1186168603 & (Ye = ~(lt = (-2 ^ Ge) & Ge)) | lt & ct) | ~(st | Ye) & (-1186168603 | ct)) - 1517567764 + (1 & ~(Ie = -1 & ~(-2 | ~(1196940885 - Ie - 1818258150))) | -2 & Ie) + 1517567764 | 0) << (Ye = (ct = 5 * ((0 | Me) % 4 | 0) | 0) - -7 | 0)) & (ct = Ie >>> (0 - ct + 25 | 0)) | st ^ ct) + 1491303093 + ((1 ^ (Et = f)) & f) + -1491303093))) & (lt = (-2 ^ f) & f) | st ^ lt) - (0 - ((-2 ^ ct) & ct)) | 0,
                            Ne = ct,
                            Me = Me - -1 | 0,
                            qe = ut = qe,
                            Qe = ft = Qe,
                            Ge = dt = Ge,
                            Se = pt = Se,
                            Ce = ht = Ce,
                            Ue = _t = Ue,
                            Be = gt = Be,
                            Fe = yt = Fe,
                            Ve = bt = Ve,
                            De = mt = De,
                            xe = vt = xe,
                            ke = At = Oe,
                            Oe = Et;
                            continue e;
                        case 7:
                            Pe = 157,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            xe = yt = xe,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Ne = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 119:
                            Pe = (0 | (_t = Me)) < 32 ? 117 : 97,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 5:
                            Pe = 1 == (0 | (gt = xe)) ? 3 : 1,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 4:
                            Pe = (0 | (_t = Me)) < 4 ? 0 : 152,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 117:
                            rt = (-381686885 & (at = ~(nt = 223327204 & ~f | -223327205 & f)) | nt & (rt = 381686884)) ^ (-381686885 & (He = ~(Ge = 0 | ~ke | 0 & ke)) | Ge & rt) | ~(at | He) & (-381686885 | rt),
                            ot = (-1424487794 & (at = ~ke) | ke & (ot = 1424487793)) ^ (-1424487794 & (nt = ~(He = (2088055561 & ~Oe | Oe & (He = -2088055562)) ^ (1882193929 | 223327204 & He))) | He & ot) | ~(at | nt) & (-1424487794 | ot),
                            nt = -1 & ~(223327204 | ~f),
                            Ge &= 223327204 ^ Ge,
                            Pe = 116,
                            Ie = 0 - (0 - (gt = De) + 1) >> 2,
                            Ge = 1116549971 + ((-89952541 & (rt = ~(nt = -1 & ~(1 | ~((-1 & ~(1 | ~Le)) - (0 - (Ge = (539859515 & ~(ot = (Ge &= Ge ^ ~(Oe & ~ke | ke & ~Oe)) & (ot &= -223327205 ^ ot) | Ge ^ ot) | ot & (Ge = -539859516)) ^ (539859515 & ~(nt = (rt &= -223327205 ^ rt) & (nt &= nt ^ ~ke) | rt ^ nt) | nt & Ge))))))) | nt & (He = 89952540)) ^ (-89952541 & (at = ~(ot = (-2 ^ Le) & Le)) | ot & He) | ~(rt | at) & (-89952541 | He)) + (-1 & ~(-2 | ~(Ne = Ge))) - 1116549971 | 0,
                            He = 0 - (0 - ((106029065 + (5 * (yt = Me) | 0) + 1 - 106029065 | 0) % 16 | 0) + (0 - (bt = xe))) | 0,
                            qe = st = qe,
                            Qe = lt = Qe,
                            Ye = ct = Ye,
                            Se = ut = Se,
                            Ce = ft = Ce,
                            Ue = dt = Ue,
                            Be = pt = Be,
                            Fe = ht = Fe,
                            Ve = _t = Ve,
                            De = gt,
                            Me = yt,
                            xe = bt,
                            ke = mt = ke,
                            Oe = vt = Oe,
                            f = At = f,
                            Le = Et = Le;
                            continue e;
                        case 3:
                            Pe = 157,
                            qe = ot = qe,
                            Qe = rt = Qe,
                            He = at = He,
                            Ge = st = Ge,
                            Ye = lt = Ye,
                            Se = ct = Se,
                            Ce = ut = Ce,
                            Ue = ft = Ue,
                            Be = dt = Be,
                            Fe = pt = Fe,
                            Ve = ht = Ve,
                            De = _t = De,
                            Me = gt = Me,
                            xe = yt = xe,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = Ne = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 116:
                            Pe = ((ht = De) + 77471208 + 32 - 77471208 >> 2 | 0) < (0 | (rt = He)) ? 104 : 115,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 115:
                            Pe = (0 | (Et = Ie)) < (0 | (rt = He)) ? 114 : 111,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et;
                            continue e;
                        case 1:
                            Pe = 2 == (0 | (gt = xe)) ? 161 : 159,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 114:
                            Pe = 0 < (0 | (ct = Ce)) ? 113 : 112,
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e;
                        case 0:
                            ot = qe,
                            rt = Qe,
                            at = Ge,
                            st = Ye,
                            lt = Se,
                            ct = Ce,
                            ut = Ue,
                            ft = Be,
                            dt = Fe,
                            pt = Ve,
                            ht = De,
                            yt = Ne,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Et = Ie,
                            Pe = 160,
                            He = (426025673 + (5 * ((27 * (gt = xe) | 0) - (0 - (62 * (_t = Me) | 0)) - (0 - (0 | d(0 - (0 - (84 * xe | 0) - 21) | 0, 1910606658 + (28 * Me | 0) + 97 - 1910606658 | 0))) | 0) | 0) + 615 - 426025673 | 0) % 32 | 0,
                            qe = ot,
                            Qe = rt,
                            Ge = at,
                            Ye = st,
                            Se = lt,
                            Ce = ct,
                            Ue = ut,
                            Be = ft,
                            Fe = dt,
                            Ve = pt,
                            De = ht,
                            Me = _t,
                            xe = gt,
                            Ne = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        case 113:
                            ot = qe,
                            rt = Qe,
                            st = Ge,
                            lt = Ye,
                            ct = Se,
                            ut = Ce,
                            ft = Ue,
                            dt = Be,
                            pt = Fe,
                            ht = Ve,
                            _t = De,
                            gt = Me,
                            yt = xe,
                            bt = ke,
                            mt = Oe,
                            vt = f,
                            At = Le,
                            Pe = 99,
                            Ne = 0 | r[Te + ((at = He) + 1501901147 - (Et = Ie) - 1501901147 << 2) >> 2],
                            qe = ot,
                            Qe = rt,
                            He = at,
                            Ge = st,
                            Ye = lt,
                            Se = ct,
                            Ce = ut,
                            Ue = ft,
                            Be = dt,
                            Fe = pt,
                            Ve = ht,
                            De = _t,
                            Me = gt,
                            xe = yt,
                            ke = bt,
                            Oe = mt,
                            f = vt,
                            Le = At,
                            Ie = Et;
                            continue e;
                        default:
                            qe = nt = qe,
                            Qe = ot = Qe,
                            He = rt = He,
                            Ge = at = Ge,
                            Ye = st = Ye,
                            Se = lt = Se,
                            Ce = ct = Ce,
                            Ue = ut = Ue,
                            Be = ft = Be,
                            Fe = dt = Fe,
                            Ve = pt = Ve,
                            De = ht = De,
                            Me = _t = Me,
                            xe = gt = xe,
                            Ne = yt = Ne,
                            ke = bt = ke,
                            Oe = mt = Oe,
                            f = vt = f,
                            Le = At = Le,
                            Ie = Et = Ie;
                            continue e
                        }
                    if (136 == (0 | We)) {
                        a = we;
                        for (var Tt = 0, wt = 0; ; ) {
                            var St = n[Se + wt >> 0];
                            if (Tt |= St,
                            0 == St)
                                break;
                            wt++
                        }
                        var Ct = "";
                        if (Tt < 128) {
                            for (var Pt; 0 < wt; )
                                Pt = String.fromCharCode.apply(String, n.subarray(Se, Se + Math.min(wt, 1024))),
                                Ct = Ct ? Ct + Pt : Pt,
                                Se += 1024,
                                wt -= 1024;
                            return Ct
                        }
                    }
                    return a = we,
                    0
                }
                function Rt(e, t, i) {
                    e |= 0;
                    var n = 0
                      , o = 0
                      , r = 0
                      , a = 0
                      , s = 0
                      , l = 0
                      , c = 0
                      , u = 0
                      , f = 0
                      , d = 0
                      , p = 0
                      , h = 0
                      , _ = 0
                      , g = 0
                      , y = 0
                      , b = 0
                      , m = 0
                      , v = 0
                      , A = 0
                      , E = 0
                      , T = 0
                      , w = 0
                      , S = 0
                      , C = 0
                      , P = 0
                      , R = 0
                      , I = 0
                      , L = 0
                      , O = 0
                      , k = 0
                      , N = 0
                      , x = 0
                      , M = 0
                      , D = 0
                      , V = 0
                      , F = 0;
                    do {
                        if (e >>> 0 < 245) {
                            if (e = (_ = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3,
                            3 & (n = (u = 0 | t[48]) >>> e) | 0) {
                                l = 0 | t[(s = (a = 0 | t[(r = (o = 232 + ((n = (1 & n ^ 1) + e | 0) << 1 << 2) | 0) + 8 | 0) >> 2]) + 8 | 0) >> 2];
                                do {
                                    if ((0 | o) != (0 | l)) {
                                        if ((0 | t[(e = l + 12 | 0) >> 2]) == (0 | a)) {
                                            t[e >> 2] = o,
                                            t[r >> 2] = l;
                                            break
                                        }
                                    } else
                                        t[48] = u & ~(1 << n)
                                } while (0);return F = n << 3,
                                t[a + 4 >> 2] = 3 | F,
                                t[(F = a + F + 4 | 0) >> 2] = 1 | t[F >> 2],
                                0 | s
                            }
                            if ((l = 0 | t[50]) >>> 0 < _ >>> 0) {
                                if (0 | n) {
                                    o = ((o = n << e & ((o = 2 << e) | 0 - o)) & 0 - o) - 1 | 0,
                                    a = 0 | t[(c = (s = 0 | t[(r = (o = 232 + ((n = ((a = (o >>>= c = o >>> 12 & 16) >>> 5 & 8) | c | (s = (o >>>= a) >>> 2 & 4) | (r = (o >>>= s) >>> 1 & 2) | (n = (o >>>= r) >>> 1 & 1)) + (o >>> n) | 0) << 1 << 2) | 0) + 8 | 0) >> 2]) + 8 | 0) >> 2];
                                    do {
                                        if ((0 | o) != (0 | a)) {
                                            if ((0 | t[(e = a + 12 | 0) >> 2]) == (0 | s)) {
                                                t[e >> 2] = o,
                                                t[r >> 2] = a,
                                                f = 0 | t[50];
                                                break
                                            }
                                        } else
                                            t[48] = u & ~(1 << n),
                                            f = l
                                    } while (0);return l = (n << 3) - _ | 0,
                                    t[s + 4 >> 2] = 3 | _,
                                    t[(r = s + _ | 0) + 4 >> 2] = 1 | l,
                                    t[r + l >> 2] = l,
                                    0 | f && (a = 0 | t[53],
                                    o = 232 + ((n = f >>> 3) << 1 << 2) | 0,
                                    (e = 0 | t[48]) & (n = 1 << n) ? (n = 0 | t[(e = o + 8 | 0) >> 2]) >>> 0 < (0 | t[52]) >>> 0 || (d = e,
                                    p = n) : (t[48] = e | n,
                                    d = o + 8 | 0,
                                    p = o),
                                    t[d >> 2] = a,
                                    t[p + 12 >> 2] = a,
                                    t[a + 8 >> 2] = p,
                                    t[a + 12 >> 2] = o),
                                    t[50] = l,
                                    t[53] = r,
                                    0 | c
                                }
                                if (e = 0 | t[49]) {
                                    for (o = (e & 0 - e) - 1 | 0,
                                    o = (-8 & t[(r = 0 | t[496 + (((D = (o >>>= V = o >>> 12 & 16) >>> 5 & 8) | V | (F = (o >>>= D) >>> 2 & 4) | (n = (o >>>= F) >>> 1 & 2) | (r = (o >>>= n) >>> 1 & 1)) + (o >>> r) << 2) >> 2]) + 4 >> 2]) - _ | 0,
                                    n = r; ; ) {
                                        if (!(e = 0 | t[n + 16 >> 2]) && !(e = 0 | t[n + 20 >> 2])) {
                                            u = r;
                                            break
                                        }
                                        o = (F = (n = (-8 & t[e + 4 >> 2]) - _ | 0) >>> 0 < o >>> 0) ? n : o,
                                        n = e,
                                        r = F ? e : r
                                    }
                                    s = 0 | t[52],
                                    c = u + _ | 0,
                                    l = 0 | t[u + 24 >> 2],
                                    r = 0 | t[u + 12 >> 2];
                                    do {
                                        if ((0 | r) == (0 | u)) {
                                            if (!((e = 0 | t[(n = u + 20 | 0) >> 2]) || (e = 0 | t[(n = u + 16 | 0) >> 2]))) {
                                                h = 0;
                                                break
                                            }
                                            for (; ; )
                                                if (0 | (a = 0 | t[(r = e + 20 | 0) >> 2]))
                                                    e = a,
                                                    n = r;
                                                else {
                                                    if (!(a = 0 | t[(r = e + 16 | 0) >> 2]))
                                                        break;
                                                    e = a,
                                                    n = r
                                                }
                                            if (!(n >>> 0 < s >>> 0)) {
                                                t[n >> 2] = 0,
                                                h = e;
                                                break
                                            }
                                        } else if (e = (a = 0 | t[u + 8 >> 2]) + 12 | 0,
                                        (0 | t[(n = r + 8 | 0) >> 2]) == (0 | u)) {
                                            t[e >> 2] = r,
                                            t[n >> 2] = a,
                                            h = r;
                                            break
                                        }
                                    } while (0);do {
                                        if (0 | l) {
                                            if ((0 | u) == (0 | t[(n = 496 + ((e = 0 | t[u + 28 >> 2]) << 2) | 0) >> 2])) {
                                                if (!(t[n >> 2] = h)) {
                                                    t[49] = t[49] & ~(1 << e);
                                                    break
                                                }
                                            } else if ((0 | t[(e = l + 16 | 0) >> 2]) == (0 | u) ? t[e >> 2] = h : t[l + 20 >> 2] = h,
                                            !h)
                                                break;
                                            n = 0 | t[52],
                                            t[h + 24 >> 2] = l,
                                            e = 0 | t[u + 16 >> 2];
                                            do {
                                                if (0 | e && !(e >>> 0 < n >>> 0)) {
                                                    t[h + 16 >> 2] = e,
                                                    t[e + 24 >> 2] = h;
                                                    break
                                                }
                                            } while (0);if (0 | (e = 0 | t[u + 20 >> 2]) && !(e >>> 0 < (0 | t[52]) >>> 0)) {
                                                t[h + 20 >> 2] = e,
                                                t[e + 24 >> 2] = h;
                                                break
                                            }
                                        }
                                    } while (0);return o >>> 0 < 16 ? (F = o + _ | 0,
                                    t[u + 4 >> 2] = 3 | F,
                                    t[(F = u + F + 4 | 0) >> 2] = 1 | t[F >> 2]) : (t[u + 4 >> 2] = 3 | _,
                                    t[c + 4 >> 2] = 1 | o,
                                    t[c + o >> 2] = o,
                                    0 | (e = 0 | t[50]) && (a = 0 | t[53],
                                    r = 232 + ((n = e >>> 3) << 1 << 2) | 0,
                                    (e = 0 | t[48]) & (n = 1 << n) ? (n = 0 | t[(e = r + 8 | 0) >> 2]) >>> 0 < (0 | t[52]) >>> 0 || (g = e,
                                    y = n) : (t[48] = e | n,
                                    g = r + 8 | 0,
                                    y = r),
                                    t[g >> 2] = a,
                                    t[y + 12 >> 2] = a,
                                    t[a + 8 >> 2] = y,
                                    t[a + 12 >> 2] = r),
                                    t[50] = o,
                                    t[53] = c),
                                    0 | u + 8
                                }
                            }
                        } else if (e >>> 0 <= 4294967231) {
                            if (_ = -8 & (e = e + 11 | 0),
                            u = 0 | t[49]) {
                                o = 0 - _ | 0,
                                n = 0 | t[496 + ((c = (e >>>= 8) ? 16777215 < _ >>> 0 ? 31 : _ >>> ((c = 14 - ((g = ((O = e << (y = (e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | y | (c = ((O <<= g) + 245760 | 0) >>> 16 & 2)) + (O << c >>> 15) | 0) + 7 | 0) & 1 | c << 1 : 0) << 2) >> 2];
                                e: do {
                                    if (n)
                                        for (a = o,
                                        s = _ << (31 == ((e = 0) | c) ? 0 : 25 - (c >>> 1) | 0),
                                        l = n,
                                        n = 0; ; ) {
                                            if ((o = (r = -8 & t[l + 4 >> 2]) - _ | 0) >>> 0 < a >>> 0) {
                                                if ((0 | r) == (0 | _)) {
                                                    n = e = l,
                                                    O = 90;
                                                    break e
                                                }
                                                n = l
                                            } else
                                                o = a;
                                            if (e = 0 == (0 | (r = 0 | t[l + 20 >> 2])) | (0 | r) == (0 | (l = 0 | t[l + 16 + (s >>> 31 << 2) >> 2])) ? e : r,
                                            r = 0 == (0 | l)) {
                                                O = 86;
                                                break
                                            }
                                            a = o,
                                            s <<= 1 & r ^ 1
                                        }
                                    else
                                        n = e = 0,
                                        O = 86
                                } while (0);if (86 == (0 | O)) {
                                    if (0 == (0 | e) & 0 == (0 | n)) {
                                        if (!(e = u & ((e = 2 << c) | 0 - e)))
                                            break;
                                        y = (e & 0 - e) - 1 | 0,
                                        e = 0 | t[496 + (((d = (y >>>= p = y >>> 12 & 16) >>> 5 & 8) | p | (h = (y >>>= d) >>> 2 & 4) | (g = (y >>>= h) >>> 1 & 2) | (e = (y >>>= g) >>> 1 & 1)) + (y >>> e) << 2) >> 2]
                                    }
                                    e ? O = 90 : (c = o,
                                    u = n)
                                }
                                if (90 == (0 | O))
                                    for (; ; )
                                        if (O = 0,
                                        o = (r = (y = (-8 & t[e + 4 >> 2]) - _ | 0) >>> 0 < o >>> 0) ? y : o,
                                        n = r ? e : n,
                                        0 | (r = 0 | t[e + 16 >> 2]))
                                            e = r,
                                            O = 90;
                                        else {
                                            if (!(e = 0 | t[e + 20 >> 2])) {
                                                c = o,
                                                u = n;
                                                break
                                            }
                                            O = 90
                                        }
                                if (0 != (0 | u) && c >>> 0 < ((0 | t[50]) - _ | 0) >>> 0) {
                                    a = 0 | t[52],
                                    l = u + _ | 0,
                                    s = 0 | t[u + 24 >> 2],
                                    o = 0 | t[u + 12 >> 2];
                                    do {
                                        if ((0 | o) == (0 | u)) {
                                            if (!((e = 0 | t[(n = u + 20 | 0) >> 2]) || (e = 0 | t[(n = u + 16 | 0) >> 2]))) {
                                                m = 0;
                                                break
                                            }
                                            for (; ; )
                                                if (0 | (r = 0 | t[(o = e + 20 | 0) >> 2]))
                                                    e = r,
                                                    n = o;
                                                else {
                                                    if (!(r = 0 | t[(o = e + 16 | 0) >> 2]))
                                                        break;
                                                    e = r,
                                                    n = o
                                                }
                                            if (!(n >>> 0 < a >>> 0)) {
                                                t[n >> 2] = 0,
                                                m = e;
                                                break
                                            }
                                        } else if (e = (r = 0 | t[u + 8 >> 2]) + 12 | 0,
                                        (0 | t[(n = o + 8 | 0) >> 2]) == (0 | u)) {
                                            t[e >> 2] = o,
                                            t[n >> 2] = r,
                                            m = o;
                                            break
                                        }
                                    } while (0);do {
                                        if (0 | s) {
                                            if ((0 | u) == (0 | t[(n = 496 + ((e = 0 | t[u + 28 >> 2]) << 2) | 0) >> 2])) {
                                                if (!(t[n >> 2] = m)) {
                                                    t[49] = t[49] & ~(1 << e);
                                                    break
                                                }
                                            } else if ((0 | t[(e = s + 16 | 0) >> 2]) == (0 | u) ? t[e >> 2] = m : t[s + 20 >> 2] = m,
                                            !m)
                                                break;
                                            n = 0 | t[52],
                                            t[m + 24 >> 2] = s,
                                            e = 0 | t[u + 16 >> 2];
                                            do {
                                                if (0 | e && !(e >>> 0 < n >>> 0)) {
                                                    t[m + 16 >> 2] = e,
                                                    t[e + 24 >> 2] = m;
                                                    break
                                                }
                                            } while (0);if (0 | (e = 0 | t[u + 20 >> 2]) && !(e >>> 0 < (0 | t[52]) >>> 0)) {
                                                t[m + 20 >> 2] = e,
                                                t[e + 24 >> 2] = m;
                                                break
                                            }
                                        }
                                    } while (0);do {
                                        if (16 <= c >>> 0) {
                                            if (t[u + 4 >> 2] = 3 | _,
                                            t[l + 4 >> 2] = 1 | c,
                                            e = (t[l + c >> 2] = c) >>> 3,
                                            c >>> 0 < 256) {
                                                o = 232 + (e << 1 << 2) | 0,
                                                (n = 0 | t[48]) & (e = 1 << e) ? (n = 0 | t[(e = o + 8 | 0) >> 2]) >>> 0 < (0 | t[52]) >>> 0 || (A = e,
                                                E = n) : (t[48] = n | e,
                                                A = o + 8 | 0,
                                                E = o),
                                                t[A >> 2] = l,
                                                t[E + 12 >> 2] = l,
                                                t[l + 8 >> 2] = E,
                                                t[l + 12 >> 2] = o;
                                                break
                                            }
                                            if (r = 496 + ((o = (e = c >>> 8) ? 16777215 < c >>> 0 ? 31 : c >>> ((o = 14 - ((D = ((F = e << (V = (e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | V | (o = ((F <<= D) + 245760 | 0) >>> 16 & 2)) + (F << o >>> 15) | 0) + 7 | 0) & 1 | o << 1 : 0) << 2) | 0,
                                            t[l + 28 >> 2] = o,
                                            t[(e = l + 16 | 0) + 4 >> 2] = 0,
                                            !((e = (t[e >> 2] = 0) | t[49]) & (n = 1 << o))) {
                                                t[49] = e | n,
                                                t[r >> 2] = l,
                                                t[l + 24 >> 2] = r,
                                                t[l + 12 >> 2] = l,
                                                t[l + 8 >> 2] = l;
                                                break
                                            }
                                            for (a = c << (31 == (0 | o) ? 0 : 25 - (o >>> 1) | 0),
                                            e = 0 | t[r >> 2]; ; ) {
                                                if ((-8 & t[e + 4 >> 2] | 0) == (0 | c)) {
                                                    o = e,
                                                    O = 148;
                                                    break
                                                }
                                                if (!(o = 0 | t[(n = e + 16 + (a >>> 31 << 2) | 0) >> 2])) {
                                                    O = 145;
                                                    break
                                                }
                                                a <<= 1,
                                                e = o
                                            }
                                            if (145 == (0 | O)) {
                                                if (!(n >>> 0 < (0 | t[52]) >>> 0)) {
                                                    t[n >> 2] = l,
                                                    t[l + 24 >> 2] = e,
                                                    t[l + 12 >> 2] = l,
                                                    t[l + 8 >> 2] = l;
                                                    break
                                                }
                                                if (148 == (0 | O) && (n = 0 | t[(e = o + 8 | 0) >> 2],
                                                (F = 0 | t[52]) >>> 0 <= n >>> 0 & F >>> 0 <= o >>> 0)) {
                                                    t[n + 12 >> 2] = l,
                                                    t[e >> 2] = l,
                                                    t[l + 8 >> 2] = n,
                                                    t[l + 12 >> 2] = o,
                                                    t[l + 24 >> 2] = 0;
                                                    break
                                                }
                                            }
                                        } else
                                            F = c + _ | 0,
                                            t[u + 4 >> 2] = 3 | F,
                                            t[(F = u + F + 4 | 0) >> 2] = 1 | t[F >> 2]
                                    } while (0);return 0 | u + 8
                                }
                            }
                        } else
                            _ = -1
                    } while (0);if ((o = 0 | t[50]) >>> 0 >= _ >>> 0)
                        return e = o - _ | 0,
                        n = 0 | t[53],
                        15 < e >>> 0 ? (F = n + _ | 0,
                        t[53] = F,
                        t[50] = e,
                        t[F + 4 >> 2] = 1 | e,
                        t[F + e >> 2] = e,
                        t[n + 4 >> 2] = 3 | _) : (t[50] = 0,
                        t[53] = 0,
                        t[n + 4 >> 2] = 3 | o,
                        t[(F = n + o + 4 | 0) >> 2] = 1 | t[F >> 2]),
                        0 | n + 8;
                    if ((e = 0 | t[51]) >>> 0 > _ >>> 0)
                        return D = e - _ | 0,
                        t[51] = D,
                        V = (F = 0 | t[54]) + _ | 0,
                        t[54] = V,
                        t[V + 4 >> 2] = 1 | D,
                        t[F + 4 >> 2] = 3 | _,
                        0 | F + 8;
                    do {
                        if (!(0 | t[166] || (e = 4096) - 1 & e)) {
                            t[168] = e,
                            t[167] = e,
                            t[169] = -1,
                            t[170] = -1,
                            t[171] = 0,
                            t[159] = 0,
                            t[166] = Date.now() / 1e3 & -16 ^ 1431655768;
                            break
                        }
                    } while (0);if (l = _ + 48 | 0,
                    (u = (a = (s = 0 | t[168]) + (c = _ + 47 | 0) | 0) & (s = 0 - s | 0)) >>> 0 <= _ >>> 0)
                        return 0;
                    if (0 | (e = 0 | t[158]) && (E = (A = 0 | t[156]) + u | 0) >>> 0 <= A >>> 0 | e >>> 0 < E >>> 0)
                        return 0;
                    e: do {
                        if (4 & t[159])
                            O = 190;
                        else {
                            e = 0 | t[54];
                            t: do {
                                if (e) {
                                    for (o = 640; ; ) {
                                        if ((n = 0 | t[o >> 2]) >>> 0 <= e >>> 0 && (n + (0 | t[(b = o + 4 | 0) >> 2]) | 0) >>> 0 > e >>> 0) {
                                            r = o,
                                            o = b;
                                            break
                                        }
                                        if (!(o = 0 | t[o + 8 >> 2])) {
                                            O = 173;
                                            break t
                                        }
                                    }
                                    if ((e = a - (0 | t[51]) & s) >>> 0 < 2147483647)
                                        if ((0 | (n = i)) == ((0 | t[r >> 2]) + (0 | t[o >> 2]) | 0)) {
                                            if (-1 != (0 | n)) {
                                                l = n,
                                                a = e,
                                                O = 193;
                                                break e
                                            }
                                        } else
                                            O = 183
                                } else
                                    O = 173
                            } while (0);do {
                                if (173 == (0 | O) && -1 != (0 | (v = i)) && (e = v,
                                e = (o = (n = 0 | t[167]) + -1 | 0) & e ? u - e + (o + e & 0 - n) | 0 : u,
                                o = (n = 0 | t[156]) + e | 0,
                                _ >>> 0 < e >>> 0 & e >>> 0 < 2147483647)) {
                                    if (0 | (E = 0 | t[158]) && o >>> 0 <= n >>> 0 | E >>> 0 < o >>> 0)
                                        break;
                                    if ((0 | (n = i)) == (0 | v)) {
                                        l = v,
                                        a = e,
                                        O = 193;
                                        break e
                                    }
                                    O = 183
                                }
                            } while (0);t: do {
                                if (183 == (0 | O)) {
                                    o = 0 - e | 0;
                                    do {
                                        if (e >>> 0 < l >>> 0 & e >>> 0 < 2147483647 & -1 != (0 | n) && (T = c - e + (T = 0 | t[168]) & 0 - T) >>> 0 < 2147483647) {
                                            if (-1 == i)
                                                break t;
                                            e = T + e | 0;
                                            break
                                        }
                                    } while (0);if (-1 != (0 | n)) {
                                        l = n,
                                        a = e,
                                        O = 193;
                                        break e
                                    }
                                }
                            } while (0);t[159] = 4 | t[159],
                            O = 190
                        }
                    } while (0);if ((190 == (0 | O) && u >>> 0 < 2147483647 && (w = i) >>> 0 < (S = i) >>> 0 & -1 != (0 | w) & -1 != (0 | S) ? (C = S - w | 0) >>> 0 > (_ + 40 | 0) >>> 0 : 0) && (l = w,
                    a = C,
                    O = 193),
                    193 == (0 | O)) {
                        e = (0 | t[156]) + a | 0,
                        (t[156] = e) >>> 0 > (0 | t[157]) >>> 0 && (t[157] = e),
                        c = 0 | t[54];
                        do {
                            if (c) {
                                r = 640;
                                do {
                                    if ((0 | l) == ((e = 0 | t[r >> 2]) + (o = 0 | t[(n = r + 4 | 0) >> 2]) | 0)) {
                                        P = e,
                                        R = n,
                                        I = o,
                                        L = r,
                                        O = 203;
                                        break
                                    }
                                    r = 0 | t[r + 8 >> 2]
                                } while (0 != (0 | r));if (203 == (0 | O) && 0 == (8 & t[L + 12 >> 2] | 0) && c >>> 0 < l >>> 0 & P >>> 0 <= c >>> 0) {
                                    t[R >> 2] = I + a,
                                    V = c + (F = 0 == (7 & (F = c + 8 | 0) | 0) ? 0 : 0 - F & 7) | 0,
                                    F = a - F + (0 | t[51]) | 0,
                                    t[54] = V,
                                    t[51] = F,
                                    t[V + 4 >> 2] = 1 | F,
                                    t[V + F + 4 >> 2] = 40,
                                    t[55] = t[170];
                                    break
                                }
                                for (u = l >>> 0 < (e = 0 | t[52]) >>> 0 ? t[52] = l : e,
                                o = l + a | 0,
                                e = 640; ; ) {
                                    if ((0 | t[e >> 2]) == (0 | o)) {
                                        n = e,
                                        O = 211;
                                        break
                                    }
                                    if (!(e = 0 | t[e + 8 >> 2])) {
                                        n = 640;
                                        break
                                    }
                                }
                                if (211 == (0 | O)) {
                                    if (!(8 & t[e + 12 >> 2])) {
                                        t[n >> 2] = l,
                                        t[(d = e + 4 | 0) >> 2] = (0 | t[d >> 2]) + a,
                                        f = (d = l + (0 == (7 & (d = l + 8 | 0) | 0) ? 0 : 0 - d & 7) | 0) + _ | 0,
                                        s = (e = o + (0 == (7 & (e = o + 8 | 0) | 0) ? 0 : 0 - e & 7) | 0) - d - _ | 0,
                                        t[d + 4 >> 2] = 3 | _;
                                        do {
                                            if ((0 | e) != (0 | c)) {
                                                if ((0 | e) == (0 | t[53])) {
                                                    F = (0 | t[50]) + s | 0,
                                                    t[50] = F,
                                                    t[53] = f,
                                                    t[f + 4 >> 2] = 1 | F,
                                                    t[f + F >> 2] = F;
                                                    break
                                                }
                                                if (1 == (3 & (n = 0 | t[e + 4 >> 2]) | 0)) {
                                                    c = -8 & n,
                                                    a = n >>> 3;
                                                    e: do {
                                                        if (256 <= n >>> 0) {
                                                            l = 0 | t[e + 24 >> 2],
                                                            r = 0 | t[e + 12 >> 2];
                                                            do {
                                                                if ((0 | r) == (0 | e)) {
                                                                    if (n = 0 | t[(r = (o = e + 16 | 0) + 4 | 0) >> 2])
                                                                        o = r;
                                                                    else if (!(n = 0 | t[o >> 2])) {
                                                                        D = 0;
                                                                        break
                                                                    }
                                                                    for (; ; )
                                                                        if (0 | (a = 0 | t[(r = n + 20 | 0) >> 2]))
                                                                            n = a,
                                                                            o = r;
                                                                        else {
                                                                            if (!(a = 0 | t[(r = n + 16 | 0) >> 2]))
                                                                                break;
                                                                            n = a,
                                                                            o = r
                                                                        }
                                                                    if (!(o >>> 0 < u >>> 0)) {
                                                                        t[o >> 2] = 0,
                                                                        D = n;
                                                                        break
                                                                    }
                                                                } else if (n = (a = 0 | t[e + 8 >> 2]) + 12 | 0,
                                                                (0 | t[(o = r + 8 | 0) >> 2]) == (0 | e)) {
                                                                    t[n >> 2] = r,
                                                                    t[o >> 2] = a,
                                                                    D = r;
                                                                    break
                                                                }
                                                            } while (0);if (!l)
                                                                break;
                                                            o = 496 + ((n = 0 | t[e + 28 >> 2]) << 2) | 0;
                                                            do {
                                                                if ((0 | e) == (0 | t[o >> 2])) {
                                                                    if (0 | (t[o >> 2] = D))
                                                                        break;
                                                                    t[49] = t[49] & ~(1 << n);
                                                                    break e
                                                                }
                                                                if ((0 | t[(n = l + 16 | 0) >> 2]) == (0 | e) ? t[n >> 2] = D : t[l + 20 >> 2] = D,
                                                                !D)
                                                                    break e
                                                            } while (0);r = 0 | t[52],
                                                            t[D + 24 >> 2] = l,
                                                            o = 0 | t[(n = e + 16 | 0) >> 2];
                                                            do {
                                                                if (0 | o && !(o >>> 0 < r >>> 0)) {
                                                                    t[D + 16 >> 2] = o,
                                                                    t[o + 24 >> 2] = D;
                                                                    break
                                                                }
                                                            } while (0);if (!(n = 0 | t[n + 4 >> 2]))
                                                                break;
                                                            if (!(n >>> 0 < (0 | t[52]) >>> 0)) {
                                                                t[D + 20 >> 2] = n,
                                                                t[n + 24 >> 2] = D;
                                                                break
                                                            }
                                                        } else {
                                                            o = 0 | t[e + 8 >> 2],
                                                            r = 0 | t[e + 12 >> 2],
                                                            n = 232 + (a << 1 << 2) | 0;
                                                            do {
                                                                if ((0 | o) != (0 | n) && (0 | t[o + 12 >> 2]) == (0 | e))
                                                                    break
                                                            } while (0);if ((0 | r) == (0 | o)) {
                                                                t[48] = t[48] & ~(1 << a);
                                                                break
                                                            }
                                                            do {
                                                                if ((0 | r) == (0 | n))
                                                                    N = r + 8 | 0;
                                                                else if ((0 | t[(n = r + 8 | 0) >> 2]) == (0 | e)) {
                                                                    N = n;
                                                                    break
                                                                }
                                                            } while (0);t[o + 12 >> 2] = r,
                                                            t[N >> 2] = o
                                                        }
                                                    } while (0);e = e + c | 0,
                                                    s = c + s | 0
                                                }
                                                if (t[(e = e + 4 | 0) >> 2] = -2 & t[e >> 2],
                                                t[f + 4 >> 2] = 1 | s,
                                                e = (t[f + s >> 2] = s) >>> 3,
                                                s >>> 0 < 256) {
                                                    o = 232 + (e << 1 << 2) | 0,
                                                    n = 0 | t[48],
                                                    e = 1 << e;
                                                    do {
                                                        if (n & e) {
                                                            if ((n = 0 | t[(e = o + 8 | 0) >> 2]) >>> 0 >= (0 | t[52]) >>> 0) {
                                                                V = e,
                                                                F = n;
                                                                break
                                                            }
                                                        } else
                                                            t[48] = n | e,
                                                            V = o + 8 | 0,
                                                            F = o
                                                    } while (0);t[V >> 2] = f,
                                                    t[F + 12 >> 2] = f,
                                                    t[f + 8 >> 2] = F,
                                                    t[f + 12 >> 2] = o;
                                                    break
                                                }
                                                e = s >>> 8;
                                                do {
                                                    if (e) {
                                                        if (16777215 < s >>> 0) {
                                                            o = 31;
                                                            break
                                                        }
                                                        o = s >>> ((o = 14 - ((D = ((F = e << (V = (e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | V | (o = ((F <<= D) + 245760 | 0) >>> 16 & 2)) + (F << o >>> 15) | 0) + 7 | 0) & 1 | o << 1
                                                    } else
                                                        o = 0
                                                } while (0);if (r = 496 + (o << 2) | 0,
                                                t[f + 28 >> 2] = o,
                                                t[(e = f + 16 | 0) + 4 >> 2] = 0,
                                                !((e = (t[e >> 2] = 0) | t[49]) & (n = 1 << o))) {
                                                    t[49] = e | n,
                                                    t[r >> 2] = f,
                                                    t[f + 24 >> 2] = r,
                                                    t[f + 12 >> 2] = f,
                                                    t[f + 8 >> 2] = f;
                                                    break
                                                }
                                                for (a = s << (31 == (0 | o) ? 0 : 25 - (o >>> 1) | 0),
                                                e = 0 | t[r >> 2]; ; ) {
                                                    if ((-8 & t[e + 4 >> 2] | 0) == (0 | s)) {
                                                        o = e,
                                                        O = 281;
                                                        break
                                                    }
                                                    if (!(o = 0 | t[(n = e + 16 + (a >>> 31 << 2) | 0) >> 2])) {
                                                        O = 278;
                                                        break
                                                    }
                                                    a <<= 1,
                                                    e = o
                                                }
                                                if (278 == (0 | O)) {
                                                    if (!(n >>> 0 < (0 | t[52]) >>> 0)) {
                                                        t[n >> 2] = f,
                                                        t[f + 24 >> 2] = e,
                                                        t[f + 12 >> 2] = f,
                                                        t[f + 8 >> 2] = f;
                                                        break
                                                    }
                                                    if (281 == (0 | O) && (n = 0 | t[(e = o + 8 | 0) >> 2],
                                                    (F = 0 | t[52]) >>> 0 <= n >>> 0 & F >>> 0 <= o >>> 0)) {
                                                        t[n + 12 >> 2] = f,
                                                        t[e >> 2] = f,
                                                        t[f + 8 >> 2] = n,
                                                        t[f + 12 >> 2] = o,
                                                        t[f + 24 >> 2] = 0;
                                                        break
                                                    }
                                                }
                                            } else
                                                F = (0 | t[51]) + s | 0,
                                                t[51] = F,
                                                t[54] = f,
                                                t[f + 4 >> 2] = 1 | F
                                        } while (0);return 0 | d + 8
                                    }
                                    n = 640
                                }
                                for (; ; ) {
                                    if ((e = 0 | t[n >> 2]) >>> 0 <= c >>> 0 && (k = e + (0 | t[n + 4 >> 2]) | 0) >>> 0 > c >>> 0) {
                                        n = k;
                                        break
                                    }
                                    n = 0 | t[n + 8 >> 2]
                                }
                                for (e = (o = (o = (s = n + -47 | 0) + (0 == (7 & (o = s + 8 | 0) | 0) ? 0 : 0 - o & 7) | 0) >>> 0 < (s = c + 16 | 0) >>> 0 ? c : o) + 8 | 0,
                                F = l + (r = 0 == (7 & (r = l + 8 | 0) | 0) ? 0 : 0 - r & 7) | 0,
                                r = a + -40 - r | 0,
                                t[54] = F,
                                t[51] = r,
                                t[F + 4 >> 2] = 1 | r,
                                t[F + r + 4 >> 2] = 40,
                                t[55] = t[170],
                                t[(r = o + 4 | 0) >> 2] = 27,
                                t[e >> 2] = t[160],
                                t[e + 4 >> 2] = t[161],
                                t[e + 8 >> 2] = t[162],
                                t[e + 12 >> 2] = t[163],
                                t[160] = l,
                                t[161] = a,
                                t[163] = 0,
                                t[162] = e,
                                e = o + 24 | 0; t[(e = e + 4 | 0) >> 2] = 7,
                                (e + 4 | 0) >>> 0 < n >>> 0; )
                                    ;
                                if ((0 | o) != (0 | c)) {
                                    if (l = o - c | 0,
                                    t[r >> 2] = -2 & t[r >> 2],
                                    t[c + 4 >> 2] = 1 | l,
                                    e = (t[o >> 2] = l) >>> 3,
                                    l >>> 0 < 256) {
                                        o = 232 + (e << 1 << 2) | 0,
                                        (n = 0 | t[48]) & (e = 1 << e) ? (n = 0 | t[(e = o + 8 | 0) >> 2]) >>> 0 < (0 | t[52]) >>> 0 || (x = e,
                                        M = n) : (t[48] = n | e,
                                        x = o + 8 | 0,
                                        M = o),
                                        t[x >> 2] = c,
                                        t[M + 12 >> 2] = c,
                                        t[c + 8 >> 2] = M,
                                        t[c + 12 >> 2] = o;
                                        break
                                    }
                                    if (a = 496 + ((o = (e = l >>> 8) ? 16777215 < l >>> 0 ? 31 : l >>> ((o = 14 - ((D = ((F = e << (V = (e + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | V | (o = ((F <<= D) + 245760 | 0) >>> 16 & 2)) + (F << o >>> 15) | 0) + 7 | 0) & 1 | o << 1 : 0) << 2) | 0,
                                    t[c + 28 >> 2] = o,
                                    t[c + 20 >> 2] = 0,
                                    !((e = (t[s >> 2] = 0) | t[49]) & (n = 1 << o))) {
                                        t[49] = e | n,
                                        t[a >> 2] = c,
                                        t[c + 24 >> 2] = a,
                                        t[c + 12 >> 2] = c,
                                        t[c + 8 >> 2] = c;
                                        break
                                    }
                                    for (r = l << (31 == (0 | o) ? 0 : 25 - (o >>> 1) | 0),
                                    e = 0 | t[a >> 2]; ; ) {
                                        if ((-8 & t[e + 4 >> 2] | 0) == (0 | l)) {
                                            o = e,
                                            O = 307;
                                            break
                                        }
                                        if (!(o = 0 | t[(n = e + 16 + (r >>> 31 << 2) | 0) >> 2])) {
                                            O = 304;
                                            break
                                        }
                                        r <<= 1,
                                        e = o
                                    }
                                    if (304 == (0 | O)) {
                                        if (!(n >>> 0 < (0 | t[52]) >>> 0)) {
                                            t[n >> 2] = c,
                                            t[c + 24 >> 2] = e,
                                            t[c + 12 >> 2] = c,
                                            t[c + 8 >> 2] = c;
                                            break
                                        }
                                        if (307 == (0 | O) && (n = 0 | t[(e = o + 8 | 0) >> 2],
                                        (F = 0 | t[52]) >>> 0 <= n >>> 0 & F >>> 0 <= o >>> 0)) {
                                            t[n + 12 >> 2] = c,
                                            t[e >> 2] = c,
                                            t[c + 8 >> 2] = n,
                                            t[c + 12 >> 2] = o,
                                            t[c + 24 >> 2] = 0;
                                            break
                                        }
                                    }
                                }
                            } else {
                                for (0 == (0 | (F = 0 | t[52])) | l >>> 0 < F >>> 0 && (t[52] = l),
                                t[160] = l,
                                t[161] = a,
                                t[163] = 0,
                                t[57] = t[166],
                                t[56] = -1,
                                e = 0; t[(F = 232 + (e << 1 << 2) | 0) + 12 >> 2] = F,
                                t[F + 8 >> 2] = F,
                                32 != (0 | (e = e + 1 | 0)); )
                                    ;
                                V = l + (F = 0 == (7 & (F = l + 8 | 0) | 0) ? 0 : 0 - F & 7) | 0,
                                F = a + -40 - F | 0,
                                t[54] = V,
                                t[51] = F,
                                t[V + 4 >> 2] = 1 | F,
                                t[V + F + 4 >> 2] = 40,
                                t[55] = t[170]
                            }
                        } while (0);if ((e = 0 | t[51]) >>> 0 > _ >>> 0)
                            return D = e - _ | 0,
                            t[51] = D,
                            V = (F = 0 | t[54]) + _ | 0,
                            t[54] = V,
                            t[V + 4 >> 2] = 1 | D,
                            t[F + 4 >> 2] = 3 | _,
                            0 | F + 8
                    }
                    return 0
                }
                function o(e) {
                    return n(e)
                }
                function r() {
                    var e = {
                        qd_v: 1
                    };
                    return e.qdy = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" === escape(navigator.javaEnabled.toString()) ? "a" : "i",
                    e.qds = 0,
                    "undefined" != typeof js_call_java_obj && (e.qds = 1),
                    e.tm = Date.parse(new Date) / 1e3,
                    e
                }
                function a() {
                    return r()
                }
                (function() {
                    return !this
                }
                )() && (window.cmd5x = n,
                window.cmd5ly = o,
                window.cmd5xly = function s() {
                    var e = {
                        qdv: "1"
                    };
                    return e
                }
                ,
                window.cmd5xtmts = r,
                window.cmd5xlive = a,
                window.cmd5xvms = function l() {
                    return r()
                }
                )
            } catch (c) {}
            window.cmd5xtmts = r,
            window.cmd5x = n,
            window.cmd5ly = o,
            window.cmd5xlive = a,
            i.exports = {
                cmd5xtmts: r,
                cmd5x: n,
                cmd5ly: o,
                cmd5ver: "1"
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "47972355b1e0b2f4ef72": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("c627e4f58ec4241c41a2"));
        var o = (r.prototype.selectStreamType = function(e) {
            this._streamType = e
        }
        ,
        r.prototype._changeStreamType = function() {
            return this._streamType
        }
        ,
        r.prototype._fromTypeToString = function(e) {
            switch (e) {
            case 800:
                return {
                    "all": n["default"].getConfig("definition.4k")[0],
                    "abb": n["default"].getConfig("definition.4k")[1]
                };
            case 670:
                return {
                    "all": n["default"].getConfig("definition.1080p8m")[0],
                    "abb": n["default"].getConfig("definition.1080p8m")[1]
                };
            case 660:
                return {
                    "all": n["default"].getConfig("definition.1080p6m")[0],
                    "abb": n["default"].getConfig("definition.1080p6m")[1]
                };
            case 610:
                return {
                    "all": n["default"].getConfig("definition.1080p50")[0],
                    "abb": n["default"].getConfig("definition.1080p50")[1]
                };
            case 600:
                return {
                    "all": n["default"].getConfig("pgc" === QYP.playerType ? "definition.1080p" : "definition.1080p_ppc")[0],
                    "abb": n["default"].getConfig("pgc" === QYP.playerType ? "definition.1080p" : "definition.1080p_ppc")[1]
                };
            case 500:
                return {
                    "all": n["default"].getConfig("definition.720p")[0],
                    "abb": n["default"].getConfig("definition.720p")[1]
                };
            case 400:
                return {
                    "all": n["default"].getConfig("definition.super")[0],
                    "abb": n["default"].getConfig("definition.super")[1]
                };
            case 300:
                return {
                    "all": n["default"].getConfig("definition.high")[0],
                    "abb": n["default"].getConfig("definition.high")[1]
                };
            case 200:
                return {
                    "all": n["default"].getConfig("definition.smooth")[0],
                    "abb": n["default"].getConfig("definition.smooth")[1]
                };
            case 100:
                return {
                    "all": n["default"].getConfig("definition.speed")[0],
                    "abb": n["default"].getConfig("definition.speed")[1]
                };
            case 590:
                return {
                    "all": n["default"].getConfig("definition.720po")[0],
                    "abb": n["default"].getConfig("definition.720po")[1]
                };
            case 690:
                return {
                    "all": n["default"].getConfig("definition.1080po")[0],
                    "abb": n["default"].getConfig("definition.1080po")[1]
                };
            case 790:
                return {
                    "all": n["default"].getConfig("definition.2Ko")[0],
                    "abb": n["default"].getConfig("definition.2Ko")[1]
                };
            case 700:
                return {
                    "all": n["default"].getConfig("definition.2K")[0],
                    "abb": n["default"].getConfig("definition.2K")[1]
                }
            }
        }
        ,
        r.prototype._compare = function(o) {
            return function(e, t) {
                var i = e[o]
                  , n = t[o];
                return i < n ? -1 : n < i ? 1 : 0
            }
        }
        ,
        r.prototype.getDefinitionArr = function() {
            for (var e = [], t = 0; this._streams && t < this._streams.length; t++)
                if (this._changeStreamType() === this._streams[t].formatType || 1 == this._streams[t].limit)
                    try {
                        var i = {};
                        i.label = this._fromTypeToString(this._streams[t].bid).all,
                        i.url = this._streams[t].url || "",
                        i.bid = this._streams[t].bid,
                        i.type = this._streams[t].formatType,
                        i.abb = this._fromTypeToString(this._streams[t].bid).abb,
                        i.limit = this._streams[t].limit || !1,
                        i.svip = "pgc" !== QYP.playerType && this._streams[t].svip || !1,
                        e.push(i)
                    } catch (n) {
                        console.log("new bid " + this._streams[t].bid)
                    }
            return e.sort(this._compare("bid")),
            e
        }
        ,
        r.prototype.getDefinitionItem = function(e) {
            return {
                "label": this._fromTypeToString(e.bid).all,
                "url": e.url,
                "bid": e.bid
            }
        }
        ,
        r.prototype.getCurDefinitionIndex = function(e) {
            for (var t = this.getDefinitionArr(), i = 0; i < t.length; i++)
                if (e.bid == t[i].bid)
                    return i
        }
        ,
        r);
        function r(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._streamType = "TS",
            this._streams = e
        }
        t["default"] = o
    },
    "48845084357dc7708026": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.getPhase = function() {
            return this._phase
        }
        ,
        o.prototype.setPhase = function(e) {
            this._phase = e
        }
        ,
        o.prototype.isEngineReady = function(e) {
            return this._phaseGreaterThan(e == undefined ? this.getPhase() : e, this.ENGINE_READY)
        }
        ,
        o.prototype.isMovieStart = function(e) {
            return this._phaseGreaterThan(e == undefined ? this.getPhase() : e, this.MOVIE_START)
        }
        ,
        o.prototype.isMainMovieStart = function(e) {
            return this._phaseGreaterThan(e == undefined ? this.getPhase() : e, this.MAIN_MOVIE_START)
        }
        ,
        o.prototype.isAres = function(e) {
            return this._phaseGreaterThan(e == undefined ? this.getPhase() : e, this.ARES_START) && this._phaseLessThan(e == undefined ? this.getPhase() : e, this.ARES_END)
        }
        ,
        o.prototype._phaseGreaterThan = function(e, t) {
            return t <= e
        }
        ,
        o.prototype._phaseLessThan = function(e, t) {
            return e < t
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this._start = 0,
            this.CONFIG_READY = ++this._start,
            this.VIEW_READY = ++this._start,
            this.ENGINE_START = ++this._start,
            this.ENGINE_READY = ++this._start,
            this.PLUGINS_READY = ++this._start,
            this.VRS_START = ++this._start,
            this.VRS_READY = ++this._start,
            this.CHARGE_START = ++this._start,
            this.CHARGE_READY = ++this._start,
            this.ARES_START = ++this._start,
            this.ARES_END = ++this._start,
            this.MOVIE_START = ++this._start,
            this.FILLER_START = ++this._start,
            this.FILLER_END = ++this._start,
            this.MAIN_MOVIE_START = ++this._start,
            this.MAIN_MOVIE_END = ++this._start,
            this.PLAYBACK_START = ++this._start,
            this.PLAYBACK_END = ++this._start,
            this._phase = 0
        }
        t["default"] = new n
    },
    "48978116bed354cb6d8f": function(e, t, i) {
        "use strict";
        var n, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (n = function(e, t, i) {
            i.exports = {
                seriesLoadScripts: function(n, o) {
                    "object" != (void 0 === n ? "undefined" : l(n)) && (n = [n]);
                    var r = document.getElementsByTagName("head").item(0) || document.documentElement
                      , a = n.length - 1
                      , s = function s(e) {
                        var t, i = /\.css[^/]*/.test(n[e]);
                        i ? ((t = document.createElement("link")).setAttribute("type", "text/css"),
                        t.setAttribute("rel", "stylesheet"),
                        t.setAttribute("href", n[e])) : ((t = document.createElement("script")).setAttribute("type", "text/javascript"),
                        t.setAttribute("src", n[e])),
                        t.onload = t.onreadystatechange = function() {
                            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (this.onload = this.onreadystatechange = null,
                            i || this.parentNode.removeChild(this),
                            e != a ? s(e + 1) : "function" == typeof o && o(!0))
                        }
                        ,
                        t.onerror = t.onstalled = function() {
                            "function" == typeof o && o(!1)
                        }
                        ,
                        r.appendChild(t)
                    };
                    s(0)
                },
                parallelLoadScripts: function(e, t) {
                    "object" != (void 0 === e ? "undefined" : l(e)) && (e = [e]);
                    for (var i = document.getElementsByTagName("head").item(0) || document.documentElement, n = [], o = 0, r = 0; r < e.length; r++)
                        n[r] = document.createElement("script"),
                        n[r].setAttribute("type", "text/javascript"),
                        n[r].setAttribute("async", !0),
                        n[r].onload = n[r].onreadystatechange = function() {
                            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (o++,
                            this.onload = this.onreadystatechange = null,
                            this.parentNode.removeChild(this),
                            o == e.length && "function" == typeof t && t(!0))
                        }
                        ,
                        n[r].onerror = n[r].onstalled = function() {
                            "function" == typeof t && t(!1)
                        }
                        ,
                        n[r].setAttribute("src", e[r]),
                        i.appendChild(n[r])
                }
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "497dbe25c69684c13d68": function(e, t, i) {
        "use strict";
        var n = i("228d4a235ae4e2e71076")
          , o = i("7ff1de9f80f76987ddef").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return n(e, o)
        }
    },
    "4a077be629d240592d7a": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            FLASH_MISS: "FLASH_MISS",
            FLASH_NOT_ENABLED: "flashNotEnabled",
            NET_ERROR: "NET_ERROR",
            TECH_ERROR: "TECH_ERROR",
            PLUGIN_ERROR: "pluginError",
            TYPE_VRS: "vrs",
            VRS_A00001: "vrsA00001",
            VRS_A00003: "vrsA00003",
            VRS_A00004: "vrsA00004",
            VRS_A00005: "vrsA00005",
            VRS_A00110: "vrsA00110",
            VRS_A00111: "vrsA00111",
            VRS_A00119: "vrsA00119",
            VRS_A00120: "vrsA00120",
            VRS_A00020: "vrsA00020",
            VRS_DEFAULT_ERROR: "vrsDefault",
            CHARGE_FAILd: "chargeFaile",
            VRS_QPID_WRONG: "vrs_qpid_wrong",
            ASK_QPID_DEFAULT_ERROR: "askQpIdsDefault",
            VIDEO_ERROR: "videoError",
            MOBILE_SUPPORT_ERROR: "mobileSupportError",
            ENGINE_SUPPORT_ERROR: "engineSupportError",
            PCA_SUPPORT_ERROR: "pcaSupportError",
            ENGINE_NO_AVAILABLE_STREAM: "noAvailableStream",
            PLUGIN_INIT_FAIL: "pluginInitFail",
            PLUGIN_INIT_FAIL_PCA: "pluginInitFailPCA",
            PLUGIN_INIT_FAIL_FLASH: "pluginInitFailFlash",
            PROGRAM_NOT_EXIST: "ProgramNotExist",
            LIVE_WAITING_PGC: "LiveWaitingPGC",
            LIVE_WAITING_PPC: "LiveWaitingPPC",
            LIVE_END: "LiveEnd",
            LIVE_END_VOD: "LiveEndVod",
            LIVE_END_REPLAY: "LiveEndReplay",
            LIVE_PLAYBACK_END: "LivePlaybackEnd",
            USER_LOCATION_RESTRICTED: "USER_LOCATION_RESTRICTED",
            USER_CHECK_VIP_ERROR: "USER_CHECK_VIP_ERROR"
        }
    },
    "4afdb3d0356794c76e42": function(e, t, r) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = r("7e0ef422896a6b0d6693")
              , o = [];
            i.exports = n("dispatcher", {
                construct: function() {
                    this.__evtslist = {},
                    o.push(this)
                },
                statics: {
                    clearAll: function() {
                        for (var e = 0; e < o.length; e++)
                            o[e].__evtslist = {};
                        o.splice(0, o.length)
                    }
                },
                methods: {
                    once: function(e, t) {
                        var i = this;
                        return i.on(e, function n() {
                            t.apply(this, arguments),
                            i.un(e, n)
                        })
                    },
                    on: function(e, t) {
                        var i = this.__evtslist;
                        return "undefined" == typeof i[e] && (i[e] = []),
                        i[e].push(t),
                        this
                    },
                    fire: function(e) {
                        var t = this.__evtslist;
                        if (t[e.type]instanceof Array)
                            for (var i = 0, n = t[e.type]; i < n.length; i++)
                                try {
                                    n[i].call(this, e)
                                } catch (o) {
                                    try {
                                        console.error(o.stack || o)
                                    } catch (r) {}
                                }
                    },
                    un: function(e, t) {
                        var i = this.__evtslist;
                        return i[e]instanceof Array && (i[e] = t ? i[e].filter(function(e) {
                            return e !== t
                        }) : []),
                        this
                    }
                }
            })
        }
        .call(t, r, t, e)) === undefined || (e.exports = i)
    },
    "4bc512a6e4b38231ec9e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSA3tVUEOgyAQpNJncCDhNdp/9FH+o/Y1JBz8BtHdVQ+NjBTDycjBwCzMMjOJKHWPjAMProcQ2hhjT1OT2f9vedRav62134ZPVCZnSrNyqievaMjNnXOiaIHOf73308YpCs5T5U9uCnY76RYfArtdIQ0MpP6VKtVSwJYkB1SAbpRkOQBrKYAtoAKQAfQadShVAL1GDaCCy2aAnIDZlGaAGsBsrpPBSNrN+hdENpTizKkkA34caC5AKQvYLw8OqN3wrwMzWsYw/1ighBkAAAAASUVORK5CYII="
    },
    "51caa367481e39d4fbe2": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var o = n(i("4a077be629d240592d7a"))
          , r = n(i("c627e4f58ec4241c41a2"));
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var a = (s.prototype.getConfig = function(e, t) {
            var i = this._configMap[e]
              , n = {};
            return i = i || this._configMap[o["default"].TECH_ERROR],
            t instanceof Array ? n.content = r["default"].getRenderedStringByKey2(i.msg, t) : n.content = r["default"].getConfig(i.msg),
            n.isfeedback = !!i.isfeedback,
            n.refresh = i.canRefresh ? r["default"].getConfig("error.refresh") : "",
            n.realCode = i.realCode || e,
            n.report = i.canReport ? r["default"].getConfig("error.report") : "",
            n
        }
        ,
        s);
        function s() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s),
            this._configMap = {
                "TECH_ERROR": {
                    msg: "error.TechError",
                    canRefresh: !0,
                    canReport: !0
                },
                "pluginError": {
                    msg: "error.TechError",
                    canRefresh: !0,
                    canReport: !0
                },
                "FLASH_MISS": {
                    msg: "error.SupportError_Flash",
                    isfeedback: !0
                },
                "flashNotEnabled": {
                    msg: "",
                    isfeedback: !0
                },
                "chargeFaile": {
                    msg: "error.vrs.A00011",
                    isfeedback: !0
                },
                "vrsA00001": {
                    msg: "error.vrs.A00001",
                    realCode: "vrs.A00001",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00003": {
                    msg: "error.vrs.A00003",
                    realCode: "vrs.A00003",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00004": {
                    msg: "error.vrs.A00004",
                    realCode: "vrs.A00004",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00005": {
                    msg: "error.vrs.A00004",
                    realCode: "vrs.A00001",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00011": {
                    msg: "error.vrs.A00011",
                    realCode: "vrs.A00011",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00013": {
                    msg: "error.vrs.A00013",
                    realCode: "vrs.A00013",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00110": {
                    msg: "error.vrs.A00110",
                    realCode: "vrs.A00110",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00111": {
                    msg: "error.vrs.A00111",
                    realCode: "vrs.A00111",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00119": {
                    msg: "error.vrs.A00119",
                    realCode: "vrs.A00119",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00120": {
                    msg: "error.vrs.A00120",
                    realCode: "vrs.A00120",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsA00020": {
                    msg: "error.vrs.A00020",
                    realCode: "vrs.A00020",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrsDefault": {
                    msg: "error.vrs.default",
                    canRefresh: !0,
                    canReport: !0
                },
                "vrs_qpid_wrong": {
                    msg: "error.vrs.qpidWrong",
                    canRefresh: !0,
                    canReport: !0
                },
                "askQpIdsDefault": {
                    msg: "error.askQpIds.default",
                    realCode: "askQpIds",
                    canRefresh: !0,
                    canReport: !0
                },
                "videoError": {
                    msg: "error.PlayError",
                    canRefresh: !0,
                    canReport: !0
                },
                "mobileSupportError": {
                    msg: "error.SupportError_Mobile",
                    isfeedback: !0
                },
                "engineSupportError": {
                    msg: "error.SupportError_Engine",
                    isfeedback: !0
                },
                "pcaSupportError": {
                    msg: "error.SupportError_PCA",
                    isfeedback: !0
                },
                "noAvailableStream": {
                    msg: "error.PlayError",
                    canRefresh: !0,
                    canReport: !0
                },
                "pluginInitFail": {
                    msg: "error.pluginInitFail",
                    canRefresh: !0,
                    canReport: !0
                },
                "pluginInitFailFlash": {
                    msg: "error.pluginInitFailFlash",
                    canRefresh: !0,
                    canReport: !0
                },
                "pluginInitFailPCA": {
                    msg: "error.pluginInitFailPCA",
                    canRefresh: !0,
                    canReport: !0
                },
                "ProgramNotExist": {
                    msg: "error.ProgramNotExist",
                    canRefresh: !0,
                    canReport: !0
                },
                "LiveWaitingPGC": {
                    msg: "feedback.LiveWaiting_PGC",
                    isfeedback: !0
                },
                "LiveWaitingPPC": {
                    msg: "feedback.LiveWaiting_PPC",
                    isfeedback: !0
                },
                "LiveEnd": {
                    msg: "feedback.LiveEnded",
                    isfeedback: !0
                },
                "LiveEndVod": {
                    msg: "feedback.LiveEndWithVOD",
                    isfeedback: !0
                },
                "LiveEndReplay": {
                    msg: "feedback.LiveEndWithReplay",
                    isfeedback: !0
                },
                "LivePlaybackEnd": {
                    msg: "feedback.LivePlaybackEnded",
                    isfeedback: !0
                },
                "USER_LOCATION_RESTRICTED": {
                    msg: "error.VRS_A00111",
                    realCode: "A00111"
                },
                "USER_CHECK_VIP_ERROR": {
                    msg: "error.userCheckVipError",
                    canRefresh: !0
                }
            }
        }
        t["default"] = new a
    },
    "52709c6e9caa542af9ee": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = b(i("343def12cad299c54e12"))
          , o = b(i("f4f8d1db8536ad2b967a"))
          , r = b(i("46a6014a9c7af6bb18f4"))
          , a = b(i("c627e4f58ec4241c41a2"))
          , s = b(i("d9d936e8bd0056f50de0"))
          , l = b(i("790825d0dabf4060a0d9"))
          , c = b(i("48978116bed354cb6d8f"))
          , u = b(i("4a077be629d240592d7a"))
          , f = b(i("162f473717848ae5cb34"))
          , d = (b(i("c9c4b3da6ca44d8d481f")),
        b(i("6fac10ab8352e9a71530")))
          , p = b(i("48845084357dc7708026"))
          , h = b(i("c779f0f9ff7f0eb554cb"))
          , _ = b(i("2ae2a4b52ce9baf37628"))
          , g = b(i("7e5547880fa3f17f0b5c"))
          , y = b(i("ae19a1d24e6ded12b0b9"));
        function b(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var m, v = (function E(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(A, m = n["default"]),
        A.prototype._load = function() {
            var e = this;
            if (m.prototype.load.call(this),
            window[this._config.refName])
                this._assemble();
            else {
                var t = this._player.getJsUrl(this._config.path);
                c["default"].seriesLoadScripts([t], function() {
                    e._assemble()
                })
            }
        }
        ,
        A.prototype._assemble = function() {
            window[this._config.refName],
            this._mw = new o["default"](this._container,this._player),
            this.checkEdge()
        }
        ,
        A.prototype.checkEdge = function() {
            var e = this;
            if (f["default"].browser.edge)
                if (this._player.getProgramInfo() && this._player.getProgramInfo().checkAllCutterDone) {
                    var t = {
                        type: this._player.getProgramInfo().allCutter ? liveAres.type.ARES_MARS : liveAres.type.ARES_FLASH,
                        middleware: this._mw
                    };
                    this._engingInit(t)
                } else
                    console.log("checkEdge  wait..."),
                    setTimeout(function() {
                        e.checkEdge()
                    }, 100);
            else {
                var i = {
                    type: d["default"].isFlash(d["default"].getRecommendTypeByBrowser().type) ? liveAres.type.ARES_FLASH : liveAres.type.ARES_MARS,
                    middleware: this._mw
                };
                this._engingInit(i)
            }
        }
        ,
        A.prototype._engingInit = function(e) {
            this._ares = liveAres.createAres(this._container, e),
            this._handlers || (this._handlers = {
                videostatus: this._onVideoStatus.bind(this),
                aresinit: this._onAresInit.bind(this),
                rollplay: this._onRollPlay.bind(this),
                rollend: this._onRollEnd.bind(this),
                rollloadfinish: this._onRollLoadFinish.bind(this),
                playerstart: this._onPlayerStart.bind(this),
                playerend: this._onPlayerEnd.bind(this),
                aresnext: this._onAresNext.bind(this),
                aresallend: this._onAresAllEnd.bind(this),
                playerready: this._onPlayerReady.bind(this),
                playernotready: this._onPlayerNotReady.bind(this),
                gasplay: this._onGasPlay.bind(this),
                aresstatus: this._onAresStatus.bind(this),
                control: this._onControl.bind(this),
                aresblock: this._onAresBlock.bind(this),
                moviereset: this._onMovieReset.bind(this)
            },
            this._ares.on(liveAres.type.ARES_INIT, this._handlers.aresinit),
            this._ares.on(liveAres.type.ARES_ROLL_PLAY, this._handlers.rollplay),
            this._ares.on(liveAres.type.ARES_ROLL_END, this._handlers.rollend),
            this._ares.on(liveAres.type.ARES_ROLL_FINISH, this._handlers.rollloadfinish),
            this._ares.on(liveAres.type.ARES_PLAYER_START, this._handlers.playerstart),
            this._ares.on(liveAres.type.ARES_PLAYER_END, this._handlers.playerend),
            this._ares.on(liveAres.type.ARES_NEXT, this._handlers.aresnext),
            this._ares.on(liveAres.type.ARES_ALL_END, this._handlers.aresallend),
            this._ares.on(liveAres.type.ARES_STATUS, this._handlers.aresstatus),
            this._ares.on(liveAres.type.ARES_BLOCK, this._handlers.aresblock),
            this._mw.bussiness.on("_playdata_", this._handlers.gasplay),
            this.addPlayerEvent(l["default"].PLAYER_READY, this._handlers.playerready),
            this.addPlayerEvent(l["default"].CHARGE_FAIL, this._handlers.playernotready),
            this.addPlayerEvent(l["default"].VIDEO_STATUS, this._handlers.videostatus),
            this.addPlayerEvent(l["default"].MOVIE_RESET, this._handlers.moviereset),
            this.addPlayerEvent(l["default"].CONTROL, this._handlers.control))
        }
        ,
        A.prototype.destroy = function() {
            this._handlers && (this.clearAres(),
            this.removeAllPlayerEvents(),
            this._handlers = null),
            m.prototype.destroy.call(this)
        }
        ,
        A.prototype.clearAres = function() {
            this._ares && (this._ares.removeAllListeners(),
            this._ares.destroy(),
            this._ares = null),
            this._mw && (this._mw.destroy(),
            this._mw = null)
        }
        ,
        A.prototype._onControl = function(e) {
            switch (e.type) {
            case l["default"].CONTROL_PLAY:
            case l["default"].CONTROL_BACKLIVE:
            case l["default"].CONTROL_SEEK:
                this.resumeAres();
                break;
            case l["default"].CONTROL_PAUSE:
                this.pauseAres();
                break;
            case l["default"].CONTROL_VOLUME:
                this._aresEnd || this.changeVolume(e.data.value);
                break;
            case l["default"].CONTROL_FULLSCREEN_SWITCH:
                this._aresEnd || this.toggleFullScreen(e.data.value);
                break;
            case l["default"].ZOOM_SWITCH:
                e.data
            }
        }
        ,
        A.prototype._onZoomSwitch = function(e) {
            this._zoomPercent = e.value,
            this._container.style.margin = "auto",
            this._container.style.width = this._zoomPercent + "%",
            this._container.style.height = this._zoomPercent + "%",
            this.toggleFullScreen(),
            console.log("ccc _onZoomSwitch")
        }
        ,
        A.prototype._onAresStatus = function(e) {
            var t = e.status
              , i = e.type;
            switch (y["default"].info("AresPlugin", "_onAresStatus," + t + "," + i),
            t) {
            case liveAres.type.STATUS_PLAY:
                this._player.emit(l["default"].VIDEO_STATUS, {
                    type: l["default"].VIDEO_ARES_PLAY
                });
                break;
            case liveAres.type.STATUS_PAUSE:
                this._player.emit(l["default"].VIDEO_STATUS, {
                    type: l["default"].VIDEO_ARES_PAUSE
                })
            }
        }
        ,
        A.prototype._onVideoStatus = function(e) {
            var t = e.type;
            switch ("videoTimeupdate" != t && y["default"].info("AresPlugin", "_onVideoStatus," + t),
            t) {
            case l["default"].VIDEO_STOP:
                this.nextAres(!1);
                break;
            case l["default"].VIDEO_ERROR:
                this.nextAres(!0);
                break;
            case l["default"].VIDEO_AUTOPLAY_FAIL:
            }
        }
        ,
        A.prototype._onGasPlay = function(e) {
            y["default"].info("AresPlugin", " _onGasPlay:" + JSON.stringify(e)),
            this._firstNotifyPlay || (this._firstNotifyPlay = !0,
            this._player.emit(l["default"].ARES_ROLL_PLAY, e.file))
        }
        ,
        A.prototype.nextAres = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined && arguments[0];
            if (!this._aresEnd && this._mw)
                if (e ? this._mw.notify("error") : this._mw.notify("ended"),
                this._mw.hasNextGas()) {
                    var t = this._mw.getNextGas();
                    this._player.emit(l["default"].ARES_ROLL_PLAY, t.file)
                } else
                    this._onAresAllEnd(null)
        }
        ,
        A.prototype._onAresInit = function(e) {
            y["default"].info("AresPlugin", " _onAresInit:" + JSON.stringify(e));
            var t = e.success
              , i = e.code
              , n = e.message
              , o = {
                error: !t
            }
              , r = window[this._config.refName];
            if (t) {
                this._inited = !0,
                m.prototype.init.call(this, o);
                var a = g["default"].getVoiceMemory();
                this.changeVolume(a.volume),
                this._mw.muted(a.muted)
            } else
                i == r.type.FLASH_VERSION_LOWER ? (o.code = u["default"].FLASH_MISS,
                o.message = n,
                m.prototype.init.call(this, o)) : i == r.type.FLASH_NOT_ENABLED ? (o.code = u["default"].FLASH_NOT_ENABLED,
                o.message = n) : (o.code = u["default"].PLUGIN_INIT_FAIL,
                o.realCode = "ares." + i,
                o.message = n,
                m.prototype.init.call(this, o))
        }
        ,
        A.prototype._onAresBlock = function(e) {
            y["default"].info("AresPlugin", " _onAresBlock"),
            this._player.emit(l["default"].ARES_SHOW_CONTROL, !1)
        }
        ,
        A.prototype._onRollPlay = function(e) {
            y["default"].info("AresPlugin", " _onRollPlay"),
            e.type == window[this._config.refName].type.ARES_FLASH ? this._player.emit(l["default"].ARES_SHOW_CONTROL, !0) : this._player.emit(l["default"].ARES_SHOW_CONTROL, !1),
            window.QYP.isAd = !0
        }
        ,
        A.prototype._onRollEnd = function(e) {
            y["default"].info("AresPlugin", " _onRollEnd"),
            this._onAresAllEnd(null)
        }
        ,
        A.prototype._onRollLoadFinish = function(e) {
            y["default"].info("AresPlugin", " _onRollLoadFinish")
        }
        ,
        A.prototype._onPlayerStart = function(e) {
            y["default"].info("AresPlugin", " _onPlayerStart"),
            this._container.style.pointerEvents = "",
            e.id && -1 == this._playingList.indexOf(e.id) && this._playingList.push(e.id)
        }
        ,
        A.prototype._onPlayerEnd = function(e) {
            if (y["default"].info("AresPlugin", " _onPlayerEnd"),
            e.id) {
                var t = this._playingList.indexOf(e.id);
                -1 != t && this._playingList.splice(t, 1)
            }
            0 == this._playingList && (this._container.style.pointerEvents = "none")
        }
        ,
        A.prototype._onAresNext = function(e) {
            y["default"].info("AresPlugin", " _onAresNext")
        }
        ,
        A.prototype._onAresAllEnd = function(e) {
            this.ready && (y["default"].info("AresPlugin", " _onAresAllEnd"),
            this._reenter && (this._reenter = !1,
            p["default"].setPhase(p["default"].ARES_END),
            this._container.style.pointerEvents = "none",
            this._container.style.zIndex = "9",
            this._player.emit(l["default"].ARES_ROLL_END),
            this._player.emit(l["default"].MOVIE_ENTER)),
            this._aresEnd || (this._aresEnd = !0))
        }
        ,
        A.prototype._onPlayerNotReady = function(e) {
            this.ready = !1,
            this.aresCoreInit()
        }
        ,
        A.prototype._onPlayerReady = function(e) {
            this.ready = !0,
            y["default"].info("AresPlugin", " _onPlayerReady"),
            this._container.style.zIndex = "",
            this._reenter = !0,
            this._aresEnd ? this._onAresAllEnd(null) : this.initAres()
        }
        ,
        A.prototype._onMovieReset = function(e) {
            y["default"].info("AresPlugin", " _onMovieReset"),
            this.resetAres(e.tvid)
        }
        ,
        A.prototype.resetAres = function(e) {
            e && this._tvid != e && (this._aresEnd = !1),
            this._firstNotifyPlay = !1,
            this._mw && this._mw.reset(),
            this.stopAres()
        }
        ,
        A.prototype.initAres = function() {
            p["default"].setPhase(p["default"].ARES_START),
            this._mw.reinit(),
            this.aresCoreInit()
        }
        ,
        A.prototype.aresCoreInit = function() {
            console.log("aresCoreInit");
            var e = window[this._config.refName]
              , t = this._player.getProgramInfo()
              , i = _["default"].getPtid({
                istw: a["default"].isTWLocale(),
                isflash: this._ares.getType() == e.type.ARES_FLASH
            });
            this._tvid = t.tvid;
            var n = a["default"].isTWLocale() ? "qc_105136_100610" : "qc_100001_100246";
            console.log("广告初始化。。。。"),
            this._ares.initAres({
                playerId: n,
                clientVersion: r["default"].version,
                ptid: i,
                episodeId: t.tvid + "",
                albumId: t.tvid,
                channelId: t.channelId,
                locale: a["default"].getLocale(),
                isVIP: this._player.$user.getIsVIP(),
                passportCookie: this._player.$user.passportCookie(),
                passportId: this._player.$user.getUid(),
                passportKey: "2391461978",
                userId: "",
                videoMidware: this._mw,
                videoContainer: this._mw.video(),
                videoDefinition: t.definition.currentDefinition.bid,
                videoId: t.definition.currentDefinition.streamName,
                videoName: t.videoName,
                videoEventId: s["default"].generate(t.tvid),
                showVoiceIcon: !(f["default"].os.android || f["default"].os.ios),
                autoLoad: !0,
                autoRender: !0,
                isMacH5: !0,
                isPreload: !1,
                duration: this._mw.duration(),
                playSource: 0,
                vipFalseReason: {},
                volume: this._mw.volume()
            })
        }
        ,
        A.prototype.pauseAres = function() {
            this._ares && this._ares.pauseAres()
        }
        ,
        A.prototype.resumeAres = function() {
            this._ares && this._ares.resumeAres()
        }
        ,
        A.prototype.stopAres = function() {
            this._ares && this._ares.stopAres()
        }
        ,
        A.prototype.changeVolume = function(e) {
            this._ares && this._ares.changeVolume(e)
        }
        ,
        A.prototype.resize = function(e, t) {
            this._ares && this._ares.resize(e, t)
        }
        ,
        A.prototype.toggleFullScreen = function(e) {
            this._ares && this._ares.toggleFullScreen(e)
        }
        ,
        A.prototype.changeUser = function(e) {}
        ,
        A.prototype.getVersion = function() {
            return this._ares && this._ares.getVersion()
        }
        ,
        A.prototype.getIsAdEnd = function() {
            return this._aresEnd
        }
        ,
        A.prototype.getVideoEventId = function() {
            var e = this._player.getProgramInfo();
            return s["default"].generate(e.tvid)
        }
        ,
        A);
        function A(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, A);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, m.call(this, e, t));
            return i._player.mount("ares", i),
            i._type = h["default"].ARES,
            i._playingList = [],
            i._tvid = null,
            i._config = i._player.getConfig().getEnvConfig("ares"),
            i._aresEnd = !1,
            i._load(),
            i
        }
        t["default"] = v
    },
    "53065c83966dce0d1759": function(e, t, _) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = _("fb885b8dee52c75a3d84")
              , o = _("fa4e6c91b6a23ac6e195")
              , r = 0
              , a = !1
              , s = ""
              , l = window.webEventID || ""
              , c = function c() {
                l = window.webEventID || ""
            }
              , u = function u() {
                return o(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * r++)
            }
              , f = function f(e, t) {
                n.set(e, t, {
                    expires: 31536e6,
                    path: "/",
                    domain: "iqiyi.com"
                })
            }
              , d = function d() {
                var e = n.get("QC006");
                return e || (a = !0,
                e = u(),
                f("QC006", e)),
                e
            }
              , p = {
                createUUID: function() {
                    function e() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1).toUpperCase()
                    }
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                },
                getJsuid: d,
                getFluid: function h() {
                    var e = n.get("QC005");
                    return e || (a = !0,
                    e = u(),
                    f("QC005", e)),
                    e
                },
                getWeid: function() {
                    return l = l || (window.webEventID || o(d() + "weid" + +new Date))
                },
                getEid: function() {
                    var e = "";
                    return s || (e = d(),
                    s = o(e + "veid" + 1 * new Date)),
                    s
                },
                getIsNewUser: function() {
                    return a
                },
                init: function() {
                    try {
                        window.addEventListener("unload", c),
                        window.addEventListener("beforeunload", c),
                        window.addEventListener("pagehide", c)
                    } catch (e) {}
                }
            };
            i.exports = p
        }
        .call(t, _, t, e)) === undefined || (e.exports = i)
    },
    "53a0608beb6b6c98b6b4": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var d = a(i("790825d0dabf4060a0d9"))
          , P = a(i("94172d95dee6e1d4885c"))
          , n = a(i("ef27ce2cb14e12f800a9"))
          , o = a(i("458af3e271aa64a9b91f"))
          , r = a(i("4a077be629d240592d7a"))
          , p = a(i("e2263676467d036c3349"))
          , h = a(i("96598f2d6ae9c8676ba4"))
          , _ = a(i("12343932e39887317ee6"))
          , g = a(i("6fac10ab8352e9a71530"))
          , y = a(i("08171cb2ca5542fd13db"));
        i("bef7a691bb63f7f92f11");
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = (l.prototype.parse = function(e) {
            var t = {
                error: !1
            };
            if (this._currentVd = n["default"].read(l.PLAYER_VD_KEY),
            this.provider = this._getValue(e, "provider", d["default"].PROGRAM_PPC),
            this.charge = this._getValue(e, "boss", d["default"].PROGRAM_FREE),
            this.epgUrl = this._parseEpgUrl(this._getValue(e, "epgUrl")),
            this.errorUrl = this._getValue(e, "statusUrl"),
            this.playbackDuration = parseInt(this._getValue(e, "duration"), 10),
            this.maxPlayTime = this._getValue(e, "maxPlayTime"),
            this.lctype = this._getValue(e, "type"),
            this.liveType = this._getValue(e, "liveType"),
            this.pano = e.hasOwnProperty("pano") && e.pano && e.pano.hasOwnProperty("type") && "2" == e.pano.type,
            window.QYP.boss = this.charge,
            e.hasOwnProperty("program")) {
                var i = e.program;
                0 < i.streamStart && Math.ceil(i.streamStart / 1e3),
                0 < i.streamEnd && Math.ceil(i.streamEnd / 1e3),
                this.beginTime = i.startTime != undefined ? Math.ceil(Number(i.startTime) / 1e3) : -1,
                0 == this.beginTime && (this.beginTime = -1),
                console.log("program.endTime", i.endTime),
                this.endTime = i.endTime != undefined ? Math.ceil(Number(i.endTime) / 1e3) : -1,
                console.log("this['endTime']", this.endTime),
                0 == this.endTime && (this.endTime = -1),
                this.streamBeginTime = i.streamStartTime != undefined ? Math.ceil(Number(i.streamStartTime) / 1e3) : this.beginTime,
                0 == this.streamBeginTime && (this.streamBeginTime = -1),
                this.streamEndTime = i.streamEndTime != undefined ? Math.ceil(Number(i.streamEndTime) / 1e3) : this.endTime,
                0 == this.streamEndTime && (this.streamEndTime = -1),
                this.beginTime < this.streamBeginTime && (this.beginTime = this.streamBeginTime),
                i.startFillerTime != undefined ? this.startFillerTime = Math.floor(i.startFillerTime / 1e3) : this.startFillerTime = -1,
                this.videoName = this._getValue(i, "name"),
                this.chatPopup = this._getValue(i, "showPopups"),
                this.sendFake = this._getValue(i, "sendFake"),
                this.logoOpen = this._getValue(i, "waterMarkFlag", !1),
                i.hasOwnProperty("logoHidden") && (this.lowerLogoOpen = -1 == i.logoHidden.indexOf(2) && -1 == i.logoHidden.indexOf("2"),
                this.topLogoOpen = -1 == i.logoHidden.indexOf(1) && -1 == i.logoHidden.indexOf("1")),
                this.isProduced = !!this._getValue(i, "qiyiProduced") || !!this._getValue(i, "isProduced"),
                this.isProduced || (this.isExclusive = !!this._getValue(i, "exclusiveStatusIqiyi") || !!this._getValue(i, "exclusive")),
                this.vipTypes = this._getValue(i, "vipTypes"),
                i.hasOwnProperty("vodList") && 0 < i.vodList.length && i.vodList[0].hasOwnProperty("vodUrl") && (this.vodUrl = i.vodList[0].vodUrl,
                this._handleL2VNotice())
            } else
                t = {
                    error: !0,
                    code: r["default"].VRS_DEFAULT_ERROR,
                    message: "response has no program"
                };
            return this.serverStartTime = Math.ceil((new Date).getTime() / 1e3),
            this.timestamp = this._getValue(e, "timestamp"),
            this.timestamp ? this.timestamp = this.serverStartTime : this.timestamp = Math.ceil(this.timestamp / 1e3),
            0 < this.endTime && this.endTime < this.timestamp ? (this.playType = d["default"].PROGRAM_PLAY_VOD,
            this.videoTime = this.beginTime) : (this.playType = d["default"].PROGRAM_PLAY_LIVE,
            this.videoTime = -1),
            e.hasOwnProperty("streams") && 0 < e.streams.length ? (o["default"].firstVrs && (o["default"].firstVrs = !1,
            this._sendQos({
                "evetp": 2020,
                "content": JSON.stringify({
                    "type": "request",
                    "msg": "first_request_vrs_ok"
                })
            })),
            this._sendQos({
                "evetp": 601,
                "content": JSON.stringify({
                    "type": "stream_url_success",
                    "msg": e.streams.length
                })
            }),
            o["default"].send603 = !0,
            this.streams = e.streams,
            this._analyzeStreams(e)) : (this.streams = [],
            2 == this.charge || (t = {
                error: !0,
                code: r["default"].VRS_DEFAULT_ERROR,
                message: "no streams mounted"
            })),
            this.provider == d["default"].PROGRAM_PPC && -1 == this.beginTime && -1 == this.endTime && (t = {
                error: !0,
                code: r["default"].VRS_DEFAULT_ERROR,
                message: "no beginTime and endTime"
            }),
            t
        }
        ,
        l.prototype._analyzeStreams = function(e) {
            var t, i, n = 0, o = 0, r = 0, a = e.streams, s = e.ctl, l = P["default"].DEFAULT_ORDER, c = a;
            for (c.sort(function(e, t) {
                return e.bid > t.bid
            }),
            n = 0; n < c.length; n++) {
                var u = c[n];
                if (u) {
                    (f = u.url).match(/^hcdnlive/i) && f.match(/hl_pltp=1/i) && (this.allCutter = !1);
                    var f = u.url
                      , d = {
                        "lvid": u.streamName,
                        "key": {}
                    }
                      , p = f.split("?")[1].split("&");
                    for (o = 0,
                    r = p.length; o < r; o++) {
                        var h = p[o].split("=");
                        d.key[h[0]] = h[1]
                    }
                    u.remark = d
                }
            }
            var _ = !(this.checkAllCutterDone = !0);
            if (s && s.vut && s.ut)
                for (n = 0; n < s.ut.length; n++)
                    -1 != s.vut.indexOf(s.ut[n]) && (_ = !0);
            var g, y = function y(e, t) {
                var i = [];
                for (n = 0; n < e.length; n++)
                    e[n].bid != t && i.push(e[n]);
                return i
            }, b = [], m = [];
            if (s && s.vip && s.vip.bids)
                for (var v = s.vip.bids, A = 0, E = v.length; A < E; A++)
                    i = parseInt(v[A]),
                    s.configs && s.configs[i] && (b.push(i),
                    1 == s.configs[i].s && (_ || (m.push(i),
                    c = y(c, i))));
            for (this._currentVd && l.unshift(this._currentVd),
            n = 0,
            t = l.length; n < t; n++) {
                i = l[n];
                var T = this.getDefaultDefinitionOfBid(i, null, c);
                if (T) {
                    g = T;
                    break
                }
            }
            for (var w = [], S = 0; S < m.length; S++)
                w.push({
                    bid: m[S],
                    limit: !0,
                    svip: !0
                });
            w = w.concat(c);
            for (var C = 0; C < c.length; C++)
                c[C].svip = -1 != b.indexOf(c[C].bid);
            this.definition = {
                currentDefinitionList: c,
                currentDefinition: g,
                limitDefinitionBids: b,
                realLimitDefinitionBids: m,
                compositeDefinitionsList: w
            }
        }
        ,
        l.prototype.getDefinitionsByBid = function(n, o, e) {
            var t = [];
            return (e = e || this.definition && this.definition.currentDefinitionList) && (t = e.filter(function(e, t, i) {
                return e.bid == n && (!o || o && e.formatType == o)
            })),
            t
        }
        ,
        l.prototype.getDefaultDefinitionOfBid = function(e, t, i) {
            var n = null
              , o = this.getDefinitionsByBid(e, t, i);
            if (o && 0 < o.length)
                if (1 == o.length)
                    n = o[0];
                else
                    for (var r = 0; r < o.length; r++)
                        if ("HLFLV" == o[r].formatType) {
                            n = o[r];
                            break
                        }
            return n
        }
        ,
        l.prototype.getDistinctBidLength = function() {
            var e = 0;
            if (this.streams && 0 < this.streams.length)
                for (var t = {}, i = 0; i < this.streams.length; i++) {
                    var n = this.streams[i].bid;
                    t[n] || (t[n] = ++e)
                }
            return e
        }
        ,
        l.prototype.getCurrentVD = function() {
            return this._currentVd
        }
        ,
        l.prototype.setCurrentVD = function(e) {
            this._currentVd = e,
            n["default"].write(l.PLAYER_VD_KEY, e),
            this.definition.currentDefinition = this.getDefaultDefinitionOfBid(e, null, this.definition.currentDefinitionList)
        }
        ,
        l.prototype._parseEpgUrl = function(e) {
            var t = e.split("?");
            return -1 == e.indexOf("src=") && (2 === t.length && "" !== t[1] ? e += "&" : -1 === e.indexOf("?") && (e += "?"),
            e += "src=1702633101b340d8917a69cf8a4b8c7c"),
            e
        }
        ,
        l.prototype._handleL2VNotice = function() {
            (new Date).getTime(),
            Number(this.playbackDuration),
            this.maxPlayTime && this.maxPlayTime
        }
        ,
        l.prototype._getValue = function(e, t, i) {
            return e && e.hasOwnProperty(t) ? e[t] : i
        }
        ,
        l.prototype.destroy = function() {}
        ,
        l.prototype._sendQos = function(e) {
            this._player && this._player.emit(d["default"].SENSOR_QOS, e)
        }
        ,
        l.prototype.setAresEnd = function() {
            this._aresEnd = !0
        }
        ,
        l.prototype.getAresEnd = function() {
            return this._aresEnd
        }
        ,
        l.prototype.getStreamUrl = function(o) {
            if (p["default"].isEPG())
                return o(this.hcdnlive);
            var e = void 0
              , r = this.definition.currentDefinition
              , a = void 0
              , i = void 0
              , t = "1" == r.remark.key.hl_pltp
              , s = h["default"].isProgramPlaying() && h["default"].isPlaybackPlaying()
              , l = this;
            function n(e, t) {
                s ? c(e = _["default"].hcdnRealtimeToCut(e), t) : p["default"].isPPC() ? function n(t, i) {
                    y["default"].req(r.streamName, function(e) {
                        e && 2 == e.protocol ? c(t = _["default"].hcdnRealtimeToCut(r.url), i) : u(t)
                    })
                }(e, t) : u(e)
            }
            function c(e, t) {
                t ? /hl_sttp=ts/.test(e) ? u(e) : a && a.url ? u(e = _["default"].hcdnDataToTs(e, i, a)) : o(null) : u(e)
            }
            function u(e) {
                l.charge == d["default"].PROGRAM_CHARGE && (r.remark && r.remark.urlkey ? e += r.remark.urlkey : e = ""),
                function n(e) {
                    if (a && a.url && /hl_pltp=0/.test(e) && g["default"].isPt() && h["default"].isProgramPlaying() && (h["default"].isLivePlaying() || h["default"].isFillerPlaying())) {
                        var t = a.url;
                        t = _["default"].trimM3u8Url(t),
                        l.charge == d["default"].PROGRAM_CHARGE ? a.remark && a.remark.urlkey ? (t += a.remark.urlkey,
                        o(e)) : function i(t, e) {
                            l._player.chargeCheckRequest(l.tvid, a, function(e) {
                                e && e.data && e.data.t && (a.remark.urlkey = "&t=" + e.data.t + "&QY00001=" + e.data.u,
                                a.remark.urlkey),
                                o(t)
                            }, function() {
                                o(t)
                            })
                        }(e) : o(e)
                    } else
                        o(e)
                }(e)
            }
            !function f() {
                g["default"].isHttp() ? (a = l.getDefinitionsByBid(r.bid, "TS")[0]) && a.url ? (e = a.url,
                u(e = _["default"].trimM3u8Url(e))) : o(null) : g["default"].isFlash() ? (i = l.getDefinitionsByBid(r.bid, "HLFLV")[0]) && i.url ? (e = i.url,
                t ? n(e, !1) : u(e)) : o(null) : (a = l.getDefinitionsByBid(r.bid, "TS")[0],
                (i = l.getDefinitionsByBid(r.bid, "HLFLV")[0]) && i.url ? (e = i.url,
                t ? n(e, !0) : c(e, !0)) : o(null))
            }()
        }
        ,
        l);
        function l(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null;
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l),
            this.tvid = e.tvid || e.qpId,
            this.channelId = e.channelId,
            this.roomId = e.roomId,
            this.hcdnlive = e.hcdnlive,
            this.streams = [],
            this._player = t,
            this.definition = {
                currentDefinitionList: [],
                currentDefinition: {},
                limitDefinitionBids: [],
                realLimitDefinitionBids: []
            },
            this.checkAllCutterDone = !1,
            this.allCutter = !0
        }
        s.PLAYER_VD_KEY = "QiyiPlayerVDLive",
        t["default"] = s
    },
    "54708c14d466c7781bbf": function(e, t, i) {
        "use strict";
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , f = i("d280362e5865b5c09927")
          , d = i("1e962945d4ab7b72ce9d").f
          , p = i("69d4ebc1bc0e9a108375")
          , h = i("af8672b546854983c7ba")
          , _ = i("3c5c0e2a3424018cbe00")
          , g = i("c4147e49039b1f52c431")
          , y = i("c0c26c21565c4a1b5a42");
        e.exports = function(e, t) {
            var i, n, o, r, a, s = e.target, l = e.global, c = e.stat;
            if (i = l ? f : c ? f[s] || _(s, {}) : (f[s] || {}).prototype)
                for (n in t) {
                    if (r = t[n],
                    o = e.noTargetGet ? (a = d(i, n)) && a.value : i[n],
                    !y(l ? n : s + (c ? "." : "#") + n, e.forced) && o !== undefined) {
                        if ((void 0 === r ? "undefined" : u(r)) === (void 0 === o ? "undefined" : u(o)))
                            continue;
                        g(r, o)
                    }
                    (e.sham || o && o.sham) && p(r, "sham", !0),
                    h(i, n, r, e)
                }
        }
    },
    "571dba6364f5ed9e44eb": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("c627e4f58ec4241c41a2"));
        var o = (r.prototype.setInfo = function(e) {
            this._info = e,
            this._tfTitle.innerHTML = e.properTitle,
            this._tfTime.innerHTML = this.__timeStr(e.duration),
            this._img.src = e.cover
        }
        ,
        r.prototype.setStatus = function(e) {
            0 === e ? (this._tfTitle.style.width = "236px",
            this._tfStatus.innerHTML = "",
            this._iconStatus.style.display = "none") : 1 === e ? (this._tfTitle.style.width = "146px",
            this._tfStatus.innerHTML = n["default"].getConfig("carousel.listCur"),
            this._tfStatus.style.color = "#23D31E",
            this._iconStatus.style.display = "block") : 2 === e && (this._tfTitle.style.width = "146px",
            this._tfStatus.innerHTML = n["default"].getConfig("carousel.listNext"),
            this._tfStatus.style.color = "#999999",
            this._iconStatus.style.display = "none")
        }
        ,
        r.prototype.showOrHide = function(e) {
            this._con.style.display = e ? "block" : "none"
        }
        ,
        r.prototype.__timeStr = function(e) {
            var t = e / 3600 | 0
              , i = e % 3600 / 60 | 0
              , n = e % 60;
            return (0 < t ? this.__zero(t) + ":" : "") + this.__zero(i) + ":" + this.__zero(n)
        }
        ,
        r.prototype.__zero = function(e) {
            var t = e + "";
            return 1 === t.length && (t = "0" + t),
            t
        }
        ,
        r.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = document.createElement(e);
            return t && (i.className = t),
            i
        }
        ,
        r);
        function r(e, t) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._con = this.__createDom("div", "con-pro"),
            this._con.appendChild(this._img = this.__createDom("img", "img-icon")),
            this._con.appendChild(this._tfTitle = this.__createDom("span", "tf-title")),
            this._con.appendChild(this._tfTime = this.__createDom("span", "tf-time")),
            this._con.appendChild(this._tfStatus = this.__createDom("span", "tf-status")),
            this._con.appendChild(this._iconStatus = this.__createDom("span", "icon-sign")),
            0 === t && (this._con.style.top = "10px",
            this._con.style.height = "80px"),
            this._con.style.display = "none",
            e.appendChild(this._con)
        }
        t["default"] = o
    },
    "5a06b39f0db0ab642b30": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("9f02978f1998980c265b"));
        var o, r = (function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(a, o = n["default"]),
        a.prototype.emitAsync = function() {
            for (var e = this, t = arguments.length, i = Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            setTimeout(function() {
                e.emit.apply(e, i)
            })
        }
        ,
        a.prototype.off = function() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            this.removeListener.apply(this, t)
        }
        ,
        a);
        function a() {
            return function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, o.call(this))
        }
        t["default"] = r
    },
    "5a0afae361b85de061d7": function(e, t, i) {
        var n = i("86adf03dddb7c33a3de2");
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, "/**\n * 皮肤颜色\n */\n.pw-feedback .theme-color {\n  color: #00cc36;\n}\n.M706C61796572-feedback {\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n  background: #000000;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n}\n/**\n * 警告图标\n */\n.M706C61796572-feedback > .icon_warn {\n  display: inline-block;\n  width: 41px;\n  height: 41px;\n  background: url(" + n(i("3ebda80d5e01a06bc66d")) + ') no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -57px;\n  margin-left: -150px;\n  user-select: none;\n}\n/**\n * 内容文本\n */\n.M706C61796572-feedback > .tf_content {\n  display: block;\n  position: absolute;\n  top: 50%;\n  /* left:50%; */\n  /* margin-top: -55px; */\n  /* margin-left: -95px; */\n  user-select: none;\n  /*文本样式*/\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  font-family: "weiruanyahei";\n  width: 100%;\n  left: 0;\n  margin-left: 0;\n}\n/**\n * 内容文本\n */\n.M706C61796572-feedback > .tf_code {\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -32px;\n  margin-left: -95px;\n  user-select: none;\n  /*文本样式*/\n  text-align: left;\n  font-size: 12px;\n  color: #999999;\n  font-family: "weiruanyahei";\n}\n/**\n * 报告错误按钮-普通状态\n */\n.M706C61796572-feedback > .btn_report {\n  display: inline-block;\n  width: 112px;\n  height: 34px;\n  background-image: url(' + n(i("fff80c4cf0e2e90ff032")) + ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: 23px;\n  margin-left: -132px;\n  cursor: pointer;\n  user-select: none;\n  /*文本样式*/\n  line-height: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #00cc36;\n  text-indent: 25px;\n  font-family: "weiruanyahei";\n}\n/**\n * 报告错误按钮-hover状态\n */\n.M706C61796572-feedback > .btn_report:hover {\n  display: inline-block;\n  width: 112px;\n  height: 34px;\n  background-image: url(' + n(i("39b4fc83201597c7a21f")) + ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: 23px;\n  margin-left: -132px;\n  cursor: pointer;\n  user-select: none;\n  /*文本样式*/\n  line-height: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #04c530;\n  text-indent: 25px;\n  font-family: "weiruanyahei";\n}\n/**\n * 刷新试试按钮-普通状态\n */\n.M706C61796572-feedback > .btn_refresh {\n  display: inline-block;\n  width: 112px;\n  height: 34px;\n  background-image: url(' + n(i("943a5923628a06c02fa6")) + ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: 23px;\n  margin-left: 20px;\n  cursor: pointer;\n  user-select: none;\n  /*文本样式*/\n  line-height: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #ffffff;\n  text-indent: 25px;\n  font-family: "weiruanyahei";\n}\n/**\n * 刷新试试按钮-hover状态\n */\n.M706C61796572-feedback > .btn_refresh:hover {\n  display: inline-block;\n  width: 112px;\n  height: 34px;\n  background-image: url(' + n(i("0f8fae83cfa19428c8cc")) + ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: 23px;\n  margin-left: 15px;\n  cursor: pointer;\n  user-select: none;\n  /*文本样式*/\n  line-height: 32px;\n  text-align: center;\n  font-size: 13px;\n  color: #ffffff;\n  text-indent: 25px;\n  font-family: "weiruanyahei";\n}\n.pw-feedback a:hover u {\n  color: #00cc36 !important;\n}\n.pw-feedback a u {\n  color: #fff !important;\n}\n.M706C61796572-feedback-bg {\n  background: url(//www.iqiyipic.com/qlive/fix/img/player/M706C61796572_loading_bg.jpg) no-repeat;\n  background-size: 100% 100%;\n}\n', ""])
    },
    "5a246217d6f48d7f8152": function(e, t, i) {
        "use strict";
        var n, o, r;
        undefined,
        o = [t, e],
        (r = "function" == typeof (n = function(e, t) {
            var i = {
                timeout: 5e3,
                jsonpCallback: "callback",
                jsonpCallbackFunction: null
            };
            function f(e) {
                try {
                    delete window[e]
                } catch (t) {
                    window[e] = undefined
                }
            }
            function d(e) {
                var t = document.getElementById(e);
                t && document.getElementsByTagName("head")[0].removeChild(t)
            }
            t.exports = function n(r) {
                var a = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]
                  , s = r
                  , l = a.timeout || i.timeout
                  , c = a.jsonpCallback || i.jsonpCallback
                  , u = undefined;
                return new Promise(function(t, e) {
                    var i = a.jsonpCallbackFunction || "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
                      , n = c + "_" + i;
                    window[i] = function(e) {
                        t({
                            ok: !0,
                            json: function() {
                                return Promise.resolve(e)
                            }
                        }),
                        u && clearTimeout(u),
                        d(n),
                        f(i)
                    }
                    ,
                    s += -1 === s.indexOf("?") ? "?" : "&";
                    var o = document.createElement("script");
                    o.setAttribute("src", "" + s + c + "=" + i),
                    a.charset && o.setAttribute("charset", a.charset),
                    o.id = n,
                    document.getElementsByTagName("head")[0].appendChild(o),
                    u = setTimeout(function() {
                        e(new Error("JSONP request to " + r + " timed out")),
                        f(i),
                        d(n),
                        window[i] = function() {
                            f(i)
                        }
                    }, l),
                    o.onerror = function() {
                        e(new Error("JSONP request to " + r + " failed")),
                        f(i),
                        d(n),
                        u && clearTimeout(u)
                    }
                }
                )
            }
        }
        ) ? n.apply(t, o) : n) === undefined || (e.exports = r)
    },
    "5bbd4d0d793767e043fb": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        (function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        )(i("c627e4f58ec4241c41a2"));
        var n = (o.prototype.initTips = function() {
            this._control.renderTips(),
            this.hideTips(),
            this._tips = [],
            this._startIntervalCheck()
        }
        ,
        o.prototype._startIntervalCheck = function() {
            this.__checkTid = setInterval(this._checkShow.bind(this), 1e3)
        }
        ,
        o.prototype._checkShow = function() {
            if (this._tips.length <= 0)
                return null;
            for (var e = (new Date).getTime(), t = !1, i = 0; i < this._tips.length; i++) {
                var n = this._tips[i];
                if (e < n.appearAt)
                    ;
                else if (e <= n.disappearAt) {
                    if (t = !0,
                    !n.isShow) {
                        n.isShow = !0,
                        this._curId = n.id,
                        this.showTips(n.content);
                        break
                    }
                } else
                    n.toDelete = !0
            }
            t || this.hideTips(),
            this._recycle()
        }
        ,
        o.prototype._recycle = function() {
            if (!(this._tips.length <= 0)) {
                for (var e = [], t = 0; t < this._tips.length; t++)
                    this._tips[t].toDelete || e.push(this._tips[t]);
                this._tips = e
            }
        }
        ,
        o.prototype.appendTips = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : 3
              , n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 0
              , o = (new Date).getTime();
            this._tips.push({
                content: e,
                hideWhenPlay: t,
                appearAt: 1e3 * n + o,
                disappearAt: 1e3 * n + o + 1e3 * i,
                id: ++this._id
            }),
            this._checkShow()
        }
        ,
        o.prototype.clearTips = function() {
            this._tips = [],
            this.hideTips()
        }
        ,
        o.prototype.notifyPlay = function() {
            if (!(this._tips.length <= 0)) {
                for (var e = 0; e < this._tips.length; e++)
                    this._tips[e].hideWhenPlay && (this._curId === this._tips[e].id && this.hideTips(),
                    this._tips[e].toDelete = !0);
                this._recycle(),
                setTimeout(this._checkShow.bind(this))
            }
        }
        ,
        o.prototype.showTips = function(e) {
            this._control.setAttribute("Tips", "content", e)
        }
        ,
        o.prototype.hideTips = function() {
            this._control.setAttribute("Tips", "visible", !1)
        }
        ,
        o.prototype.showTips2 = function(e) {
            this._control.setAttribute("Tips", "newTips"),
            this._control.setAttribute("Tips", "content2", e)
        }
        ,
        o.prototype.hideAllTips = function() {
            try {
                this._control.setAttribute("Tips", "visible", !1),
                this._control.setAttribute("Tips", "nvisible", !1)
            } catch (e) {}
        }
        ,
        o.hide_all_tips = function() {
            this._control && (this.hideAllTips(),
            this._tips = [])
        }
        ,
        o);
        function o(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this._control = e,
            this._id = 0,
            this._curId = -1
        }
        t["default"] = n
    },
    "5d0dd1cf8e8f85b48e82": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var n, o, r = document.attachEvent, a = navigator.userAgent.match(/Trident/), s = null, l = (n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 20)
            }
            ,
            function(e) {
                return n(e)
            }
            ), c = (o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout,
            function(e) {
                return o(e)
            }
            );
            function u(i) {
                var e = i.target || i.srcElement;
                e.__resizeRAF__ && c(e.__resizeRAF__),
                e.__resizeRAF__ = l(function() {
                    var t = e.__resizeTrigger__;
                    t && t.__resizeListeners__.forEach(function(e) {
                        e.call(t, i)
                    })
                })
            }
            function f(e) {
                this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__,
                this.contentDocument.defaultView.addEventListener("resize", u)
            }
            var d = function d(e, t) {
                if (!s.__resizeListeners__)
                    if (s.__resizeListeners__ = [],
                    r)
                        (s.__resizeTrigger__ = s).attachEvent("onresize", u);
                    else {
                        var i = s.__resizeTrigger__ = document.createElement("object");
                        i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),
                        i.__resizeElement__ = s,
                        i.onload = f,
                        i.type = "text/html",
                        a && s.appendChild(i),
                        i.data = "about:blank",
                        a || s.appendChild(i)
                    }
                s.__resizeListeners__.push(t)
            }
              , p = function p(e, t) {
                s.__resizeListeners__.splice(s.__resizeListeners__.indexOf(t), 1),
                s.__resizeListeners__.length || (r ? s.detachEvent("onresize", u) : (s.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize", u),
                s.__resizeTrigger__ = !s.removeChild(s.__resizeTrigger__)))
            }
              , h = function h(e) {
                s = e
            }
              , _ = function _() {
                return s
            };
            i.exports = {
                "on": d,
                "off": p,
                "registElement": h,
                "getElement": _
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "5d4b75391cc4278354d9": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = a(i("3db7b7aef52b79d4d289"))
          , o = a(i("fb885b8dee52c75a3d84"))
          , r = (a(i("fd0b44f556392d6a75ac")),
        a(i("1787093d7720fc0d37ae")),
        a(i("b46d390f19c21708f72a")));
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = (l.prototype.request = function(e) {
            var t = this.getInfo(e);
            return new Promise(function(i, n) {
                r["default"].doPost("//apis-live.iqiyi.com/v1/live/act/identify", t).then(function(e) {
                    var t = JSON.parse(e);
                    "A00000" === t.code ? i(t.data) : "P00001" === t.code ? n(t.code) : "P00100" === t.code && n(t.code)
                })["catch"](function(e) {
                    n(e)
                })
            }
            )
        }
        ,
        l.prototype.getInfo = function(e) {
            var t = {
                actId: e.actId,
                authCookie: o["default"].get("P00001") || "",
                userId: o["default"].get("P00003") || "",
                version: this._parent.player.getConfig().getEnvConfig("version"),
                platform: "1_10_101_1021",
                tl: "pcw",
                deviceId: o["default"].get("QC005") || "",
                ua: navigator.userAgent
            };
            return t.sn = n["default"].sign(t),
            t
        }
        ,
        l);
        function l(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l),
            this._parent = e
        }
        t["default"] = s
    },
    "5df575fb58162f755572": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = u(i("9addf98a9c578f2fe350"))
          , p = u(i("790825d0dabf4060a0d9"))
          , h = u(i("ac1ad70ff54a2cbc9cab"))
          , o = u(i("ae19a1d24e6ded12b0b9"))
          , a = u(i("694316029b4ae3dbacea"))
          , r = u(i("96598f2d6ae9c8676ba4"))
          , _ = u(i("a5bc7a5f0d8c74c1ea2b"))
          , g = u(i("c779f0f9ff7f0eb554cb"))
          , s = u(i("ae19a1d24e6ded12b0b9"))
          , l = u(i("e2263676467d036c3349"))
          , c = u(i("162f473717848ae5cb34"));
        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var f, d = (function b(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(y, f = n["default"]),
        y.prototype._reloadMovieSelf = function(e) {
            if (e) {
                var t = e.type
                  , i = e.data;
                switch (t) {
                case p["default"].VIDEO_ERROR:
                    if ((c["default"].os.android || c["default"].os.ios) && i && "4" == i.code)
                        return;
                    f.prototype.refreshMovie.call(this)
                }
            }
        }
        ,
        y.prototype.getJsUrl = function(e) {
            return e + "?v=" + this.getJsVersion()
        }
        ,
        y.prototype.getJsVersion = function() {
            return window.versionInfo && window.versionInfo.jsVersion || ""
        }
        ,
        y.prototype.sendVarietyMsg = function(e) {
            if (this.getPlayState(),
            a["default"].isPlaying() || a["default"].isPaused()) {
                if (!this._pluginManager)
                    return;
                var t = this._pluginManager.getPlugin(g["default"].BARRAGE);
                if (!t)
                    return;
                for (var i = JSON.parse(e), n = i.value, o = 0, r = n.length; o < r; o++)
                    t.appendBarrage(n[o].ct, n[o].ex ? n[o].ex.barrageColor : "#ffffff", 0 == i.type ? n[o].ex.barrageColor ? n[o].ex.barrageColor : "#ffffff" : null)
            }
        }
        ,
        y.prototype.sendGiftMsg = function(e) {
            if (e && e.ex && e.ex.pfse && 0 !== e.ex.pfse.length) {
                var t = e.ex.gr || 1;
                e = e.ex.pfse;
                for (var i = this._pluginManager.getPlugin(g["default"].EFFECT); t--; )
                    i.appendEffect(e)
            }
        }
        ,
        y.prototype.toggleSpecialEffects = function(e) {
            this._pluginManager && this._pluginManager.getPlugin(g["default"].EFFECT).toggle(e)
        }
        ,
        y.prototype.getControlAttribute = function(e, t) {
            var i = this._pluginManager.getPlugin(g["default"].CONTROL);
            return i && i._control && i._control.getAttribute(e, t) || !1
        }
        ,
        y.prototype.updateLiveStatus = function(e) {
            var t = this;
            if (e) {
                var i = JSON.stringify(e);
                s["default"].info("Liveplayer", "updateLiveStatus: " + i)
            }
            0 == e.status && l["default"].isPPC() && r["default"].isPlaybackPlaying() || (r["default"].setRoomStatus(e.status),
            e.qpid != undefined && r["default"].setQPgot(!0),
            this.emitAsync(p["default"].ROOM_STATUS_CHANGE, e.status),
            r["default"].isRoomStop(e.status) || r["default"].isRoomBan(e.status) ? (clearTimeout(this.__goingStartTid),
            this.__goingStartTid = 0,
            e.status = r["default"].ROOM_STOP,
            this.emit(p["default"].CALL_JS_LIVE_STATUS, {
                state: e
            }),
            this.stopMovie()) : a["default"].isPlaying() || !r["default"].isRoomLive(e.status) && !r["default"].isRoomCarousel(e.status) ? this.emit(p["default"].CALL_JS_LIVE_STATUS, {
                state: e
            }) : this.__isfirstplay == undefined ? (this.__isfirstplay = !0,
            this.startMovie(e.qpid),
            this.emit(p["default"].CALL_JS_LIVE_STATUS, {
                state: e
            }),
            clearTimeout(this.__goingStartTid),
            this.__goingStartTid = 0) : this.__goingStartTid || (this.__goingStartTid = setTimeout(function() {
                t.__goingStartTid && (t.startMovie(e.qpid),
                t.emit(p["default"].CALL_JS_LIVE_STATUS, {
                    state: e
                }),
                clearTimeout(t.__goingStartTid),
                t.__goingStartTid = 0)
            }, 1e4)))
        }
        ,
        y.prototype.updateRollPlayInfo = function(e) {}
        ,
        y.prototype.updateUserID = function(e) {}
        ,
        y.prototype.actStateChange = function(e) {
            r["default"].isRoomCarousel() && e && (e.videoDuration = 0,
            20 !== e.notifyType && 9 !== e.notifyType || (e.notifyType = 9,
            this._pluginManager.getPlugin(g["default"].CAROUSEL).nextProgram(e.videoQpId)),
            21 === e.notifyType && (e.notifyType = 11));
            var t = this._pluginManager.getPlugin(g["default"].TRYWATCH_PGC);
            t.actStateChange(e),
            this._pluginManager.getPlugin(g["default"].CONTROL).updateActDate(t.wrapParam(e))
        }
        ,
        y.prototype.getLastIdentifyResult = function() {
            return !0
        }
        ,
        y.prototype.setPlayerStatus = function(e) {
            this._pluginManager.getPlugin(g["default"].CONTROL).setPlayerStatus(e.name, e.attr, e.value)
        }
        ,
        y.prototype.checkLogin = function() {
            this._pluginManager.getPlugin(g["default"].TRYWATCH_PGC).checkLoginManager(!0)
        }
        ,
        y.prototype.checkLogout = function() {
            this._pluginManager.getPlugin(g["default"].TRYWATCH_PGC).checkLoginManager(!1)
        }
        ,
        y.prototype.checkIsVip = function() {}
        ,
        y.prototype.checkUnVip = function() {}
        ,
        y.prototype.register = function(e, t) {
            var i = this;
            console.log("register", e),
            this.isLoadAgain ? this._registerTimer = setTimeout(function() {
                i._pluginManager.getPlugin(g["default"].CONTROL).renderComponent(e, t)
            }, 300) : this._pluginManager.getPlugin(g["default"].CONTROL).renderComponent(e, t)
        }
        ,
        y.prototype.changeEpgStream = function(e, t, i) {
            this.loadMovie({
                programPlayerType: "epg",
                hcdnlive: e,
                beginTime: t,
                endTime: i
            })
        }
        ,
        y.prototype.openDanmuSwitch = function(e) {
            console.log("danmu openDanmuSwitch"),
            this.emit(p["default"].CONTROL, {
                type: p["default"].CONTROL_DANMU_SWITCH,
                data: {
                    value: !0,
                    atonce: !0
                }
            }),
            this._pluginManager.getPlugin(g["default"].CONTROL).openDanmuSwitch(e)
        }
        ,
        y.prototype.exitFullScreen = function() {
            this._pluginManager.getPlugin(g["default"].CONTROL).exitFullScreen()
        }
        ,
        y.prototype.chatSystemMessage = function(e) {
            this._pluginManager.getPlugin(g["default"].MSGWAY).append(2, e)
        }
        ,
        y.prototype.liveChatMessage = function(e) {
            if (this.getProgramInfo()) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (d) {
                        e = null
                    }
                if (e) {
                    var t = this.getProgramInfo().chatPopup
                      , i = e.type
                      , n = e.value;
                    if (_["default"].isProp(i) && t) {
                        for (var o = this._pluginManager.getPlugin(g["default"].EFFECT), r = 0, a = null, s = 0; r < n.length; r++)
                            if (a = null,
                            n[r].pfse && (a = n[r].pfse,
                            s = n[r].gr || 1),
                            a)
                                for (; s--; )
                                    o.appendEffect(a)
                    } else if (_["default"].isBarrage(i))
                        for (var l = this._pluginManager.getPlugin(g["default"].COMPERE), c = this._pluginManager.getPlugin(g["default"].BARRAGE), u = 0, f = null; u < n.length; u++)
                            (f = n[u]).ex && f.ex.isPresenter ? l.append(f.nk, f.ct, f.ic) : t && c.appendBarrage(f.ct, "#ffffff", f.u == h["default"].getUid() || f.ex && f.ex.uid == h["default"].getUid() ? "#ffffff" : null);
                    else
                        _["default"].isBarrageOff(i) ? this._pluginManager.getPlugin(g["default"].CONTROL).removeBarrage() : _["default"].isFillerStart(i) && this.emit(p["default"].NOTIFY_FILLER_START)
                }
            }
        }
        ,
        y.prototype.setSelfSendBarrageInfo = function(e) {
            this.liveChatMessage({
                type: _["default"].BARRAGE,
                value: [e]
            })
        }
        ,
        y.prototype.getScreenStatus = function() {
            var e = this._pluginManager.getPlugin(g["default"].CONTROL);
            return e ? e.isFullScreen() ? 1 : e.isPageFullScreen() ? 2 : 0 : -1
        }
        ,
        y.prototype.getPlayerLog = function() {
            return o["default"].getPlayerLog()
        }
        ,
        y.prototype.load = function(e) {
            var t = this;
            this.isLoadAgain = !0,
            console.log("载入新节目，多机位使用");
            var i = {};
            if (e.roomId ? i.roomId = e.roomId : e.qpId ? (i.tvid = e.qpId,
            i.channelId = e.channelId) : e.tvid && (i.tvid = e.tvid,
            i.channelId = e.channelId),
            i.roomId || i.tvid) {
                window.QYP.qpId = i.tvid,
                this._pluginManager.getPlugin(g["default"].CONTROL).reRender();
                try {
                    this._pluginManager.getPlugin(g["default"].BARRAGE).openOrClose(!1),
                    setTimeout(function() {
                        t._pluginManager.getPlugin(g["default"].BARRAGE).openOrClose(!0)
                    }, 0)
                } catch (n) {}
                this.loadMovie(i, e)
            }
        }
        ,
        y.prototype.volume = function(e) {
            if (e === undefined) {
                var t = this.getPlugin(g["default"].ENGINE);
                return t ? t.getVolume(e) : .8
            }
            var i = this.getPlugin(g["default"].CONTROL)
              , n = this.getPlugin(g["default"].ENGINE);
            i && i.setVolume(e),
            n && n.setVolume(e)
        }
        ,
        y.prototype.muted = function(e) {
            if (e === undefined) {
                var t = this.getPlugin(g["default"].ENGINE);
                return t ? t.getMuted() : .8
            }
            var i = this.getPlugin(g["default"].CONTROL);
            i && i.setMuted(e)
        }
        ,
        y);
        function y(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null;
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, y);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, f.call(this, e, t));
            return i.on(p["default"].VIDEO_STATUS, i._reloadMovieSelf.bind(i)),
            i
        }
        t["default"] = d
    },
    "5e49f901e4b9d213d168": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALhJREFUSA1jYBgFBEKAESx/zsKT4d//WQwM/2UIqCdSmvEJAxNjGoPRie1MYB1UNRxkItChYDMZGFggToK63OQUxEcQQfLJM2b/YaEB8QH5RhHUOWrBaBARDAGCCoZ+KoLmZCw+PWO+FZgbvbDIYBFi3MZgctIbiwQDtYIIWDRgB7h9gMNF2I3BLUotH+C0AeoDYPkNKmLBpSBOtSRKgMxkgMYBqHJggAiQaAoO5dAKB4fsqDBKCAAAfUsjj6OfuscAAAAASUVORK5CYII="
    },
    "61637bf383ae9d72a949": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (l.prototype.getUserAgent = function() {
            if (!this.userAgent_)
                try {
                    this.userAgent_ = navigator.userAgent ? navigator.userAgent : "UnKnow"
                } catch (e) {
                    this.userAgent_ = "Unkonwn"
                }
            return this.userAgent_
        }
        ,
        l.prototype.getBrowserName = function() {
            return this.isChrome() ? "Chrome" : this.isIE() ? "IE" : this.isSafari() ? "Safari" : this.isFirefox() ? "Firefox" : this.isOpera() ? "Opera" : "Unkonwn"
        }
        ,
        l.prototype.getVersion = function() {
            var n = undefined
              , e = this.getUserAgent();
            if (this.isIE())
                return this.getIEVersion_(e);
            var t = this.extractVersionTuples_(e);
            n = {},
            t.forEach(function(e) {
                var t = e[0]
                  , i = e[1];
                n[t] = i
            });
            var o = function o(e) {
                for (var t in n)
                    for (var i = 0; i < e.length; i++)
                        if (n[e[i]])
                            return n[e[i]]
            };
            if (this.isOpera())
                return o(["Version", "Opera", "OPR"]);
            if (this.isChrome())
                return o(["Chrome", "CriOS"]);
            var i = t[2];
            return i && i[1] || ""
        }
        ,
        l.prototype.getIEVersion_ = function(e) {
            var t = undefined
              , i = /rv: *([\d\.]*)/.exec(e);
            if (i && i[1])
                return i[1];
            var n = ""
              , o = /MSIE +([\d\.]+)/.exec(e);
            if (o && o[1])
                if (t = /Trident\/(\d.\d)/.exec(e),
                "7.0" == o[1])
                    if (t && t[1])
                        switch (t[1]) {
                        case "4.0":
                            n = "8.0";
                            break;
                        case "5.0":
                            n = "9.0";
                            break;
                        case "6.0":
                            n = "10.0";
                            break;
                        case "7.0":
                            n = "11.0"
                        }
                    else
                        n = "7.0";
                else
                    n = o[1];
            return n
        }
        ,
        l.prototype.extractVersionTuples_ = function(e) {
            for (var t = undefined, i = new RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"), n = []; t = i.exec(e); )
                n.push([t[1], t[2], t[3] || undefined]);
            return n
        }
        ,
        l.prototype.matchUserAgent_ = function(e) {
            return (this.getUserAgent() || "").match(e)
        }
        ,
        l.prototype.isOpera = function() {
            return this.matchUserAgent_("Opera") || this.matchUserAgent_("OPR")
        }
        ,
        l.prototype.isIE = function() {
            return this.matchUserAgent_("Trident") || this.matchUserAgent_("MSIE")
        }
        ,
        l.prototype.isFirefox = function() {
            return this.matchUserAgent_("Firefox")
        }
        ,
        l.prototype.isChrome = function() {
            return this.matchUserAgent_("Chrome") || this.matchUserAgent_("CriOS")
        }
        ,
        l.prototype.isSafari = function() {
            return this.matchUserAgent_("Safari") && !this.matchUserAgent_("Chrome") && !this.matchUserAgent_("CriOS") && !this.matchUserAgent_("Android")
        }
        ,
        l.prototype.detectOS = function() {
            var e = navigator.userAgent
              , t = "Win32" == navigator.platform || "Windows" == navigator.platform
              , i = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
            if (i)
                return "Mac";
            if ("X11" == navigator.platform && !t && !i)
                return "Unix";
            if (-1 < String(navigator.platform).indexOf("Linux"))
                return "Linux";
            if (t) {
                if (-1 < e.indexOf("Windows NT 5.0") || -1 < e.indexOf("Windows 2000"))
                    return "Win2000";
                if (-1 < e.indexOf("Windows NT 5.1") || -1 < e.indexOf("Windows XP"))
                    return "WinXP";
                if (-1 < e.indexOf("Windows NT 5.2") || -1 < e.indexOf("Windows 2003"))
                    return "Win2003";
                if (-1 < e.indexOf("Windows NT 6.0") || -1 < e.indexOf("Windows Vista"))
                    return "WinVista";
                if (-1 < e.indexOf("Windows NT 6.1") || -1 < e.indexOf("Windows 7"))
                    return "Win7";
                if (-1 < e.indexOf("Windows NT 10.0") || -1 < e.indexOf("Windows 10"))
                    return "Win10"
            }
            return "other"
        }
        ,
        l.prototype.getFPS = function() {
            var n = function n() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }
              , o = 0
              , r = Date.now()
              , a = Date.now()
              , s = function s() {
                var e = Date.now()
                  , t = e - a;
                if (Math.random(1e3 / t),
                o++,
                1e3 + r < (a = e)) {
                    var i = Math.round(1e3 * o / (e - r));
                    l.getInstance().fps = i,
                    window.QYP.fps = i,
                    o = 0,
                    r = e
                }
                n()(s)
            };
            s()
        }
        ,
        l.getInstance = function() {
            return l.ins || (l.ins = new l),
            l.ins
        }
        ,
        l);
        function l() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l),
            this.userAgent_ = null,
            this.gIP = "",
            this.fps = 0
        }
        n.ins = null,
        t["default"] = n
    },
    "644e97dfa15d7e58b890": function(e, t, i) {
        var n = i("86adf03dddb7c33a3de2");
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M706C61796572-carousel {\n  display: none;\n  margin-left: -174px;\n  bottom: 53px;\n  width: 380px;\n  height: 370px;\n  background-color: #333333;\n  position: absolute;\n  box-shadow: 0 2px 7px #000;\n  color: #fff;\n  border-radius: 4px;\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  cursor: default;\n  z-index: 11;\n}\n.M706C61796572-carousel > .con-top {\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  width: 100%;\n  background-color: #222222;\n  color: #c7c7c7;\n  font-size: 16px;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  font-family: MicrosoftYaHeiUI;\n  letter-spacing: 2px;\n}\n.M706C61796572-carousel > .con-top > .close {\n  width: 13px;\n  height: 13px;\n  background: url(" + n(i("fa0af53c32dc96c4b266")) + ') no-repeat;\n  position: absolute;\n  top: 13px;\n  right: 13px;\n  cursor: pointer;\n}\n.M706C61796572-carousel > .arrow-down {\n  left: 184px;\n  bottom: -6px;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #333;\n  width: 0;\n  height: 0;\n  position: absolute;\n  content: " ";\n}\n.M706C61796572-carousel > .mask-down {\n  left: 0px;\n  bottom: -12px;\n  width: 380px;\n  height: 12px;\n  position: absolute;\n}\n.M706C61796572-carousel > .con-scroll {\n  height: 330px;\n  width: 376px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n.M706C61796572-carousel > .con-scroll::-webkit-scrollbar {\n  width: 10px;\n}\n.M706C61796572-carousel > .con-scroll::-webkit-scrollbar-thumb {\n  background-color: #555555;\n  border: 2px solid #333333;\n  min-height: 50px;\n  border-radius: 6px;\n}\n.M706C61796572-carousel > .con-scroll::-webkit-scrollbar-track {\n  background-color: #333333;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro {\n  position: relative;\n  height: 70px;\n  padding-left: 20px;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro > .img-icon {\n  position: absolute;\n  width: 90px;\n  height: 50px;\n  top: 10px;\n  left: 20px;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro > .icon-sign {\n  width: 13px;\n  height: 13px;\n  background: url(' + n(i("d4f9bfb8bb6ad4603c06")) + ") no-repeat;\n  position: absolute;\n  top: 28.5px;\n  left: 292px;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro > .tf-title {\n  position: absolute;\n  top: 10px;\n  left: 124px;\n  width: 146px;\n  /*文本样式*/\n  text-align: left;\n  font-size: 14px;\n  color: #c7c7c7;\n  cursor: default;\n  overflow: hidden;\n  white-space: nowrap;\n  /*不换行*/\n  text-overflow: ellipsis;\n  /*溢出的文字显示...*/\n  font-family: PingFangSC-Regular;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro > .tf-time {\n  position: absolute;\n  top: 40px;\n  left: 124px;\n  /*文本样式*/\n  text-align: left;\n  font-size: 14px;\n  color: #999999;\n  cursor: default;\n  font-family: PingFangSC-Regular;\n}\n.M706C61796572-carousel > .con-scroll > .con-pro > .tf-status {\n  position: absolute;\n  top: 25px;\n  left: 312px;\n  /*文本样式*/\n  text-align: left;\n  font-size: 12px;\n  line-height: 20px;\n  color: #999999;\n  cursor: default;\n  font-family: PingFangSC-Regular;\n}\n", ""])
    },
    "645f6933273f83e7fc98": function(e, t, i) {
        var n = i("86adf03dddb7c33a3de2");
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M706C61796572-barrset {\n  display: block;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.8);\n  background: #000000;\n  cursor: default;\n  margin-left: -160px;\n  bottom: 80px;\n  width: 280px;\n  height: 229px;\n  border-radius: 4px;\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  z-index: 11;\n  /* user-select: none;*/\n}\n.M706C61796572-barrset > .mask-down {\n  left: 108px;\n  bottom: -20px;\n  width: 64px;\n  height: 20px;\n  position: absolute;\n}\n.M706C61796572-barrset > .barrset-lable {\n  position: absolute;\n  height: 15px;\n  /*文本样式*/\n  text-align: left;\n  cursor: default;\n  font-family: MicrosoftYaHeiUI;\n  font-size: 12px;\n  color: #CCCCCC;\n  letter-spacing: 0;\n  line-height: 15px;\n  user-select: none;\n}\n/************************************进度************************************/\n.M706C61796572-barrset > .barrset-bar {\n  position: absolute;\n  width: 144px;\n  height: 4px;\n  border-radius: 2px;\n  background: #444444;\n  cursor: pointer;\n}\n.M706C61796572-barrset > .barrset-bar > .barrset-bar-line {\n  position: absolute;\n  background: #fff;\n  width: 1px;\n  height: 4px;\n  pointer-events: none;\n}\n.M706C61796572-barrset > .barrset-bar > .barrset-bar-pro {\n  position: absolute;\n  background: #00cc36;\n  border-radius: 2px;\n  width: 144px;\n  height: 4px;\n  pointer-events: none;\n}\n.M706C61796572-barrset > .barrset-bar > .barrset-bar-slip {\n  position: absolute;\n  cursor: pointer;\n  width: 8px;\n  height: 8px;\n  background: #fff;\n  border-radius: 50%;\n  margin-top: -2px;\n  margin-left: -4px;\n}\n.M706C61796572-barrset > .barrset-bar > .barrset-bar-slip > .slip-halo {\n  position: absolute;\n  cursor: pointer;\n  pointer-events: none;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  opacity: 0.3;\n  border-radius: 50%;\n  margin-top: -2px;\n  margin-left: -2px;\n  display: none;\n}\n.M706C61796572-barrset > .barrset-bar > .barrset-bar-slip:hover > .slip-halo {\n  display: block;\n}\n/************************************按钮************************************/\n.M706C61796572-barrset > .barrset-btn {\n  position: absolute;\n  width: 40px;\n  height: 19px;\n  cursor: pointer;\n  /*文本相关*/\n  text-align: center;\n  font-family: MicrosoftYaHeiUI;\n  font-size: 12px;\n  color: #CCCCCC;\n  letter-spacing: 0;\n  line-height: 56px;\n  user-select: none;\n}\n.M706C61796572-barrset > .barrset-full {\n  background: url(" + n(i("4bc512a6e4b38231ec9e")) + ") no-repeat center;\n  color: #CCCCCC;\n}\n.M706C61796572-barrset > .barrset-full:hover {\n  background: url(" + n(i("44b23fa0638ec66d909a")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-full-select {\n  background: url(" + n(i("44b23fa0638ec66d909a")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-top0 {\n  background: url(" + n(i("6d54fbe5376b910476a3")) + ") no-repeat center;\n  color: #CCCCCC;\n}\n.M706C61796572-barrset > .barrset-top0:hover {\n  background: url(" + n(i("bfb5fa393ac48853921e")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-top {\n  background: url(" + n(i("906a9458640527aff71e")) + ") no-repeat center;\n  color: #CCCCCC;\n}\n.M706C61796572-barrset > .barrset-top:hover {\n  background: url(" + n(i("a1a05d5b475829547daf")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-top0-select {\n  background: url(" + n(i("bfb5fa393ac48853921e")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-top-select {\n  background: url(" + n(i("a1a05d5b475829547daf")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-bottom {\n  background: url(" + n(i("a611e4d318d3f3b39842")) + ") no-repeat center;\n  color: #CCCCCC;\n}\n.M706C61796572-barrset > .barrset-bottom:hover {\n  background: url(" + n(i("5e49f901e4b9d213d168")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-bottom-select {\n  background: url(" + n(i("5e49f901e4b9d213d168")) + ") no-repeat center;\n  color: #00cc36;\n}\n.M706C61796572-barrset > .barrset-compere {\n  width: 102px;\n  height: 16px;\n  background: url(" + n(i("d797953a2539ae0fe950")) + ") no-repeat;\n  /**/\n  line-height: 15px;\n  text-align: right;\n}\n.M706C61796572-barrset > .barrset-compere:hover {\n  background: url(" + n(i("92b23044694675f06de2")) + ") no-repeat;\n}\n.M706C61796572-barrset > .barrset-compere-select {\n  width: 102px;\n  height: 16px;\n  background: url(" + n(i("68c52175e85c7616a091")) + ") no-repeat;\n  /**/\n  line-height: 15px;\n  text-align: right;\n}\n", ""])
    },
    "687af9d97b3b47621ef3": function(e, t, i) {
        "use strict";
        var n, o, r, a = i("a11efae8377a69acf931"), s = i("d280362e5865b5c09927"), l = i("6b0eb2cb0eb384618cfe"), c = i("69d4ebc1bc0e9a108375"), u = i("f7c33656140074fd558a"), f = i("77f8afe10e09fe664ae5"), d = i("23b436057eb7cddbd440"), p = s.WeakMap, h = function h(e) {
            return r(e) ? o(e) : n(e, {})
        }, _ = function _(i) {
            return function(e) {
                var t;
                if (!l(e) || (t = o(e)).type !== i)
                    throw TypeError("Incompatible receiver, " + i + " required");
                return t
            }
        };
        if (a) {
            var g = new p
              , y = g.get
              , b = g.has
              , m = g.set;
            n = function n(e, t) {
                return m.call(g, e, t),
                t
            }
            ,
            o = function o(e) {
                return y.call(g, e) || {}
            }
            ,
            r = function r(e) {
                return b.call(g, e)
            }
        } else {
            var v = f("state");
            d[v] = !0,
            n = function n(e, t) {
                return c(e, v, t),
                t
            }
            ,
            o = function o(e) {
                return u(e, v) ? e[v] : {}
            }
            ,
            r = function r(e) {
                return u(e, v)
            }
        }
        e.exports = {
            set: n,
            get: o,
            has: r,
            enforce: h,
            getterFor: _
        }
    },
    "68c52175e85c7616a091": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAATRJREFUKBVjZDhn4cnw7/8sBob/MgxEA8YnDEyMaYwMZ8wfk6YRZgPjExa4RpNTjDBhgvQZs/8gfUwEFeJRALSZCHDeQYDh7/coBm6elQyae9/CdBDW/NiSk+HV9+1AZ1owfP/KDNQ4GaYZ1dkX3bgZzlokMJxxEAEr+N/AxPDy3zKG/0CNjIwPGJiZVsI0gmhUzX8/+DH8/zefgeH7YYarDhIMZ7dNANoYANT4nuE/kyeD/rFXyJpRnf2PbxsD4+eLQJv0GX58uwRUKMrAyPATaIA/g8nxG8gaQWxUm032fGTg4nEG2nSJ4T9YIzBKmOIYjE8dRteIqRkkAgpNbhYboAHpDMzMFgzGJ1Zh0wgSQ3U2TJXG0c9AJjDJ4geozsavFkOWorTNBModDAzAXEISgOQqAHLkWQgxn7ltAAAAAElFTkSuQmCC"
    },
    "694316029b4ae3dbacea": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.setStatus = function(e) {
            this._status = e
        }
        ,
        o.prototype.getStatus = function() {
            return this._status
        }
        ,
        o.prototype.isPlaying = function() {
            return this.getStatus() == this.PLAYING
        }
        ,
        o.prototype.isPaused = function() {
            return this.getStatus() == this.PAUSED
        }
        ,
        o.prototype.isError = function() {
            return this.getStatus() == this.ERROR
        }
        ,
        o.prototype.isSeeking = function() {
            return this.getStatus() == this.SEEKING
        }
        ,
        o.prototype.isIdle = function() {
            return this.getStatus() == this.IDLE
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.IDLE = "idle",
            this.PLAYING = "playing",
            this.PAUSED = "paused",
            this.ERROR = "error",
            this.SEEKING = "seeking",
            this._status = this.IDLE
        }
        t["default"] = new n
    },
    "698d75b157f24ae829cc": function(e, t, i) {
        "use strict";
        var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (r) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
        }
        e.exports = n
    },
    "69d4ebc1bc0e9a108375": function(e, t, i) {
        "use strict";
        var n = i("d2d397351e5e28db50b1")
          , o = i("ef7ae18e665193aece2b")
          , r = i("b413932bb091b555777a");
        e.exports = n ? function(e, t, i) {
            return o.f(e, t, r(1, i))
        }
        : function(e, t, i) {
            return e[t] = i,
            e
        }
    },
    "6b0eb2cb0eb384618cfe": function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        e.exports = function(e) {
            return "object" === (void 0 === e ? "undefined" : n(e)) ? null !== e : "function" == typeof e
        }
    },
    "6cf71ab803f6b2f90582": function(e, t, i) {
        "use strict";
        var n = i("d2d397351e5e28db50b1")
          , o = i("7e90ea0061b5194ffb11")
          , r = i("14ab29ff69c7f7db26c3");
        e.exports = !n && !o(function() {
            return 7 != Object.defineProperty(r("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "6d54fbe5376b910476a3": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSA1jYBgFBEKAEST/4MEDz79//84CMmUIqCdW+gkzM3OagoLCdiaQDiobDjJSBmomAwuIBwRglysrK4N9BBEin7x79+5/mJlgH5BvFGGdMB9gqAS6YitQ0AtDArvANqDvvbFJUcsHoCDBCnD6AJeLsJqCR5BaPsBpxagFOIMGJjEaRLCQwEkP/SCC5eQnQD/KQEtBnN4lUQJkJgM4iECVA5ANFiDREFzKwRUOLslRcZQQAAA/CiORapofcwAAAABJRU5ErkJggg=="
    },
    "6dfc805bb169defe8df1": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var s = {
            INITPLAYER: "init",
            INFOACTION: "infoaction",
            VRS: "vrs",
            CHARGE: "charge",
            DISPATCH: "dispatch",
            PLAYSTREAM: "render"
        };
        (function r() {}
        )();
        var l = null
          , n = function n(e) {
            l = e
        }
          , c = function c(e) {
            if (l && l.add && l.send) {
                var t = e.content
                  , i = e.stage
                  , n = e.level
                  , o = t.step
                  , r = t.result
                  , a = {
                    "plugin ": 1
                };
                switch (a.content = t,
                a.stage = i,
                o) {
                case s.INITPLAYER:
                    a.content && a.content.data && a.content.data.container && delete a.content.data.container,
                    a.level = 2;
                    break;
                case s.INFOACTION:
                    a.level = n !== undefined ? n : r ? 2 : 1;
                    break;
                case s.VRS:
                case s.CHARGE:
                case s.DISPATCH:
                case s.PLAYSTREAM:
                    a.level = n !== undefined ? n : r ? 2 : 0
                }
                l.add(a)
            }
        }
          , o = function o() {
            l && l.send()
        };
        t["default"] = {
            STAGE: {
                INIT: 0,
                PROCESS: 1,
                ERROR: 2
            },
            STEPS: s,
            LEVEL: {
                ERROR: 0,
                WARN: 1,
                INFO: 2,
                DEBUG: 3
            },
            setSDK: n,
            add: c,
            send: o
        }
    },
    "6e17927251314b1df531": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = w(i("48978116bed354cb6d8f"))
          , o = w(i("162f473717848ae5cb34"))
          , r = w(i("9dc446da53b44c304edf"))
          , u = w(i("790825d0dabf4060a0d9"))
          , a = w(i("343def12cad299c54e12"))
          , s = w(i("ced5a6888eb062195e56"))
          , f = w(i("ae19a1d24e6ded12b0b9"))
          , d = w(i("4a077be629d240592d7a"))
          , l = w(i("fbaecf455b7417a2c79b"))
          , p = w(i("96598f2d6ae9c8676ba4"))
          , h = w(i("e2263676467d036c3349"))
          , c = w(i("694316029b4ae3dbacea"))
          , _ = i("d9c402fc6c0e0429b2aa")
          , g = w(i("12343932e39887317ee6"))
          , y = w(i("6fac10ab8352e9a71530"))
          , b = w(i("c779f0f9ff7f0eb554cb"))
          , m = w(i("48845084357dc7708026"))
          , v = w(i("458af3e271aa64a9b91f"))
          , A = w(i("7e5547880fa3f17f0b5c"))
          , E = i("bef7a691bb63f7f92f11");
        i("205195d30df1e600fa89");
        var T = w(i("6dfc805bb169defe8df1"));
        function w(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var S, C = (function R(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(P, S = a["default"]),
        P.prototype._load = function() {
            var e = this;
            if (f["default"].info("EnginePlugin", "start load"),
            S.prototype.load.call(this),
            window[this._config.refName])
                this._asTid = setTimeout(function() {
                    e._assemble()
                }, 0);
            else {
                var t = this._player.getJsUrl(this._config.path);
                n["default"].seriesLoadScripts([t], function() {
                    e._assemble()
                })
            }
        }
        ,
        P.prototype._assemble = function() {
            f["default"].info("EnginePlugin", "start init");
            var e = window[this._config.refName];
            y["default"].mapEngineTypes(e.type.FLASH, y["default"].FLASH),
            y["default"].mapEngineTypes(e.type.FLV, y["default"].FLV),
            y["default"].mapEngineTypes(e.type.PT, y["default"].PT),
            y["default"].mapEngineTypes(e.type.HTTP, y["default"].HTTP),
            this.checkEdge()
        }
        ,
        P.prototype.checkEdge = function() {
            var e = this;
            if (o["default"].browser.edge)
                if (this._player.getProgramInfo() && this._player.getProgramInfo().checkAllCutterDone) {
                    var t = this._player.getProgramInfo().allCutter;
                    console.log("checkEdge  checkAllCutterDone foreceH5:", t),
                    this._engingInit(t)
                } else
                    console.log("checkEdge  wait..."),
                    setTimeout(function() {
                        e.checkEdge()
                    }, 100);
            else
                this._engingInit()
        }
        ,
        P.prototype._engingInit = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined && arguments[0]
              , t = void 0
              , i = void 0;
            t = h["default"].isEPG() ? y["default"].FLASH : h["default"].isPGC() ? (i = y["default"].getRecommendTypeByBrowser()).type : h["default"].isPPC() ? (i = y["default"].getRecommendTypeByBrowser()).type : y["default"].FLASH,
            e && (t = y["default"].PT);
            var n = i && i.error || !t
              , o = i && i.code || d["default"].ENGINE_SUPPORT_ERROR;
            if (n)
                return f["default"].info("EnginePlugin", "no engine available " + JSON.stringify(i)),
                S.prototype.init.call(this, {
                    error: !0,
                    code: o
                }),
                void this._player.notifyFeedback({
                    code: o
                });
            f["default"].info("EnginePlugin", "engine type: " + t),
            this._createEngine(y["default"].getLiveEngineType(t)),
            this._handlers || (this._handlers = {
                oninit: this._oninit.bind(this),
                onstatus: this._onstatus.bind(this),
                oncontrol: this._oncontrol.bind(this),
                onlog: this._onlog.bind(this),
                onresize: this._onresize.bind(this),
                onlive: this._onlive.bind(this),
                ondbclick: this._ondbclick.bind(this),
                onrollplay: this._onRollPlay.bind(this),
                onprogramstatus: this._onProgramStatus.bind(this),
                oncheckplaypass: this._onCheckPlayPass.bind(this),
                onerror: this._onPlayerError.bind(this),
                moviereset: this._onMovieReset.bind(this),
                movierenter: this._onMovieEnter.bind(this)
            },
            this._engine.on(liveEngine.event.ENGINE_INIT, this._handlers.oninit),
            this._engine.on(liveEngine.event.VIDEO_STATUS, this._handlers.onstatus),
            this._engine.on(liveEngine.event.LOG, this._handlers.onlog),
            this.addPlayerEvent(u["default"].CONTROL, this._handlers.oncontrol),
            this.addPlayerEvent(u["default"].PLAYER_RESIZE, this._handlers.onresize),
            this.addPlayerEvent(u["default"].NOTIFY_LIVE_STATUS, this._handlers.onlive),
            this.addPlayerEvent(u["default"].ARES_ROLL_PLAY, this._handlers.onrollplay),
            this.addPlayerEvent(u["default"].PROGRAM_STATUS_CHANGED, this._handlers.onprogramstatus),
            this.addPlayerEvent(u["default"].CHECKPLAY_PASS, this._handlers.oncheckplaypass),
            this.addPlayerEvent(u["default"].PLAYER_ERROR, this._handlers.onerror),
            this.addPlayerEvent(u["default"].MOVIE_ENTER, this._handlers.movierenter),
            this.addPlayerEvent(u["default"].MOVIE_RESET, this._handlers.moviereset),
            this._hiddenContextMenu(),
            this._initDBClickFullScreen(),
            this._engine.init())
        }
        ,
        P.prototype._createEngine = function(e, t) {
            var i = r["default"].query("__enablewasm__")
              , n = i != undefined ? "true" == i : !!this._player.getConfig().getEntryConfig("wasmgray");
            t ? t.enabledWasm = n : t = {
                type: e,
                enabledWasm: n
            },
            this._engine = liveEngine.createEngine(this._container, t),
            y["default"].setType(y["default"].getLivePlayerType(this._engine.getType())),
            window.QYP.engineType = y["default"].getLivePlayerType(this._engine.getType())
        }
        ,
        P.prototype.destroy = function() {
            clearTimeout(this._asTid),
            this._clearV5Pv(),
            this._handlers && (this.clearEngine(),
            this.removeAllPlayerEvents(),
            this._removeDBClickFullScreen(),
            this._handlers = null),
            S.prototype.destroy.call(this)
        }
        ,
        P.prototype.clearEngine = function() {
            this._engine && (this._engine.removeAllListeners(),
            this._engine.destroy(),
            this._engine = null)
        }
        ,
        P.prototype._onTimeupdate = function(e) {
            if (c["default"].isPlaying()) {
                var t = this._player.getVideoTime()
                  , i = this._player.getDuration();
                this._player.emit(u["default"].VIDEO_STATUS, {
                    type: u["default"].VIDEO_TIMEUPDATE,
                    data: {
                        current: t,
                        duration: i
                    }
                }),
                p["default"].isPlaybackPlaying() && t - this._player.getBeginTime() > i && (this._player.emit(u["default"].VIDEO_STATUS, {
                    type: u["default"].VIDEO_STOP
                }),
                this.stopPlay())
            }
        }
        ,
        P.prototype.switchEngine = function(e, t) {
            var i = this
              , n = e.type
              , o = this._engine.getType();
            if (n == o)
                return t(!0);
            var r = window[this._config.refName];
            if (window.QYP.stype = y["default"].isFlv(n) ? "0" : y["default"].isFlash(n) ? "2" : "1",
            !(n == r.type.PT && o == r.type.FLV || n == r.type.FLV && o == r.type.PT))
                return t(!0);
            f["default"].info("EnginePluing", "switch engine: " + o + " to " + n),
            this.clearEngine(),
            this._createEngine(n, e),
            this._engine.once(r.event.ENGINE_INIT, function(e) {
                i._player.emit(u["default"].ENGINE_SWITCH),
                e && i._engineInit(),
                t(e)
            }),
            this._engine.on(r.event.VIDEO_STATUS, this._handlers.onstatus),
            this._engine.on(r.event.LOG, this._handlers.onlog),
            this._engine.init()
        }
        ,
        P.prototype._initDBClickFullScreen = function() {
            this._container.style.userSelect = "none",
            this._container.addEventListener ? this._container.addEventListener("dblclick", this._handlers.ondbclick) : this._container.attachEvent && this._container.attachEvent("dblclick", this._handlers.ondbclick)
        }
        ,
        P.prototype._removeDBClickFullScreen = function() {
            this._handlers && (this._container.removeEventListener ? this._container.removeEventListener("dblclick", this._handlers.ondbclick) : this._container.detachEvent && this._container.detachEvent("dblclick", this._handlers.ondbclick))
        }
        ,
        P.prototype._ondbclick = function(e) {
            this._player.emit(u["default"].NOTIFY_CONTROL_FULLSCREEN_SWITCH)
        }
        ,
        P.prototype._hiddenContextMenu = function() {
            var t = this._container;
            t.addEventListener ? t.addEventListener("mousedown", function(e) {
                2 == e.button && (e.stopPropagation(),
                e.preventDefault())
            }, !0) : t.attachEvent && (t.attachEvent("onmousedown", function(e) {
                2 == e.button && t.setCapture()
            }),
            t.attachEvent("onmouseup", function(e) {
                t.releaseCapture()
            }),
            t.oncontextmenu = function() {
                return !1
            }
            )
        }
        ,
        P.prototype._onRollPlay = function(e) {
            e && (e = e.replace(/https?:/, location.protocol),
            this.__srctype = "ad",
            this.startPlay(e)),
            window.QYP.engineType == y["default"].PT && (this._container.className = "pw-engine M706C61796572-engine-ad")
        }
        ,
        P.prototype._streamError = function(e) {
            v["default"].pingback.movieFirstPlay && T["default"].add({
                stage: T["default"].STAGE.PROCESS,
                content: {
                    step: T["default"].STEPS.PLAYSTREAM,
                    result: 0,
                    code: "streamerror",
                    data: e
                }
            })
        }
        ,
        P.prototype._onPlayerError = function(e) {
            this.stopPlay()
        }
        ,
        P.prototype._onProgramStatus = function(e) {
            p["default"].isProgramEnded() && this.stopPlay()
        }
        ,
        P.prototype._onCheckPlayPass = function(e) {
            p["default"].isProgramPlaying() && !c["default"].isPlaying() && (this.__srctype = "movie",
            this.startPlay())
        }
        ,
        P.prototype._onresize = function(e) {
            this._resizeVideo()
        }
        ,
        P.prototype._oncontrol = function(e) {
            switch (e.type) {
            case u["default"].CONTROL_PLAY:
                this.__autoPlayFail || this._error || this.play(e.data.actionType);
                break;
            case u["default"].CONTROL_PAUSE:
                this.pause(e.data && e.data.actionType);
                break;
            case u["default"].CONTROL_REFRESH:
                this._player.refreshMovie();
                break;
            case u["default"].CONTROL_VOLUME:
                e.data && (e.data.userAction && this.getMuted() && this.setMuted(!1),
                this.setVolume(e.data.value, !0, e.data.userAction));
                break;
            case u["default"].CONTROL_FULLSCREEN_SWITCH:
                this._resizeVideo();
                break;
            case u["default"].CONTROL_DEFINITION_SELECT:
                var t = e.data.value.bid;
                this._player.switchDefinition(t),
                c["default"].setStatus(c["default"].SEEKING);
                break;
            case u["default"].CONTROL_RESET:
                this.stopPlay();
                break;
            case u["default"].CONTROL_SEEK:
                var i = 0;
                i = p["default"].isPlaybackPlaying() ? Math.floor(this._player.getBeginTime() + e.data.value) : Math.floor(e.data.value),
                this._checkRTPlayback(i);
                break;
            case u["default"].CONTROL_BACKLIVE:
                this._checkRTPlayback(this._player.getPreloadTime());
                break;
            case u["default"].HDKLIKE_SWITCH:
                this._onHdrLikeSwitch(e.data.value);
                break;
            case u["default"].ZOOM_SWITCH:
                e.data && (this._onZoomSwitch(e.data),
                this._player.emit(u["default"].PLAYER_RESIZE))
            }
        }
        ,
        P.prototype._onMovieReset = function(e) {
            this.stopPlay()
        }
        ,
        P.prototype._onHdrLikeSwitch = function(e) {
            var t = this
              , i = {
                "evetp": 20220,
                "content": ""
            };
            if (e && (i = {
                "evetp": 20221,
                "content": ""
            }),
            this._player && !window.QYP.filterFirstTime && this._player.emit(u["default"].SENSOR_QOS, i),
            window.QYP.filterFirstTime = !1,
            e) {
                this.coverFilterDiv == undefined && (this.coverFilterDiv = document.createElement("div"),
                this.coverFilterDiv.className = "M706C61796572-engine"),
                this.coverFilterDiv.style.width = this._container.offsetWidth + "px",
                this.coverFilterDiv.style.height = this._container.offsetHeight + "px",
                this._container.appendChild(this.coverFilterDiv),
                setTimeout(function() {
                    t.coverFilterDiv.style.width = "0px"
                }, 100),
                setTimeout(function() {
                    t._container.removeChild(t.coverFilterDiv)
                }, 2e3);
                var n = window.QYP.filter;
                this._container.style.setProperty("-webkit-filter", n),
                this._container.style.setProperty("filter", n)
            } else
                this._container.style.setProperty("-webkit-filter", ""),
                this._container.style.setProperty("filter", "")
        }
        ,
        P.prototype._onZoomSwitch = function(e) {
            this._zoomPercent = e.value,
            this._container.style.top = 0,
            this._container.style.bottom = 0,
            this._container.style.left = 0,
            this._container.style.right = 0,
            this._container.style.position = "absolute",
            this._container.style.margin = "auto",
            this._container.style.width = this._zoomPercent + "%",
            this._container.style.height = this._zoomPercent + "%"
        }
        ,
        P.prototype._onMovieEnter = function(e) {
            var t = this.getMuted()
              , i = this.getVolume();
            t && (i = 0),
            this._syncVoice(i),
            window.QYP.engineType == y["default"].PT && (this._container.className = "pw-engine")
        }
        ,
        P.prototype.startPlay = function(e, t) {
            var i = this;
            this._inited && (e ? this.checkUrl(e, t) : this.getStreamUrl(function(e) {
                i.checkUrl(e, t)
            }))
        }
        ,
        P.prototype.checkUrl = function(a, s) {
            var l = this;
            if (a) {
                var c = g["default"].probe(a)
                  , e = y["default"].getRecommendTypeByStream(c);
                window.QYP.rate = this._player.getProgramInfo().definition.currentDefinition.bid,
                this.switchEngine({
                    type: y["default"].getLiveEngineType(e)
                }, function(e) {
                    if (e) {
                        l._error = !1;
                        var t = void 0;
                        if (s != undefined)
                            t = s;
                        else if (0 < v["default"].refresh.currentTime)
                            t = v["default"].refresh.currentTime;
                        else if (p["default"].isPlaybackPlaying()) {
                            var i = l._player.getProgramInfo()
                              , n = A["default"].getPlayMemory(i.tvid);
                            t = n < 0 ? l._player.getBeginTime() : l._player.getBeginTime() + n
                        } else
                            t = -1;
                        if (p["default"].isPlaybackPlaying() && g["default"].isM3u8(c))
                            return l._engine.resetVideo(),
                            l._error = !0,
                            void l._player.notifyError({
                                code: d["default"].MOBILE_SUPPORT_ERROR,
                                message: "m3u8 not support playback"
                            });
                        try {
                            var o;
                            g["default"].isCutType(c) ? (p["default"].isPlaybackPlaying() ? o = l._player.getBeginTime() : p["default"].isLivePlaying() && (0 == l.beginChanged && 0 < t && 0 < l._player.getBeginTime() && t < l._player.getBeginTime() && (l.beginChanged = t),
                            0 < l.beginChanged && (o = l.beginChanged)),
                            l._engine.setSrc(a, l._player.getProgramInfo().definition.currentDefinition.bid, t, o, l._player.getEndTime()),
                            l._engine.play(),
                            (p["default"].isPlaybackPlaying() || -1 != t && t != v["default"].refresh.currentTime) && l._engine.seek(t)) : (l._engine.setSrc(a, l._player.getProgramInfo().definition.currentDefinition.bid, t, l._player.getBeginTime(), l._player.getEndTime()),
                            l._engine.play())
                        } catch (r) {}
                    } else
                        l._engine.resetVideo(),
                        l._error = !0,
                        l._player.notifyError({
                            code: d["default"].PLUGIN_ERROR,
                            message: "switch engine fail"
                        })
                }),
                f["default"].info("EnginePlugin", "开始播放"),
                c && (g["default"].setType(c),
                this._player.emit(u["default"].NOTIFY_STREAM_TYPE, {
                    type: c
                }))
            } else
                f["default"].error("EnginePlugin", "流地址不合法"),
                this._engine.resetVideo(),
                this._error = !0,
                this._player.notifyError({
                    code: d["default"].ENGINE_NO_AVAILABLE_STREAM,
                    message: "engine no available stream url"
                })
        }
        ,
        P.prototype.stopPlay = function() {
            clearTimeout(this.__delayPlayTid),
            this._engine && this._engine.resetVideo(),
            c["default"].setStatus(c["default"].IDLE)
        }
        ,
        P.prototype._getActionType = function(e) {
            return this._actionTypes[e] || l["default"].ACTION_NATIVE
        }
        ,
        P.prototype._setActionType = function(e, t) {
            return this._actionTypes[e] = t
        }
        ,
        P.prototype.play = function(e) {
            e && this._setActionType(u["default"].VIDEO_PLAY, e),
            this._engine && this._engine.play()
        }
        ,
        P.prototype.pause = function(e) {
            e && this._setActionType(u["default"].VIDEO_PAUSE, e),
            this._engine && this._engine.pause()
        }
        ,
        P.prototype.seek = function(e) {
            isNaN(e) ? console.warn("tm   not a number ...") : this._engine && this._engine.seek(e)
        }
        ,
        P.prototype._checkRTPlayback = function(e) {
            if (h["default"].isPPC()) {
                var t = this._player.getProgramInfo()
                  , i = t.definition.currentDefinition
                  , n = i && /hl_pltp=1/.test(i.url);
                if (g["default"].isFlv() && e < this._player.getPreloadTime()) {
                    var o = this.getSrc();
                    o = g["default"].hcdnRealtimeToCut(o);
                    var r = t.getDefinitionsByBid(i.bid, "TS")[0]
                      , a = t.getDefinitionsByBid(i.bid, "HLFLV")[0];
                    /^hcdnlive/.test(o) && (o = g["default"].hcdnDataToTs(o, a, r)),
                    this.startPlay(o, e)
                } else if ((g["default"].isTs() || g["default"].isData()) && n && e >= this._player.getPreloadTime()) {
                    var s = this.getSrc();
                    s = g["default"].hcdnCutToRealtime(s);
                    var l = t.getDefinitionsByBid(i.bid, "TS")[0]
                      , c = t.getDefinitionsByBid(i.bid, "HLFLV")[0];
                    /^hcdnlive/.test(s) && (s = g["default"].hcdnTsToData(s, c, l)),
                    this.startPlay(s)
                } else
                    this.seek(e)
            } else
                this.seek(e)
        }
        ,
        P.prototype.getStreamUrl = function(e) {
            return this._player.getProgramInfo().getStreamUrl(e)
        }
        ,
        P.prototype.getPlayState = function() {
            return c["default"].getStatus()
        }
        ,
        P.prototype.getVideoTime = function() {
            return g["default"].isLiveType() ? this._player.getServerTime() : this._engine ? this._engine.getCurrentTime() : 0
        }
        ,
        P.prototype.getPreloadTime = function() {
            return this._engine ? this._engine.getPreloadTime() : -1
        }
        ,
        P.prototype.getVideoRect = function() {
            var e = this._engine ? this._engine.getVideoRect() : {
                width: 0,
                height: 0
            };
            return e.width = e.width * this._zoomPercent / 100,
            e.height = e.height * this._zoomPercent / 100,
            e.zoom = this._zoomPercent,
            e
        }
        ,
        P.prototype.isPaused = function() {
            return !!this._engine && this._engine.isPaused()
        }
        ,
        P.prototype.getSrc = function() {
            return this._engine ? this._engine.getSrc() : ""
        }
        ,
        P.prototype.getWidth = function() {
            return this._container.offsetWidth
        }
        ,
        P.prototype.getHeight = function() {
            return this._container.offsetHeight
        }
        ,
        P.prototype.getVolume = function() {
            return this._engine ? this._engine.getVolume() : .8
        }
        ,
        P.prototype.setVolume = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1];
            2 < arguments.length && undefined,
            t && A["default"].saveVoiceMemory({
                volume: e
            }),
            this._engine && this._engine.setVolume(e)
        }
        ,
        P.prototype.getVideo = function() {
            return this._engine ? this._engine.getVideo() : null
        }
        ,
        P.prototype.getMuted = function() {
            return !!this._engine && this._engine.getMuted()
        }
        ,
        P.prototype.setMuted = function(e) {
            1 < arguments.length && arguments[1] !== undefined && !arguments[1] || A["default"].saveVoiceMemory({
                muted: e
            }),
            this._engine && this._engine.setMuted(e)
        }
        ,
        P.prototype.cdnLoadSpeed = function() {
            return this._engine ? this._engine.cdnLoadSpeed() : 0
        }
        ,
        P.prototype._onlog = function(e) {
            var t = e.source
              , i = e.message
              , n = e.level;
            f["default"].append(t, i, n)
        }
        ,
        P.prototype._oninit = function(e) {
            var t = e.success
              , i = e.code
              , n = e.message
              , o = window[this._config.refName]
              , r = {
                error: !t
            };
            t ? (this._inited = !0,
            this._engineInit(),
            this._player.emitAsync(u["default"].PLAYER_ENGINE_INITED),
            clearTimeout(this._initTid),
            S.prototype.init.call(this, r),
            f["default"].info("EnginePlugin", "init status: " + (t ? "ok" : i + "," + JSON.stringify(n)))) : i == o.event.FLASH_VERSION_LOWER ? (r.code = d["default"].FLASH_MISS,
            r.message = n,
            S.prototype.init.call(this, r),
            f["default"].info("EnginePlugin", "init status: " + (t ? "ok" : i + "," + JSON.stringify(n)))) : i == o.event.FLASH_NOT_ENABLED ? (r.code = d["default"].FLASH_NOT_ENABLED,
            r.message = n,
            f["default"].info("EnginePlugin", "receive flashNotEnabled, waiting")) : i == o.event.CANNOT_CREATE_ENGINE && /from=pca/.test(window.location.href) ? (r.code = d["default"].PLUGIN_INIT_FAIL_PCA,
            r.message = n,
            f["default"].info("EnginePlugin", "receive PLUGIN_INIT_FAIL_PCA"),
            S.prototype.init.call(this, r)) : (/from=pca/.test(window.location.href) ? (r.code = d["default"].PLUGIN_INIT_FAIL_PCA,
            r.message = n) : (r.code = d["default"].PLUGIN_INIT_FAIL,
            r.realCode = "engine." + i),
            S.prototype.init.call(this, r),
            f["default"].info("EnginePlugin", "init status: " + (t ? "ok" : i + "," + JSON.stringify(n))))
        }
        ,
        P.prototype._engineInit = function() {
            var e = y["default"].getLivePlayerType(this._engine.getType());
            if (window.QYP.bstp = y["default"].isFlash(e) ? "flash" : "h5",
            y["default"].isFlash(e))
                ;
            else if (y["default"].isHttp(e) && (o["default"].os.ios || o["default"].os.android)) {
                var t = this._engine.getVideo();
                t.setAttribute("width", "100%"),
                t.setAttribute("height", "100%"),
                t.setAttribute("x-webkit-airplay", "allow"),
                t.setAttribute("playsinline", ""),
                t.setAttribute("webkit-playsinline", ""),
                t.setAttribute("controls", "controls")
            }
            var i = A["default"].getVoiceMemory();
            this._engine.setVolume(i.volume),
            0 == i.volume ? this._engine.setMuted(!0) : this._engine.setMuted(i.muted)
        }
        ,
        P.prototype._onlive = function(e) {
            switch (e.type) {
            case u["default"].NOTIFY_LIVE_STOP:
                this.stopPlay()
            }
        }
        ,
        P.prototype._onstatus = function(e) {
            var t = this
              , i = window[this._config.refName]
              , n = e.status
              , o = e.data || {}
              , r = void 0;
            switch (o.ad = "ad" == this.__srctype,
            n) {
            case i.event.STATUS_READY:
                r = u["default"].VIDEO_READY,
                this._resizeVideo();
                break;
            case i.event.TIMEUPDATE:
                r = u["default"].VIDEO_TIMEUPDATE,
                this._onTimeupdate(e);
                break;
            case i.event.STATUS_PLAYING:
                r = u["default"].VIDEO_PLAYING,
                this._waiteToReloadTimer && clearTimeout(this._waiteToReloadTimer);
                break;
            case i.event.STATUS_PLAY:
                if (this._waiteToReloadTimer && clearTimeout(this._waiteToReloadTimer),
                r = u["default"].VIDEO_PLAY,
                o.actionType = this._getActionType(r),
                this._checkSeek(),
                this._checkMobileControl(),
                c["default"].setStatus(c["default"].PLAYING),
                this.__autoPlayFail = !1,
                this._waiteTimer && (clearTimeout(this._waiteTimer),
                this._waiteTimer = null),
                !h["default"].isEPG() && (v["default"].pingback.firstPlayBase && (v["default"].pingback.firstPlayBase = !1,
                s["default"].sendADStartPlayPingback(),
                s["default"].sendTimingPingback(),
                this._startV5Pv()),
                v["default"].pingback.movieFirstPlay && m["default"].isMovieStart())) {
                    T["default"].add({
                        stage: T["default"].STAGE.PROCESS,
                        content: {
                            step: T["default"].STEPS.PLAYSTREAM,
                            result: 1,
                            bid: window.QYP.rate
                        }
                    });
                    var a = this._engine.getDispatchInfo();
                    f["default"].info("EnginePlugin", "msg: '正片开始播放', info:" + JSON.stringify(a)),
                    window.QYP.serverip = a.idc,
                    v["default"].pingback.movieFirstPlay = !1,
                    s["default"].sendStartPlayPingback()
                }
                (0,
                _.deleteRecord)();
                break;
            case i.event.STATUS_PAUSE:
                r = u["default"].VIDEO_PAUSE,
                o.actionType = this._getActionType(r),
                c["default"].setStatus(c["default"].PAUSED);
                break;
            case i.event.STATUS_WAITE:
                r = u["default"].VIDEO_WAITE,
                this._waiteTimer && clearTimeout(this._waiteTimer),
                this._waiteTimer = setTimeout(function() {
                    f["default"].info("EnginePlugin", "msg: '引擎卡顿', info: " + JSON.stringify(t._engine.getDispatchInfo())),
                    t._waiteTimer = null
                }, 1e3),
                this._waiteToReloadTimer = setTimeout(function() {
                    t._player.emit(u["default"].VIDEO_STATUS, {
                        type: u["default"].VIDEO_ERROR,
                        data: o
                    }),
                    t._waiteToReloadTimer = null
                }, 8e3),
                c["default"].setStatus(c["default"].PAUSED),
                s["default"].sendWaitingPingback(m["default"].isAres());
                break;
            case i.event.STATUS_ERROR:
                r = u["default"].VIDEO_ERROR,
                this._waiteToReloadTimer && clearTimeout(this._waiteToReloadTimer),
                c["default"].setStatus(c["default"].ERROR),
                (0,
                _.AIReporter)(this._player),
                this._streamError(o);
                break;
            case i.event.STATUS_AUTOPLAY_FAIL:
                r = u["default"].VIDEO_AUTOPLAY_FAIL,
                this.__autoPlayFail = !0,
                this._listenAutoPlay();
                break;
            case i.event.STATUS_SEEKING:
                r = u["default"].VIDEO_SEEKING;
                break;
            case i.event.STATUS_STOP:
                r = u["default"].VIDEO_STOP,
                this.stopPlay();
                break;
            case i.event.STATUS_RESET:
                r = u["default"].VIDEO_RESET;
                break;
            case i.event.STATUS_RETRY:
                r = u["default"].VIDEO_RETRY;
                break;
            case i.event.STATUS_NOTIFY:
                this._handleEngineNotify(o)
            }
            r && this._player.emit(u["default"].VIDEO_STATUS, {
                type: r,
                data: o
            })
        }
        ,
        P.prototype._handleEngineNotify = function(e) {
            if (e) {
                var t = e.cate;
                if ("api" == t && -1 != [E.apiType.flvlive].indexOf(e.type)) {
                    var i = e.phase;
                    "req" == i ? E.apiStat.getStat(e.type).reqStart(e.url) : "res-succ" == i ? E.apiStat.getStat(e.type).reqSucc(e.data) : "res-fail" == i ? (E.apiStat.getStat(e.type).reqFail(e.code, e.message),
                    E.apiStat.getStat(e.type).pingbackQos()) : "parse-succ" == i ? E.apiStat.getStat(e.type).pingbackQos() : "parse-fail" == i && (E.apiStat.getStat(e.type).parseFail(e.code, e.message),
                    E.apiStat.getStat(e.type).pingbackQos())
                } else
                    "wasm" == t && this._player.emit(u["default"].SENSOR_QOS, {
                        evetp: 4e3,
                        content: JSON.stringify({
                            type: "wasm",
                            msg: e.type || ""
                        })
                    })
            }
        }
        ,
        P.prototype._startV5Pv = function() {
            var t = this;
            this._clearV5Pv();
            var i = function i(e) {
                t._v5Tid = setTimeout(function() {
                    t._player && t._player.isPlaying() && t._player.emit(u["default"].SENSOR_PV, {
                        tm: e,
                        type: "time"
                    }),
                    i(e = 5e3 == e ? 1e4 : 1e4 == e ? 15e3 : 6e4)
                }, e)
            };
            i(5e3)
        }
        ,
        P.prototype._clearV5Pv = function() {
            clearTimeout(this._v5Tid)
        }
        ,
        P.prototype._checkSeek = function() {
            c["default"].isSeeking() && this._player.emit(u["default"].VIDEO_STATUS, {
                type: u["default"].VIDEO_SEEKEND
            })
        }
        ,
        P.prototype._checkMobileControl = function() {
            var e = !1;
            e = !(!o["default"].os.android && !o["default"].os.ios || m["default"].isAres());
            var t = this._engine.getVideo();
            t && (e ? t.setAttribute("controls", "controls") : t.removeAttribute("controls"))
        }
        ,
        P.prototype._listenAutoPlay = function() {
            var i = function o(e) {
                if (e.stopImmediatePropagation(),
                document.removeEventListener("click", i),
                document.removeEventListener("keydown", i),
                document.removeEventListener("contextmenu", i),
                e && "click" == e.type && e.target && e.target.className) {
                    var t = e.target.className;
                    if (-1 != t.indexOf("btn-play") || -1 != t.indexOf("bottom-public_play"))
                        return
                }
                this.setMuted(!1),
                this._syncVoice(n)
            }
            .bind(this);
            document.addEventListener("click", i),
            document.addEventListener("keydown", i),
            document.addEventListener("contextmenu", i);
            var n = this.getVolume();
            this.setMuted(!0),
            this._syncVoice(0),
            this._engine.play();
            var e = this._engine.getOriginalVideo();
            e && e.paused && e.play()
        }
        ,
        P.prototype._syncVoice = function(e) {
            this._player.emit(u["default"].NOTIFY_CONTROL, {
                type: u["default"].NOTIFY_CONTROL_VOLUME_CHANGE,
                data: e
            })
        }
        ,
        P.prototype._resizeVideo = function() {}
        ,
        P.prototype.isReady = function() {
            return this._inited
        }
        ,
        P.prototype.getVFSign = function(e) {
            return console.log("getVFSign", this._engine.getVFSign(e)),
            this._engine ? this._engine.getVFSign(e) : ""
        }
        ,
        P.prototype.getVFSignVer = function() {
            return console.log("getVFSignVer", this._engine.getVFSignVer()),
            this._engine ? this._engine.getVFSignVer() : ""
        }
        ,
        P);
        function P(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, P);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, S.call(this, e, t));
            return i._zoomPercent = 100,
            i._player.mount("engine", i),
            i._type = b["default"].ENGINE,
            i._actionTypes = {},
            i._config = i._player.getConfig().getEnvConfig("engine"),
            i._load(),
            i._waiteTimer = null,
            i.beginChanged = 0,
            i.coverFilterDiv,
            i
        }
        t["default"] = C
    },
    "6e5a4cc3d3799586c7c5": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype._createDom = function() {
            if (!this._dom) {
                var e = document.createElement("div");
                e.style.position = "absolute",
                e.style.right = "0",
                e.style.bottom = "48px",
                e.style.height = "25px",
                e.style.lineHeight = "25px",
                e.style.padding = "5px",
                e.style.zIndex = 100;
                try {
                    e.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)"
                } catch (t) {}
                e.style.backgroundRepeat = "repeat-x",
                e.style.color = "#fff",
                this._dom = e
            }
            return this._dom
        }
        ,
        o.prototype.show = function(e) {
            this._dom || (this._dom = this._createDom()),
            this._dom.innerHTML = "<h3>" + e + "</h3>",
            this._dom.style.display = "",
            this._container && !this._dom.parentNode && this._container.appendChild(this._dom)
        }
        ,
        o.prototype.hide = function() {
            this._dom && (this._dom.style.display = "none")
        }
        ,
        o.prototype.destroy = function() {
            this._container && this._dom && this._container == this._dom.parentNode && this._container.removeChild(this._dom),
            this._container = null,
            this._dom = null
        }
        ,
        o);
        function o(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this._container = e,
            this._dom = null
        }
        t["default"] = n
    },
    "6e725bb88b97e7348ce9": function(e, t, i) {
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M706C61796572-pano {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 9;\n  pointer-events: none;\n}\n.M706C61796572-pano > .panobox {\n  position: absolute;\n  left: 30px;\n  top: 30px;\n  width: 54px;\n  height: 54px;\n  overflow: hidden;\n  border-radius: 100%;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  pointer-events: auto;\n}\n.M706C61796572-pano > .panobox > .pn-item {\n  position: relative;\n  float: left;\n  width: 27px;\n  height: 27px;\n  background: rgba(238, 238, 238, 0.6);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\nM706C61796572-pano > .panobox > .pn-item:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n.M706C61796572-pano > .panobox > .pn-item-top > .pn-arr,\n.M706C61796572-pano > .panobox > .pn-item-right > .pn-arr,\n.M706C61796572-pano > .panobox > .pn-item-left > .pn-arr,\n.M706C61796572-pano > .panobox > .pn-item-bottom > .pn-arr {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 7.5px 7.5px 7.5px 7.5px;\n}\n.M706C61796572-pano > .panobox > .pn-item-top > .pn-arr {\n  left: 35%;\n  top: 35%;\n  border-color: rgba(0, 0, 0, 0.5) transparent transparent rgba(0, 0, 0, 0.5);\n}\n.M706C61796572-pano > .panobox > .pn-item-right > .pn-arr {\n  right: 35%;\n  top: 35%;\n  border-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) transparent transparent;\n}\n.M706C61796572-pano > .panobox > .pn-item-left > .pn-arr {\n  left: 35%;\n  bottom: 35%;\n  border-color: transparent transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5);\n}\n.M706C61796572-pano > .panobox > .pn-item-bottom > .pn-arr {\n  right: 35%;\n  bottom: 35%;\n  border-color: transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) transparent;\n}\n", ""])
    },
    "6fac10ab8352e9a71530": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = s(i("162f473717848ae5cb34"))
          , o = s(i("7ad21ab6205a0582f9c9"))
          , r = s(i("12343932e39887317ee6"))
          , a = s(i("4a077be629d240592d7a"));
        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var l = (c.prototype.setType = function(e) {
            this._type = e
        }
        ,
        c.prototype.getType = function() {
            return this._type
        }
        ,
        c.prototype.checkquidInApple = function() {
            for (var e = [2552904123, 2554977623, 2554954323, 2554955423, 2554957023, 1225037123], t = window.QYP.qpId, i = 0; i < e.length; i++)
                if (e[i] == t)
                    return !0;
            return !1
        }
        ,
        c.prototype.getRecommendTypeByBrowser = function() {
            if (n["default"].os.android || n["default"].os.ios)
                return {
                    type: this.HTTP,
                    error: !1
                };
            if (/\/pca\/main\//.test(window.location.href) || this._pca)
                return n["default"].browser.IE ? {
                    error: !0,
                    code: a["default"].PCA_SUPPORT_ERROR
                } : {
                    type: this.PT,
                    error: !1
                };
            if (n["default"].browser.ie || n["default"].browser.edge)
                return {
                    type: this.FLASH,
                    error: !1
                };
            var e = navigator.userAgent.toLocaleLowerCase()
              , t = this.FLASH;
            if (o["default"])
                if (n["default"].browser.SAFARI && 10.1 < n["default"].version.safari)
                    t = this.PT;
                else if (n["default"].browser.CHROME) {
                    var i = e.match(/chrome\/([\w.]*)/)[1];
                    0 <= this._compereVersion(i, "45") && (t = this.PT)
                }
            return t == this.PT && (this._useH5 || (t = this.FLASH)),
            t == this.FLASH && (/micromessenger/.test(e) || /falcon/.test(e)) ? {
                error: !0,
                code: a["default"].ENGINE_SUPPORT_ERROR
            } : {
                error: !1,
                type: t
            }
        }
        ,
        c.prototype._compereVersion = function(e, t) {
            for (var i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : ".", n = e.split(i), o = t.split(i), r = Math.max(n.length, o.length), a = 0; a < r; a++) {
                var s = 0
                  , l = 0;
                if (a < n.length && (s = n[a]),
                a < o.length && (l = o[a]),
                s < l)
                    return -1;
                if (l < s)
                    return 1
            }
            return 0
        }
        ,
        c.prototype.getRecommendTypeByStream = function(e) {
            return r["default"].isM3u8(e) ? this.HTTP : r["default"].isFlv(e) ? this.FLV : r["default"].isData(e) ? this.FLASH : this.PT
        }
        ,
        c.prototype.canEnginePlay = function(e, t) {
            return e == this.FLASH ? -1 != [r["default"].FLV, r["default"].TS, r["default"].DATA].indexOf(t) : e != this.PT ? e == this.FLV ? r["default"].FLV == t : e == this.HTTP && r["default"].M3U8 == t : -1 != [/Firefox/.test(navigator.userAgent) ? undefined : r["default"].FLV, r["default"].F4V, r["default"].TS].indexOf(t)
        }
        ,
        c.prototype.isFlv = function(e) {
            return (e = e || this.getType()) == this.FLV
        }
        ,
        c.prototype.isPt = function(e) {
            return (e = e || this.getType()) == this.PT
        }
        ,
        c.prototype.isHttp = function(e) {
            return (e = e || this.getType()) == this.HTTP
        }
        ,
        c.prototype.isFlash = function(e) {
            return (e = e || this.getType()) == this.FLASH
        }
        ,
        c.prototype.mapEngineTypes = function(e, t) {
            this._map[t] = e
        }
        ,
        c.prototype.getLiveEngineType = function(e) {
            for (var t in this._map)
                if (e == t)
                    return this._map[t];
            return null
        }
        ,
        c.prototype.getLivePlayerType = function(e) {
            for (var t in this._map)
                if (this._map[t] == e)
                    return t;
            return null
        }
        ,
        c.prototype.setPCA = function(e) {
            this._pca = e
        }
        ,
        c.prototype.setH5Gray = function(e) {
            this._useH5 = e
        }
        ,
        c);
        function c() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c),
            this.FLV = "flv",
            this.PT = "p2p",
            this.FLASH = "flash",
            this.HTTP = "http",
            this._type = null,
            this._pca = !1,
            this._useH5 = !0,
            this._map = {}
        }
        t["default"] = new l
    },
    "6fb27e928f7d30b6ac68": function(e, t, a) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = a("7e0ef422896a6b0d6693")
              , o = a("fb885b8dee52c75a3d84")
              , r = n("Setting", {
                extend: a("4afdb3d0356794c76e42"),
                construct: function() {},
                methods: {
                    isBoss: function(e) {
                        var t = "QC004";
                        if ("boolean" != typeof e)
                            return "0" === o.get(t, {
                                memory: !0
                            });
                        e ? o.set(t, "0", {
                            expires: 31536e6,
                            path: "/",
                            domain: "iqiyi.com"
                        }) : o.remove(t, {
                            path: "/",
                            domain: "iqiyi.com"
                        })
                    }
                }
            });
            i.exports = new r
        }
        .call(t, a, t, e)) === undefined || (e.exports = i)
    },
    "74087cdf1b418e6530cc": function(e, t, i) {
        "use strict";
        var n = i("d280362e5865b5c09927")
          , o = i("3c5c0e2a3424018cbe00")
          , r = i("d9c125f6a549ebded220")
          , a = "__core-js_shared__"
          , s = n[a] || o(a, {});
        (e.exports = function(e, t) {
            return s[e] || (s[e] = t !== undefined ? t : {})
        }
        )("versions", []).push({
            version: "3.2.1",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    "77f8afe10e09fe664ae5": function(e, t, i) {
        "use strict";
        var n = i("74087cdf1b418e6530cc")
          , o = i("c7e60acaac2b53f8789a")
          , r = n("keys");
        e.exports = function(e) {
            return r[e] || (r[e] = o(e))
        }
    },
    "790825d0dabf4060a0d9": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            ROOM_STATUS_CHANGE: "roomStatusChange",
            PLAYER_CONFIG_READY: "playerConfigReady",
            PLAYER_STAGE_READY: "playerStageReady",
            PLAYER_PLUGINS_READY: "playerPluginsReady",
            PLAYER_PLUGINS_INSTALLING: "playerPluginsInstalling",
            PLAYER_READY: "playerReady",
            PLAYER_ERROR: "playerErr",
            PLAYER_FEEDBACK: "playerFeedback",
            PLAYER_FEEDBACK_HIDE: "playerFeedbackHide",
            PLAYER_RESIZE: "playerResize",
            ENGINE_SWITCH: "engineSwitch",
            PLAYER_ENGINE_INITED: "playerEngineInited",
            PROGRAM_STATUS_CHANGED: "programStatusChanged",
            FILLER_START: "fillerStart",
            LIVE_START: "liveStart",
            CHECKPLAY_PASS: "checkPlayPass",
            NOTIFY_FILLER_START: "notifyFillerStart",
            PLUGIN_STATE_IDLE: "idle",
            PLUGIN_STATE_LOADING: "loading",
            PLUGIN_STATE_LOADED: "loaded",
            PLUGIN_STATE_INITED: "inited",
            PLUGIN_STATE_DESTROY: "destroy",
            PLUGIN_EVENT_LOADING: "loading",
            PLUGIN_EVENT_LOADED: "loaded",
            PLUGIN_EVENT_INITED: "inited",
            PLUGIN_EVENT_DESTROYED: "destroyed",
            VIDEO_STATUS: "videoStatus",
            VIDEO_READY: "videoReady",
            VIDEO_PLAY: "videoPlay",
            VIDEO_PLAYING: "videoPlaying",
            VIDEO_ARES_PLAY: "videoAresPlay",
            VIDEO_PAUSE: "videoPause",
            VIDEO_ARES_PAUSE: "videoAresPause",
            VIDEO_STOP: "videoStop",
            VIDEO_WAITE: "videoWaite",
            VIDEO_ERROR: "videoError",
            VIDEO_AUTOPLAY_FAIL: "videoAutoPlayFail",
            VIDEO_RESET: "videoReset",
            VIDEO_RETRY: "videoRetry",
            VIDEO_SEEKING: "videoSeeking",
            VIDEO_SEEKEND: "videoSeekEnd",
            VIDEO_TIMEUPDATE: "videoTimeupdate",
            CONTROL: "control",
            CONTROL_PLAY: "controlPlay",
            CONTROL_PAUSE: "controlPause",
            CONTROL_RESET: "controlReset",
            CONTROL_REFRESH: "controlRefresh",
            CONTROL_DANMU_SWITCH: "controlDanmuSwitch",
            CONTROL_GIVELIKE_SWITCH: "controlGiveLikeSwitch",
            CONTROL_DEFINITION_SWITCH: "controlDefinitionSwitch",
            CONTROL_DEFINITION_SELECT: "controlDefinitionSelect",
            CONTROL_VOLUME: "controlVolume",
            CONTROL_FULLPAGE_SWITCH: "controlFullPageSwitch",
            CONTROL_FULLSCREEN_SWITCH: "controlFullScreenSwitch",
            CONTROL_CONTEXTMENU_SWITCH: "controlContextMenuSwitch",
            CONTROL_CONTEXTMENU_SELECT: "controlContextMenuSelect",
            CONTROL_PREVIEW: "controlPreView",
            CONTROL_SHOWTIPS: "controlShowTips",
            CONTROL_PROLIST: "controlProList",
            CONTROL_SHOW: "controlShow",
            CONTROL_SEEK: "controlSeek",
            CONTROL_BACKLIVE: "controlBackLive",
            CONTROL_BARRSET_SWITCH: "controlBarrsetSwitch",
            CONTROL_COMPERE_SWITCH: "controlCompereSwitch",
            ARES_ROLL_PLAY: "aresRollPlay",
            ARES_ROLL_END: "aresRollEnd",
            ARES_SHOW_CONTROL: "aresShowControl",
            MOVIE_ENTER: "movieEnter",
            MOVIE_RESET: "movieReset",
            NOTIFY_CONTROL: "notifyControl",
            NOTIFY_CONTROL_REMIND: "notifyControlRemind",
            NOTIFY_CONTROL_LOADING_REMIND: "notifyControlLoadingRemind",
            NOTIFY_CONTROL_PROLIST: "notifyControlProList",
            NOTIFY_CONTROL_PROLIST_UNSELECT: "notifyControlProListUnSelect",
            NOTIFY_CONTROL_FULLSCREEN_SWITCH: "notifyControlFullScreenSwitch",
            NOTIFY_CONTROL_HIDE_TIPS: "notifyControlHideTips",
            NOTIFY_CONTROL_VOLUME_CHANGE: "notifyControlVolumeChange",
            SENSOR_QOS: "sensorQos",
            SENSOR_GOD: "sensorGod",
            SENSOR_PV: "sensorPv",
            SENSOR_CLICK: "sensorClick",
            PINGBACK_PV: "pingbackPV",
            LOGVIEW_SEND: "logViewSend",
            NOTIFY_LIVE_STATUS: "notifyLiveStatus",
            NOTIFY_LIVE_STOP: "notifyLiveStop",
            NOTIFY_LIVE_START: "notifyLiveStart",
            NOTIFY_STREAM_TYPE: "notifyStreamType",
            VRS_Start: "vrsStart",
            VRS_Ready: "vrsReady",
            CHARGE_CHECK_DONE: "chargeCheckDone",
            CHARGE_CHECK_FAIL: "chargeCheckFail",
            PROGRAM_PGC: 1,
            PROGRAM_PPC: 2,
            PROGRAM_PLAY_LIVE: "live",
            PROGRAM_PLAY_VOD: "vod",
            PROGRAM_CHARGE: "2",
            PROGRAM_FREE: "0",
            BARRAGE_CHANE: "barrageChange",
            COMPERE_SWITCH: "compereSwitch",
            ZOOM_SWITCH: "zoomSwitch",
            HDKLIKE_SWITCH: "hdrLikeSwitch",
            PANO_LOW: "panoLow",
            PLAYER_INITED: "playerInited",
            CHARGE_FAIL: "chargefail",
            PAGE_FULL: "pageFull",
            VIP_DIALOG_SHOW: "vipDialogShow",
            CALL_JS_LIVE_STATUS: "callJsLiveStatus",
            CALL_JS_CAROUSEL_LIST: "callJsCarouselList",
            PRAISE_TOGGLE: "togglePraise",
            STATUS_STARTPLAY: "startPlay",
            STATUS_STOPED: "statusStoped",
            LOAD_SUCCESS: "playerLoadSuccess",
            DELAY_LOAD_SUCCESS: "delayPlayerLoadSuccess",
            STATE_CHANGE: "playerStateChange",
            BEFORE_GET_MOVIEINFO: "beforeGetData",
            DATA_READY: "DataReady",
            CHANNEL_CHANGED: "channelChanged",
            RECHARGE: "recharge",
            ERROR_AREALIMIT: "areaLimit",
            BARRAGE_REPLY: "barrageReplay",
            BARRAGE_INTERACTINFO: "setBarrageInteractInfo",
            DOSOMETHING: "setJsDoSomething",
            SEND_TIME_PINGBACK: "sendTimePingback",
            GET_PLAYER_LOG: "getQiyiPlayerLog",
            FAIL_CALLBACK: "live_fail_callback",
            SHOW_LOGIN_PANNEL: "live_login",
            SHOW_SEEK_BAR: "playerControlVisible",
            LIVE_TO_VOD: "liveToVodReady",
            TRY_WATCH_CHANGED: "tryWatchStatus"
        }
    },
    "7ad21ab6205a0582f9c9": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var n = window
              , o = !(!n.MediaSource || !n.URL);
            i.exports = o
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "7df98bf002cb00a5c6c9": function(e, t, i) {
        "use strict";
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    "7e0ef422896a6b0d6693": function(e, t, n) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var s = n("1f080957c4fbd4f86028")
              , l = []
              , c = []
              , u = function u() {}
              , f = function f() {
                this.__super__ ? this.__super__ = this.__super__.prototype.superclass : this.__super__ = this.superclass,
                this.__super__.apply(this, arguments),
                delete this.__super__
            }
              , d = function d(e, t) {
                var i = t.construct || function() {}
                  , n = t.extend || u
                  , o = function o() {};
                o.prototype = n.prototype;
                var r = function r() {
                    f.apply(this, arguments),
                    i.apply(this, arguments),
                    l.push(this)
                }
                  , a = new o;
                return s(a, t.props || {}),
                s(a, t.methods || {}),
                s(r, t.statics || {}),
                a.constructor = r,
                a.superclass = n,
                c.push(a),
                r.prototype = a,
                r
            };
            d.destroyAll = function() {
                var e, t;
                for (e = 0; e < l.length; e++)
                    try {
                        for (t in l[e])
                            delete l[e][t]
                    } catch (i) {}
                for (e = 0; e < c.length; e++)
                    try {
                        for (t in c[e])
                            delete c[e][t]
                    } catch (i) {}
                l.splice(0, l.length)
            }
            ,
            i.exports = d
        }
        .call(t, n, t, e)) === undefined || (e.exports = i)
    },
    "7e5547880fa3f17f0b5c": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("ef27ce2cb14e12f800a9"));
        var o = (r.prototype.getPlayMemory = function(e) {
            var t = -1
              , i = window.localStorage.getItem(this.PLAY_MEMORY);
            if (console.log("getPlayMemory", i),
            i)
                for (var n = JSON.parse(i), o = 0; o < n.length; o++)
                    if (n[o].tvid == e) {
                        t = n[o].time;
                        break
                    }
            return t
        }
        ,
        r.prototype.savePlayMemory = function(e, t) {
            var i = window.localStorage.getItem(this.PLAY_MEMORY)
              , n = []
              , o = !1;
            if (i) {
                n = (n = JSON.parse(i)) || [];
                for (var r = 0; r < n.length; r++)
                    if (n[r].tvid == e) {
                        n[r].time = t,
                        o = !0;
                        break
                    }
            }
            o || n.push({
                tvid: e,
                time: t
            }),
            5 < n.length && (n = n.slice(n.length - 5)),
            window.localStorage && (window.localStorage.setItem(this.PLAY_MEMORY, JSON.stringify(n)),
            console.log("savePlayMemory", JSON.stringify(n)))
        }
        ,
        r.prototype.getVoiceMemory = function() {
            var e = n["default"].read(this.VOLUME_MEMORY)
              , t = {
                volume: .8,
                muted: !1
            };
            try {
                (e = JSON.parse(e)).v !== undefined && (t.volume = e.v),
                e.m !== undefined && (t.muted = !!e.m)
            } catch (i) {}
            return t
        }
        ,
        r.prototype.saveVoiceMemory = function(e) {
            var t = this.getVoiceMemory()
              , i = {
                v: t.volume,
                m: t.muted
            };
            e.volume !== undefined && (i.v = e.volume),
            e.muted !== undefined && (i.m = e.muted),
            n["default"].write(this.VOLUME_MEMORY, JSON.stringify(i))
        }
        ,
        r);
        function r() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this.PLAY_MEMORY = "vodPlayMemory",
            this.VOLUME_MEMORY = "QiyiPlayerVoiceLive"
        }
        t["default"] = new o
    },
    "7e90ea0061b5194ffb11": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    },
    "7ff1de9f80f76987ddef": function(e, t, i) {
        "use strict";
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    "802bbe3f6d252849b6f4": function(e, t, i) {
        var n = i("5a0afae361b85de061d7");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "8325c57259cd5407e807": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var h = S(i("c627e4f58ec4241c41a2"))
          , s = S(i("790825d0dabf4060a0d9"))
          , n = S(i("48978116bed354cb6d8f"))
          , l = S(i("162f473717848ae5cb34"))
          , r = i("ccaab819419a92ef1569")
          , _ = S(i("7e5547880fa3f17f0b5c"))
          , a = S(i("fbaecf455b7417a2c79b"))
          , o = S(i("94172d95dee6e1d4885c"))
          , c = S(i("6fac10ab8352e9a71530"))
          , f = S(i("c779f0f9ff7f0eb554cb"))
          , g = S(i("48845084357dc7708026"))
          , u = S(i("96598f2d6ae9c8676ba4"))
          , y = S(i("e2263676467d036c3349"))
          , d = S(i("12343932e39887317ee6"))
          , p = S(i("1787093d7720fc0d37ae"))
          , b = S(i("61637bf383ae9d72a949"))
          , m = S(i("41fc02f452bd7cebf8a1"))
          , v = S(i("458af3e271aa64a9b91f"))
          , A = S(i("4a077be629d240592d7a"))
          , E = S(i("343def12cad299c54e12"))
          , T = S(i("47972355b1e0b2f4ef72"))
          , w = S(i("5bbd4d0d793767e043fb"));
        function S(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var C, P = (function I(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(R, C = E["default"]),
        R.prototype._load = function() {
            var e = this;
            C.prototype.load.call(this);
            try {
                this._isCompatible = !b["default"].getInstance().isIE() || b["default"].getInstance().isIE() && 8 < b["default"].getInstance().getVersion()
            } catch (i) {
                this._isCompatible = !1
            }
            if (window[this._config.refName])
                this._asTid = setTimeout(function() {
                    e._assemble()
                }, 0);
            else {
                var t = void 0;
                t = this._isCompatible ? [this._player.getJsUrl(this._config.cssPath), this._player.getJsUrl(this._config.path)] : [this._player.getJsUrl(this._config.cssPathIE8), this._player.getJsUrl(this._config.pathIE8)],
                n["default"].seriesLoadScripts(t, function() {
                    e._assemble()
                })
            }
        }
        ,
        R.prototype._assemble = function() {
            this._control = window[this._config.refName].getInstance(),
            this._handlers || (this._handlers = {
                oncontrol: this._oncontrol.bind(this),
                onvideostatus: this._onvideostatus.bind(this),
                onerror: this._onerror.bind(this),
                onresize: this._onresize.bind(this),
                ondbclick: this._ondbclick.bind(this),
                onactshowtips: this._onactshowtips.bind(this),
                onacthidetips: this._onacthidetips.bind(this),
                onactremaining: this._onactremaining.bind(this),
                onnotify: this._onNotify.bind(this),
                onlive: this._onlive.bind(this),
                onplayerready: this._onplayerready.bind(this),
                onstreamtype: this._onstreamtype.bind(this),
                onengineok: this._onengineok.bind(this),
                onengineok_zoom: this._onengineok_zoom.bind(this),
                onlogview: this._onlogview.bind(this),
                onprogramstatus: this._onProgramStatus.bind(this),
                showarescontrol: this._onAresShowControl.bind(this),
                movieenter: this._onMovieEnter.bind(this),
                moviereset: this._onMovieReset.bind(this),
                livestart: this._onLiveStart.bind(this),
                onppctrywatchshowtips: this._onppctrywatchshowtipe.bind(this),
                onppctrywatchcuttips: this._onppctrywatchcuttips.bind(this),
                onPanoshowtips: this._onPanoshowtips.bind(this),
                aresplay: this._aresplay.bind(this),
                aresend: this._aresend.bind(this)
            },
            this._control.on("xycControlView", this._handlers.oncontrol),
            this.addPlayerEvent(s["default"].VIDEO_STATUS, this._handlers.onvideostatus),
            this.addPlayerEvent(s["default"].PLAYER_ERROR, this._handlers.onerror),
            this.addPlayerEvent(s["default"].PLAYER_RESIZE, this._handlers.onresize),
            this.addPlayerEvent(s["default"].NOTIFY_LIVE_STATUS, this._handlers.onlive),
            this.addPlayerEvent(s["default"].PLAYER_READY, this._handlers.onplayerready),
            this.addPlayerEvent(s["default"].NOTIFY_STREAM_TYPE, this._handlers.onstreamtype),
            this.addPlayerEvent(s["default"].NOTIFY_CONTROL_FULLSCREEN_SWITCH, this._handlers.ondbclick),
            this.addPlayerEvent(s["default"].PROGRAM_STATUS_CHANGED, this._handlers.onprogramstatus),
            this.addPlayerEvent(s["default"].ARES_SHOW_CONTROL, this._handlers.showarescontrol),
            this.addPlayerEvent(s["default"].MOVIE_ENTER, this._handlers.movieenter),
            this.addPlayerEvent(s["default"].MOVIE_RESET, this._handlers.moviereset),
            this.addPlayerEvent(s["default"].LIVE_START, this._handlers.livestart),
            this.addPlayerEvent(s["default"].NOTIFY_CONTROL_HIDE_TIPS, this._handlers.onacthidetips),
            this.addPlayerEvent(s["default"].ARES_ROLL_PLAY, this._handlers.aresplay),
            this.addPlayerEvent(s["default"].ARES_ROLL_END, this._handlers.aresend),
            this._player.getPlugin(f["default"].ENGINE).isReady() ? this.asyncDo(this._onengineok.bind(this)) : this.addPlayerEvent(s["default"].PLAYER_ENGINE_INITED, this._handlers.onengineok),
            this.addPlayerEvent(s["default"].ENGINE_SWITCH, this._handlers.onengineok_zoom),
            this.addPlayerEvent(p["default"].ACT_TRYWATCH_HIDETIPS, this._handlers.onacthidetips),
            this.addPlayerEvent(p["default"].ACT_TRYWATCH_SHOWTIPS, this._handlers.onactshowtips),
            this.addPlayerEvent(p["default"].ACT_TRYWATCH_REMAINING, this._handlers.onactremaining),
            this.addPlayerEvent(p["default"].ACT_TRYWATCH_CONTROL, this._handlers.onlive),
            this.addPlayerEvent(p["default"].PPC_TRYWATCH_TIMER, this._handlers.onppctrywatchshowtips),
            this.addPlayerEvent(p["default"].PPC_TRYWATCH_CUTTIMER, this._handlers.onppctrywatchcuttips),
            this.addPlayerEvent(s["default"].NOTIFY_CONTROL, this._handlers.onnotify),
            this.addPlayerEvent(s["default"].LOGVIEW_SEND, this._handlers.onlogview),
            this.addPlayerEvent(s["default"].PANO_LOW, this._handlers.onPanoshowtips)),
            C.prototype.init.call(this),
            this._control.init(this._container, m["default"].isTWLocale() ? "tw" : "cn"),
            y["default"].isEPG() && (this._control.rightControl.style.width = "200px")
        }
        ,
        R.prototype._aresplay = function() {
            this._control.setAttribute("GiveLikeView", "UnderAresIndex", !0)
        }
        ,
        R.prototype._aresend = function() {
            console.log("_aresend"),
            this._control.setAttribute("GiveLikeView", "UnderAresIndex", !1)
        }
        ,
        R.prototype.destroy = function() {
            clearTimeout(this._asTid),
            this._handlers && (this._control && (this._control.destroy(),
            this._control._emitter && this._control._emitter.removeAllListeners(),
            this._control = null),
            this.removeAllPlayerEvents(),
            this._handlers = null),
            this._stopTimeTextUpdate(),
            C.prototype.destroy.call(this)
        }
        ,
        R.prototype._onengineok_zoom = function() {
            this._control.setAttribute("ZoomBtn", "recover", !0)
        }
        ,
        R.prototype._initControl = function() {
            this._tips = new w["default"](this._control),
            this._tips.initTips();
            var e = ["Sharpness", "CompereSwitcher", "GiveLike", "LiveList", "Bullet", "Music", "PageFull", "FullScreen"];
            b["default"].getInstance().isChrome() && "Mac" != b["default"].getInstance().detectOS() && e.unshift("HdrLike"),
            this._control.renderCtrol(["Play", "Refresh", "Status", "VodTime"], "left"),
            this._control.renderCtrol(["StatusTip"], "lefttop"),
            this._control.renderCtrol(e, "right"),
            this._control.setAttribute("Refresh", "visible", !1),
            this._control.setAttribute("VodTime", "visible", !1),
            this._control.setAttribute("PageFull", "visible", !1),
            this._control.setAttribute("CompereSwitcher", "visible", !1),
            this._control.setAttribute("Sharpness", "visible", !1),
            this._control.setAttribute("Bullet", "visible", !1),
            this._control.setAttribute("LiveList", "visible", !1),
            this._control.setAttribute("GiveLike", "visible", !1),
            this._control.setAttribute("Status", "visible", !1),
            this._control.setAttribute("StatusTip", "show", !1),
            y["default"].isPGC() || (this._control.renderProgressWrap(),
            this._control.setAttribute("ProgressWrap", "visible", !1));
            var t = this._player.getConfig().getEntryConfig("ui")
              , i = !0;
            t != undefined && (i = t.fullPage == undefined || t.fullPage),
            this._control.renderKeyBoardView({
                programType: y["default"].getType(),
                "pagefull": i
            }),
            this._control.renderLogView(),
            this._onlogview({
                type: "log",
                content: "系统：" + b["default"].getInstance().detectOS()
            }),
            this._onlogview({
                type: "log",
                content: "浏览器：" + b["default"].getInstance().getBrowserName() + "，版本：" + b["default"].getInstance().getVersion()
            }),
            this._onlogview({
                type: "log",
                content: "网络类型：" + window.QYP.userNet.netType
            }),
            this._onlogview({
                type: "log",
                content: "用户主地域：" + window.QYP.userNet.netAreaMain + "，用户扩展地域：" + window.QYP.userNet.netAreaExt
            }),
            this._onlogview({
                type: "log",
                content: "用户IP：" + window.QYP.userNet.ip
            }),
            this._onlogview({
                type: "log",
                content: "用户运营商：" + window.QYP.userNet.operator
            });
            var n = _["default"].getVoiceMemory();
            this._control.setAttribute("Music", "volume", n.muted ? 0 : 100 * n.volume),
            this._ctxmenu(),
            this._errorBeforeInited || this.showLoading(),
            !y["default"].isPGC() || 0 !== this._player.getConfig().getEntryConfig("status") && 2 !== this._player.getConfig().getEntryConfig("status") || this._control.rendPreView("leave"),
            this._control.renderTitle(),
            y["default"].isPPC() && this._player.getConfig().getEntryConfig("multiCamera") && (this._control.renderMultiCameraBtn(),
            this._control.renderMultiCamera()),
            this._control.renderRechargeView()
        }
        ,
        R.prototype._onMovieReset = function(e) {
            null != this.__timeTxtTid && clearInterval(this.__timeTxtTid),
            this._inited = !1,
            console.log("_onMovieReset", this._inited),
            this._errorBeforeInited = !1,
            this.clearTips(),
            this.beginChanged = 0,
            this._initControl(),
            this._control.setAttribute("RechargeView", "visible", !1),
            this._control.setAttribute("ProgressWrap", "reset", !0),
            this._control.setAttribute("ZoomBtn", "recover", !0),
            this._control.setAttribute("ChatInputView", "removeChild")
        }
        ,
        R.prototype._onMovieEnter = function(e) {
            var t = this;
            if (console.log("_onMovieEnter  start...", this._inited),
            this._onresize(),
            !this._inited) {
                window.QYP.isAd = !1;
                var i = this._player.getConfig().getEntryConfig("ui")
                  , n = !0
                  , o = !0
                  , r = !1
                  , a = undefined;
                i != undefined && (n = i.fullPage == undefined || i.fullPage,
                o = i.danmuSwitch == undefined || i.danmuSwitch,
                r = i.like != undefined && i.like,
                a = i.hdr != undefined && i.hdr),
                this._bullet_open = o,
                this._control.setAttribute("PageFull", "visible", n),
                this._control.setAttribute("Bullet", "visible", o),
                this._control.setAttribute("GiveLike", "visible", r),
                this._control.setAttribute("GiveLike", "giveLikeVisible", !0),
                r && this._control.setAttribute("GiveLikeView", "visible", !0),
                r && this._control.renderGiveLikeView(),
                a ? (window.QYP.filter = a.filter,
                window.QYP.filterFirstTime = !0,
                this._control.setAttribute("HdrLike", "visible", !0),
                this._control.setAttribute("HdrLike", "hrdValue", Boolean(a.open))) : this._control.setAttribute("HdrLike", "visible", !1);
                var s = _["default"].getVoiceMemory();
                this._control.setAttribute("Music", "volume", s.muted ? 0 : 100 * s.volume),
                this._control.setAttribute("Refresh", "visible", !0),
                this._control.setAttribute("StatusTip", "show", !0);
                var l = new T["default"](this._player.getProgramInfo().definition.compositeDefinitionsList);
                if (l.selectStreamType("HLFLV"),
                y["default"].isPGC(),
                (1 < l.getDefinitionArr().length || (l.getDefinitionArr().length,
                !1)) && this._control.setAttribute("Sharpness", "visible", !0),
                this._statusSet(),
                0 < l.getDefinitionArr().length && (this._control.setAttribute("Sharpness", "sharpnessList", l.getDefinitionArr()),
                this._control.setAttribute("Sharpness", "curSharpnessIndex", l.getCurDefinitionIndex(l.getDefinitionItem(this._player.getProgramInfo().definition.currentDefinition)))),
                this._control.setAttribute("Title", "content", this._player.getProgramInfo().videoName || ""),
                !y["default"].isEPG()) {
                    var c = y["default"].isPGC() ? "QL" : "QL.playInfo"
                      , u = {
                        type: y["default"].getType(),
                        show: this._player.getConfig().getQualifiedConfig(c + ".wmFlag"),
                        url: this._player.getConfig().getQualifiedConfig(c + ".wmImageUrl"),
                        code: this._player.getConfig().getQualifiedConfig(c + ".wmShowCode")
                    }
                      , f = this._player.getConfig().getEntryConfig("wmFlag")
                      , d = this._player.getConfig().getEntryConfig("wmImageUrl")
                      , p = this._player.getConfig().getEntryConfig("wmShowCode");
                    f != undefined && "" != f && (u = {
                        type: y["default"].getType(),
                        show: f,
                        url: d,
                        code: p
                    }),
                    0 == u.show ? (this._control.setAttribute("WaterMark", "show", !1),
                    this._control.setAttribute("Logo", "show", !1)) : (u.show == undefined || m["default"].isTWLocale() ? this._player.getProgramInfo().logoOpen && (this._control.renderLogo(),
                    this._control.setAttribute("Logo", "show", !0),
                    console.log("水印---renderLogo")) : (this._control.renderWaterMark(u),
                    this._control.setAttribute("WaterMark", "show", u),
                    this._player.getProgramInfo().pano ? this._control.setAttribute("WaterMark", "pano", !0) : this._control.setAttribute("WaterMark", "pano", !1),
                    console.log("水印---renderWaterMark")),
                    this._control.setAttribute("WaterMark", "visible", !1),
                    this._control.setAttribute("Logo", "visible", !1))
                }
                (y["default"].isPPC() || y["default"].isEPG() || y["default"].isPGC()) && this.toogleBarrage(this._player.getProgramInfo().chatPopup || !1),
                y["default"].isPGC() && this.toogleBarrage(!(window.QYP && 0 == window.QYP.showPopups)),
                v["default"].check_vip && !this._player.$user.getIsVIP() && (this.__tipsTimer && (clearTimeout(this.__tipsTimer),
                this.__tipsTimer = null),
                this._control.setAttribute("Tips", "content", h["default"].getConfig("tips.userCheckVipTips")),
                this.__tipsTimer = setTimeout(function() {
                    t._control.setAttribute("Tips", "visible", !1)
                }, 1e4)),
                this.showLoading(),
                g["default"].isAres() && this._control.setAttribute("Title", "visible", !1),
                console.log("onmovieEnter", this._inited),
                this._inited = !0
            }
        }
        ,
        R.prototype._statusSet = function() {
            var e = this._player.getConfig().getEntryConfig("showSeek")
              , t = !u["default"].isFillerPlaying() && e && !g["default"].isAres() && !d["default"].isM3u8();
            y["default"].isPPC() && null === u["default"].getPlayStatus() ? this._control.setAttribute("Status", "visible", !1) : y["default"].isPGC() ? this._control.setAttribute("Status", "visible", !1) : y["default"].isPPC() && (u["default"].isFillerPlaying() || !t && u["default"].isLivePlaying()) ? this._control.setAttribute("Status", "visible", !1) : this._control.setAttribute("Status", "visible", !0),
            y["default"].isPPC() && u["default"].isPlaybackPlaying() ? (this._control.setAttribute("Status", "text", 3),
            this._control.setAttribute("StatusTip", "text", 3),
            this._control.setAttribute("Refresh", "visible", !0)) : y["default"].isPPC() && u["default"].isFillerPlaying() ? (this._control.setAttribute("Status", "text", 0),
            this._control.setAttribute("StatusTip", "text", 0),
            this._control.setAttribute("Refresh", "visible", !0)) : (this.updateControlStatus(this._player.getVideoTime()),
            this._refreshStatusBtn && (this._control.setAttribute("Status", "text", Number(this._refreshStatusBtn)),
            this._refreshStatusBtn = null))
        }
        ,
        R.prototype._onLiveStart = function(e) {
            this._updateSeekBar()
        }
        ,
        R.prototype._onProgramStatus = function(e) {
            u["default"].isProgramPlaying() || this.showMovieEndView(),
            y["default"].isPPC() && (u["default"].isFillerPlaying() || u["default"].isLivePlaying() || u["default"].isPlaybackPlaying()) && this._statusSet()
        }
        ,
        R.prototype._onengineok = function(e) {
            this._initControl()
        }
        ,
        R.prototype._onAresShowControl = function(e) {
            this.hideLoading(),
            !this._control || l["default"].os.android || l["default"].os.ios || this._control.setControlVisible(e)
        }
        ,
        R.prototype._onstreamtype = function(e) {
            d["default"].isHCDNType() && this._updateSeekBar()
        }
        ,
        R.prototype._updateSeekBar = function() {
            var e = !1
              , t = !1;
            if (y["default"].isPPC()) {
                var i = this._player.getConfig().getEntryConfig("showSeek");
                u["default"].isPlaybackPlaying() && (i = !0),
                e = !u["default"].isFillerPlaying() && i && !g["default"].isAres() && !d["default"].isM3u8(),
                t = !u["default"].isFillerPlaying() && !g["default"].isAres()
            } else
                t = y["default"].isPGC() ? !(e = !1) : e = d["default"].isCutType();
            if (this._needShowPro = e,
            this._control.setAttribute("ProgressWrap", "visible", e),
            this._control.setAttribute("VodTime", "visible", t),
            e)
                if (y["default"].isEPG())
                    this._control.setAttribute("ProgressWrap", "liveTipFormat", "time"),
                    this._control.setAttribute("ProgressWrap", "endToEnd", {
                        startTime: 1e3 * this._player.getBeginTime(),
                        endTime: 1e3 * this._player.getEndTime()
                    });
                else if (y["default"].isPPC() && u["default"].isPlaybackPlaying())
                    this._control.setAttribute("ProgressWrap", "liveTipFormat", "duration"),
                    this._control.setAttribute("ProgressWrap", "endToEnd", {
                        startTime: 0,
                        endTime: this._player.getEndTime() - this._player.getBeginTime()
                    });
                else {
                    var n = this._player.getBeginTime()
                      , o = this._player.getPreloadTime();
                    0 <= o - n ? this._control.setAttribute("ProgressWrap", "reset_duration", 1e3 * (o - n)) : this._control.setAttribute("ProgressWrap", "reset_duration", 0),
                    this._control.setAttribute("ProgressWrap", "liveTipFormat", "duration"),
                    this._control.setAttribute("ProgressWrap", "endToEnd", {
                        startTime: 1e3 * this._player.getBeginTime(),
                        endTime: 1e3 * this._player.getVideoTime()
                    })
                }
            this._startTimeTextUpdate(t)
        }
        ,
        R.prototype._startTimeTextUpdate = function(o) {
            var r = this;
            this._stopTimeTextUpdate(),
            this.__timeTxtTid = setInterval(function() {
                if (r._player.getBeginTime() != undefined) {
                    var e = r._player.getBeginTime()
                      , t = r._player.getEndTime()
                      , i = r._player.getPreloadTime()
                      , n = r._player.getVideoTime();
                    if (y["default"].isEPG())
                        r._control.setAttribute("ProgressWrap", "preload", 1e3 * (i - e)),
                        r._control.setAttribute("ProgressWrap", "playTime", 1e3 * (n - e)),
                        o ? r._control.setAttribute("VodTime", "txt", "" + r.__formatTimestamp(n)) : r._control.setAttribute("VodTime", "visible", !1);
                    else if (y["default"].isPPC() && u["default"].isProgramPlaying() && u["default"].isPlaybackPlaying()) {
                        if (n - e < 0)
                            return;
                        r._control.setAttribute("ProgressWrap", "preload", t - e),
                        r._control.setAttribute("ProgressWrap", "playTime", n - e),
                        o ? r._control.setAttribute("VodTime", "txt", r.__formatTime(n - e, t - e) + "/" + r.__formatTime(t - e, t - e)) : r._control.setAttribute("VodTime", "visible", !1)
                    } else
                        (n - e < 0 || i - e < 0) && (n < 0 && (r._control.setAttribute("ProgressWrap", "visible", !1),
                        r._control.setAttribute("VodTime", "visible", !1)),
                        0 == r.beginChanged && 0 < n && 0 < e && (r.beginChanged = n)),
                        0 < r.beginChanged && (e = r.beginChanged),
                        y["default"].isPGC() ? (r._control.setAttribute("ProgressWrap", "visible", !1),
                        u["default"].isRoomCarousel() ? r._control.setAttribute("VodTime", "visible", !1) : r._control.setAttribute("VodTime", "visible", !0)) : (r._control.setAttribute("ProgressWrap", "visible", r._needShowPro),
                        r._control.setAttribute("VodTime", "visible", !0),
                        r._control.setAttribute("ProgressWrap", "endToEnd", {
                            startTime: 1e3 * e,
                            endTime: 1e3 * i
                        }),
                        i < n && (i = n),
                        r._control.setAttribute("ProgressWrap", "preload", 1e3 * (i - e)),
                        r._control.setAttribute("ProgressWrap", "playTime", 1e3 * (n - e))),
                        o ? y["default"].isPGC() ? r._control.setAttribute("VodTime", "txt", "" + r.__formatTime(n - e, 3600)) : r._player.isPlaying() && r._control.setAttribute("VodTime", "txt", "" + r.__formatTime(n - e, t - e)) : r._control.setAttribute("VodTime", "visible", !1)
                }
            }, 1e3)
        }
        ,
        R.prototype.__formatTime = function(e, t) {
            if (e < 0)
                return " ";
            var i = Math.floor(e / 3600)
              , n = Math.floor(e % 3600 / 60)
              , o = e % 60;
            return (3600 <= t ? this.__pad(i) + ":" : "") + this.__pad(n) + ":" + this.__pad(o)
        }
        ,
        R.prototype.__formatTimestamp = function(e) {
            var t = new Date(1e3 * e)
              , i = t.getHours()
              , n = t.getMinutes()
              , o = t.getSeconds();
            return this.__pad(i) + ":" + this.__pad(n) + ":" + this.__pad(o)
        }
        ,
        R.prototype.__pad = function(e) {
            return e < 10 ? "0" + e : "" + e
        }
        ,
        R.prototype._stopTimeTextUpdate = function() {
            clearInterval(this.__timeTxtTid)
        }
        ,
        R.prototype._onplayerready = function() {}
        ,
        R.prototype._ctxmenu = function() {
            var e = [];
            if (e.push({
                label: h["default"].getConfig("rightmenu.version") + "：" + this._player.getConfig().getEnvConfig("version"),
                tag: "info"
            }),
            e.push({
                label: "VideoUI：" + this._control.getVersion(),
                tag: "info"
            }),
            window.PlayerSDK && window.PlayerSDK.H5Player && window.PlayerSDK.H5Player.version && e.push({
                label: "FLVCore: " + window.PlayerSDK.H5Player.version,
                tag: "info"
            }),
            window.createLiveVideo) {
                var t = window.createLiveVideo();
                t && (t.sdkVersion && e.push({
                    label: "TSCore: " + t.sdkVersion,
                    tag: "info"
                }),
                t.destroy())
            }
            e.push({
                label: h["default"].getConfig("rightmenu.save"),
                tag: "save_log"
            }),
            e.push({
                label: h["default"].getConfig("rightmenu.upload"),
                tag: "upload_log"
            }),
            e.push({
                label: h["default"].getConfig("rightmenu.feedback"),
                tag: "feedback_log"
            }),
            e.push({
                label: h["default"].getConfig("rightmenu.intro"),
                tag: "keyboard"
            }),
            this._control.renderMenu(e)
        }
        ,
        R.prototype.getLoadRate = function(e) {
            return e < 1024 ? e + "B/s" : e < 1048576 ? (e / 1024).toFixed(2) + "KB/s" : (e / 1024 / 1024).toFixed(2) + "MB/s"
        }
        ,
        R.prototype.showLoading = function() {
            var e = this;
            this._control && (this.clearLoadRate(),
            this.__loadratetid || (this.__loadratetid = setInterval(function() {
                e.iterShowLoadRate()
            }, 1e3)),
            this.iterShowLoadRate()),
            this._sendMultiLiveVisible(!1)
        }
        ,
        R.prototype.iterShowLoadRate = function() {
            var e = null;
            if (!e && this._player.$engine && y["default"].isPPC()) {
                var t = this._player.$engine.cdnLoadSpeed();
                this.__loadingrates || (this.__loadingrates = []),
                this.__loadingrates.push(t),
                4 < this.__loadingrates.length && this.__loadingrates.shift();
                var i = !1;
                if (4 <= this.__loadingrates.length) {
                    for (var n = this.__loadingrates[0], o = 0; o < 4; o++)
                        if (n !== this.__loadingrates[o]) {
                            i = !0;
                            break
                        }
                } else
                    i = !0;
                var r = h["default"].getConfig("tips.waiting.download_rate")
                  , a = h["default"].getConfig("tips.waiting.buffer_ing");
                e = t && i ? "" + r + this.getLoadRate(t) : "" + a
            }
            if (u["default"].getRoomStatus() == u["default"].ROOM_STOP || u["default"].getRoomStatus() == u["default"].ROOM_BAN)
                return this.clearLoadRate(),
                void this.hideLoading();
            this._control.rendPreView("loading", e || this._loadingRemind)
        }
        ,
        R.prototype.clearLoadRate = function() {
            this.__loadratetid && (clearInterval(this.__loadratetid),
            this.__loadratetid = 0)
        }
        ,
        R.prototype.hideLoading = function() {
            this._control && this.hidePreview()
        }
        ,
        R.prototype.showTips = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : 3
              , n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 0;
            this._tips.appendTips(e, t, i, n)
        }
        ,
        R.prototype.hideTips = function() {
            this._tips.hideTips()
        }
        ,
        R.prototype.clearTips = function() {
            this._tips && this._tips.clearTips()
        }
        ,
        R.prototype.showSeekingTips = function(e) {
            if (e) {
                e = y["default"].isPPC() && 600 == e ? 601 : e;
                var t = o["default"].getI18NKeyOfBid(e);
                this.showTips(h["default"].getRenderedStringByKeys("tips.seeking", [t]))
            } else
                this.showWaitTips();
            this.showLoading()
        }
        ,
        R.prototype.showSeekendTips = function(e) {
            if (e) {
                600 === e && y["default"].isPPC() && (e = 601);
                var t = o["default"].getI18NKeyOfBid(e);
                this.showTips(h["default"].getRenderedStringByKeys("tips.seekend", [t]), !1)
            }
        }
        ,
        R.prototype.showWaitTips = function() {
            var e = this._player.getProgramInfo();
            if (this.clearTips(),
            this.showTips(h["default"].getConfig("tips.waiting.ppc"), !0, 6),
            e && 1 < e.getDistinctBidLength()) {
                var t = e.definition.currentDefinition.bid;
                600 === t && y["default"].isPPC() && (t = 601),
                this.showTips(h["default"].getRenderedStringByKeys("tips.waiting.timeout_defs", [o["default"].getI18NKeyOfBid(t)]), !0, 3600, 6)
            } else
                this.showTips(h["default"].getConfig("tips.waiting.timeout_def"), !0, 3600, 6)
        }
        ,
        R.prototype.showMovieEndView = function() {
            var e = void 0
              , t = void 0;
            y["default"].isPPC() ? u["default"].isProgramWaiting() ? e = A["default"].LIVE_WAITING_PPC : u["default"].isProgramEnded() ? y["default"].isPPC() && this._player.getProgramInfo().vodUrl ? (e = A["default"].LIVE_END_VOD,
            t = [vodUrl]) : e = A["default"].LIVE_END : u["default"].isProgramPlaying() && (e = A["default"].LIVE_END_REPLAY,
            t = [location.href]) : y["default"].isPGC() && (u["default"].isRoomBan() || u["default"].isRoomStop() || u["default"].isRoomPlaybackEnd()) && (e = A["default"].LIVE_WAITING_PGC),
            e && this.showFeedback({
                code: e,
                values: t
            })
        }
        ,
        R.prototype.showMovieStartView = function() {
            this.hideFeedback(),
            this.showLoading()
        }
        ,
        R.prototype.showFeedback = function(e) {
            this._control && this._control.setControlVisible(!1),
            this.clearTips(),
            this.hidePreview(),
            this._player.notifyFeedback(e)
        }
        ,
        R.prototype.hideFeedback = function() {
            this._player.emitAsync(s["default"].PLAYER_FEEDBACK_HIDE)
        }
        ,
        R.prototype.showAutoPlayFail = function() {
            this.autoPlayFail = !0,
            l["default"].os.ios || l["default"].os.android ? this.hideLoading() : g["default"].isAres()
        }
        ,
        R.prototype.hidePreview = function() {
            this.clearLoadRate(),
            this._control.setAttribute("PreView", "visible", !1)
        }
        ,
        R.prototype.updateActDate = function(e) {
            this._control.renderAct(),
            11 != e.notifyType && e.videoTitle && "" != e.videoTitle ? (this._control.setAttribute("ActView", "viewData", {
                videoTitle: e.videoTitle,
                videoDuration: e.videoDuration,
                videoPlayTime: e.videoPlayTime
            }),
            this._control.setAttribute("ActView", "visible", !this._control.isFullScreen())) : this._control.setAttribute("ActView", "visible", !1)
        }
        ,
        R.prototype.logoResize = function() {
            var e = this._player.getView().getStage()
              , t = this._player.getPlugin(f["default"].ENGINE)
              , i = void 0;
            t && (i = t.getVideoRect()),
            i.width && i.height || (i.width = e.offsetWidth,
            i.height = e.offsetHeight);
            var n = e.offsetWidth
              , o = e.offsetHeight
              , r = i.width
              , a = i.height;
            if (0 < r && 0 < a) {
                var s = r / a
                  , l = 0
                  , c = 0
                  , u = 0;
                s < n / o ? (c = 0,
                u = (n - (l = o * s)) / 2) : (u = 0,
                c = (o - (l = n) / s) / 2),
                console.log("v_w/wVid", l, r),
                console.log("v_top ", c, "v_left", u),
                this._control.setAttribute("Logo", "scale", l / r),
                this._control.setAttribute("Logo", "point", {
                    top: c,
                    right: u + l
                }),
                this._control.setAttribute("WaterMark", "videoSize", i)
            } else
                this._control.setAttribute("Logo", "visible", !1)
        }
        ,
        R.prototype.toogleBarrage = function(e) {
            this._control.setAttribute("GiveLike", "offset_tips", e),
            this._control.setAttribute("Bullet", "visible", e),
            this._control.setAttribute("Bullet", "bulletVisible", e),
            this._player.emit(s["default"].CONTROL, {
                type: s["default"].CONTROL_DANMU_SWITCH,
                data: {
                    value: e
                }
            })
        }
        ,
        R.prototype._onresize = function(e) {
            this.logoResize()
        }
        ,
        R.prototype._ondbclick = function(e) {
            this.sensorscreen = "double_click",
            this.toggleFullScreen(!0)
        }
        ,
        R.prototype.toggleFullScreen = function(e) {
            if (e) {
                if (this._control) {
                    if (this.isFullScreen())
                        this._control.setAttribute("FullScreen", "isFullScreen", !1);
                    else if (this.isPageFullScreen())
                        this._control.setAttribute("PageFull", "isPageFull", !1);
                    else {
                        var t = this._player.getConfig().getEntryConfig("ui")
                          , i = !0;
                        t != undefined && (i = t.fullPage == undefined || t.fullPage),
                        i && !y["default"].isPPC() ? this._control.setAttribute("PageFull", "isPageFull", !0) : this._control.setAttribute("FullScreen", "isFullScreen", !0)
                    }
                    this._control.showPageFull()
                }
            } else {
                var n = this._control.getAttribute("FullScreen", "isFullScreen");
                if (null == n)
                    return;
                (e != undefined && e != n || e == undefined) && (this._control.setAttribute("FullScreen", "isFullScreen", !n),
                this._oncontrol({
                    module: "FullScreen"
                }));
                var o = this._control.getAttribute("PageFull", "isPageFull");
                e != undefined && e != o && (this._control.setAttribute("PageFull", "isPageFull", !1),
                this._oncontrol({
                    module: "PageFull"
                }))
            }
        }
        ,
        R.prototype.isFullScreen = function() {
            return !!this._control && this._control.getAttribute("FullScreen", "isFullScreen")
        }
        ,
        R.prototype.isPageFullScreen = function() {
            return !!this._control && this._control.getAttribute("PageFull", "isPageFull")
        }
        ,
        R.prototype.setPlayerStatus = function(e, t, i) {
            if (this._control && this._control.isHasInstanceByName(e)) {
                var n = void 0
                  , o = {};
                switch (e) {
                case "Play":
                    "boolean" == typeof i && i ? (n = s["default"].CONTROL_PLAY,
                    this.showLoading(),
                    this.showWaitTips(),
                    this._control.setAttribute("RechargeView", "visible", !1),
                    window.QYP.userPause = !1) : (window.QYP.userPause = !0,
                    n = s["default"].CONTROL_PAUSE)
                }
                this._control.setAttribute(e, t, i),
                o.actionType = a["default"].ACTION_CONTROL,
                this._player.emit(s["default"].CONTROL, {
                    type: n,
                    data: o
                })
            }
        }
        ,
        R.prototype.renderComponent = function(e, t) {
            var i = this;
            if (2 < arguments.length && undefined,
            null == this._control)
                return clearTimeout(this._renderTimer),
                this._renderTimer = null,
                void (this._renderTimer = setTimeout(function() {
                    i.renderComponent(e, t, "自运行")
                }, 500));
            if ("multiCamera" == e)
                this._control.setAttribute("MultiCamera", "removeChild"),
                this._control.setAttribute("MultiCamera", "addView", t.config.el),
                t.config.status || (this._control.setAttribute("MultiCamera", "visible", !1),
                this._control.setAttribute("Title", "actionvisible", !0),
                this._control.isPageScreen() && this._control.setAttribute("Title", "hideothers", !1),
                console.log("当前是广告阶段么", g["default"].isAres()),
                g["default"].isAres() && this._control.setAttribute("Title", "visible", !1));
            else if ("chargeView" == e)
                this._control.renderRechargeView(),
                this._control.setAttribute("RechargeView", "removeChild"),
                this._control.setAttribute("RechargeView", "addView", t.dom),
                this._control.setAttribute("RechargeView", "visible", !0);
            else if ("like" == e)
                this._control.renderGiveLikeView(),
                this._control.setAttribute("GiveLikeView", "removeChild"),
                this._control.setAttribute("GiveLikeView", "addView", t.dom),
                g["default"].isAres() && this._control.setAttribute("GiveLikeView", "visible", !1);
            else if ("filing" == e)
                this._control.renderFilingView(),
                this._control.setAttribute("FilingView", "removeChild"),
                this._control.setAttribute("FilingView", "addView", t.dom),
                this._control.setAttribute("FilingView", "showTime", t.showTime),
                this._control.setAttribute("FilingView", "visible", !1);
            else if ("sendmsg" == e) {
                this._control.renderChatInputView(),
                this._control.setAttribute("ChatInputView", "removeChild"),
                this._control.setAttribute("ChatInputView", "addView", t.dom);
                var n = this._control.getAttribute("FullScreen", "isFullScreen");
                console.log("全屏下显示聊天室，否则不显示", n),
                this._control.checkChatInputViewVisible(g["default"].isAres())
            } else
                "compereSwitcher" == e ? ("boolean" == typeof t.visible && this._control.setAttribute("CompereSwitcher", "visible", t.visible),
                "boolean" == typeof t.compereOn && this._control.setAttribute("CompereSwitcher", "compereOn", t.compereOn)) : "compereView" == e && (g["default"].isAres() || (t.dom && (this._control.renderCompereView(),
                this._control.setAttribute("CompereView", "addView", t.dom)),
                this._control.setAttribute("CompereView", "visible", t.visible),
                this._control.setAttribute("CompereView", "expanded", t.expanded)))
        }
        ,
        R.prototype.reRender = function() {
            this.renderComponentDisable(),
            this._control.reI18nSetConfig(m["default"].isTWLocale() ? "tw" : "cn"),
            this._statusSet()
        }
        ,
        R.prototype.renderComponentDisable = function() {
            this._control.setAttribute("ChatInputView", "removeChild"),
            this._control.setAttribute("ChatInputView", "visible", !1),
            this._control.setAttribute("FilingView", "removeChild"),
            this._control.setAttribute("FilingView", "visible", !1),
            this._control.setAttribute("GiveLikeView", "removeChild"),
            this._control.setAttribute("CompereSwitcher", "visible", !1),
            this._control.setAttribute("CompereView", "visible", !1),
            this._control.setAttribute("RechargeView", "removeChild"),
            this._control.setAttribute("RechargeView", "visible", !0),
            this._control.setAttribute("MultiCamera", "removeChild"),
            this._control.setAttribute("MultiCamera", "visible", !1),
            this._control.setAttribute("WaterMark", "visible", !1),
            this._control.setAttribute("Logo", "visible", !1)
        }
        ,
        R.prototype._onerror = function(e) {
            this._errorBeforeInited = !this._inited,
            this.toggleFullScreen(!1),
            this._control && (this.hideLoading(),
            this._control.setControlVisible(!1),
            this.clearTips(),
            this._onacthidetips())
        }
        ,
        R.prototype._onvideostatus = function(e) {
            var t = this;
            if (e) {
                var i = e.type
                  , n = e.data;
                switch (window.QYP.playerStatus = i) {
                case s["default"].VIDEO_READY:
                    this._tips.notifyPlay();
                    break;
                case s["default"].VIDEO_PLAY:
                    clearInterval(this.checkcontrolTimer),
                    this.curentState = -1,
                    this._onresize(),
                    this.logoResize(),
                    console.log("ProgramStatus.isPlaybackPlaying:", u["default"].isPlaybackPlaying()),
                    console.log("正片开始播放后全量启用播控功能", this._inited, this._control.getControlVisible()),
                    l["default"].os.android || l["default"].os.ios ? this._control && this._control.setControlVisible(!1) : this._inited && !this._control.getControlVisible() && this._control.setControlVisible(!0),
                    g["default"].isMainMovieStart() && (this._control.setAttribute("FilingView", "show"),
                    this.autoPlayFail && (this.autoPlayFail = !1,
                    this._control.setAttribute("Music", "visible", !0),
                    setTimeout(function() {
                        t._control.setAttribute("Music", "visible", !1)
                    }, 4e3))),
                    this.updateControlStatus(this._player.getVideoTime()),
                    !this._control.getAttribute("WaterMark", "visible") && this._inited && this._control.setAttribute("WaterMark", "visible", !0),
                    !this._control.getAttribute("Logo", "visible") && this._inited && this._control.setAttribute("Logo", "visible", !0),
                    this._control.checkChatInputViewVisible(g["default"].isAres()),
                    this._control.setGiveLikeViewZindex(!0),
                    this.checkplaystatus(),
                    console.log("mainheight case PlayerConst.VIDEO_PLAY"),
                    this._control.hideBackgroundImg(!1);
                    break;
                case s["default"].VIDEO_ARES_PLAY:
                    this.checkplaystatus(),
                    c["default"].isFlash() && g["default"].isAres() && this._control.hideBackgroundImg(!0);
                    break;
                case s["default"].VIDEO_PAUSE:
                    clearInterval(this.checkcontrolTimer),
                    this.checkcontrolTimer = setInterval(function() {
                        return t.updateControlStatus(t._player.getVideoTime())
                    }, 5e3);
                case s["default"].VIDEO_ARES_PAUSE:
                    this._control.setAttribute("Play", "playState", !0);
                    break;
                case s["default"].VIDEO_WAITE:
                    this.showWaitTips(),
                    this._sendQos({
                        "evetp": 2022,
                        "content": ""
                    });
                    break;
                case s["default"].VIDEO_RESET:
                    this._control.setGiveLikeViewZindex(!1);
                    break;
                case s["default"].VIDEO_ERROR:
                    var o = "stype_flv";
                    if ("1" == window.QYP.stype ? o = "stype_ts" : "2" == window.QYP.stype && (o = "stype_data"),
                    window.QYP.engineType == c["default"].PT)
                        var r = {
                            stp: 1,
                            "evetp": 4e3,
                            "content": JSON.stringify({
                                "type": o,
                                "msg": JSON.stringify(n)
                            })
                        };
                    else
                        r = {
                            "evetp": 4e3,
                            "content": JSON.stringify({
                                "type": o,
                                "msg": JSON.stringify(n)
                            })
                        };
                    this._sendQos(r),
                    (l["default"].os.android || l["default"].os.ios) && n && "4" == n.code && this.showFeedback({
                        code: A["default"].MOBILE_SUPPORT_ERROR,
                        message: JSON.stringify(n)
                    }),
                    this.toggleFullScreen(!1);
                    break;
                case s["default"].VIDEO_AUTOPLAY_FAIL:
                    this.showAutoPlayFail();
                    break;
                case s["default"].VIDEO_SEEKING:
                    this.showSeekingTips(n.bid),
                    this._control.setGiveLikeViewZindex(!1);
                    break;
                case s["default"].VIDEO_SEEKEND:
                    var a = this._player.getProgramInfo();
                    a && this.showSeekendTips(a.definition.currentDefinition.bid);
                    break;
                case s["default"].VIDEO_STOP:
                    n && n.ad || this.showMovieEndView()
                }
            }
        }
        ,
        R.prototype._onlive = function(e) {
            switch (e.type) {
            case s["default"].NOTIFY_LIVE_STOP:
                y["default"].isPPC() && this._player.getConfig().getEntryConfig("multiCamera") || this.toggleFullScreen(!1),
                this._inited ? this.showMovieEndView() : y["default"].isPGC() && this.showMovieEndView();
                break;
            case s["default"].NOTIFY_LIVE_START:
                this.showMovieStartView();
                break;
            case p["default"].ACT_CHECK_BLOCK:
                this.toggleFullScreen(!1)
            }
        }
        ,
        R.prototype._oncontrol = function(e) {
            var t = void 0
              , i = {};
            switch (e.module) {
            case "Play":
                this._control.getAttribute("Play", "playState") ? (t = s["default"].CONTROL_PLAY,
                this.showLoading(),
                this.showWaitTips(),
                window.QYP.userPause = !1) : (window.QYP.userPause = !0,
                t = s["default"].CONTROL_PAUSE),
                this.updateControlStatus(this._player.getVideoTime());
                break;
            case "Refresh":
                this._refreshStatusBtn = this._control.getAttribute("Status", "text"),
                t = s["default"].CONTROL_REFRESH,
                this.showLoading(),
                this.showWaitTips();
                break;
            case "Bullet":
                "bulletVisible" === e.info ? (t = s["default"].CONTROL_DANMU_SWITCH,
                i = {
                    value: this._control.getAttribute("Bullet", "bulletVisible")
                },
                this._sendMultiLiveVisible(!i.value),
                this._player.emit(s["default"].CONTROL, {
                    type: s["default"].CONTROL_BARRSET_SWITCH,
                    data: {
                        value: this._control.getAttribute("Bullet", "bulletVisible"),
                        atonce: !0
                    }
                })) : "enterBulletBtn" === e.info && this._control.getAttribute("Bullet", "bulletVisible") ? (t = s["default"].CONTROL_BARRSET_SWITCH,
                i = {
                    value: !0
                },
                this._sendMultiLiveVisible(!1)) : "leaveBulletBtn" === e.info && (t = s["default"].CONTROL_BARRSET_SWITCH,
                i = {
                    value: !1
                },
                this._sendMultiLiveVisible(!0));
                break;
            case "Sharpness":
                if ("selectCurRate" == e.info)
                    v["default"].send603 = !0,
                    t = s["default"].CONTROL_DEFINITION_SELECT,
                    i = {
                        value: this._control.getAttribute("Sharpness", "curSharpnessVo")
                    };
                else if ("showRateList" == e.info)
                    t = s["default"].CONTROL_DEFINITION_SWITCH,
                    i = {
                        value: this._control.getAttribute("Sharpness", "showRateList")
                    },
                    this._sendMultiLiveVisible(!i.value);
                else {
                    if ("selectLimitRate" == e.info)
                        return this._control.getAttribute("FullScreen", "isFullScreen") && this._control.setAttribute("FullScreen", "isFullScreen", !1),
                        void this._player.emitAsync(s["default"].DOSOMETHING, {
                            data: {
                                handleType: "LimitDefinitionClick"
                            }
                        });
                    if ("hideRateList" == e.info)
                        return void this._sendMultiLiveVisible(!0)
                }
                break;
            case "Music":
                var n = e.info;
                if ("VoiceChange" == n.event)
                    t = s["default"].CONTROL_VOLUME,
                    i = {
                        value: this._control.getAttribute("Music", "volume") / 100
                    },
                    "userAction" == n.type && (i.userAction = !0);
                else {
                    if ("VoiceBgShow" == n.event)
                        return void this._sendMultiLiveVisible(!1);
                    if ("VoiceBgHide" == n.event)
                        return void this._sendMultiLiveVisible(!0)
                }
                break;
            case "PageFull":
                t = s["default"].CONTROL_FULLPAGE_SWITCH,
                i = {
                    value: this._control.getAttribute("PageFull", "isPageFull")
                },
                "no" != e.extra && (this.sensorScreenClick("web_full", e.extra),
                this.sensorScreenPv());
                break;
            case "FullScreen":
                t = s["default"].CONTROL_FULLSCREEN_SWITCH,
                i = {
                    value: this._control.getAttribute("FullScreen", "isFullScreen")
                },
                this.logoResize(),
                this.sensorScreenClick("enter_full", e.extra),
                this.sensorScreenPv();
                break;
            case "LineHeight":
                this._control.getAttribute("Title", "visible");
                break;
            case "Menu":
                t = s["default"].CONTROL_CONTEXTMENU_SWITCH,
                i = {
                    value: e.info.tag
                },
                "keyboard" === e.info.tag && this._control.setAttribute("KeyBoardView", "visible", !0),
                (0,
                r.handleContextMenu)(this._player, e.info.tag);
                break;
            case "PreView":
                t = s["default"].CONTROL_PREVIEW,
                i = {
                    value: undefined
                };
                break;
            case "LiveList":
                t = s["default"].CONTROL_PROLIST,
                i = {
                    value: null
                };
                break;
            case "ControlShow":
                t = s["default"].CONTROL_SHOW,
                i = {
                    value: e.info
                },
                this._sendMultiLiveVisible(e.info);
                break;
            case "ProgressWrap":
                t = s["default"].CONTROL_SEEK,
                i = {
                    value: y["default"].isPPC() && u["default"].isPlaybackPlaying() ? e.info.time : e.info.time / 1e3
                },
                this._showBackLiveTip = this.updateControlStatus(e.info.time / 1e3);
                break;
            case "GiveLike":
                "giveLikeShow" === e.info && (this._player.emitAsync(s["default"].PRAISE_TOGGLE, {
                    data: this._control.getAttribute("GiveLike", "giveLikeVisible")
                }),
                this._control.setAttribute("GiveLikeView", "visible", this._control.getAttribute("GiveLike", "giveLikeVisible")));
                break;
            case "CompereSwitcher":
                if ("compereSwitch" === e.info) {
                    var o = this._control.getAttribute("CompereSwitcher", "compereOn");
                    t = s["default"].CONTROL_COMPERE_SWITCH,
                    i = {
                        value: o
                    },
                    o || this._control.setAttribute("CompereView", "visible", o)
                }
                break;
            case "BackLive":
                t = s["default"].CONTROL_BACKLIVE,
                this._control.setAttribute("Status", "text", 1),
                this._control.setAttribute("StatusTip", "text", 1),
                this._control.setAttribute("Refresh", "visible", !0),
                this._showBackLiveTip = !0;
                break;
            case "Tips":
                "立即购买" != e.info && "立即購買" != e.info || (this.toggleFullScreen(!1),
                this._player.emitAsync(s["default"].RECHARGE, p["default"].TRYWATCH_CLICK_VIP),
                t = s["default"].CONTROL_PAUSE);
                break;
            case "Status":
                "backLive" == e.info && (t = s["default"].CONTROL_BACKLIVE,
                this._control.setAttribute("Status", "text", 1),
                this._control.setAttribute("StatusTip", "text", 1),
                this._control.setAttribute("Refresh", "visible", !0),
                this._showBackLiveTip = !0);
                break;
            case "MultiCameraBtn":
                "showMultiCamera" == e.info && (this._control.setAttribute("MultiCamera", "visible", !0),
                this._control.setAttribute("Title", "actionvisible", !1));
                break;
            case "ZoomBtn":
                t = s["default"].ZOOM_SWITCH,
                i = {
                    value: e.info
                };
                break;
            case "HdrLike":
                t = s["default"].HDKLIKE_SWITCH,
                i = {
                    value: e.info
                }
            }
            t && (i.actionType = a["default"].ACTION_CONTROL,
            this._player.emit(s["default"].CONTROL, {
                type: t,
                data: i
            }))
        }
        ,
        R.prototype.setMuted = function(e) {
            if (this._control) {
                var t = this.getVolume();
                e ? 0 < t && this._control.setAttribute("Music", "mute", "autoSet") : t <= 0 && this._control.setAttribute("Music", "mute", "autoSet")
            }
        }
        ,
        R.prototype.getVolume = function() {
            if (this._control) {
                var e = this._control.getAttribute("Music", "volume") / 100;
                return null == e ? .8 : e
            }
            return .8
        }
        ,
        R.prototype.setVolume = function(e) {
            this._control && this._control.setAttribute("Music", "volume", 100 * e)
        }
        ,
        R.prototype.sensorScreenPv = function() {
            var e = "";
            e = this._control.isFullScreen() ? "full" : this._control.isPageScreen() ? "web_full" : "halfs";
            var t = {};
            t.rpage = e,
            t.block = "bofaqi",
            this._player.emit(s["default"].SENSOR_PV, t),
            u["default"].setRpage(e)
        }
        ,
        R.prototype.checkplaystatus = function() {
            v["default"].firstPlay && (v["default"].firstPlay = !1,
            this._sendQos({
                "evetp": 2021,
                "content": JSON.stringify({
                    "type": "playStream",
                    "msg": "firstPlay"
                })
            }),
            this._player.emitAsync(s["default"].STATUS_STARTPLAY)),
            v["default"].send603 && (v["default"].send603 = !1,
            this._sendQos({
                "evetp": 603,
                "content": JSON.stringify({
                    "type": "play_success",
                    "msg": this._player.getProgramInfo().definition.currentDefinition.bid
                })
            })),
            this._control.setAttribute("Play", "playState", !1),
            this._tips.notifyPlay(),
            this.hidePreview(),
            this._showBackLiveTip && (this.showTips(h["default"].getConfig("tips.backlive"), !1, 3, 0),
            this._showBackLiveTip = !1),
            this._control.checkChatInputViewVisible(g["default"].isAres())
        }
        ,
        R.prototype.sensorScreenClick = function(e, t) {
            if (y["default"].isPPC()) {
                this.sensorscreen != undefined && "" != this.sensorscreen && (e = this.sensorscreen);
                var i = this.sensorscreen = "";
                i = "fullScreen" == t ? "full" : "pageFull" == t ? "web_full" : "normal" == t ? "halfs" : this._control.isFullScreen() ? "full" : this._control.isPageScreen() ? "web_full" : "halfs",
                u["default"].setRpage(i);
                var n = {
                    block: "playcontrol"
                };
                n.rseat = e,
                n.rpage = i,
                this._player.emit(s["default"].SENSOR_CLICK, n)
            }
        }
        ,
        R.prototype.updateControlStatus = function(e) {
            if (!g["default"].isAres() && g["default"].getPhase() != g["default"].FILLER_START && !u["default"].isFillerPlaying()) {
                if (u["default"].isProgramPlaying() && u["default"].isLivePlaying()) {
                    if (this._player.getPreloadTime() < e + 20 || 0 == e)
                        return this._control.setAttribute("Status", "text", 1),
                        this._control.setAttribute("StatusTip", "text", 1),
                        this._control.setAttribute("Refresh", "visible", !0),
                        !0;
                    this._control.setAttribute("Status", "text", 2),
                    this._control.setAttribute("StatusTip", "text", 2),
                    this._control.setAttribute("Refresh", "visible", !1)
                } else
                    this._control.setAttribute("Status", "text", 3),
                    this._control.setAttribute("StatusTip", "text", 3),
                    this._control.setAttribute("Refresh", "visible", !0);
                return !1
            }
        }
        ,
        R.prototype._onNotify = function(e) {
            if (this._inited) {
                var t = e.data;
                switch (e.type) {
                case s["default"].NOTIFY_CONTROL_REMIND:
                    this.showTips(t.content, t.hideWhenPlay, t.stayTime, t.delayShow);
                    break;
                case s["default"].NOTIFY_CONTROL_LOADING_REMIND:
                    this._loadingRemind = t,
                    this._control.getAttribute("PreView", "visible") && this.showLoading();
                    break;
                case s["default"].NOTIFY_CONTROL_PROLIST:
                case s["default"].NOTIFY_CONTROL_PROLIST_UNSELECT:
                    break;
                case s["default"].NOTIFY_CONTROL_VOLUME_CHANGE:
                    this._control.setAttribute("Music", "volume", 100 * t)
                }
            }
        }
        ,
        R.prototype.openDanmuSwitch = function(e) {
            this._control.getAttribute("Bullet", "bulletVisible") || this._control.setAttribute("Bullet", "bulletVisible", e)
        }
        ,
        R.prototype.exitFullScreen = function() {
            this._control.setAttribute("FullScreen", "isFullScreen", !1),
            this._oncontrol({
                module: "FullScreen"
            })
        }
        ,
        R.prototype._onactshowtips = function(e) {
            var t = this;
            this.showTips(e.left, !1, 5),
            setTimeout(function() {
                t._tips.showTips2(e.right)
            }, 5e3)
        }
        ,
        R.prototype._onPanoshowtips = function() {
            this.showTips(h["default"].getConfig("tips.panolowtips"), !1, 20, 5)
        }
        ,
        R.prototype._onactremaining = function(e) {
            this.showTips(e, !1, 0)
        }
        ,
        R.prototype._onacthidetips = function() {
            this._tips && this._tips.hideAllTips()
        }
        ,
        R.prototype._sendQos = function(e) {
            this._player && this._player.emit(s["default"].SENSOR_QOS, e)
        }
        ,
        R.prototype._onlogview = function(e) {
            this._control && this._control.setAttribute("LogView", "data", e)
        }
        ,
        R.prototype._sendMultiLiveVisible = function(e) {
            this._player.emitAsync(s["default"].SHOW_SEEK_BAR, {
                data: !0 === e && this._inited && !this._control.getAttribute("PreView", "visible") ? "show" : "hide"
            })
        }
        ,
        R.prototype._onppctrywatchshowtipe = function() {
            this.showTips(h["default"].getConfig("tips.ppcTryWatch"), !1)
        }
        ,
        R.prototype._onppctrywatchcuttips = function(e) {
            this.showTips(h["default"].getConfig("tips.ppcTryWatchCountDown").replace("{0}", e), !1)
        }
        ,
        R);
        function R(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, R);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, C.call(this, e, t));
            return i._renderTimer = null,
            i._player.mount("control", i),
            i._control = null,
            i._type = f["default"].CONTROL,
            i._inited = !1,
            i._isCompatible = !1,
            i._loadingRemind = "",
            i._config = i._player.getConfig().getEnvConfig("control"),
            i._removeBarrage = !1,
            i._load(),
            i._showBackLiveTip = !1,
            i._needShowPro = !1,
            i._refreshStatusBtn = null,
            i.beginChanged = 0,
            i
        }
        t["default"] = P
    },
    "85240857f777a1fdb556": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACAElEQVRYR+WY/TEEQRDFX0dABoiADBABGSACKwJ3EXARIAMiQATIgAyIoNVTvapv7OzO7sxubZX+7/aj5nf93nT3rGBmITPjQTKQqm6LyPvYf6AVSFU3AVwBOHUgtwCWY8FFgQzmEcBeQ1Y+AVyLyLJ0xtqA7gEcdSxICc9E5KkUWBsQs7DhFnq2bPlr9W3CX5SQsRFIVSnTi4NZiUhFY1OqSOaKyBgDOgBA/9RBEy/qH6rK+zT3VoNUr5atQTIOAiKEmb4CcBnxD4EpIzOXHIOBXLYoIxffj+zGhYisUomygRzYsfkrS8ZiQKVkLArUQ8ZKRO6aZBwFyIGx5bBMxGoXi+qa6UcFcjKyZJw3ZOSnvvnrowO5bLHYMlvhbtzxFX4yIAfGbPnadeh74f8Fsv7I2Yptx8e0klmLoURr5jWiaU2tqtz2zAonzzAeOIlOsu1tTLlpkIdQX8yWiLD//YmipjZ5WG9+R5VgRTZZNtvoBFAMSFXZXCkPu38Yb5aVzhkpGyhBHmaEBTEpBgMlyMPmSa+MP6DZCEvTZsnTx9RtQz59Qr+Ewd3TS55kID6oquExiIYkaKymUJ7so3buQfHDilvn7klyNBD/2GCm5UK7EXl4lI7Vm9T10wpj/ZRBccueuDe5e+iVbHl6eSh8eBafYwbnPePF5A9WGWv0evUb66UmNNHpkasAAAAASUVORK5CYII="
    },
    "868ff663f49075869e0f": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = l(i("343def12cad299c54e12"))
          , r = l(i("c779f0f9ff7f0eb554cb"))
          , o = l(i("790825d0dabf4060a0d9"))
          , a = l(i("43dece7ece229ff96ccd"))
          , s = l(i("c5586ddc317ec36fc8d0"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, u = (function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, c = n["default"]),
        f.prototype.append = function(e, t) {
            if (this._startup) {
                var i = this._pathList[f.NOTICE];
                e == f.NOTICE && i.append(new s["default"](t.content,t.icon,t.url))
            }
        }
        ,
        f.prototype.destroy = function() {
            clearInterval(this._tid),
            c.prototype.destroy.call(this),
            this._startup = !1,
            this._frameFunc = null
        }
        ,
        f.prototype.__initView = function() {
            this._container.id = "video-msgway-container",
            this._container.style.width = "100%",
            this._container.style.height = "100%",
            this._container.style.position = "absolute",
            this._container.style.left = "0px",
            this._container.style.top = "0px",
            this._container.style.right = "0px",
            this._container.style.bottom = "0px",
            this._container.style["pointer-events"] = "none",
            this._container.style["z-index"] = 8,
            this._container.style["-webkit-user-select"] = "none",
            this._container.style["-moz-user-select"] = "none",
            this._container.style["-ms-user-select"] = "none",
            this._container.style["-o-user-select"] = "none",
            this._container.style["user-select"] = "none",
            this._width = this._container.offsetWidth,
            this._pathList[f.NOTICE] = new a["default"](this._container,15,this._width,85,40)
        }
        ,
        f.prototype.__initEvent = function() {
            var e = this;
            this._player.on(o["default"].CONTROL, this.__onControl.bind(this)),
            this._player.on(o["default"].PLAYER_RESIZE, this.__onResize.bind(this)),
            this._player.on(o["default"].MOVIE_ENTER, this.__onMovieEnter.bind(this)),
            this._player.on(o["default"].MOVIE_RESET, this.__onMovieReset.bind(this)),
            this._tid = setInterval(function() {
                e._container && e._container.parentNode && e._width !== e._container.parentNode.offsetWidth && e.__onResize(null)
            }, 500),
            this._frameFunc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
        }
        ,
        f.prototype.__update = function() {
            var e = this;
            this._startup && (this._pathList.forEach(function(e) {
                e.update()
            }),
            this._frameFunc && this._frameFunc.call(window, function() {
                e.__update()
            }))
        }
        ,
        f.prototype.__onControl = function(e) {
            e.type === o["default"].CONTROL_FULLSCREEN_SWITCH && (this._isFull = e.data.value)
        }
        ,
        f.prototype.__onResize = function(e) {
            var t = this;
            this._view && (this._width = this._container.offsetWidth,
            0 === this._width && this._container.parentNode && (this._width = this._container.parentNode.offsetWidth),
            this._pathList.forEach(function(e) {
                e.setWidth(t._width)
            }))
        }
        ,
        f.prototype.__onMovieEnter = function(e) {
            var t = this;
            this._startup || (this._startup = !0,
            this._frameFunc.call(window, function() {
                t.__update()
            }))
        }
        ,
        f.prototype.__onMovieReset = function(e) {
            this._startup = !1
        }
        ,
        f);
        function f(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this, e, t));
            return i._type = r["default"].MSGWAY,
            i._startup = !1,
            i._isFull = !1,
            i._pathList = [],
            i._width = 0,
            i.__initView(),
            i.__initEvent(),
            window.TEST_MAGWAY = i
        }
        (t["default"] = u).COMPERE = 1,
        u.NOTICE = 2,
        u.GIFT = 3
    },
    "86adf03dddb7c33a3de2": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
        }
    },
    "87802259cac67aad4a23": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var c = o(i("fd0b44f556392d6a75ac"))
          , u = o(i("53065c83966dce0d1759"))
          , f = o(i("ac1ad70ff54a2cbc9cab"))
          , d = o(i("fa4e6c91b6a23ac6e195"))
          , n = o(i("ea671b6b6dbc8144f277"))
          , p = o(i("a9d727c62bb635f5caaf"))
          , h = i("bef7a691bb63f7f92f11")
          , _ = o(i("6dfc805bb169defe8df1"));
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var g = new n["default"]("ChargeCheck")
          , r = (y.prototype.request = function(e, t, i) {
            var o, n = e.definition.remark.key, r = "afbe8fd3d73448c9", a = function a() {
                return ["qpid=" + e.tvid, "cid=" + r, "ut=" + n.qd_tm, "uid=" + f["default"].getUid(), "uuid=" + u["default"].getJsuid(), "play_v=", "platform=97ae2982356f69d8", "v=" + (0,
                d["default"])(e.tvid + "_" + r + "_" + n.qd_tm + "_2391461978"), "version=11.0", "filename=" + e.definition.streamName, "qd_uid=" + n.qd_uid, "qd_vip=" + n.qd_vip, "qd_vipres=" + n.qd_vipres, "qd_src=" + n.qd_src, "qd_tm=" + n.qd_tm, "qd_ip=" + n.qd_ip, "qd_sc=" + n.qd_sc, "qd_tvid=" + n.qd_tvid, "qd_scc=" + n.qd_scc, "dfp=" + p["default"].get(), "appName=livePlayerH5SH", "messageId=livePlayerH5SH_" + u["default"].createUUID().replace(new RegExp("-","g"), "").toLowerCase(), "isJsonp=true"]
            }, s = function s() {
                var e = o.join("&")
                  , n = y.URL + "?" + e;
                g.debug(n),
                c["default"].jsonp({
                    "url": n,
                    "beforeSend": function(e) {
                        var t = e.url;
                        return t = t.replace("callback", "cb"),
                        e.url = t,
                        h.apiStat.getStat(h.apiType.ckliven).reqStart(e.url),
                        e
                    },
                    "success": function(e) {
                        h.apiStat.getStat(h.apiType.ckliven).reqSucc(e),
                        e && e.hasOwnProperty("code") ? "A00000" === e.code ? (_["default"].add({
                            content: {
                                step: _["default"].STEPS.CHARGE,
                                result: 1,
                                data: {
                                    request: n,
                                    response: e
                                }
                            },
                            stage: _["default"].STAGE.PROCESS
                        }),
                        h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                        t(e)) : (_["default"].add({
                            content: {
                                step: _["default"].STEPS.CHARGE,
                                result: 0,
                                data: {
                                    request: n,
                                    response: e
                                },
                                code: e.code
                            },
                            stage: _["default"].STAGE.PROCESS,
                            level: _["default"].LEVEL.WARN
                        }),
                        h.apiStat.getStat(h.apiType.ckliven).parseFail(e.code),
                        h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                        l(e.code)) : (h.apiStat.getStat(h.apiType.ckliven).parseFail("no data code"),
                        h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                        _["default"].add({
                            content: {
                                step: _["default"].STEPS.CHARGE,
                                result: 0,
                                data: {
                                    request: n,
                                    response: e
                                },
                                code: "responseEmpty"
                            },
                            stage: _["default"].STAGE.PROCESS
                        }),
                        l("P00001"))
                    },
                    "failure": function(e, t, i) {
                        h.apiStat.getStat(h.apiType.ckliven).reqFail(i, e),
                        h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                        _["default"].add({
                            content: {
                                step: _["default"].STEPS.CHARGE,
                                result: 0,
                                data: {
                                    request: n,
                                    response: ""
                                },
                                code: "requestFail"
                            },
                            stage: _["default"].STAGE.PROCESS
                        }),
                        l("P00001")
                    }
                })
            }, l = function l(e) {
                i(e)
            };
            p["default"].get() ? (o = a(),
            s()) : p["default"].ready(function() {
                o = a(),
                s()
            })
        }
        ,
        y.prototype.requestUser = function(e, t, i) {
            if (e.P001.length < 1)
                i("P00001");
            else {
                var o = ["aid=" + e.tvid, "cid=afbe8fd3d73448c9", "P00001=" + e.P001]
                  , r = function r(e) {
                    i(e)
                };
                !function a() {
                    var e = o.join("&")
                      , n = y.UserURL + "?" + e;
                    h.apiStat.getStat(h.apiType.ckliven).reqStart(n),
                    c["default"].ajax({
                        "url": n,
                        "dataType": "json",
                        "withCredentials": !1,
                        "success": function(e) {
                            h.apiStat.getStat(h.apiType.ckliven).reqSucc(e),
                            e && e.hasOwnProperty("code") ? "A00000" === e.code ? (_["default"].add({
                                content: {
                                    step: _["default"].STEPS.CHARGE,
                                    result: 1,
                                    data: {
                                        request: n,
                                        response: e
                                    }
                                },
                                stage: _["default"].STAGE.PROCESS
                            }),
                            h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                            t(e)) : (_["default"].add({
                                content: {
                                    step: _["default"].STEPS.CHARGE,
                                    result: 0,
                                    data: {
                                        request: n
                                    }
                                },
                                stage: _["default"].STAGE.PROCESS
                            }),
                            h.apiStat.getStat(h.apiType.ckliven).parseFail(e.code),
                            h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                            r(e.code)) : (h.apiStat.getStat(h.apiType.ckliven).parseFail("no data code"),
                            h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                            _["default"].add({
                                content: {
                                    step: _["default"].STEPS.CHARGE,
                                    result: 0,
                                    data: {
                                        request: n
                                    }
                                },
                                stage: _["default"].STAGE.PROCESS
                            }),
                            r("P00001"))
                        },
                        "failure": function(e, t, i) {
                            h.apiStat.getStat(h.apiType.ckliven).reqFail(i, e),
                            h.apiStat.getStat(h.apiType.ckliven).pingbackQos(),
                            _["default"].add({
                                content: {
                                    step: _["default"].STEPS.CHARGE,
                                    result: 0,
                                    data: {
                                        request: n
                                    }
                                },
                                stage: _["default"].STAGE.PROCESS
                            }),
                            r("P00001")
                        }
                    })
                }()
            }
        }
        ,
        y.prototype.destroy = function() {}
        ,
        y);
        function y() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, y)
        }
        r.URL = "//api.vip.iqiyi.com/services/ckLiveN.action",
        r.UserURL = "//api.vip.iqiyi.com/services/at.action",
        t["default"] = r
    },
    "8b66265a44b334c61f32": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = a(i("9f02978f1998980c265b"))
          , o = a(i("5d4b75391cc4278354d9"))
          , r = a(i("1787093d7720fc0d37ae"));
        a(i("790825d0dabf4060a0d9"));
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s, l = (function u(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(c, s = n["default"]),
        c.prototype.init = function(e, t) {
            this.initialized || (this.parent = t,
            this.player = e,
            this.actApi = new o["default"](this),
            window.QL.Event.emit("authCover", "003"),
            this.initialized = !0)
        }
        ,
        c.prototype.handleNotify = function(e) {
            var t = !0;
            this._actInfo && this._actInfo.actId === e.actId && (t = !1),
            this._actInfo = e,
            window.QYP.actId = e.actId,
            window.QYP.actQpId = e.videoQpId || "",
            9 === e.notifyType || 10 === e.notifyType || 11 === e.notifyType && window.QL.Event.emit("authCover", "003"),
            this.doIdentify(t)
        }
        ,
        c.prototype.doIdentify = function(e) {
            var t = this._actInfo;
            t.vipType && 1 !== t.vipType ? e && this.request(t) : t.vipType && 1 === t.vipType && (this.playStateHandler(!0),
            this.player.emit(r["default"].ACT_TRYWATCH_STATE_CHANGE, !1),
            window.QL.Event.emit("authCover", "003"))
        }
        ,
        c.prototype.request = function(e) {
            var t = this;
            this.actApi.request(e).then(function(e) {
                1 === e.code ? t.identifyPass() : 2 === e.code ? t.identifyTrialOver(e) : t.identifyBlock()
            })["catch"](function(e) {
                t.identifyBlock()
            })
        }
        ,
        c.prototype.identifyPass = function() {
            window.QL.Event.emit("authCover", "003"),
            this.playStateHandler(!0),
            this.player.emit(r["default"].ACT_TRYWATCH_STATE_CHANGE, !1)
        }
        ,
        c.prototype.identifyBlock = function() {
            window.QL.Event.emit("authCover", window.QL.isLogin() ? "001" : "000"),
            this.playStateHandler(!1),
            this.player.emit(r["default"].ACT_TRYWATCH_STATE_CHANGE, !1, "block"),
            this.exitFullScreen()
        }
        ,
        c.prototype.identifyTrialOver = function(e) {
            this.parent.trialTime = e.trialTime,
            this.parent.trialledTime = e.trialledTime,
            0 < e.trialTime - e.trialledTime ? (this.playStateHandler(!0),
            this.parent.emit(r["default"].ACT_CHECK_TRIALTIME),
            this.player.emit(r["default"].ACT_TRYWATCH_STATE_CHANGE, !0)) : this.identifyBlock()
        }
        ,
        c.prototype.playStateHandler = function(e) {
            this.parent.isPlaying != e && this.player.emit(r["default"].ACT_TOPLAYER_PLAY, e)
        }
        ,
        c.prototype.exitFullScreen = function() {
            this.player.emit(r["default"].ACT_TRYWATCH_CONTROL, {
                type: r["default"].ACT_CHECK_BLOCK
            })
        }
        ,
        c.prototype.loginManager = function(e) {
            this._actInfo && this._actInfo.vipType && 1 != this._actInfo.vipType && this.request(this._actInfo)
        }
        ,
        c);
        function c() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c);
            var e = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, s.call(this));
            return e._previewTimeout = null,
            e._actInfo = null,
            e._playStatus = !1,
            e.initialized = !1,
            e.player = null,
            e.parent = null,
            e.actApi = null,
            e
        }
        t["default"] = new l
    },
    "8b7f35c7088a7864b506": function(e, t, i) {
        "use strict";
        var n = Math.ceil
          , o = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? o : n)(e)
        }
    },
    "8caaca8a977cdce4f65c": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = c(i("343def12cad299c54e12"))
          , o = c(i("790825d0dabf4060a0d9"))
          , r = c(i("53065c83966dce0d1759"))
          , a = c(i("ac1ad70ff54a2cbc9cab"))
          , s = (c(i("a9d727c62bb635f5caaf")),
        c(i("fd0b44f556392d6a75ac")))
          , l = c(i("c779f0f9ff7f0eb554cb"));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var u, f = (function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(d, u = n["default"]),
        d.prototype.destroy = function() {}
        ,
        d.prototype.__initEvent = function() {
            this._handlers = {},
            this._handlers.onPingback = this.__onPingback.bind(this),
            this._player.on(o["default"].PINGBACK_PV, this._handlers.onPingback)
        }
        ,
        d.prototype.__onPingback = function(e) {}
        ,
        d.prototype._pingbackEvt = function(e, t) {
            s["default"].ajax({
                "url": e,
                "params": t,
                "method": "get",
                "withCredentials": !1,
                "success": function(e) {},
                "failure": function() {}
            })
        }
        ,
        d.prototype.__packArgs = function(e) {
            var t = {}
              , i = this._player.getConfig().getEntryConfig("p1");
            if (t.p1 = i && 0 < i.length ? i : "1_10_101",
            t.u = r["default"].getFluid() || "",
            t.pu = a["default"].getUid() || "",
            t.v = this._player.getConfig().getEnvConfig("version"),
            t.ua_wb = navigator.userAgent,
            t.type = this._player.getConfig().getEntryConfig("programPlayerType"),
            t.qpid = window.QYP.qpId,
            t.ss_rk = this._player.getConfig().getEntryConfig("ss_rk"),
            t.ss = this._player.getConfig().getEntryConfig("ss"),
            t.kbfl = this._player.getConfig().getEntryConfig("kbfl"),
            t.ejfl = this._player.getConfig().getEntryConfig("ejfl"),
            t.roomid = window.QYP.roomId,
            t.ppu = window.QYP.anchorId,
            t.plav = this._player.getConfig().getEnvConfig("version"),
            0 !== window.QL.anchorId && window.QYP.playerStatus == o["default"].VIDEO_PLAY)
                return t.rpage = this._player.getConfig().getEntryConfig("rpage") || "other",
                t.block = 200200,
                t.glvtmxt = 1e3 * e,
                t.zbzt = this._player.getLiveStatus(),
                t.actid = window.QYP.actId ? window.QYP.actId : "",
                t.videoid = window.QYP.actQpId ? window.QYP.actQpId : "",
                t
        }
        ,
        d);
        function d(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, u.call(this, null, e));
            return t._type = l["default"].PINGBACK,
            t._config = t._player.getConfig().getEnvConfig("pingback"),
            t.__initEvent(),
            u.prototype.init.call(t),
            t
        }
        t["default"] = f
    },
    "8ff0c3383d7639777422": function(e, t, i) {
        "use strict";
        var o = i("6b0eb2cb0eb384618cfe");
        e.exports = function(e, t) {
            if (!o(e))
                return e;
            var i, n;
            if (t && "function" == typeof (i = e.toString) && !o(n = i.call(e)))
                return n;
            if ("function" == typeof (i = e.valueOf) && !o(n = i.call(e)))
                return n;
            if (!t && "function" == typeof (i = e.toString) && !o(n = i.call(e)))
                return n;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "906a9458640527aff71e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSA3tVUESwiAMRPEZHJjhNdV/+Cj/ob6GGQ79BqNJJKeyYlsudsqhpRuyyS5MMWYfDQcOHE8pDTnnG01dY/2v4dFae/XeP4+c0ZmcKV3hNCf+oiGdhxBE0Qda/owxvpRTFCynameqgslK6uJO4HkSqAMPUn+phXopYEuqAypAHVVZvoC9FMASUAHYA+g1qjBXAfQaFYAK/mYP5lqEnID4XgBaowE9RSMBrvwFNbb2zZxG9oAvB5oLsJa15MuF04lr6zRvgM0qSMUldXMAAAAASUVORK5CYII="
    },
    "91a51c8c5e0f660076d7": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = c(i("343def12cad299c54e12"))
          , r = c(i("c779f0f9ff7f0eb554cb"))
          , o = c(i("c74e6a3ef7795a2e1be9"))
          , a = c(i("790825d0dabf4060a0d9"))
          , s = c(i("dbbcfbfc2a12d719de3f"))
          , l = c(i("61637bf383ae9d72a949"));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var u, f = (function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(d, u = n["default"]),
        d.prototype.destroy = function() {
            this._handlers && (this.removeAllPlayerEvents(),
            this._handlers = null),
            this._destroyPano(),
            this._view && (this._view.destroy(),
            this._view = null),
            u.prototype.destroy.call(this),
            this._frameFunc = null
        }
        ,
        d.prototype.__initEvent = function() {
            this._handlers || (this._handlers = {
                movieenter: this._onMovieEnter.bind(this),
                moviereset: this._onMovieReset.bind(this),
                fullswitch: this._onFullSwitch.bind(this),
                onvideostatus: this._onvideostatus.bind(this)
            },
            this.addPlayerEvent(a["default"].MOVIE_ENTER, this._handlers.movieenter),
            this.addPlayerEvent(a["default"].MOVIE_RESET, this._handlers.moviereset),
            this.addPlayerEvent(a["default"].CONTROL, this._handlers.fullswitch),
            this.addPlayerEvent(a["default"].VIDEO_STATUS, this._handlers.onvideostatus)),
            u.prototype.init.call(this)
        }
        ,
        d.prototype._onvideostatus = function(e) {
            if (e)
                switch (e.type) {
                case a["default"].VIDEO_PLAY:
                    this._container && "block" != this._container.style.display && (this._container.style.display = "block");
                    break;
                case a["default"].VIDEO_STOP:
                    this._container && "none" != this._container.style.display && (this._container.style.display = "none")
                }
        }
        ,
        d.prototype._onMovieEnter = function(e) {
            var t = this;
            if (!this._startUp && (this._startUp = !0,
            this._player.getProgramInfo().pano)) {
                if (setTimeout(function() {
                    l["default"].getInstance().isIE() && l["default"].getInstance().getVersion() <= 8 && t._player.emit(a["default"].PANO_LOW, {
                        data: ""
                    })
                }, 8e3),
                this._videoContainer = document.getElementsByClassName("pw-engine")[0],
                !this._videoContainer)
                    return;
                this._enabled = !0,
                this.__initView(),
                this.__initPlayer(),
                this._frameFunc.call(window, this.__update.bind(this))
            }
        }
        ,
        d.prototype._onMovieReset = function(e) {
            this._enabled = !1,
            this._startUp = !1,
            this._destroyPano(),
            this._view && (this._view.destroy(),
            this._view = null)
        }
        ,
        d.prototype._destroyPano = function() {
            this._panoPlayer && ("flash" == this._panotype ? this._panoPlayer.destroyPano && this._panoPlayer.destroyPano() : this._panoPlayer.destroy && this._panoPlayer.destroy(),
            this._panoPlayer = null)
        }
        ,
        d.prototype._onFullSwitch = function(e) {
            e && this._view && e.type === a["default"].CONTROL_FULLSCREEN_SWITCH && this._view.full(e.data.value)
        }
        ,
        d.prototype.__initView = function() {
            this._container.id = "video-pano-container",
            this._container.style.display = "none",
            this._view = new o["default"](this._container,this._videoContainer,this.__onPanoChange.bind(this))
        }
        ,
        d.prototype.__initPlayer = function() {
            var e = this._videoContainer.getElementsByTagName("video")[0];
            if (e) {
                this._panotype = "video";
                var t = this._player.getConfig().getEnvConfig("pano").sdkUrl;
                this._panoPlayer = new s["default"](this._player.getView().getLayer(r["default"].ENGINE),e,t)
            } else
                -1 === this._videoContainer.innerHTML.indexOf("x-shockwave-flash") && !this._videoContainer.getElementsByTagName("object")[0] || (this._panotype = "flash",
                this._panoPlayer = this._videoContainer.getElementsByTagName("object")[0],
                this._panoPlayer && (this._panoPlayer.initPano && this._panoPlayer.initPano(),
                this._panoPlayer.style["pointer-events"] = "none"))
        }
        ,
        d.prototype.__update = function() {
            this._enabled && (this._view && this._view.update(),
            this._panoPlayer && "video" === this._panotype && this._panoPlayer.render(),
            this._frameFunc && this._frameFunc.call(window, this.__update.bind(this)))
        }
        ,
        d.prototype.__onPanoChange = function(e, t, i) {
            this._panoPlayer && ("video" === this._panotype ? (this._panoPlayer.changeLon(e),
            this._panoPlayer.changeLat(t),
            this._panoPlayer.changeDis(i)) : "flash" === this._panotype && this._panoPlayer.changePano && this._panoPlayer.changePano(10 * e, 10 * t, i))
        }
        ,
        d);
        function d(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, u.call(this, e, t));
            return i._type = r["default"].PANO,
            i._view = null,
            i._panoPlayer = null,
            i._startUp = !1,
            i._panotype = "",
            i.__initEvent(),
            i._frameFunc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
            ,
            i
        }
        t["default"] = f
    },
    "92b23044694675f06de2": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAFhJREFUKBVjZDhn4cnw7/8sBob/MgxEA8YnDEyMaYwMZ8wfk6YRZgPjExa4RpNTjDBhgvQZs/8gfUwEFeJRMKoZT+BgkxqJAUZR2mYC5Q4GBmAuIQlAchUAZzkWC/rwCFIAAAAASUVORK5CYII="
    },
    "9401241c289bc4a99b79": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            if (e == undefined)
                throw TypeError("Can't call method on " + e);
            return e
        }
    },
    "94172d95dee6e1d4885c": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("c627e4f58ec4241c41a2"));
        var o = (r.getDescByBid = function(e) {
            return n["default"].getConfig(r.getI18NKeyOfBid(e))
        }
        ,
        r.getI18NKeyOfBid = function(e) {
            for (var t = 0; t < r.DEFINITION_LIST.length; t++)
                if (r.DEFINITION_LIST[t].vd == e)
                    return r.DEFINITION_LIST[t].value;
            return ""
        }
        ,
        r);
        function r() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r)
        }
        o.DEFINITION_LIST = [{
            vd: 100,
            value: "definition.speed"
        }, {
            vd: 200,
            value: "definition.smooth"
        }, {
            vd: 300,
            value: "definition.high"
        }, {
            vd: 400,
            value: "definition.super"
        }, {
            vd: 500,
            value: "definition.720p"
        }, {
            vd: 590,
            value: "definition.720po"
        }, {
            vd: 600,
            value: "definition.1080p"
        }, {
            vd: 601,
            value: "definition.1080p_ppc"
        }, {
            vd: 610,
            value: "definition.1080p50"
        }, {
            vd: 660,
            value: "definition.1080p6m"
        }, {
            vd: 670,
            value: "definition.1080p8m"
        }, {
            vd: 690,
            value: "definition.1080po"
        }, {
            vd: 700,
            value: "definition.2K"
        }, {
            vd: 790,
            value: "definition.2Ko"
        }, {
            vd: 800,
            value: "definition.4k"
        }],
        o.DEFAULT_ORDER = [300, 400, 200, 100, 500, 850, 800, 750, 790, 700, 690, 670, 660, 650, 620, 610, 600, 590],
        t["default"] = o
    },
    "943a5923628a06c02fa6": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAiCAYAAACHpl23AAAAAXNSR0IArs4c6QAAAxhJREFUaAXtm01IVFEUx/9vfM40ozYT2UzhxFQ6iqVJFCoUSS2CKCg3LpIWJkgti2ih0SI/Vi3ahFkRQtjChYQRtKjIJBCSKDWEHMvBCVMLZ9SU0dHp3heIIzOD3TfvwYNzV++9+3EO/x/nnnMfXAkfy09jNfoAiLpBzUAKSAGYpDoJ/WXjBM9A3GJclQImghejiMFeom4GkJqRFSCARqbHfCeABNDgChjcfYpAAmhwBQzuPkWgwQHKav3PMtlw3VWNc47jyLW4sRyNwBcO4FmwB23TXfi9MqvWBM1PogD7E1MaTdKftOtk1hE89tyEx7IL40uTGFgcUQAWW/MUmKGVeVR/v4UXofdJ16FOcQWEAZ7IOozX3nvwL03gauCuEnHr3Ti1tQwPPfVwpztROXoD3aHe9d30nCIFhADybXNw/1OYTekoHa5BYHkqrjtOeRs+FLYjw2RF4ZcqTEeCccfRR3EFhIoYnvP4tlk71pQQHndpKjKDqm/1GFocFfeQZiZVQCgCPxU+QbbsQMXXy/BadqPvzxCCLN9R018BoSqUV5uZaTb4iroUjxt+tKLlZ3uM91skM87aj6HE5sVBVtT8Yttnrb85Zgy9qFdACGDnzCslAgcWffi8MILncQqUa64LaM65subh/MoCAVxTI3UPQlvoZsw70jJRnlGEkfA4evLvKwXMoeGLm5lKY/5DAaEiZgfLf2/zW1GWcSChKZ4TX872ocDiQY7Zie7gu4RjqUNcASGA3FyxNRed+1rAjwqJGj8DPtrTAH94AncmOxINo+8qFBACyM9zNWONyiGdn/P4oX1jO++oQG9BG3bK21Hjb8Tc6sLGIfSeAgVU5cAz9qPo2HsbdpbvRtn/z0FW1KRLMkqsXrjNLiXyLvmb8GauPwWu0hLxFFAFkC+YLdtRl10JHnF57HjBAfKf2Tzn8W2TIi+e7Kn7phpg6lyhlUQUEMqBIoZojjYKEEBtdNVtVQKom9TaGCKA2uiq26oEUDeptTFEALXRVbdVCaBuUmtjiAFk98yoGVQBfr2MXRIkiEbk9++C51/eS9Q2sj3xdgAAAABJRU5ErkJggg=="
    },
    "96598f2d6ae9c8676ba4": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.setQPgot = function(e) {
            this._isQPgot = e
        }
        ,
        o.prototype.getQPgot = function() {
            return this._isQPgot
        }
        ,
        o.prototype.setRpage = function(e) {
            this._rpage = e
        }
        ,
        o.prototype.getRpage = function() {
            return this._rpage
        }
        ,
        o.prototype.setProgramStatus = function(e) {
            this._programStatus = e
        }
        ,
        o.prototype.getProgramStatus = function() {
            return this._programStatus
        }
        ,
        o.prototype.isProgramPlaying = function() {
            return this.getProgramStatus() == this.PLAYING
        }
        ,
        o.prototype.isProgramWaiting = function() {
            return this.getProgramStatus() == this.WAITING
        }
        ,
        o.prototype.isProgramEnded = function() {
            return this.getProgramStatus() == this.ENDED
        }
        ,
        o.prototype.setPlayStatus = function(e) {
            this._playStatus = e
        }
        ,
        o.prototype.getPlayStatus = function() {
            return this._playStatus
        }
        ,
        o.prototype.isFillerPlaying = function() {
            return this.getPlayStatus() == this.FILLER_PLAYING
        }
        ,
        o.prototype.isLivePlaying = function() {
            return this.getPlayStatus() == this.MOVIE_LIVING
        }
        ,
        o.prototype.isPlaybackPlaying = function() {
            return this.getPlayStatus() == this.MOVIE_PLAYBACK
        }
        ,
        o.prototype.isPlayEnd = function() {
            return this.getPlayStatus() == this.PLAY_END
        }
        ,
        o.prototype.setRoomStatus = function(e) {
            this._roomStatus = e
        }
        ,
        o.prototype.getRoomStatus = function() {
            return this._roomStatus
        }
        ,
        o.prototype.isRoomStop = function(e) {
            return (e != undefined ? e : this.getRoomStatus()) == this.ROOM_STOP
        }
        ,
        o.prototype.isRoomLive = function(e) {
            return (e != undefined ? e : this.getRoomStatus()) == this.ROOM_LIVE
        }
        ,
        o.prototype.isRoomBan = function(e) {
            return (e != undefined ? e : this.getRoomStatus()) == this.ROOM_BAN
        }
        ,
        o.prototype.isRoomPlayback = function(e) {
            return (e != undefined ? e : this.getRoomStatus()) == this.ROOM_PLAYBACK
        }
        ,
        o.prototype.isRoomPlaybackEnd = function(e) {
            return (e != undefined ? e : this.getRoomStatus()) == this.ROOM_PLAYBACK_END
        }
        ,
        o.prototype.isRoomCarousel = function(e) {
            return (e != undefined ? e : e != undefined ? e : this.getRoomStatus()) == this.ROOM_CAROUSEL
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.WAITING = "waiting",
            this.PLAYING = "playing",
            this.ENDED = "ended",
            this.FILLER_PLAYING = "filler",
            this.MOVIE_LIVING = "living",
            this.MOVIE_PLAYBACK = "playback",
            this.ROOM_STOP = 0,
            this.ROOM_LIVE = 1,
            this.ROOM_BAN = 2,
            this.ROOM_PLAYBACK = 3,
            this.ROOM_PLAYBACK_END = 4,
            this.ROOM_CAROUSEL = 5,
            this.SCREEN_NORMAL = "halfs",
            this.SCREEN_PAGEFULL = "web_full",
            this.SCREEN_FULL = "full",
            this._rpage = this.SCREEN_NORMAL,
            this._isQPgot = !1,
            this._programStatus = null,
            this._playStatus = null,
            this._roomStatus = this.ROOM_STOP
        }
        t["default"] = new n
    },
    "98d7901d460baa73790b": function(e, t, i) {
        "use strict";
        var l = i("a1ce88ca7866e21ff551")
          , c = i("0be1f102f2a6be1b2fbc")
          , u = i("e5297d8377c471ec02f1")
          , n = function n(s) {
            return function(e, t, i) {
                var n, o = l(e), r = c(o.length), a = u(i, r);
                if (s && t != t) {
                    for (; a < r; )
                        if ((n = o[a++]) != n)
                            return !0
                } else
                    for (; a < r; a++)
                        if ((s || a in o) && o[a] === t)
                            return s || a || 0;
                return !s && -1
            }
        };
        e.exports = {
            includes: n(!0),
            indexOf: n(!1)
        }
    },
    "9a237600586fc7321dc1": function(e, t, i) {
        var n = i("86adf03dddb7c33a3de2");
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M5b636210-compere {\n  position: absolute;\n  top: 20px;\n  width: 100%;\n  height: 70px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  z-index: 8;\n}\n.M5b636210-compere > .cp-item {\n  position: absolute;\n  width: 270px;\n  height: 70px;\n}\n.M5b636210-compere > .cp-item > .cp-icon {\n  width: 70px;\n  height: 70px;\n  background: url(" + n(i("466d284dd3ebdb570244")) + ") no-repeat;\n  position: absolute;\n}\n.M5b636210-compere > .cp-item > .cp-tf {\n  font-family: Microsoft YaHei;\n  position: absolute;\n  top: 23px;\n  font-size: 18px;\n  color: #00cc36;\n  letter-spacing: -0.48px;\n  white-space: nowrap;\n}\n.M5b636210-compere > .cp-item > .cp-face {\n  position: absolute;\n  top: 13px;\n  width: 42px;\n  height: 42px;\n  -webkit-transform: scale(0.86);\n  -moz-transform: scale(0.86);\n}\n.M5b636210-compere > .cp-item > .cp-pic {\n  position: absolute;\n  top: 16px;\n  left: 32px;\n  width: 38px;\n  height: 38px;\n  border-radius: 38px;\n}\n.M5b636210-compere > .cp-item > .cp-bg {\n  position: absolute;\n  display: inline-block;\n  top: 14px;\n  left: 30px;\n  width: 540px;\n  height: 38px;\n  background: rgba(0, 0, 0, 0.85);\n  border: 2px solid #00cc36;\n  border-radius: 100px;\n}\n", ""])
    },
    "9addf98a9c578f2fe350": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = w(i("23c9104dcc3910d185c2"))
          , l = w(i("790825d0dabf4060a0d9"))
          , r = w(i("87802259cac67aad4a23"))
          , a = (w(i("47972355b1e0b2f4ef72")),
        w(i("d49b774756187ce732a3")))
          , s = w(i("53a0608beb6b6c98b6b4"))
          , c = w(i("458af3e271aa64a9b91f"))
          , u = w(i("ced5a6888eb062195e56"))
          , f = w(i("46a6014a9c7af6bb18f4"))
          , d = w(i("ae19a1d24e6ded12b0b9"))
          , p = w(i("4a077be629d240592d7a"))
          , h = w(i("162f473717848ae5cb34"))
          , _ = w(i("e2263676467d036c3349"))
          , g = w(i("96598f2d6ae9c8676ba4"))
          , o = w(i("694316029b4ae3dbacea"))
          , y = i("d9c402fc6c0e0429b2aa")
          , b = w(i("48845084357dc7708026"))
          , m = w(i("c779f0f9ff7f0eb554cb"))
          , v = w(i("1787093d7720fc0d37ae"))
          , A = w(i("fb885b8dee52c75a3d84"))
          , E = w(i("6dfc805bb169defe8df1"))
          , T = i("bef7a691bb63f7f92f11");
        function w(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var S, C = (function R(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(P, S = n["default"]),
        P.prototype.getConfig = function() {
            return this._config
        }
        ,
        P.prototype.getProgramInfo = function() {
            return this._programInfo
        }
        ,
        P.prototype.getView = function() {
            return this._view
        }
        ,
        P.prototype.getPlugin = function(e) {
            return this._pluginManager && this._pluginManager.getPlugin(e)
        }
        ,
        P.prototype.getServerTime = function() {
            var e = this.getProgramInfo();
            return e && e.timestamp && e.serverStartTime ? e.timestamp + Math.floor((new Date).getTime() / 1e3) - e.serverStartTime : Math.floor((new Date).getTime() / 1e3)
        }
        ,
        P.prototype.getVideoTime = function() {
            var e = this.getPlugin(m["default"].ENGINE);
            return e ? e.getVideoTime() : 0
        }
        ,
        P.prototype.getPreloadTime = function() {
            var e = this.getPlugin(m["default"].ENGINE)
              , t = -1
              , i = 0;
            return e && (t = e.getPreloadTime(),
            (_["default"].isPPC() || _["default"].isPGC()) && g["default"].isProgramPlaying() && g["default"].isLivePlaying() && (i = 110),
            -1 == t && (t = this.getServerTime() - i)),
            t
        }
        ,
        P.prototype.getDuration = function() {
            var e = this.getProgramInfo();
            return e ? e.endTime - e.beginTime : -1
        }
        ,
        P.prototype.getBeginTime = function() {
            var e = this.getProgramInfo();
            return e ? e.beginTime : -1
        }
        ,
        P.prototype.getEndTime = function() {
            var e = this.getProgramInfo();
            return e ? e.endTime : -1
        }
        ,
        P.prototype.isPaused = function() {
            var e = this.getPlugin(m["default"].ENGINE);
            return !!e && e.isPaused()
        }
        ,
        P.prototype.isPlaying = function() {
            return o["default"].isPlaying()
        }
        ,
        P.prototype.startMovie = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : 0
              , t = this.getConfig()
              , i = t.getEntryConfig("tvid")
              , n = t.getEntryConfig("roomid")
              , o = t.getEntryConfig("channelId")
              , r = t.getEntryConfig("hcdnlive")
              , a = void 0;
            if (0 != e && (i = e),
            _["default"].isEPG() ? a = {
                hcdnlive: r
            } : _["default"].isPGC() && n ? (a = {
                roomId: n
            },
            g["default"].getQPgot() && (a.tvid = i)) : _["default"].isPPC() && i && (a = {
                tvid: i,
                channelId: o
            }),
            a)
                this.updateMovieInfo(a),
                this.emit(l["default"].NOTIFY_LIVE_STATUS, {
                    type: l["default"].NOTIFY_LIVE_START
                });
            else {
                var s = "invalid playerType " + _["default"].getType() + " with params: tvid=" + i + ", channelId=" + o + ", roomid=" + n + ", hcdnlive=" + r;
                d["default"].warn("LivePlayerCore", s),
                this.notifyError({
                    code: p["default"].PROGRAM_NOT_EXIST,
                    message: s
                })
            }
        }
        ,
        P.prototype.refreshMovie = function() {
            var e = this.getProgramInfo();
            if (e) {
                c["default"].refresh.refreshing = !0,
                c["default"].refresh.currentTime = this.getVideoTime();
                var t = {
                    tvid: e.tvid,
                    channelId: e.channelId,
                    roomId: e.roomId,
                    hcdnlive: e.hcdnlive
                };
                if (t.tvid != undefined && 0 < t.tvid ? g["default"].setQPgot(!0) : g["default"].setQPgot(!1),
                !c["default"].refresh.refreshing && e && (t.tvid == e.tvid && t.channelId == e.channelId || t.roomId == e.roomId))
                    return;
                this.getPlugin(m["default"].ENGINE).stopPlay(),
                this.updateMovieInfo(t),
                c["default"].refresh.refreshing = !1,
                this.emitAsync(l["default"].NOTIFY_LIVE_STATUS, {
                    type: l["default"].NOTIFY_LIVE_START
                })
            }
        }
        ,
        P.prototype.loadMovie = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : {};
            S.prototype.updateConfig.call(this, e, t);
            var i = this.getProgramInfo();
            i && (_["default"].isPPC() && e.tvid == i.tvid || _["default"].isPGC() && e.roomId == i.roomId || _["default"].isEPG() && e.hcdnlive == i.hcdnlive) || (S.prototype.stopMovie.call(this),
            this.updateMovieInfo(e),
            this.emitAsync(l["default"].NOTIFY_LIVE_STATUS, {
                type: l["default"].NOTIFY_LIVE_START
            }))
        }
        ,
        P.prototype.updateMovieInfo = function(i) {
            var n = this;
            if (b["default"].setPhase(b["default"].VRS_START),
            d["default"].info("LivePlayerCore", "update movie info: " + JSON.stringify(i)),
            this._programInfo) {
                this._programInfo.tvid && i.tvid && this._programInfo.tvid != i.tvid && (c["default"].pingback.firstPlayBase = !0,
                c["default"].pingback.movieFirstPlay = !0);
                try {
                    this.emit(l["default"].MOVIE_RESET, i)
                } catch (r) {
                    console.log("MOVIE_RESET", r)
                }
            }
            if (this._programInfo = new s["default"](i,this),
            _["default"].isEPG()) {
                var e = (new Date).getTime()
                  , t = this.getConfig().getEntryConfig("beginTime")
                  , o = this.getConfig().getEntryConfig("endTime");
                return this._programInfo.beginTime = t || Math.floor((e - 72e5) / 1e3),
                this._programInfo.endTime = o || Math.floor((e + 72e5) / 1e3),
                b["default"].setPhase(b["default"].CHARGE_READY),
                this.emitAsync(l["default"].CHARGE_CHECK_DONE, {
                    error: !1
                })
            }
            this.emit(l["default"].VRS_Start, i),
            clearTimeout(this.__vrsRetryTid),
            new a["default"]({
                qpId: i.tvid,
                channelId: i.channelId,
                roomId: i.roomId,
                complete: function(e) {
                    if (e.error)
                        n.__vrsRetryCnt == undefined && (n.__vrsRetryCnt = 0),
                        n.__vrsRetryCnt++,
                        3 < n.__vrsRetryCnt ? (E["default"].add({
                            content: {
                                step: E["default"].STEPS.VRS,
                                result: 0,
                                code: e.realCode || "",
                                message: e.messgage || "",
                                data: {
                                    request: T.apiStat.getStat(T.apiType.vrs).requesturl(),
                                    response: T.apiStat.getStat(T.apiType.vrs).response()
                                }
                            },
                            stage: E["default"].STAGE.PROCESS
                        }),
                        n.__vrsfirstreq = !1,
                        n.checkProgramStatus(),
                        n.notifyError(e),
                        n.notifyHideTips("vrsError"),
                        (0,
                        y.AIReporter)(n)) : (n.checkProgramStatus(),
                        g["default"].isProgramWaiting() && e.code != p["default"].VRS_DEFAULT_ERROR ? (g["default"].isProgramWaiting() || g["default"].isProgramEnded() || E["default"].add({
                            content: {
                                step: E["default"].STEPS.VRS,
                                result: 0,
                                code: "A00110",
                                message: e.message || "",
                                data: {
                                    request: T.apiStat.getStat(T.apiType.vrs).requesturl(),
                                    response: T.apiStat.getStat(T.apiType.vrs).response()
                                }
                            },
                            stage: E["default"].STAGE.PROCESS
                        }),
                        n.__checkIntervalTime = 0,
                        n.__vrsRetryTid = setInterval(function() {
                            n.__checkIntervalTime++,
                            n.notifyError(e),
                            n.notifyHideTips("vrsError"),
                            3 < n.__checkIntervalTime && clearInterval(n.__vrsRetryTid)
                        }, _["default"].isPGC() ? 6e3 : 1e3)) : n.__vrsRetryTid = setTimeout(function() {
                            n.updateMovieInfo(i)
                        }, _["default"].isPGC() ? 6e3 : 2e3));
                    else {
                        var t = n._programInfo.parse(e.data.data);
                        t.error ? (E["default"].add({
                            content: {
                                step: E["default"].STEPS.VRS,
                                result: 0,
                                code: "parseErr",
                                message: "vrs parse fail",
                                data: {
                                    request: T.apiStat.getStat(T.apiType.vrs).requesturl(),
                                    response: T.apiStat.getStat(T.apiType.vrs).response()
                                }
                            },
                            stage: E["default"].STAGE.PROCESS
                        }),
                        d["default"].info("LivePLayerCore", "vrs解析出错"),
                        n.notifyHideTips("vrsError"),
                        n.checkProgramStatus(),
                        n.notifyError(t),
                        (0,
                        y.AIReporter)(n)) : (E["default"].add({
                            content: {
                                step: E["default"].STEPS.VRS,
                                result: 1,
                                data: {
                                    request: T.apiStat.getStat(T.apiType.vrs).requesturl(),
                                    response: T.apiStat.getStat(T.apiType.vrs).response(),
                                    curdef: n._programInfo.definition && n._programInfo.definition.currentDefinition
                                }
                            },
                            stage: E["default"].STAGE.PROCESS
                        }),
                        b["default"].setPhase(b["default"].VRS_READY),
                        d["default"].info("LivePLayerCore", "vrs解析成功"),
                        n.emit(l["default"].VRS_Ready, i),
                        n._movieChargeCheck())
                    }
                }
            },this)
        }
        ,
        P.prototype.checkProgramStatus = function() {
            var e = void 0;
            window.QL && QL.hasOwnProperty("programInfo") ? e = QL.programInfo : ((e = {}).stopPlayTime = window.QYP.stopPlayTime,
            e.startPlayTime = window.QYP.startPlayTime);
            var t = (new Date).getTime();
            if (e.hasOwnProperty("stopPlayTime")) {
                var i = e.stopPlayTime;
                e.hasOwnProperty("startFillerTime") ? t < e.startFillerTime ? g["default"].setProgramStatus("waiting") : i < t && g["default"].setProgramStatus("ended") : e.hasOwnProperty("startPlayTime") && (t < e.startPlayTime ? g["default"].setProgramStatus("waiting") : i < t && g["default"].setProgramStatus("ended"))
            }
        }
        ,
        P.prototype.switchDefinition = function(e) {
            var t = this
              , i = this.getProgramInfo()
              , n = this.isPaused()
              , o = this.getVideoTime();
            if (c["default"].refresh.currentTime = o,
            i) {
                if (i.getCurrentVD() == e)
                    return;
                i.setCurrentVD(e),
                this._movieChargeCheck(function() {
                    var e = t.getPlugin(m["default"].ENGINE);
                    e && e.startPlay()
                })
            }
            this.emitAsync(l["default"].VIDEO_STATUS, {
                type: l["default"].VIDEO_SEEKING,
                data: {
                    bid: e,
                    paused: n,
                    currentTime: o
                }
            })
        }
        ,
        P.prototype._movieChargeCheck = function(t) {
            var i = this;
            b["default"].setPhase(b["default"].CHARGE_START);
            var e = this.getProgramInfo();
            d["default"].info("LivePlayerCore", "start charge check: " + e.charge),
            e.charge == l["default"].PROGRAM_CHARGE ? e.streams && 0 < e.streams.length ? this.chargeCheck(e.tvid, e.definition.currentDefinition, function(e) {
                b["default"].setPhase(b["default"].CHARGE_READY),
                d["default"].info("LivePLayerCore", "付费码流鉴权成功"),
                t ? t() : i.emitAsync(l["default"].CHARGE_CHECK_DONE, {
                    error: !1
                })
            }, function(e) {
                d["default"].info("LivePLayerCore", "付费码流鉴权失败," + e),
                i.emitAsync(l["default"].CHARGE_FAIL),
                "Q00501" == e ? i.notifyError({
                    error: !0,
                    code: p["default"].USER_CHECK_VIP_ERROR,
                    message: "会员身份多设备登陆，已被取消"
                }) : (i.emitAsync(l["default"].RECHARGE),
                i.notifyError({
                    error: !0,
                    code: p["default"].CHARGE_FAILd,
                    message: "error.vrs.A00011"
                }))
            }) : this.userChargeCheck(e.tvid, A["default"].get("P00001"), function(e) {
                d["default"].info("LivePLayerCore", "用户鉴权成功"),
                i.checkProgramStatus(),
                i.notifyError({
                    error: !0,
                    code: p["default"].ENGINE_NO_AVAILABLE_STREAM,
                    message: "no streams mounted"
                }),
                (0,
                y.AIReporter)(i)
            }, function(e) {
                d["default"].info("LivePLayerCore", "用户鉴权失败," + e),
                i.emitAsync(l["default"].RECHARGE),
                i.notifyError({
                    error: !0,
                    code: p["default"].CHARGE_FAILd,
                    message: "error.vrs.A00011"
                })
            }) : e.streams && 0 < e.streams.length ? (b["default"].setPhase(b["default"].CHARGE_READY),
            d["default"].info("LivePLayerCore", "码流鉴权成功"),
            t ? t() : this.emitAsync(l["default"].CHARGE_CHECK_DONE, {
                error: !1
            })) : (d["default"].info("LivePLayerCore", "没有免费的码流"),
            this.checkProgramStatus(),
            this.emitAsync(l["default"].CHARGE_CHECK_DONE, {
                error: !0,
                code: p["default"].VRS_DEFAULT_ERROR,
                message: "free program has no streams"
            }))
        }
        ,
        P.prototype.chargeCheckRequest = function(e, t, i, n) {
            (new r["default"]).request({
                tvid: e,
                definition: t
            }, i, n)
        }
        ,
        P.prototype.chargeCheck = function(e, t, o, r) {
            var a = this;
            this.chargeCheckRequest(e, t, function(e) {
                var t = e.code;
                if ("A00000" != t)
                    r.call(a, t);
                else if ((h["default"].os.ios || h["default"].os.android) && "" == a.getPlugin(m["default"].USER).getUid() && r.call(a, "charge error"),
                e.data && e.data.t) {
                    var i = a.getProgramInfo();
                    i.definition.currentDefinition.remark.urlkey = "&t=" + e.data.t + "&QY00001=" + e.data.u;
                    var n = e.previewType;
                    i.isTryWatch = !0,
                    i.previewType = n,
                    i.previewTime = e.previewTime,
                    i.tryWatchType = e.data.tip_type,
                    "1" == n ? (i.previewTime = 60 * i.previewTime,
                    a.emitAsync(v["default"].PPC_TRYWATCH, {
                        previewType: n,
                        previewTime: i.previewTime,
                        tryWatchType: i.tryWatchType
                    })) : "3" == n ? (i.previewTime = e.data.rest_time < 0 ? 0 : e.data.rest_time,
                    a.emitAsync(v["default"].PPC_TRYWATCH, {
                        previewType: n,
                        previewTime: i.previewTime,
                        tryWatchType: i.tryWatchType
                    })) : o.call(a)
                }
            }, function(e) {
                r.call(a, e)
            })
        }
        ,
        P.prototype.userChargeCheck = function(e, t, i, n) {
            var o = this;
            (new r["default"]).requestUser({
                tvid: e,
                P001: t
            }, function(e) {
                "A00000" == e.code ? i.call(o) : n.call(o, e.code)
            }, function(e) {
                n.call(o, e)
            })
        }
        ,
        P.prototype.getCurrentVD = function() {
            var e = this.getProgramInfo();
            return e ? e.getCurrentVD() : 2
        }
        ,
        P.prototype.getPlayState = function() {
            return o["default"].getStatus()
        }
        ,
        P.prototype.getLiveStatus = function() {
            return g["default"].getRoomStatus()
        }
        ,
        P.prototype.mount = function(e, t) {
            this.hasOwnProperty("$" + e) && (this["$" + e] = t)
        }
        ,
        P.prototype.isZTProgram = function() {
            return !1
        }
        ,
        P.prototype.isSportProgram = function() {
            return 1 == this.getConfig().getEntryConfig("roomType")
        }
        ,
        P.prototype.notifyError = function(e) {
            this.emitAsync(l["default"].PLAYER_ERROR, e)
        }
        ,
        P.prototype.notifyHideTips = function(e) {
            this.emitAsync(l["default"].NOTIFY_CONTROL_HIDE_TIPS, e)
        }
        ,
        P.prototype.notifyFeedback = function(e) {
            this.emitAsync(l["default"].PLAYER_FEEDBACK, e)
        }
        ,
        P.prototype.destroy = function() {
            clearTimeout(this.__vrsRetryTid),
            u["default"].destroy(),
            S.prototype.destroy.call(this)
        }
        ,
        P);
        function P(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null;
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, P);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, S.call(this, e, t));
            return u["default"].init(i, f["default"].version),
            i
        }
        t["default"] = C
    },
    "9af93fe923dfe19afe8a": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("9f02978f1998980c265b"));
        i("802bbe3f6d252849b6f4");
        var o, r = (function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(a, o = n["default"]),
        a.prototype.show = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null
              , n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
            this._panel || this.__initPanel(),
            this._tfContent.innerHTML = e = e || "",
            this._btnReport.innerHTML = i = i || "",
            this._btnRefresh.innerHTML = n = n || "",
            this._btnReport.style.display = this._btnRefresh.style.display = "none",
            t.length,
            this._tfContent.style["margin-top"] = "-25px",
            0 < i.length && 0 < n.length ? (this._btnReport.style["margin-left"] = "-127px",
            this._btnRefresh.style["margin-left"] = "15px",
            this._btnReport.style.display = this._btnRefresh.style.display = "inline-block") : 0 < i.length ? (this._btnReport.style["margin-left"] = "-56px",
            this._btnReport.style.display = "inline-block") : 0 < n.length && (this._btnRefresh.style["margin-left"] = "-56px",
            this._btnRefresh.style.display = "inline-block"),
            this._panel.style.display = "block"
        }
        ,
        a.prototype.hide = function() {
            this._panel && (this._panel.style.display = "none")
        }
        ,
        a.prototype.destroy = function() {
            this._panel && (this._container.removeChild(this._panel),
            this._btnReport.addEventListener ? (this._btnReport.removeEventListener("click", this._handlers.clickReportHandler),
            this._btnRefresh.removeEventListener("click", this._handlers.clickRefreshHandler)) : (this._btnReport.detachEvent("onclick", this._handlers.clickReportHandler),
            this._btnRefresh.detachEvent("onclick", this._handlers.clickRefreshHandler)),
            this._panel = this._tfContent = this._btnReport = this._btnRefresh = undefined)
        }
        ,
        a.prototype.__initPanel = function() {
            this._panel = document.createElement("div"),
            this._panel.className = "M706C61796572-feedback",
            this._panel.style.display = "none",
            this._container.appendChild(this._panel),
            this._panel.appendChild(this._tfContent = this.__createChild("tf_content")),
            this._panel.appendChild(this._btnReport = this.__createChild("btn_report")),
            this._panel.appendChild(this._btnRefresh = this.__createChild("btn_refresh")),
            this._handlers = {
                clickReportHandler: this.__clickReportHandler.bind(this),
                clickRefreshHandler: this.__clickRefreshHandlerr.bind(this)
            },
            this._btnReport.addEventListener ? (this._btnReport.addEventListener("click", this._handlers.clickReportHandler),
            this._btnRefresh.addEventListener("click", this._handlers.clickRefreshHandler)) : (this._btnReport.attachEvent("onclick", this._handlers.clickReportHandler),
            this._btnRefresh.attachEvent("onclick", this._handlers.clickRefreshHandler))
        }
        ,
        a.prototype.__clickReportHandler = function() {
            this.emit(a.EVENT_CLICK_REPORT)
        }
        ,
        a.prototype.__clickRefreshHandlerr = function() {
            this.emit(a.EVENT_CLICK_REFRESH)
        }
        ,
        a.prototype.__createChild = function(e) {
            var t = document.createElement("div");
            return t.className = e,
            t
        }
        ,
        a);
        function a(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, o.call(this));
            return t._container = e,
            t._panel = undefined,
            t._tfContent = undefined,
            t._btnReport = undefined,
            t._btnRefresh = undefined,
            t._handlers = undefined,
            t
        }
        (t["default"] = r).EVENT_CLICK_REPORT = "EVENT_CLICK_REPORT",
        r.EVENT_CLICK_REFRESH = "EVENT_CLICK_REFRESH"
    },
    "9b079fedddfbc0447f43": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACKklEQVRYR+WYUU7bQBCGv0EKr+UGpSdoHhpeS09Ab9BwgpoT4JyA5ASEG9ATAK8JUukN6A3gNZGyaNbCduKNs7bXViT2LbGs/Tz/P7MzK+zZkj3jwR/I9I+Rp+e2P6AcyPSPoHcFMsxAzBSWo7bgtgMlMHcg/WJUzAvIGJmNQkesBOjkFjjbseEzrM6Rx/tQYCVAA43Cp5xUD0B//b/06S0sLkLI6AYyA934bw5mgswj1Ngcjt2RCyPjFqBvp3Bwl5NhhMzi9Lexz6fAZ4e/nsBc1JWxHpBSWNMfRsCl2z82G1XGlyr+qg/0vouVsTcF+e7ORmJkPvGFag6Ugp38BNRfjWQMBxRIxrBA3jJKhMxuXDK2A5SCDfTIGZfUrvNN07cLlMrYi0F+O0yf1Lfcah8oi5aeiRqtjWxcfMlX+O6AsmzUApurXasf+SL6gYHs+Yj2VqfrXupasqSvugRZM28CZTo2tbFpr1E5ctScP7AYdpP2yfl2XZTHRuUViJC5dguFFdbUSQeg9SZrVda2NBNYxmUdQDggYw/XK+DY8eH/YBX59EjNgXbKY2LkUbsAr1UfaLc8N7CMumnQkhb2uqk8FUxd2uSrT9QvG0uzp5o8/kA2OwtjkM5eOo1sqykqT+NRu+mg+B9WQ5/s8XI0lFw2JKbVqHx1y2NH6S31xnd738KYtgr2HNIe5lf2qtHs0eLWWJ5qHip4dh+uY+pHvvab/hdWtbeo9uIbk80cNJ25d8gAAAAASUVORK5CYII="
    },
    "9dc446da53b44c304edf": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var a = function a(e) {
                var t = ""
                  , i = ""
                  , n = ""
                  , o = ""
                  , r = e.match(/(\w+):\/\/([^\/:]+):?(\d*)((?:\/|$)[^?#]*)/);
                return r && (t = r[1],
                i = r[2],
                n = r[3],
                o = r[4]),
                {
                    protocol: t,
                    host: i,
                    port: n,
                    path: o
                }
            }
              , l = function l(e) {
                for (var t, i, n, o = e.substr(e.lastIndexOf("?") + 1).split("&"), r = o.length, a = {}, s = 0; s < r; s++)
                    o[s] && (t = (n = o[s].split("=")).shift(),
                    i = n.join("="),
                    void 0 === a[t] && (a[t] = i));
                return a
            }
              , r = function r(e, t) {
                1 === arguments.length && (t = e,
                e = window.location.href);
                var i = String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])","g"), "\\$1")
                  , n = new RegExp("(^|&|\\?|#)" + i + "=([^&#]*)(&|$|#)","")
                  , o = e.match(n);
                return o ? o[2] : ""
            }
              , n = function n(e) {
                var t = a(e);
                return (t && t.path || "").replace(/^.*[\\\/]/, "").split(".")[0]
            };
            i.exports = {
                parse: a,
                query: r,
                query2Json: l,
                filename: n
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "9e971ba7f0c50a937e02": function(e, t, i) {
        "use strict";
        i("c97e2da1ae7f583527cb");
        var n = i("e0b8b8f5220954d02f3b");
        e.exports = n("Function", "bind")
    },
    "9f02978f1998980c265b": function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        function o() {
            this._events = this._events || {},
            this._maxListeners = this._maxListeners || undefined
        }
        function l(e) {
            return "function" == typeof e
        }
        function c(e) {
            return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e
        }
        function u(e) {
            return void 0 === e
        }
        ((e.exports = o).EventEmitter = o).prototype._events = undefined,
        o.prototype._maxListeners = undefined,
        o.defaultMaxListeners = 10,
        o.prototype.setMaxListeners = function(e) {
            if (!function t(e) {
                return "number" == typeof e
            }(e) || e < 0 || isNaN(e))
                throw TypeError("n must be a positive number");
            return this._maxListeners = e,
            this
        }
        ,
        o.prototype.emit = function(e) {
            var t, i, n, o, r, a;
            if (this._events || (this._events = {}),
            "error" === e && (!this._events.error || c(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1])instanceof Error)
                    throw t;
                var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw s.context = t,
                s
            }
            if (u(i = this._events[e]))
                return !1;
            if (l(i))
                switch (arguments.length) {
                case 1:
                    i.call(this);
                    break;
                case 2:
                    i.call(this, arguments[1]);
                    break;
                case 3:
                    i.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    o = Array.prototype.slice.call(arguments, 1),
                    i.apply(this, o)
                }
            else if (c(i))
                for (o = Array.prototype.slice.call(arguments, 1),
                n = (a = i.slice()).length,
                r = 0; r < n; r++)
                    a[r].apply(this, o);
            return !0
        }
        ,
        o.prototype.on = o.prototype.addListener = function(e, t) {
            var i;
            if (!l(t))
                throw TypeError("listener must be a function");
            return this._events || (this._events = {}),
            this._events.newListener && this.emit("newListener", e, l(t.listener) ? t.listener : t),
            this._events[e] ? c(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
            c(this._events[e]) && !this._events[e].warned && (i = u(this._maxListeners) ? o.defaultMaxListeners : this._maxListeners) && 0 < i && this._events[e].length > i && (this._events[e].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
            "function" == typeof console.trace && console.trace()),
            this
        }
        ,
        o.prototype.once = function(e, t) {
            if (!l(t))
                throw TypeError("listener must be a function");
            var i = !1;
            function n() {
                this.removeListener(e, n),
                i || (i = !0,
                t.apply(this, arguments))
            }
            return n.listener = t,
            this.on(e, n),
            this
        }
        ,
        o.prototype.removeListener = function(e, t) {
            var i, n, o, r;
            if (!l(t))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[e])
                return this;
            if (o = (i = this._events[e]).length,
            n = -1,
            i === t || l(i.listener) && i.listener === t)
                delete this._events[e],
                this._events.removeListener && this.emit("removeListener", e, t);
            else if (c(i)) {
                for (r = o; 0 < r--; )
                    if (i[r] === t || i[r].listener && i[r].listener === t) {
                        n = r;
                        break
                    }
                if (n < 0)
                    return this;
                1 === i.length ? (i.length = 0,
                delete this._events[e]) : i.splice(n, 1),
                this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }
        ,
        o.prototype.removeAllListeners = function(e) {
            var t, i;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                this;
            if (0 === arguments.length) {
                for (t in this._events)
                    "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"),
                this._events = {},
                this
            }
            if (l(i = this._events[e]))
                this.removeListener(e, i);
            else if (i)
                for (; i.length; )
                    this.removeListener(e, i[i.length - 1]);
            return delete this._events[e],
            this
        }
        ,
        o.prototype.listeners = function(e) {
            return this._events && this._events[e] ? l(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }
        ,
        o.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (l(t))
                    return 1;
                if (t)
                    return t.length
            }
            return 0
        }
        ,
        o.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    "a11efae8377a69acf931": function(e, t, i) {
        "use strict";
        var n = i("d280362e5865b5c09927")
          , o = i("e5c1d4201891556e0f25")
          , r = n.WeakMap;
        e.exports = "function" == typeof r && /native code/.test(o.call(r))
    },
    "a1a05d5b475829547daf": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMtJREFUSA3tVcENwjAMvFSMwRSooqwA7MFQ7AGsUFDFFMxBSGLn51Nomw+oeaSSLz77LpUDLKvggEv4c7fH258Bvy6c/xJ2LzTuhE1/a1JGVfLIGBpNnMBKWtLO24cokuD0fdj67IYomE5VzFQFxrmhu4QuDgZihNwV7f1oAKilIFhiL66AdGTT8GgtBbQCV2DeAfeaVRirgHrNCnAFv3IHYy1iTtD4UoBakwH9i8L8jiM2TcEMzf1GTugsio8DJDCXVvL1walD9u8sHyD4KtpNA6a+AAAAAElFTkSuQmCC"
    },
    "a1c8a05eb561659fd014": function(n, o, r) {
        "use strict";
        (function(j, z) {
            var e, t, i, K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            undefined,
            i = function() {
                function u(e) {
                    return "function" == typeof e
                }
                var n = Array.isArray ? Array.isArray : function D(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                  , i = 0
                  , o = void 0
                  , r = void 0
                  , a = function a(e, t) {
                    d[i] = e,
                    d[i + 1] = t,
                    2 === (i += 2) && (r ? r(p) : h())
                };
                var e = "undefined" != typeof window ? window : undefined
                  , t = e || {}
                  , s = t.MutationObserver || t.WebKitMutationObserver
                  , l = "undefined" == typeof self && void 0 !== j && "[object process]" === {}.toString.call(j)
                  , c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function f() {
                    var e = setTimeout;
                    return function() {
                        return e(p, 1)
                    }
                }
                var d = new Array(1e3);
                function p() {
                    for (var e = 0; e < i; e += 2) {
                        (0,
                        d[e])(d[e + 1]),
                        d[e] = undefined,
                        d[e + 1] = undefined
                    }
                    i = 0
                }
                var h = void 0;
                function _(e, t) {
                    var i = this
                      , n = new this.constructor(b);
                    n[y] === undefined && O(n);
                    var o = i._state;
                    if (o) {
                        var r = arguments[o - 1];
                        a(function() {
                            return I(o, n, r, i._result)
                        })
                    } else
                        P(i, n, e, t);
                    return n
                }
                function g(e) {
                    if (e && "object" === (void 0 === e ? "undefined" : K(e)) && e.constructor === this)
                        return e;
                    var t = new this(b);
                    return T(t, e),
                    t
                }
                h = l ? function V() {
                    return function() {
                        return j.nextTick(p)
                    }
                }() : s ? function F() {
                    var e = 0
                      , t = new s(p)
                      , i = document.createTextNode("");
                    return t.observe(i, {
                        characterData: !0
                    }),
                    function() {
                        i.data = e = ++e % 2
                    }
                }() : c ? function B() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = p,
                    function() {
                        return e.port2.postMessage(0)
                    }
                }() : e === undefined ? function U() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return o = e.runOnLoop || e.runOnContext,
                        function t() {
                            return void 0 !== o ? function() {
                                o(p)
                            }
                            : f()
                        }()
                    } catch (i) {
                        return f()
                    }
                }() : f();
                var y = Math.random().toString(36).substring(2);
                function b() {}
                var m = void 0
                  , v = 1
                  , A = 2;
                function E(e, t, i) {
                    t.constructor === e.constructor && i === _ && t.constructor.resolve === g ? function n(t, e) {
                        e._state === v ? S(t, e._result) : e._state === A ? C(t, e._result) : P(e, undefined, function(e) {
                            return T(t, e)
                        }, function(e) {
                            return C(t, e)
                        })
                    }(e, t) : i === undefined ? S(e, t) : u(i) ? function r(e, n, o) {
                        a(function(t) {
                            var i = !1
                              , e = function r(e, t, i, n) {
                                try {
                                    e.call(t, i, n)
                                } catch (o) {
                                    return o
                                }
                            }(o, n, function(e) {
                                i || (i = !0,
                                n !== e ? T(t, e) : S(t, e))
                            }, function(e) {
                                i || (i = !0,
                                C(t, e))
                            }, t._label);
                            !i && e && (i = !0,
                            C(t, e))
                        }, e)
                    }(e, t, i) : S(e, t)
                }
                function T(e, t) {
                    if (e === t)
                        C(e, function n() {
                            return new TypeError("You cannot resolve a promise with itself")
                        }());
                    else if (function o(e) {
                        var t = void 0 === e ? "undefined" : K(e);
                        return null !== e && ("object" === t || "function" === t)
                    }(t)) {
                        var i = void 0;
                        try {
                            i = t.then
                        } catch (r) {
                            return void C(e, r)
                        }
                        E(e, t, i)
                    } else
                        S(e, t)
                }
                function w(e) {
                    e._onerror && e._onerror(e._result),
                    R(e)
                }
                function S(e, t) {
                    e._state === m && (e._result = t,
                    e._state = v,
                    0 !== e._subscribers.length && a(R, e))
                }
                function C(e, t) {
                    e._state === m && (e._state = A,
                    e._result = t,
                    a(w, e))
                }
                function P(e, t, i, n) {
                    var o = e._subscribers
                      , r = o.length;
                    e._onerror = null,
                    o[r] = t,
                    o[r + v] = i,
                    o[r + A] = n,
                    0 === r && e._state && a(R, e)
                }
                function R(e) {
                    var t = e._subscribers
                      , i = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3)
                            n = t[a],
                            o = t[a + i],
                            n ? I(i, n, o, r) : o(r);
                        e._subscribers.length = 0
                    }
                }
                function I(e, t, i, n) {
                    var o = u(i)
                      , r = void 0
                      , a = void 0
                      , s = !0;
                    if (o) {
                        try {
                            r = i(n)
                        } catch (l) {
                            s = !1,
                            a = l
                        }
                        if (t === r)
                            return void C(t, function c() {
                                return new TypeError("A promises callback cannot return that same promise.")
                            }())
                    } else
                        r = n;
                    t._state !== m || (o && s ? T(t, r) : !1 === s ? C(t, a) : e === v ? S(t, r) : e === A && C(t, r))
                }
                var L = 0;
                function O(e) {
                    e[y] = L++,
                    e._state = undefined,
                    e._result = undefined,
                    e._subscribers = []
                }
                var k = (N.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === m && t < e.length; t++)
                        this._eachEntry(e[t], t)
                }
                ,
                N.prototype._eachEntry = function(t, e) {
                    var i = this._instanceConstructor
                      , n = i.resolve;
                    if (n === g) {
                        var o = void 0
                          , r = void 0
                          , a = !1;
                        try {
                            o = t.then
                        } catch (l) {
                            a = !0,
                            r = l
                        }
                        if (o === _ && t._state !== m)
                            this._settledAt(t._state, e, t._result);
                        else if ("function" != typeof o)
                            this._remaining--,
                            this._result[e] = t;
                        else if (i === x) {
                            var s = new i(b);
                            a ? C(s, r) : E(s, t, o),
                            this._willSettleAt(s, e)
                        } else
                            this._willSettleAt(new i(function(e) {
                                return e(t)
                            }
                            ), e)
                    } else
                        this._willSettleAt(n(t), e)
                }
                ,
                N.prototype._settledAt = function(e, t, i) {
                    var n = this.promise;
                    n._state === m && (this._remaining--,
                    e === A ? C(n, i) : this._result[t] = i),
                    0 === this._remaining && S(n, this._result)
                }
                ,
                N.prototype._willSettleAt = function(e, t) {
                    var i = this;
                    P(e, undefined, function(e) {
                        return i._settledAt(v, t, e)
                    }, function(e) {
                        return i._settledAt(A, t, e)
                    })
                }
                ,
                N);
                function N(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(b),
                    this.promise[y] || O(this.promise),
                    n(t) ? (this.length = t.length,
                    this._remaining = t.length,
                    this._result = new Array(this.length),
                    0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(t),
                    0 === this._remaining && S(this.promise, this._result))) : C(this.promise, function i() {
                        return new Error("Array Methods must be provided an Array")
                    }())
                }
                var x = (M.prototype["catch"] = function(e) {
                    return this.then(null, e)
                }
                ,
                M.prototype["finally"] = function(t) {
                    var i = this.constructor;
                    return u(t) ? this.then(function(e) {
                        return i.resolve(t()).then(function() {
                            return e
                        })
                    }, function(e) {
                        return i.resolve(t()).then(function() {
                            throw e
                        })
                    }) : this.then(t, t)
                }
                ,
                M);
                function M(e) {
                    this[y] = function t() {
                        return L++
                    }(),
                    this._result = this._state = undefined,
                    this._subscribers = [],
                    b !== e && ("function" != typeof e && function i() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(),
                    this instanceof M ? function n(t, e) {
                        try {
                            e(function(e) {
                                T(t, e)
                            }, function(e) {
                                C(t, e)
                            })
                        } catch (i) {
                            C(t, i)
                        }
                    }(this, e) : function o() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return x.prototype.then = _,
                x.all = function Y(e) {
                    return new k(this,e).promise
                }
                ,
                x.race = function G(o) {
                    var r = this;
                    return n(o) ? new r(function(e, t) {
                        for (var i = o.length, n = 0; n < i; n++)
                            r.resolve(o[n]).then(e, t)
                    }
                    ) : new r(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    }
                    )
                }
                ,
                x.resolve = g,
                x.reject = function H(e) {
                    var t = new this(b);
                    return C(t, e),
                    t
                }
                ,
                x._setScheduler = function Q(e) {
                    r = e
                }
                ,
                x._setAsap = function q(e) {
                    a = e
                }
                ,
                x._asap = a,
                x.polyfill = function W() {
                    var e = void 0;
                    if (void 0 !== z)
                        e = z;
                    else if ("undefined" != typeof self)
                        e = self;
                    else
                        try {
                            e = Function("return this")()
                        } catch (n) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var t = e.Promise;
                    if (t) {
                        var i = null;
                        try {
                            i = Object.prototype.toString.call(t.resolve())
                        } catch (n) {}
                        if ("[object Promise]" === i && !t.cast)
                            return
                    }
                    e.Promise = x
                }
                ,
                x.Promise = x
            }
            ,
            "object" === K(o) && void 0 !== n ? n.exports = i() : (t = "function" == typeof (e = i) ? e.call(o, r, o, n) : e) === undefined || (n.exports = t)
        }
        ).call(this, r("26d59f808dff3e83c741"), r("698d75b157f24ae829cc"))
    },
    "a1ce88ca7866e21ff551": function(e, t, i) {
        "use strict";
        var n = i("3aea0cd6eefeca140496")
          , o = i("9401241c289bc4a99b79");
        e.exports = function(e) {
            return n(o(e))
        }
    },
    "a374d1afb460e7ecf645": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        t.safeStringify = function o(e, t) {
            if (e && t && "object" == (void 0 === t ? "undefined" : n(t)))
                return t + "";
            return t
        }
    },
    "a56a6a7c76ca6dd06d55": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADTUlEQVRoQ+1ZW3ISQRQ9N1Xm17gCcQWSKuE7WYFkBYkrMFmBsAJhBcQVqCtI8gupkqxA2EH8HapyrdstI93cmW56JiJVM7/DdPc55z7ObQh7/tCenx8NgF0r2CjQKFCRgfpDiNst4MUnAC0Ac2B5BZo9Vjxn4ef1AuBuD+AxQEd/d+QZsDx9LhD1AOD2EXA4BtAroOoMNPn2HCpUB8DvTgD66rK+cdQBaNKPBsCdNoBxjHLpAAzrEut0GXGweAD28DeWkHD4pQEwmwjrJlFjnjgAzuFXy5aD2B4AdyUUpMooD/8CuA8cfPZehgFYRYV5UcB7+AtoeqHtGA8gj0ttA7P0A8AXoOkM3OXtAZQRI6s9nYLub30QLgDLgrDXCySlv47LcAoAWZE71wCdF8TkHMiO/XLsAehKqXsfE9R/frMAuGdYX39SAQRBPF2B7ofrW/kAfOlLsPAIWPbVBhULQBT3u7TtKULIayUXZqDpcUUAJlF7WjzmC8cAsMXgHOCzTQWltxzc6Oxlb0Cz+epdQAG+A8hLnGwYtAUhANy5AEg6twT+I7CUQ7l+ibtySEUFN4xCIRQuf2o1LalCzuFXHytlkjtDgD4qy38HTXLLsgMAReUye+WoYCyKFkZ8B5qeRIYQ6lfARI0Gwqvzttv/CCXyv1fAAJCZ4fBnsNlt5pL9hCb5uRsAaqkLVqEqIbRrBdT4l96ybO1HElcuo27JDTWyW6WRjeptZFgAWTu+kfEH0PQ6towqIS6dU9r/prVNsBJyCWAtuGMGa7MSZb6Uh8By8ExmTuq/Mu25TcxUVM8Gb2un57oZSxhocldRNhO44aMAMFb2GmC5aXhZxr/3rg+aDLYKIdVDlQ40C9BkQ5UtR0qS5HmrA5PhG5JgOxwpYygvH+rFEvcBcqYmIMJT2UFGrLtCEI9AU/X6Jl4Bp0oYoyX5ovh1lYU4U2gvDqR0r4fvA5CdFJXuNADWkMkFgLCteXYfRRwAs64DovTwm0kcE0L+b6xvl9woUyMeQA5C8q2Yeb2RpQDI1ZDqVXij8R9f7jq5Ya7X5W4nOoZTOatXAQeEyQ2pQqs/OC6D3qkCivQkrrBpnZ82AOpkM2WtRoEU1ur8plGgTjZT1voNs8TXQNg7BywAAAAASUVORK5CYII="
    },
    "a5bc7a5f0d8c74c1ea2b": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.isProp = function(e) {
            return e == this.PROP
        }
        ,
        o.prototype.isSystem = function(e) {
            return e == this.SYSTEM
        }
        ,
        o.prototype.isStopLive = function(e) {
            return e == this.STOPLIVE
        }
        ,
        o.prototype.isStartLive = function(e) {
            return e == this.STARTLIVE
        }
        ,
        o.prototype.isPauseLive = function(e) {
            return e == this.PAUSELIVE
        }
        ,
        o.prototype.isResumeLive = function(e) {
            return e == this.RESUMELIVE
        }
        ,
        o.prototype.isRedPacket = function(e) {
            return this.REDPACKET
        }
        ,
        o.prototype.isBarrage = function(e) {
            return e == this.BARRAGE
        }
        ,
        o.prototype.isBarrageOff = function(e) {
            return e == this.BARRAGE_OFF
        }
        ,
        o.prototype.isFillerStart = function(e) {
            return e == this.FILLERSTART
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.PROP = "1",
            this.SYSTEM = "2",
            this.STOPLIVE = "6",
            this.STARTLIVE = "8",
            this.PAUSELIVE = "12",
            this.RESUMELIVE = "13",
            this.REDPACKET = "22",
            this.BARRAGE_OFF = "40",
            this.BARRAGE = "51",
            this.FILLERSTART = "64"
        }
        t["default"] = new n
    },
    "a611e4d318d3f3b39842": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALFJREFUSA1jYBgFBEKAEST/4MEDz79//84CMmUIqCdW+gkzM3OagoLCdiaQDiobDjJSBmomAwuIBwRglysrK4N9BBEin7x79+5/mJlgH5BvFGGdoxYQDKPRIBoBQQTLyRheBebGrUBBLwwJ7ALbgKWANzYpaqUiUNGAFeD0AS4XYTUFjyC1fIDTCpgPngBVyEBLQZyKSZQAmckA9gGocgCywQIkGoJLObjCwSU5Ko4SAgDjFyORP7464gAAAABJRU5ErkJggg=="
    },
    "a617b30e776d20e6554a": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            "error": {
                "report": "报告错误",
                "refresh": "刷新试试",
                "pluginInitFail": "插件初始化失败",
                "pluginInitFailFlash": "加载异常，请确认浏览器是否允许加载Flash插件",
                "pluginInitFailPCA": "加载异常，请更新客户端版本后重新打开节目",
                "pluginError": "插件错误",
                "ProgramNotExist": "节目信息不存在",
                "vrs": {
                    "default": "播放出了点问题，点击刷新看看吧",
                    "qpidWrong": "该节目无效，请确认输入网址是否正确",
                    "A00001": "请求参数无效",
                    "A00003": "内部请求异常",
                    "A00004": "播放出了点问题，点击刷新看看吧【A00004】",
                    "A00005": "请求数据不可用",
                    "A00011": "您还没有获得观看当前付费节目的权限",
                    "A00013": "很抱歉，本节目因为版权原因在您所在区域下线",
                    "A00020": "时间戳超时",
                    "A00110": "暂时无法观看，去看看其他节目吧【A00110】",
                    "A00111": "地域受限，去看看其他节目吧【A00111】",
                    "A00119": "您还没有获得观看当前付费节目的权限（网球会员）",
                    "A00120": "您还没有获得观看当前付费节目的权限（体育会员）"
                },
                "askQpIds": {
                    "default": "节目信息获取失败"
                },
                "ChargeFailed": "您还没有获得观看当前付费节目的权限",
                "SupportError_Flash": '当前浏览器尚未运行flashplayer，<a href="//www.adobe.com/go/getflashplayer" target="_blank" class="theme-color">点击运行</a><br/>请先下载安装flashplayer插件，并前去<br/>浏览器设置，将flash插件设置为在此网站上【始终允许】',
                "SupportError_FlashNotEnabled": '当前浏览器尚未运行flashplayer，<span class="theme-color">点击运行</span>，<br/>并前去浏览器设置，将flash插件设置为在此网站上【始终允许】',
                "SupportError_Mobile": "手机网页端不支持该类节目，<br/>请前往PC网页端/手机客户端观看当前节目",
                "SupportError_Engine": "当前平台不支持播放，<br/>请前往PC网页端/手机客户端观看当前节目",
                "SupportError_PCA": "本节目暂时无法播放，<br />请重启客户端或者浏览器试试。",
                "BrowserLow": "浏览器版本过低，推荐您下载使用高级浏览器提升体验",
                "PlayError": "对不起，播放出错了",
                "NetError": "网络出了点问题，点击刷新看看吧",
                "TechError": "网络出了点问题，点击刷新看看吧",
                "userCheckVipError": "您已同时在超过两台设备观看会员节目，如需继续观看，请先在其他设备上退出观看。"
            },
            "feedback": {
                "LiveWaiting_PPC": "节目未开始，去看看其他节目吧",
                "LiveWaiting_PGC": "节目未开始，去看看其他节目吧",
                "LivePaused": "主播暂时离开了，马上回来",
                "LiveEnded": "节目已结束，去看看其他节目吧",
                "LiveEndWithVOD": "节目已结束，<span class='theme-color'><a target='_blank' href='{0}'><u>全场回放</u></a></span>",
                "LiveEndWithReplay": "节目已结束，<span class='theme-color'><a href='{0}'><u>点击回看</u></a></span>",
                "LivePlaybackEnded": "节目已结束，去看看其他节目吧"
            },
            "control": {},
            "definition": {
                "speed": ["极速", "极速"],
                "smooth": ["流畅 360P", "流畅"],
                "high": ["高清 480P", "高清"],
                "super": ["超清", "超清"],
                "720p": ["超清 720P", "超清"],
                "1080p": ["蓝光 4M", "蓝光 4M"],
                "1080p_ppc": ["蓝光 1080P", "蓝光"],
                "1080p50": ["蓝光 1080P50", "蓝光"],
                "1080p6m": ["蓝光 6M", "蓝光 6M"],
                "1080p8m": ["蓝光 8M", "蓝光 8M"],
                "2K": ["2K", "2K"],
                "4k": ["蓝光 4K", "蓝光 4K"],
                "720po": ["原画", "原画"],
                "1080po": ["原画", "原画"],
                "2Ko": ["原画", "原画"]
            },
            "tips": {
                "seeking": "正在切换到<font color='#00cc36'>{0}</font>码流",
                "seekend": "已成功切换到<font color='#00cc36'>{0}</font>画质",
                "ppcTryWatch": "免费试看<font color='#00cc36'> 6 </font>分钟，收看完整版请<a href='javascript:;'> <font color='#00cc36'>立即购买</font></a>",
                "ppcTryWatchCountDown": "试看即将结束…<font color='#00cc36'>{0}</font>秒 <a href='javascript:;'><font color='#00cc36'>立即购买</font></a>",
                "waiting": {
                    "pgc": "loading",
                    "pgc_delay": "loading \n网络有点慢，正在努力加载",
                    "ppc": "正在缓冲, 请稍候 ...",
                    "timeout_def": "您的网络环境不顺畅，请稍候",
                    "timeout_defs": "『{0}』码流在当前网络环境比较卡，缓冲花费了比一般更长的时间。 降低清晰度试试",
                    "download_rate": "下载速率：",
                    "buffer_ing": "正在缓冲..."
                },
                "backlive": "已同步至最新进度",
                "userCheckVipTips": "您的账号在多台设备同时播放视频，存在安全风险，请尽快退登其他设备或立即修改密码"
            },
            "carousel": {
                "listTitle": "播单 ({0})",
                "listCur": "正在播放",
                "listNext": "即将播放",
                "loadingCar": "即将轮播",
                "loadingLive": "即将播放",
                "remindCar": "已切换为轮播",
                "remindLive": "已切换为节目",
                "remindCur": "<font color='#00ff00'>当前播放：</font>{0}"
            },
            "barrset": {
                "titleArea": "弹幕区域",
                "titleSize": "字体大小",
                "titleAlpha": "不透明度",
                "titleSpeed": "弹幕速度",
                "titleCompere": "开启主持人弹幕",
                "full": "全屏",
                "top0": "中上方",
                "top": "上方",
                "bottom": "下方",
                "size0": "极小",
                "size1": "小",
                "size2": "正常",
                "size3": "大",
                "size4": "极大",
                "speed0": "极慢",
                "speed1": "慢",
                "speed2": "正常",
                "speed3": "快",
                "speed4": "极快"
            },
            "rightmenu": {
                "version": "版本号",
                "save": "保存日志",
                "upload": "上传日志",
                "feedback": "反馈问题",
                "intro": "快捷键说明"
            }
        }
    },
    "a765f2839f9467561505": function(e, t, i) {
        "use strict";
        e.exports = i("d280362e5865b5c09927")
    },
    "a778cf529f0c62089670": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = d(i("790825d0dabf4060a0d9"))
          , o = d(i("343def12cad299c54e12"))
          , r = d(i("51caa367481e39d4fbe2"))
          , a = d(i("4a077be629d240592d7a"))
          , s = d(i("9af93fe923dfe19afe8a"))
          , l = (d(i("ae19a1d24e6ded12b0b9")),
        d(i("c627e4f58ec4241c41a2")),
        d(i("162f473717848ae5cb34")),
        d(i("c779f0f9ff7f0eb554cb")))
          , c = d(i("96598f2d6ae9c8676ba4"))
          , u = d(i("e2263676467d036c3349"))
          , f = (d(i("ddb8338bcecb054d6eee")),
        d(i("e7464dc3e62648edcd65")));
        function d(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var p, h = (function g(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(_, p = o["default"]),
        _.prototype.destroy = function() {
            this._view && this._handlers && (this._player.off(n["default"].PLAYER_ERROR, this._handlers.onErrorHandler),
            this._player.off(n["default"].PLAYER_FEEDBACK, this._handlers.onErrorHandler),
            this._player.off(n["default"].PLAYER_FEEDBACK_HIDE, this._handlers.onHide),
            this._player.off(n["default"].VIDEO_STATUS, this._handlers.onPlay),
            this._player.off(n["default"].PLAYER_ENGINE_INITED, this._handlers.onEngineOK),
            this._view && (this._view.removeListener(s["default"].EVENT_CLICK_REPORT, this._handlers.onClickReport),
            this._view.removeListener(s["default"].EVENT_CLICK_REFRESH, this._handlers.onClickRefresh))),
            this._view && this._view.destroy(),
            this._view = undefined,
            this._handlers = undefined,
            p.prototype.destroy.call(this)
        }
        ,
        _.prototype.__initEvent = function() {
            this._handlers = {},
            this._handlers.onErrorHandler = this.__onErrorHandler.bind(this),
            this._handlers.onLangHander = this.__onLangHandler.bind(this),
            this._handlers.onClickReport = this.__onClickReport.bind(this),
            this._handlers.onClickRefresh = this.__onClickRefresh.bind(this),
            this._handlers.onPlay = this.__onPlay.bind(this),
            this._handlers.onHide = this.__onHide.bind(this),
            this._handlers.onEngineOK = this.__onEngineOK.bind(this),
            this._player.on(n["default"].PLAYER_ERROR, this._handlers.onErrorHandler),
            this._player.on(n["default"].PLAYER_FEEDBACK, this._handlers.onErrorHandler),
            this._player.on(n["default"].PLAYER_FEEDBACK_HIDE, this._handlers.onHide),
            this._player.on(n["default"].VIDEO_STATUS, this._handlers.onPlay),
            this._player.on(n["default"].PLAYER_ENGINE_INITED, this._handlers.onEngineOK)
        }
        ,
        _.prototype.__onErrorHandler = function(e) {
            u["default"].isPPC() && -1 != [a["default"].VRS_A00110, a["default"].VRS_DEFAULT_ERROR, a["default"].ENGINE_NO_AVAILABLE_STREAM].indexOf(e.code) && (c["default"].isProgramWaiting() ? e.code = a["default"].LIVE_WAITING_PPC : c["default"].isProgramEnded() && (e.code = a["default"].LIVE_END));
            var t = r["default"].getConfig(e.code, e.values);
            if (t && 1 == t.isfeedback)
                this.__showFeedback(t);
            else if (t = t || r["default"].getConfig(a["default"].NET_ERROR),
            e.realCode && (t.realCode = e.realCode),
            this.__showError(t),
            this._player) {
                var i = {
                    evetp: 4001,
                    content: t.realCode,
                    "ua": navigator.userAgent
                };
                this._player.emit(n["default"].SENSOR_QOS, i)
            }
        }
        ,
        _.prototype.__showError = function(e) {
            this._view || this.__initView(),
            this._view.show(e.content, e.realCode, e.report, e.refresh)
        }
        ,
        _.prototype.__showFeedback = function(e) {
            if (e && e.content) {
                var t = "";
                this.videoBgImg = this._player.getConfig().getEntryConfig("videoBgImg"),
                t = this.videoBgImg ? e.realCode === a["default"].LIVE_WAITING_PPC || u["default"].isPPC() && (e.realCode === a["default"].LIVE_END || e.realCode === a["default"].LIVE_END_VOD || e.realCode === a["default"].LIVE_END_REPLAY || e.realCode === a["default"].LIVE_PLAYBACK_END) ? (0 === this.videoBgImg.indexOf("https:") && (this.videoBgImg = this.videoBgImg.substring(6)),
                0 === this.videoBgImg.indexOf("http:") && (this.videoBgImg = this.videoBgImg.substring(5)),
                '\n                <div style="background-image:url(' + this.videoBgImg + ');width:100%;height:100%;position:absolute;top:0;left:0;z-index:9;background-size: 100% 100%;">\n                    <div style="background-color: rgba(0,0,0,0.88);position:absolute;top:0;left:0;width:100%;height:100%;">\n                        <div style="position: absolute;width:100%;text-align:center;top:50%;color:#fff;font-size:18px;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform: translateY(-50%);">\n                            ' + (e.content || "") + "\n                        </div>\n                    </div>\n                </div>\n                ") : '\n                <div class="M706C61796572-feedback-bg" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9;">\n                    <div style="position: absolute;width:100%;text-align:center;top:50%;color:#fff;font-size:18px;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform: translateY(-50%);">\n                        ' + (e.content || "") + "\n                    </div>\n                </div>\n                " : '\n            <div class="M706C61796572-feedback-bg" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:9;">\n                <div style="width:100%;text-align:center;top:50%;left:50%;margin-top:22%;color:#fff;font-size:18px">\n                    ' + (e.content || "") + "\n                </div>\n            </div>\n            ",
                this._feedback || (this._feedback = document.createElement("div"),
                this._container.appendChild(this._feedback)),
                this._feedback.innerHTML = t,
                "none" == this._feedback.style.display && (this._feedback.style.display = "")
            }
        }
        ,
        _.prototype.__onEngineOK = function(e) {
            this.__engineOk = !0
        }
        ,
        _.prototype.__onPlay = function(e) {
            e.type == n["default"].VIDEO_PLAY && this._view && this._view.hide()
        }
        ,
        _.prototype.__onHide = function(e) {
            this._view && this._view.hide(),
            this._feedback && (this._feedback.style.display = "none")
        }
        ,
        _.prototype.__initView = function() {
            this._view = new s["default"](this._container),
            this._view.on(s["default"].EVENT_CLICK_REPORT, this._handlers.onClickReport),
            this._view.on(s["default"].EVENT_CLICK_REFRESH, this._handlers.onClickRefresh)
        }
        ,
        _.prototype.__onLangHandler = function(e) {}
        ,
        _.prototype.__onClickReport = function() {
            f["default"].getInstance().show()
        }
        ,
        _.prototype.__onClickRefresh = function() {
            window.location.reload()
        }
        ,
        _);
        function _(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, _);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, p.call(this, e, t));
            return i._type = l["default"].FEEDBACK,
            i._handlers = undefined,
            i._view = undefined,
            i._flashV = undefined,
            i._isTW = !1,
            i._player = t,
            i.videoBgImg = i._player.getConfig().getEntryConfig("videoBgImg"),
            i.__initEvent(),
            p.prototype.init.call(i),
            i
        }
        t["default"] = h
    },
    "a94b8a4acc8eebd7604f": function(e, t, i) {
        "use strict";
        var r = i("f11c62a07e5387a88d2c");
        e.exports = function(n, o, e) {
            if (r(n),
            o === undefined)
                return n;
            switch (e) {
            case 0:
                return function() {
                    return n.call(o)
                }
                ;
            case 1:
                return function(e) {
                    return n.call(o, e)
                }
                ;
            case 2:
                return function(e, t) {
                    return n.call(o, e, t)
                }
                ;
            case 3:
                return function(e, t, i) {
                    return n.call(o, e, t, i)
                }
            }
            return function() {
                return n.apply(o, arguments)
            }
        }
    },
    "a9d727c62bb635f5caaf": function(e, t, c) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = c("fb885b8dee52c75a3d84")
              , o = "-1"
              , r = []
              , a = 0
              , s = 0
              , l = {
                get: function() {
                    if ("-1" === o || !o)
                        try {
                            o = n.get("__dfp")
                        } catch (i) {
                            o = ""
                        }
                    if ("" !== o) {
                        var e = o.split("@")
                          , t = (new Date).getTime();
                        3 == e.length && Number(e[2]) <= t && t <= Number(e[1]) && (o = e[0])
                    }
                    return o
                },
                ready: function(e) {
                    if (l.get())
                        return e();
                    r.push(e),
                    a || (s = 0,
                    a = setInterval(function() {
                        if (1e4 < (s += 50) && clearInterval(a),
                        l.get()) {
                            clearInterval(a);
                            for (var e = 0; e < r.length; e++)
                                r[e]();
                            r = null
                        }
                    }, 50))
                }
            };
            i.exports = l
        }
        .call(t, c, t, e)) === undefined || (e.exports = i)
    },
    "aae92b552395e25f956c": function(e, t, i) {
        "use strict";
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , n = function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("a1c8a05eb561659fd014"));
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o)
        }
        (o.install = function() {
            var o, r, a, s;
            "function" != typeof Object.create && (Object.create = function(e, t) {
                if ("object" !== (void 0 === e ? "undefined" : l(e)) && "function" != typeof e)
                    throw new TypeError("Object prototype may only be an Object: " + e);
                if (null === e)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
                if (void 0 !== t)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
                function i() {}
                return i.prototype = e,
                new i
            }
            ),
            Object.keys || (Object.keys = (o = Object.prototype.hasOwnProperty,
            r = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            s = (a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length,
            function(e) {
                if ("function" != typeof e && ("object" !== (void 0 === e ? "undefined" : l(e)) || null === e))
                    throw new TypeError("Object.keys called on non-object");
                var t, i, n = [];
                for (t in e)
                    o.call(e, t) && n.push(t);
                if (r)
                    for (i = 0; i < s; i++)
                        o.call(e, a[i]) && n.push(a[i]);
                return n
            }
            )),
            Array.prototype.filter || (Array.prototype.filter = function(e, t) {
                if ("Function" != typeof e && "function" != typeof e || !this)
                    throw new TypeError;
                var i = this.length >>> 0
                  , n = new Array(i)
                  , o = 0
                  , r = -1;
                if (t === undefined)
                    for (; ++r != i; )
                        r in this && e(this[r], r, this) && (n[o++] = this[r]);
                else
                    for (; ++r != i; )
                        r in this && e.call(t, this[r], r, this) && (n[o++] = this[r]);
                return n.length = o,
                n
            }
            ),
            "console"in window || (window.console = {
                log: function(e) {}
            }),
            document.getElementsByClassName || (document.getElementsByClassName = function(e, t) {
                for (var i = (t || document).getElementsByTagName("*"), n = [], o = 0; o < i.length; o++)
                    for (var r = i[o], a = r.className.split(" "), s = 0; s < a.length; s++)
                        if (a[s] == e) {
                            n.push(r);
                            break
                        }
                return n
            }
            ),
            Object.create || (Object.create = function(e, t) {
                if ("object" !== (void 0 === e ? "undefined" : l(e)) && "function" != typeof e)
                    throw new TypeError("Object prototype may only be an Object: " + e);
                if (null === e)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
                if (void 0 !== t)
                    throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
                function i() {}
                return i.prototype = e,
                new i
            }
            ),
            Function.prototype.bind = Function.prototype.bind || function(e) {
                if ("function" != typeof this)
                    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice
                  , i = t.call(arguments, 1)
                  , n = this
                  , o = function o() {}
                  , r = function r() {
                    return n.apply(this instanceof o ? this : e || window, i.concat(t.call(arguments)))
                };
                return o.prototype = this.prototype,
                r.prototype = new o,
                r
            }
            ,
            Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
                var i = void 0
                  , n = void 0;
                if (null == this)
                    throw new TypeError("this is null or not defined");
                var o = Object(this)
                  , r = o.length >>> 0;
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                for (1 < arguments.length && (i = t),
                n = 0; n < r; ) {
                    var a = void 0;
                    n in o && (a = o[n],
                    e.call(i, a, n, o)),
                    n++
                }
            }
            ),
            n["default"].polyfill(),
            console.log("Polyfill install")
        }
        ,
        o).install()
    },
    "ac1ad70ff54a2cbc9cab": function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        __WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
            var Dispatcher = __webpack_require__("4afdb3d0356794c76e42"), Class = __webpack_require__("7e0ef422896a6b0d6693"), cookies = __webpack_require__("fb885b8dee52c75a3d84"), http = __webpack_require__("fd0b44f556392d6a75ac"), md5 = __webpack_require__("fa4e6c91b6a23ac6e195"), Logger = __webpack_require__("ea671b6b6dbc8144f277"), logger = new Logger("user"), platform = __webpack_require__("162f473717848ae5cb34"), i18n = __webpack_require__("41fc02f452bd7cebf8a1"), uuid = __webpack_require__("53065c83966dce0d1759"), urlkit = __webpack_require__("9dc446da53b44c304edf"), authkey = __webpack_require__("472c8e0e64ce03027885"), serverRemote = __webpack_require__("e19fa061fe0ac399731b")["default"], NoticedLoginInfo, vipOptions = {}, REQUEST_KEY = "w0JD89dhtS7BdPLU2", RESPONSE_KEY = "-0J1d9d^ESd)9jSsja", _isNewUser = !cookies.get("QC006"), _isVIPSync = !1, _isBANSync = !1, _banType = "", _heartBeatTimer = 0, _heartBeatTime = 0, _userLevel = 0, _isActivation = !1, _tvid = "", _agentType = 1, _qdv = 7, _vipTypes = [];
            _agentType = platform.browser.iPad ? 23 : platform.os.androidTablet ? 24 : 1;
            var allVipType = function allVipType() {
                return _vipTypes
            }
              , getUserInfo = function getUserInfo() {
                var userInfo = {}
                  , p00002 = cookies.get("P00002");
                return null !== p00002 && "" !== p00002 && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"),
                userInfo.uid = p00002.uid,
                userInfo.name = p00002.nickname,
                userInfo.email = p00002.email),
                userInfo
            }
              , getUid = function getUid() {
                return getUserInfo().uid || ""
            }
              , isLogin = function isLogin() {
                return NoticedLoginInfo ? NoticedLoginInfo.login : "" !== getUid()
            }
              , passportCookie = function passportCookie() {
                return NoticedLoginInfo && NoticedLoginInfo.P00001 ? NoticedLoginInfo.P00001 : cookies.get("P00001") || ""
            }
              , checkVipStack = []
              , flushCallback = function flushCallback(e) {
                _isVIPSync = e;
                for (var t = 0; t < checkVipStack.length; t++)
                    checkVipStack[t](e);
                checkVipStack = []
            }
              , matchVipType = function matchVipType(e) {
                1 < arguments.length && undefined;
                var t = !1;
                if (null == e || e == undefined)
                    return t;
                var i = e.vipType
                  , n = e.status
                  , o = e.surplus
                  , r = serverRemote.getServerTime()
                  , a = 1e3 * Math.ceil(e.deadline.t / 1e3);
                return (0 < o || "" == o) && 0 < i && 1 == n && r < a && (-1 == _vipTypes.indexOf(i) && _vipTypes.push(i),
                t = !0),
                t
            }
              , getHeartGap = function getHeartGap() {}
              , onHeartBeatTimer = function onHeartBeatTimer() {
                var e = Math.random()
                  , t = [];
                t.push("authcookie=" + cookies.get("P00001")),
                t.push("tn=" + e),
                t.push("tv_id=" + _tvid),
                t.push("device_id=" + uuid.getFluid()),
                t.push("agenttype=" + _agentType),
                t.push("ptid=" + getPTID()),
                t.sort();
                for (var i = "", n = 0; n < t.length; n++)
                    i += t[n] + "|";
                i = md5(i += "jfaljluixn39012$#");
                var o = {
                    authcookie: cookies.get("P00001"),
                    agenttype: _agentType,
                    sign: i,
                    device_id: uuid.getFluid(),
                    ptid: getPTID(),
                    tv_id: _tvid,
                    tn: e
                };
                http.beacon(o, "//cmonitor.iqiyi.com/apis/cmonitor/keepalive.action", !1)
            }
              , openHeartBeat = function openHeartBeat() {
                1 === _userLevel && (_isActivation = !0,
                0 === _heartBeatTimer && (onHeartBeatTimer(),
                _heartBeatTimer = setInterval(onHeartBeatTimer, _heartBeatTime)))
            }
              , stopHeartBeat = function stopHeartBeat() {
                _isActivation = !1,
                0 !== _heartBeatTimer && (clearInterval(_heartBeatTimer),
                _heartBeatTimer = 0)
            }
              , getPTID = function getPTID() {
                return platform.browser.iPad ? i18n.isTWLocale() ? "03030031010010000000" : "03030031010000000000" : i18n.isTWLocale() ? "01010031010010000000" : "01010031010000000000"
            }
              , closeHeartBeat = function closeHeartBeat() {
                var e = +new Date
                  , t = []
                  , i = getPTID();
                t.push("authcookie=" + cookies.get("P00001")),
                t.push("ts=" + e),
                t.push("tv_id=" + _tvid),
                t.push("device_id=" + uuid.getFluid()),
                t.push("agenttype=" + _agentType),
                t.push("ptid=" + i),
                t.push("version=4.1.1"),
                t.push("qd_v=" + _qdv),
                t.sort();
                for (var n = "", o = 0; o < t.length; o++)
                    o === t.length - 1 ? n += t[o] : n += t[o] + "&";
                var r = {
                    authcookie: cookies.get("P00001"),
                    agenttype: _agentType,
                    device_id: uuid.getFluid() || uuid.getJsuid(),
                    tv_id: _tvid,
                    ptid: i,
                    version: "4.1.1",
                    qd_v: _qdv,
                    ts: e
                };
                http.ajax({
                    url: "https://cmonitor.iqiyi.com/apis/cmonitor/off.action",
                    params: r,
                    beforeSend: function(e) {
                        urlkit.parse(e.url).host;
                        try {
                            e.url += "&qd_sc=" + authkey.cmd5x(n)
                        } catch (t) {}
                        return logger.log(e.url),
                        e
                    },
                    success: function(e) {},
                    failure: function(e) {}
                })
            }
              , isVip = function isVip(e, t) {
                var i = this
                  , n = getPTID();
                _isBANSync = !1,
                _banType = "";
                var o = cookies.get("P00001")
                  , r = cookies.get("QC170");
                vipOptions = t || vipOptions,
                checkVipStack.push(e),
                r || (vipOptions.vipMode = "httpMode");
                o ? http.jsonp({
                    url: "//passport.iqiyi.com/apis/user/info.action",
                    params: {
                        "authcookie": o,
                        "agenttype": _agentType,
                        "device_id": uuid.getFluid(),
                        "fields": ["qiyi_vip", "qiyi_tennis_vip", "sport_vip"].join(","),
                        "ptid": n
                    },
                    timeout: 2e3,
                    memory: !0,
                    beforeSend: function() {
                        i.fire({
                            type: "httpStart"
                        })
                    },
                    complete: function() {
                        i.fire({
                            type: "httpComplete"
                        })
                    },
                    success: function(e) {
                        var t = !1;
                        if (_userLevel = 0,
                        e)
                            if ("A00000" == e.code) {
                                var i = e.data.qiyi_vip_info
                                  , n = e.data.qiyi_tennis_vip
                                  , o = e.data.sport_vip;
                                t = matchVipType(i, "qiyi_vip_info") || t,
                                t = matchVipType(n, "qiyi_tennis_vip") || t,
                                (t = matchVipType(o, "sport_vip") || t) && getHeartGap()
                            } else
                                switch (e.code) {
                                case "A10001":
                                case "A10002":
                                case "A10004":
                                    _isBANSync = !0,
                                    _banType = e.code
                                }
                        flushCallback(t)
                    },
                    failure: function(e, t) {
                        _userLevel = 0,
                        408 === t && logger.warn("passport: timeout, check user vip fail!"),
                        flushCallback(!0)
                    }
                }) : flushCallback(!1)
            }
              , isVIPSync = function isVIPSync() {
                return _isVIPSync
            }
              , isBanned = function isBanned() {
                return _isBANSync
            }
              , setInfo = function setInfo(e) {
                !0 === (NoticedLoginInfo = e).login ? NoticedLoginInfo.login = !0 : "true" === NoticedLoginInfo.login ? NoticedLoginInfo.login = !0 : NoticedLoginInfo.login = !1,
                _isVIPSync = !0 === NoticedLoginInfo.login,
                _isBANSync = !1,
                _banType = "",
                this.fire({
                    type: "infoset"
                })
            }
              , changeVipMode = function changeVipMode(e) {
                vipOptions.vipMode = e
            }
              , getBanType = function getBanType() {
                return _banType
            }
              , addEvent = function addEvent(e, t, i) {
                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
            }
              , beforeunloadListener = function beforeunloadListener() {
                var e = this;
                addEvent(window, "beforeunload", function t() {
                    e.isVip(function(e) {
                        e && closeHeartBeat()
                    })
                })
            }
              , UserInfo = new Class("User",{
                extend: Dispatcher,
                methods: {
                    isLogin: isLogin,
                    getUid: getUid,
                    allVipType: allVipType,
                    isVip: isVip,
                    isVipSync: isVIPSync,
                    isBanned: isBanned,
                    getBanType: getBanType,
                    passportCookie: passportCookie,
                    isNewUser: function() {
                        return _isNewUser
                    },
                    setInfo: setInfo,
                    tvid: function(e) {
                        _tvid = e
                    },
                    openHeartBeat: openHeartBeat,
                    stopHeartBeat: stopHeartBeat,
                    closeHeartBeat: closeHeartBeat,
                    beforeunloadListener: beforeunloadListener,
                    changeVipMode: changeVipMode
                }
            });
            module.exports = new UserInfo
        }
        .call(exports, __webpack_require__, exports, module),
        __WEBPACK_AMD_DEFINE_RESULT__ === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    },
    "ac885c5555753d8707b6": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.record = undefined;
        var a = function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("421f2d6f2d3b0788eae4"));
        var s = "iqyLiveApiLog"
          , l = "";
        window.onunload = function() {
            window.sessionStorage.setItem(s, "")
        }
        ,
        t.record = function c(e, t, i, n) {
            var o, r = new Date;
            o = r.toLocaleString() + ":" + r.getMilliseconds() + "  [ " + e + " ]  ( url ): " + t + "  ( step ): " + i + "  ( content ):  " + ("string" == typeof n ? n : JSON.stringify(n)) + "\n",
            a["default"].read(s) && (l = a["default"].read(s)),
            l += o,
            a["default"].write(s, l)
        }
    },
    "ad54687f75f9150df277": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.xdrRequest = c;
        var a = function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("38eba46e8b8bd6b4cff1"));
        var s = i("5a246217d6f48d7f8152");
        function l(e, t) {
            var i = [];
            for (var n in t)
                i.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return i.length ? e + "?" + i.join("&") : e
        }
        var o = window.fetch;
        function c(n) {
            return n.url ? new Promise(function(e, t) {
                var i = new XDomainRequest;
                i.open(n.method, n.url + "?" + l("", n.data).replace(/^\?/, "")),
                i.onload = function() {
                    e(n.noParsing ? i.responseText : JSON.parse(i.responseText))
                }
                ,
                i.send()
            }
            ) : new Promise(function(e, t) {
                t({
                    msg: "no url",
                    code: "E90001"
                })
            }
            )
        }
        window.fetch = function() {
            var n = o.apply(null, arguments)
              , e = new Promise(function(e, t) {
                var i = function i() {
                    return t("fetch abort")
                };
                return n.abort = i,
                n
            }
            )
              , t = Promise.race([n, e]);
            return t.abort = n.abort,
            t
        }
        ,
        window.fetchJsonp = function() {
            return s.apply(s, Array.prototype.slice.call(arguments).concat({
                timeout: 3e3
            }))
        }
        ,
        e.exports = function(e) {
            var t, i = {
                method: "get",
                url: "",
                dataType: "json",
                timeout: e.timeout || 3e3
            };
            if ((e = (0,
            a["default"])({}, i, e)).data = e.data || null,
            e.url)
                if ("jsonp" === e.dataType)
                    e.method = "get",
                    t = function o(e) {
                        var t = {
                            jsonpCallback: e.jsonp || "",
                            jsonpCallbackFunction: e.jsonpCallback || "",
                            timeout: e.timeout
                        };
                        return s(e.data ? l(e.url, e.data) : e.url, t).then(function(e) {
                            return e.json()
                        })
                    }(e);
                else {
                    if (/^(http(s)?:)?\/\//.test(e.url)) {
                        var n = e.url.split("/");
                        if (window.location.hostname != n[2] || n[0] && window.location.protocol != n[0]) {
                            if (window.XDomainRequest)
                                return c(e);
                            n[2] = n[2] || "",
                            e.credentials || (e.credentials = ~n[2].indexOf("apis-live.iqiyi.com") ? "omit" : "include"),
                            ~n[2].indexOf("apis-live.iqiyi.com") && (e.isLiveApi = !0)
                        }
                    }
                    t = function r(t) {
                        var i = null
                          , e = {
                            method: t.method.toUpperCase(),
                            headers: {},
                            credentials: t.credentials || "include"
                        }
                          , n = "[object formdata]" === Object.prototype.toString.apply(t.data).toLowerCase();
                        n || (e.headers["Content-Type"] = "application/x-www-form-urlencoded"),
                        "GET" === t.method.toUpperCase() ? t.url = l(t.url, t.data) : e.body = n ? t.data : l("", t.data).replace(/^\?/, "");
                        var o = fetch(t.url, e);
                        return i = setTimeout(function() {
                            o.abort()
                        }, t.timeout),
                        o.then(function(e) {
                            return i && clearTimeout(i),
                            i = null,
                            t.noParsing ? e.text() : e.json()
                        })
                    }(e)
                }
            else
                t = new Promise(function(e, t) {
                    t({
                        msg: "no url",
                        code: "E90001"
                    })
                }
                );
            return t["catch"](function(e) {
                return e = "[object error]" === Object.prototype.toString.apply(e).toLowerCase() ? e.message : e,
                Promise.resolve({
                    code: "E90000",
                    msg: e
                })
            })
        }
    },
    "ae19a1d24e6ded12b0b9": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        (function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        )(i("e2263676467d036c3349"));
        var n = i("bef7a691bb63f7f92f11");
        var o = (p.prototype.startWriteStorage = function() {
            var t = this;
            this.writeTid || (this.writeTid = setInterval(function() {
                if (t.isSupportStorage() && t.receiveNewMsg)
                    try {
                        sessionStorage.setItem(p.LOG_STORAGE_KEY, t.msgs.join("\n"))
                    } catch (e) {}
            }, p.WRITE_INTERVAL))
        }
        ,
        p.prototype.setShowConsole = function(e) {
            this.showConsole = e
        }
        ,
        p.prototype.setChatStorageKey = function(e) {
            this.chatKey = e
        }
        ,
        p.prototype.append = function(e, t, i) {
            var n = new Date
              , o = n.getFullYear()
              , r = n.getMonth() + 1
              , a = n.getDate()
              , s = n.getHours()
              , l = n.getMinutes()
              , c = n.getSeconds()
              , u = n.getMilliseconds()
              , f = o + "-" + r + "-" + a + " " + this.align(s) + ":" + this.align(l) + ":" + this.align(c) + "." + this.align(u, 3)
              , d = f + "[" + i + "][" + e + "] ==> " + t;
            this.showConsole && window.console && (/Chrome|Firefox/.test(navigator.userAgent) ? this.getHandlerByLevel(i).call(console, "%c" + f + "[" + i + "][" + e + "]%c" + t, "background-color:#699f00;color:#fff;", "background:" + this.getColorByLevel(i) + ";color:#fff") : console.log(d)),
            this.msgs.length > p.LOG_MAX_LEN && this.msgs.shift(),
            this.msgs.push(d)
        }
        ,
        p.prototype.getColorByLevel = function(e) {
            return e == p.ERROR ? "#F30" : e == p.WARN ? "#ff6cb7" : "#FFA500"
        }
        ,
        p.prototype.getHandlerByLevel = function(e) {
            return e == p.ERROR && console.error ? console.error : e == p.WARN && console.warn ? console.warn : console.log
        }
        ,
        p.prototype.debug = function(e, t) {
            this.append(e, t, p.DEBUG)
        }
        ,
        p.prototype.info = function(e, t) {
            this.append(e, t, p.INFO)
        }
        ,
        p.prototype.warn = function(e, t) {
            this.append(e, t, p.WARN)
        }
        ,
        p.prototype.error = function(e, t) {
            this.append(e, t, p.ERROR)
        }
        ,
        p.prototype.isSupportStorage = function() {
            return "sessionStorage"in window
        }
        ,
        p.prototype.getLog = function() {
            return this.msgs.join("\n")
        }
        ,
        p.prototype.getStorageLog = function(e) {
            return this.isSupportStorage() ? sessionStorage.getItem(e) : ""
        }
        ,
        p.prototype.align = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 2
              , i = "00" + e;
            return i.substr(i.length - t)
        }
        ,
        p.prototype.clear = function() {
            this.isSupportStorage() && sessionStorage.removeItem(this.LOG_STORAGE_KEY),
            this.msgs = []
        }
        ,
        p.prototype.getPlayerLog = function() {
            return [this.getLog(), "----------------------- wschat -----------------------", this.getChatLog(), "----------------------- api log -----------------------", this.getApiLog()].join("\n")
        }
        ,
        p.prototype.getApiLog = function() {
            var e = n.apiStat.getStatsLog();
            return e || "没有读取到API相关日志"
        }
        ,
        p.prototype.getChatLog = function() {
            return this.chatKey ? this.getStorageLog(this.chatKey) : ""
        }
        ,
        p);
        function p() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, p),
            this.showConsole = !1,
            this.level = p.INFO,
            this.msgs = [],
            this.receiveNewMsg = !1,
            this.startWriteStorage(),
            this.chatKey = null
        }
        o.DEBUG = "debug",
        o.INFO = "info",
        o.WARN = "warn",
        o.ERROR = "error",
        o.WRITE_INTERVAL = 3e4,
        o.LOG_MAX_LEN = 500,
        o.LOG_MAX_SIZE = 131072,
        o.LOG_STORAGE_KEY = "uniplayer",
        o.CHAT_LOG_PGC_KEY = "h5c_dzb_log",
        o.CHAT_LOG_PPC_KEY = "h5c_ppc_log",
        o.API_LOG_KEY = "iqyLiveApiLog",
        t["default"] = new o
    },
    "aea945fb98a7e4039b0c": function(e, t, i) {
        var n = i("9a237600586fc7321dc1");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "af8672b546854983c7ba": function(e, t, i) {
        "use strict";
        var s = i("d280362e5865b5c09927")
          , n = i("74087cdf1b418e6530cc")
          , l = i("69d4ebc1bc0e9a108375")
          , c = i("f7c33656140074fd558a")
          , u = i("3c5c0e2a3424018cbe00")
          , o = i("e5c1d4201891556e0f25")
          , r = i("687af9d97b3b47621ef3")
          , a = r.get
          , f = r.enforce
          , d = String(o).split("toString");
        n("inspectSource", function(e) {
            return o.call(e)
        }),
        (e.exports = function(e, t, i, n) {
            var o = !!n && !!n.unsafe
              , r = !!n && !!n.enumerable
              , a = !!n && !!n.noTargetGet;
            "function" == typeof i && ("string" != typeof t || c(i, "name") || l(i, "name", t),
            f(i).source = d.join("string" == typeof t ? t : "")),
            e !== s ? (o ? !a && e[t] && (r = !0) : delete e[t],
            r ? e[t] = i : l(e, t, i)) : r ? e[t] = i : u(t, i)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && a(this).source || o.call(this)
        })
    },
    "b2b8be6396fc1261e889": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADJElEQVRoQ+1Z7XEVMQyUKgAqIKmApINQAVBBQgWECiAVkFQAVBCoAFIBjwogHUAFYvahy9g6na3zOTzezPlPZnKxrV2tvhymPV+85/bTCmDXHlw9sHpgIQPdJSQiB0T0hojw8ycRvWbmXwvtnNzeFYCIPCei90T0MLlxQ0RP7wtEFwAiAoNhOAB46wUzf7oPLywGICInRHRtWLe2XjDz2ygAETlSQqqeawagrEPr5wHDwgDU+C9KSFV+TQD0ErCOQI2sEABj/HBuEcRsACICKYB5b/0mInx/Zz5WAahHwTzkY9dHZj7zLgwDSHTpXYCzvxPRGTNvREQaAJSIwXGIh68WRAZAWQB7yCZpKqzJJGO4BQAuEJEPRHQ6cRlqyrFNxxYAUt2zmrXJ91uABevpnlYAARAoipfpXRaAdX0JyxX07hWoKAB43O5XFYCQx87lG2Y+XgoAgQrWR3ocDo4A0GQAuaDIWQ+itiCgvXXIzJDTdtU8cENE1tDLWltQAyAiyCio3Fjok2BU1i+JCIz0vJDJqAagmv48ikoAjPHD9lGaFBFo/ZVz/mdmvmtZdgFgKl0+Sr2gLYonoxtmhsRCEuruAc00Hogsz2vd+VYL5H/uAQWAFuSHMW5EliPFv6wz39m9ApgbxB0ktFsPTDSDqC0HexHEHdJolnJrMYAiZgvZVedChn7qaEYhe8nMaPpCadSTOComyn+PVgIFaduCpxcVagD+bFYr4QEYfodKidQ3ejKptRLDAYVmDvnfm/ayIub1QnPbafQrXjM2e6BJQJVmgkw+HgAMMTgApfpBiX7zDW31RWJEE4DKQHPLzCOvzB0pAe7JBDDoGAztbqSMMF4Z6hEP6HOyqUljpfgupIMMEoNHEDKf+3wT9oDJEhjsES9ev+7xEGoKtYEDiFS+eCw4mUrdTQC0HUC8gFWvZ7cgQgD0XJAzgCgaPwriiITs32jORmyUvBEGkIDYJpNa0Wz2gJHUkL2mXjT+38ddAwSVFcyFNdzi9XRPFw843kAWGv7BcV6TwRIQ3QEsMaZl7wqghbWee1YP9GSz5azVAy2s9dzzBwMF90DYuvpqAAAAAElFTkSuQmCC"
    },
    "b2d135ecb4bc86e80f2f": function(e, t, i) {
        "use strict";
        e.exports = i("9e971ba7f0c50a937e02")
    },
    "b35597b9e5190ca54b21": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = a(i("9f02978f1998980c265b"))
          , o = a(i("d57268024f2c01907ebc"))
          , r = a(i("df793c94f311ce3878ff"));
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        i("aea945fb98a7e4039b0c");
        var s, l = (function u(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(c, s = n["default"]),
        c.prototype.append = function(e, t, i) {
            var n = this;
            this._switch && (this._itemList.push(new o["default"](e,t,i)),
            this._isActivated || (this._frameFunc.call(window, function() {
                n.__update()
            }),
            this._isActivated = !0))
        }
        ,
        c.prototype.full = function(e) {
            this._container.style.top = e ? r["default"].TOP_GAP_FULL + "px" : r["default"].TOP_GAP_NORMAL + "px"
        }
        ,
        c.prototype.resize = function(e) {
            this._width = e,
            this._frameSpeed = this._width / (60 * r["default"].ARRIVE_TIME),
            this._frameSpeed = Math.round(10 * this._frameSpeed) / 10;
            for (var t = 0; t < this._itemList.length; t++)
                this._itemList[t]._isStart && this._itemList[t].refreshMove(this._frameSpeed)
        }
        ,
        c.prototype.destroy = function() {
            this.clear(),
            this._isActivated = !1,
            this._frameFunc = null
        }
        ,
        c.prototype.show = function() {
            this._switch = !0,
            this._container.style.display = "block"
        }
        ,
        c.prototype.clear = function() {
            for (var e = 0; e < this._itemList.length; e++)
                this._itemList[e].destroy();
            this._itemList.length = 0
        }
        ,
        c.prototype.hide = function() {
            this._switch = !1,
            this._container.style.display = "none",
            this.clear()
        }
        ,
        c.prototype.__update = function() {
            var e = this;
            this._isActivated && this._frameFunc && this._frameFunc.call(window, function() {
                e.__update()
            }),
            this.__updateRender()
        }
        ,
        c.prototype.__updateRender = function() {
            for (var e = this, t = null, i = null, n = 0; n < e._itemList.length; n++) {
                if ((t = this._itemList[n]).animation(),
                t._isStart)
                    t.getX() > e._width ? t.recover() : t.getX() <= -t.getWidth() && (t.destroy(),
                    e._itemList.splice(n, 1),
                    n--);
                else if (null == i || i._isDestroy)
                    t.start(e._container, e._width, e._frameSpeed);
                else if (i._isStart) {
                    var o = i.getX() + i.getWidth() + r["default"].ITEM_MIN_GAP;
                    o <= e._width && (e._width - o > e._frameSpeed + 1 ? t.start(e._container, e._width, e._frameSpeed) : t.start(e._container, o, e._frameSpeed))
                }
                i = t
            }
        }
        ,
        c);
        function c(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, s.call(this));
            return t._container = e,
            t._container.className = "M5b636210-compere",
            t._itemList = [],
            t._frameSpeed = 0,
            t._width = 0,
            t._isActivated = !1,
            t._switch = !0,
            t._frameFunc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
            ,
            t.resize(t._container.offsetWidth),
            t
        }
        t["default"] = l
    },
    "b413932bb091b555777a": function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    "b46d390f19c21708f72a": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        var n = (o.prototype.load = function(e, t) {
            if (!e || "string" != typeof e)
                return this.reject && this.reject.call();
            this.xhr || (this.xhr = new XMLHttpRequest),
            t && "object" === (void 0 === t ? "undefined" : s(t)) || (t = {
                method: "GET",
                params: {},
                withCredentials: !1,
                timeout: 10
            });
            var i = "";
            if (t.params && "object" === s(t.params)) {
                var n = [];
                for (var o in t.params)
                    n.push(o + "=" + encodeURIComponent(t.params[o]));
                i = n.join("&")
            }
            var r = t.method;
            if (r && "string" == typeof r ? "GET" !== (r = r.toUpperCase()) && "POST" !== r && (r = "GET") : r = "GET",
            "GET" === r && (-1 === e.indexOf("?") && ("/" !== e.charAt(e.length - 1) && (e += "/"),
            e += "?"),
            e += i),
            this.xhr.open(r, e, !0),
            this.xhr.responseType = "text",
            this.xhr.onreadystatechange = this.onreadystatechange.bind(this),
            this.xhr.onerror = this.onerror.bind(this),
            this.startTimeoutCheck(t.timeout || 10),
            t.withCredentials && this.xhr.withCredentials && (this.xhr.widthCredentials = !0),
            t.headers && "object" === s(t.headers))
                for (var a in t.headers)
                    this.xhr.setRequestHeader(a, t.headers[a]);
            "POST" === r ? (this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            this.xhr.send(i)) : this.xhr.send()
        }
        ,
        o.prototype.doReject = function(e, t) {
            this.reject && this.reject({
                code: e,
                msg: t
            }),
            this.destroy()
        }
        ,
        o.prototype.doResolve = function(e) {
            this.resolve && this.resolve(e),
            this.destroy()
        }
        ,
        o.prototype.onreadystatechange = function(e) {
            4 === this.xhr.readyState && (2 !== parseInt(this.xhr.status / 100) ? this.doReject(this.xhr.status, this.xhr.statusText) : this.doResolve(this.xhr.responseText))
        }
        ,
        o.prototype.onerror = function(e) {
            this.doReject("", e)
        }
        ,
        o.prototype.startTimeoutCheck = function(e) {
            var t = this;
            this._timeout = setTimeout(function() {
                t.destroy()
            }, 1e3 * e)
        }
        ,
        o.prototype.destroy = function() {
            clearTimeout(this._timeout),
            this.xhr && (this.xhr.abort && this.xhr.abort(),
            this.xhr = null),
            this.resolve = null,
            this.reject = null
        }
        ,
        o.load = function(i, n) {
            return new Promise(function(e, t) {
                new o(e,t).load(i, n)
            }
            )
        }
        ,
        o.doGet = function(e) {
            return o.load(e, {
                method: "GET"
            })
        }
        ,
        o.doPost = function(e, t) {
            return o.load(e, {
                method: "POST",
                params: t
            })
        }
        ,
        o);
        function o(e, t) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.resolve = e,
            this.reject = t,
            this.xhr = null
        }
        t["default"] = n
    },
    "bc88cc10e20a281fbbb3": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function n() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n)
        };
        n.allVipTypes = [],
        t["default"] = n
    },
    "bdae3ab0d2fb7cb5b797": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.save = function(t, i) {
            i = i || "log.txt";
            var e = document.createElement("a");
            if ("download"in e) {
                var n = new Blob([t],{
                    type: "text/plain"
                });
                e.href = window.URL.createObjectURL(n),
                e.download = i,
                document.body.appendChild(e),
                e.click(),
                setTimeout(function() {
                    window.URL.revokeObjectURL(e.href),
                    document.body.removeChild(e)
                }, 0)
            } else if ("Blob"in window && navigator.msSaveBlob) {
                var o = new Blob([t],{
                    type: "text/plain"
                });
                navigator.msSaveBlob(o, i)
            } else {
                var r = document.createElement("iframe");
                r.style.display = "none",
                r.id = "iframe-save",
                r.src = 'javascript:(function () { document.open();document.domain="' + document.domain + '";document.close();})();',
                document.body.appendChild(r),
                r.onload = function() {
                    var e = r.contentDocument;
                    r.onload = null,
                    document.body.removeChild(r),
                    e.open("text/plain", "replace"),
                    e.write(t),
                    e.close(),
                    e.execCommand("SaveAs", !1, i)
                }
            }
        }
        ,
        o.prototype.upload = function() {}
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o)
        }
        t["default"] = new n
    },
    "bdf5dee806fd95ed0891": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = c(i("343def12cad299c54e12"))
          , o = c(i("790825d0dabf4060a0d9"))
          , r = c(i("dc90b36fbb67bb8c5ed9"))
          , a = c(i("fb885b8dee52c75a3d84"))
          , s = c(i("c779f0f9ff7f0eb554cb"))
          , l = c(i("96598f2d6ae9c8676ba4"));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var u, f = (function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(d, u = n["default"]),
        d.prototype.destroy = function() {
            clearTimeout(this._hideSign),
            this._handlers && (this._player.off(o["default"].CONTROL, this._handlers.onControl),
            this._player.off(o["default"].MOVIE_ENTER, this._handlers.onMovieEnter),
            this._handlers = null),
            this._view && (this._view.destroy(),
            this._view = null)
        }
        ,
        d.prototype.__initView = function() {
            var i = this;
            this._view = new r["default"](document.getElementsByClassName("M706C61796572-control-danmuSwitch")[0],a["default"].get("barrageArea"),d.SIZE_MAP.indexOf(parseInt(a["default"].get("barrageSize"))),a["default"].get("barrageAlpha"),d.SPEED_MAP.indexOf(parseInt(a["default"].get("barrageSpeed"))),a["default"].get("compereSwitch")),
            this._view.on(r["default"].EVENT_AREA, function(e) {
                i.__saveCookie("barrageArea", e),
                i._player.emitAsync(o["default"].BARRAGE_CHANE, {
                    type: "area",
                    data: e
                })
            }),
            this._view.on(r["default"].EVENT_SIZE, function(e) {
                var t = d.SIZE_MAP[e.value];
                i.__saveCookie("barrageSize", t, e.sensor),
                i._player.emitAsync(o["default"].BARRAGE_CHANE, {
                    type: "size",
                    data: t
                })
            }),
            this._view.on(r["default"].EVENT_ALPHA, function(e) {
                var t = e.value / 100;
                i.__saveCookie("barrageAlpha", t, e.sensor),
                i._player.emitAsync(o["default"].BARRAGE_CHANE, {
                    type: "alpha",
                    data: t
                })
            }),
            this._view.on(r["default"].EVENT_SPEED, function(e) {
                var t = d.SPEED_MAP[e.value];
                i.__saveCookie("barrageSpeed", t, e.sensor),
                i._player.emitAsync(o["default"].BARRAGE_CHANE, {
                    type: "speed",
                    data: t
                })
            }),
            this._view.on(r["default"].EVENT_COMPERE, function(e) {
                i.__saveCookie("compereSwitch", e),
                i._player.emitAsync(o["default"].COMPERE_SWITCH, e)
            })
        }
        ,
        d.prototype.__saveCookie = function(e, t) {
            var i = !(2 < arguments.length && arguments[2] !== undefined) || arguments[2];
            a["default"].set(e, t, {
                expires: 31536e6,
                path: "/",
                domain: "iqiyi.com"
            }),
            i && this.__sensorClick(e, t)
        }
        ,
        d.prototype.__sensorClick = function(e, t) {
            var i = {
                block: "bullet"
            };
            "bullet" === e ? i.rseat = t ? 1 : 2 : "barrageArea" === e ? i.rseat = "type" + ("full" == t ? 1 : "top" == a["default"].get("barrageArea") ? 2 : 3) : "barrageSize" === e ? i.rseat = "size" + (d.SIZE_MAP.indexOf(t) + 1) : "barrageAlpha" === e ? i.rseat = "trans" + (100 * t | 0) + "%" : "barrageSpeed" === e ? i.rseat = "speed" + (d.SPEED_MAP.indexOf(t) + 1) : "compereSwitch" === e && (i.rseat = t ? "host1" : "host2"),
            i.rpage = l["default"].getRpage(),
            this._player.emit(o["default"].SENSOR_CLICK, i)
        }
        ,
        d.prototype.__initEvent = function() {
            this._handlers = {},
            this._handlers.onControl = this.__onControl.bind(this),
            this._handlers.onMovieEnter = this.__onMovieEnter.bind(this),
            this._handlers.moviereset = this.__onMovieReset.bind(this),
            this._player.on(o["default"].CONTROL, this._handlers.onControl),
            this._player.on(o["default"].MOVIE_ENTER, this._handlers.onMovieEnter),
            this._player.on(o["default"].MOVIE_RESET, this._handlers.moviereset)
        }
        ,
        d.prototype.__onControl = function(e) {
            var t = this;
            e && e.type === o["default"].CONTROL_BARRSET_SWITCH && e.data && (clearTimeout(this._hideSign),
            e.data.value ? (this._view || this.__initView(),
            this._view.show()) : this._view && (this._hideSign = setTimeout(function() {
                t._view.hide()
            }, this._isIE || e.data.atonce ? 0 : 100))),
            e && e.type === o["default"].CONTROL_DANMU_SWITCH && (this._isBarrEnable = e.data.value,
            this.__sensorClick("bullet", this._isBarrEnable))
        }
        ,
        d.prototype.__onMovieEnter = function(e) {
            if (!this._sensored) {
                this._sensored = !0;
                var t = {
                    block: "bullet"
                };
                t.rpage = l["default"].getRpage(),
                t.bullet = this._isBarrEnable ? 1 : 2,
                t.bullettype = "" === a["default"].get("barrageArea") ? 1 : "top" == a["default"].get("barrageArea") ? 2 : "down" == a["default"].get("barrageArea") ? 3 : 1,
                t.bulletsize = d.SIZE_MAP.indexOf(parseInt(a["default"].get("barrageSize"))) + 1 || 3,
                t.bullettran = ("" === a["default"].get("barrageAlpha") ? 100 : 100 * parseFloat(a["default"].get("barrageAlpha"))) + "%",
                t.bulletspeed = d.SPEED_MAP.indexOf(parseInt(a["default"].get("barrageSpeed"))) + 1 || 3,
                t.bullethost = "false" !== a["default"].get("compereSwitch") && window.QL && QL.switcher && 1 === QL.switcher.chatMCSwitcher ? 1 : 2,
                this._player.emit(o["default"].SENSOR_PV, t)
            }
        }
        ,
        d.prototype.__onMovieReset = function(e) {
            console.log("__onMovieReset"),
            this._view && this._view.hide()
        }
        ,
        d);
        function d(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, u.call(this, e, t));
            return i._type = s["default"].BARRSET,
            i._view = null,
            i._handlers = null,
            i._hideSign = -1,
            i._isIE = navigator.userAgent.match(/Trident/),
            i._isBarrEnable = !0,
            i._sensored = !1,
            i.__initEvent(),
            i
        }
        (t["default"] = f).SIZE_MAP = [12, 18, 24, 30, 36],
        f.SPEED_MAP = [25e3, 2e4, 16e3, 1e4, 5e3]
    },
    "bef7a691bb63f7f92f11": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.apiStat = t.apiType = undefined;
        var n = function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("ced5a6888eb062195e56"));
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var r = (a.prototype.reqStart = function(e, t) {
            this.clear(),
            this._start_tm = (new Date).getTime(),
            this._req_url = e,
            this._req_params = t
        }
        ,
        a.prototype.reqSucc = function(e) {
            this._end_tm = (new Date).getTime(),
            this._status = 1,
            this._err_code = 200,
            this._err_text = "",
            this._res = e
        }
        ,
        a.prototype.reqFail = function(e, t) {
            this._end_tm = (new Date).getTime(),
            this._status = 2,
            this._err_code = e,
            this._err_text = t
        }
        ,
        a.prototype.parseFail = function(e) {
            this._status = 3,
            this._err_text = e
        }
        ,
        a.prototype.requesturl = function() {
            return this._req_url || ""
        }
        ,
        a.prototype.requestparams = function() {
            return this._req_params || {}
        }
        ,
        a.prototype.response = function() {
            return this._res || ""
        }
        ,
        a.prototype.timecost = function() {
            return this._end_tm - this._start_tm
        }
        ,
        a.prototype.errortext = function() {
            return this._err_text
        }
        ,
        a.prototype.errorcode = function() {
            return this._err_code
        }
        ,
        a.prototype.status = function() {
            return this._status
        }
        ,
        a.prototype.apilog = function() {
            var e = [];
            return 0 <= this._status && (e.push(this._formattime(this._start_tm) + " [" + this._type + "]"),
            e.push("\trequest: " + this._req_url),
            this._req_params && e.push("\tparams: " + JSON.stringify(this._req_params))),
            1 == this._status || 3 == this._status ? (e.push(this._formattime(this._end_tm) + " [" + this._type + "] succeed/" + this.timecost() + "ms"),
            e.push("\treponse: " + JSON.stringify(this._res)),
            3 == this._status && e.push("\tparse fail " + this.errortext())) : 2 == this._status && e.push(this._formattime(this._end_tm) + " [" + this._type + "] fail/" + this.timecost() + "ms " + this.errorcode() + "/" + this.errortext()),
            e.join("\n")
        }
        ,
        a.prototype._formattime = function(e) {
            var t = new Date(e);
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
        }
        ,
        a.prototype.pingbackQos = function() {
            1 == this._status && 0 < this.timecost() ? (n["default"].sendApiTimeCost(this._type, 0),
            n["default"].sendApiTimeCost(this._type, this._status, {
                tm: this.timecost()
            })) : 2 == this._status && 0 < this._start_tm ? (n["default"].sendApiTimeCost(this._type, 0),
            n["default"].sendApiTimeCost(this._type, this._status, {
                tm: -1,
                ec: this.errortext()
            })) : 3 == this._status && 0 < this.timecost() && (n["default"].sendApiTimeCost(this._type, 0),
            n["default"].sendApiTimeCost(this._type, this._status, {
                tm: this.timecost(),
                ec: this.errortext()
            }))
        }
        ,
        a.prototype.clear = function() {
            this._start_tm = 0,
            this._end_tm = 0,
            this._status = 0,
            this._err_code = "",
            this._err_text = "",
            this._req_url = "",
            this._req_params = null,
            this._res = ""
        }
        ,
        a);
        function a(e) {
            o(this, a),
            this._type = e
        }
        var s = (l.prototype.getStat = function(e) {
            return this._cache[e] || (this._cache[e] = new r(e)),
            this._cache[e]
        }
        ,
        l.prototype.getStatsLog = function() {
            var e = [];
            for (var t in this._cache)
                this._cache.hasOwnProperty(t) && e.push(this._cache[t].apilog());
            return e.join("\n\n")
        }
        ,
        l);
        function l() {
            o(this, l),
            this._cache = {}
        }
        t.apiType = {
            f4v: "v.f4v",
            initial: "initial",
            getlivetype: "getLiveType",
            userinfo: "info.action",
            vrs: "live",
            ckliven: "ckLiveN.action",
            flvlive: "flvlive"
        },
        t.apiStat = new s
    },
    "bfb5fa393ac48853921e": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALtJREFUSA1jYBgFBEKAESx/zsKT4d//WQwM/2UIqCdSmvEJAxNjGoPRie1MYB1UNRxkItChYDMZGFggToK63OQUxEcQQfLJM2b/YaEB8QH5RhHUCfUBFnVnzLcCXeGFRQaLEOM2BpOT3lgkGKjlA2CQYAe4fYDDRdiNwS1KLR/gtGHUApxBA5MYDSJYSOCkh34QQXMysPwGFbHgUhCnb0mUAJnJAC2LQJUDA0SARFNwKIdWODhkR4VRQgAAme0jj3OU/OIAAAAASUVORK5CYII="
    },
    "c0c26c21565c4a1b5a42": function(e, t, i) {
        "use strict";
        var n = i("7e90ea0061b5194ffb11")
          , o = /#|\.prototype\./
          , r = function r(e, t) {
            var i = s[a(e)];
            return i == c || i != l && ("function" == typeof t ? n(t) : !!t)
        }
          , a = r.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        }
          , s = r.data = {}
          , l = r.NATIVE = "N"
          , c = r.POLYFILL = "P";
        e.exports = r
    },
    "c138e55a31f3f8960e99": function(e, t, i) {
        "use strict";
        e.exports = function(i) {
            var a = [];
            return a.toString = function() {
                return this.map(function(e) {
                    var t = function s(e, t) {
                        var i = e[1] || ""
                          , n = e[3];
                        if (!n)
                            return i;
                        if (t && "function" == typeof btoa) {
                            var o = function a(e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(n)
                              , r = n.sources.map(function(e) {
                                return "/*# sourceURL=" + n.sourceRoot + e + " */"
                            });
                            return [i].concat(r).concat([o]).join("\n")
                        }
                        return [i].join("\n")
                    }(e, i);
                    return e[2] ? "@media " + e[2] + "{" + t + "}" : t
                }).join("")
            }
            ,
            a.i = function(e, t) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, n = 0; n < this.length; n++) {
                    var o = this[n][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (n = 0; n < e.length; n++) {
                    var r = e[n];
                    "number" == typeof r[0] && i[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = "(" + r[2] + ") and (" + t + ")"),
                    a.push(r))
                }
            }
            ,
            a
        }
    },
    "c3588537ba2b4b983642": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = p(i("343def12cad299c54e12"))
          , o = p(i("790825d0dabf4060a0d9"))
          , r = p(i("53065c83966dce0d1759"))
          , a = p(i("ac1ad70ff54a2cbc9cab"))
          , s = p(i("a9d727c62bb635f5caaf"))
          , l = p(i("fd0b44f556392d6a75ac"))
          , c = p(i("61637bf383ae9d72a949"))
          , u = p(i("41fc02f452bd7cebf8a1"))
          , f = p(i("c779f0f9ff7f0eb554cb"))
          , d = p(i("e2263676467d036c3349"));
        p(i("96598f2d6ae9c8676ba4"));
        function p(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var h, _ = (function y(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(g, h = n["default"]),
        g.prototype.destroy = function() {
            this._handlers && (this._player.off(o["default"].SENSOR_QOS, this._handlers.onSensorQos),
            this._player.off(o["default"].SENSOR_GOD, this._handlers.onSensorGod),
            this._player.off(o["default"].SENSOR_PV, this._handlers.onSensorPv),
            this._player.off(o["default"].SENSOR_CLICK, this._handlers.onSensorClick),
            this._handlers = undefined)
        }
        ,
        g.prototype.__initEvent = function() {
            this._handlers = {},
            this._handlers.onSensorQos = this.__onSensorQos.bind(this),
            this._handlers.onSensorGod = this.__onSensorGod.bind(this),
            this._handlers.onSensorPv = this.__onSensorPv.bind(this),
            this._handlers.onSensorClick = this.__onSensorClick.bind(this),
            this._player.on(o["default"].SENSOR_QOS, this._handlers.onSensorQos),
            this._player.on(o["default"].SENSOR_GOD, this._handlers.onSensorGod),
            this._player.on(o["default"].SENSOR_PV, this._handlers.onSensorPv),
            this._player.on(o["default"].SENSOR_CLICK, this._handlers.onSensorClick)
        }
        ,
        g.prototype.__onSensorQos = function(e) {
            this.__sensorGray(this._config.qos, this.__packArgs(e), "post")
        }
        ,
        g.prototype.__onSensorGod = function(e) {
            this.__sensorGray(this._config.god, this.__packArgs(e), "get")
        }
        ,
        g.prototype.__onSensorPv = function(e) {
            var t = void 0;
            d["default"].isPGC() && (t = this._config.pgc_pv),
            d["default"].isPPC() && (t = this._config.ppc_pv),
            t && this.__sensor(t, this.__packArgs2(e), "get")
        }
        ,
        g.prototype.__onSensorClick = function(e) {
            var t = void 0;
            d["default"].isPGC() && (t = this._config.pgc_click),
            d["default"].isPPC() && (t = this._config.ppc_click),
            t && this.__sensor(t, this.__packArgs2(e), "get")
        }
        ,
        g.prototype.__sensor = function(e, t, i) {
            l["default"].ajax({
                "url": e,
                "params": t,
                "method": i,
                "withCredentials": !1,
                "success": function(e) {},
                "failure": function() {}
            })
        }
        ,
        g.prototype.__sensorGray = function(e, t, i) {
            window.QYP && window.QYP.sensorEnabled && this.__sensor(e, t, i)
        }
        ,
        g.prototype.__packArgs = function(e) {
            var t = {}
              , i = this._player.getConfig().getEntryConfig("p1");
            for (var n in t.p = i && 0 < i.length ? i + "_1021" : "1_10_101_1021",
            t.t = "qlive",
            t.v = this._player.getConfig().getEnvConfig("version"),
            t.rn = Math.random(),
            t.u = r["default"].getFluid() || "",
            t.pu = a["default"].getUid() || "",
            t.dfp = s["default"].get() || "",
            t.roomid = window.QYP.roomId,
            t.qpid = window.QYP.qpId,
            e)
                e[n] !== undefined && (t[n] = e[n]);
            this._os || (this._os = c["default"].getInstance().detectOS()),
            t.os = this._os,
            this._si || (this._si = c["default"].getInstance().getBrowserName() + "_" + c["default"].getInstance().getVersion()),
            t.si = this._si,
            window.QYP.fps && (t.fps = window.QYP.fps),
            window.QYP.stype && (t.stype = window.QYP.stype),
            window.QYP.serverip && (t.serverip = window.QYP.serverip),
            window.QYP.bstp && (t.bstp = window.QYP.bstp),
            t.lvtp = this._player.getConfig()._entryConfig.programPlayerType,
            window.QYP.rate && (t.rate = window.QYP.rate);
            var o = "";
            return o = u["default"].isTWLocale() ? "0" : "1",
            o += this._player.isZTProgram() ? "1" : "0",
            o += this._player.isSportProgram() ? "1" : "0",
            o += "999",
            t.vfrm = o,
            t
        }
        ,
        g.prototype.__packArgs2 = function(e) {
            var t = {}
              , i = this._player.getConfig().getEntryConfig("p1");
            for (var n in t.p1 = i && 0 < i.length ? i : "1_10_101",
            t.u = r["default"].getFluid() || "",
            t.pu = a["default"].getUid() || "",
            t.ss = this._player.getConfig().getEntryConfig("ss") || "",
            t.ua_wb = navigator.userAgent,
            t.qpid = window.QYP.qpId,
            t.plav = this._player.getConfig().getEnvConfig("version"),
            d["default"].isPGC() ? (t.type = "pgc",
            t.zbzt = this._player.getLiveStatus(),
            t.rpage = this._player.getConfig().getEntryConfig("rpage") || "other",
            t.kbfl = this._player.getConfig().getEntryConfig("kbfl"),
            t.ejfl = this._player.getConfig().getEntryConfig("ejfl"),
            t.ppu = window.QYP.anchorId,
            t.roomid = window.QYP.roomId,
            t.actid = window.QYP.actId || "",
            t.videoid = window.QYP.actQpId || "",
            "time" == e.type && (t.glvtmxt = e.tm,
            delete e.type,
            delete e.tm)) : d["default"].isPPC() && (t.type = "ppc",
            t.loc = u["default"].isTWLocale() ? "tw" : "dl",
            "time" == e.type && (t.glvtmxt = e.tm,
            delete e.type,
            delete e.tm)),
            e)
                e[n] !== undefined && (t[n] = e[n]);
            return t
        }
        ,
        g);
        function g(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, g);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, h.call(this, null, e));
            return c["default"].getInstance().getFPS(),
            t._type = f["default"].SENSOR,
            t._config = t._player.getConfig().getEnvConfig("sensor"),
            t.__initEvent(),
            h.prototype.init.call(t),
            t
        }
        t["default"] = _
    },
    "c37548fd503444c94c09": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = i("05d80536c02f0c10b599")
          , o = function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("ad54687f75f9150df277"));
        var r = (a.prototype.check = function(e) {
            var t = !0;
            return !1 === this.alert ? (0 === this.stt && (this.stt = +new Date),
            +new Date - this.stt <= 1e3 ? (++this.count,
            this.count > this.limit && (this.deliver(e),
            this.autoReset && this.reset(),
            t = !1)) : this.reset()) : t = !1,
            t
        }
        ,
        a.prototype.deliver = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
            this.alert = !0,
            console.log("触发投递"),
            (0,
            o["default"])({
                method: "post",
                url: location.protocol + "//sensor-live.iqiyi.com/qos/a",
                data: {
                    p: this.p,
                    t: "qos",
                    rn: Math.random(),
                    u: (0,
                    n.getCookie)("QC005"),
                    pu: (0,
                    n.getCookie)("P00003"),
                    evetp: "9999",
                    content: JSON.stringify(e)
                }
            })
        }
        ,
        a.prototype.reset = function() {
            this.alert = !1,
            this.stt = 0,
            this.count = 0
        }
        ,
        a);
        function a() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this.p = e.p || "1_10_101_1021",
            this.limit = e.qps || 5,
            this.autoReset = e.autoReset || !1,
            this.stt = 0,
            this.count = 0,
            this.alert = !1
        }
        t["default"] = r
    },
    "c3b9dc21bd76ffaf751f": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABMklEQVQ4T62UrVLDUBCFv80MGSQOJDxBwwzFtjgkj4DHgELSSlwVHsM7oBosgZm8AZUFBY5pp1lmk/7kdmCaXHJNzN1vd0/OuULDRxrm4QK1HcF0hKSfvo1WQI32IXwDTWF6kkP1qAtyA1whSVqlydqEx1bUWkIJLwED9pHnngcw2oEwXkH1EYJrf6CNoA50DOyB+E5omgUd0G2Q8wKm/APYjkE6hVY5aP7NLpDXOw8NzTZy5hbOPmD2UNVK1Y2da7vV+mXKr7KlagBzfYeFFHYWpfqEJN1Fo5pAGc51HYPeQ/ANWYy8mNWcNpv1LlJjwHdg10lUqbrmhLZydgvBqZOoUvY9gPRhMnASJcmhx8pmKQagvVwzJ1GTAyQdlX/VZg3/umGv1BzWDHCtUXUNK+7wA/CMdBW0vJWFAAAAAElFTkSuQmCC"
    },
    "c4147e49039b1f52c431": function(e, t, i) {
        "use strict";
        var s = i("f7c33656140074fd558a")
          , l = i("38e2fc952b08ad92fe17")
          , c = i("1e962945d4ab7b72ce9d")
          , u = i("ef7ae18e665193aece2b");
        e.exports = function(e, t) {
            for (var i = l(t), n = u.f, o = c.f, r = 0; r < i.length; r++) {
                var a = i[r];
                s(e, a) || n(e, a, o(t, a))
            }
        }
    },
    "c509be60f977c55bba05": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABM0lEQVQ4T62UvU7DMBSFv5umVQeGbox06N5IFdm7scGbUDYWlHZkorwBvEErHoDOqZDyAEh0LBszpDGKmz8Qoo4Vr/b9fH3OuRYaXtIwjxKovB64ATgfPy9RS2QdmV5cAY7m0LoEldUWW0skvLAA+lMg2BeqLahHYAvxAok2lkAVgLwDx6Ai+Boj0S8J/kdXnpx3mNyCcwYMbaB/Aa8gfoDOKoOukPXY4smnHsgUPidaM+26hoKEXn2gacWBc/WCnXZ9wCRzoJag/QZsCveV14fOHahZHn5zoI6nn05M6T6uB84zMEPCNMeV0TPRsDQqg+5uwH2yB+ouC/eHkLyCDECsO+xD+wSSI2jNgcF+9q2B/gI4z+a9otjuHnmZWGiow1/5eZIu0IP4Oo9TPZcNjGsc+A2xam4V5yCEPwAAAABJRU5ErkJggg=="
    },
    "c5586ddc317ec36fc8d0": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("03a5eeee30e0865c3e7f"));
        i("1eaf8541db0a260d091b");
        var a, o = (function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(s, a = n["default"]),
        s.prototype.isHover = function() {
            return this._isHover
        }
        ,
        s.prototype.$$render = function(e) {
            var t = this;
            this._dom = this.__createDom("div", "M5b636210-notice"),
            e.appendChild(this._dom),
            this._dom.style["pointer-events"] = this._linkUrl ? "auto" : "none",
            this._dom.appendChild(this._bgDom = this.__createDom("div", "notice-bg")),
            this._dom.appendChild(this._iconDom = this.__createDom("img", "notice-icon")),
            this._dom.appendChild(this._cxtDom = this.__createDom("span", "notice-tf")),
            s.IE9 && (this._bgDom.style["background-color"] = "#6650FF"),
            this._linkUrl && (this._dom.appendChild(this._btnDom = this.__createDom("div", "notice-btn")),
            this._btnDom.appendChild(this._btnTf = this.__createDom("span", "notice-btn-tf")),
            this._btnTf.innerText = "查看",
            this._dom.addEventListener ? (this._dom.addEventListener("mouseover", function(e) {
                t._isHover = !0
            }),
            this._dom.addEventListener("mouseout", function(e) {
                t._isHover = !1
            }),
            this._dom.addEventListener("click", function(e) {
                window.open(t._linkUrl)
            })) : (this._dom.attachEvent("onmouseover", function(e) {
                t._isHover = !0
            }),
            this._dom.attachEvent("onmouseout", function(e) {
                t._isHover = !1
            }),
            this._dom.attachEvent("onclick", function(e) {
                window.location.href = t._linkUrl
            }))),
            this._iconDom.src = this._iconUrl,
            this._cxtDom.innerText = this._content,
            this._linkUrl && (this._btnDom.style.left = 47 + this._cxtDom.offsetWidth + 16 + "px"),
            this._width = 47 + this._cxtDom.offsetWidth + 16 + (this._linkUrl ? 63 : 0),
            this._bgDom.style.width = this._width + "px"
        }
        ,
        s.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = document.createElement(e);
            return t && (i.className = t),
            i
        }
        ,
        s);
        function s(e, t, i) {
            !function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s);
            var n = function r(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, a.call(this));
            return n._content = e,
            n._iconUrl = t,
            n._linkUrl = i,
            n._bgDom = null,
            n._iconDom = null,
            n._cxtDom = null,
            n._btnDom = null,
            n._btnTf = null,
            n._isHover = !1,
            n
        }
        (t["default"] = o).IE9 = /msie 9/.test(navigator.userAgent.toLowerCase())
    },
    "c56ea7011aca6b6c26e2": function(e, t, i) {
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, ".M5b636210-notice {\n  position: absolute;\n  width: 270px;\n  height: 42px;\n  cursor: pointer;\n}\n.M5b636210-notice > .notice-icon {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n}\n.M5b636210-notice > .notice-tf {\n  font-family: PingFangSC-Regular;\n  position: absolute;\n  top: 13px;\n  left: 47px;\n  font-size: 16px;\n  color: #FFF;\n  line-height: 16px;\n  letter-spacing: 0px;\n  text-align: left;\n  white-space: nowrap;\n}\n.M5b636210-notice > .notice-bg {\n  position: absolute;\n  display: inline-block;\n  top: 0px;\n  left: 0px;\n  width: 270px;\n  height: 42px;\n  background-image: linear-gradient(-138deg, #6650FF 0%, #D660FF 100%);\n  border-radius: 21px;\n}\n.M5b636210-notice > .notice-btn {\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  width: 54px;\n  height: 26px;\n  background: #00cc36;\n  border: 1px solid #00cc36;\n  border-radius: 14px;\n}\n.M5b636210-notice > .notice-btn > .notice-btn-tf {\n  position: absolute;\n  top: 6px;\n  left: 16px;\n  width: 24px;\n  height: 12px;\n  font-family: PingFangSC-Regular;\n  font-size: 12px;\n  color: #111111;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 12px;\n}\n", ""])
    },
    "c627e4f58ec4241c41a2": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = l(i("41fc02f452bd7cebf8a1"))
          , o = l(i("f90db8261bcdb8feae91"))
          , r = l(i("1e278b3d53391649aa62"))
          , a = l(i("a617b30e776d20e6554a"))
          , s = l(i("de5b87e340b4469b47e7"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c = (u.prototype.getLocaleConfig = function() {
            return this._config || (n["default"].isTWLocale() ? this.checkquidIn() ? this._config = s["default"] : this._config = r["default"] : this.checkquidIn() ? this._config = a["default"] : this._config = o["default"]),
            this._config
        }
        ,
        u.prototype.setLocale = function(e) {
            n["default"].setLocale(e)
        }
        ,
        u.prototype.getLocale = function() {
            return n["default"].local()
        }
        ,
        u.prototype.isTWLocale = function() {
            return n["default"].isTWLocale()
        }
        ,
        u.prototype.getConfig = function(e) {
            if (!e)
                return "";
            var t = this.getLocaleConfig()
              , i = "";
            if (t) {
                var n = e.split(".")
                  , o = 0;
                for (i = t; o < n.length; ) {
                    var r = n[o];
                    if (!i[r])
                        break;
                    i = i[r],
                    o++
                }
            }
            return i || ""
        }
        ,
        u.prototype.getRenderedString = function(e, t) {
            for (var i = 0; i < t.length; i++)
                e = e.replace("{" + i + "}", t[i] || "");
            return e
        }
        ,
        u.prototype.getRenderedStringByKeys = function(e, t) {
            for (var i = this.getConfig(e), n = 0; n < t.length; n++) {
                var o = this.getConfig(t[n])[0] || "";
                i = i.replace("{" + n + "}", o)
            }
            return i
        }
        ,
        u.prototype.getRenderedStringByKey2 = function(e, t) {
            for (var i = this.getConfig(e), n = 0; n < t.length; n++)
                i = i.replace("{" + n + "}", t[n]);
            return i
        }
        ,
        u.prototype.checkquidIn = function() {
            for (var e = [2613072823, 2613083023, 2613109523, 2599317823, 1225037123], t = window.QYP.qpId, i = 0; i < e.length; i++)
                if (e[i] == t)
                    return !0;
            return !1
        }
        ,
        u);
        function u() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u),
            this._locale = null,
            this._config = null
        }
        t["default"] = new c
    },
    "c74e6a3ef7795a2e1be9": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        i("df7347ce22d641c9edd8");
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("61637bf383ae9d72a949"));
        var o = (r.prototype.update = function() {
            this._downBtn && this._isAutoMove && this.__btnMove(this._downBtn, .3)
        }
        ,
        r.prototype.full = function(e) {
            this._box.style.left = this._box.style.top = e ? "60px" : "30px"
        }
        ,
        r.prototype.destroy = function() {
            this._removeAllEvents(),
            this._box = null,
            this._container.innerHTML = "",
            this._container = null,
            this._eventSprite = null
        }
        ,
        r.prototype.__init = function() {
            this._container.className = "M706C61796572-pano",
            this._box = document.createElement("div"),
            this._box.className = "panobox",
            this._container.appendChild(this._box),
            n["default"].getInstance().isIE() && n["default"].getInstance().getVersion() <= 8 && (this._box.style.display = "none"),
            this._box.innerHTML = '\n        <div class="pn-item pn-item-top">\n            <div class="pn-arr"></div>\n        </div>\n        <div class="pn-item pn-item-right">\n            <div class="pn-arr"></div>\n        </div>\n        <div class="pn-item pn-item-left">\n            <div class="pn-arr"></div>\n        </div>\n        <div class="pn-item pn-item-bottom">\n            <div class="pn-arr"></div>\n        </div>\n        '
        }
        ,
        r.prototype.__initEvent = function() {
            var t = this;
            if (!this._handlers) {
                this._handlers = {
                    dbclick: function(e) {
                        return e.stopPropagation()
                    },
                    mouseup: this.__onMouseUp.bind(this),
                    wheel: this.__onWheel.bind(this),
                    mousedown: this.__onDragDown.bind(this),
                    mousemove: this.__onDragMove.bind(this),
                    upmousedown: function(e) {
                        return t.__onBtnDown(e, 2)
                    },
                    downmousedown: function(e) {
                        return t.__onBtnDown(e, 1)
                    },
                    leftmousedown: function(e) {
                        return t.__onBtnDown(e, 4)
                    },
                    rightmousedown: function(e) {
                        return t.__onBtnDown(e, 3)
                    },
                    upmouseover: function(e) {
                        return t.__onBtnOver(e, 2)
                    },
                    downmouseover: function(e) {
                        return t.__onBtnOver(e, 1)
                    },
                    leftmouseover: function(e) {
                        return t.__onBtnOver(e, 4)
                    },
                    rightmouseover: function(e) {
                        return t.__onBtnOver(e, 3)
                    }
                };
                try {
                    var e = this._container.getElementsByClassName("pn-item-top")[0]
                      , i = this._container.getElementsByClassName("pn-item-bottom")[0]
                      , n = this._container.getElementsByClassName("pn-item-left")[0]
                      , o = this._container.getElementsByClassName("pn-item-right")[0];
                    this._addevent(this._box, "dbclick", this._handlers.dbclick),
                    this._addevent(document, "mouseup", this._handlers.mouseup),
                    this._addevent(this._eventSprite, "wheel", this._handlers.wheel),
                    this._addevent(this._eventSprite, "mousedown", this._handlers.mousedown),
                    this._addevent(this._eventSprite, "mousemove", this._handlers.mousemove),
                    this._addevent(e, "mousedown", this._handlers.upmousedown),
                    this._addevent(i, "mousedown", this._handlers.downmousedown),
                    this._addevent(n, "mousedown", this._handlers.leftmousedown),
                    this._addevent(o, "mousedown", this._handlers.rightmousedown),
                    this._addevent(e, "mousemove", this._handlers.upmousemove),
                    this._addevent(i, "mousemove", this._handlers.downmousemove),
                    this._addevent(n, "mousemove", this._handlers.leftmousemove),
                    this._addevent(o, "mousemove", this._handlers.rightmousemove)
                } catch (r) {
                    console.log(r)
                }
            }
        }
        ,
        r.prototype._removeAllEvents = function() {
            if (this._handlers) {
                var e = this._container.getElementsByClassName("pn-item-top")[0]
                  , t = this._container.getElementsByClassName("pn-item-bottom")[0]
                  , i = this._container.getElementsByClassName("pn-item-left")[0]
                  , n = this._container.getElementsByClassName("pn-item-right")[0];
                this._removeevent(this._box, "dbclick", this._handlers.dbclick),
                this._removeevent(document, "mouseup", this._handlers.mouseup),
                this._removeevent(this._eventSprite, "wheel", this._handlers.wheel),
                this._removeevent(this._eventSprite, "mousedown", this._handlers.mousedown),
                this._removeevent(this._eventSprite, "mousemove", this._handlers.mousemove),
                this._removeevent(e, "mousedown", this._handlers.upmousedown),
                this._removeevent(t, "mousedown", this._handlers.downmousedown),
                this._removeevent(i, "mousedown", this._handlers.leftmousedown),
                this._removeevent(n, "mousedown", this._handlers.rightmousedown),
                this._removeevent(e, "mousemove", this._handlers.upmousedown),
                this._removeevent(t, "mousemove", this._handlers.downmousedown),
                this._removeevent(i, "mousemove", this._handlers.leftmousedown),
                this._removeevent(n, "mousemove", this._handlers.rightmousedown),
                this._handlers = null
            }
        }
        ,
        r.prototype._addevent = function(e, t, i) {
            e && t && i && (e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, i))
        }
        ,
        r.prototype._removeevent = function(e, t, i) {
            e && t && i && (e.removeEventListener ? e.removeEventListener(t, i) : e.detackEvent("on" + t, i))
        }
        ,
        r.prototype.__onWheel = function(e) {
            e.preventDefault();
            var t = .1 * e.deltaY;
            0 < t && t < 10 && (t = 10),
            t < 0 && -10 < t && (t = -10),
            this._onChange(0, 0, t)
        }
        ,
        r.prototype.__onMouseUp = function() {
            this._isDrag = !1,
            this._downBtn && (clearTimeout(this._timeSign),
            this._isAutoMove || this.__btnMove(this._downBtn, 8),
            this._isAutoMove = !1,
            this._downBtn = 0)
        }
        ,
        r.prototype.__onDragDown = function(e) {
            this._isDrag = !0,
            this._dragX = e.clientX,
            this._dragY = e.clientY
        }
        ,
        r.prototype.__onDragMove = function(e) {
            if (this._isDrag) {
                var t = (this._dragX - e.clientX) / 10
                  , i = (this._dragY - e.clientY) / 10;
                this._dragX = e.clientX,
                this._dragY = e.clientY,
                this._onChange(t, i, 0)
            }
        }
        ,
        r.prototype.__onBtnDown = function(e, t) {
            var i = this;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
            clearTimeout(this._timeSign),
            this._downBtn = t,
            this._timeSign = setTimeout(function() {
                i._isAutoMove = !0
            }, 200)
        }
        ,
        r.prototype.__onBtnOver = function(e, t) {
            this._downBtn && (this._downBtn = t)
        }
        ,
        r.prototype.__btnMove = function(e, t) {
            1 === e ? this._onChange(0, t, 0) : 2 === e ? this._onChange(0, -t, 0) : 3 === e ? this._onChange(t, 0, 0) : 4 === e && this._onChange(-t, 0, 0)
        }
        ,
        r);
        function r(e, t, i) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._container = e,
            this._eventSprite = t,
            this._onChange = i,
            this._box = null,
            this._isDrag = !1,
            this._dragX = 0,
            this._dragY = 0,
            this._isAutoMove = !1,
            this._timeSign = -1,
            this._downBtn = 0,
            this.__init(),
            this.__initEvent()
        }
        t["default"] = o
    },
    "c779f0f9ff7f0eb554cb": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.getType = function(e) {
            return e ? e.getType() : null
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.ENGINE = "engine",
            this.CONTROL = "control",
            this.BARRAGE = "barrage",
            this.EFFECT = "effect",
            this.VRS = "vrs",
            this.USER = "user",
            this.FEEDBACK = "feedback",
            this.CAROUSEL = "carousel",
            this.SENSOR = "sensor",
            this.PINGBACK = "pingback",
            this.COMPERE = "compere",
            this.MSGWAY = "msgway",
            this.NOTIFICATION = "notification",
            this.ARES = "ares",
            this.BARRSET = "barrset",
            this.PANO = "pano",
            this.TRYWATCH_PGC = "tryWatchPgc",
            this.TRYWATCH_PPC = "tryWatchPpc"
        }
        t["default"] = new n
    },
    "c7e60acaac2b53f8789a": function(e, t, i) {
        "use strict";
        var n = 0
          , o = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(e === undefined ? "" : e) + ")_" + (++n + o).toString(36)
        }
    },
    "c97e2da1ae7f583527cb": function(e, t, i) {
        "use strict";
        i("54708c14d466c7781bbf")({
            target: "Function",
            proto: !0
        }, {
            bind: i("1056f768b57656bfd017")
        })
    },
    "c9c4b3da6ca44d8d481f": function(e, t, i) {
        var n = i("fe7c5965b255aa0a5065");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "ccaab819419a92ef1569": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.handleContextMenu = undefined;
        var a = r(i("790825d0dabf4060a0d9"))
          , s = r(i("ae19a1d24e6ded12b0b9"))
          , n = (r(i("fb885b8dee52c75a3d84")),
        r(i("46a6014a9c7af6bb18f4")),
        r(i("e2263676467d036c3349")),
        r(i("bdae3ab0d2fb7cb5b797")))
          , o = r(i("e7464dc3e62648edcd65"))
          , l = r(i("6dfc805bb169defe8df1"));
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.handleContextMenu = function c(e, t) {
            switch (t) {
            case "save_log":
                !function i(e) {
                    n["default"].save(s["default"].getPlayerLog(), "log.txt")
                }();
                break;
            case "upload_log":
                !function r(n) {
                    var e = s["default"].getPlayerLog();
                    if (FormData && Blob) {
                        var t = new FormData
                          , i = new Blob([e],{
                            type: "text/plain"
                        });
                        t.append("file", i, Date.now() + ".txt");
                        var o = new XMLHttpRequest;
                        o.open("POST", window.location.protocol + "//sensor-live.iqiyi.com/qos/f"),
                        o.onreadystatechange = function(e) {
                            var t = "";
                            if (4 === o.readyState && 200 === o.status) {
                                var i = JSON.parse(o.responseText || "{}");
                                i && "A00000" === i.code && (t = i.data.filePath,
                                n.emit(a["default"].SENSOR_QOS, {
                                    "file": t
                                }))
                            }
                        }
                        ,
                        o.send(t)
                    }
                }(e);
                break;
            case "feedback_log":
                o["default"].getInstance().show();
                break;
            default:
                l["default"].send()
            }
        }
    },
    "ced5a6888eb062195e56": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var r = _(i("1f080957c4fbd4f86028"))
          , a = _(i("53065c83966dce0d1759"))
          , s = _(i("fd0b44f556392d6a75ac"))
          , l = _(i("fb885b8dee52c75a3d84"))
          , n = _(i("162f473717848ae5cb34"))
          , c = _(i("ac1ad70ff54a2cbc9cab"))
          , u = _(i("472c8e0e64ce03027885"))
          , f = _(i("41fc02f452bd7cebf8a1"))
          , d = _(i("a9d727c62bb635f5caaf"))
          , o = _(i("fa4e6c91b6a23ac6e195"))
          , p = _(i("12343932e39887317ee6"))
          , h = _(i("c37548fd503444c94c09"));
        function _(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var g = window.location.protocol
          , y = g + "//msg.qy.net/core"
          , b = g + "//msg.qy.net/b"
          , m = g + "//msg.qy.net/qos"
          , v = void 0
          , A = void 0
          , E = void 0
          , T = -1
          , w = void 0
          , S = !1
          , C = "01010021010000000000";
        n["default"].os.ios ? C = n["default"].os.iosMobile ? "02030031010000000000" : "03030021010000000000" : n["default"].os.android && (C = n["default"].os.androidMobile ? "02020031010000000000" : "03020021010000000000");
        var P = "1"
          , R = "10"
          , I = "101";
        n["default"].browser.iPad ? (P = "2",
        R = "20",
        I = "202") : (n["default"].os.ios || n["default"].os.android) && (P = "2",
        R = "20",
        I = "202");
        var L = "window";
        n["default"].os.ios || n["default"].os.mac ? L = "mac" : n["default"].os.android && (L = "android");
        var O = 0
          , k = new h["default"]({
            p: R,
            qps: 10,
            autoReset: !1
        })
          , N = function N(e) {}
          , x = function x(e) {
            var t = {
                "u": a["default"].getFluid() || "",
                "pu": c["default"].getUid() || "",
                "rn": Math.random(),
                "p1": "20" == R ? "2_20_201" : "1_10_101",
                "bstp": "101",
                "v": v,
                "dfp": d["default"].get(),
                "de": A,
                "stime": (new Date).getTime(),
                "t": 9,
                "rt": "vi",
                "ri": e.type,
                "st": e.status
            };
            e.ec !== undefined && (t.ec = e.ec),
            e.tm !== undefined && (t.tm = e.tm),
            s["default"].beacon(t, m, !1)
        }
          , M = function M(o) {
            c["default"].isVip(function(e) {
                var t = w.getProgramInfo()
                  , i = {
                    "ptid": C,
                    "pf": P,
                    "p": R,
                    "p1": I,
                    "c1": "101221",
                    "c2": t.channelId || "",
                    "lvbck": (t.playType == t.Type_Vod ? "1011" : "1012") || "",
                    "r": t.tvid || "",
                    "aid": "",
                    "u": a["default"].getFluid() || "",
                    "pu": c["default"].getUid() || "",
                    "v": v,
                    "ra": t.definition.currentDefinition.bid || "",
                    "ce": a["default"].getWeid(),
                    "ve": a["default"].getEid(),
                    "vfrm": "",
                    "vfrmtp": "",
                    "hu": e ? 1 : -1,
                    "ht": t.charge || "0",
                    "mod": f["default"].local() || "",
                    "islocal": p["default"].isHCDNLiveType() ? 4 : 3,
                    "rfr": window.document.referrer || "",
                    "lrfr": l["default"].get("QC007") || "",
                    "nu": a["default"].getIsNewUser() ? 1 : 0,
                    "ispre": t && t.isTryWatch ? 1 : 0,
                    "z": "",
                    "stime": (new Date).getTime(),
                    "os": L,
                    "purl": window.location.href,
                    "plyrtp": "",
                    "videotp": t.pano ? 1 : 0,
                    "vfm": l["default"].get("QP005") || "",
                    "rn": Math.random()
                };
                (0,
                r["default"])(i, {
                    "dfp": d["default"].get()
                });
                try {
                    (0,
                    r["default"])(i, {
                        "as": u["default"].cmd5ly(i.c2 + "" + i.r + i.ptid + i.u + i.ve + "ChEnYH0426Live3D9DdjkD9dD")
                    })
                } catch (n) {}
                (0,
                r["default"])(i, o),
                s["default"].beacon(i, y)
            })
        }
          , D = function D(o) {
            c["default"].isVip(function(e) {
                var t = w.getProgramInfo()
                  , i = {
                    "pf": P,
                    "p": R,
                    "p1": I,
                    "p2": (t.playType == t.Type_Vod ? "1011" : "1012") || "",
                    "c1": "101221",
                    "c2": t.channelId || "",
                    "lctype": t.lctype || "",
                    "livetype": t.liveType || "",
                    "r": t.tvid || "",
                    "nu": a["default"].getIsNewUser() ? 1 : 0,
                    "u": a["default"].getFluid() || "",
                    "pu": c["default"].getUid() || "",
                    "ra": t.definition.currentDefinition.bid || "",
                    "ce": a["default"].getWeid(),
                    "ve": a["default"].getEid(),
                    "isdm": O || "",
                    "hu": e ? 1 : -1,
                    "ht": t.charge || "0",
                    "v": v,
                    "purl": window.location.href,
                    "rfr": window.document.referrer,
                    "rn": Math.random()
                };
                (0,
                r["default"])(i, {
                    "dfp": d["default"].get()
                });
                try {
                    (0,
                    r["default"])(i, {
                        "as": u["default"].cmd5ly(i.c2 + "" + i.r + i.ptid + i.u + i.ve + "ChEnYH0426Live3D9DdjkD9dD")
                    })
                } catch (n) {}
                (0,
                r["default"])(i, o),
                s["default"].beacon(i, b)
            })
        }
          , V = function V(e) {
            k.check(e) && (E && !E.core || M(e),
            E && !E.b || D(e))
        };
        t["default"] = {
            B: "b",
            CORE: "core",
            init: function(e, t) {
                w = e,
                v = t,
                A = (T = 0,
                o["default"])(a["default"].getJsuid() + (new Date).getTime())
            },
            setSwitchers: function(e) {
                E = e
            },
            sendADStartPlayPingback: function() {
                V({
                    t: 15
                })
            },
            sendStartPlayPingback: function() {
                V({
                    t: 1
                })
            },
            sendTimingPingback: function() {
                var e = T = 0
                  , t = function t() {
                    w.isPlaying() ? 15e3 == (e += 1e3) ? V({
                        t: 2,
                        tm: 15
                    }) : 6e4 == e ? V({
                        t: 2,
                        tm: 60
                    }) : e % 12e4 == 0 && V({
                        t: 2,
                        tm: 120
                    }) : w.isPaused(),
                    clearTimeout(T),
                    T = setTimeout(t, 1e3)
                };
                t()
            },
            sendEndPlayPingback: function(e) {},
            sendWaitingPingback: function(e) {
                e ? S || (S = !0,
                V({
                    t: 8,
                    jamtp: 1,
                    rd: "ad"
                })) : S || (S = !0,
                V({
                    t: 8,
                    jamtp: 1,
                    rd: "video"
                }))
            },
            sendPlayingPingback: function() {
                S = !1
            },
            sendADPlayCount: function() {
                V({
                    t: 11,
                    ct: "广告播放基数"
                })
            },
            sendMoviePlayCount: function() {
                V({
                    t: 11,
                    ct: "正片播放基数"
                })
            },
            sendDelayPlayCount: function() {
                V({
                    t: 11,
                    ct: "延迟播放基数"
                })
            },
            setisdm: function(e) {
                O = e
            },
            sendUserAction: function(e) {
                N({
                    rseat: e
                })
            },
            sendApiTimeCost: function(e, t) {
                var i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : {}
                  , n = {
                    type: e,
                    status: t
                };
                i.ec !== undefined && (n.ec = i.ec),
                i.tm !== undefined && (n.tm = i.tm),
                x(n)
            },
            destroy: function() {
                clearTimeout(T)
            }
        }
    },
    "cf75a731eb9f59898fe8": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.livePlayer = undefined,
        i("aae92b552395e25f956c");
        var n = l(i("5df575fb58162f755572"))
          , o = l(i("790825d0dabf4060a0d9"))
          , r = l(i("46a6014a9c7af6bb18f4"))
          , a = l(i("48978116bed354cb6d8f"))
          , s = l(i("96598f2d6ae9c8676ba4"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        i("1e3c198142669569cbfc"),
        i("b2d135ecb4bc86e80f2f");
        var c = {};
        c.version = r["default"].version,
        c.event = o["default"],
        c.updatePath = "";
        var u = [];
        if (c.createLivePlayer = function(e, t) {
            e.status != undefined && 1 == e.status && 0 < parseInt(e.tvid) && s["default"].setQPgot(!0);
            var i = new n["default"](e,t);
            return i.once("destroy", function() {
                u.splice(u.indexOf(i), 1),
                i = null
            }),
            u.push(i),
            i
        }
        ,
        c.getLivePlayers = function() {
            return u
        }
        ,
        c.getCurrentLivePlayer = function() {
            return 0 < u.length ? u[u.length - 1] : null
        }
        ,
        c.getPlayerById = function(e) {
            for (var t = 0; e && t < u.length; t++) {
                var i = u[t]
                  , n = i.getConfig()
                  , o = n.getEntryConfig("container")
                  , r = n.getEntryConfig("parentId");
                if (e == o.id || e == r)
                    return i
            }
            return null
        }
        ,
        c.getPlayerByContainer = function(e) {
            for (var t = 0; e && t < u.length; t++) {
                var i = u[t]
                  , n = i.getConfig()
                  , o = n.getEntryConfig("container")
                  , r = n.getEntryConfig("parentId");
                if (e == o.id || r && e == document.getElementById(r))
                    return i
            }
            return null
        }
        ,
        c.destroyPlayer = function(e) {
            e && (e.destroy(),
            u.splice(players.indexOf(e), 1),
            e = null)
        }
        ,
        c.ready = function(e, t) {
            if (t == undefined || t <= 0)
                return e();
            if (0 < t) {
                var i = c.updatePath && c.updatePath.path;
                if (i) {
                    var n = window.versionInfo && window.versionInfo.jsVersion || "";
                    return n && (i += "?v=" + n),
                    a["default"].seriesLoadScripts(i, e)
                }
            }
            return e()
        }
        ,
        c.load = function(e, t) {
            if (0 < parseInt(e.tvid) && s["default"].setQPgot(!0),
            0 < u.length)
                return u[0].load(Object.assign({}, e, t)),
                u[0];
            console.error("播放器实例不存在 load方法找不到")
        }
        ,
        /iqiyitestmode/.test(location.href)) {
            var f = document.createElement("script");
            f.src = "//static.iqiyi.com/js/h5common/pageDebug.v2.min.js",
            (document.head || document.documentElement).appendChild(f)
        } else if (/devtool/i.test(location.href)) {
            var d = document.createElement("script");
            d.src = "//static.iqiyi.com/js/qlive_h5/tools/vconsole.min.js",
            d.onload = function() {
                window.VConsole && new VConsole
            }
            ,
            (document.head || document.documentElement).appendChild(d)
        }
        t.livePlayer = c
    },
    "d106339100d5557eedda": function(e, t, i) {
        "use strict";
        var n = i("6b0eb2cb0eb384618cfe");
        e.exports = function(e) {
            if (!n(e))
                throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    "d250e0db234b92e363b8": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function n(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            this.qipuId = e.qipuId,
            this.properTitle = e.properTitle,
            this.shortDisplayName = e.shortDisplayName,
            this.duration = e.duration,
            this.displayPlayCount = e.displayPlayCount,
            this.cover = e.cover,
            this.deleted = e.deleted,
            this.isPlaying = e.isPlaying
        };
        t["default"] = n
    },
    "d280362e5865b5c09927": function(o, e, t) {
        "use strict";
        (function(e) {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , i = "object"
              , n = function n(e) {
                return e && e.Math == Math && e
            };
            o.exports = n(("undefined" == typeof globalThis ? "undefined" : t(globalThis)) == i && globalThis) || n(("undefined" == typeof window ? "undefined" : t(window)) == i && window) || n(("undefined" == typeof self ? "undefined" : t(self)) == i && self) || n((void 0 === e ? "undefined" : t(e)) == i && e) || Function("return this")()
        }
        ).call(this, t("698d75b157f24ae829cc"))
    },
    "d2d397351e5e28db50b1": function(e, t, i) {
        "use strict";
        var n = i("7e90ea0061b5194ffb11");
        e.exports = !n(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "d49b774756187ce732a3": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0;
        var _platform = __webpack_require__("162f473717848ae5cb34")
          , _authsrc = __webpack_require__("3dec7d080e821aa42743")
          , _authsrc2 = _interopRequireDefault(_authsrc)
          , _i18n = __webpack_require__("41fc02f452bd7cebf8a1")
          , _i18n2 = _interopRequireDefault(_i18n)
          , _authkey = __webpack_require__("472c8e0e64ce03027885")
          , _authkey2 = _interopRequireDefault(_authkey)
          , _dfp = __webpack_require__("a9d727c62bb635f5caaf")
          , _dfp2 = _interopRequireDefault(_dfp)
          , _uuid = __webpack_require__("53065c83966dce0d1759")
          , _uuid2 = _interopRequireDefault(_uuid)
          , _LiveSettings = __webpack_require__("6fb27e928f7d30b6ac68")
          , _LiveSettings2 = _interopRequireDefault(_LiveSettings)
          , _http = __webpack_require__("fd0b44f556392d6a75ac")
          , _http2 = _interopRequireDefault(_http)
          , _url = __webpack_require__("9dc446da53b44c304edf")
          , _url2 = _interopRequireDefault(_url)
          , _cookies = __webpack_require__("fb885b8dee52c75a3d84")
          , _cookies2 = _interopRequireDefault(_cookies)
          , _md = __webpack_require__("fa4e6c91b6a23ac6e195")
          , _md2 = _interopRequireDefault(_md)
          , _PlayerConst = __webpack_require__("790825d0dabf4060a0d9")
          , _PlayerConst2 = _interopRequireDefault(_PlayerConst)
          , _userInfo = __webpack_require__("bc88cc10e20a281fbbb3")
          , _userInfo2 = _interopRequireDefault(_userInfo)
          , _ErrorCode = __webpack_require__("4a077be629d240592d7a")
          , _ErrorCode2 = _interopRequireDefault(_ErrorCode)
          , _GlobalInfo = __webpack_require__("458af3e271aa64a9b91f")
          , _GlobalInfo2 = _interopRequireDefault(_GlobalInfo)
          , _ProgramType = __webpack_require__("e2263676467d036c3349")
          , _ProgramType2 = _interopRequireDefault(_ProgramType)
          , _PluginType = __webpack_require__("c779f0f9ff7f0eb554cb")
          , _PluginType2 = _interopRequireDefault(_PluginType)
          , _apiStat = __webpack_require__("bef7a691bb63f7f92f11")
          , _ProgramStatus = __webpack_require__("96598f2d6ae9c8676ba4")
          , _ProgramStatus2 = _interopRequireDefault(_ProgramStatus);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var VrsRequest = function() {
            function VrsRequest(e, t) {
                _classCallCheck(this, VrsRequest),
                this._parmas = e,
                this._player = t,
                this._complete = e.complete,
                window.QYP.roomId = this._parmas.roomId,
                this._retryTime = 0,
                this._parmas && this._parmas.roomId && !_ProgramStatus2["default"].getQPgot() ? this.getQPId() : (this.request(),
                _ProgramStatus2["default"].setQPgot(!1))
            }
            return VrsRequest.prototype.getQPId = function() {
                var n = this
                  , o = this
                  , r = function r(e) {
                    var t = o._player.getConfig().getEnvConfig("api").secKey
                      , i = e;
                    return i.sort(),
                    (0,
                    _md2["default"])(i.join("|") + "|" + t)
                }
                  , e = {
                    liveId: this._parmas.roomId,
                    tl: "player",
                    deviceId: _uuid2["default"].getFluid(),
                    platform: "1_10_101_1021",
                    liveType: 1
                }
                  , t = [];
                for (var i in e)
                    e.hasOwnProperty(i) && t.push(i + "=" + e[i]);
                e.sn = r(t);
                var a = "//apis-live.iqiyi.com/v1/live/initial";
                _apiStat.apiStat.getStat(_apiStat.apiType.initial).reqStart(a),
                _http2["default"].ajax({
                    "url": a,
                    "method": "POST",
                    "dataType": "json",
                    "withCredentials": !1,
                    "params": e,
                    "success": function(e) {
                        _apiStat.apiStat.getStat(_apiStat.apiType.initial).reqSucc(e),
                        e && "A00000" == e.code && e.data && e.data.programInfo ? (_apiStat.apiStat.getStat(_apiStat.apiType.initial).pingbackQos(),
                        n._parmas.qpId = e.data.programInfo.qipuId,
                        window.QYP.qpId = n._parmas.qpId,
                        window.QYP.showPopups = e.data.chatInfo.showPopups,
                        n.request()) : (_apiStat.apiStat.getStat(_apiStat.apiType.initial).parseFail(e && e.code || "invalid code"),
                        _apiStat.apiStat.getStat(_apiStat.apiType.initial).pingbackQos(),
                        n._complete({
                            error: !0,
                            code: _ErrorCode2["default"].ASK_QPID_DEFAULT_ERROR,
                            realCode: "askQpIds." + (e && e.code || ""),
                            message: "request for qipu id fail " + (e ? e.code : "no data")
                        }))
                    },
                    "failure": function(e, t, i) {
                        _apiStat.apiStat.getStat(_apiStat.apiType.initial).reqFail(i, e),
                        _apiStat.apiStat.getStat(_apiStat.apiType.initial).pingbackQos(),
                        n._complete({
                            error: !0,
                            code: _ErrorCode2["default"].ASK_QPID_DEFAULT_ERROR,
                            message: "request for qipu id fail " + n._parmas.roomId
                        })
                    }
                })
            }
            ,
            VrsRequest.prototype.request = function() {
                var o = this
                  , r = 0
                  , a = 0
                  , s = ""
                  , e = _platform.os.ios || _platform.os.android ? "PAD_WEB_QIYI" : "PC_QIYI_3"
                  , t = void 0
                  , l = void 0
                  , i = void 0;
                if (_platform.os.ios || _platform.os.android)
                    t = _i18n2["default"].isTWLocale() ? _authsrc2["default"].aPad_tw : _authsrc2["default"].aPad,
                    i = _authkey2["default"].cmd5ver,
                    l = _authkey2["default"].cmd5ly;
                else if (window.ArrayBuffer && window.Uint8Array)
                    t = _i18n2["default"].isTWLocale() ? _authsrc2["default"].win_tw : _authsrc2["default"].win,
                    i = _authkey2["default"].cmd5ver,
                    l = _authkey2["default"].cmd5ly;
                else {
                    t = _i18n2["default"].isTWLocale() ? _authsrc2["default"].flash_tw : _authsrc2["default"].flash;
                    var n = this._player.getPlugin(_PluginType2["default"].ENGINE);
                    if (i = n.getVFSignVer(),
                    l = n.getVFSign.bind(n),
                    "" == i || "" == l)
                        return void setTimeout(function() {
                            o.request()
                        }, 1e3)
                }
                var c = (0,
                _md2["default"])(this._parmas.qpId + (new Date).getTime() + _uuid2["default"].getJsuid())
                  , u = ["lp=" + this._parmas.qpId, "src=" + t, "uid=" + this.getUserInfo().uid, "rateVers=" + e, "k_uid=" + _uuid2["default"].getJsuid(), "qdx=n", "qdv=3", "dfp=" + _dfp2["default"].get(), "qd_v=" + i, "k_ft2=0", "ve=" + c];
                _ProgramType2["default"].isPGC() ? (u.push("k_ft1=1126999418470400"),
                u.push("k_ft4=224")) : _ProgramType2["default"].isPPC() && (u.push("k_ft1=141287244169216"),
                u.push("k_ft4=1")),
                0 < parseInt(this._parmas.channelId) && u.push("lc=" + this._parmas.channelId),
                _LiveSettings2["default"].isBoss() && u.push("vv=821d3c731e374feaa629dcdaab7c394b");
                var f = function f() {
                    if (0 < _userInfo2["default"].allVipTypes.length)
                        for (var e = 0; e < _userInfo2["default"].allVipTypes.length; e++)
                            u.push("ut=" + _userInfo2["default"].allVipTypes[e]);
                    for (var t = 0; t < u.length; t++)
                        if (u[t] && 0 == u[t].indexOf("v=")) {
                            u.splice(t, 1);
                            break
                        }
                    u.push("v=1");
                    var i = u.join("&");
                    i += "&k_err_retries=" + r,
                    r++;
                    var n = window.location.protocol + "//live.video.iqiyi.com/jp/live?" + i;
                    _http2["default"].jsonp({
                        "url": n,
                        "beforeSend": function(e) {
                            e.url += s ? "&tm=" + s : "&tm=" + Math.floor((new Date).getTime() / 1e3);
                            var t = _url2["default"].parse(e.url).host
                              , i = "iloveiqiyi";
                            try {
                                i = l(e.url.replace(new RegExp("^(http|https)://" + t,"ig"), ""))
                            } catch (n) {
                                console.error("cmd5x: " + (n.message ? n.message : n))
                            }
                            return e.url += "&vf=" + i,
                            _apiStat.apiStat.getStat(_apiStat.apiType.vrs).reqStart(e.url),
                            e
                        },
                        "success": function(e) {
                            if (_apiStat.apiStat.getStat(_apiStat.apiType.vrs).reqSucc(e),
                            e && e.hasOwnProperty("code"))
                                if ("A00020" === e.code && a < 3)
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).parseFail(e.code),
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).pingbackQos(),
                                    d();
                                else if ("A00000" != e.code) {
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).parseFail(e.code),
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).pingbackQos();
                                    var t = e.code;
                                    o._sendQos({
                                        "evetp": 4e3,
                                        "content": JSON.stringify({
                                            "type": "vrs",
                                            "msg": t,
                                            "ve": c
                                        })
                                    }),
                                    t = o.getErrorCode(e.code),
                                    o._complete({
                                        error: !0,
                                        code: t,
                                        realCode: e.code,
                                        message: e && e.ctl && e.ctl.msg || ""
                                    })
                                } else
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).pingbackQos(),
                                    e.hasOwnProperty("data") && e.data.hasOwnProperty("program") && e.data.program.hasOwnProperty("progress") && 0 !== e.data.program.progress && 1 !== e.data.program.progress && (_GlobalInfo2["default"].firstVrs && o._sendQos({
                                        "evetp": 2019,
                                        "content": JSON.stringify({
                                            "type": "request",
                                            "msg": "first_request_vrs",
                                            "ve": c
                                        })
                                    }),
                                    o._sendQos({
                                        "evetp": 600,
                                        "content": JSON.stringify({
                                            "type": "request",
                                            "msg": "request_vrs",
                                            "ve": c
                                        })
                                    })),
                                    o._complete({
                                        error: !1,
                                        data: e
                                    });
                            else {
                                if (e) {
                                    var i = JSON.stringify(e);
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).parseFail(i)
                                } else
                                    _apiStat.apiStat.getStat(_apiStat.apiType.vrs).parseFail("no code");
                                var n;
                                _apiStat.apiStat.getStat(_apiStat.apiType.vrs).pingbackQos(),
                                n = o.verifyQpId(o._parmas.qpId) ? _ErrorCode2["default"].VRS_DEFAULT_ERROR : _ErrorCode2["default"].VRS_QPID_WRONG,
                                o._complete({
                                    error: !0,
                                    code: n,
                                    realCode: "nocode",
                                    message: "response has no code"
                                })
                            }
                        },
                        "failure": function(e, t, i) {
                            _apiStat.apiStat.getStat(_apiStat.apiType.vrs).reqFail(i, e),
                            _apiStat.apiStat.getStat(_apiStat.apiType.vrs).pingbackQos(),
                            o._sendQos({
                                "evetp": 4e3,
                                "content": JSON.stringify({
                                    "type": "vrs",
                                    "msg": _ErrorCode2["default"].VRS_DEFAULT_ERROR,
                                    "ve": c
                                })
                            }),
                            o._complete({
                                error: !0,
                                code: _ErrorCode2["default"].VRS_DEFAULT_ERROR,
                                readCode: "nocode",
                                message: "request fail"
                            })
                        }
                    })
                }
                  , d = function d() {
                    a++,
                    _http2["default"].ajax({
                        url: "//data.video.iqiyi.com/t",
                        dataType: "json",
                        withCredentials: !1,
                        success: function(e) {
                            e && e.hasOwnProperty("t") ? (s = e.t,
                            f()) : o._complete({
                                error: !0,
                                code: _ErrorCode2["default"].VRS_A00020,
                                message: "no t field"
                            })
                        },
                        failure: function() {
                            o._complete({
                                error: !0,
                                code: _ErrorCode2["default"].VRS_A00020,
                                message: "request fail"
                            })
                        }
                    })
                }
                  , p = this._player.$user;
                p ? p.waitInit(f) : f()
            }
            ,
            VrsRequest.prototype.verifyQpId = function(e) {
                return "" != (e = String(e)) && e != undefined && (!(e.length < 2) && "23" == e.substr(e.length - 2, 2))
            }
            ,
            VrsRequest.prototype.getErrorCode = function(e) {
                return _ErrorCode2["default"]["VRS_" + e] ? _ErrorCode2["default"]["VRS_" + e] : _ErrorCode2["default"].VRS_DEFAULT_ERROR
            }
            ,
            VrsRequest.prototype.getUserInfo = function getUserInfo() {
                var userInfo = {
                    uid: "",
                    name: "",
                    email: ""
                }
                  , p00002 = _cookies2["default"].get("P00002");
                return null !== p00002 && "" !== p00002 && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"),
                userInfo.uid = p00002.uid || "",
                userInfo.name = p00002.nickname || "",
                userInfo.email = p00002.email || ""),
                userInfo
            }
            ,
            VrsRequest.prototype._sendQos = function(e) {
                this._player.emit(_PlayerConst2["default"].SENSOR_QOS, e)
            }
            ,
            VrsRequest
        }();
        exports["default"] = VrsRequest
    },
    "d4f9bfb8bb6ad4603c06": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAOElEQVQokWNgwAKULsvVK1+W+690Wa4emzwTNkFCgI6alC/L/Ve+LPef5jaxkKIY5qLBHnqDWxMA6yoLi30pSRkAAAAASUVORK5CYII="
    },
    "d57268024f2c01907ebc": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var o = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("df793c94f311ce3878ff"));
        var n = (r.prototype.getWidth = function() {
            return this._width
        }
        ,
        r.prototype.getX = function() {
            return r.LOW ? this._lowX : this._dom.getBoundingClientRect().left - this._dom.parentNode.getBoundingClientRect().left
        }
        ,
        r.prototype.start = function(e, t, i) {
            this._isStart = !0,
            this.__render(e),
            this.refreshMove(i, t)
        }
        ,
        r.prototype.refreshMove = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : -1e4;
            -1e4 == t && (t = this.getX()),
            this._speed = e,
            this._moveTime = (this._width + t + 10) / (60 * e),
            r.LOW ? (this._lowX = t,
            this._dom.style.left = t + "px") : (this._dom.style.transition = "none inline",
            this._dom.style.transform = "translateX(" + t + "px)")
        }
        ,
        r.prototype.animation = function() {
            r.LOW ? 0 < this._moveTime && (this._lowX -= this._speed,
            this._dom.style.left = this._lowX + "px") : 0 < this._moveTime && (this._dom.style.transition = "transform " + this._moveTime + "s linear",
            this._dom.style.transform = "translateX(-" + (this._width + 10) + "px)",
            this._moveTime = 0)
        }
        ,
        r.prototype.recover = function() {
            this._moveTime = 0,
            this._isStart = !1,
            this._dom.style.transition = "none inline",
            this._dom.parentNode && this._dom.parentNode.removeChild(this._dom)
        }
        ,
        r.prototype.destroy = function() {
            this._dom && this._dom.parentNode && this._dom.parentNode.removeChild(this._dom),
            this._isDestroy = !0,
            this._moveTime = 0
        }
        ,
        r.prototype.__render = function(e) {
            var t = this;
            if (t._dom)
                e.appendChild(t._dom);
            else {
                var i = null
                  , n = null;
                t._dom = t.__createDom("div", "cp-item"),
                t._dom.appendChild(i = t.__createDom("div", "cp-bg")),
                t._dom.appendChild(n = t.__createDom("img", "cp-pic")),
                t._dom.appendChild(t.__createDom("div", "cp-icon")),
                e.appendChild(t._dom),
                t._width = t.__renderContent() + 10,
                t._width < o["default"].ITEM_MIN_WIDTH && t.__childOffset((o["default"].ITEM_MIN_WIDTH - t._width) / 2),
                t._width = Math.max(t._width, o["default"].ITEM_MIN_WIDTH),
                n.src = t._picUrl,
                i.style.width = t._width - 30 + "px"
            }
        }
        ,
        r.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = document.createElement(e);
            return t && (i.className = t),
            i
        }
        ,
        r.prototype.__renderContent = function() {
            for (var e = 82, t = "", i = "", n = "", o = 0, r = this._content.length; o < r; o++)
                "[" === (t = this._content.charAt(o)) && o >= this._name.length ? (i += n,
                n = "[") : 0 < n.length && "]" === t ? (n += "]",
                0 < i.length && (e = this.__createContentLabel(e, i),
                i = ""),
                e = this.__createContentFace(e, n),
                n = "") : 0 < n.length ? n += t : i += t,
                o === r - 1 && 0 < (i += n).length && (e = this.__createContentLabel(e, i),
                i = "");
            return e
        }
        ,
        r.prototype.__createContentLabel = function(e, t) {
            var i = this.__createDom("span", "cp-tf");
            return i.style.left = e + "px",
            i.innerText = t,
            this._dom.appendChild(i),
            e += i.offsetWidth,
            this._contentList.push(i),
            0 | e
        }
        ,
        r.prototype.__createContentFace = function(e, t) {
            var i = "//www.iqiyipic.com/qlive/fix/img/emoji/" + t.substr(1, t.length - 2) + ".png"
              , n = this.__createDom("div", "cp-face");
            return n.innerHTML = "<div  style='background:url(" + i + ");background-size:cover;width:42px;height:42px;'></div>",
            n.style.left = e + "px",
            this._dom.appendChild(n),
            this._contentList.push(n),
            e + 42
        }
        ,
        r.prototype.__childOffset = function(e) {
            for (var t = null, i = 0; i < this._contentList.length; i++)
                (t = this._contentList[i]).style.left = parseInt(t.style.left) + e + "px"
        }
        ,
        r);
        function r(e, t, i) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._name = e,
            this._content = e + "：" + t,
            this._picUrl = i,
            this._width = o["default"].ITEM_MIN_WIDTH,
            this._isStart = !1,
            this._isDestroy = !1,
            this._dom = null,
            this._contentList = [],
            this._moveTime = 0,
            this._speed = 0,
            this._lowX = 0
        }
        (t["default"] = n).LOW = /msie 9/.test(navigator.userAgent.toLowerCase())
    },
    "d74500aba3b3c0a9555d": function(e, t, i) {
        "use strict";
        var n = i("54708c14d466c7781bbf")
          , o = i("0ec8a62d90e8400cef80");
        n({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    },
    "d797953a2539ae0fe950": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcczMzKqqqs3NzcvLy8zMzMvLy8zMzNHR0c7OzsrKyszMzMzMzMvLy8zMzM3NzczMzM3NzczMzMnJycDAwMzMzP4E3OsAAAAWdFJOUwBzBrsd4XTDC0NDIwqE7T3kg7M4BPSUH/dNAAAAR0lEQVQY08XISQqAMBAEwJ7sk10T//9VBWEM4t06FmbjR0xAO7oVVWdwH0YUH8DWQNA73D9BXxFrIXcj2q9I2i82BeSwUDgBb7kEXFjLdUEAAAAASUVORK5CYII="
    },
    "d9c125f6a549ebded220": function(e, t, i) {
        "use strict";
        e.exports = !1
    },
    "d9c402fc6c0e0429b2aa": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t.deleteRecord = t.AIReporter = undefined;
        var d = function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("ef27ce2cb14e12f800a9"))
          , p = i("ccaab819419a92ef1569");
        var h = "abnormal_qipu";
        t.AIReporter = function _(e) {
            var t = e.getProgramInfo().tvid
              , i = Math.floor((new Date).getTime() / 1e3);
            if (d["default"].read(h)) {
                for (var n = JSON.parse(d["default"].read(h)), o = -1, r = 0; r < n.length; r++)
                    if (n[r].hasOwnProperty(t)) {
                        o = r;
                        break
                    }
                if (-1 != o && n.splice(o, 1),
                3 <= n.length)
                    for (var a = 0; a < n.length - 3 + 1; a++)
                        n.shift();
                var s = {};
                if (s[t] = i,
                n.push(s),
                d["default"].write(h, JSON.stringify(n)),
                3 === n.length) {
                    var l = void 0;
                    for (var c in n[0])
                        l = n[0][c];
                    i - 300 <= l && (0,
                    p.uploadLog)(e)
                }
            } else {
                var u = {};
                u[t] = i;
                var f = [u];
                d["default"].write(h, JSON.stringify(f))
            }
        }
        ,
        t.deleteRecord = function o() {
            d["default"].write(h, JSON.stringify([]))
        }
    },
    "d9d936e8bd0056f50de0": function(e, t, l) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = l("fa4e6c91b6a23ac6e195")
              , o = {};
            i.exports = {
                generate: function r(e) {
                    e = parseInt(e, 10);
                    var t = n(e + "IQIYI" + (new Date).getTime());
                    return o[e] = t
                },
                getEpisodeId: function a(e) {
                    var t;
                    for (var i in o)
                        if (o[i] === e) {
                            t = i;
                            break
                        }
                    return parseInt(t, 10)
                },
                getEventId: function s(e) {
                    return o[e] || ""
                }
            }
        }
        .call(t, l, t, e)) === undefined || (e.exports = i)
    },
    "dbbcfbfc2a12d719de3f": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("48978116bed354cb6d8f"));
        var o = (r.prototype.changeLon = function(e) {
            this._scene && (this._lonChange += e)
        }
        ,
        r.prototype.changeLat = function(e) {
            this._scene && (this._lanChange += e)
        }
        ,
        r.prototype.changeDis = function(e) {
            this._scene && (this._disChange += e)
        }
        ,
        r.prototype.render = function() {
            if (this._scene) {
                if (this._renWidth === this._container.offsetWidth && this._renHeight === this._container.offsetHeight || this.__resize(),
                this._video !== this._container.getElementsByTagName("video")[0])
                    return this._video = this._container.getElementsByTagName("video")[0],
                    this._video && (this._video.style.display = "none"),
                    void (this._texture.image = this._video);
                this._lat += this._lanChange,
                this._lanChange = 0,
                this._lon += this._lonChange,
                this._lonChange = 0,
                this._dis += this._disChange,
                this._disChange = 0,
                this._lat = Math.max(-85, Math.min(30, this._lat)),
                this._dis = Math.min(450, Math.max(1, this._dis));
                var e = THREE.Math.degToRad(90 - this._lat)
                  , t = THREE.Math.degToRad(this._lon);
                this._camera.position.x = this._dis * Math.sin(e) * Math.cos(t),
                this._camera.position.y = this._dis * Math.cos(e),
                this._camera.position.z = this._dis * Math.sin(e) * Math.sin(t),
                this._camera.lookAt(this._camera.target),
                this._renderer.render(this._scene, this._camera)
            }
        }
        ,
        r.prototype.destroy = function() {
            this._renderer && (this._renderer.domElement && this._container.removeChild(this._renderer.domElement),
            this._renderer = null),
            this._video && (this._video.style.display = "",
            this._video = null),
            this._container = null,
            this._scene = null,
            this._camera = null,
            this._material = null,
            this._mesh = null,
            this._texture = null,
            this._geometry = null
        }
        ,
        r.prototype.__loadEngine = function() {
            var t = this;
            if (window.THREE)
                return this.__initialize();
            n["default"].seriesLoadScripts(this._sdkUrl, function(e) {
                e && t.__initialize()
            })
        }
        ,
        r.prototype.__initialize = function() {
            this._renWidth = this._container.offsetWidth,
            this._renHeight = this._container.offsetHeight,
            this._scene = new THREE.Scene,
            this._camera = new THREE.PerspectiveCamera(60,this._renWidth / this._renHeight,1,1e3),
            this._camera.target = new THREE.Vector3(0,0,0),
            this._texture = new THREE.VideoTexture,
            this._texture.minFilter = THREE.LinearFilter,
            this._texture.format = THREE.RGBFormat,
            this._material = new THREE.MeshBasicMaterial({
                map: this._texture
            }),
            this._geometry = new THREE.SphereBufferGeometry(500,64,48),
            this._geometry.scale(-1, 1, 1),
            this._mesh = new THREE.Mesh(this._geometry,this._material),
            this._scene.add(this._mesh),
            this._renderer = new THREE.WebGLRenderer,
            this._renderer.setPixelRatio(window.devicePixelRatio),
            this._renderer.setSize(this._renWidth, this._renHeight),
            this._video.style.display = "none",
            this._texture.image = this._video;
            var e = this._renderer.domElement;
            e.style.position = "absolute",
            e.style.top = "0",
            e.style.left = "0",
            this._container.appendChild(e)
        }
        ,
        r.prototype.__resize = function() {
            this._renWidth = this._container.offsetWidth,
            this._renHeight = this._container.offsetHeight,
            this._camera.aspect = this._renWidth / this._renHeight,
            this._camera.updateProjectionMatrix(),
            this._renderer.setSize(this._renWidth, this._renHeight)
        }
        ,
        r);
        function r(e, t, i) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, r),
            this._engine = null,
            this._sdkUrl = i,
            this._video = t,
            this._container = e,
            this._renWidth = 0,
            this._renHeight = 0,
            this._lonChange = 0,
            this._lanChange = 0,
            this._disChange = 0,
            this._scene = null,
            this._camera = null,
            this._renderer = null,
            this._texture = null,
            this._material = null,
            this._geometry = null,
            this._mesh = null,
            this._lat = 0,
            this._lon = 0,
            this._dis = 100,
            this.__loadEngine()
        }
        t["default"] = o
    },
    "dc90b36fbb67bb8c5ed9": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = s(i("9f02978f1998980c265b"));
        i("eb44c738070cb540b825");
        var o = s(i("de11febc781e5b91a532"))
          , r = s(i("c627e4f58ec4241c41a2"))
          , a = (s(i("e2263676467d036c3349")),
        s(i("61637bf383ae9d72a949")));
        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, l = (function f(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(u, c = n["default"]),
        u.prototype.show = function() {
            if (this._panel || this.__initialize(),
            this._parent.appendChild(this._panel),
            a["default"].getInstance().isIE()) {
                var e = this.getOffsetRect(this._panel).left
                  , t = this.getOffsetRect(this._panel).top
                  , i = this._panel.offsetWidth
                  , n = this._panel.offsetHeight;
                this.left_ie = e - 50,
                this.right_ie = e + i + 50,
                this.top_ie = t - 50,
                this.bottom_ie = t + n + 15,
                document.addEventListener("mousemove", this._handle.move)
            }
        }
        ,
        u.prototype.hide = function() {
            this._panel && this._panel.parentNode && (this._parent.removeChild(this._panel),
            this._panel = null),
            document.removeEventListener("mousemove", this._handle.move)
        }
        ,
        u.prototype.getOffsetRect = function(e) {
            var t = e.getBoundingClientRect()
              , i = document.body
              , n = document.documentElement
              , o = window.pageYOffset || n.scrollTop || i.scrollTop
              , r = window.pageXOffset || n.scrollLeft || i.scrollLeft
              , a = n.clientTop || i.clientTop || 0
              , s = n.clientLeft || i.clientLeft || 0
              , l = t.top + o - a
              , c = t.left + r - s;
            return {
                top: Math.round(l),
                left: Math.round(c)
            }
        }
        ,
        u.prototype._allEvt = function(e) {
            this._leaveTimer && clearTimeout(this._leaveTimer),
            e.pageX < this.left_ie || e.pageX > this.right_ie ? this.gotohide() : (e.pageY < this.top_ie || e.pageY > this.bottom_ie) && this.gotohide()
        }
        ,
        u.prototype.gotohide = function() {
            var e = this;
            this._leaveTimer = setTimeout(function() {
                e.hide()
            }, 600)
        }
        ,
        u.prototype.destroy = function() {
            this.hide()
        }
        ,
        u.prototype.__changeArea = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1];
            this._area === e && t || (this._area = e,
            this._btnFull.className = "full" === e ? "barrset-btn barrset-full-select" : "barrset-btn barrset-full",
            this._btnTop.className = "top" === e ? "barrset-btn barrset-top-select" : "barrset-btn barrset-top",
            this._btnBottom.className = "down" === e ? "barrset-btn barrset-bottom-select" : "barrset-btn barrset-bottom",
            t && this.emit(u.EVENT_AREA, e))
        }
        ,
        u.prototype.__changeSize = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
            this._size == e && t && !i || (this._size = e,
            this._lbSize.innerText = r["default"].getConfig("barrset.size" + this._size),
            this._barSize.setProgress(this._size),
            t && this.emit(u.EVENT_SIZE, {
                value: this._size,
                sensor: i
            }))
        }
        ,
        u.prototype.__changeAlpha = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
            this._alpha == e && t && !i || (this._alpha = e,
            this._lbAlpha.innerText = this._alpha + "%",
            this._barAlpha.setProgress(this._alpha - 20),
            t && this.emit(u.EVENT_ALPHA, {
                value: this._alpha,
                sensor: i
            }))
        }
        ,
        u.prototype.__changeSpeed = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
            this._speed == e && t && !i || (this._speed = e,
            this._lbSpeed.innerText = r["default"].getConfig("barrset.speed" + this._speed),
            this._barSpeed.setProgress(this._speed),
            t && this.emit(u.EVENT_SPEED, {
                value: this._speed,
                sensor: i
            }))
        }
        ,
        u.prototype.__initialize = function() {
            var n = this;
            this._panel = this.__createDom("div", "M706C61796572-barrset"),
            this._panel.appendChild(this.__createLable(16, 26, r["default"].getConfig("barrset.titleArea"))),
            this._panel.appendChild(this.__createLable(16, 80, r["default"].getConfig("barrset.titleSize"))),
            this._panel.appendChild(this.__createLable(16, 115, r["default"].getConfig("barrset.titleAlpha"))),
            this._panel.appendChild(this.__createLable(16, 150, r["default"].getConfig("barrset.titleSpeed"))),
            this._panel.appendChild(this.__createDom("div", "mask-down")),
            this._panel.appendChild(this._lbSize = this.__createLable(16, 80, "正常", 0, "right", 24)),
            this._panel.appendChild(this._lbAlpha = this.__createLable(16, 115, "100%", 0, "right", 34)),
            this._panel.appendChild(this._lbSpeed = this.__createLable(16, 150, "正常", 0, "right", 24)),
            this._panel.appendChild(this._btnFull = this.__createDom("div", "barrset-btn barrset-full", 80, 24, r["default"].getConfig("barrset.full"))),
            this._panel.appendChild(this._btnTop = this.__createDom("div", "barrset-btn barrset-top", 128, 24, r["default"].getConfig("barrset.top"))),
            this._panel.appendChild(this._btnBottom = this.__createDom("div", "barrset-btn barrset-bottom", 176, 24, r["default"].getConfig("barrset.bottom"))),
            this._panel.style.height = "190px",
            this._panel.appendChild((this._barSize = new o["default"](80,86,this.__changeSize.bind(this),4,!0)).getDom()),
            this._panel.appendChild((this._barAlpha = new o["default"](80,120,function(e, t, i) {
                n.__changeAlpha(e + 20, t, i)
            }
            ,80,!1)).getDom()),
            this._panel.appendChild((this._barSpeed = new o["default"](80,156,this.__changeSpeed.bind(this),4,!0)).getDom()),
            this._panel.addEventListener ? (this._panel.addEventListener("contextmenu", function(e) {
                n.hide()
            }),
            this._panel.addEventListener("click", function(e) {
                e.stopPropagation(),
                e.preventDefault()
            }),
            this._panel.addEventListener("dblclick", function(e) {
                e.stopPropagation(),
                e.preventDefault()
            }),
            this._btnFull.addEventListener("mousedown", function() {
                n.__changeArea("full")
            }),
            this._btnTop.addEventListener("mousedown", function() {
                n.__changeArea("top")
            }),
            this._btnBottom.addEventListener("mousedown", function() {
                n.__changeArea("down")
            })) : (this._panel.attachEvent("oncontextmenu", function(e) {
                n.hide()
            }),
            this._panel.attachEvent("onclick", function(e) {
                e.cancelBubble = !0,
                e.returnValue = !1
            }),
            this._panel.attachEvent("ondblclick", function(e) {
                e.cancelBubble = !0,
                e.returnValue = !1
            }),
            this._btnFull.attachEvent("onmousedown", function() {
                n.__changeArea("full")
            }),
            this._btnTop.attachEvent("onmousedown", function() {
                n.__changeArea("top")
            }),
            this._btnBottom.attachEvent("onmousedown", function() {
                n.__changeArea("down")
            })),
            this.__changeArea(this._area, !1),
            this.__changeSize(this._size, !1),
            this.__changeAlpha(this._alpha, !1),
            this.__changeSpeed(this._speed, !1),
            this._handle = {
                move: this._allEvt.bind(this)
            }
        }
        ,
        u.prototype.__createLable = function(e, t, i) {
            var n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 0
              , o = 4 < arguments.length && arguments[4] !== undefined ? arguments[4] : "left"
              , r = 5 < arguments.length && arguments[5] !== undefined ? arguments[5] : -1
              , a = this.__createDom("div", "barrset-lable");
            return "left" == o ? a.style.left = e + "px" : "right" == o && (a.style.right = e + "px"),
            a.style.top = t + "px",
            a.style["letter-spacing"] = n + "px",
            a.style["text-align"] = o,
            0 < r && (a.style.width = r + "px"),
            a.innerText = i,
            a
        }
        ,
        u.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : undefined
              , n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : undefined
              , o = 4 < arguments.length && arguments[4] !== undefined ? arguments[4] : undefined
              , r = document.createElement(e);
            return t && (r.className = t),
            i !== undefined && (r.style.left = i + "px"),
            n !== undefined && (r.style.top = n + "px"),
            o !== undefined && (r.innerText = o),
            r
        }
        ,
        u);
        function u(e, t, i, n, o, r) {
            !function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var a = function l(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this));
            return a._area = "" !== t ? t : "full",
            a._size = -1 !== i ? parseInt(i) : 2,
            a._alpha = "" !== n ? 100 * parseFloat(n) | 0 : 100,
            a._speed = -1 !== o ? parseInt(o) : 2,
            a._parent = e,
            a._panel = null,
            a._lbSize = null,
            a._lbAlpha = null,
            a._lbSpeed = null,
            a._btnFull = null,
            a._btnTop = null,
            a._btnBottom = null,
            a._barSize = null,
            a._barAlpha = null,
            a._barSpeed = null,
            a
        }
        (t["default"] = l).EVENT_AREA = "barrageArea",
        l.EVENT_SIZE = "barrageSize",
        l.EVENT_SPEED = "barrageSpeed",
        l.EVENT_ALPHA = "barrageAlpha",
        l.EVENT_COMPERE = "compereSwitch"
    },
    "ddb8338bcecb054d6eee": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var l = o(i("9dc446da53b44c304edf"))
          , r = o(i("fb885b8dee52c75a3d84"))
          , c = o(i("1f080957c4fbd4f86028"))
          , a = o(i("ae19a1d24e6ded12b0b9"))
          , s = o(i("e2263676467d036c3349"))
          , u = o(i("c627e4f58ec4241c41a2"))
          , f = o(i("ced5a6888eb062195e56"))
          , n = o(i("c779f0f9ff7f0eb554cb"))
          , d = o(i("96598f2d6ae9c8676ba4"))
          , p = o(i("6fac10ab8352e9a71530"));
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var h = (_.prototype._analyze = function() {
            this._urlConfig = {},
            this._entryConfig = {},
            this._initEntryConfig(),
            this._initUrlConfig(),
            this._setInitVars(),
            this._initPluginConfig()
        }
        ,
        _.prototype._initEntryConfig = function() {
            for (var e in this._baseInfo)
                this._baseInfo.hasOwnProperty(e) && (this._entryConfig[e] = this._baseInfo[e]);
            if (this._extraInfo)
                for (var t in this._extraInfo)
                    this._extraInfo.hasOwnProperty(t) && (this._entryConfig[t] = this._extraInfo[t]);
            s["default"].setType(this._entryConfig.programPlayerType),
            u["default"].setLocale(this._entryConfig.local),
            d["default"].setRoomStatus(this._entryConfig.status),
            p["default"].setPCA("1_11_114" == this._entryConfig.p1),
            "boolean" == typeof this._entryConfig.h5play && p["default"].setH5Gray(this._entryConfig.h5play);
            var i = {
                core: !1,
                b: !1
            };
            s["default"].isPGC() ? (i.core = !0,
            i.b = !0,
            a["default"].setChatStorageKey("h5c_dzb_log")) : s["default"].isPPC() && (i.core = !0,
            i.b = !0,
            a["default"].setChatStorageKey("h5c_ppc_log")),
            f["default"].setSwitchers(i);
            var n = window.location.href;
            if (-1 !== n.indexOf("vfm")) {
                var o = l["default"].query(n, "vfm");
                "" !== o && r["default"].set("QP005", o)
            }
        }
        ,
        _.prototype._setInitVars = function() {
            this._spans = document.querySelectorAll ? document.querySelectorAll("span") : document.getElementsByTagName("span"),
            this.CONST_PlayerParams = window.QiyiPlayerParam || [],
            this.CONST_PlayerParamsKV = {};
            for (var e = 0; e < this.CONST_PlayerParams.length; e++)
                this.CONST_PlayerParams[e].name && (this.CONST_PlayerParamsKV[this.CONST_PlayerParams[e].name] = this.CONST_PlayerParams[e].attribute || {})
        }
        ,
        _.prototype._initUrlConfig = function() {
            var e = location.href;
            if (e) {
                var t = e.split("?");
                if (t[1]) {
                    var i = t[1].split("&");
                    for (var n in i)
                        if (i.hasOwnProperty(n)) {
                            var o = i[n].split("=")
                              , r = o[0]
                              , a = o[1];
                            this._urlConfig[r] = a
                        }
                }
            }
        }
        ,
        _.prototype._initPluginConfig = function() {
            this._pluginConfig = {},
            this._pluginConfig[n["default"].ENGINE] = !0,
            this._pluginConfig[n["default"].CONTROL] = !0,
            s["default"].isPGC() ? (this._pluginConfig[n["default"].BARRAGE] = !0,
            this._pluginConfig[n["default"].EFFECT] = !0,
            this._pluginConfig[n["default"].COMPERE] = !0,
            this._pluginConfig[n["default"].ARES] = !1) : s["default"].isPPC() ? (this._pluginConfig[n["default"].BARRAGE] = !0,
            this._pluginConfig[n["default"].EFFECT] = !0,
            this._pluginConfig[n["default"].COMPERE] = !0,
            this._pluginConfig[n["default"].ARES] = !0) : (s["default"].isEPG(),
            this._pluginConfig[n["default"].BARRAGE] = !1,
            this._pluginConfig[n["default"].EFFECT] = !1,
            this._pluginConfig[n["default"].COMPERE] = !1,
            this._pluginConfig[n["default"].ARES] = !1)
        }
        ,
        _.prototype.getEntryConfig = function(e) {
            return this._entryConfig[e]
        }
        ,
        _.prototype.setEntryConfig = function(e, t) {
            this._entryConfig[e] = t
        }
        ,
        _.prototype.getEnvConfig = function(e) {
            return _.envConfig[e]
        }
        ,
        _.prototype.getPluginConfig = function() {
            return this._pluginConfig
        }
        ,
        _.prototype.getElemWrapperParams = function(t) {
            for (var i = function i(e) {
                return t.getAttribute(e)
            }, e = {
                preLoaderType: i("data-player-preLoaderType"),
                logoPosition: i("data-player-logoPosition"),
                captionUrl: i("data-player-captionUrl"),
                tvid: i("data-player-tvid"),
                channelId: i("data-player-channelId"),
                albumId: i("data-player-albumid"),
                coop: i("data-player-coop"),
                charge: i("data-player-charge"),
                label: i("data-player-label"),
                endlessLength: i("data-player-endlessLength"),
                local: i("data-player-local"),
                switchAd: i("data-player-switchAd"),
                playerType: i("data-player-playerType"),
                startTime: i("data-player-startTime")
            }, n = void 0, o = 0; o < this._spans.length; o++)
                if ((n = this._spans[o]).getAttribute(_.CONST_adParamAttrName) === _.CONST_adParamAttrName) {
                    var r = n.getAttribute("data-adparam-cupid")
                      , a = n.getAttribute("data-adparam-playerid");
                    r && (e.adurl = r),
                    a && (e.cid = a)
                }
            return delParamEmptyProps(e)
        }
        ,
        _.prototype.getElemAdParams = function() {
            for (var e = void 0, t = {}, i = 0; i < this._spans.length; i++)
                if ((e = this._spans[i]).getAttribute(_.CONST_adParamAttrName) === _.CONST_adParamAttrName) {
                    var n = e.getAttribute("data-adparam-cupid")
                      , o = e.getAttribute("data-adparam-playerid");
                    n && (t.adurl = n),
                    o && (t.cid = o)
                }
            return delParamEmptyProps(t)
        }
        ,
        _.prototype.getElemWrapperFlashVarsParams = function(t) {
            var e = {}
              , i = function n(e) {
                return t.getAttribute(e)
            }("data-player-flashvars");
            return i = i ? l["default"].query2Json(i) : {},
            (0,
            c["default"])(e, delParamEmptyProps(i), !0),
            delParamEmptyProps(e)
        }
        ,
        _.prototype.getElemPublicParams = function() {
            for (var e = void 0, t = void 0, i = void 0, n = void 0, o = !1, r = {}, a = 0; a < this.CONST_PlayerParams.length; a++)
                "public" === this.CONST_PlayerParams[a].name && ((0,
                c["default"])(r, delParamEmptyProps(this.CONST_PlayerParams[a].attribute || {}), !0),
                delItemInPlayerParams("public"),
                o = !0);
            if (!o)
                for (var s = 0; s < this._spans.length; s++)
                    e = (n = this._spans[s]).getAttribute(_.CONST_flashParamAttrName),
                    t = n.getAttribute(_.CONST_flashVarsAttrName),
                    i = n.getAttribute(_.CONST_h5Vars),
                    "public" === e && (t && (0,
                    c["default"])(r, delParamEmptyProps(l["default"].query2Json(t)), !0),
                    i && (0,
                    c["default"])(r, delParamEmptyProps(l["default"].query2Json(i)), !0));
            return delParamEmptyProps(r)
        }
        ,
        _.prototype.getElemCustomParams = function() {
            for (var e = void 0, t = void 0, i = void 0, n = void 0, o = {}, r = 0; r < this._spans.length; r++)
                e = (n = this._spans[r]).getAttribute(_.CONST_flashParamAttrName),
                t = n.getAttribute(_.CONST_flashVarsAttrName),
                i = n.getAttribute(_.CONST_h5Vars),
                e && "public" !== e && (this.CONST_PlayerParamsKV[e] ? ((0,
                c["default"])(o, delParamEmptyProps(CONST_PlayerParamsKV[e]), !0),
                delItemInPlayerParams(e)) : (t && (0,
                c["default"])(o, delParamEmptyProps(l["default"].query2Json(t)), !0),
                i && (0,
                c["default"])(o, delParamEmptyProps(l["default"].query2Json(i)), !0)));
            if (0 < this.CONST_PlayerParams.length)
                for (var a = 0; a < this.CONST_PlayerParams.length; a++)
                    this.CONST_PlayerParams[a] && this.CONST_PlayerParams[a].name && (0,
                    c["default"])(o, delParamEmptyProps(this.CONST_PlayerParams[a].attribute || {}), !0);
            return delParamEmptyProps(o)
        }
        ,
        _.prototype.delItemInPlayerParams = function(e) {
            (this.CONST_PlayerParamsKV[e] || this.CONST_PlayerParamsKV.hasOwnProperty(e)) && (this.CONST_PlayerParamsKV[e] = null,
            delete this.CONST_PlayerParamsKV[e]);
            for (var t = this.CONST_PlayerParams.length; t--; )
                this.CONST_PlayerParams[t].name === e && this.CONST_PlayerParams.splice(t, 1)
        }
        ,
        _.prototype.delParamEmptyProps = function(e) {
            for (var t in e)
                e[t] || !1 === e[t] || delete e[t];
            return e
        }
        ,
        _.prototype.getGrayConfig = function(e) {
            return window._grayConfig && window._grayConfig.hasOwnProperty(e) ? window._grayConfig[e] : null
        }
        ,
        _.prototype.getUrlConfig = function(e) {
            return this._urlConfig[e]
        }
        ,
        _.prototype.getUrlParams = function(e) {
            var t = {}
              , i = e.indexOf("?");
            if (-1 === i)
                return null;
            var n = e.substring(i + 1);
            try {
                for (var o = decodeURIComponent(n).split("&"), r = 0; r < o.length; r++)
                    if (-1 !== o[r].indexOf("=")) {
                        var a = o[r].split("=");
                        t[a[0]] = a[1]
                    }
                return t
            } catch (s) {
                return console.error(s),
                null
            }
        }
        ,
        _.prototype.getQualifiedConfig = function(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : window;
            console.log("getQualifiedConfig", e, t);
            var i = undefined;
            if (e) {
                var n = e.split(".")
                  , o = 0;
                if (t == window && "window" == n[0] && (o = 1),
                o >= n.length)
                    return undefined;
                i = t;
                for (var r = o; r < n.length; r++) {
                    if (i[n[r]] == undefined)
                        return undefined;
                    i = i[n[r]]
                }
            }
            return console.log("getQualifiedConfig", e, t, i),
            i
        }
        ,
        _.prototype.isTest = function() {
            return _.env == _.DEBUG
        }
        ,
        _.prototype.destroy = function() {}
        ,
        _.getInstance = function() {
            return _._instance
        }
        ,
        _);
        function _(e) {
            var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null;
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, _),
            (_._instance = this)._baseInfo = e,
            this._extraInfo = t,
            this._analyze()
        }
        h.envConfig = {
            "version": "2.2.12",
            "helpUrl": "//help.iqiyi.com",
            "sdk": {
                "path": "//static.iqiyi.com/js/qlive/plugin/player/uniplayer/livePlayer2.js"
            },
            "api": {
                "secKey": "player-9Se2bz2gdlMmp4oz"
            },
            "engine": {
                "path": "//static.iqiyi.com/js/qlive/plugin/player/engine/liveEngine.js",
                "refName": "liveEngine"
            },
            "control": {
                "path": "//static.iqiyi.com/js/qlive/plugin/videoUI_uni.js",
                "cssPath": "//static.iqiyi.com/css/qlive/plugin/videoUI_uni.css",
                "pathIE8": "//static.iqiyi.com/js/qlive/plugin/videoUI_IE8.js",
                "cssPathIE8": "//static.iqiyi.com/css/qlive/plugin/videoUI_IE8.css",
                "refName": "VideoUI"
            },
            "effect": {
                "path": "//static.iqiyi.com/js/qlive/plugin/effect/EffectCoreSDK.js",
                "refName": "live_effect_sdk"
            },
            "barrage": {
                "path": "//static.iqiyi.com/js/qlive/plugin/barrage/BarrageCoreSDK.js",
                "refName": "live_barrage_sdk"
            },
            "sensor": {
                "qos": "//sensor-live.iqiyi.com/qos/a",
                "god": "//sensor-live.iqiyi.com/stat/b",
                "pgc_pv": "//msg.qy.net/v5/yxzb/pv",
                "pgc_click": "//msg.qy.net/v5/yxzb/click",
                "ppc_pv": "//msg.qy.net/v5/live/pv",
                "ppc_click": "//msg.qy.net/v5/live/click"
            },
            "ares": {
                "path": "//static.iqiyi.com/js/qlive/plugin/player/ares/liveAres.js",
                "refName": "liveAres"
            },
            "pano": {
                "sdkUrl": "//static.iqiyi.com/js/qlive/plugin/vr/three.min.js"
            }
        },
        h.env = "pro",
        h.DEBUG = "test",
        h.RELEASE = "pro",
        h.CONST_adParamAttrName = "data-widget-adparam",
        h.CONST_flashParamAttrName = "data-widget-flashplayerparam",
        h.CONST_flashVarsAttrName = "data-flashplayerparam-flashvars",
        h.CONST_h5Vars = "data-h5playerparam-h5vars",
        t["default"] = h
    },
    "de11febc781e5b91a532": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (a.prototype.setProgress = function(e) {
            this._value = Math.min(this._max, Math.max(0, e));
            var t = e * this._width / this._max;
            this._pro.style.width = t + "px",
            this._btn.style.left = t + "px"
        }
        ,
        a.prototype.getDom = function() {
            return this._dom
        }
        ,
        a.prototype.__moveTo = function(e) {
            var t = !(1 < arguments.length && arguments[1] !== undefined) || arguments[1]
              , i = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
            e = Math.min(this._width, Math.max(e, 0));
            var n = Math.round(this._max * (e / this._width));
            t && this._onChange(n, !0, i && this._downValue != n)
        }
        ,
        a.prototype.__init = function() {
            var t = this;
            this._dom = this.__createDom("div", "barrset-bar", this._x, this._y);
            var e = navigator.userAgent.match(/Trident/);
            if (this._hasLine)
                for (var i = 0; i <= this._max; i++)
                    0 != i && i != this._max && this._dom.appendChild(this.__createDom("div", "barrset-bar-line", i * this._width / this._max, undefined, undefined, e ? 3 : undefined));
            this._dom.appendChild(this._pro = this.__createDom("div", "barrset-bar-pro")),
            this._dom.appendChild(this._btn = this.__createDom("div", "barrset-bar-slip")),
            this._btn.appendChild(this._btnSole = this.__createDom("div", "slip-halo")),
            this._dom.addEventListener ? (this._dom.addEventListener("mousedown", function(e) {
                t._isBtnDown = !0,
                t._downValue = t._value,
                t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left),
                t._btnSole.style.display = "block",
                e.stopPropagation(),
                e.preventDefault()
            }),
            this._btn.addEventListener("mouseover", function(e) {
                t._isBtnOver = !0,
                t._btnSole.style.display = "block"
            }),
            this._btn.addEventListener("mouseout", function(e) {
                t._isBtnOver = !1,
                t._isBtnDown || (t._btnSole.style.display = "none")
            }),
            document.addEventListener("mousemove", function(e) {
                t._isBtnDown && t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left)
            }),
            document.addEventListener("mouseup", function(e) {
                t._isBtnDown && t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left, !0, !0),
                t._isBtnDown = !1,
                t._isBtnOver || (t._btnSole.style.display = "none")
            })) : (this._dom.attachEvent("onmousedown", function(e) {
                t._isBtnDown = !0,
                t._downValue = t._value,
                t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left),
                t._btnSole.style.display = "block",
                e.cancelBubble = !0,
                e.returnValue = !1
            }),
            this._btn.attachEvent("onmouseover", function(e) {
                t._isBtnOver = !0,
                t._btnSole.style.display = "block"
            }),
            this._btn.attachEvent("onmouseout", function(e) {
                t._isBtnOver = !1,
                t._isBtnDown || (t._btnSole.style.display = "none")
            }),
            document.attachEvent("onmousemove", function(e) {
                t._isBtnDown && t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left)
            }),
            document.attachEvent("onmouseup", function(e) {
                t._isBtnDown && t.__moveTo(e.clientX - t._dom.getBoundingClientRect().left, !0, !0),
                t._isBtnDown = !1,
                t._isBtnOver || (t._btnSole.style.display = "none")
            }))
        }
        ,
        a.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : undefined
              , n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : undefined
              , o = 4 < arguments.length && arguments[4] !== undefined ? arguments[4] : undefined
              , r = 5 < arguments.length && arguments[5] !== undefined ? arguments[5] : undefined
              , a = document.createElement(e);
            return t && (a.className = t),
            i !== undefined && (a.style.left = i + "px"),
            n !== undefined && (a.style.top = n + "px"),
            o !== undefined && (a.style.width = o + "px"),
            r !== undefined && (a.style.height = r + "px"),
            a
        }
        ,
        a);
        function a(e, t, i) {
            var n = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 100
              , o = 4 < arguments.length && arguments[4] !== undefined && arguments[4];
            !function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this._dom = null,
            this._pro = null,
            this._btn = null,
            this._btnSole = null,
            this._isBtnDown = !1,
            this._isBtnOver = !1,
            this._onChange = i,
            this._value = 0,
            this._hasLine = o,
            this._max = n,
            this._width = 144,
            this._x = e,
            this._y = t,
            this._downValue = -1,
            this.__init()
        }
        t["default"] = n
    },
    "de5b87e340b4469b47e7": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            "error": {
                "report": "報告錯誤",
                "refresh": "刷新試試",
                "pluginInitFail": "插件初始化失敗",
                "pluginInitFailFlash": "加載異常，請確認瀏覽器是否允許加載Flash插件",
                "pluginInitFailPCA": "加載異常，請更新客戶端版本後重新打開",
                "pluginError": "插件錯誤",
                "ProgramNotExist": "節目信息不存在",
                "vrs": {
                    "default": "播放出了點問題，點擊刷新看看吧",
                    "qpidWrong": "該節目無效，請確認輸入網址是否正確",
                    "A00001": "請求參數無效",
                    "A00003": "內部請求異常",
                    "A00004": "播放出了點問題，點擊刷新看看吧【A00004】",
                    "A00005": "請求數據不可用",
                    "A00011": "您還沒有獲得觀看當前付費節目的權限",
                    "A00013": "很抱歉，本節目因為版權原因在您所在區域下線",
                    "A00020": "時間戳超時",
                    "A00110": "暫時無法觀看，去看看其他節目吧【A00110】",
                    "A00111": "地域受限，去看看其他節目吧【A00111】",
                    "A00119": "您還沒有獲得觀看當前付費節目的權限（網球會員）",
                    "A00120": "您還沒有獲得觀看當前付費節目的權限（體育會員）"
                },
                "askQpIds": {
                    "default": "節目信息獲取失敗"
                },
                "ChargeFailed": "您還沒有獲得觀看當前付費節目的權限",
                "SupportError_Flash": '當前瀏覽器尚未運行flashplayer，<a href="//www.adobe.com/go/getflashplayer" target="_blank" class="theme-color">點擊運行</a><br/>請先下載安裝flashplayer插件，並前去<br/>瀏覽器設置，將flash插件設置為在此網站上【始終允許】',
                "SupportError_FlashNotEnabled": '當前瀏覽器尚未運行flashplayer，<span class="theme-color">點擊運行</span>，<br/>並前去瀏覽器設置，將flash插件設置為在此網站上【始終允許】',
                "SupportError_Mobile": "手機網頁端不支持該類節目，<br/>請前往PC網頁端/手機客戶端觀看當前節目",
                "SupportError_Engine": "當前平台不支持播放，<br/>請前往PC網頁端/手機客戶端觀看當前節目",
                "SupportError_PCA": "本節目暫時無法播放，<br />請重啟客戶端或者瀏覽器試試。",
                "BrowserLow": "瀏覽器版本過低，推薦您下載使用高級瀏覽器提升體驗",
                "PlayError": "對不起，播放出錯了",
                "NetError": "網絡出了點問題，點擊刷新看看吧",
                "TechError": "網絡出了點問題，點擊刷新看看吧",
                "userCheckVipError": "您已同時在超過兩臺設備觀看會員節目，如需繼續觀看，請先在其他設備上退出觀看。"
            },
            "feedback": {
                "LiveWaiting_PPC": "節目未開始，去看看其他節目吧",
                "LiveWaiting_PGC": "節目未開始，去看看其他節目吧",
                "LivePaused": "主播暫時離開了，馬上回來",
                "LiveEnded": "節目已結束，去看看其他節目吧",
                "LiveEndWithVOD": "節目已結束，<span class='theme-color'><a target='_blank' href='{0}'><u>全場回放</u></a></span>",
                "LiveEndWithReplay": "節目已結束，<span class='theme-color'><a href='{0}'><u>點擊回看</u></a></span>",
                "LivePlaybackEnded": "節目已結束，去看看其他節目吧"
            },
            "control": {},
            "definition": {
                "speed": ["極速", "極速"],
                "smooth": ["流暢 360P", "流暢"],
                "high": ["高清 480P", "高清"],
                "super": ["超清", "超清"],
                "720p": ["超清 720P", "超清"],
                "1080p": ["藍光 4M", "藍光 4M"],
                "1080p_ppc": ["藍光 1080P", "藍光"],
                "1080p50": ["藍光 1080P50", "藍光"],
                "1080p6m": ["藍光 6M", "藍光 6M"],
                "1080p8m": ["藍光 8M", "藍光 8M"],
                "2K": ["2K", "2K"],
                "4k": ["藍光 4K", "藍光 4K"],
                "720po": ["原畫", "原畫"],
                "1080po": ["原畫", "原畫"],
                "2Ko": ["原畫", "原畫"]
            },
            "tips": {
                "seeking": "正在切換到<font color='#00cc36'>{0}</font>碼流",
                "seekend": "已成功切換到<font color='#00cc36'>{0}</font>畫質",
                "ppcTryWatch": "免費試看<font color='#00cc36'> 6 </font>分鐘，收看完整版請<a href='javascript:;'> <font color='#00cc36'>立即購買</font></a>",
                "ppcTryWatchCountDown": "試看即將結束…<font color='#00cc36'>{0}</font>秒 <a href='javascript:;'><font color='#00cc36'>立即購買</font></a>",
                "waiting": {
                    "pgc": "loading",
                    "pgc_delay": "loading \n網絡有點慢，正在努力加載",
                    "ppc": "節目正在緩沖, 請稍候 ...",
                    "timeout_def": "您的網絡環境不順暢，請稍候",
                    "timeout_defs": "『{0}』碼流在當前網絡環境比較卡，降低清晰度試試",
                    "download_rate": "下載速率：",
                    "buffer_ing": "正在緩沖..."
                },
                "backlive": "已同步至最新進度",
                "userCheckVipTips": "您的賬號在多臺設備同時播放視頻，存在安全風險，請盡快退登其他設備或立即修改密碼"
            },
            "carousel": {
                "listTitle": "播單 ({0})",
                "listCur": "正在播放",
                "listNext": "即將播放",
                "loadingCar": "即將輪播",
                "loadingLive": "即將開始",
                "remindCar": "已切換為輪播",
                "remindLive": "已切換為節目",
                "remindCur": "<font color='#00ff00'>當前播放：</font>{0}"
            },
            "barrset": {
                "titleArea": "彈幕區域",
                "titleSize": "字體大小",
                "titleAlpha": "不透明度",
                "titleSpeed": "彈幕速度",
                "titleCompere": "開啟主持人彈幕",
                "full": "全屏",
                "top": "上方",
                "bottom": "下方",
                "size0": "極小",
                "size1": "小",
                "size2": "正常",
                "size3": "大",
                "size4": "極大",
                "speed0": "極慢",
                "speed1": "慢",
                "speed2": "正常",
                "speed3": "快",
                "speed4": "極快"
            },
            "rightmenu": {
                "version": "版本號",
                "save": "保存日誌",
                "upload": "上傳日誌",
                "feedback": "反饋問題",
                "intro": "快捷鍵說明"
            }
        }
    },
    "df7347ce22d641c9edd8": function(e, t, i) {
        var n = i("6e725bb88b97e7348ce9");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "df793c94f311ce3878ff": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        t["default"] = {
            ITEM_MIN_WIDTH: 270,
            ITEM_MIN_GAP: 40,
            TOP_GAP_NORMAL: 20,
            TOP_GAP_FULL: 50,
            ARRIVE_TIME: 15,
            FACE_SIZE: 36
        }
    },
    "e0b8b8f5220954d02f3b": function(e, t, i) {
        "use strict";
        var n = i("d280362e5865b5c09927")
          , o = i("a94b8a4acc8eebd7604f")
          , r = Function.call;
        e.exports = function(e, t, i) {
            return o(r, n[e].prototype[t], i)
        }
    },
    "e19fa061fe0ac399731b": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i("fd0b44f556392d6a75ac"))
          , o = i("bef7a691bb63f7f92f11");
        var r = (a.prototype.serRequest = function() {
            var i = this
              , e = "//data.video.iqiyi.com/v.f4v";
            o.apiStat.getStat(o.apiType.f4v).reqStart(e),
            n["default"].ajax({
                url: e,
                "dataType": "json",
                "withCredentials": !1,
                "success": function(e) {
                    if (o.apiStat.getStat(o.apiType.f4v).reqSucc(e),
                    e) {
                        o.apiStat.getStat(o.apiType.f4v).pingbackQos(),
                        e.hasOwnProperty("s") && (i._serverDefinition = e.s),
                        0 < e.time && (i._servertimeGap = e.time - Math.ceil(new Date / 1e3));
                        var t = e.t;
                        i._netType = t.split("|")[0],
                        i._netAreaMain = t.split("|")[1].split("-")[0],
                        -1 != i._netAreaMain.indexOf("_") && (i._netAreaExt = i._netAreaMain.split("_")[1],
                        i._netAreaMain = i._netAreaMain.split("_")[0]),
                        i._userIP = t.split("|")[1].split("-")[1],
                        window.QYP.userNet = {
                            ip: i._userIP,
                            netAreaMain: i._netAreaMain,
                            netAreaExt: i._netAreaExt,
                            netType: i._netType,
                            operator: e.z || "读取不到"
                        },
                        i._isRequest = !0
                    } else
                        o.apiStat.getStat(o.apiType.f4v).parseFail("no data"),
                        o.apiStat.getStat(o.apiType.f4v).pingbackQos(),
                        console.log("请求服务器时间出错")
                },
                "failure": function(e, t, i) {
                    o.apiStat.getStat(o.apiType.f4v).reqFail(i, e),
                    o.apiStat.getStat(o.apiType.f4v).pingbackQos()
                }
            })
        }
        ,
        a.prototype.getServerDefinition = function() {
            return this._serverDefinition
        }
        ,
        a.prototype.getServerTime = function() {
            return Math.ceil(new Date / 1e3) + this._servertimeGap
        }
        ,
        a);
        function a() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this._servertimeGap = 0,
            this._isRequest = !1
        }
        t["default"] = new r
    },
    "e2263676467d036c3349": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = (o.prototype.setType = function(e) {
            this._type = e
        }
        ,
        o.prototype.getType = function() {
            return this._type
        }
        ,
        o.prototype.isPGC = function() {
            return this.getType() == this.PGC
        }
        ,
        o.prototype.isPPC = function() {
            return this.getType() == this.PPC
        }
        ,
        o.prototype.isEPG = function() {
            return this.getType() == this.EPG
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.PGC = "pgc",
            this.PPC = "ppc",
            this.EPG = "epg",
            this._type = null
        }
        t["default"] = new n
    },
    "e5297d8377c471ec02f1": function(e, t, i) {
        "use strict";
        var n = i("8b7f35c7088a7864b506")
          , o = Math.max
          , r = Math.min;
        e.exports = function(e, t) {
            var i = n(e);
            return i < 0 ? o(i + t, 0) : r(i, t)
        }
    },
    "e5c1d4201891556e0f25": function(e, t, i) {
        "use strict";
        var n = i("74087cdf1b418e6530cc");
        e.exports = n("native-function-to-string", Function.toString)
    },
    "e6063aaa6fb614e861d5": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = s(i("48978116bed354cb6d8f"))
          , o = s(i("790825d0dabf4060a0d9"))
          , r = s(i("343def12cad299c54e12"))
          , a = s(i("c779f0f9ff7f0eb554cb"));
        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var l, c = (function f(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(u, l = r["default"]),
        u.prototype.appendEffect = function(e) {
            this._isOpen && (!1 === this._isLoad && (this.__initSensor(),
            this._isLoad = !0,
            this._load()),
            this._effect ? this._appendGift(e) : (this._caches || (this._caches = []),
            this._caches.push(e)))
        }
        ,
        u.prototype.toggle = function(e) {
            this._isOpen = e,
            this._isOpen || this.reset()
        }
        ,
        u.prototype.reset = function() {
            this._effect && this._effect.clearCore(u.CORE_NAME),
            this.__effectCompleteHandler()
        }
        ,
        u.prototype._load = function() {
            var t = this
              , e = this._config.refName;
            if (window[e])
                this._assemble();
            else {
                var i = this._player.getJsUrl(this._config.path);
                n["default"].seriesLoadScripts([i], function(e) {
                    e ? (t._sensorStep = u.SSTEP_LOAD_SDK_SUCCESS,
                    t._sdkLoadTime = Date.now() - t._sdkLoadTime,
                    t._assemble()) : t._sensorStep = u.SSTEP_LOAD_SDK_FAIL
                })
            }
        }
        ,
        u.prototype._assemble = function() {
            this._initContainer(),
            this._effect = window[this._config.refName].getCommon();
            var e = {
                scale: 1,
                fps: 20,
                align: .5,
                valign: .5,
                adapt: !0,
                webGL: !1,
                onQueueComplete: this.__effectCompleteHandler.bind(this),
                onMessage: this.__coreMessageHandler.bind(this)
            };
            "h5" === this._effect.getMode() ? this._div.style.background = "linear-gradient(135deg, #00000000, #171717ff)" : e.background = "//www.iqiyipic.com/qlive/fix/img/pgcEffectBg.png",
            this._effect.createCore(u.CORE_NAME, this._div, this._div.offsetWidth || 1, this._div.offsetHeight || 1, e),
            this._executeCache()
        }
        ,
        u.prototype._initContainer = function() {
            this.getContainer();
            var e = document.getElementById("layerEffect");
            e ? this._div = e : (this._div = document.createElement("div"),
            this._div.id = "layerEffect"),
            this._div.style.width = "100%",
            this._div.style.height = "100%",
            this._div.style.position = "absolute",
            this._div.style.left = 0,
            this._div.style.top = 0,
            this._div.style.right = 0,
            this._div.style.bottom = 0,
            this._div.style["pointer-events"] = "none",
            this._container.style["pointer-events"] = "none",
            this._container.style.display = "none",
            this._container.appendChild(this._div)
        }
        ,
        u.prototype._executeCache = function() {
            if (this._caches)
                for (var e = 0; e < this._caches.length; e++)
                    this._appendGift(this._caches[e]);
            this._caches = undefined
        }
        ,
        u.prototype._appendGift = function(e) {
            this._isOpen && ("none" === this._container.style.display && (this._container.style.display = "block",
            this._effect.changeCore(u.CORE_NAME, this._div.offsetWidth, this._div.offsetHeight)),
            e = "//effect-live.iqiyi.com/dzb/pcw/" + e.split("/").pop(),
            this._effect.appendEffect(u.CORE_NAME, e))
        }
        ,
        u.prototype.__effectCompleteHandler = function() {
            0 < arguments.length && undefined,
            1 < arguments.length && undefined,
            this.toggleVisible(!1)
        }
        ,
        u.prototype.toggleVisible = function(e) {
            var t = this.getContainer();
            t && (t.style.display = e ? "block" : "none")
        }
        ,
        u.prototype.getContainer = function() {
            return "string" == typeof this._container && (this._container = document.getElementById(this._container)),
            this._container
        }
        ,
        u.prototype.destroy = function() {
            if (clearTimeout(this._sensorTid),
            this._effect && (this._effect.deleteCore(u.CORE_NAME),
            this._effect = null),
            this._container) {
                if (this.toggleVisible(!1),
                this._container && this._container.firstChild)
                    for (; this._container.firstChild; )
                        this._container.removeChild(this._container.firstChild);
                this._container = null
            }
            this._caches = null,
            l.prototype.destroy.call(this)
        }
        ,
        u.prototype.__initSensor = function() {
            this._sensored = !1,
            this._sensorStep = u.SSTEP_LOAD_SDK,
            this._sdkLoadTime = Date.now(),
            this._coreLoadTime = 0,
            this._resLoadTime = 0,
            this._coreType = "",
            this._resType = 0,
            this._resUrl = "",
            this._resFromat = "",
            this._resSize = 0,
            this._resPer = "",
            this._content = "",
            this._sensorTid = setTimeout(this.__sensor.bind(this), 2e4)
        }
        ,
        u.prototype.__coreMessageHandler = function(e, t) {
            if (!this._firstId || this._firstId === t.data.id) {
                t.data.id !== undefined && (this._firstId = t.data.id);
                var i = t.type
                  , n = t.data;
                switch (i) {
                case "loadCore":
                    this._sensorStep = u.SSTEP_LOAD_CORE,
                    this._coreType = n.type,
                    this._coreLoadTime = Date.now();
                    break;
                case "loadCoreSuccess":
                    this._sensorStep = u.SSTEP_LOAD_CORE_SUCCESS,
                    this._coreLoadTime = Date.now() - this._coreLoadTime;
                    break;
                case "loadCoreFail":
                    this._sensorStep = u.SSTEP_LOAD_CORE_FAIL,
                    this._coreLoadTime = Date.now() - this._coreLoadTime,
                    this.__effectCompleteHandler();
                    break;
                case "loadEffect":
                    this._sensorStep = u.SSTEP_LOAD_RES,
                    this._resLoadTime = Date.now();
                    break;
                case "loadEffectSuccess":
                    this._sensorStep = u.SSTEP_LOAD_RES_SUCCESS,
                    this._resLoadTime = Date.now() - this._resLoadTime,
                    this._resType = n.type,
                    this._resUrl = n.url,
                    this._resFromat = n.format,
                    this._resSize = n.size;
                    break;
                case "loadEffectFail":
                    this._sensorStep = u.SSTEP_LOAD_RES_FAIL,
                    this._content = n.content,
                    this._resLoadTime = Date.now() - this._resLoadTime,
                    this.__effectCompleteHandler();
                    break;
                case "playSuccess":
                    this._sensorStep = u.SSTEP_PLAY_SUCCESS,
                    this._sensored && this.__sensor(2);
                    break;
                case "playFail":
                    this._sensorStep = u.SSTEP_PLAY_FAIL,
                    this.__effectCompleteHandler()
                }
            }
        }
        ,
        u.prototype.__sensor = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : 1;
            1e6 < this._sdkLoadTime && (this._sdkLoadTime = 0),
            1e6 < this._coreLoadTime && (this._coreLoadTime = 0),
            1e6 < this._resLoadTime && (this._resLoadTime = 0),
            this._sensored = !0;
            var t = {
                t: "qlive_effect",
                bstp: this._effect ? this._effect.getMode() : ""
            };
            t.t = "qlive_effect",
            t.bstp = this._coreType,
            t.evetp = e,
            t.st = this._sensorStep,
            t.tm = this._sdkLoadTime + this._coreLoadTime + this._resLoadTime,
            t.t1 = this._sdkLoadTime,
            t.t2 = this._coreLoadTime,
            t.t3 = this._resLoadTime,
            t.content = this._content,
            t.rtp = this._resType,
            t.ri = this._resUrl,
            t.rf = this._resFromat,
            t.rsize = this._resSize,
            t.rper = this._resPer,
            this._player.emit(o["default"].SENSOR_GOD, t)
        }
        ,
        u);
        function u(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, l.call(this, e, t));
            return i._type = a["default"].EFFECT,
            i._div = null,
            i._player = t,
            i._config = i._player.getConfig().getEnvConfig("effect"),
            i._caches = [],
            i._isLoad = !1,
            i._isOpen = i._player.getConfig().getEntryConfig("specialEffects"),
            i._isOpen === undefined && (i._isOpen = !0),
            l.prototype.init.call(i),
            window.test_live_effect = i
        }
        c.CORE_NAME = "live_player",
        c.SSTEP_LOAD_SDK = 1,
        c.SSTEP_LOAD_SDK_SUCCESS = 2,
        c.SSTEP_LOAD_SDK_FAIL = 3,
        c.SSTEP_LOAD_CORE = 4,
        c.SSTEP_LOAD_CORE_SUCCESS = 5,
        c.SSTEP_LOAD_CORE_FAIL = 6,
        c.SSTEP_LOAD_RES = 7,
        c.SSTEP_LOAD_RES_SUCCESS = 8,
        c.SSTEP_LOAD_RES_FAIL = 9,
        c.SSTEP_PLAY = 10,
        c.SSTEP_PLAY_SUCCESS = 11,
        c.SSTEP_PLAY_FAIL = 12,
        t["default"] = c
    },
    "e7464dc3e62648edcd65": function(e, t, a) {
        "use strict";
        t.__esModule = !0;
        var s = i(a("61637bf383ae9d72a949"))
          , l = i(a("e2263676467d036c3349"))
          , c = i(a("fb885b8dee52c75a3d84"))
          , u = i(a("ddb8338bcecb054d6eee"))
          , f = i(a("ae19a1d24e6ded12b0b9"));
        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var n = (o.prototype.show = function() {
            if (s["default"].getInstance().isIE() && parseInt(s["default"].getInstance().getVersion()) <= 8)
                window.location.href = u["default"].getInstance().getEnvConfig("helpUrl");
            else {
                var t = document.body.appendChild(document.createElement("div"));
                if (t) {
                    var e, i = 0;
                    l["default"].isPPC() ? e = "ppc" : l["default"].isPGC() && (e = "pgc",
                    i = window.QYP.roomId);
                    var n = 0;
                    window.QYP && (n = window.QYP.qpId);
                    var o = {
                        programType: e,
                        programInfo: n,
                        browserInfo: window.navigator.userAgent
                    };
                    0 < i && (o.roomId = i);
                    var r = {
                        maxWidth: 2048,
                        maxFileSize: 3,
                        compress: !0,
                        quality: .7,
                        problems: [{
                            type: "播放问题"
                        }, {
                            type: "送礼付费"
                        }, {
                            type: "弹幕聊天"
                        }, {
                            type: "主播相关"
                        }, {
                            type: "投诉举报"
                        }, {
                            type: "账号问题"
                        }, {
                            type: "改善建议"
                        }, {
                            type: "其他"
                        }],
                        style: {
                            "zIndex": 200
                        },
                        className: ["test-class"],
                        formData: {
                            entranceId: "iqiyi_live_PCW",
                            authCookie: c["default"].get("P00001"),
                            ptid: "01010021010010000000",
                            referer: window.location.href,
                            feedbackLog: f["default"].getPlayerLog(),
                            attachedInfo: o
                        }
                    };
                    a.e(0).then(a.t.bind(null, "b9c25e9ebb3ee6608f78", 7)).then(function(e) {
                        console.log("import...before1"),
                        e.reactRender({
                            dom: t,
                            props: r
                        }),
                        console.log("import...before2")
                    })["catch"](function(e) {
                        return console.error(e)
                    })
                } else
                    console.log("未获取到上层目录  -- feedback")
            }
        }
        ,
        o.getInstance = function() {
            return o.ins || (o.ins = new o),
            o.ins
        }
        ,
        o);
        function o() {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o)
        }
        n.ins = null,
        t["default"] = n
    },
    "ea671b6b6dbc8144f277": function(e, t, y) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var n = y("7e0ef422896a6b0d6693")
              , o = y("1f080957c4fbd4f86028")
              , r = y("ef27ce2cb14e12f800a9")
              , a = y("fa4e6c91b6a23ac6e195")
              , s = ""
              , l = ""
              , c = "QiyiPlayerLoggerLevel"
              , u = {
                OFF: {
                    value: 0,
                    name: "OFF"
                },
                ERROR: {
                    value: 1,
                    name: "ERROR"
                },
                WARN: {
                    value: 2,
                    name: "WARN"
                },
                INFO: {
                    value: 3,
                    name: "INFO"
                },
                DEBUG: {
                    value: 4,
                    name: "DEBUG"
                }
            }
              , f = parseInt(r.read(c), 10)
              , d = Array.prototype.slice
              , p = function p(e, t) {
                var i = ""
                  , n = e < 0
                  , o = String(Math.abs(e));
                return o.length < t && (i = new Array(t - o.length + 1).join("0")),
                (n ? "-" : "") + i + o
            }
              , h = function h() {
                var e = new Date;
                return e.getFullYear() + "-" + p(e.getMonth() + 1, 2) + "-" + p(e.getDate(), 2) + " " + p(e.getHours(), 2) + ":" + p(e.getMinutes(), 2) + ":" + p(e.getSeconds(), 2)
            }
              , _ = function _(e, t) {
                var i, n = "#FFA500";
                (e = d.call(e)).unshift("%c"),
                e.unshift("[" + t.name + "]"),
                e.unshift("%c[" + h() + " IQIYI_PLAYER_" + t.level.name + "]");
                var o = l || "";
                if (l = ("" !== o ? o + "\n" : "") + e.join("").replace(/(%c|IQIYI_PLAYER_)/gi, ""),
                "undefined" != typeof console)
                    try {
                        i = console.log,
                        t.level === u.WARN && console.warn ? (i = console.warn,
                        n = "#ff6cb7") : t.level === u.ERROR && console.error ? (i = console.error,
                        n = "#F30") : t.level === u.INFO && console.info ? i = console.info : t.level === u.DEBUG && console.info && (n = "#FFA500"),
                        t.print && i.apply(console, [e.join(" ") + " ", "background-color:#699f00;color:#fff;", "background-color:" + n + ";color:#fff;"])
                    } catch (r) {}
            }
              , g = n("Logger", {
                construct: function(e) {
                    this.context = {
                        name: e || "Unknown"
                    }
                },
                statics: {
                    levels: u,
                    _filterLevel: function() {
                        var e;
                        for (var t in u)
                            u[t].value === f && (e = u[t]);
                        return e || u.WARN
                    }(),
                    stringify: function(e) {
                        var t = "";
                        try {
                            t = JSON.stringify(e)
                        } catch (i) {}
                        return t
                    },
                    setLevel: function(e) {
                        e && "value"in e && (g._filterLevel = e,
                        r.write(c, e.value))
                    },
                    getLevel: function() {
                        return g._filterLevel
                    },
                    getLog: function() {
                        return l
                    }
                },
                methods: {
                    enabledFor: function(e) {
                        return e.value <= g._filterLevel.value
                    },
                    invoke: function(e, t) {
                        _(t, o({
                            level: e,
                            print: this.enabledFor(e)
                        }, this.context))
                    },
                    debug: function() {
                        this.invoke(u.DEBUG, arguments)
                    },
                    log: function() {
                        this.invoke(u.INFO, arguments)
                    },
                    info: function() {
                        this.invoke(u.INFO, arguments)
                    },
                    warn: function() {
                        this.invoke(u.WARN, arguments)
                    },
                    error: function() {
                        this.invoke(u.ERROR, arguments)
                    }
                }
            });
            setInterval(function() {
                var e = a(l);
                e !== s && (s = e,
                r.write("QiyiPlayerLogger", l))
            }, 3e4),
            i.exports = g
        }
        .call(t, y, t, e)) === undefined || (e.exports = i)
    },
    "eb44c738070cb540b825": function(e, t, i) {
        var n = i("645f6933273f83e7fc98");
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "hmr": !0,
            transform: void 0
        };
        o.insertInto = undefined;
        i("1e4534d1d62a11482e97")(n, o);
        n.locals && (e.exports = n.locals)
    },
    "ef27ce2cb14e12f800a9": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            var n = {}
              , o = {}
              , r = {}
              , a = 0
              , s = {
                getItem: function(e) {
                    return n[e]
                },
                setItem: function(e, t) {
                    n[e] = t
                },
                removeItem: function(e) {
                    delete n[e]
                }
            }
              , l = function() {
                try {
                    return window.localStorage.setItem("_Q_test_", 1),
                    window.localStorage.removeItem("_Q_test_"),
                    window.localStorage
                } catch (e) {}
                return s
            }()
              , c = function c() {
                0 === a && (clearTimeout(a),
                a = setTimeout(function() {
                    for (var e in a = 0,
                    o) {
                        try {
                            l.setItem(e, o[e])
                        } catch (i) {
                            (22 === i.code || 1014 === i.code && "NS_ERROR_DOM_QUOTA_REACHED" === i.name) && (r[e] = 0)
                        }
                        delete o[e]
                    }
                    for (var t in r)
                        l.removeItem(t),
                        delete r[e]
                }, 1e3))
            };
            i.exports = {
                PLAYER_VD_KEY: "QiyiPlayerVD",
                read: function(e) {
                    return n[e] || (n[e] = l.getItem(e)),
                    n[e]
                },
                write: function(e, t) {
                    n[e] = t,
                    o[e] = t,
                    c()
                },
                remove: function(e) {
                    delete n[e],
                    r[e] = 0,
                    c()
                }
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "ef7ae18e665193aece2b": function(e, t, i) {
        "use strict";
        var n = i("d2d397351e5e28db50b1")
          , o = i("6cf71ab803f6b2f90582")
          , r = i("d106339100d5557eedda")
          , a = i("8ff0c3383d7639777422")
          , s = Object.defineProperty;
        t.f = n ? s : function(e, t, i) {
            if (r(e),
            t = a(t, !0),
            r(i),
            o)
                try {
                    return s(e, t, i)
                } catch (n) {}
            if ("get"in i || "set"in i)
                throw TypeError("Accessors not supported");
            return "value"in i && (e[t] = i.value),
            e
        }
    },
    "f11c62a07e5387a88d2c": function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e
        }
    },
    "f179acb195d3655b3843": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = a(i("9f02978f1998980c265b"))
          , o = a(i("571dba6364f5ed9e44eb"))
          , r = a(i("c627e4f58ec4241c41a2"));
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        i("2ede7d11d137dfe1423d");
        var s, l = (function u(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(c, s = n["default"]),
        c.prototype.setList = function(e, t) {
            this._infoList = e,
            this._curIndex = Math.min(t, this._infoList.length),
            this._tfTitle.innerHTML = r["default"].getRenderedStringByKey2("carousel.listTitle", [this._infoList.length]),
            this._isShow ? this.__refreshList() : this._isRefreshList = !0
        }
        ,
        c.prototype.setCur = function(e) {
            this._infoList && (this._curIndex = Math.min(e, this._infoList.length),
            this.__refreshCur())
        }
        ,
        c.prototype.clear = function() {
            if (this._infoList = undefined,
            this._curIndex = 0,
            this._isRefreshList = !1,
            this._itemList)
                for (var e = 0; e < this._itemList.length; e++)
                    this._itemList[e].showOrHide(!1)
        }
        ,
        c.prototype.show = function(e) {
            this._isShow || (this._isShow = !0,
            this._parent || (this._parent = e,
            this._parent.appendChild(this._panel)),
            this._isRefreshList && this.__refreshList(),
            this._panel.style.display = "block",
            this._conScroll.scrollTop = 70 * this._curIndex,
            this._onShowOrHide(!0))
        }
        ,
        c.prototype.hide = function() {
            this._isShow && (this._isShow = !1,
            this._panel.style.display = "none",
            this._onShowOrHide(!1))
        }
        ,
        c.prototype.showOrHide = function(e) {
            this._isShow ? this.hide() : this.show(e)
        }
        ,
        c.prototype.destroy = function() {
            this._panel && this._parent && this._parent.removeChild(this._panel)
        }
        ,
        c.prototype.__refreshList = function() {
            if (this._infoList) {
                this._itemList || (this._itemList = []);
                for (var e = null, t = null, i = 0; i < this._infoList.length; i++)
                    e = this._infoList[i],
                    (t = this._itemList[i] || new o["default"](this._conScroll,i)).setInfo(e),
                    t.showOrHide(!0),
                    this._itemList[i] = t;
                for (var n = this._infoList.length; n < this._itemList.length; n++)
                    (t = this._itemList[n]).showOrHide(!1);
                this.__refreshCur()
            }
        }
        ,
        c.prototype.__refreshCur = function() {
            if (this._itemList)
                for (var e = null, t = 0, i = this._itemList.length; t < i; t++)
                    e = this._itemList[t],
                    t === this._curIndex ? e.setStatus(1) : t === this._curIndex + 1 || 0 === t && this._curIndex === i - 1 ? e.setStatus(2) : e.setStatus(0)
        }
        ,
        c.prototype.__initView = function() {
            this._panel = this.__createDom("div", "M706C61796572-carousel"),
            this._panel.appendChild(this.__createDom("i", "arrow-down")),
            this._panel.appendChild(this.__createDom("i", "mask-down")),
            this._panel.addEventListener ? (this._panel.addEventListener("click", function(e) {
                e.stopPropagation()
            }),
            this._panel.addEventListener("dblclick", function(e) {
                e.stopPropagation()
            })) : (this._panel.attachEvent("onclick", function(e) {
                e.cancelBubble = !0
            }),
            this._panel.attachEvent("ondblclick", function(e) {
                e.cancelBubble = !0
            })),
            this.__createTop(),
            this.__createScroll()
        }
        ,
        c.prototype.__createTop = function() {
            var e = this;
            this._panel.appendChild(this._conTop = this.__createDom("div", "con-top")),
            this._conTop.appendChild(this._tfTitle = this.__createDom("span")),
            this._conTop.appendChild(this._btnClose = this.__createDom("div", "close")),
            this._panel.addEventListener ? this._btnClose.addEventListener("click", function() {
                e.hide()
            }) : this._btnClose.attachEvent("onclick", function() {
                e.hide()
            })
        }
        ,
        c.prototype.__createScroll = function() {
            this._panel.appendChild(this._conScroll = this.__createDom("div", "con-scroll"))
        }
        ,
        c.prototype.__createDom = function() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "div"
              , t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : null
              , i = document.createElement(e);
            return t && (i.className = t),
            i
        }
        ,
        c);
        function c(e) {
            !function i(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c);
            var t = function n(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, s.call(this));
            return t._parent = null,
            t._infoList = undefined,
            t._itemList = undefined,
            t._curIndex = 0,
            t._isRefreshList = !1,
            t._isShow = !1,
            t._tfTitle = undefined,
            t._conScroll = undefined,
            t._onShowOrHide = e,
            t.__initView(),
            t
        }
        t["default"] = l
    },
    "f4f8d1db8536ad2b967a": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var r = i("9f02978f1998980c265b")
          , n = l(i("ef27ce2cb14e12f800a9"))
          , o = l(i("53065c83966dce0d1759"))
          , a = l(i("162f473717848ae5cb34"))
          , s = l(i("790825d0dabf4060a0d9"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, u = (function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, c = r.EventEmitter),
        f.prototype._init = function() {
            this._handlers || (this._handlers = {
                videostatus: this._onVideoStatus.bind(this),
                fullscreen: this._onFullScreen.bind(this)
            },
            this._player.on(s["default"].VIDEO_STATUS, this._handlers.videostatus),
            this._player.on(s["default"].CONTROL, this._handlers.fullscreen))
        }
        ,
        f.prototype.reinit = function() {
            this._enabled = !0
        }
        ,
        f.prototype.reset = function() {
            this._gasList = [],
            this._curGasIndex = 0,
            this._enabled = !1
        }
        ,
        f.prototype.destroy = function() {
            this._handlers && (this._player.off(s["default"].VIDEO_STATUS, this._handlers.videostatus),
            this._player.off(s["default"].CONTROL, this._handlers.fullscreen),
            this._handlers = null),
            this.bussiness && (this.bussiness.removeAllListeners(),
            this.bussiness = null)
        }
        ,
        f.prototype._onVideoStatus = function(e) {
            var t = e.type
              , i = e.data;
            switch (t) {
            case s["default"].VIDEO_READY:
                this._notify("loadstart", i);
                break;
            case s["default"].VIDEO_PLAY:
                this._notify("play", i),
                this._notify("playing", i);
                break;
            case s["default"].VIDEO_PAUSE:
                this._notify("pause", i);
                break;
            case s["default"].VIDEO_WAITE:
                this._notify("waiting", i);
                break;
            case s["default"].VIDEO_ERROR:
                this._notify("error", i);
                break;
            case s["default"].VIDEO_STOP:
                break;
            case s["default"].VIDEO_TIMEUPDATE:
                this._onTimeUpdate(e)
            }
        }
        ,
        f.prototype._onTimeUpdate = function(e) {
            this._notify("timeupdate");
            var t = this._player.getVideoTime();
            if (this._lastCurrentTime) {
                var i = t - this._lastCurrentTime;
                0 < i && i < 1 && this._setPlayerPlayTotalTimeOneDay(i)
            }
            this._lastCurrentTime = t
        }
        ,
        f.prototype._onFullScreen = function(e) {
            var t = e.type
              , i = e.data;
            t == s["default"].CONTROL_FULLSCREEN_SWITCH && (i.value ? this._notify("fullscreen") : this._notify("exitfullscreen")),
            t == s["default"].CONTROL_FULLPAGE_SWITCH && (i.value,
            this._player.$ares.resize(this.width(), this.height()),
            this._notify(this.isFullScreen() ? "fullscreen" : "exitfullscreen"))
        }
        ,
        f.prototype.notify = function(e, t) {
            this._notify(e, t)
        }
        ,
        f.prototype._notify = function(e, t) {
            var i = {
                type: e
            };
            t && (i.data = t),
            t && t.gas ? i.gas = t.gas : i.gas = this.getCurrentGas(),
            0 < this.listenerCount(e) && this.emit(e, i)
        }
        ,
        f.prototype.load = function(e) {
            this._gasList.push(e),
            e.file && !isNaN(e.offset) && 0 <= e.offset && this.bussiness.emit("_playdata_", e)
        }
        ,
        f.prototype.getEngineType = function() {
            return a["default"].os.android || a["default"].os.ios ? "" : "data"
        }
        ,
        f.prototype.getCurrentGas = function() {
            return this._player.$ares.getIsAdEnd() ? {
                videoEventId: this._player.$ares.getVideoEventId()
            } : this._curGasIndex < this._gasList.length ? this._gasList[this._curGasIndex] : null
        }
        ,
        f.prototype.hasNextGas = function() {
            return this._curGasIndex + 1 < this._gasList.length
        }
        ,
        f.prototype.getNextGas = function() {
            return this._curGasIndex++,
            this.getCurrentGas()
        }
        ,
        f.prototype.abort = function() {
            this._player.$ares.nextAres()
        }
        ,
        f.prototype.isVIP = function() {
            return this._isVip
        }
        ,
        f.prototype.getUserInfo = function() {
            return {
                "isVIP": this._player.$user.getIsVIP(),
                "passportCookie": this._player.$user.passportCookie(),
                "passportId": this._player.$user.getUid(),
                "isLogin": this._player.$user.isLogin(),
                "uaaUserId": o["default"].getFluid() || o["default"].getJsuid()
            }
        }
        ,
        f.prototype.adcontainer = function() {
            return this._container
        }
        ,
        f.prototype.video = function() {
            return this._player.$engine.getVideo()
        }
        ,
        f.prototype.play = function(e) {
            this._enabled && this._player.$engine.play(e)
        }
        ,
        f.prototype.pause = function(e) {
            this._enabled && this._player.$engine.pause(e)
        }
        ,
        f.prototype.addEventListener = function(e, t) {
            this.on(e, t)
        }
        ,
        f.prototype.removeEventListener = function(e, t) {
            this.off(e, t)
        }
        ,
        f.prototype.src = function(e) {
            return this._player.$engine.getSrc()
        }
        ,
        f.prototype.volume = function(e) {
            if (!(1 <= arguments.length))
                return this._player.$engine.getVolume();
            this._player.$engine.setVolume(e)
        }
        ,
        f.prototype.muted = function(e) {
            if (!(1 <= arguments.length))
                return this._player.$engine.getMuted() || 0 == this.volume();
            this._player.$engine.setMuted(e, !1),
            0 == e && 0 == this._player.$engine.getVolume() && this._player.$engine.setVolume(.8, !1)
        }
        ,
        f.prototype.height = function() {
            return this._container.offsetHeight
        }
        ,
        f.prototype.width = function() {
            return this._container.offsetWidth
        }
        ,
        f.prototype.currentTime = function() {
            return this._player.getVideoTime()
        }
        ,
        f.prototype.duration = function() {
            return this._player.getDuration()
        }
        ,
        f.prototype.buffered = function() {
            return this._player.getBufferTime()
        }
        ,
        f.prototype.sendUserActionPingback = function(e) {
            this._player.$pingback.sendUserAction(e)
        }
        ,
        f.prototype.fullscreentoggle = function() {
            this._player.$control.toggleFullScreen()
        }
        ,
        f.prototype.isFullScreen = function() {
            return this._player.$control.isFullScreen()
        }
        ,
        f.prototype.paused = function() {
            return this._player.$engine.isPaused()
        }
        ,
        f.prototype.isPaused = function() {
            return this._player.$engine.isPaused()
        }
        ,
        f.prototype.videoPlayedDurationInDay = function() {
            return this._getPlayerPlayTotalTimeOneDay().totalTime
        }
        ,
        f.prototype._getDate = function() {
            var e = new Date;
            return e.getFullYear() + "" + (e.getMonth() + 1) + e.getDate()
        }
        ,
        f.prototype._getPlayerPlayTotalTimeOneDay = function() {
            var e = n["default"].read(this.PLAYER_PLAYTOTALTIME_ONEDAY)
              , t = this._getDate()
              , i = 0;
            return e && (t = (e = e.split("|"))[0],
            i = parseFloat(e[1])),
            {
                day: t,
                totalTime: i
            }
        }
        ,
        f.prototype._setPlayerPlayTotalTimeOneDay = function(e) {
            var t = this._getPlayerPlayTotalTimeOneDay()
              , i = this._getDate();
            t.day === i ? t.totalTime += e : t.totalTime = e,
            n["default"].write(this.PLAYER_PLAYTOTALTIME_ONEDAY, i + "|" + t.totalTime)
        }
        ,
        f);
        function f(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this));
            return i.PLAYER_PLAYTOTALTIME_ONEDAY = "QiyiPlayerTimePlayedInDay",
            i._container = e,
            i._player = t,
            i.bussiness = new r.EventEmitter,
            i._curGasIndex = 0,
            i._gasList = [],
            i._enabled = !1,
            i._init(),
            i
        }
        t["default"] = u
    },
    "f7c33656140074fd558a": function(e, t, i) {
        "use strict";
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    "f90db8261bcdb8feae91": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            "error": {
                "report": "报告错误",
                "refresh": "刷新试试",
                "pluginInitFail": "插件初始化失败",
                "pluginInitFailFlash": "加载异常，请确认浏览器是否允许加载Flash插件",
                "pluginInitFailPCA": "加载异常，请更新客户端版本后重新打开直播",
                "pluginError": "插件错误",
                "ProgramNotExist": "节目信息不存在",
                "vrs": {
                    "default": "播放出了点问题，点击刷新看看吧",
                    "qpidWrong": "该节目无效，请确认输入网址是否正确",
                    "A00001": "请求参数无效",
                    "A00003": "内部请求异常",
                    "A00004": "播放出了点问题，点击刷新看看吧【A00004】",
                    "A00005": "请求数据不可用",
                    "A00011": "您还没有获得观看当前付费直播的权限",
                    "A00013": "很抱歉，本直播节目因为版权原因在您所在区域下线",
                    "A00020": "时间戳超时",
                    "A00110": "暂时无法观看，去看看其他节目吧【A00110】",
                    "A00111": "地域受限，去看看其他节目吧【A00111】",
                    "A00119": "您还没有获得观看当前付费直播的权限（网球会员）",
                    "A00120": "您还没有获得观看当前付费直播的权限（体育会员）"
                },
                "askQpIds": {
                    "default": "节目信息获取失败"
                },
                "ChargeFailed": "您还没有获得观看当前付费直播的权限",
                "SupportError_Flash": '当前浏览器尚未运行flashplayer，<a href="//www.adobe.com/go/getflashplayer" target="_blank" class="theme-color">点击运行</a><br/>请先下载安装flashplayer插件，并前去<br/>浏览器设置，将flash插件设置为在此网站上【始终允许】',
                "SupportError_FlashNotEnabled": '当前浏览器尚未运行flashplayer，<span class="theme-color">点击运行</span>，<br/>并前去浏览器设置，将flash插件设置为在此网站上【始终允许】',
                "SupportError_Mobile": "手机网页端不支持该类直播节目，<br/>请前往PC网页端/手机客户端观看当前直播节目",
                "SupportError_Engine": "当前平台不支持播放，<br/>请前往PC网页端/手机客户端观看当前直播节目",
                "SupportError_PCA": "本节目暂时无法播放，<br />请重启客户端或者浏览器试试。",
                "BrowserLow": "浏览器版本过低，推荐您下载使用高级浏览器提升体验",
                "PlayError": "对不起，播放出错了",
                "NetError": "网络出了点问题，点击刷新看看吧",
                "TechError": "网络出了点问题，点击刷新看看吧",
                "userCheckVipError": "您已同时在超过两台设备观看会员节目，如需继续观看，请先在其他设备上退出观看。"
            },
            "feedback": {
                "LiveWaiting_PPC": "直播未开始，去看看其他节目吧",
                "LiveWaiting_PGC": "直播未开始，去看看其他节目吧",
                "LivePaused": "主播暂时离开了，马上回来",
                "LiveEnded": "直播已结束，去看看其他节目吧",
                "LiveEndWithVOD": "直播已结束，<span class='theme-color'><a target='_blank' href='{0}'><u>全场回放</u></a></span>",
                "LiveEndWithReplay": "直播已结束，<span class='theme-color'><a href='{0}'><u>点击回看</u></a></span>",
                "LivePlaybackEnded": "直播已结束，去看看其他节目吧"
            },
            "control": {},
            "definition": {
                "speed": ["极速", "极速"],
                "smooth": ["流畅 360P", "流畅"],
                "high": ["高清 480P", "高清"],
                "super": ["超清", "超清"],
                "720p": ["超清 720P", "超清"],
                "1080p": ["蓝光 4M", "蓝光 4M"],
                "1080p_ppc": ["蓝光 1080P", "蓝光"],
                "1080p50": ["蓝光 1080P50", "1080P50"],
                "1080p6m": ["蓝光 6M", "蓝光 6M"],
                "1080p8m": ["蓝光 8M", "蓝光 8M"],
                "2K": ["2K", "2K"],
                "4k": ["蓝光 4K", "蓝光 4K"],
                "720po": ["原画", "原画"],
                "1080po": ["原画", "原画"],
                "2Ko": ["原画", "原画"]
            },
            "tips": {
                "seeking": "正在切换到<font color='#00cc36'>{0}</font>码流",
                "seekend": "已成功切换到<font color='#00cc36'>{0}</font>画质",
                "ppcTryWatch": "免费试看<font color='#00cc36'> 6 </font>分钟，收看完整版请<a href='javascript:;'> <font color='#00cc36'>立即购买</font></a>",
                "ppcTryWatchCountDown": "试看即将结束…<font color='#00cc36'>{0}</font>秒 <a href='javascript:;'><font color='#00cc36'>立即购买</font></a>",
                "waiting": {
                    "pgc": "loading",
                    "pgc_delay": "loading \n网络有点慢，正在努力加载",
                    "ppc": "直播正在缓冲, 请稍候 ...",
                    "timeout_def": "您的网络环境不顺畅，请稍候",
                    "timeout_defs": "『{0}』码流在当前网络环境比较卡，降低清晰度试试",
                    "download_rate": "下载速率：",
                    "buffer_ing": "正在缓冲..."
                },
                "backlive": "已同步至最新进度",
                "panolowtips": "浏览器版本过低，不支持全景播放，推荐您下载高级浏览器",
                "userCheckVipTips": "您的账号在多台设备同时播放视频，存在安全风险，请尽快退登其他设备或立即修改密码"
            },
            "carousel": {
                "listTitle": "播单 ({0})",
                "listCur": "正在播放",
                "listNext": "即将播放",
                "loadingCar": "即将轮播",
                "loadingLive": "即将直播",
                "remindCar": "已切换为轮播",
                "remindLive": "已切换为直播",
                "remindCur": "<font color='#00ff00'>当前播放：</font>{0}"
            },
            "barrset": {
                "titleArea": "弹幕区域",
                "titleSize": "字体大小",
                "titleAlpha": "不透明度",
                "titleSpeed": "弹幕速度",
                "titleCompere": "开启主持人弹幕",
                "full": "全屏",
                "top0": "中上方",
                "top": "上方",
                "bottom": "下方",
                "size0": "极小",
                "size1": "小",
                "size2": "正常",
                "size3": "大",
                "size4": "极大",
                "speed0": "极慢",
                "speed1": "慢",
                "speed2": "正常",
                "speed3": "快",
                "speed4": "极快"
            },
            "rightmenu": {
                "version": "版本号",
                "save": "保存日志",
                "upload": "上传日志",
                "feedback": "反馈问题",
                "intro": "快捷键说明"
            }
        }
    },
    "fa0af53c32dc96c4b266": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAA2klEQVQokXXSzY2DMBCG4W/Gwtekk83BEuLmEiiBEiiFFrYDSuCK5EPSQUpIrh6hySWsRl6bo/Hjn1emlNJFRJau6+YQwhuNz85jEVkBTDnnLaV0aYGc8wZgEpGVmXlW1RcR3WrwBER0U9UXM88EAPu+/xzHsRHRVVXv3vsYQniXwDkX+75/0LliCVV1JKK1BABA9igWnmMlAAC26PtjLDqMFvxD3whLgZYyDltgLw1galXlGnDOxWEYfp1zsQaplbVV1XsfWUSqWW0cu+PfiwDwrIESAngy8/wBQcHUrNqnxh0AAAAASUVORK5CYII="
    },
    "fa4e6c91b6a23ac6e195": function(e, t, i) {
        "use strict";
        var n;
        (n = function(e, t, i) {
            function s(e, t, i, n, o, r) {
                return g(function a(e, t) {
                    return e << t | e >>> 32 - t
                }(g(g(t, e), g(n, r)), o), i)
            }
            function d(e, t, i, n, o, r, a) {
                return s(t & i | ~t & n, e, t, o, r, a)
            }
            function p(e, t, i, n, o, r, a) {
                return s(t & n | i & ~n, e, t, o, r, a)
            }
            function h(e, t, i, n, o, r, a) {
                return s(t ^ i ^ n, e, t, o, r, a)
            }
            function _(e, t, i, n, o, r, a) {
                return s(i ^ (t | ~n), e, t, o, r, a)
            }
            function g(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
            }
            i.exports = function(e) {
                return function o(e) {
                    for (var t = "0123456789abcdef", i = "", n = 0; n < 4 * e.length; n++)
                        i += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
                    return i
                }(function f(e, t) {
                    e[t >> 5] |= 128 << t % 32,
                    e[14 + (t + 64 >>> 9 << 4)] = t;
                    for (var i = 1732584193, n = -271733879, o = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
                        var s = i
                          , l = n
                          , c = o
                          , u = r;
                        n = _(n = _(n = _(n = _(n = h(n = h(n = h(n = h(n = p(n = p(n = p(n = p(n = d(n = d(n = d(n = d(n, o = d(o, r = d(r, i = d(i, n, o, r, e[a + 0], 7, -680876936), n, o, e[a + 1], 12, -389564586), i, n, e[a + 2], 17, 606105819), r, i, e[a + 3], 22, -1044525330), o = d(o, r = d(r, i = d(i, n, o, r, e[a + 4], 7, -176418897), n, o, e[a + 5], 12, 1200080426), i, n, e[a + 6], 17, -1473231341), r, i, e[a + 7], 22, -45705983), o = d(o, r = d(r, i = d(i, n, o, r, e[a + 8], 7, 1770035416), n, o, e[a + 9], 12, -1958414417), i, n, e[a + 10], 17, -42063), r, i, e[a + 11], 22, -1990404162), o = d(o, r = d(r, i = d(i, n, o, r, e[a + 12], 7, 1804603682), n, o, e[a + 13], 12, -40341101), i, n, e[a + 14], 17, -1502002290), r, i, e[a + 15], 22, 1236535329), o = p(o, r = p(r, i = p(i, n, o, r, e[a + 1], 5, -165796510), n, o, e[a + 6], 9, -1069501632), i, n, e[a + 11], 14, 643717713), r, i, e[a + 0], 20, -373897302), o = p(o, r = p(r, i = p(i, n, o, r, e[a + 5], 5, -701558691), n, o, e[a + 10], 9, 38016083), i, n, e[a + 15], 14, -660478335), r, i, e[a + 4], 20, -405537848), o = p(o, r = p(r, i = p(i, n, o, r, e[a + 9], 5, 568446438), n, o, e[a + 14], 9, -1019803690), i, n, e[a + 3], 14, -187363961), r, i, e[a + 8], 20, 1163531501), o = p(o, r = p(r, i = p(i, n, o, r, e[a + 13], 5, -1444681467), n, o, e[a + 2], 9, -51403784), i, n, e[a + 7], 14, 1735328473), r, i, e[a + 12], 20, -1926607734), o = h(o, r = h(r, i = h(i, n, o, r, e[a + 5], 4, -378558), n, o, e[a + 8], 11, -2022574463), i, n, e[a + 11], 16, 1839030562), r, i, e[a + 14], 23, -35309556), o = h(o, r = h(r, i = h(i, n, o, r, e[a + 1], 4, -1530992060), n, o, e[a + 4], 11, 1272893353), i, n, e[a + 7], 16, -155497632), r, i, e[a + 10], 23, -1094730640), o = h(o, r = h(r, i = h(i, n, o, r, e[a + 13], 4, 681279174), n, o, e[a + 0], 11, -358537222), i, n, e[a + 3], 16, -722521979), r, i, e[a + 6], 23, 76029189), o = h(o, r = h(r, i = h(i, n, o, r, e[a + 9], 4, -640364487), n, o, e[a + 12], 11, -421815835), i, n, e[a + 15], 16, 530742520), r, i, e[a + 2], 23, -995338651), o = _(o, r = _(r, i = _(i, n, o, r, e[a + 0], 6, -198630844), n, o, e[a + 7], 10, 1126891415), i, n, e[a + 14], 15, -1416354905), r, i, e[a + 5], 21, -57434055), o = _(o, r = _(r, i = _(i, n, o, r, e[a + 12], 6, 1700485571), n, o, e[a + 3], 10, -1894986606), i, n, e[a + 10], 15, -1051523), r, i, e[a + 1], 21, -2054922799), o = _(o, r = _(r, i = _(i, n, o, r, e[a + 8], 6, 1873313359), n, o, e[a + 15], 10, -30611744), i, n, e[a + 6], 15, -1560198380), r, i, e[a + 13], 21, 1309151649), o = _(o, r = _(r, i = _(i, n, o, r, e[a + 4], 6, -145523070), n, o, e[a + 11], 10, -1120210379), i, n, e[a + 2], 15, 718787259), r, i, e[a + 9], 21, -343485551),
                        i = g(i, s),
                        n = g(n, l),
                        o = g(o, c),
                        r = g(r, u)
                    }
                    return Array(i, n, o, r)
                }(function n(e) {
                    for (var t = Array(), i = 0; i < 8 * e.length; i += 8)
                        t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
                    return t
                }(e), 8 * e.length))
            }
        }
        .call(t, i, t, e)) === undefined || (e.exports = n)
    },
    "fb885b8dee52c75a3d84": function(e, t, a) {
        "use strict";
        var i;
        (i = function(e, t, i) {
            var o = a("1f080957c4fbd4f86028")
              , r = {}
              , n = {
                get: function(e, t) {
                    var i = "";
                    if ((t = o({
                        memory: !1
                    }, t, !0)).memory && r.hasOwnProperty(e))
                        i = r[e];
                    else {
                        if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)) {
                            var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie);
                            n && (i = n[2] || "")
                        }
                        "string" == typeof i && (i = decodeURIComponent(i)),
                        t.memory && (r[e] = i)
                    }
                    return i
                },
                set: function(e, t, i) {
                    i = i || {},
                    t = encodeURIComponent(t);
                    var n = i.expires;
                    "number" == typeof i.expires && (n = i.expires <= 0 ? new Date(0) : new Date).setTime(n.getTime() + i.expires),
                    delete r[e],
                    document.cookie = e + "=" + t + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toUTCString() : "") + (i.domain ? "; domain=" + i.domain : "")
                },
                remove: function(e, t) {
                    (t = t || {}).expires = -1,
                    this.set(e, "", t)
                }
            };
            i.exports = n
        }
        .call(t, a, t, e)) === undefined || (e.exports = i)
    },
    "fbaecf455b7417a2c79b": function(e, t, i) {
        "use strict";
        t.__esModule = !0,
        t["default"] = {
            ACTION_CONTROL: "controls",
            ACTION_NATIVE: "native",
            ACTION_CODE: "code"
        }
    },
    "fd0b44f556392d6a75ac": function(e, t, a) {
        "use strict";
        var i, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (i = function(e, t, i) {
            var n = a("1f080957c4fbd4f86028")
              , h = a("fa4e6c91b6a23ac6e195")
              , _ = document
              , o = function o() {}
              , g = {}
              , u = {
                "*": "*/".concat("*"),
                "text": "text/plain",
                "html": "text/html",
                "xml": "application/xml, text/xml",
                "json": "application/json, text/javascript"
            }
              , f = {
                "*": null,
                "text": null,
                "html": null,
                "xml": null,
                "json": function(e) {
                    var t = {}
                      , i = window.JSON ? JSON.parse : function() {
                        return {}
                    }
                    ;
                    try {
                        t = i(e)
                    } catch (n) {}
                    return t
                }
            }
              , y = {
                method: "get",
                dataType: "*",
                timeout: 1e4,
                charset: "utf-8",
                cache: !0,
                withCredentials: !0,
                jsonpCallback: "callback",
                complete: o,
                success: o,
                failure: o
            }
              , b = function b(e) {
                var t = [];
                if ("object" == (void 0 === e ? "undefined" : s(e)))
                    for (var i in e)
                        t[t.length] = encodeURIComponent(i) + "=" + encodeURIComponent(e[i]);
                return t.join("&").replace(/%20/g, "+")
            }
              , d = function d(o) {
                n(o = o || {}, y);
                var r = o.url
                  , a = o.params || {}
                  , s = o.success
                  , l = o.failure;
                r && function c() {
                    var t, e = {}, i = b(a);
                    e.params = a,
                    e.url = r + (0 < i.length ? (/\?/i.test(r) ? "&" : "?") + i : ""),
                    "function" == typeof o.beforeSend && (e = o.beforeSend(e)),
                    window.XDomainRequest ? ((t = new XDomainRequest).onprogress = function() {}
                    ,
                    t.ontimeout = function() {}
                    ,
                    t.onerror = function() {}
                    ,
                    t.onload = function() {
                        var e = f[o.dataType] ? f[o.dataType](t.responseText) : t.responseText;
                        s(e)
                    }
                    ,
                    t.open(o.method, e.url)) : ((t = new XMLHttpRequest).withCredentials = o.withCredentials,
                    t.onreadystatechange = function n() {
                        var e;
                        4 == t.readyState && (e = f[o.dataType] ? f[o.dataType](t.responseText) : t.responseText,
                        200 == t.status ? s(e) : l(t.statusText, e, t.status))
                    }
                    ,
                    t.open(o.method, e.url),
                    t.timeout = o.timeout,
                    t.setRequestHeader("Accept", u[o.dataType])),
                    setTimeout(function() {
                        t.send()
                    }, 0)
                }()
            }
              , r = function r(e) {
                n(e = e || {}, y),
                e.dataType = "json",
                d(e)
            }
              , m = function m(o) {
                n(o = o || {}, y);
                var r = o.url
                  , a = o.params || {}
                  , s = o.success
                  , l = o.failure
                  , c = "Q" + h(o.fixedCallback || r)
                  , u = !!o.memory
                  , f = h(r + b(a))
                  , e = g[f];
                if (r)
                    if (u && e && s)
                        s(e);
                    else {
                        var d = function d(e, t, i) {
                            window[c] = undefined;
                            try {
                                delete window[c]
                            } catch (n) {}
                            switch (e) {
                            case "success":
                                u && (g[f] = i),
                                s(i);
                                break;
                            case "fail":
                                l(i, t)
                            }
                            o.complete(i)
                        };
                        window[c] = function(e) {
                            d("success", "200", e)
                        }
                        ,
                        function p() {
                            var i, e = {}, n = _.createElement("script");
                            n.async = !0,
                            n.type = "text/javascript",
                            n.charset = o.charset;
                            var t = function t() {
                                if (n)
                                    try {
                                        n.onload(null, !0)
                                    } catch (e) {}
                            };
                            n.onload = n.onreadystatechange = function(e, t) {
                                !t && n.readyState && !/loaded|complete/.test(n.readyState) || (n.onload = n.onreadystatechange = null,
                                n.parentNode && n.parentNode.removeChild(n),
                                n = null,
                                clearTimeout(i))
                            }
                            ,
                            n.onerror = function(e) {
                                d("fail", null),
                                t()
                            }
                            ,
                            i = setTimeout(function() {
                                d("fail", 408),
                                t()
                            }, o.timeout),
                            a[o.jsonpCallback] = c,
                            e.url = r + (/\?/i.test(r) ? "&" : "?") + b(a),
                            e.params = a,
                            "function" == typeof o.beforeSend && (e = o.beforeSend(e) || e),
                            n.src = e.url,
                            _.getElementsByTagName("head")[0].appendChild(n)
                        }()
                    }
            }
              , l = function l(e, t, i) {
                if ("string" == typeof t) {
                    var n = i === undefined || i;
                    if (e) {
                        var o = [];
                        for (var r in n && (e._ = +new Date),
                        e)
                            o.push(r + "=" + encodeURIComponent(e[r]));
                        var a = t + "?" + o.join("&")
                          , s = new Image;
                        s.onload = s.onerror = s.onabort = function() {
                            s.onload = s.onerror = s.onabort = null,
                            s = null
                        }
                        ,
                        s.src = a
                    }
                }
            };
            i.exports = {
                "serializeParam": b,
                "ajax": d,
                "json": r,
                "jsonp": m,
                "beacon": l
            }
        }
        .call(t, a, t, e)) === undefined || (e.exports = i)
    },
    "fe7c5965b255aa0a5065": function(e, t, i) {
        var n = i("86adf03dddb7c33a3de2");
        (e.exports = i("c138e55a31f3f8960e99")(!1)).push([e.i, '/* 广告绝对定位 防止与其他浮层交错 */\n.pw-ares {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.pw-ares .voice-no {\n  background-position: 0 0 !important;\n}\n.pw-ares .voice-big {\n  background-position: -65px 0 !important;\n}\n.pw-ares .btn-play {\n  border: 10px dashed transparent;\n  border-left: 15px solid #ababab;\n  display: inline-block;\n  left: 20px;\n  top: 10px;\n  position: absolute;\n  outline: 0;\n}\n.pw-ares .btn-pause {\n  display: inline-block;\n  position: absolute;\n  left: 20px;\n  top: 13px;\n  height: 15px;\n  width: 2px;\n  background-color: #ababab;\n}\n.pw-ares .btn-pause:before {\n  content: "";\n  display: block;\n  position: absolute;\n  background-color: #ababab;\n  height: 15px;\n  width: 2px;\n  left: 10px;\n}\n.pw-ares .voice-no {\n  background-position: 0 0 !important;\n}\n.pw-ares .voice-big {\n  background-position: -65px 0 !important;\n}\n.pw-ares .bottom-public .know-detail {\n  padding: 9px 15px;\n  border-radius: 30px;\n  background: rgba(26, 26, 26, 0.8);\n  color: #fff;\n  line-height: 18px;\n  font-size: 14px;\n  right: 80px;\n  text-align: right;\n  position: absolute;\n}\n.pw-ares .voice-icon i,\n.pw-ares .bottom-public_voice i {\n  background: url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;\n  width: 18px;\n  height: 14px;\n  position: relative;\n  display: inline-block;\n  top: 13px;\n  cursor: pointer;\n  left: 5px;\n}\n.pw-ares .public-screen i {\n  background: url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: relative;\n  top: 7px;\n  left: 9px;\n}\n.pw-ares .public-screen .screen-small {\n  background-position: -34px -28px;\n}\n.pw-ares .public-screen .screen-all {\n  background-position: -65px -28px;\n}\n.pw-ares .bottom-public_play:hover .btn-play {\n  border-left-color: #6cc900;\n}\n.pw-ares .bottom-public_play:hover .btn-pause,\n.pw-ares .bottom-public_play:hover .btn-pause:before {\n  background-color: #6cc900;\n}\n.pw-ares .bottom-public {\n  position: absolute;\n  bottom: 0;\n  height: 56px;\n  width: 100%;\n  z-index: 100;\n}\n.pw-ares .bottom-public .know-detail:hover {\n  color: #57a900;\n}\n.pw-ares .bottom-public .bottom-public_play,\n.pw-ares .bottom-public .bottom-public_voice {\n  background: rgba(26, 26, 26, 0.8);\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  position: absolute;\n  text-align: left;\n}\n.pw-ares .bottom-public .bottom-public_play {\n  left: 20px;\n}\n.pw-ares .bottom-public .bottom-public_voice {\n  left: 74px;\n  text-align: left;\n}\n.pw-ares .bottom-public .bottom-public_play .btn-play {\n  left: 12px;\n  top: 9px;\n  transition: none;\n}\n.pw-ares .bottom-public .bottom-public_play .btn-pause {\n  left: 12px;\n  top: 10px;\n  opacity: 1;\n  transform: scale(1);\n}\n.pw-ares .bottom-public .bottom-public_play .btn-pause:before {\n  opacity: 1;\n  transform: scale(1);\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-middle {\n  left: 3px;\n  top: 11px;\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-big {\n  left: 1px;\n  top: 11px;\n  width: 26px;\n}\n.pw-ares .bottom-public .bottom-public_voice:hover i.voice-big {\n  background-position: -58px -180px !important;\n  left: 2px;\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-no {\n  left: 10px;\n  top: 11px;\n}\n.pw-ares .bottom-public .bottom-public_play:hover .btn-stop,\n.pw-ares .bottom-public .bottom-public_play:hover .btn-stop:before {\n  background-color: #57a900;\n}\n.pw-ares .bottom-public .bottom-public_play:hover .btn-pasue {\n  border-left-color: #57a900;\n}\n.pw-ares .bottom-public .public-screen {\n  background: rgba(26, 26, 26, 0.8);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  position: absolute;\n  right: 20px;\n  text-align: left;\n}\n.pw-ares .public-screen:hover .screen-small {\n  background-position: 0 -28px;\n}\n.pw-ares .public-screen:hover .screen-all {\n  background-position: -94px -28px;\n}\n.pw-ares .btn-play {\n  border: 0;\n  width: 17px;\n  height: 19px;\n  background: url(//www.qiyipic.com/common/fix/pcWeb-img/icon-all.png) no-repeat -330px -240px;\n  top: 8px;\n}\n.pw-ares .btn-pause {\n  width: 6px;\n  height: 19px;\n  border-radius: 3px;\n  top: 8px;\n}\n.pw-ares .btn-pause:before {\n  width: 6px;\n  height: 19px;\n  border-radius: 3px;\n  left: 12px;\n}\n.pw-ares .bottom-public .bottom-public_play .btn-pause {\n  left: 9px;\n  top: 9px;\n}\n/* yellow样式*/\n.pw-ares .btn-play {\n  background: url(' + n(i("85240857f777a1fdb556")) + ") no-repeat;\n  background-size: contain;\n  width: 16px !important;\n  height: 16px !important;\n  top: 2px;\n  left: 0px;\n}\n.pw-ares .btn-pause,\n.pw-ares .btn-pause:before {\n  background-color: #fff;\n}\n.pw-ares .btn-pause {\n  width: 4px;\n  height: 16px;\n}\n.pw-ares .btn-pause:before {\n  width: 4px;\n  height: 16px;\n  left: 10px;\n}\n.pw-ares .btn-pause {\n  width: 4px;\n  height: 16px;\n  border-radius: 3px;\n  top: 2px;\n  left: 0px;\n}\n.pw-ares .bottom-public_play:hover .btn-pause,\n.pw-ares .bottom-public_play:hover .btn-pause:before {\n  background-color: #00cc36;\n}\n.pw-ares .bottom-public .bottom-public_play .btn-pause {\n  left: 11px;\n  top: 10px;\n}\n.pw-ares .bottom-public .bottom-public_play .btn-play {\n  left: 12px;\n  top: 10px;\n  transition: none;\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-big {\n  left: 1px;\n  top: 9px;\n  width: 26px;\n}\n.pw-ares .bottom-public_voice i,\n.pw-ares .voice-icon i {\n  width: 18px;\n  height: 14px;\n  cursor: pointer;\n  top: 6px !important;\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-big {\n  background-position: 0% 0% !important;\n  background-size: contain;\n  left: 6px;\n}\n.pw-ares .bottom-public_voice i {\n  background: url(" + n(i("b2b8be6396fc1261e889")) + ") no-repeat;\n  width: 26px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  top: 13px;\n  cursor: pointer;\n  left: 5px;\n}\n.pw-ares .bottom-public .bottom-public_voice:hover i.voice-big {\n  background-position: 0 0!important;\n  background-size: contain !important;\n  left: 6px;\n  background: url(" + n(i("a56a6a7c76ca6dd06d55")) + ") no-repeat;\n  width: 26px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  top: 6px !important;\n}\n.pw-ares .bottom-public .bottom-public_voice i.voice-no {\n  background: url(" + n(i("3923ac886da45705f8da")) + ") no-repeat;\n  width: 26px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  top: 13px;\n  cursor: pointer;\n  left: 5px;\n  background-position: 0% 0% !important;\n  background-size: contain !important;\n  left: 6px;\n}\n.pw-ares .bottom-public .bottom-public_voice:hover i.voice-no {\n  background: url(" + n(i("0ea7086ffc65fc9f07b7")) + ") no-repeat;\n  width: 26px;\n  height: 24px;\n  position: relative;\n  display: inline-block;\n  top: 13px;\n  cursor: pointer;\n  left: 5px;\n  background-position: 0% 0% !important;\n  background-size: contain !important;\n  left: 6px;\n}\n.pw-ares .bottom-public .bottom-public_play:hover .btn-play {\n  background: url(" + n(i("9b079fedddfbc0447f43")) + ") no-repeat;\n  left: 12px;\n  top: 10px;\n  background-size: contain;\n}\n.pw-ares .bottom-public .know-detail:hover {\n  color: #00cc36 !important;\n}\n.pw-ares .ad-screen .screen-small,\n.pw-ares .public-screen .screen-small {\n  background-position: 0% 0% !important;\n  background: url(" + n(i("2963f220367348be9066")) + ") no-repeat;\n  /* top: 7px;\n    left: 8px; */\n}\n.pw-ares .public-screen:hover .screen-small {\n  background-position: 0% 0% !important;\n  background: url(" + n(i("c509be60f977c55bba05")) + ") no-repeat;\n}\n.pw-ares .ad-screen .screen-all,\n.pw-ares .public-screen .screen-all {\n  background-position: 0% 0% !important;\n  background: url(" + n(i("210b3a341843dbd006ae")) + ") no-repeat;\n}\n.pw-ares .public-screen:hover .screen-all {\n  background-position: 0% 0% !important;\n  background: url(" + n(i("c3b9dc21bd76ffaf751f")) + ") no-repeat;\n}\n.pw-ares .public-screen i {\n  width: 19px;\n  height: 19px;\n  top: 8px;\n  left: 8px !important;\n}\n.pw-ares .cd-trueview-time {\n  color: #00cc36;\n}\n.pw-ares .tp_nointerest-btm span {\n  color: #00cc36;\n}\n.pw-ares .tp_vip-detial a:hover,\n.pw-ares .tp_vip-free a:hover {\n  color: #00cc36 !important;\n}\n/* 爱奇艺会员推荐左对齐，跟图标一齐*/\n.pw-ares .tp_vip-show {\n  text-align: left !important;\n}\n.pw-ares .cupid-public-time .public-vip:hover {\n  color: #00cc36;\n}\n.pw-ares .public-vip:hover .public-vip-text,\n.public-vip:hover .vip-marketing-doc {\n  color: #00cc36 !important;\n}\n", ""])
    },
    "fea8cc477f6f9024901c": function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var n = l(i("6e5a4cc3d3799586c7c5"))
          , o = l(i("162f473717848ae5cb34"))
          , r = l(i("c627e4f58ec4241c41a2"))
          , a = l(i("343def12cad299c54e12"))
          , s = l(i("c779f0f9ff7f0eb554cb"));
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c, u = (function d(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(f, c = a["default"]),
        f.prototype.browserCheck = function() {
            (o["default"].browser.CHROME && !o["default"].browser.edge && o["default"].version.chrome <= 45 || o["default"].browser.IE && o["default"].version.ie <= 8) && this.show({
                content: r["default"].getConfig("error.BrowserLow"),
                timeout: 3e3
            })
        }
        ,
        f.prototype.show = function(e) {
            var t = this;
            e.content && (this._view || (this._view = new n["default"](this._container)),
            this._view.show(e.content),
            this.__tid && clearTimeout(this.__tid),
            this.__tid = setTimeout(function() {
                t.hide(),
                t.__tid = 0
            }, e.timeout || 3e3))
        }
        ,
        f.prototype.hide = function(e) {
            this._view && this._view.hide()
        }
        ,
        f.prototype.destroy = function() {
            this._view && (this._view.destroy(),
            this._view = null),
            c.prototype.destroy.call(this)
        }
        ,
        f);
        function f(e, t) {
            !function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var i = function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, c.call(this, e, t));
            return i._view = null,
            i._type = s["default"].NOTIFICATION,
            c.prototype.init.call(i),
            i.browserCheck(),
            i
        }
        t["default"] = u
    },
    "fff80c4cf0e2e90ff032": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAiCAYAAACHpl23AAAAAXNSR0IArs4c6QAAAv5JREFUaAXtW+1LU2EU/7mZTvoSZJG6wRppVFohvToIRlD0Qb9EFtK3YjAsiMwxgkBIelEmEYUSBREV0cf6A/rSC71AxoZS2jXb1Eqr0Qsabat7LlxZFxz57OmJC+fAXu495znn8PtxnnvOA7dox962XZls5hIAt/5hsQ8CSafDGXQwefZhzJKpm7hz6De58izI2OjSTQSy2BgBJtDG5FHqTCATaHMEbJ4+VyATaHMEbJ4+V6DNCSwuNP8yVymamwLYuqEWVcvKDXdj76bw6Fkct+/cw/TMj0JD8Po8CBRt33PkVx59XtX62mq0h/ahfPEiaG/G8FJLGPYrfR74vFWY+phCd+8t9MeH8vphpTgCwgQSed0nQhhJTKDrwk0M6wTmygqdwPChFiz3VKD9ZC+TmAuOxP9CBNK2eTkaxvfpGbRGevAznYHLVYJtm9fBVVqCx88H8H7yMxYUO3HxzFEsLHPhYFsXb6cSiTNdCTUx9MyjbZMqzySv7+wxhFtbcPjAblzpicBTudTQkQ3Z0hoW+QgIEdigNyz0zDO3zdU1XrgrluD0+evoPHfNqML6tTVGtmRDttTksMhHQIjASr3bNBsWSqk/PoxQJIqHeufZtNOvV14asUFtNluyNTvU2Zv8RwoCQgRaI2ezWQxpSQT3N2JVtReRzj5oo+NWM77+BwgIzYE059GoYBXaLhM37uLFwOs/VGRLa1jkIyBUgTSk05xHo0Ku+DfWIeCvz71l2JAtrWGRj4AQgXTCQkM6zXk0KpiS+vJNr7RJ89LQkQ3Z0hoW+Qg4fWu2dMzXbVqf+7S3E2huDKBhUx0GX43iU+orHjyN4f6TmOGOqvPU8aAxyHdEryI5/mG+Ydj+LxAQGuRNv3yUZiLx/34LIpDSNg+zaTak8YKED7MNGJR8FUygkiw5yJwICDUxc3pjhXIEmEDlkMsNyATKxVO5NyZQOeRyAzKBcvFU7o0JVA653IBMoFw8lXsjApPKo3JAWQgkHfSSIJMoC0+lfowXPH8DGiz4cijUhgIAAAAASUVORK5CYII="
    }
}));
