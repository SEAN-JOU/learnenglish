(function($) {
    'use strict';
	
	//Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('.menu-wrapper').toggleClass('active-nav');
    })

    //Toggle Nav for mobile menu
    $('.open_bar').click(function(){
        $('nav').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('nav').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });
       // counterUp
    $('.counter-title h2').counterUp({
        delay: 10,
        time: 1000
    });

	   $('.service_list').owlCarousel({
            autoplay: true,
            loop:true,
            dots:true,
            center:false,
            nav:false,
            navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1000:{
                    items:3
                },
                 1500:{
                    items:5
                },
                 1920:{
                    items:5
                }
            }
        })

       
           $('.testi_list').owlCarousel({
            autoplay: true,
            loop:true,
            dots:true,
            center:false,
            nav:false,
            navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:1
                },
                1000:{
                    items:1
                },
                 1500:{
                    items:1
                },
                 1920:{
                    items:1
                }
            }
        })




 $('.blog_list').owlCarousel({
            autoplay: true,
            loop:true,
            dots:true,
            center:false,
            nav:false,
            dotsEach:true,
            navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1000:{
                    items:3
                },
                 1500:{
                    items:3
                },
                 1920:{
                    items:3
                }
            }
        })


 $('.test_list').owlCarousel({
            autoplay: false,
            loop:true,
            dots:false,
            center:false,
            nav:false,
            dotsEach:true,
            navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:1
                },
                1000:{
                    items:1
                },
                 1500:{
                    items:1
                },
                 1920:{
                    items:1
                }
            }
        })
            
    //======< scrollcue js >======
    $(function(){
        scrollCue.init({
        duration : 1000,
        interval : -0.7,
        percentage : 0.90,
        smartSpeed: 600 
        
        })
    });

    
   // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll <100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });




      // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true
    });
    

$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

    
       // to top Jquery
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        });
})(jQuery);