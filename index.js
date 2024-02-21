
  $('#banner').owlCarousel({
             loop:true,
            //  left:true,
             margin:30,
             autoplay:true,
             autoplayTimeout: 7000,
             smartSpeed: 800,
             nav:true, 
            //  navText: ["<img src='img/a1.png'>","<img src='img/a2.png'>"],
             dots:true,                
             responsive:{
                 0:{
                     items:1
                 },
                 600:{
                     items:1
                 },
                 1000:{
                     items:1
                 } 
             }
         });
