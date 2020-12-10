function main() { (function() {
        'use strict';
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target: $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    },
                    900);
                    return false;
                }
            }
        });
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 550;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        var rightFixd='<a href="javascript:;" class="j-icon">';
            rightFixd+='<img src="image/iphone-icon.png"/*tpa=http://www.yunguos.com/js/image/iphone-icon.png*/>';
            rightFixd+='</a>';
            rightFixd+='<a href="javascript:;" class="j-icon">';
            rightFixd+='<img src="image/er-icon.png"/*tpa=http://www.yunguos.com/js/image/er-icon.png*/>';
            rightFixd+='</a>';
            rightFixd+='<a  href="javascript:;" class="online-service j-icon">';
            rightFixd+='<span>在线客服</span>';
            rightFixd+='</a>';
            rightFixd+='<a href="javascript:;" class="back-top j-back-top">';
            rightFixd+='<img src="image/top-icon.png"/*tpa=http://www.yunguos.com/js/image/top-icon.png*/ alt="">';
            rightFixd+='</a>';
            rightFixd+='<div class="tel j-box">';
            rightFixd+='<ul class="connect-list">';
            rightFixd+='<li>售前咨询：</li>';
            rightFixd+='<li class="color20">400-029-2635</li>';
            rightFixd+='<li>售后服务：</li>';
            rightFixd+='<li class="color20">029-87888753</li>';
            rightFixd+='<li>投诉建议：</li>';
            rightFixd+='<li>17791285105</li>';
            rightFixd+='</ul>';
            rightFixd+='<i></i>';
            rightFixd+='</div>';
            rightFixd+='<div class="code j-box">';
            rightFixd+='<div class="code-inner text-center">';
            rightFixd+='<img src="image/kefu.png"/*tpa=http://www.yunguos.com/js/image/kefu.png*/ alt="">';
            rightFixd+='<p>扫码添加客服</p>';
            rightFixd+='</div>';
            rightFixd+='<i></i>';
            rightFixd+='</div>';
            rightFixd+='<div class="tenCent j-box">';
            rightFixd+='<a href="http://p.qiao.baidu.com/cps/chat?siteId=16080447&userId=31671107&siteToken=1d1bb4c06e88c06fa2fcd9877ce8a029" target="_blank">';
            rightFixd+='<div class="tencent-b">';
            rightFixd+='<img class="tencent-qq" src="image/qq-icon.png"/*tpa=http://www.yunguos.com/js/image/qq-icon.png*/>';
            rightFixd+='</div>';
            rightFixd+='<p class="tencent-p">在线客服<br>点击交谈</p>';
            rightFixd+='</a>';
            rightFixd+='<i></i>';
            rightFixd+='</div>';
            $("#sidebar-right").html(rightFixd);

            // 侧边导航栏
            $(".suspension").find(".j-icon").mouseover(
                function(){
                    $(".suspension").find(".j-box").eq($(this).index()).show().siblings(".j-box").hide();
                }
            );
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
            $(".suspension").mouseleave(function(event){
                event.preventDefault();
                $(".suspension").find(".j-box").hide();
            });

            $(".j-back-top").click(function(){
                $("html,body").animate({scrollTop:0},500);
            });

            $("#store_type span").on( "click", function( e ) {
                var type=$(this).data("type");
                $("#type").val(type);
                $(this).addClass('active_store').siblings().removeClass("active_store");
            });

            
            // 顶部导航
            $(".navbar").find(".nav_li").mouseover(function(){
                $(this).addClass("active_cur").siblings().removeClass("active_cur");
                if($(this).attr('id')){
                    var nav_index = $(this).attr('id').split('_')[1];
                    $(".menu_"+nav_index).show().siblings(".menu_tab").hide();
                }else{
                    $(".navbar").find(".menu_tab").hide();
                }
            });
            $(".navbar").mouseleave(function(event){
                event.preventDefault();
                $(".navbar").find(".menu_tab").hide();
                $(".navbar").find(".nav_li").removeClass("active_cur");
            });

    } ());
}
main();

function CheckPost (){
    // 用户名
    if (addForm.user.value == ""){
        $("input[name='name']").parent().addClass("warnStyle");
        $("input[name='name']").next('.warnDesc').css("display",'block')
        addForm.user.focus();
        return false;
    }else{
        $("input[name='name']").parent().removeClass("warnStyle");
        $("input[name='name']").next('.warnDesc').css("display",'none');
    }
    // 手机号
    if (addForm.tel.value == ""){
        $("input[name='phone']").parent().addClass("warnStyle");
        $("input[name='phone']").next('.warnDesc').css("display",'block')
        addForm.tel.focus();
        return false;
    }else{
        if(!(/^1[3-9]\d{9}$/.test($("#tel").val()))){
            $("#tel").next('.warnDesc').html('该手机号码格式有误,请重新填写')
            $("#tel").parent().addClass("warnStyle");
            $("#tel").next('.warnDesc').css("display",'block')
            $("#tel").focus();
            return false;
        }else{
            $("#tel").parent().removeClass("warnStyle");
            $("#tel").next('.warnDesc').css("display",'none');
        }
    }
    
    if (addForm.company.value == ""){
        $("input[name='company']").parent().addClass("warnStyle");
        $("input[name='company']").next('.warnDesc').css("display",'block')
        addForm.company.focus();
        return false;
    }else{
        $("input[name='company']").parent().removeClass("warnStyle");
        $("input[name='company']").next('.warnDesc').css("display",'none');
    }
    return true;
}