
$(function() {
    /*头部微博显示与隐藏*/
    $(".offcn_header_wb").hover(function () {
        $(".top_wb_con").show();
        $(".top_wb_con").css('zIndex', 99);
    }, function () {
        $(".top_wb_con").hide();
    });
    $(".offcn_header_wx").hover(function () {
        $(".top_wx_con").show();
        $(".top_wx_con").css('zIndex', 99);
    }, function () {
        $(".top_wx_con").hide();
    })
    $('.headerMright').hover(function () {
        $('.headerMrHover').show();
    }, function () {
        $(".headerMrHover").hide();
    })

});