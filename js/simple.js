$(function(){
    var wW,rem;
    var whdef = 100 / 1920;
    wW = window.innerWidth;
    rem = wW * whdef;
    $('html').css('font-size', rem + "px");

    $(window).resize(function () {
        if (window.innerWidth <= 750) {
            wW = 750;
        }else{
            wW = window.innerWidth;
        }
        rem = wW * whdef;
        $('html').css('font-size', rem + "px");
    });

    $(".navRight a").bind("click touch",function(){
        if ($(this).attr("data-href") == "#about") {
            var time = 800;
        }else{
            var time = 500;
        }
        if($("html:animated").length==0){
            $('html').animate({scrollTop: ($($(this).attr('data-href')).offset().top)},time);
        }
    });

    $(".page2 .next").click(function(){
        var thatul = $(this).next().find("ul");
        var yleft = parseFloat(thatul.css("left"));
        if (thatul.find("li").eq(1).attr("data-index") == 1) {
            $(this).find("img").css("opacity","0.3");
        }else{
            $(this).next().next().find("img").css("opacity","1");
        }   
        if (yleft < -0.1) {
            if($(".page2 ul:animated").length==0){
                thatul.animate({left: yleft+(1.37*rem)+"px"}, "300");
                thatul.find("li[data-index=4]").attr("data-index","").prev().attr("data-index","4").prev().attr("data-index","3").prev().attr("data-index","2").prev().attr("data-index","1");
                $(".page2 .alert").hide();
            }
        }
    });

    $(".page2 .prev").click(function(){
        var thatul = $(this).prev().find("ul");
        var yleft = parseFloat(thatul.css("left"));
        if (thatul.find("li").eq(thatul.find("li").length-2).attr("data-index") == 4) {
            $(this).find("img").css("opacity","0.3");
        }else{
            $(this).prev().prev().find("img").css("opacity","1");
        }
        if (yleft > parseInt(-(1.37*rem*2))) {
            if($(".page2 ul:animated").length==0){
                thatul.animate({left: yleft-(1.37*rem)+"px"}, "300");
                thatul.find("li[data-index=4]").attr("data-index","3").next().attr("data-index","4").prev().prev().attr("data-index","2").prev().attr("data-index","1").prev().attr("data-index","");
                $(".page2 .alert").hide();
            }
        }
    });

    $(".listwrap li").on("click",function(){
        var index = parseInt($(this).attr("data-index"))-1;
        var iosurl = $(this).attr("data-ios");
        var androidurl = $(this).attr("data-android");
        var that = $(this).parents(".applist").find(".alert");
        
        if (iosurl == "" || iosurl == undefined) {
            window.open(androidurl); 
        }else{
            that.css("left",(1.37*rem*index)+(0.55*rem)+"px").show().find("a").eq(0).attr("href",iosurl).next("a").attr("href",androidurl);
        }
    });

    $(".alert").on("mouseleave",function () {
        $(this).hide();
    });

    $(window).scroll(function () {
        $(".alert").hide();
    })
});