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
    			  breakpoint: 785,
    			  settings: {
    				slidesToShow: 1,
    				slidesToScroll: 1,
    			  }
    			}
    		]	
    	})
    $(".news-carousel").slick({
    		infinite: true,
    		arrows:false,
    		// prevArrow: '<div class="slick-prev"></div>',
      //   	nextArrow: '<div class="slick-next"></div>',
    		responsive: [
	    		{
	    		  breakpoint: 9999,
	    		  settings: "unslick"
	    		},
    			{
    			  breakpoint: 785,
    			  settings: {
    				slidesToShow: 1,
    				slidesToScroll: 1,
    			  }
    			}
    		]	
    	})
        $(".gallery-carousel").slick({
        		infinite: true,
        		arrows:false,
        		// prevArrow: '<div class="slick-prev"></div>',
          //   	nextArrow: '<div class="slick-next"></div>',
        		responsive: [
    	    		{
    	    		  breakpoint: 9999,
    	    		  settings: "unslick"
    	    		},
        			{
        			  breakpoint: 785,
        			  settings: {
        				slidesToShow: 1,
        				slidesToScroll: 1,
        			  }
        			}
        		]	
        	})
    var founder_carousel = $(".founder-carousel").slick({
    		infinite: true,
    		cssEase: 'linear',
    		speed:1000,
    		autoplaySpeed: 5000,
    		fade: true,
    		slidesToShow: 1,
    		autoplay: true,
    		pauseOnHover: false,
    		arrows:false,
    		responsive: [
    			{
    			  breakpoint: 785,
    			  settings: "unslick"
    			}
    		]	
    	})
        founder_carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var currentSlideIndex = nextSlide;
        $(".founder-carousel-wrapper > .founder-details p").removeClass("active");
        $(".founder-carousel-wrapper > .founder-details p").eq(parseInt(currentSlideIndex)).addClass("active");
    });
    $(".founder-carousel-wrapper > .founder-details p").click(function(e){
            slideIndex = $(this).index();
            founder_carousel.slick('slickGoTo',parseInt(slideIndex));
        });
    $(".hamburger-btn").on("click", function(){
    	$(this).toggleClass("close-btn");
    	$(".site-nav").toggleClass("mobile-menu-active");
    	$("body").toggleClass("no-scrollY");
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

	$(".site-nav .has-megamenu").on('mouseenter',function(){
		
				$("body").addClass('mm-open');		
			})
		
	$(".site-nav .has-megamenu").on('mouseleave',function(){

			$("body").removeClass('mm-open');		
		})

gsap.registerPlugin(ScrollTrigger);

//console.clear();

	ScrollTrigger.create({
		trigger: ".hero-section h1",
		animation: gsap.fromTo(".hero-section h1", {autoAlpha: 0}, {duration: 0.3, autoAlpha: 1}),
		toggleActions: 'play none none none',
		once: true,
	  });

	var words = $(".hero-section h1 a").html().split(" ");
$(".hero-section h1 a").empty();
$.each(words, function(i, v) {
	if(v.split('<br>').length > 1){
		$(".hero-section h1 a").append($("<div style='display:inline-block'>").html(v.split('<br>')[0]));
		$(".hero-section h1 a").append('<br>');	
		$(".hero-section h1 a").append($("<div style='display:inline-block'>").html(v.split('<br>')[1]));
	}else{
		$(".hero-section h1 a").append($("<div style='display:inline-block'>").html(v));
		$(".hero-section h1 a").append("<div style='display:inline-block'>&nbsp;</div>");
	}
});
const banner_heading = gsap.utils.toArray('.hero-section h1 a div');

banner_heading.forEach((heading, i) => {
  const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, delay: (i-1)*0.1, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: heading,
	animation: anim,
	once: true,
  });
});	

// const layer_content = gsap.utils.toArray('.has-layer p');

// layer_content.forEach((heading, i) => {
//   const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

//   ScrollTrigger.create({
// 	trigger: heading,
// 	animation: anim,
// 	start: "top 95%",
// 	once: true,
//   });
// });

// const gfs_p = gsap.utils.toArray('.gfs-content-wrapper p');

// gfs_p.forEach((heading, i) => {
//   const anim = gsap.fromTo(heading, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

//   ScrollTrigger.create({
// 	trigger: heading,
// 	animation: anim,
// 	start: "top 95%",
// 	once: true,
//   });
// });

const fadein_item = gsap.utils.toArray('.news-item .img-wrapper,.news-item h3,.news-item .news-meta,.ben-item .img-wrapper,.ben-item p,.gallery-item .img-wrapper,.gallery-item p');

fadein_item.forEach((f_item, i) => {
  const anim = gsap.fromTo(f_item, {autoAlpha: 0, y: 100}, {duration: 0.5, autoAlpha: 1, y: 0});

  ScrollTrigger.create({
	trigger: f_item,
	animation: anim,
	start: "top 90%",
	once: true,
  });
});

})
