// $(function() {

//     var $rota = $('#play'),
//         degree = 0,
//         clicked = false,
//         timer;

//     $rota.on('click', function() { clicked = true; return false; } );

//     function rotate() { 
//         if ( clicked )   
//             $rota.css({ transform: 'rotate(' + degree + 'deg)'});
//             // timeout increase degrees:
//             timer = setTimeout(function() {
//                ++degree;
//                rotate(); // loop it
//             },5);
//         }

//         rotate();    // run it!
// });
// $(document).ready(function(){
// 	$("play").on("click", function() {
// 	  $(this).addClass( "spin" );
// 	});
// });

// var myAudio = document.getElementById("#goodday");
// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     myAudio.pause()
//   } else {
//     myAudio.play();
//   }
// };
// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };




function myFunction() {
	var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

	$(document).ready(function(){
		$( "a" ).click(function() {
		  $("#play").addClass(".spin");
		});
		 $('a').click(function () {
            $('#play').toggleClass("spin");
        });



		$("#free").click(function(){
        $(this).append("   Free");
    });

		$("a", "b", "c", "d","e","f","g","h","i","j", "k", "l", "m","n","o","p","q", "r", "s", 
		 "t","u","v","w","x", "y", "z", "a1","b1","cc","d1","e1","f1","g1","h1","i1","j1","k1","l1","m1","n1","o1","p1").hide();

		//$("more-lyrics").hide();

		$(".click-word").click(function(){
			$(this).next("p").show();
			$(this).remove();
		});

		$('.click-word').hover(function(){
		    // $(this).text("You make me feel like all those kids that").css('cursor', 'pointer');
		    $(this).addClass("black")
		}, function() {
		    $(this).removeClass("black");
		});

	});
