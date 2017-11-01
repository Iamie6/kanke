var landing = [{
		src: "./img/load.gif"
	}, {
		src: "./img/p2.png"
	}, {
		src: "./img/icon-comment.png"
	}, {
		src: "./img/icon-like.png"
	}, {
		src: "./img/icon-player.png"
	}, {
		src: "./img/icon-zan.png"
	}, {
		src: "./img/icon-emoji-1.png"
	}];

var loadPoint = document.getElementById('loadPoint');

var count = 0
var timer = setInterval(function(){
	count++;
	if(count == 0){
		loadPoint.innerHTML = ' . ';
	}else if(count == 1){
		loadPoint.innerHTML = ' ..';
	}else if(count == 2){
		loadPoint.innerHTML = ' ...'
	}else if(count == 3){
		count=-1
		loadPoint.innerHTML = ' '
	}
},500)

var loadWord = '长大让你学会追求生活，但你需要英勇的灵魂，拯救你丢失了乐趣的世界。。。';
var loadWordBox = document.getElementById('loadWordBox');

var len = loadWord.length;
var index = 0
var timer2 = setInterval(function(){
	if(index==len){
		clearInterval(timer2)
		return;
	}
	loadWordBox.innerHTML+= loadWord[index] ;
	index++;
},300)

function setTitle(t) {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }
    document.body.appendChild(i);
}

var timestamp = "";
var nonceStr = "";
var signature = "";

window.onload=function(){
	var timer = null;
	if (code) {
		timer = setInterval(function(){
			if(hasRequest){
				if(index == len){
					clearInterval(timer)
					document.querySelector('.loadPage').style.display = 'none'
					if(name){
						document.querySelector('.friend .title .name').innerHTML = name
						document.querySelector('.energy-box .energy .name').innerHTML = name
					}
					if(headerPic){
						document.querySelector('.friend .title .header').src = headerPic
					}
					setTitle('朋友圈')
					document.querySelector('.friend-box').style.display = 'block'
				}
				
				axios.get(baseURL + '/getsharecode',{
					params:{
						url: window.location.href
					}
				}).then(function(res){
					console.log(res)
					
					timestamp = res.data.timestamp;
					nonceStr = res.data.noncestr;
					signature = res.data.signature;
					//token
					wx.config({
					    debug: false,
					    appId: 'wxdca041b14b8ed8ab', 
					    timestamp: timestamp, 
					    nonceStr: nonceStr,
					    signature: signature,
					    jsApiList: [
					    	"onMenuShareTimeline",
							"onMenuShareAppMessage",
							"onMenuShareQQ",
							"onMenuShareWeibo"
						] 
					})
				})
				
				
				var configJson1 = {
				    title: '我是擎天柱，呼叫所有汽车人！', // 分享标题
				    link: shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: 'http://bingxing.igetter.cn/sdsl/html5/img/images/HeroicAutobots.png', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				}
				var configJson2 = {
				    title: '我是擎天柱，呼叫所有汽车人！', // 分享标题
				    link: shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    desc: "集合地球十二骑士来搞事啦！",
				    imgUrl: 'http://bingxing.igetter.cn/sdsl/html5/img/images/HeroicAutobots.png', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				}
				wx.ready(function(){
					wx.onMenuShareTimeline(configJson1);
					wx.onMenuShareAppMessage(configJson2);
					wx.onMenuShareWeibo(configJson1);
					wx.onMenuShareQQ(configJson1);
				})

				wx.error(function(res){

				})
				
			}
		},50)
	}else{
		timer = setInterval(function(){
			if(index == len){
				clearInterval(timer)
				document.querySelector('.loadPage').style.display = 'none'
				setTitle('朋友圈')
				document.querySelector('.friend-box').style.display = 'block'
			}
		},50)
	}

	var isBottom = false;
	var hasTip = false;
	var chat_tip = document.querySelector('.chat-tip');
	document.querySelector('#a1').play();
	document.querySelector('#a1').pause();
	document.querySelector('.friend-box').onscroll = function(){
		var height = this.scrollHeight - this.offsetHeight;
		var scroll = this.scrollTop;
		if(isBottom){
			document.querySelector('.friend-box').addEventListener('touchmove',function(){
				if(hasTip)return;
				setTimeout(function(){
					chat_tip.style.display = 'block';
				},1000);
				document.querySelector('#a1').play();
				hasTip = true;
			},false)
			
			chat_tip.addEventListener("click",function(){
				document.querySelector('.friend-box').style.display = 'none'
				setTitle('汽车人')
				document.querySelector('.chatPage').style.display = 'block'
				setTimeout(function(){
					document.querySelectorAll('.line')[1].style.display = 'block';
					document.querySelector('#a1').play();
				},1000)
			},false)
		}
		if( scroll>= height-20){
			isBottom = true
		}
	}
	document.querySelectorAll('.line')[1].addEventListener('click',function(){
		document.querySelector('.chatPage').style.display = 'none';
		document.querySelector('.puzzle-box').style.display = 'block';
	},false)
};

