$(document).ready(function(){
	

	let totalWidth = $('.top__dash>.info').outerWidth() + 24;
	$('.top__dash>.elem').each(function(index,elem){
		totalWidth = +totalWidth + +$(elem).outerWidth() + 24;
	});
	totalWidth = totalWidth + 63;

	let visiblePart = totalWidth - $(window).width();
	$(window).on('resize' ,function(){
		totalWidth = $('.top__dash>.info').outerWidth() + 24;
		$('.top__dash>.elem').each(function(index,elem){
			totalWidth = +totalWidth + +$(elem).outerWidth() + 24;
		});
		totalWidth = totalWidth + 63;
		visiblePart = totalWidth - $(window).width();
		$('.container').css('height' , visiblePart + $(window).height());
	});
	$('.container').css('height' , visiblePart + $(window).height());
	$(window).on("scroll" ,function(){
		$('.top__dash').css('transform' ,"translateX(-"+ $(window).scrollTop() +"px)")
	});

	if ($(window).width() < 1280) {
		$('.top__dash>.elem.back').css("height" , $('.top__dash>.elem:nth-child(4)').outerHeight());
		
	}
	$(window).on("resize" ,function(){
		if ($(window).width() < 1280) {
			$('.top__dash>.elem.back').css("height" , $('.top__dash>.elem:nth-child(4)').outerHeight());
		} else {
			$('.top__dash>.elem.back').css("height" , "auto");
		}
	});
  const topDash = document.querySelector('.dash__grid .top__dash');

  topDash.addEventListener('wheel', (event) => {
    event.preventDefault();
    topDash.scrollLeft += event.deltaY;
  });
});
