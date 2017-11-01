! function() {
	var t = {},
		e = {
			id: "mz7pa2d7",
			dm: [],
			js: "",
			etrk: [],
			icon: "",
			ctrk: !0,
			align: 1,
			nv: 1,
			vdur: 18e5,
			age: 31536e6,
			rec: 0,
			rp: [],
			trust: 0,
			vcard: 0,
			comm: 1,
			apps: "",
			weixin: 1
		},
		n = {
			google: ["utm_campaign", "utm_source", "utm_medium", "utm_content", "utm_term"],
			baidu: ["hmsr", "hmpl", "hmcu", "hmkw", "hmci"],
			miaozhen: ["mz_ca", "mz_sp", "mz_kw", "mz_sb"]
		},
		o = !0,
		r = !1,
		i = null;
	t.browser = {}, t.browser.IE = /msie (\d+\.\d+)/i.test(navigator.userAgent), t.browser.cookieEnabled = navigator.cookieEnabled, t.browser.javaEnabled = navigator.javaEnabled(), t.browser.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "", t.browser.screen = (window.screen.width || 0) + "x" + (window.screen.height || 0), t.browser.colorDepth = window.screen.colorDepth || 0, t.dom = {}, t.dom.get = function(t) {
			return document.getElementById(t)
		}, t.dom.getA = function(t) {
			var e;
			for (e = "A";
				(t = t.parentNode) && 1 == t.nodeType;)
				if (t.tagName == e) return t;
			return i
		}, (t.dom.ready = function() {
			function t() {
				if (!t.status) {
					t.status = o;
					for (var e = 0, n = c.length; n > e; e++) c[e]()
				}
			}

			function e() {
				try {
					document.documentElement.doScroll("left")
				} catch (t) {
					return void setTimeout(e, 1)
				}
				t()
			}
			var n, a = r,
				c = [];
			return document.addEventListener ? n = function() {
					document.removeEventListener("DOMContentLoaded", n, r), t()
				} : document.attachEvent && (n = function() {
					"complete" === document.readyState && (document.detachEvent("onreadystatechange", n), t())
				}),
				function() {
					if (a) {
						if (document.attachEvent) {
							document.attachEvent("onreadystatechange", n), window.attachEvent("onload", t);
							var c = r;
							try {
								c = window.frameElement == i
							} catch (s) {}
							document.documentElement.doScroll && c & e()
						}
					} else a = o, "complete" === document.readyState ? t.status = o : document.addEventListener && (document.addEventListener("DOMContentLoaded", n, r), window.addEventListener("load", t, r))
				}(),
				function(e) {
					t.status ? e() : c.push(e)
				}
		}()).status = r, t.event = {}, t.event.bind = function(t, e, n) {
			t.attachEvent ? t.attachEvent("on" + e, function(e) {
				n.call(t, e)
			}) : t.addEventListener && t.addEventListener(e, n, r)
		}, t.event.preventDefault = function(t) {
			t.preventDefault ? t.preventDefault() : t.returnValue = r
		}, t.json = {}, t.json.parse = function(t) {
			return JSON.parse(t)
		}, t.json.stringify = function() {
			function e(t) {
				return /["\\\x00-\x1f]/.test(t) && (t = t.replace(/["\\\x00-\x1f]/g, function(t) {
					var e = o[t];
					return e ? e : (e = t.charCodeAt(), "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16))
				})), '"' + t + '"'
			}

			function n(t) {
				return 10 > t ? "0" + t : t
			}
			var o = {
				"\b": "\\b",
				"	": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			};
			return function(o) {
				switch (typeof o) {
					case "undefined":
						return "undefined";
					case "number":
						return isFinite(o) ? String(o) : "null";
					case "string":
						return e(o);
					case "boolean":
						return String(o);
					default:
						if (o === i) return "null";
						if (o instanceof Array) {
							var a, r, c, s = ["["],
								u = o.length;
							for (r = 0; u > r; r++) switch (c = o[r], typeof c) {
								case "undefined":
								case "function":
								case "unknown":
									break;
								default:
									a && s.push(","), s.push(t.json.stringify(c)), a = 1
							}
							return s.push("]"), s.join("")
						}
						if (o instanceof Date) return '"' + o.getFullYear() + "-" + n(o.getMonth() + 1) + "-" + n(o.getDate()) + "T" + n(o.getHours()) + ":" + n(o.getMinutes()) + ":" + n(o.getSeconds()) + '"';
						a = ["{"], r = t.json.stringify;
						for (u in o)
							if (Object.prototype.hasOwnProperty.call(o, u)) switch (c = o[u], typeof c) {
								case "undefined":
								case "unknown":
								case "function":
									break;
								default:
									s && a.push(","), s = 1, a.push(r(u) + ":" + r(c))
							}
							return a.push("}"), a.join("")
				}
			}
		}(), t.lang = {}, t.lang.isObj = function(t, e) {
			return "[object " + e + "]" === {}.toString.call(t)
		}, t.lang.isNum = function(e) {
			return t.lang.isObj(e, "Number") && isFinite(e)
		}, t.lang.isStr = function(e) {
			return t.lang.isObj(e, "String")
		}, t.cookie = {}, t.cookie.set = function(t, e, n) {
			var o;
			n.expires && (o = new Date, o.setTime(o.getTime + n.expires)), document.cookie = t + "=" + e + (n.domain ? "; domain=" + n.domain : "") + (n.path ? "; path=" + n.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (n.secure ? "; secure" : "")
		}, t.cookie.get = function(t) {
			return (t = new RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie)) ? t[2] : i
		}, t.localStorage = {}, t.localStorage.H = function() {
			if (!t.localStorage.g) try {
				t.localStorage.g = document.createElement("input"), t.localStorage.g.type = "hidden", t.localStorage.g.style.display = "none", t.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(t.localStorage.g)
			} catch (e) {
				return r
			}
			return o
		}, t.localStorage.set = function(e, n, o) {
			var a = new Date;
			a.setTime(a.getTime() + o || 31536e6);
			try {
				window.localStorage ? (n = a.getTime() + "|" + n, window.localStorage.setItem(e, n)) : t.localStorage.H() && (t.localStorage.g.expires = a.toUTCString(), t.localStorage.g.load(document.location.hostname), t.localStorage.g.setAttribute(e, n), t.localStorage.g.save(document.location.hostname))
			} catch (r) {}
		}, t.localStorage.get = function(e) {
			if (window.localStorage) {
				if (e = window.localStorage.getItem(e)) {
					var n = e.indexOf("|"),
						o = e.substring(0, n) - 0;
					if (o && o > (new Date).getTime()) return e.substring(n + 1)
				}
			} else if (t.localStorage.H()) try {
				return t.localStorage.g.load(document.location.hostname), t.localStorage.g.getAttribute(a)
			} catch (r) {}
			return i
		}, t.localStorage.remove = function(e) {
			if (window.localStorage) window.localStorage.removeItem(e);
			else if (t.localStorage.H()) try {
				t.localStorage.g.load(document.location.hostname), t.localStorage.g.removeAttribute(a), t.localStorage.g.save(document.location.hostname)
			} catch (n) {}
		}, t.sessionStorage = {}, t.sessionStorage.set = function(t, e) {
			if (window.sessionStorage) try {
				window.sessionStorage.setItem(t, e)
			} catch (n) {}
		}, t.sessionStorage.get = function(t) {
			window.sessionStorage.getItem(t);
			return window.sessionStorage ? window.sessionStorage.getItem(t) : i
		}, t.sessionStorage.remove = function(t) {
			window.sessionStorage && window.sessionStorage.removeItem(t)
		}, t["export"] = {}, t["export"].log = function(t, e) {
			var n = new Image,
				o = "mz_log_" + Math.floor(2147483648 * Math.random()).toString(36);
			window[o] = n, n.onload = n.onerror = n.onabort = function() {
				n.onload = n.onerror = n.onabort = i, n = window[o] = i, e && e(t)
			}, n.src = t
		}, t.flash = {}, t.flash.Da = function() {
			var t = "";
			if (navigator.plugins && navigator.mimeTypes.length) {
				var e = navigator.plugins["Shockwave Flash"];
				e && e.description && (t = e.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
			} else if (window.ActiveXObject) try {
				(e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) && (t = e.GetVariable("$version")) && (t = t.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
			} catch (n) {}
			return t
		}, t.flash.oa = function(t, e, n, o, a) {
			return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + t + '" width="' + n + '" height="' + o + '"><param name="movie" value="' + e + '" /><param name="flashvars" value="' + (a || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + t + '" width="' + n + '" height="' + o + '" src="' + e + '" flashvars="' + (a || "") + '" allowscriptaccess="always" /></object>'
		}, t.url = {}, t.url.l = function(t, e) {
			var n = t.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
			return n ? n[3] : i
		}, t.url.Za = function(t) {
			return (t = t.match(/^(https?:)\/\//)) ? t[1] : i
		}, t.url.za = function(t) {
			return (t = t.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? t[2].replace(/.*@/, "") : i
		}, t.url.V = function(e) {
			return (e = t.url.za(e)) ? e.replace(/:\d+$/, "") : e
		}, t.url.Ya = function(t) {
			return (t = t.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? t[2].replace(/[\?#].*/, "").replace(/^$/, "/") : i
		}, t.g = {
			O: "withdata.cn.miaozhen.com/e.gif",
			utm: "mz_wtm",
			kol: "mz_kol",
			w: 0,
			uid: 0,
			m: Math.round(+new Date / 1e3),
			protocol: "https:" === document.location.protocol ? "https:" : "http:",
			ab: 0,
			ma: 6e5,
			na: 10,
			R: 1024,
			la: 1,
			s: 2147483647,
			admca: "mz_ca",
			admsp: "mz_sp",
			admsb: "mz_sb",
			ca: "cc ck cl utm bdutm ggutm mzutm kol ds ep et fl ja ln lt nv rnd si st su v cv lv tt u wxr wxp wxo wxn uc vc net openid admca admsp admsb ua skj ".split(" ")
		},
		function() {
			var e = {
				r: {},
				put: function(t, e) {
					this.r[t] = this.r[t] || [], this.r[t].push(e)
				},
				get: function(t, e) {
					this.r[t] = this.r[t] || [];
					for (var n = this.r[t].length, o = 0; n > o; o++) this.r[t][o](e)
				}
			};
			return t.pack = e
		}(),
		function() {
			function e(t, e) {
				var o = document.createElement("script");
				o.charset = "utf-8", n.e(e, "Function") && (o.readyState ? o.onreadystatechange = function() {
					"loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = i, e())
				} : o.onload = function() {
					e()
				}), o.src = t;
				var a = document.getElementsByTagName("script")[0];
				a.parentNode.insertBefore(o, a)
			}
			var n = t.lang;
			return t.load = e
		}(),
		function() {
			function n() {
				var n = "";
				return t.op.a.nv ? (n = encodeURIComponent(document.referrer), window.sessionStorage ? a.set("Hm_from_" + e.id, n) : o.set("Hm_from_" + e.id, n, 864e5)) : n = (window.sessionStorage ? a.get("Hm_from_" + e.id) : o.get("Hm_from_" + e.id)) || "", n
			}
			var o = t.localStorage,
				a = t.sessionStorage;
			return t.from = n
		}(),
		function() {
			var n = t.dom,
				o = t.event,
				a = {
					ea: function() {
						o.bind(document, "click", a.ra());
						for (var t = e.etrk.length, r = 0; t > r; r++) {
							var i = e.etrk[r],
								c = n.get(decodeURIComponent(i.id));
							c && o.bind(c, i.eventType, a.sa())
						}
					},
					sa: function() {
						return function(e) {
							(e.target || e.srcElement).setAttribute("MZ_FIX", e.clientX + ":" + e.clientY), t.op.a.et = 2, t.op.a.ep = "{id:" + this.id + ",eventType:" + e.type + "}", t.op.h()
						}
					},
					ra: function() {
						return function(n) {
							var o = n.target || n.srcElement;
							if (o) {
								var a = o.getAttribute("MZ_FIX"),
									r = n.clientX + ":" + n.clientY;
								if (a && a == r) o.removeAttribute("MZ_FIX");
								else if (a = e.etrk.length, a > 0) {
									for (r = {}; o && o != document.body;) o.id && (r[o.id] = ""), o = o.parentNode;
									for (o = 0; a > o; o++) {
										var i = decodeURIComponent(e.etrk[o].id);
										r.hasOwnProperty(i) && (t.op.a.et = 2, t.op.a.ep = "{id:" + i + ",eventType:" + n.type + "}", t.op.h())
									}
								}
							}
						}
					}
				};
			return t.pack.put("pv-b", a.ea), a
		}(),
		function() {
			var n = t.dom,
				o = t.event,
				a = t.browser,
				r = t.g,
				i = [],
				c = {
					da: function() {
						e.ctrk && (o.bind(document, "mouseup", c.ka()), o.bind(window, "unload", function() {
							c.D()
						}), setInterval(function() {
							c.D()
						}, r.ma))
					},
					ka: function() {
						return function(e) {
							if (e = c.wa(e), "" !== e) {
								var n = (r.protocol + "//" + r.O + "?" + t.op.ba().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + e + "]"))).length;
								n + (r.s + "").length > r.R || (n + encodeURIComponent(i.join(",") + (i.length ? "," : "")).length + (r.s + "").length > r.R && c.D(), i.push(e), (i.length >= r.na || /t:a/.test(e)) && c.D())
							}
						}
					},
					wa: function(t) {
						if (0 === r.la) {
							var o = t.target || t.srcElement,
								i = o.tagName.toLowerCase();
							if ("embed" == i || "object" == i) return ""
						}
						a.IE ? (o = Math.max(document.documentElement.scrollTop, document.body.scrollTop), i = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), i = t.clientX + i, o = t.clientY + o) : (i = t.pageX, o = t.pageY);
						var c = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
						switch (e.align) {
							case 1:
								i -= c / 2;
								break;
							case 2:
								i -= c
						}
						return i = "{x:" + i + ",y:" + o + ",", o = t.target || t.srcElement, i = (t = "a" == o.tagName.toLowerCase() ? o : n.getA(o)) ? i + ("t:a,u:" + encodeURIComponent(t.href) + "}") : i + "t:b}"
					},
					D: function() {
						0 !== i.length && (t.op.a.et = 3, t.op.a.ep = "[" + i.join(",") + "]", t.op.h(), i = [])
					}
				};
			return t.pack.put("pv-b", c.da), c
		}(),
		function() {
			function e() {
				return n
			}

			function n() {
				t.op.a.nv = 0, t.op.a.st = 4, t.op.a.et = 4, t.op.a.u ? "" : t.op.a.u = encodeURIComponent(document.location.href), t.op.a.ep = t.time.Ba() + "," + t.time.ya(), t.op.h()
			}

			function a() {
				clearTimeout(s);
				var t;
				x && (t = "visible" == document[x]), _ && (t = !document[_]), f = "undefined" == typeof t ? o : t, d && h || !f || !m ? !d || !h || f && m || (v = r, w += +new Date - g) : (v = o, g = +new Date), d = f, h = m, s = setTimeout(a, 100)
			}

			function i(t) {
				var e = document,
					n = "";
				if (t in e) n = t;
				else
					for (var o = ["webkit", "ms", "moz", "o"], a = 0; a < o.length; a++) {
						var r = o[a] + t.charAt(0).toUpperCase() + t.slice(1);
						if (r in e) {
							n = r;
							break
						}
					}
				return n
			}

			function c(t) {
				("focus" != t.type && "blur" != t.type || !t.target || t.target == window) && (m = "focus" == t.type || "focusin" == t.type ? o : r, a())
			}
			var s, u = t.event,
				l = t.pack,
				d = o,
				f = o,
				h = o,
				m = o,
				p = +new Date,
				g = p,
				w = 0,
				v = o,
				x = i("visibilityState"),
				_ = i("hidden");
			return a(),
				function() {
					var t = x.replace(/[vV]isibilityState/, "visibilitychange");
					u.bind(document, t, a), u.bind(window, "pageshow", a), u.bind(window, "pagehide", a), "object" == typeof document.onfocusin ? (u.bind(document, "focusin", c), u.bind(document, "focusout", c)) : (u.bind(window, "focus", c), u.bind(window, "blur", c))
				}(), t.time = {
					Ba: function() {
						return +new Date - p
					},
					ya: function() {
						return v ? +new Date - g + w : w
					},
					st: function() {
						n(), p = +new Date
					}
				}, l.put("pv-b", function() {
					u.bind(window, "unload", e())
				}), t.time
		}(),
		function() {
			function n(t) {
				for (var e in t)
					if ({}.hasOwnProperty.call(t, e)) {
						var o = t[e];
						c.e(o, "Object") || c.e(o, "Array") ? n(o) : t[e] = String(o)
					}
			}

			function a(t) {
				return t.replace ? t.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : t
			}
			var c = t.lang,
				s = t.json,
				u = t.g,
				l = t.pack,
				d = t.pa,
				f = {
					z: [],
					F: 0,
					Z: r,
					init: function() {
						l.put("pv-b", function() {
							f.qa(), f.ta()
						}), l.put("pv-d", f.ua)
					},
					qa: function() {
						var n = window._mwt || [];
						n && !c.isObj(n, "Array") || (window._mwt = {
							id: e.id,
							cmd: {},
							push: function() {
								for (var n = window._mwt, o = 0; o < arguments.length; o++) {
									var a = arguments[o];
									c.isObj(a, "Array") && (n.cmd[n.id].push(a), "_setOpenId" === a[0] && 1 < a.length && c.isStr(a[1]) && !/^\s+$/.test(a[1]) && (t.op.a.openid = a[1], t.cookie.set("WX_OPENID", a[1], e.age)), "_setAccount" === a[0] && 1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (a = a[1], n.id = a, n.cmd[a] = n.cmd[a] || []))
								}
							}
						}, window._mwt.cmd[e.id] = [], window._mwt.push.apply(window._mwt, n))
					},
					ta: function() {
						var t = window._mwt;
						if (t && t.cmd && t.cmd[e.id])
							for (var n = t.cmd[e.id], o = /^_track(Event|MobConv|Order|RTEvent|WxEvent)$/, a = 0, r = n.length; r > a; a++) {
								var i = n[a];
								o.test(i[0]) ? f.z.push(i) : f.N(i)
							}
						t.cmd[e.id] = {
							push: f.N
						}
					},
					ua: function() {
						if (0 < f.z.length)
							for (var t = 0, e = f.z.length; e > t; t++) f.N(f.z[t]);
						f.z = i
					},
					N: function(t) {
						var e = t[0];
						f.hasOwnProperty(e) && c.isObj(f[e], "Function") && f[e](t)
					},
					_setAccount: function(t) {
						1 < t.length && /^[0-9a-f]{32}$/.test(t[1])
					},
					_setAutoPageview: function(e) {
						1 < e.length && (e = e[1], r === e || o === e) && (t.op.W = e)
					},
					_trackPageview: function(e) {
						if (1 < e.length && e[1].charAt && "/" === e[1].charAt(0)) {
							t.op.SV(), t.time.st(), t.op.a.et = 1, t.op.a.ep = "", 2 < e.length && (t.op.a.ep = e[2]), t.op.L ? (t.op.a.nv = 0, t.op.a.st = 4) : t.op.L = o;
							var n = (t.op.a.u, t.op.a.su);
							t.op.a.u = u.protocol + "//" + document.location.host + e[1], f.Z || (t.op.a.su = document.location.href), t.op.h(), t.op.a.su = n
						}
					},
					_trackEvent: function(e) {
						2 < e.length && (t.op.a.nv = 0, t.op.a.st = 4, t.op.a.et = 5, t.op.a.ep = a(e[1]) + "*" + a(e[2]) + (e[3] ? "*" + a(e[3]) : "") + (e[4] ? "*" + a(e[4]) : ""), t.op.h())
					},
					_trackWxEvent: function(e) {
						1 < e.length && (t.op.a.nv = 0, t.op.a.st = 4, t.op.a.et = 9, t.op.a.ep = a(e[1]), t.op.h())
					},
					_setCustomVar: function(n) {
						if (!(4 > n.length)) {
							var o = n[1],
								r = n[4] || 3;
							if (o > 0 && 6 > o && r > 0 && 4 > r) {
								f.F++;
								for (var i = (t.op.a.cv || "*").split("!"), c = i.length; o - 1 > c; c++) i.push("*");
								i[o - 1] = r + "*" + a(n[2]) + "*" + a(n[3]), t.op.a.cv = i.join("!"), n = t.op.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, ""), "" !== n ? t.op.setData("MZ_CV_" + e.id, encodeURIComponent(n), e.age) : t.op.Oa("MZ_CV_" + e.id)
							}
						}
					},
					_setReferrerOverride: function(e) {
						1 < e.length && (t.op.a.su = e[1].charAt && "/" === e[1].charAt(0) ? u.protocol + "//" + window.location.host + e[1] : e[1], f.Z = o)
					},
					_trackOrder: function(e) {
						e = e[1], c.isObj(e, "Object") && (n(e), t.op.a.nv = 0, t.op.a.st = 4, t.op.a.et = 6, t.op.a.ep = s.stringify(e), t.op.h())
					},
					_trackMobConv: function(e) {
						(e = {
							webim: 1,
							tel: 2,
							map: 3,
							sms: 4,
							callback: 5,
							share: 6
						}[e[1]]) && (t.op.a.et = 7, t.op.a.ep = e, t.op.h())
					},
					_trackRTPageview: function(e) {
						e = e[1], c.isObj(e, "Object") && (n(e), e = s.stringify(e), 512 >= encodeURIComponent(e).length && (t.op.a.rt = e))
					},
					_trackRTEvent: function(e) {
						if (e = e[1], c.isObj(e, "Object")) {
							n(e), e = encodeURIComponent(s.stringify(e));
							var o = function(e) {
									var n = t.op.a.rt;
									t.op.a.et = 90, t.op.a.rt = e, t.op.h(), t.op.a.rt = n
								},
								a = e.length;
							if (900 >= a) o.call(this, e);
							else
								for (var a = Math.ceil(a / 900), r = "block|" + Math.round(Math.random() * u.s).toString(16) + "|" + a + "|", i = [], l = 0; a > l; l++) i.push(l), i.push(e.substring(900 * l, 900 * l + 900)), o.call(this, r + i.join("|")), i = []
						}
					},
					_setUserId: function(t) {
						t = t[1], d.La(), d.Va(t)
					},
					_setOpenId: function(t) {
						1 < t.length && !/^\s+$/.test(t[1])
					}
				};
			return f.init(), t.track = f, t.track
		}(),
		function() {
			var o, a = t.url,
				r = t.cookie,
				c = (t.localStorage, t.sessionStorage),
				s = t.g,
				u = document.location.href,
				l = document.referrer;
			document.title, t.pack;
			return t.wx = {
				init: function() {
					var n = t.op.a;
					n.wxr = t.wx.Q("mz_wx_r"), n.wxp = t.wx.Q("mz_wx_p"), o = n.wxo = t.wx.Q("mz_wx_o"), n.wxn = t.wx.Q("mz_wx_n"), n.utm = t.wx.Q("mz_wtm") || "", n.kol = t.wx.Q("mz_kol") || "", i == n.wxr || i == n.wxp || i == n.wxo || i == n.wxn ? (n.wxr = n.wxp = n.wxo = s.uid, n.wxn = 0) : n.wxo != s.uid && (n.wxp = o, n.wxo = s.uid), t.wx.rewrite(), e.weixin && "object" == typeof wx && (/micromessenger/i.test(navigator.userAgent) ? wx.ready(function() {
						wx.getNetworkType({
							success: function(e) {
								t.op.a.net = e.networkType
							}
						})
					}) : "")
				},
				Q: function(t) {
					var n = a.l(u, t) || a.l(l, t) || r.get(t);
					return n && n.length > 0 && r.set(t, n, e.age), n
				},
				C: function() {
					var t = "";
					for (var e in n) {
						var o = n[e];
						for (var r in o) {
							var i = a.l(u, o[r]) || a.l(l, o[r]) || c.get(o[r]);
							if (i && i.length > 0) {
								t += "&" + o[r] + "=" + i;
								var s = c.get(o[r]);
								s && 0 != s.length || c.set(o[r], i)
							}
						}
					}
					return t
				},
				rewrite: function() {
					if (e.weixin && "object" == typeof wx) {
						if ("function" == typeof wx.onMenuShareAppMessage) {
							var n = wx.onMenuShareAppMessage;
							wx.onMenuShareAppMessage = function(e) {
								var o = t.wx.change(e, "friend");
								return n(o)
							}
						}
						if ("function" == typeof wx.onMenuShareTimeline) {
							var o = wx.onMenuShareTimeline;
							wx.onMenuShareTimeline = function(e) {
								var n = t.wx.change(e, "timeline");
								return o(n)
							}
						}
						if ("function" == typeof wx.onMenuShareQQ) {
							var a = wx.onMenuShareQQ;
							wx.onMenuShareQQ = function(e) {
								var n = t.wx.change(e, "qq");
								return a(n)
							}
						}
						if ("function" == typeof wx.onMenuShareWeibo) {
							var r = wx.onMenuShareWeibo;
							wx.onMenuShareWeibo = function(e) {
								var n = t.wx.change(e, "weibo");
								return r(n)
							}
						}
						if ("function" == typeof wx.onMenuShareQZone) {
							var a = wx.onMenuShareQZone;
							wx.onMenuShareQZone = function(e) {
								var n = t.wx.change(e, "qzone");
								return a(n)
							}
						}
					}
				},
				shareUrl: function(e) {
					var n = t.op.a;
					e = e.replace(/(\?|&)(mz_wx_r|mz_wx_p|mz_wx_n|mz_wx_o|mz_wtm|mz_kol|utm_campaign|utm_source|utm_medium|utm_content|utm_term|hmsr|hmpl|hmcu|hmkw|hmci|mz_ca|mz_sp|mz_kw)=([^&]*)/gi, function(t) {
						return t.indexOf("?") >= 0 ? "?" : ""
					}).replace(/\?&/, "?");
					var a = -1 == e.indexOf("?") ? "?" : "&";
					e += a + "mz_wx_r=" + n.wxr + "&mz_wx_p=" + n.wxp + "&mz_wx_o=" + s.uid + "&mz_wx_n=" + (n.wxn && o == s.uid ? n.wxn : 1 + parseInt(n.wxn)), n.utm.length > 0 && (e += "&mz_wtm=" + n.utm), n.kol.length > 0 && (e += "&mz_kol=" + n.kol);
					var r = this.C();
					return r.length > 0 && (e += r), e
				},
				change: function(e, n) {
					var o = t.wx.copy(e);
					if ("string" == typeof o.link && o.link.length > 0 && (o.link = t.wx.shareUrl(o.link)), "function" == typeof o.success) {
						var a = o.success;
						o.success = function(t) {
							var e = window._mwt;
							e.push(["_trackWxEvent", n]), a(t)
						}
					}
					return o
				},
				copy: function(t) {
					var e = {};
					for (var n in t) e[n] = t[n];
					return e
				}
			}, t.wx
		}(),
		function() {
			function a() {
				"undefined" == typeof window["_mz_loaded_" + e.id] && (window["_mz_loaded_" + e.id] = o, this.a = {}, this.W = o, this.L = r, this.init())
			}
			var i = t.url,
				c = t["export"],
				s = t.flash,
				u = t.lang,
				l = t.cookie,
				d = t.browser,
				f = t.localStorage,
				h = t.sessionStorage,
				m = t.g,
				p = t.pack;
			return a.prototype = {
				M: function(t, e) {
					t = "." + t.replace(/:\d+/, ""), e = "." + e.replace(/:\d+/, "");
					var n = t.indexOf(e);
					return n > -1 && n + e.length === t.length
				},
				$: function(t, e) {
					return t = t.replace(/^https?:\/\//, ""), 0 === t.indexOf(e)
				},
				B: function(t) {
					for (var n = 0; n < e.dm.length; n++)
						if (-1 < e.dm[n].indexOf("/")) {
							if (this.$(t, e.dm[n])) return o
						} else {
							var a = i.V(t);
							if (a && this.M(a, e.dm[n])) return o
						}
					return r
				},
				K: function() {
					for (var t = document.location.hostname, n = 0, o = e.dm.length; o > n; n++)
						if (this.M(t, e.dm[n])) return e.dm[n].replace(/(:\d+)?[\/\?#].*/, "");
					return t
				},
				U: function() {
					for (var t = 0, n = e.dm.length; n > t; t++) {
						var o = e.dm[t];
						if (-1 < o.indexOf("/") && this.$(document.location.href, o)) return o.replace(/^[^\/]+(\/.*)/, "$1") + "/"
					}
					return "/"
				},
				Ca: function() {
					if (!document.referrer) return m.m - m.w > e.vdur ? 1 : 4;
					var t = r;
					return this.B(document.referrer) && this.B(document.location.href) ? t = o : (t = i.V(document.referrer), t = this.M(t || "", document.location.hostname)), t ? m.m - m.w > e.vdur ? 1 : 4 : 3
				},
				getData: function(t) {
					try {
						return l.get(t) || h.get(t) || f.get(t)
					} catch (e) {}
				},
				setData: function(t, e, n) {
					try {
						l.set(t, e, {
							domain: this.K(),
							path: this.U(),
							expires: n
						}), n ? f.set(t, e, n) : h.set(t, e)
					} catch (o) {}
				},
				Oa: function(t) {
					try {
						l.set(t, "", {
							domain: this.K(),
							path: this.U(),
							expires: -1
						}), h.remove(t), f.remove(t)
					} catch (e) {}
				},
				Ta: function() {
					var t, n, o, a, r;
					if (m.w = this.getData("MZ_LPVT_" + e.id) || 0, 13 === m.w.length && (m.w = Math.round(m.w / 1e3)), n = this.Ca(), t = 4 !== n ? 1 : 0, o = this.getData("MZ_LVT_" + e.id)) {
						for (a = o.split(","), r = a.length - 1; r >= 0; r--) 13 === a[r].length && (a[r] = "" + Math.round(a[r] / 1e3));
						for (; 2592e3 < m.m - a[0];) a.shift();
						for (r = 4 > a.length ? 2 : 3, 1 === t && a.push(m.m); 4 < a.length;) a.shift();
						o = a.join(","), a = a[a.length - 1]
					} else o = m.m, a = "", r = 1;
					this.setData("MZ_LVT_" + e.id, o, e.age), this.setData("MZ_LPVT_" + e.id, m.m), o = m.m == this.getData("MZ_LPVT_" + e.id) ? "1" : "0", 0 === e.nv && this.B(document.location.href) && ("" === document.referrer || this.B(document.referrer)) && (t = 0, n = 4), this.a.nv = t, this.a.st = n, this.a.cc = o, this.a.lt = a, this.a.lv = r
				},
				ba: function() {
					for (var t = [], e = 0, n = m.ca.length; n > e; e++) {
						var o = m.ca[e],
							a = this.a[o];
						"undefined" != typeof a && "" !== a && t.push(o + "=" + encodeURIComponent(a))
					}
					return e = this.a.et, this.a.rt && (0 === e ? t.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === e && t.push("rt=" + this.a.rt)), t.join("&")
				},
				Ua: function() {
					this.Ta(), this.a.si = e.id, this.a.su = document.referrer, this.a.ds = d.screen, this.a.cl = d.colorDepth + "-bit", this.a.ln = d.language, this.a.ja = d.javaEnabled ? 1 : 0, this.a.ck = d.cookieEnabled ? 1 : 0, this.a.fl = s.Da(), this.a.v = "1.0.0", this.a.cv = decodeURIComponent(this.getData("MZ_CV_" + e.id) || ""), 1 === this.a.nv && (this.a.tt = document.title || "");
					var t = document.location.href;
					this.a.u = encodeURIComponent(t.indexOf("?") > 0 ? t.substring(0, t.indexOf("?")) : t), this.a.utm = this.Qs(m.utm) || "", this.a.kol = this.Qs(m.kol) || "", this.a.bdutm = this.channelData(n.baidu), this.a.ggutm = this.channelData(n.google), this.a.mzutm = this.channelData(n.miaozhen), this.a.ua = encodeURIComponent(navigator.userAgent) || ""
				},
				Qs: function(t) {
					var e = document.location.href,
						n = document.referrer,
						o = i.l(e, t) || i.l(n, t) || h.get(t);
					return o && o.length > 0 && !h.get(t) && h.set(t, o), null == o ? "" : o
				},
				channelData: function(e) {
					var n = {},
						o = 0,
						a = document.location.href,
						r = document.referrer;
					for (var c in e) {
						var s = i.l(a, e[c]) || i.l(r, e[c]) || h.get(e[c]);
						if (s && s.length > 0) {
							n[e[c]] = s, o = 1;
							var u = h.get(e[c]);
							u && 0 != u.length || h.set(e[c], s)
						}
					}
					return 1 == o ? t.json.stringify(n) : ""
				},
				UID: function() {
					(m.uid = this.getData("MZ_UID_" + e.id) || 0) || (m.uid = "xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
						var e = 16 * Math.random() | 0,
							n = "x" == t ? e : 3 & e | 8;
						return n.toString(16)
					}), this.setData("MZ_UID_" + e.id, m.uid)), t.wx.init()
				},
				SV: function() {
					var n, o, a, r, i, c, s = t.sessionStorage,
						u = t.op;
					if (this.a.openid = this.getData("WX_OPENID") || "", !(n = s.get("MZ_SESSION") || 0)) {
						if (s.set("MZ_SESSION", 1), o = u.getData("MZ_SV_COUNT") || 0, /^\d+$/.test(o) ? (o = parseInt(o), u.setData("MZ_SV_COUNT", 1 + o, e.age), this.a.vc = 1 + o) : this.a.vc = 1, i = u.getData("MZ_UV_COUNT") || 0, "string" == typeof i && -1 != i.indexOf("|") ? (a = i.split("|"), c = a[0], r = a[1]) : (c = 0, r = Math.round(+new Date / 1e3)), /^\d+$/.test(c)) {
							var l = this.format.call(new Date, "yyyy-MM-dd") == this.format.call(new Date(1e3 * r), "yyyy-MM-dd");
							c = parseInt(c), l ? (u.setData("MZ_UV_COUNT", 1 + c + "|" + Math.round(+new Date / 1e3), e.age), this.a.uc = 1 + c) : this.a.uc = 1
						}
						this.a.et = 0, this.a.ep = "", this.h()
					}
				},
				format: function(t) {
					var e = {
						"M+": this.getMonth() + 1,
						"d+": this.getDate(),
						"h+": this.getHours(),
						"m+": this.getMinutes(),
						"s+": this.getSeconds(),
						"q+": Math.floor((this.getMonth() + 3) / 3),
						"S+": this.getMilliseconds()
					};
					/(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
					for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
					return t
				},
				init: function() {
					try {
						this.Ua(), 0 === this.a.nv ? this.Ra() : this.P(".*"), t.op = this, this.UID(), p.get("pv-b"), this.SV(), this.Qa()
					} catch (n) {
						var o = [];
						o.push("si=" + e.id), o.push("n=" + encodeURIComponent(n.name)), o.push("m=" + encodeURIComponent(n.message)), o.push("r=" + encodeURIComponent(document.referrer)), c.log(m.protocol + "//" + m.O + "?" + o.join("&"))
					}
				},
				Qa: function() {
					function t() {
						p.get("pv-d")
					}
					this.W ? (this.L = o, this.a.et = 1, this.a.ep = document.title || "", this.h(t)) : t()
				},
				h: function(t) {
					var e = this;
					e.a.rnd = Math.round(Math.random() * m.s);
					var n = m.protocol + "//" + m.O + "?" + e.ba();
					e.fa(n), c.log(n, function(n) {
						e.P(n), u.isObj(t, "Function") && t.call(e)
					})
				},
				fa: function(t) {
					var n = h.get("MZ_UNSENT_" + e.id) || "",
						o = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
						n = encodeURIComponent(t.replace(/^https?:\/\//, "") + o) + (n ? "," + n : "");
					h.set("MZ_UNSENT_" + e.id, n)
				},
				P: function(t) {
					var n = h.get("MZ_UNSENT_" + e.id) || "";
					n && (t = encodeURIComponent(t.replace(/^https?:\/\//, "")), t = RegExp(t.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (n = n.replace(t, "").replace(/,$/, "")) ? h.set("MZ_UNSENT_" + e.id, n) : h.remove("MZ_UNSENT_" + e.id))
				},
				Ra: function() {
					var t = this,
						n = h.get("MZ_UNSENT_" + e.id);
					if (n)
						for (var n = n.split(","), o = function(e) {
								c.log(m.protocol + "//" + decodeURIComponent(e), function(e) {
									t.P(e)
								})
							}, a = 0, r = n.length; r > a; a++) o(n[a])
				}
			}, new a
		}(),
		function() {
			var e = t.dom,
				n = t.event,
				o = (t.url, t.json);
			try {
				if (window.performance && performance.timing && "undefined" != typeof t.op) {
					var a = (+new Date, function(t) {
							var e = performance.timing,
								n = e[t + "Start"] ? e[t + "Start"] : 0;
							return t = e[t + "End"] ? e[t + "End"] : 0, {
								start: n,
								end: t,
								value: t - n > 0 ? t - n : 0
							}
						}),
						r = i;
					e.ready(function() {
						r = +new Date
					});
					var c = function() {
						var e, n;
						n = a("navigation"), e = a("request"), n = {
							netAll: e.start - n.start,
							netDns: a("domainLookup").value,
							netTcp: a("connect").value,
							srv: a("response").start - e.start,
							dom: performance.timing.domInteractive - performance.timing.fetchStart,
							loadEvent: a("loadEvent").end - n.start
						}, t.op.a.et = 8, t.op.a.ep = o.stringify(n), t.op.h()
					};
					n.bind(window, "load", function() {
						setTimeout(c, 500)
					})
				}
			} catch (s) {}
		}(),
		function() {
			var n = t.lang,
				o = t.event,
				a = t.json;
			if (e.comm && "undefined" != typeof t.op) {
				var c, s = function(t) {
						if (t.item) {
							for (var e = t.length, n = Array(e); e--;) n[e] = t[e];
							return n
						}
						return [].slice.call(t)
					},
					u = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,
					l = {
						click: function() {
							for (var t = [], e = s(document.getElementsByTagName("a")), e = [].concat.apply(e, s(document.getElementsByTagName("area"))), e = [].concat.apply(e, s(document.getElementsByTagName("img"))), n = 0, o = e.length; o > n; n++) {
								var a = e[n],
									r = a.getAttribute("onclick"),
									a = a.getAttribute("href");
								(u.test(r) || u.test(a)) && t.push(e[n])
							}
							return t
						}
					},
					d = function(t, e) {
						for (var n in t)
							if (t.hasOwnProperty(n) && e.call(t, n, t[n]) === r) return r
					},
					f = function(e, o) {
						var r = {
							n: "swt",
							t: "clk"
						};
						if (r.v = e, o) {
							var c = o.getAttribute("href"),
								s = o.getAttribute("onclick") ? "" + o.getAttribute("onclick") : i,
								l = o.getAttribute("id") || "";
							u.test(c) ? (r.sn = "mediate", r.snv = c) : n.e(s, "String") && u.test(s) && (r.sn = "wrap", r.snv = s), r.id = l
						}
						for (t.op.a.et = 9, t.op.a.ep = a.stringify(r), t.op.h(), r = +new Date; 500 >= +new Date - r;);
					},
					h = "/zoosnet" + (/\/$/.test("/zoosnet") ? "" : "/"),
					m = function(t, e) {
						if (c === e) return f(h + t, e), r;
						if (n.isObj(e, "Array") || n.isObj(e, "NodeList"))
							for (var o = 0, a = e.length; a > o; o++)
								if (c === e[o]) return f(h + t + "/" + (o + 1), e[o]), r
					};
				o.bind(document, "click", function(t) {
					t = t || window.event, c = t.target || t.srcElement;
					var e = {};
					for (d(l, function(t, o) {
							e[t] = n.isObj(o, "Function") ? o() : document.getElementById(o)
						}); c && c !== document && d(e, m) !== r;) c = c.parentNode
				})
			}
		}()
}();