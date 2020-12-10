/* top-banner顶置，不需要可删除 */
$(function(){
	var headerStr = 
	
	'<header class="page_header">'+
						'<div class="inner_header">'+
							'<a href="http://www.yunguos.com/js/index.php" class="logo_warp" title="水果称重收银软件">'+		
								'<label>用云果OS.再小的水果店也有大流量</label>'+
							'</a>'+
							'<nav>'+
								'<ul id="topNav" class="top-nav">'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/index.php">首页</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_index.php">产品</a>'+
										'<ul class="secondNav">'+
											'<li class="second-nav1"><a href="http://www.yunguos.com/js/product_weigh.php" >称重收银</a></li>'+
											'<li class="second-nav2"><a href="http://www.yunguos.com/js/product_wechat.php">微信商城</a></li>'+
											'<li class="second-nav3"><a href="http://www.yunguos.com/js/product_housekeeper.php">云果管家</a></li>'+
											'<li class="second-nav4"><a href="http://www.yunguos.com/js/product_takeout.php">外卖接入</a></li>'+
											'<li class="second-nav5"><a href="http://www.yunguos.com/js/product_member.php">会员营销</a></li>'+
										'</ul>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/hardware_index.php">硬件</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/join_index.php">加盟</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/dynamics.php">动态</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/about_desc.php">关于</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/help_index.php">帮助</a>'+
									'</li>'+
									'<li>'+
										'<a href="../software/download.zip"/*tpa=http://www.yunguos.com/software/download.zip*/>下载</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://manager.yunguos.cn/boss/register/add">免费试用</a>'+
									'</li>'+
								'</ul>'+
							'</nav>'+
						'</div>'+
					'</header>';
					
	var footerStr = '<footer class="page_footer">'+
						'<div class="inner_footer1">'+
							'<section>'+
								'<h1>联系我们</h1>'+
								'<ul>'+
									'<li>'+
										'售前咨询：400-029-2635'+
									'</li>'+
									'<li>'+
										'售前服务：029-87888753'+
									'</li>'+
									'<li>'+
										'投诉建议：029-87622605'+
									'</li>'+
									'<li>'+
										'技术支持邮箱：service@xaphp.com'+
									'</li>'+
									'<li>'+
										'咨询QQ：800130828'+
									'</li>'+
									
								'</ul>'+
							'</section>'+
							'<section>'+
								'<h1>云果OS</h1>'+
								'<ul>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_weigh.php">称重收银</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_wechat.php">微信商城</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_housekeeper.php">云果管家</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_takeout.php">外卖接入</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/product_member.php">会员营销</a>'+
									'</li>'+
								'</ul>'+
							'</section>'+
							
								'<section>'+
								'<h1>关于我们</h1>'+
								'<ul>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/about_desc.php">公司简介</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/about_desc.php">联系方式</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/about_desc.php">加入我们</a>'+
									'</li>'+
									'<li>'+
										'<a href="http://www.yunguos.com/js/join_index.php">市场合作</a>'+
									'</li>'+
									
							
									
									
								'</ul>'+
							'</section>'+
							
							
				
							'<section>'+
								'<ul>'+
									'<li>'+
										'<img src="img/ewm.jpg"/*tpa=http://www.yunguos.com/js/img/ewm.jpg*/ alt="昊海软件二维码">'+
									'</li>'+
									'<li>'+
										'扫一扫关注我们'+
									'</li>'+
									'<li>'+
										'微信：haohaiospts'+
									'</li>'+
								'</ul>'+
							'</section>'+
						'</div>'+
						'<div class="inner_footer2">'+
							'<p>©Copyright 昊海软件 2004-2020 <a href="http://beian.miit.gov.cn/">陕ICP备11006070号-11 </a> </p>'+
						'</div>'+
					'</footer>';
					
	var rightFixd = '<div class="suspension">'+
					    '<div class="suspension-box">'+
					        /*'<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDEzMDgyOF8zNjkyOTZfODAwMTMwODI4XzJf" id="webqq" target="_blank" class="qq j-icon a"><i>qq</i></a>'+ */
					        '<a class="a tel j-icon"><i>tel</i></a>'+
					        '<a class="code j-icon a"><i>code</i></a>'+
					        /*'<a class="code-wx j-icon a"><i>code-wx</i></a>'+*/
					        '<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDEzMDgyOF8zNjkyOTZfODAwMTMwODI4XzJf" id="webqq" target="_blank" class="qq j-icon a dingzhi">定制开发</a>'+
					        '<a class="back_top j-back-top a" style="display: none;"><i>back_top</i></a>'+
					        /*'<div class="tencent j-tencent j-box" style="display: none;">'+
					            '<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDEzMDgyOF8zNjkyOTZfODAwMTMwODI4XzJf" target="_blank"><i class="tencent-i">tencent</i><b class="tencent-b"><span class="tencent-span"><img class="tencent-qq" src="img/qq-tencent.png"/*tpa=http://www.yunguos.com/js/img/qq-tencent.png*/ alt="" style="width: 39px; height: 45px; left: 3px;"></span></b><p class="tencent-p">在线客服<br>点击交谈</p></a>'+          
					        '</div>'+*/
					        '<div class="tel j-box" style="display: none;"><strong>服务热线：</strong><p>400-029-2635</p><i></i></div>'+
					        '<div class="code j-box" style="display: none;"><!--img src="img/ewm.jpg"/*tpa=http://www.yunguos.com/js/img/ewm.jpg*/ alt=""><p>微信扫一扫关注云果OS</p--><div class="wechat-con"><img src="img/wangshixin.png"/*tpa=http://www.yunguos.com/js/img/wangshixin.png*/ alt=""><p>售前：小王</p></div><div class="wechat-con"><img src="img/luowujiang.png"/*tpa=http://www.yunguos.com/js/img/luowujiang.png*/ alt=""><p>售前：小骆</p></div><div class="wechat-con"><img src="img/hanxibo.png"/*tpa=http://www.yunguos.com/js/img/hanxibo.png*/ alt=""><p>售前：小韩</p></div><div class="wechat-con"><img src="img/yangjie.png"/*tpa=http://www.yunguos.com/js/img/yangjie.png*/ alt=""><p>售后：小杨</p></div><i></i></div>'+
					       /* '<div class="code-wx j-box" style="display: none;"><img src="img/wang-code.jpg"/*tpa=http://www.yunguos.com/js/img/wang-code.jpg*/ alt=""><p>扫一扫加好友咨询</p><i></i></div>'+ */
					        '<div class="tencent j-tencent j-box kaifa" style="display: none;">'+
					            '<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDEzMDgyOF8zNjkyOTZfODAwMTMwODI4XzJf" target="_blank"><i class="tencent-i">tencent</i><b class="tencent-b"><span class="tencent-span"><img class="tencent-qq" src="img/qq-tencent.png"/*tpa=http://www.yunguos.com/js/img/qq-tencent.png*/ alt="" style="width: 39px; height: 45px; left: 3px;"></span></b><p class="tencent-p">在线客服<br>点击交谈</p></a>'+
					        '</div>'+
					    '</div>'+
					'</div>';
	
	
	/*给每个页面加载头部和脚部（公用）*/
	$("body").prepend(headerStr).append(footerStr).append(rightFixd);
	//模拟顶部导航选中状态
	var dataNav = $("body").attr("data-nav") ;
	$("#topNav").find(">li>a[href^='"+dataNav+"']").parent().addClass("active");
	dataNav = null;
	/*顶部更多悬浮动画*/
	$("a#toggleA").mouseover(function(){
		$("ul#toggle_nav").fadeIn(300);
	});
	$("ul#toggle_nav").mouseleave(function(){
		$(this).fadeOut(300);
	});
	/*顶部出现2级导航动画*/
    $("ul#topNav>li:has('ul.secondNav')").hover(
		function(){
			var the_secondNav = $(this).find("ul.secondNav");
			if(!the_secondNav.is(":animated")){
				the_secondNav.stop(true,true).slideDown();	
			}
		},
		function(){
			var the_secondNav = $(this).find("ul.secondNav");
			the_secondNav.stop(true,true).slideUp();
		}
	);
	
	//右侧浮动代码
	// 效果
	$(".suspension").find(".j-icon").mouseover(
	    function(){
	        $(".suspension").find(".j-box").eq($(this).index()).show().siblings(".j-box").hide();
	    }
	);
	//判断ie浏览器
    if(navigator.appVersion.match(/11./i) == '11.' || navigator.appVersion.match(/10./i) == '10.') {
        $(".suspension").css("right","30px");
    }
	$(".suspension .j-back-top").hide();
	
	$(window).scroll(function(){
	    if($(window).scrollTop() > 100){
	        $(".suspension .j-back-top").fadeIn();
	    }else {
	        $(".suspension .j-back-top").fadeOut();
	    }
	});
	$(".j-tencent").hover(function(){
        $(".tencent-qq").stop(true,false).animate({width:"51",height:"59",left:"-3"});
    },function(){
        $(".tencent-qq").stop(true,false).animate({width:"39",height:"45",left:"3"});
    });
	// 效果
	$(".suspension").mouseleave(function(event){
	    event.preventDefault();
	    $(".suspension").find(".j-box").hide();
	});
	
	$(".j-back-top").click(function(){
	    $("html,body").animate({scrollTop:0},500);
	});
})