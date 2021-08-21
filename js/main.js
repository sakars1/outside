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
    $(".hamburger-btn").on("click", function(){
    	$(this).toggleClass("close-btn");
    	$(".site-nav").toggleClass("mobile-menu-active");
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
