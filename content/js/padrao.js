 $(document).ready(function() {
     // Modal video
     $('.modal-video .fechar').on('click', function() {
         $('.incluir-video').css("opacity", "0");
         setTimeout(function() {
             $('.modal-video').css("left", "105%");
         }, 500);
         setTimeout(function() {
             $('.backdrop').css("left", "-110%");
         }, 500);
         $(".incluir-video").html("");
     });

     // Play Video
     $('.btn-play').on('click', function() {
         var videoid = $(this).attr('data-video');
         $('.backdrop').css("left", "0");
         setTimeout(function() {
             $('.modal-video').css("left", "5%");
         }, 500);
         setTimeout(function() {
             $('<iframe width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
                 .attr("src", "https://www.youtube.com/embed/" + videoid + "?autoplay=1")
                 .appendTo(".incluir-video");
             setTimeout(function() {
                 $('.incluir-video').css("opacity", "1");
             }, 500);

         }, 2000);
     });

     $('.nav-item a[href^="#"], .nav-footer li a[href^="#"]').on('click', function(e) {
         e.preventDefault();
         var id = $(this).attr('href'),
             targetOffset = $(id).offset().top;

         $('html, body').animate({
             scrollTop: targetOffset - 100
         }, 500);
     });

     $(document).on("scroll", function() {
         if ($(document).scrollTop() > 98) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
             $(".menu").addClass("small"); //TROCA P CLASSE MENOR
         } else {
             $(".menu").removeClass("small"); //VOLTA P MENU GRANDE ORIGINAL
         }
     });

     $(".navbar-nav li a").click(function() {
         $(".navbar-collapse").removeClass("show");
     });

     AOS.init({
         easing: 'ease-in-out-sine'
     });

     $('.box-form efeito-tremendo').on('focus', function() {
         $('.incluir-video').css("opacity", "0");
     });

 });