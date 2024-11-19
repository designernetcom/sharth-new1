$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})


$(function () {
  if ($(".owl-4").length > 0) {
    $(".owl-4").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 1,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 1,
        },
      },
    });
  }
});

$(function () {
  if ($(".owl-5").length > 0) {
    $(".owl-5").owlCarousel({
      center: false,
      items: 2,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 8,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 8,
        },
      },
    });
  }
});


$(function () {
  if ($(".owl-6").length > 0) {
    $(".owl-6").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 4,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 4,
        },
      },
    });
  }
});