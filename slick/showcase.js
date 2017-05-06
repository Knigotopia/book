$(document).ready(function(){
          $('.showCase').slick({
              autoplay: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 5,
              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: true,
                          centerMode: true,
                          centerPadding: '0px',
                          slidesToShow: 4,
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '0px',
                          slidesToShow: 1
                      }
                  }
              ]
          });
      });