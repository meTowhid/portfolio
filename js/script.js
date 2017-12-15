$(window).on("load", function() {
    "use strict";



    /*=================== Sticky Header ===================*/
    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        var hstick = $("header");
        if (scroll > 20){
            hstick.addClass("sticky animated fadeInDown");
        } else{
            hstick.removeClass("sticky animated fadeInUp");
        }

    });

/*=================== Responsive Menu ===================*/
    $(".menu-button").on("click",function(){
        $(".responsive-menu").addClass("slidein");
        return false;
    });  
    $(".close-menu").on("click",function(){
        $(".responsive-menu").removeClass("slidein");
        return false;
    });


    /*=================== Custom Tabs Functionality ===================*/
    $(".tab-detail").fadeOut();
    $(".tab-detail.active").fadeIn();

    $(".custom-tabs li a").on("click", function() {
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().addClass("active");
        $(".tab-detail").slideUp('slow').removeClass("active");
        var tab_name = $(this).data("name");
        $(".custom-content .tab-detail").each(function() {
            if ($(this).data("id") == tab_name) {
                $(this).slideDown('slow').addClass("active");
            }
        });
        return false;
    });



    /*=================== Full Height ===================*/
    function fullHeight(){
        var full_height = $(window).height();
        $(".full-height").css({"height":full_height});
        $(".bg-slide").css({"height":full_height});
    }
    fullHeight();
    $(window).resize(function(){fullHeight()});


    $(".quick-info,.bio-services").closest('.col').addClass('unset');



    /*=================== Sidemenu Functions ===================*/
    $('body').removeClass('menu-opened');
    $(".menu-btn.open, .fullmenu-btn").on('click',function(){
        $('body').toggleClass('menu-opened');
        return false;
    });
    $("html, .menu-btn.close, .sidemenu ul li a").on('click',function(){
        $('body').removeClass('menu-opened');
    });
    $('.menu-btn.open, .sideheader, .fullmenu-btn').on('click',function(e){
        e.stopPropagation();
    })




});

