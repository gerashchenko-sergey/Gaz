


jQuery(document).ready(function () {



/*slider*/
 jQuery('.slick-slider').slick({
		  dots: true,
		  arrows: false,
		  infinite: true,
		  autoplay:true,
		  autoplaySpeed:300,
		  speed: 4000,
		  slidesToShow: 1,
		  adaptiveHeight: true
});



/*Menu */
(function($){
  $(function() {
    $('.menu-icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu-state-open');   
    });

     $('.menu-icon').on('click', function() {
      $(this).closest('.main')
        .toggleClass('state-open');   
    });

    
    $('.menu-links-item').on('click', function() {
      $(this).closest('.menu')
        .removeClass('menu-state-open');
    });

  });
})(jQuery);

/*tabs*/
(function($) {
$(function() {
 
  $('.tabs-capt').on('click', ':not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs-wrap').find('.tabs-cont').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
})(jQuery);

});