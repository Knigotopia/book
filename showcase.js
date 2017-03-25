$(document).ready(function(){
          $('.showCase').slick({
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 4,
              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '10px',
                          slidesToShow: 3
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          arrows: false,
                          centerMode: true,
                          centerPadding: '10px',
                          slidesToShow: 1
                      }
                  }
              ]
          });
      });