
$(document).ready(function(){

      $("img").click(function(){
          $("#overlay").show(1000);
          $("#overlay").addClass("overlay-show");
       });



   	$("#overlay").click(function() {
   		$("#overlay").hide(1000);
   	});


   	$("#container").click(function() {
   		$("#overlay").hide(1000);
   	});

    $("#big").click(function() {
     $("#overlay").hide(1000);

   });


   $("#big").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
     });



    $("img").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slower");
      return false;
    });

    $("img").click(function() {
      var img_link = $(this).attr("src");
      $("#big").attr("src", img_link )
    });




     $(window).scroll(function(){
        if ($("#overlay").hasClass("overlay-show")) {
          $("#overlay").hide(1000)
        }
      });

      $(document).ready(function(){
          $(".nav-item").hover(function(){
              $(this).css("color", "black");
              }, function(){
              $(this).css("color", "#666");
          });
      });



      // $(window).scroll(function(){
      //    if ($(this).scrollTop( > 100)) {
      //      $(".fixed-nav-bar").show()
      //  });
      //});





});
