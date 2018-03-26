// $(document).ready(function(){
//   $( "img" ).click(function() {
//     $("#rect").show("slow");
//   });
   $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 5) {
            $('#head').stop().animate({height: "0px"},1000);
            $('#title').stop().hide(1000);
        }
        else {
             $('#head').stop().animate({height: "1000px"},1000); 
             $('#title').show(1000);
        }
     });

$(document).ready(function(){
    $("#img1").click(function(){
        $("#side").animate({
            height: 'toggle'
        }, "slow");
    });
});

// $(document).ready(function(){
//     $("#img1").mouseover(function(){
//         $(this).animate({
//           height:'50px',
//           width: '50px',
//           marginTop:'-100px'
//         }, "slow");
//     });
// });

$(document).ready(function(){
    $("#title").scroll(function(){
        $(this).animate({
          height:'50px',
          width: '50px',
          marginTop:'-100px'
        }, "slow");
    });
});

$(document).ready(function() {
  $(".a").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a1").mouseover(function() {
    var p = $(this).css("background-color", "#ff6f69");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a2").mouseover(function() {
    var p = $(this).css("background-color", "#e2605a");
    p.hide(1500).show(1500);
      p.css("border-radius", "50%");
  });
});

$(document).ready(function() {
  $(".a3").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
      p.css("border-radius", "50%");
  });
});

$(document).ready(function() {
  $(".a4").mouseover(function() {
    var p = $(this).css("background-color", "#e2605a");
    p.hide(1500).show(1500);
    p.css("border-radius", "50%");
  });
});

$(document).ready(function() {
  $(".a5").mouseover(function() {
    var p = $(this).css("background-color", "#ff6f69");
    p.hide(1500).show(1500);
    p.css("border-radius", "50%");
  });
});

$(document).ready(function() {
  $(".a6").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a7").mouseover(function() {
    var p = $(this).css("background-color", "#ff6f69");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a8").mouseover(function() {
    var p = $(this).css("background-color", "#f8918d");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a9").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a10").mouseover(function() {
    var p = $(this).css("background-color", "#f8918d");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a11").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a12").mouseover(function() {
    var p = $(this).css("background-color", "#f8918d");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a13").mouseover(function() {
    var p = $(this).css("background-color", "#ff6f69");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a14").mouseover(function() {
    var p = $(this).css("background-color", "#ffc7c5");
    p.hide(1500).show(1500);
  });
});

$(document).ready(function() {
  $(".a15").mouseover(function() {
    var p = $(this).css("background-color", "#e2605a");
    p.hide(1500).show(1500);
  });
});


$("img").mouseover(function() {
    $("#rect").animate({ backgroundColor: "olive" }, "slow");
});