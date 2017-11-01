"use strict";

function onComplete(e) {
	ClickEvent("Adidas_HardenH5", "HardenVol1/LoadComplete", "Click"), musicinit(), initScroll()
}

function onError(e) {}

function onFileLoad(e) {}

function onFileProgress(e) {}

function onProgress(e) {
	var i = Math.round(100 * e.loaded);
	$progressNumber.text(i + "%")
}

function add(e, i) {
	return (Array(i).join(0) + e).slice(-i)
}

function musicinit() {
	createjs.Sound.initializeDefaultPlugins() && (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", handleLoad), createjs.Sound.registerSound("images/music/typed.mp3", tpyedSoundID))
}

function handleLoad(e) {
	console.log(e.id), "typed" == e.id && $(".loadingPage").fadeOut(500, function() {
		_mwt.push(["_trackPageview", "/h5/2", "02发布动画页"]), createjs.Sound.play(e.src);
		var i = 0,
			n = $(".posterPage .text span"),
			t = setInterval(function() {
				i++, i > n.length && (i = n.length, clearInterval(t), setTimeout(function() {
					$(".posterPage").fadeOut(800, function() {
						ClickEvent("Adidas_HardenH5", "HardenVol1/HDComplete", "Click"), _mwt.push(["_trackPageview", "/h5/3", "03朋友圈首页"]), loadSound(), page.loadlocation(), page.loadfeiji()
					})
				}, 2e3)), n.eq(i - 1).show()
			}, 100)
	})
}

function playFeijiSound() {
	createjs.Sound.play(feijiSoundID)
}

function playLocationSound() {
	createjs.Sound.play(locationSoundID)
}

function stopLocationSound() {
	createjs.Sound.stop(locationSoundID)
}

function playAlertSound() {
	createjs.Sound.play(alertSoundID)
}

function playWakeupSound() {
	createjs.Sound.play(wakeupSoundID, {
		loop: 1
	})
}

function loadSound() {
	createjs.Sound.registerSound("images/music/feiji.mp3", feijiSoundID), createjs.Sound.registerSound("images/music/location.mp3", locationSoundID), createjs.Sound.registerSound("images/music/alert.mp3", alertSoundID), createjs.Sound.registerSound("images/music/wakeup.mp3", wakeupSoundID)
}

function PrefixInteger(e, i) {
	return (Array(i).join(0) + e).slice(-i)
}

function myScrolloffset(e) {
	for (var i = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;) i -= e.offsetLeft, n -= e.offsetTop;
	return {
		left: i,
		top: n
	}
}

function pngFrame(e, i, n, t) {
	var a = 0,
		o = $(e).find("img"),
		s = setInterval(function() {
			a++, a > o.length - 1 && (i ? (a = 0, t()) : (a = o.length, clearInterval(s), t())), o.eq(a).show().siblings().hide()
		}, n)
}

function pngFrame2(e, i, n) {
	var t = 0,
		a = $(e).find("img"),
		o = setInterval(function() {
			t++, t >= 75 && $("#feiji-gif").removeClass("hide"), t > a.length - 1 && (t = a.length, clearInterval(o), n()), a.eq(t).show().siblings().hide()
		}, i)
}

function initScroll() {
	function e() {
		var e = 0,
			i = $("#hand .img"),
			n = setInterval(function() {
				e++, e > i.length && (e = i.length, clearInterval(n), u = !0, S.scrollTo(0, myScrolloffset(document.getElementById("PageKLS")).top, 1e3, IScroll.utils.ease.quadratic), $("#shoes").addClass("active").find("img").addClass("open"), setTimeout(function() {
					$("#gif-6").attr("src", "images/img6-1.jpg")
				}, 1e3), setTimeout(function() {
					$("#gif-6").attr("src", "images/img6.gif")
				}, 1400), setTimeout(function() {
					$("#shoes").hide(), $(".fake-item").remove(), S.refresh(), S.scrollTo(0, myScrolloffset(document.getElementById("PageKLS")).top, 0), $("#hand").remove(), setTimeout(function() {
						S.enable()
					}, 100)
				}, 2e3)), i.hide().eq(e - 1).show()
			}, 100)
	}
	var i, n, t, a, o, s, r, c, g, l, d = !1,
		m = !1,
		p = !1,
		u = !1,
		f = !1,
		h = !1,
		w = !1,
		v = !1,
		_ = !1,
		k = !1,
		H = !1,
		y = !1,
		S = new IScroll("#app", {
			probeType: 3,
			momentum: !1,
			click: !0
		});
	S.on("scroll", function() {
		if (i = myScrolloffset(document.getElementById("first-item")).top, n = myScrolloffset(document.getElementById("feiji-dom")).top + 546, t = myScrolloffset(document.getElementById("PageKLS")).top, a = myScrolloffset(document.getElementById("PageBGB")).top, o = myScrolloffset(document.getElementById("PageLXY")).top, s = myScrolloffset(document.getElementById("PageadidasBsk")).top, r = myScrolloffset(document.getElementById("PageHDwakeup")).top, c = myScrolloffset(document.getElementById("PageHDfly")).top, g = myScrolloffset(document.getElementById("PageHDknow")).top, l = myScrolloffset(document.getElementById("PageHDbirthday")).top + $("#PageHDbirthday").outerHeight() + 100, this.y <= t && (f || (f = !0, ga("send", "pageview", "/PageKLS"), mztrack("/PageKLS"), _mwt.push(["_trackPageview", "/h5/5", "05朋友圈二条页"]), console.log("PageKLS"))), this.y <= a && (h || (h = !0, ga("send", "pageview", "/PageBGB"), mztrack("/PageBGB"), _mwt.push(["_trackPageview", "/h5/7", "07朋友圈三条页"]), console.log("PageBGB"))), this.y <= o && (w || (w = !0, ga("send", "pageview", "/PageLXY"), mztrack("/PageLXY"), _mwt.push(["_trackPageview", "/h5/8", "08朋友圈四条页"]), console.log("PageLXY"))), this.y <= s && (v || (v = !0, ga("send", "pageview", "/PageadidasBsk"), mztrack("/PageadidasBsk"), _mwt.push(["_trackPageview", "/h5/9", "09朋友圈五条页"]), console.log("PageadidasBsk"))), this.y <= r && (_ || (_ = !0, ga("send", "pageview", "/PageHDwakeup"), mztrack("/PageHDwakeup"), _mwt.push(["_trackPageview", "/h5/10", "10朋友圈六条页"]), console.log("PageHDwakeup"))), this.y <= c && (k || (k = !0, ga("send", "pageview", "/PageHDfly"), mztrack("/PageHDfly"), _mwt.push(["_trackPageview", "/h5/11", "11朋友圈七条页"]), console.log("PageHDfly"))), this.y <= g && (H || (H = !0, ga("send", "pageview", "/PageHDknow"), mztrack("/PageHDknow"), _mwt.push(["_trackPageview", "/h5/12", "12朋友圈八条页"]), console.log("PageHDknow"))), this.y <= l && (y || (y = !0, ga("send", "pageview", "/PageHDbirthday"), mztrack("/PageHDbirthday"), _mwt.push(["_trackPageview", "/h5/15", "15朋友圈九条页"]), console.log("PageHDbirthday"))), this.y <= i && !d) {
			if (d = !0, $("#shoes").show(), S.disable(), $("#hand").find("img").eq(0).fadeIn(800), $("#hand").find("img").eq(1).fadeIn(800), u) return !1;
			e(), page.loadImage1(), _mwt.push(["_trackPageview", "/h5/4", "04朋友圈首条页"])
		}
		this.y <= a && (m || (m = !0, $("#alertmsg").show(), playAlertSound(), setTimeout(function() {
			$("#alertmsg").remove()
		}, 3500))), this.y <= n && (p || (p = !0, setTimeout(function() {
			S.scrollTo(0, n, 0)
		}, 200), $("#feiji-box").show(), playFeijiSound(), setTimeout(function() {
			pngFrame2("#feiji-box", 38, function() {
				$("#feiji-box").remove(), S.options.momentum = !0
			})
		}, 1500)))
	}), S.on("scrollEnd", function() {
		this.y == this.maxScrollY && $(".sharePage").fadeIn().addClass("active")
	})
}
var tpyedSoundID = "typed",
	feijiSoundID = "feiji",
	locationSoundID = "location",
	alertSoundID = "alert",
	wakeupSoundID = "wakeup",
	landing = [{
		src: "images/icon-arrow.png"
	}, {
		src: "images/icon-blank.png"
	}, {
		src: "images/icon-comment.png"
	}, {
		src: "images/icon-like.png"
	}, {
		src: "images/icon-player.png"
	}, {
		src: "images/icon-zan.png"
	}, {
		src: "images/icon-emoji-1.png"
	}, {
		src: "images/icon-emoji-2.png"
	}, {
		src: "images/icon-emoji-3.png"
	}, {
		src: "images/icon-emoji-4.png"
	}, {
		src: "images/icon-emoji-5.png"
	}, {
		src: "images/icon-emoji-6.png"
	}, {
		src: "images/icon-emoji-8.png"
	}, {
		src: "images/icon-emoji-9.png"
	}, {
		src: "images/icon-emoji-11.png"
	}, {
		src: "images/icon-emoji-13.png"
	}, {
		src: "images/icon-emoji-14.png"
	}, {
		src: "images/icon-emoji-15.png"
	}, {
		src: "images/icon-emoji-16.png"
	}, {
		src: "images/img1.jpg"
	}, {
		src: "images/img2.jpg"
	}, {
		src: "images/img3.jpg"
	}, {
		src: "images/img4.gif"
	}, {
		src: "images/img5.jpg"
	}, {
		src: "images/img6.gif"
	}, {
		src: "images/img6.jpg"
	}, {
		src: "images/img6-1.jpg"
	}, {
		src: "images/img7.jpg"
	}, {
		src: "images/img8.jpg"
	}, {
		src: "images/img9.jpg"
	}, {
		src: "images/img10.jpg"
	}, {
		src: "images/img12-1.png"
	}, {
		src: "images/img12-2.png"
	}, {
		src: "images/img13.gif"
	}, {
		src: "images/img15.jpg"
	}, {
		src: "images/img16.jpg"
	}, {
		src: "images/img17.jpg"
	}, {
		src: "images/img18.png"
	}, {
		src: "images/img19.jpg"
	}, {
		src: "images/img20.jpg"
	}, {
		src: "images/img21.jpg"
	}, {
		src: "images/hand/1.png"
	}, {
		src: "images/hand/2.png"
	}, {
		src: "images/hand/3.png"
	}, {
		src: "images/hand/4.png"
	}, {
		src: "images/hand/5.png"
	}, {
		src: "images/hand/6.png"
	}, {
		src: "images/hand/7.png"
	}, {
		src: "images/location/text1.png"
	}, {
		src: "images/location/text2.png"
	}],
	queue = new createjs.LoadQueue((!1)),
	$progressNumber = $("#progress-number");
queue.on("complete", onComplete), queue.on("error", onError), queue.on("fileload", onFileLoad), queue.on("fileprogress", onFileProgress), queue.on("progress", onProgress), queue.loadManifest(landing);
var isMobile = {
		Android: function() {
			return /Android/i.test(window.navigator.userAgent)
		},
		BlackBerry: function() {
			return /BlackBerry/i.test(window.navigator.userAgent)
		},
		iOS: function() {
			return /iPhone|iPad|iPod|iOS/i.test(window.navigator.userAgent)
		},
		Windows: function() {
			return /IEMobile/i.test(window.navigator.userAgent)
		},
		any: function() {
			return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()
		},
		wechat: function() {
			return /micromessenger/i.test(window.navigator.userAgent.toLowerCase())
		},
		app: function() {
			return /yhstore/i.test(window.navigator.userAgent.toLowerCase())
		}
	},
	page = {
		loadImage1: function() {
			var e = new Image;
			e.src = "images/img17.gif", $(e).one("load", function() {
				$("#gif-17").attr("src", "images/img17.gif"), page.loadImage2()
			});
			var i = new Image;
			i.src = "images/img8.gif", $(i).one("load", function() {
				$("#gif-8").attr("src", "images/img8.gif")
			});
			var n = new Image;
			n.src = "images/img9.gif", $(n).one("load", function() {
				$("#gif-9").attr("src", "images/img9.gif")
			})
		},
		loadImage2: function() {
			var e = new Image;
			e.src = "images/img12.gif", $(e).one("load", function() {
				$("#shake-btn").addClass("video-ready")
			});
			var i = new Image;
			i.src = "images/img15.gif", $(i).one("load", function() {
				$("#gif-15").attr("src", "images/img15.gif")
			});
			var n = new Image;
			n.src = "images/img16.gif", $(n).one("load", function() {
				$("#gif-16").attr("src", "images/img16.gif"), page.loadHarden()
			})
		},
		loadfeiji: function() {
			for (var e = 41; e < 176; e++) {
				var i = PrefixInteger(e, 3);
				$("#feiji-box").append('<img src="images/feiji/feiji.0' + i + '.png"/>')
			}
		},
		loadlocation: function() {
			for (var e = 0; e < 289; e++) {
				var i = PrefixInteger(e, 3);
				e > 260 ? $("#location-box").append('<img class="location-img" src="images/location/20_00' + i + '.jpg"/>') : e % 2 == 0 && $("#location-box").append('<img class="location-img" src="images/location/20_00' + i + '.jpg"/>')
			}
		},
		loadHarden: function() {
			for (var e = ["images/h01.gif", "images/h02.gif", "images/h03-1.gif", "images/h03.gif", "images/h04.gif", "images/h05.gif", "images/h06.gif", "images/h07.gif", "images/h08-1.gif", "images/h08-2.gif", "images/h08.gif"], i = e.length, n = [], t = 0; t < i; t++) n[t] = new Image, n[t].src = e[t], n[t].onload = function() {
				console.log("harden gif loaded")
			};
			for (var a = 0; a < 36; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				a % 2 == 0 && (o.src = "images/h01/h01textSnew_000" + t + ".png")
			}
			for (var a = 0; a < 27; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				a % 2 == 0 && (o.src = "images/h02/h02textS_000" + t + ".png")
			}
			for (var a = 0; a < 31; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				a % 2 == 0 && (o.src = "images/h05/h05textSnew_000" + t + ".png")
			}
			for (var a = 0; a < 41; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				a % 2 == 0 && (o.src = "images/h06/h06textSnew_000" + t + ".png")
			}
			for (var a = 0; a < 43; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				a % 2 == 0 && (o.src = "images/h07/h07textS_000" + t + ".png")
			}
			for (var a = 0; a < 10; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				o.src = "images/h08-2-1/eyes_000" + t + ".png"
			}
			for (var a = 0; a < 13; a++) {
				var t = PrefixInteger(a, 2),
					o = new Image;
				o.src = "images/h08-2-2/eyes_000" + t + ".png"
			}
		}
	};
$(function() {
	function e() {
		$(".location-skip").show(), clearInterval(n), $(".location-img").hide(), $("#location-box").fadeOut().removeClass("open"), stopLocationSound(), ClickEvent("Adidas_HardenH5", "HardenVol1/HHRcomplete", "Click"), mztrack("HardenVol1/HHRcomplete")
	}

	function i(n) {
		console.log(n);
		var t = n,
			a = $("#location-box").find(".location-img"),
			o = setInterval(function() {
				t++, t > n + 4 && (t = n + 4, clearInterval(o), setTimeout(function() {
					t > 155 ? e() : i(t)
				}, 3e3)), a.hide().eq(t - 1).show()
			}, 50)
	}
	isMobile.any() || (window.location.href = "pc.html"), _mwt.push(["_trackPageview", "/h5/1", "01loading页"]);
	var n;
	$(".location-close").on("click", function() {
		e()
	}), $(".location-skip").on("click", function() {
		$(".location-skip").hide(), clearInterval(n), $(".location-img").hide().eq(130).show(), setTimeout(function() {
			i(131), $("#location-box").removeClass("open")
		}, 3e3), $("#location-box").addClass("open"), stopLocationSound(), ClickEvent("Adidas_HardenH5", "HardenVol1/HHR_SKIP", "Click"), mztrack("HardenVol1/HHR_SKIP")
	}), $(".location-btn").on("click", function() {
		$("#location-box").show(), playLocationSound();
		var e = 0,
			t = $("#location-box").find(".location-img");
		n = setInterval(function() {
			e++, e > 131 && (e = 131, clearInterval(n), $("#location-box").addClass("open"), $(".location-skip").hide(), setTimeout(function() {
				i(e), $("#location-box").removeClass("open")
			}, 3e3)), t.hide().eq(e - 1).show()
		}, 56), _mwt.push(["_trackPageview", "/h5/6", "06HHR视频页"])
	}), $(document).on("click", ".pswp__page-btn-3-1", function() {
		_mwt.push(["_trackEvent", "13.1答题页第四题-最佳第六人按钮", 41])
	}), $(document).on("click", ".pswp__page-btn-3-2", function() {
		_mwt.push(["_trackEvent", "13.2答题页第四题-奥运金牌按钮", 42])
	}), $(document).on("click", ".pswp__page-btn-3-3", function() {
		_mwt.push(["_trackEvent", "13.3答题页第四题-全明星按钮", 43])
	}), $(document).on("click", ".pswp__page-btn-3", function() {
		$(".pswp__page-3").hide(), $('img[src="images/h03.gif"]').attr("src", "images/h03-1.gif")
	}), $(document).on("click", ".pswp__page-btn-8-2", function() {
		$(".pswp__page-8").hide(), $('img[src="images/h08.gif"]').attr("src", "images/h08-1.gif"), _mwt.push(["_trackEvent", "14.2答题页第九题-NO按钮", 45])
	}), $(document).on("click", ".pswp__page-btn-8-1", function() {
		return $(".pswp__page-8").hide(), $('img[src="images/h08.gif"]').attr("src", "images/h08-2.gif"), _mwt.push(["_trackEvent", "14.1答题页第九题-YES按钮", 44]), !($("#h08-text-1").length > 0) && (setTimeout(function() {
			$('img[src="images/h08-2.gif"]').after('<span id="h08-text-1" style="z-index: 1;">').after('<span id="h08-text-2" style="z-index: 2;">');
			for (var e = 0; e < 10; e++) {
				var i = PrefixInteger(e, 2);
				$("#h08-text-1").append('<img class="pswp__img" src="images/h08-2-1/eyes_000' + i + '.png"/>')
			}
			for (var e = 0; e < 13; e++) {
				var i = PrefixInteger(e, 2);
				$("#h08-text-2").append('<img class="pswp__img" src="images/h08-2-2/eyes_000' + i + '.png"/>')
			}
		}, 200), void setTimeout(function() {
			pngFrame("#h08-text-1", !1, 50, function() {
				console.log("#h08-text-1 play end")
			}), pngFrame("#h08-text-2", !0, 50, function() {
				console.log("#h08-text-2 play end")
			})
		}, 500))
	}), $(document).on("click", ".video-play-btn", function() {
		var e = $(this).attr("video-id");
		$("#video-box").attr("src", "images/" + e + ".mp4"), isMobile.iOS() ? $("#video-box")[0].play() : ($(".videoPage").show(), setTimeout(function() {
			$("#video-box")[0].play()
		}, 200))
	}), $(document).on("click", ".comment-box", function() {
		var e = $(this);
		$(this).hasClass("disable") ? ("yi" == $(this).attr("data-type") && $("#yi").show(), "er" == $(this).attr("data-type") && $("#er").show()) : e.hasClass("liked") || (e.addClass("liked"), e.parent().siblings(".poster-comments").find(".likes").append("<span>，</span>哈登")), e.addClass("click"), setTimeout(function() {
			e.parent().removeClass("open"), e.removeClass("click")
		}, 600)
	}), $(document).on("click", ".comment-btn", function() {
		$(this).parent().hasClass("open") ? $(this).parent().removeClass("open") : $(this).parent().addClass("open")
	}), $(document).on("click", ".shake-start", function() {
		if ($(this).hasClass("video-ready")) {
			if ($(this).hasClass("playing")) return !1;
			var e = $(this),
				i = e.find(".player-btn"),
				n = e.find(".img12-gif");
			e.addClass("playing"), $("#app").addClass("shake-slow"), $(".img12-1").addClass("shake-slow"), $(".img12-2").addClass("shake-slow"), i.hide(), n.attr("src", "images/img12.gif"), playWakeupSound(), setTimeout(function() {
				e.removeClass("playing"), $("#app").removeClass("shake-slow"), $(".img12-1").removeClass("shake-slow"), $(".img12-2").removeClass("shake-slow"), i.show(), n.attr("src", "images/icon-blank.png")
			}, 2600)
		}
	}), $("#video-box").on("click", function(e) {
		e.stopPropagation()
	}), $(".videoPage").on("click", function() {
		$("#video-box").attr("src", ""), $(".videoPage").hide()
	}), $(".sharePage").on("click", function() {
		$(".sharePage").fadeOut().removeClass("active")
	}), $("#sharePage-close").on("click", function() {
		$(".sharePage").fadeOut().removeClass("active")
	}), $("#qrcode-btn").on("click", function() {
		$("#qrcodePopup").fadeIn()
	}), $("#sharetip-btn").on("click", function() {
		$("#sharetipPopup").fadeIn()
	}), $(".popup").on("click", function() {
		$(this).fadeOut()
	}), $("#qrcode-box").on("click", function(e) {
		e.stopPropagation()
	})
}), window.gallery = null;
var initPhotoSwipeFromDOM = function(e) {
	for (var i = function(e) {
			for (var i, n, t, a, o = e.childNodes, s = o.length, r = [], c = 0; c < s; c++) i = o[c], 1 === i.nodeType && (n = i.children[0], t = n.getAttribute("data-size").split("x"), a = {
				src: n.getAttribute("href"),
				w: parseInt(t[0], 10),
				h: parseInt(t[1], 10)
			}, i.children.length > 1 && (a.title = i.children[1].innerHTML), n.children.length > 0 && (a.msrc = n.children[0].getAttribute("src")), a.el = i, r.push(a));
			return r
		}, n = function e(i, n) {
			return i && (n(i) ? i : e(i.parentNode, n))
		}, t = function(e) {
			e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1;
			var i = e.target || e.srcElement,
				t = n(i, function(e) {
					return e.tagName && "FIGURE" === e.tagName.toUpperCase()
				});
			if (t) {
				for (var a, r = t.parentNode, c = t.parentNode.childNodes, g = c.length, l = 0, d = 0; d < g; d++)
					if (1 === c[d].nodeType) {
						if (c[d] === t) {
							a = l;
							break
						}
						l++
					}
				if (a >= 0) {
					var m = r.getAttribute("data-pswp-uid");
					if ($(".pswp__pagination").empty().removeClass("black"), 1 == m) {
						for (var d = 0; d < 9; d++) $(".pswp__pagination").addClass("black").append("<span>");
						o(a, r)
					} else {
						for (var d = 0; d < 8; d++) $(".pswp__pagination").append("<span>");
						s(a, r)
					}
				}
				return !1
			}
		}, a = function(e, i) {
			$(".pswp__pagination span").removeClass("active").eq(e).addClass("active"), 1 == i && (0 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_1", "Click"), mztrack("HardenVol1/PicAdidasBSK_1"), _mwt.push(["_trackEvent", "9.3朋友圈五条-BSK图片1按钮", 16])), 1 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_2", "Click"), mztrack("HardenVol1/PicAdidasBSK_2"), _mwt.push(["_trackEvent", "9.4朋友圈五条-BSK图片2按钮", 17])), 2 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_3", "Click"), mztrack("HardenVol1/PicAdidasBSK_3"), _mwt.push(["_trackEvent", "9.5朋友圈五条-BSK图片3按钮", 18])), 3 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_4", "Click"), mztrack("HardenVol1/PicAdidasBSK_4"), _mwt.push(["_trackEvent", "9.6朋友圈五条-BSK图片4按钮", 19])), 4 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_5", "Click"), mztrack("HardenVol1/PicAdidasBSK_5"), _mwt.push(["_trackEvent", "9.7朋友圈五条-BSK图片5按钮", 20])), 5 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_6", "Click"), mztrack("HardenVol1/PicAdidasBSK_6"), _mwt.push(["_trackEvent", "9.8朋友圈五条-BSK图片6按钮", 21])), 6 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_7", "Click"), mztrack("HardenVol1/PicAdidasBSK_7"), _mwt.push(["_trackEvent", "9.9朋友圈五条-BSK图片7按钮", 22])), 7 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_8", "Click"), mztrack("HardenVol1/PicAdidasBSK_8"), _mwt.push(["_trackEvent", "9.10朋友圈五条-BSK图片8按钮", 23])), 8 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicAdidasBSK_9", "Click"), mztrack("HardenVol1/PicAdidasBSK_9"), _mwt.push(["_trackEvent", "9.11朋友圈五条-BSK图片9按钮", 24]))), 2 == i && (0 == e && (setTimeout(function() {
				if ($("#h01-text").length > 0) return !1;
				$('img[src="images/h01.gif"]').after('<span id="h01-text">');
				for (var e = 0; e < 36; e++) {
					var i = PrefixInteger(e, 2);
					e % 2 == 0 && $("#h01-text").append('<img class="pswp__img" src="images/h01/h01textSnew_000' + i + '.png"/>')
				}
				setTimeout(function() {
					pngFrame("#h01-text", !1, 50, function() {
						console.log("#h01-text play end")
					})
				}, 500)
			}, 500), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_2", "Click"), mztrack("HardenVol1/PicKnowHD_2"), _mwt.push(["_trackEvent", "12.4朋友圈八条-KHD图片2按钮", 33])), 1 == e && (setTimeout(function() {
				if ($("#h02-text").length > 0) return !1;
				$('img[src="images/h02.gif"]').after('<span id="h02-text">');
				for (var e = 0; e < 29; e++) {
					var i = PrefixInteger(e, 2);
					e % 2 == 0 && $("#h02-text").append('<img class="pswp__img" src="images/h02/h02textS_000' + i + '.png"/>')
				}
				setTimeout(function() {
					pngFrame("#h02-text", !1, 50, function() {
						console.log("#h02-text play end")
					})
				}, 500)
			}, 500), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_3", "Click"), mztrack("HardenVol1/PicKnowHD_3"), _mwt.push(["_trackEvent", "12.5朋友圈八条-KHD图片3按钮", 34])), 2 == e ? ($(".pswp__page-3").show(), $('img[src="images/h03-1.gif"]').attr("src", "images/h03.gif"), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_4", "Click"), mztrack("HardenVol1/PicKnowHD_4"), _mwt.push(["_trackEvent", "12.6朋友圈八条-KHD图片4按钮", 35])) : $(".pswp__page-3").hide(), 3 == e && (ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_5", "Click"), mztrack("HardenVol1/PicKnowHD_5"), _mwt.push(["_trackEvent", "12.7朋友圈八条-KHD图片5按钮", 36])), 4 == e && (setTimeout(function() {
				if ($("#h05-text").length > 0) return !1;
				$('img[src="images/h05.gif"]').after('<span id="h05-text">');
				for (var e = 0; e < 31; e++) {
					var i = PrefixInteger(e, 2);
					e % 2 == 0 && $("#h05-text").append('<img class="pswp__img" src="images/h05/h05textSnew_000' + i + '.png"/>')
				}
				setTimeout(function() {
					pngFrame("#h05-text", !1, 50, function() {
						console.log("#h05-text play end")
					})
				}, 500)
			}, 500), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_6", "Click"), mztrack("HardenVol1/PicKnowHD_6"), _mwt.push(["_trackEvent", "12.8朋友圈八条-KHD图片6按钮", 37])), 5 == e && (setTimeout(function() {
				if ($("#h06-text").length > 0) return !1;
				$('img[src="images/h06.gif"]').after('<span id="h06-text">');
				for (var e = 0; e < 41; e++) {
					var i = PrefixInteger(e, 2);
					e % 2 == 0 && $("#h06-text").append('<img class="pswp__img" src="images/h06/h06textSnew_000' + i + '.png"/>')
				}
				setTimeout(function() {
					pngFrame("#h06-text", !1, 50, function() {
						console.log("#h06-text play end")
					})
				}, 500)
			}, 500), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_7", "Click"), mztrack("HardenVol1/PicKnowHD_7"), _mwt.push(["_trackEvent", "12.9朋友圈八条-KHD图片7按钮", 38])), 6 == e && (setTimeout(function() {
				if ($("#h07-text").length > 0) return !1;
				$('img[src="images/h07.gif"]').after('<span id="h07-text">');
				for (var e = 0; e < 43; e++) {
					var i = PrefixInteger(e, 2);
					e % 2 == 0 && $("#h07-text").append('<img class="pswp__img" src="images/h07/h07textS_000' + i + '.png"/>')
				}
				setTimeout(function() {
					pngFrame("#h07-text", !1, 50, function() {
						console.log("#h07-text play end")
					})
				}, 500)
			}, 500), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_8", "Click"), mztrack("HardenVol1/PicKnowHD_8"), _mwt.push(["_trackEvent", "12.10朋友圈八条-KHD图片8按钮", 39])), 7 == e ? ($(".pswp__page-8").show(), $("#h08-text-2").remove(), $("#h08-text-1").remove(), $('img[src="images/h08-1.gif"]').length > 0 && $('img[src="images/h08-1.gif"]').attr("src", "images/h08.gif"), $('img[src="images/h08-2.gif"]').length > 0 && $('img[src="images/h08-2.gif"]').attr("src", "images/h08.gif"), ClickEvent("Adidas_HardenH5", "HardenVol1/PicKnowHD_9", "Click"), mztrack("HardenVol1/PicKnowHD_9"), _mwt.push(["_trackEvent", "12.11朋友圈八条-KHD图片9按钮", 40])) : $(".pswp__page-8").hide())
		}, o = function(e, n, t, o) {
			var s, r, c = document.querySelectorAll(".pswp")[0];
			if (r = i(n), s = {
					history: !1,
					escKey: !1,
					arrowKeys: !1,
					loop: !1,
					closeOnScroll: !1,
					closeOnVerticalDrag: !1,
					tapToClose: !0,
					getThumbBoundsFn: function(e) {
						var i = r[e].el.getElementsByTagName("img")[0],
							n = window.pageYOffset || document.documentElement.scrollTop,
							t = i.getBoundingClientRect();
						return {
							x: t.left,
							y: t.top + n,
							w: t.width
						}
					}
				}, o)
				if (s.galleryPIDs) {
					for (var g = 0; g < r.length; g++)
						if (r[g].pid == e) {
							s.index = g;
							break
						}
				} else s.index = parseInt(e, 10) - 1;
			else s.index = parseInt(e, 10);
			isNaN(s.index) || (t && (s.showAnimationDuration = 0), a(s.index, 1), window.gallery = new PhotoSwipe(c, PhotoSwipeUI_Default, r, s), window.gallery.init(), window.gallery.listen("afterChange", function() {
				a(window.gallery.getCurrentIndex(), 1)
			}))
		}, s = function(e, n, t, o) {
			var s, r, c = document.querySelectorAll(".pswp")[0];
			if (r = i(n), s = {
					history: !1,
					escKey: !1,
					arrowKeys: !1,
					loop: !1,
					closeOnScroll: !1,
					closeOnVerticalDrag: !1,
					tapToClose: !0,
					showHideOpacity: !0,
					maxSpreadZoom: 1,
					getThumbBoundsFn: function(e) {
						var i = r[e].el.getElementsByTagName("img")[0],
							n = window.pageYOffset || document.documentElement.scrollTop,
							t = i.getBoundingClientRect();
						return {
							x: t.left,
							y: t.top + n,
							w: t.width
						}
					}
				}, o)
				if (s.galleryPIDs) {
					for (var g = 0; g < r.length; g++)
						if (r[g].pid == e) {
							s.index = g;
							break
						}
				} else s.index = parseInt(e, 10) - 1;
			else s.index = parseInt(e, 10);
			isNaN(s.index) || (t && (s.showAnimationDuration = 0), a(s.index, 2), window.gallery = new PhotoSwipe(c, PhotoSwipeUI_Default, r, s), window.gallery.init(), window.gallery.listen("afterChange", function() {
				a(window.gallery.getCurrentIndex(), 2)
			}))
		}, r = document.querySelectorAll(e), c = 0, g = r.length; c < g; c++) r[c].setAttribute("data-pswp-uid", c + 1), r[c].onclick = t
};
initPhotoSwipeFromDOM(".my-gallery");
var wxData = {
		imgUrl: "http://campaign.adidas.cn/hardenvol1/images/share.jpg",
		link: "http://campaign.adidas.cn/hardenvol1/index.html?fromMoment=true",
		desc: "Harden Vol.1蠢蠢欲动，#创异觉醒#迫在眉睫",
		title: "套路者🈲️，哈登朋友圈曝光！"
	},
	setupWx = function(e) {
		wx.config({
			debug: !1,
			appId: e.appId,
			timestamp: e.timestamp,
			nonceStr: e.nonceStr,
			signature: e.signature,
			jsApiList: ["checkJsApi", "onMenuShareAppMessage", "onMenuShareTimeline"]
		}), wx.error(function(e) {}), wx.ready(function() {
			wx.onMenuShareAppMessage({
				title: wxData.title,
				desc: wxData.desc,
				link: wxData.link,
				imgUrl: wxData.imgUrl,
				type: "",
				dataUrl: "",
				success: function() {},
				cancel: function() {}
			}), wx.onMenuShareTimeline({
				title: wxData.title,
				link: wxData.link,
				imgUrl: wxData.imgUrl,
				success: function() {},
				cancel: function() {}
			})
		})
	},
	token, url = encodeURI(location.href.split("#")[0]);
$.ajax({
	url: "api/jssdk/jssdk.php",
	type: "post",
	dataType: "JSON",
	data: {
		url: url
	},
	success: function(e) {
		console.log(e), token = e, setupWx(token)
	},
	error: function(e, i, n) {
		console.log("网路错误，请稍后再试！")
	}
});