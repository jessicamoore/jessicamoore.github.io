
 $(document).ready(function(){
     $(".nav-item").hover(function(){
         $(this).css("color", "black");
         }, function(){
         $(this).css("color", "#666");
     });


    $(".nav-item").click(function(){
      $(".text-box").hide();
      var number = $(this).attr('id').slice(-1);

       $("#text" + number).show(500);
      });





     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
             $('img').css({'opacity':( 250-scroll )/250});

     });







     $("#header").hover(function(){
         $(this).css("color", "black");
         }, function(){
         $(this).css("color", "#666");
     });





  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $(".nav-item").addClass('spread');
    } else {
        $(".nav-item").removeClass('spread');

    }
  });


  $(window).scroll(function(){
    if ($(this).scrollTop() < 150) {
      $(".text-box").hide();
    }
  });




 });