var overscroll = function(el) {
  el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight;
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  });
  el.addEventListener('touchmove', function(evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
  });
}
overscroll(document.querySelector('.ranking-box'));
overscroll(document.querySelector('.puzzle-box'));
overscroll(document.querySelector('.friend-box'));
overscroll(document.querySelector('.tip-anim'));

//拼图

var puzzle = document.querySelectorAll('.box1 div');
document.querySelector('.puzzle').addEventListener('click',puzzleClick,false)
function puzzleClick(){
	document.querySelector('.puzzle').removeEventListener('click',puzzleClick,false)
	document.querySelector('#a2').play();
	for (var i = 0; i < puzzle.length; i++) {
		puzzle[i].style.transform = "translate(0, 0)";
		puzzle[i].style.border = 'none';
	}
	setTimeout(function(){
		document.querySelector('.box1').classList.add('active')
		document.querySelector('.bg-puzzle').style.display = 'block'
		document.querySelector('.book-puzzle').style.display = 'block'
		
		document.querySelector('.box1').classList.add('fadeOut')
		document.querySelector('.bg-puzzle').classList.add('fadeOut')
		setTimeout(function(){
			document.querySelector('.box1').style.display = 'none';

			document.querySelector('.puzzle').classList.add('active')

			setTimeout(function(){
				document.querySelector('.gif1').style.display = 'block';
				document.querySelector('.puzzle').style.visibility = 'hidden';
				document.querySelector('.gif1 img').src = './img/images/g1_1.png';
					document.querySelector('.tip').innerHTML = "你得到一本变形金刚之书,左滑打开寻找线索";

				setTimeout(function(){
					document.querySelector('.tip-anim').style.display = 'block';
					document.body.removeEventListener('touchmove',stopScroll)

					document.querySelector('.gif1').addEventListener('touchstart',gifS1,false)
				},500)
			},200)
		},1200)
		
	},400)
}
function startOpen(){
	document.body.addEventListener('touchmove',stopScroll)
	document.querySelector('#a3').play();
	document.querySelector('.tip-anim').style.display = 'none';
	document.querySelector('.gif1 img').src = './img/images/g1.gif';
	document.querySelector('.tip').innerHTML = "^@%$#&^%$#&^&%$#@$%";
	setTimeout(function(){
		document.querySelector('.puzzle-box>p').style.display = 'block';
		document.querySelector('.tip').innerHTML = "点击拉动纸条";
		document.querySelector('.tip-anim').style.backgroundImage = 'url(./img/images/t2b.png)';
		document.querySelector('.tip-anim').style.left = '50%';
		document.querySelector('.tip-anim').style.top = '8rem';
		document.querySelector('.tip-anim').classList.remove('f1');
		document.querySelector('.tip-anim').classList.add('f2');
		document.querySelector('.tip-anim').style.display = 'block';
		document.querySelector('.tip-anim').onclick = function(){
			document.querySelector('.tip-anim').style.display = 'none';
			document.querySelector('.gif1 img').src = './img/images/g2.gif';
			document.querySelector('.puzzle-box>p').innerHTML = "为重建家园，领袖擎天柱带领汽车人来到地球寻找新能源，却遇到霸天虎尾随而受到重创";

			setTimeout(function(){
				document.querySelector('.tip').innerHTML = "纸条就是信息的核心，继续点击它";
				document.querySelector('.tip-anim').style.display = 'block';
				document.querySelector('.tip-anim').onclick = function(){
					document.querySelector('#a3').pause()
					document.querySelector('#a4').play()
					document.querySelector('.blur').style.display = 'block';
					document.querySelector('.tip-msg').classList.add('fadeIn')
					document.querySelector('.tip').innerHTML = "#$^%$^&%^&**^%@^&(*&"
					setTimeout(function(){
						document.querySelector('.tip').innerHTML = "点击纸条"
					},500)
				}
			},2000)
		}
	},3000)
}
function gifS1(ev){
	console.log(1)
	var startX = ev.targetTouches[0].pageX;
	document.querySelector('.gif1').addEventListener('touchmove',gifM1,false)
	document.querySelector('.gif1').addEventListener('touchend',gifE1,false)
	function gifM1(ev){
		var endX = ev.targetTouches[0].pageX;
		if(endX - startX < -20){
			document.querySelector('.gif1').removeEventListener('touchstart',gifS1,false)
			startOpen()
		}
	}
	function gifE1(){
		document.querySelector('.gif1').removeEventListener('touchmove',gifM1,false)
		document.querySelector('.gif1').removeEventListener('touchend',gifE1,false)
	}
}

