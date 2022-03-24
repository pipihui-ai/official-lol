(function () {
  window.addEventListener("load", function () {
    document.addEventListener("keyup",function(e){
      // console.log(e.keyCode);
      if(e.keyCode === 13){
        $(".comment-text").focus();
      }
    })
    // 1.点击发布按钮， 动态创建一个小li，放入文本框的内容和删除按钮， 并且添加到ul 中
    $(".btn").on("click", function () {
      if ($(".comment-text").val().length > 0) {
        $(".wu").css("display", "none");
        var li = $("<li></li>");
        li.html($(".comment-text").val() + "<a href='javascript:;'>删除</a>");
        $(".comment-cont").prepend(li);
        li.stop().slideDown();
        $(".comment-text").val("");
      } else{
        alert("内容不能为空!!");
      }
    })

    // 2.点击删除按钮,可以删除当前的微博留言
    // on 可以给动态创建元素添加事件 
    $(".comment-cont").on("click", "a", function () {
      $(this).parent().slideUp(function () {
        $(this).remove();
      })
    })

    // FANART 当鼠标经过时给每个小li添加 下横线
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
  })
})();

$('item1').css({"background-url":"./eqweq.jpg"})