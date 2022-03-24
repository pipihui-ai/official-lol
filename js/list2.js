// .nav-top .on{
//   border-bottom: 3px solid #2bbbdc!important;
//   /* color: #2bbbdc!important; */
// }

// .nav-top li a:hover{
//   border-bottom: 3px solid #7d7d7d;
// }


(function () {
  // FANART 当鼠标经过时给每个小li添加 下横线
  window.onload = function () {
    $(".nav-top li").on("mouseover", "a", function () {
      $(this).css({ "border-bottom": "3px solid #7d7d7d" });
      // console.log(222 );
    })
    $(".nav-top li").on("mouseout", "a", function () {
      $(this).css({ "border": "0" });
      // console.log(222 );
    })

    // 点击当前 a,则改变a中小图标的颜色   点击切换下横线
    $(".nav-top").on("click", "li", function () {
      var index = $(this).index();
      // console.log(index);
      $(this).children("a").addClass("on").parents("li").siblings("li").children("a").removeClass("on");
      if (index === 1) {
        $(".item1").css({ "background-position": "-93px -126px" });
        $(".item2").css({ "background-position": "-141px -157px" });
      } else if (index === 0) {
        $(".item1").css({ "background-position": "-160px -87px" });
        $(".item2").css({ "background-position": "-189px 0" });
        $(".item3").css({ "background-position": " -160px -58px" });
        $(".item4").css({ "background-position": "-29px -214px" });
      } else if (index === 2) {
        $(".item1").css({ "background-position": "-93px -126px" });
        $(".item2").css({ "background-position": "-189px 0" });
        $(".item3").css({ "background-position": " -160px -116px" });
        $(".item4").css({ "background-position": "-29px -214px" });
      } else if (index === 3) {
        $(".item1").css({ "background-position": "-93px -126px" });
        $(".item2").css({ "background-position": "-189px 0" });
        $(".item3").css({ "background-position": " -160px -58px" });
        $(".item4").css({ "background-position": " 0 -214px" });
      }
    })

    // 当鼠标点击 type-box中的 a, 就改变当前a的样式(添加 onfocus类名)
    $(".type-box").on("click", "a", function () {
      $(this).addClass("onfocus").siblings().removeClass("onfocus");
    })

    // 点击 li 切换当前 小li 的样式 (干掉所有人,留下我自己) 排他思想
    $(".menu-box ul").on("click", "li", function () {
      var index = $(this).index();
      if (index === 0) {
        $(this).find("i").css({ "background-position": "-84px -157px" });
        $(this).find("a").addClass("on");
        $(this).siblings("li").find("i").css({ "background-position": "-189px -112px" });
        $(this).siblings("li").find("a").removeClass("on");
      } else {
        $(this).find("i").css({ "background-position": "-112px -157px" });
        $(this).find("a").addClass("on");
        $(this).siblings("li").find("i").css({ "background-position": "-28px -157px" });
        $(this).siblings("li").find("a").removeClass("on");
      }
    })

    $(window).scroll(function () {
      // 当页面滚动到一定位置返回顶部显示
      if ($(document).scrollTop() >= 1000) {
        $('.back').fadeIn();
      } else {
        $(".back").fadeOut();
      }
    })
    // 返回顶部
    $(".back").on("click", function () {
      $("body,html").stop().animate({
        scrollTop: 0
      });
    })
  }
})();




