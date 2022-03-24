// list中的 container 背景切换
(function () {

  $(".nav-pills").on("click", "li", function () {
    // console.log($(this).index());
    var index = $(this).index();
    $(".yingxiong .w").eq(index).stop().fadeIn().siblings().stop().fadeOut();
  })
})();


// index中的背景切换
(function () {
  window.onload = function () {
    $(".new-tab-content ul").eq(0).show().siblings().hide();
    // 页面滚动时改变元素
    $(window).scroll(function () {
      //当页面滚动时 com-top的背景切换
      $('.com-top img').eq(1).fadeOut().siblings().fadeIn();
      $('.com-top').removeClass('big');

      // 当页面滚动到一定位置返回顶部显示
      var fanartTop = $(".fanart").offset().top;
      if($(document).scrollTop() >= fanartTop){
        $('.back').fadeIn();
      } else{
        $(".back").fadeOut();
      }
    })
    // 返回顶部
    $(".back").on("click",function(){
      $("body,html").stop().animate({
        scrollTop:0
      });
    })

    $(".lg-right").on('mouseover', 'li', function () {
      var index = $(this).index();
      $(".new-tab-content ul").eq(index).show().siblings().hide();
    })

    $(".tab-content li").on("mouseover","img",function(){
      // console.log(11);
      $(this).css({
        "width":"110% ",
        "height": "110%"
      });
    })

    // 鼠标经过图片进行缩放
    $(".tab-content li").on("mouseout","img",function(){
      // console.log(11);
      $(this).css({
        "width":"100% ",
        "height": "100%"
      });
    })
  }
})();

// 解决new模块每一行新闻文字颜色 和 边框颜色 变化的问题
(function () {
  var borderColor = ["#69c5d2", "#c5ab86", "#97afc5", "#4ba36a", "#e9852d"];
  $.each(borderColor, function (index, ele) {
    // console.log(index +" : " + ele );
    
  })
})();




