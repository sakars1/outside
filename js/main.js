$(document).ready(function(){
    $(".ben-carousel").slick({
    		infinite: true,
    		slidesToShow: 4,
    		slidesToScroll: 1,
    		arrows:false,
    		// prevArrow: '<div class="slick-prev"></div>',
      //   	nextArrow: '<div class="slick-next"></div>',
    		responsive: [
    			{
    			  breakpoint: 575,
    			  settings: {
    				slidesToShow: 1,
    				slidesToScroll: 1,
    				infinite: true,
    			  }
    			}
    		]	
    	})
	
	$(".btn-scroll-down").on('click', function(){
		$('html,body').animate({scrollTop: $("#scroll_down").offset().top},'slow');
	})

	if(!$("body").hasClass("home")){
		var current_url = location.pathname;
		$('.site-nav .nav-wrapper .nav-links #wp-megamenu-primary > .wpmm-nav-wrap ul.wp-megamenu > li ul.wp-megamenu-sub-menu li > a').each(function(){
			var $this = $(this);
			// if the current path is like this link, make it active
			if($this.attr('href').indexOf(current_url) !== -1){
				$this.addClass('active');
			}
		})
	}

	$( ".wp-megamenu-sub-menu img" ).wrap( "<div class='img-wrapper'></div>" );

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
      
        $(".hm-carousel").slick('setPosition');
    })

    if(window.innerWidth>991){
		// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 100;
	var navbarHeight = $('.site-nav').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);
	}else{
		$(window).scroll(function(){
			if($(window).scrollTop()>400){
				$(".site-nav").addClass("is-sticky")
			}else{
				$(".site-nav").removeClass("is-sticky")
			}
		})
	}

	function hasScrolled() {
        var st = $(this).scrollTop();
        
        if($(window).scrollTop()>400){
            $(".site-nav").addClass("is-sticky")
        }else{
            $(".site-nav").removeClass("is-sticky")
        }
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.site-nav').addClass('nav-up').removeClass('nav-down');
	    
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.site-nav').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}

	$(".site-nav").on('mouseenter',function(){
		
				$("body").addClass('mm-open');		
			})
		
	$(".site-nav").on('mouseleave',function(){

			$("body").removeClass('mm-open');		
		})

	var $milestone_carousel = $(".milestone-carousel").slick({
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0,
		slidesToShow: 3,
		infinite:false,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		asNavFor: '.timeline-carousel',
		responsive: [{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		}, {
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}]
	  });

	  var $timeline_carousel = $(".timeline-carousel").slick({
        centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		slidesToShow: 1,
		arrows:false,
		infinite: false,
		asNavFor: '.milestone-carousel',
		responsive: [{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		}, {
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}]
	  });

	  /**
 * FIX JUMPING ANIMATION
 * Set special animation class on first or last clone.
 */
$milestone_carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var 
        direction,
        slideCountZeroBased = slick.slideCount - 1;

    if (nextSlide == currentSlide) {
        direction = "same";

    } else if (Math.abs(nextSlide - currentSlide) == 1) {
        direction = (nextSlide - currentSlide > 0) ? "right" : "left";

    } else {
        direction = (nextSlide - currentSlide > 0) ? "left" : "right";
    }

    // Add a temp CSS class for the slide animation (.slick-current-clone-animate)
    if (direction == 'right') {
        $('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]', $milestone_carousel).addClass('slick-current-clone-animate');
    }

    if (direction == 'left') {
        $('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]', $milestone_carousel).addClass('slick-current-clone-animate');
    }
});

$milestone_carousel.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-current-clone-animate', $milestone_carousel).removeClass('slick-current-clone-animate');
    $('.slick-current-clone-animate', $milestone_carousel).removeClass('slick-current-clone-animate');
});

$(".hm-filter-wrapper select").on('change',function(){
	$(".hm-filter-wrapper .btn").click();
})


gsap.registerPlugin(ScrollTrigger);

//console.clear();

