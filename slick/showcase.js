$(document).ready(function(){
          $('.showCase').slick({
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 4,
              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: true,
                          centerMode: true,
                          centerPadding: '0px',
                          slidesToShow: 3
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