// JavaScript Document
	$(function(){
		
		//submenu
			$('.dropDown').hover(function(){
				if($(this).parent().hasClass('nav')) return false;
				$(this).find('.submenu').stop(false,true).slideDown(200);
			},function(){
				if($(this).parent().hasClass('nav')) return false;
				$(this).find('.submenu').stop(false,true).slideUp(200);
			});

		
		//mobile menu
		var $m_menu = $('ul.menu1').clone();
		var $top_m_menu = "" ;//$('.topLink').find('.rightBox').children('a').not('.exclude').clone();
				
		$m_menu.insertAfter('.mobile-menu .hideBox p.sp_menu').removeClass().addClass('nav').find('b').remove().end().append($top_m_menu).children('a').wrap('<li/>').end().find('li.dropDown').each(function(){
			$(this).children('a').removeClass().append('<i class="fa fa-angle-down" />').attr('href','');
		});
				
		$('.mobile-menu').find('a.main').click(function(){
			if(!$(this).parents('.mobile-menu').hasClass('active')){
				$(this).parents('.mobile-menu').addClass('active');
				$(this).addClass('show');
				$('.mobile-menu').find('.mask').fadeIn(100);
				$('.mobile-menu').find('.hideBox').addClass('show');
				$('body').css('overflow','hidden');
				$('.mobile-menu').find('.mask').click(function(){/*點空白處收起menu*/
					$('.mobile-menu').removeClass('active');
					$('.mobile-menu').find('.hideBox').fadeOut();
					$('.mobile-menu').find('.mask').fadeOut();
				});
			}else{
				$(this).parents('.mobile-menu').removeClass('active');
				$(this).removeClass('show');
				$('.mobile-menu').find('.mask').fadeOut();
				$('.mobile-menu').find('.hideBox').removeClass('show');
				$('body').css('overflow','auto');
			}//end if hasClass
						
			return false;
		});
		
		$('.mobile-menu').find('li.dropDown').children('a').click(function(){
			$(this).siblings().slideToggle();
			return false;
		});
		
	

        //mobile submenu
		$(document).ready(function(){
		$("#firstpane p.m_submenuHead").click(function(){
		$(this).addClass("current").next("div.m_submenuBody").slideToggle(300).siblings("div.m_submenuBody").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	$("#secondpane .m_submenuBody:eq(0)").show();
	$("#secondpane p.m_submenuHead").mouseover(function(){
		$(this).addClass("current").next("div.m_submenuBody").slideDown(500).siblings("div.m_submenuBody").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	
});
		
		
		//mobile classLink
		var $clone = $('ul.classLink,ul.subLink').clone().removeClass('classLink'),
			  $current_txt = $('ul.classLink,ul.subLink').find('.current').text();
		$('ul.classLink,ul.subLink').after('<div class="m_classLink"><a class="head"><span></span><i class="fa fa-angle-down"></i></a></div>');
		$('.m_classLink').append($clone).end().find('a.head span').text($current_txt);
		

		
		//mailLink
		$('.contactLink').click(function(){
			if(isMobile){
				var href = $(this).data('mail');
				window.location.href= 'mailto:'+href;
				return false;
			}
		});
		
		
		
	//首頁彈出視窗
	/*
	$('.outerWrap').after('<div class="popupMask"></div>');
    $('.openPopup').click(function () {
        var obj = $(this).attr('href');
        $(obj).addClass('show');
        $('.popupMask').addClass('show');
        $('body').css('overflow', 'hidden');
        return false;
    });
    $('.popupMask, .popupClose').click(function () {
        $('.popupBox, .popupMask').removeClass('show');
        $('body').css('overflow', 'auto');
    });
	*/



		//內頁側邊選單
		$('.m_classLink .head').click(function() {
			$(this).next().slideToggle();
		});
		$('.subLink li').click(function() {
			$(this).find('> a').toggleClass('current').next().slideToggle();
			$(this).siblings().find('> a').removeClass('current').next().slideUp();
		});
		
		
		//search
		$('.btnSearch').click(function() {
			$('.searchArea').fadeIn();
		});
		$('.searchArea').find('.btnClose').click(function() {
			$('.searchArea').fadeOut();
		});
		

});


//gotop
$(function(){
    $('.gotop').click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.gotop').fadeIn("3000");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });
});



//loading
function myload() {
   $(".loading").fadeOut(1000);
}
window.onload = myload;




//mobile language
var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu, theEvent ){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單
        SubMenu.style.minWidth = theMainMenu.clientWidth; // 讓子選單的最小寬度與主選單相同 (僅為了美觀)
        SubMenu.style.display = 'block';
        hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
    else{ // 隱藏子選單
        if( theEvent != 'MouseOver' || VisibleMenu != theSubMenu ){
            SubMenu.style.display = 'none';
            VisibleMenu = '';
        }
    }
}

// 隱藏子選單
function hideMenu(){
    if( VisibleMenu != '' ){
        document.getElementById( VisibleMenu ).style.display = 'none';
    }
    VisibleMenu = '';
}