document.querySelector('.tip-msg').addEventListener('click',clickmsg,false)
function clickmsg(){
	document.querySelector('.tip-anim').style.display = 'none';

	document.querySelector('.gif1 img').src = './img/images/g3_1.png';

	document.querySelector('.blur').classList.add('zoomOut');
	document.querySelector('.puzzle-box>p').style.textAlign = 'center';
	document.querySelector('.puzzle-box>p').innerHTML = "能量耗尽...";

	document.querySelector('.puzzle-box .power-box').style.display = 'block';

	document.querySelector('.tip').style.marginTop = '0.5rem';
	document.querySelector('.tip').innerHTML = '<p style="margin-top:1.2rem;width:5rem;">cseglass in ____</p><p data-name="a">A.tonday</p><p data-name="c">B.monday</p><p data-name="c">C.wonday</p>'

	var hasClick = false;
	document.querySelector('.tip').addEventListener('click',function(ev){
		if(hasClick) return;
		var target = ev.target;
		var tagName = target.tagName;
		if(tagName == 'P'){
			var name = target.getAttribute('data-name');
			if(name == "a"){
				hasClick = true;
				document.querySelector("#a5").play()
				target.classList.add('right')
				document.querySelector(".puzzle-box .power-box").style.borderColor = "#00c6ff";
				document.querySelector('.puzzle-box .power-box .power2').style.width = "11.75rem";
				setTimeout(function(){
					document.querySelector('.puzzle-box>p').style.display = 'none';
					document.querySelector('.gif1 img').src = './img/images/g3.gif';
					document.querySelector('.puzzle-box>p').style.marginTop = '-0.5rem';
					document.querySelector('.puzzle-box>p').innerHTML = "在此我授予你骑士徽章，伟大的地球骑士，汽车人将与你同在！汽车人，变形，出发！";
					setTimeout(function(){
						document.querySelector('.puzzle-box>p').classList.add('slideInLeft')
						document.querySelector('.puzzle-box>p').style.display = 'block';
						setTimeout(function(){
							document.querySelector('.puzzle-box>p').style.display = 'none';
							var aP = document.querySelectorAll('.puzzle-box>p');
							for (var i = 0; i < aP.length; i++) {
								aP[i].classList.add('zoomOut')
							}
							document.querySelector('.gif1').classList.add('zoomOut')
							document.querySelector('.tip').classList.add('zoomOut')
							document.querySelector('.carers').classList.add('zoomIn2')
							document.querySelector('.carers').style.display = 'block'
							setTimeout(function(){
								document.querySelector('.puzzle-box').style.display = 'none'
								document.querySelector('.bottom-box').style.display = 'block'
								var hasBtnShow = false;
								document.querySelector('.bottom-box').onclick=function(){
									if(hasBtnShow){
										hasBtnShow = false;
										document.querySelector('.btns').style.display = 'none'
									}else{
										hasBtnShow = true
										document.querySelector('.btns').style.display = 'block'
									}
								}
								setTimeout(function(){
									var ap = document.querySelectorAll('.bottom-word p');
									for (var i = 0; i < ap.length; i++) {
										ap[i].style.display = 'block'
									}
								},1000)
							},7000)
						},3000)
					},2000)
				},3000)
			}else if(name == 'b' || name == 'c'){
				target.classList.add('wrong')
			}
		}				
	},false)
}
document.querySelector('.btns').addEventListener("click", function(ev){
	var target = ev.target
	var tagName = target.tagName

	if(tagName == 'P'){
		if(target.getAttribute('data-name') == 'badge'){
			document.querySelector('.bottom-box').style.display = 'none'
			document.querySelector('.badge').style.display = 'block';
		}
		if(target.getAttribute('data-name') == 'count'){
			document.querySelector('.weixin').style.display = 'block';
		}
	}
},false)

document.querySelector('.close').addEventListener('click',function(){
	document.querySelector('.weixin').style.display = 'none';
},false)


