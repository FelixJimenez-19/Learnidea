let load_resize = () => {
    let $win = $(window);
    if ($win.scrollTop() > 700) {
        $('.menu').removeClass('menu1');
        $('.menu').removeClass('menu2');
        $('.menu').addClass('menu2');
    } else if ($win.scrollTop() > 0) {
        $('.menu').removeClass('menu1');
        $('.menu').removeClass('menu2');
        $('.menu').addClass('menu1');
        $('.btnToHeader').css('right', '10px');
    } else {
        $('.menu').removeClass('menu1');
        $('.menu').removeClass('menu2');
        $('.btnToHeader').css('right', '-50px');
    }
}
$(function () {
    $(window).scroll(function () {
        load_resize();   
    });
});

load_resize();