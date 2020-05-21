escalar_slick();
function escalar_slick(){
  if(window.innerWidth<=400){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=700){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=1050){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=1400){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=1750){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=2100){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }else if(window.innerWidth<=2450){
    $('.items-slick').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      nextArrow: $('.next'),
      prevArrow: $('.previus')
    });
  }
}