document.querySelector('.goto').addEventListener('click',function(){
	document.querySelector('.badge').style.display = 'none';
	
	axios.get(baseURL2 + '/push',{params:{
		vx_code: openid,
		vx_icon: headerPic,
		vx_name	:name,
		rq_token:rq_token
	}}).then(function(res){
		var data = res.data;
		if(data.rescode == 1){
			en_id = data.en_id;
			shareURL = 'http://bingxing.igetter.cn/sdsl/html5/showActivIndex.html?en_id=' + en_id
			
			//token
			wx.config({
			    debug: false,
			    appId: 'wxdca041b14b8ed8ab', 
			    timestamp: timestamp, 
			    nonceStr: nonceStr,
			    signature: signature,
			    jsApiList: [
			    	"onMenuShareTimeline",
					"onMenuShareAppMessage",
					"onMenuShareQQ",
					"onMenuShareWeibo"
				] 
			})
		
			var configJson1 = {
			    title: '擎天柱需要我们一起拯救！小伙伴们！', // 分享标题
			    link: shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			    imgUrl: 'http://bingxing.igetter.cn/sdsl/html5/img/images/OptimusPrime.png', // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    }
			}
			var configJson2 = {
			    title: '擎天柱需要我们一起拯救！小伙伴们！', // 分享标题
			    link: shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			    desc: "来搞事情！",
			    imgUrl: 'http://bingxing.igetter.cn/sdsl/html5/img/images/OptimusPrime.png', // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    }
			}
		
			wx.ready(function(){
				wx.onMenuShareTimeline(configJson1);
				wx.onMenuShareAppMessage(configJson2);
				wx.onMenuShareWeibo(configJson1);
				wx.onMenuShareQQ(configJson1);
			})
	
			wx.error(function(res){
	
			})
				
		
			
			axios.get(baseURL2 + '/showenergydetail',{
				params:{
					rq_token: rq_token,
					en_id: en_id,
					vx_code: openid
				}
			}).then(function(res){
				var data = res.data;
				var str = '';
				if(data.persionVOList && data.persionVOList.length){
				
					var point = document.querySelectorAll('.energy-box .energy .piont div');
					if(data.persionVOList.length > 11){
						document.querySelectorAll('.energy-box .energy .power').style.width = '11.75rem';
						for (var i = 0; i < point.length; i++) {
							point[i].classList.add('active');
						}
					}else{
						document.querySelector('.energy-box .energy .power').style.width = data.energeticMainVO.energeticNum*100/12 + '%';
						for (var i = 0; i < data.energeticMainVO.energeticNum; i++) {
							point[i].classList.add('active');
						}
					}
					for (var i = 0; i < data.persionVOList.length; i++) {
						str += '<p><span class="name">' + data.persionVOList[i].vxName + '</span><span class="summary">为擎天柱注入了能量</span><span>' + data.persionVOList[i].energeticTime +'</span></p>'
					}
				}
				document.querySelector('.energy-box .energy .detail').innerHTML = str;
			}).catch(function(err){

			})
			document.querySelector('.badge').style.display = 'none';
			document.querySelector('.energy-box').style.display = 'block';
			document.body.removeEventListener('touchmove', stopScroll,false)
		}else{
			alert("参加活动失败")
		}
	}).catch(function(err){
		alert("参加活动失败")
		console.log(err)
	})
},false)

document.querySelectorAll('.energy-box .btn-box span')[0].addEventListener('click', function(){
	axios.get(baseURL2 + '/showenergyorder',{params:{
		rq_token:rq_token,
		vx_code: openid
	}}).then(function(res){
		var data = res.data
		var listVO = data.listVO
		var energeticMainVO = data.energeticMainVO
		document.querySelector('.energy-box').style.display = 'none';
		document.querySelector('.ranking-box').style.display = 'block';

		var str = '<div class="title">充能排行榜</div>';


		if(listVO && listVO.length){
			str += '<div class="number1"><div class="rank">NO. 1</div><div class="headPic" style="background-image:url('+ listVO[0].vxIcon+')"></div><div class="content"><p>'+listVO[0].vxName+'</p><p>能量'+listVO[0].energeticNum+'</p></div><div class="crown"></div></div>';
			

			if(listVO.length>1){
				for (var i = 1; i < listVO.length; i++) {
					str +='<div class="number"><p>NO. '+ (i+1) +'</p><div class="headeP" style="background-image:url('+ listVO[i].vxIcon+')"></div><div class="content"><p>'+listVO[i].vxName+'</p><p>充能'+listVO[i].energeticNum+'</p></div></div>';
				}
			}
		}
		if(energeticMainVO){
			str += '<div class="myself"><p>NO.'+energeticMainVO.ordNum+'</p><div class="headeP" style="background-image:url('+ energeticMainVO.vxIcon+')"></div><div class="content"><p>'+energeticMainVO.vxName +'</p><p>充能'+energeticMainVO.energeticNum+'</p></div></div>';
			
		}
		document.querySelector('.ranking-box .ranking').innerHTML = str;
	}).catch(function(err){
		alert('获取列表失败')
	})

},false)

document.querySelectorAll('.energy-box .btn-box span')[1].addEventListener('click', function(){
	document.querySelector('.tipToShare').style.display = 'block';
},false)
document.querySelector('.tipToShare').addEventListener('click',function(){
	document.querySelector('.tipToShare').style.display = 'none';
},false)

document.body.addEventListener('touchmove', stopScroll,false);
function stopScroll(evt) {
  //In this case, the default behavior is scrolling the body, which
  //would result in an overflow.  Since we don't want that, we preventDefault.
  if(!evt._isScroller) {
    evt.preventDefault();
  }
}