if($("body").hasClass("home")){
	ScrollTrigger.create({
		trigger: ".banner-caption h1",
		animation: gsap.fromTo(".banner-caption h1", {autoAlpha: 0}, {duration: 0.3, autoAlpha: 1}),
		toggleActions: 'play none none none',
		once: true,
	  });

	var words = $(".banner-caption h1").html().split(" ");
$(".banner-caption h1").empty();
$.each(words, function(i, v) {
	if(v.split('<br>').length > 1){
		$(".banner-caption h1").append($("<div style='display:inline-block'>").html(v.split('<br>')[0]));
		$(".banner-caption h1").append('<br>');	
		$(".banner-caption h1").append($("<div style='display:inline-block'>").html(v.split('<br>')[1]));
	}else{
		$(".banner-caption h1").append($("<div style='display:inline-block'>").html(v));
		$(".banner-caption h1").append("<div style='display:inline-block'>&nbsp;</div>");
	}
});
const banner_heading = gsap.utils.toArray('.banner-caption h1 div');

banner_heading.forEach((heading, i) => {
  const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, delay: (i-1)*0.1, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: heading,
	animation: anim,
	once: true,
  });
});
}

   if(window.innerWidth > 767){

	gsap.utils.toArray('.layer-content').forEach(section => {
		gsap.to(section, {
		  y: -100,
		  scrollTrigger: {
			trigger: section,
			scrub: true,
		  }
		});
	  });
	
	  gsap.to(".contact-section .map-wrapper", {
		y: -100,
		scrollTrigger: {
		  trigger: ".contact-section .map-wrapper",
		  scrub: true,
		}
	  });

	gsap.utils.toArray('.gfs-item').forEach(section => {
		gsap.to(section, {
		  y: -100,
		  scrollTrigger: {
			trigger: section,
			scrub: true,
		  }
		});
	  });

	gsap.to(".banner-overlay-caption .img-wrapper img", {
		y: -300,
		ease: "linear",
		  scrollTrigger: {
			trigger: ".banner-overlay-caption .img-wrapper img",
			scrub: true,
		  }
		});
   }

if(!$("body").hasClass("page-id-221")){
	const layer_heading = gsap.utils.toArray('.has-layer h2,.gfs-content-wrapper .section-heading,.contact-section h2,.mv-page-content h3,.hm-carousel-item .hm-item-title,.facts-section h5');

	layer_heading.forEach((heading, i) => {

		const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 10}, {duration: 0.4, autoAlpha: 1, y: 0});

		ScrollTrigger.create({
		  trigger: heading,
		  animation: anim,
		  start: "top 90%",
		});
	});

	const page_content = gsap.utils.toArray('.mv-page-content p');

	page_content.forEach((heading, i) => {
	const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

	ScrollTrigger.create({
		trigger: heading,
		animation: anim,
		start: "top 95%",
		once: true,
	});
	});
}	

const layer_content = gsap.utils.toArray('.has-layer p');

layer_content.forEach((heading, i) => {
  const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: heading,
	animation: anim,
	start: "top 95%",
	once: true,
  });
});

const gfs_p = gsap.utils.toArray('.gfs-content-wrapper p');

gfs_p.forEach((heading, i) => {
  const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: heading,
	animation: anim,
	start: "top 95%",
	once: true,
  });
});

const c_img_wrapper = gsap.utils.toArray('.hm-carousel-item .img-wrapper');

c_img_wrapper.forEach((img, i) => {
  const anim = gsap.fromTo(img, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: img,
	animation: anim,
	start: "top 90%",
	once: true,
  });
});

// const c_heading = gsap.utils.toArray('.hm-carousel-item h3');

// c_heading.forEach((heading, i) => {
//   const anim = gsap.fromTo(heading, {autoAlpha: 0, y: -100}, {duration: 0.8, delay:(i-1)*0.2, autoAlpha: 1, y: 0});

//   ScrollTrigger.create({
// 	trigger: heading,
// 	animation: anim,
// 	start: "top 50%",
// 	end: "bottom -50px",
// 	once: true,
//   });
// });

const p_img_wrapper = gsap.utils.toArray('.page .col-md-5 .img-wrapper');

p_img_wrapper.forEach((img, i) => {
  const anim = gsap.fromTo(img, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: img,
	animation: anim,
	start: "top 90%",
	once: true,
  });
});
const p_img_wrapper2 = gsap.utils.toArray('.page .col-md-6 .img-wrapper');

p_img_wrapper2.forEach((img, i) => {
  const anim = gsap.fromTo(img, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: img,
	animation: anim,
	start: "top 90%",
	once: true,
  });
});

ScrollTrigger.create({
	trigger: '.boc-caption',
	animation: gsap.fromTo(".boc-caption", {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0}),
	start: "top 90%",
	once: true,
  });

})
