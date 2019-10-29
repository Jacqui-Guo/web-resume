$(function () {
   
    $(document).ready(function () {
        var stars = 800;
        var $stars = $('.stars');
        var r = 800;
        for (var i = 0; i < stars; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            var $star = $('<div/>').addClass('star');
            $stars.append($star);
        }
        window.CP.exitedLoop(1);
        $('.star').each(function () {
            var cur = $(this);
            var s = 0.2 + Math.random() * 1;
            var curR = r + Math.random() * 300;
            cur.css({
                transformOrigin: '0 0 ' + curR + 'px',
                transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + Math.random() * 360 + 'deg) rotateX(' + Math.random() * -50 + 'deg) scale(' + s + ',' + s + ')'
            });
        });

        // 手风琴
        $('[class*="-accordion"]').not(':first').parents('.accordion-DIV').hide();
				$('.btn-group > button').on('click', function(event) {
					event.preventDefault();
					var _index_ = $(this).index();
					$('[class*="-accordion"]').eq(_index_).parents('.accordion-DIV').show().siblings().hide();
				});
    });

    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed:1500,
        navigationColor:'#ffffff',
        /* index:当前屏的索引，索引从1开始*/
       afterLoad:function(anchorLink,index){
           /*将其它屏的current样式标记清除*/
           $(".section").removeClass("current");
           setTimeout(function(){
               /*当滚动到某一个屏之后，添加样式标记*/
               $(".section").eq(index-1).addClass("current");},500);
       }
    });


    // 手风琴
    $('.1-accordion').accordion({
        "imageObj": horiObj.imageObj,
        animateWidth: 500
    });

    $('.2-accordion').accordion({
        "imageObj": varObj.imageObj,
        "arrangement": "verticality",
        "defaultHeight": 60
    });

    $('.3-accordion').accordion({
        "imageObj": horiObj.imageObj,
        "response": false,
        "defaultWidth": 75,
        "animateWidth": 500
    });
    $('.4-accordion').accordion({
        "imageObj": horiObj.imageObj,
        "animateTime": "1.5s"
    });

    $('.5-accordion').accordion({
        "imageObj": horiObj.imageObj,
        "styleColor": {
            "background": "yellow",
            "font": "#fff",
            "textShadow": "0px 0px 1px red"
        }
    });
});