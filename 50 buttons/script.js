$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});
	$('#button-6').click(function() {
		$(this).animate({
			opacity: 0.4,
		}, 1000 );
	});
	$('#button-7').click(function() {
		$(this).animate({
			paddingRight: '0.5in',
		}, 1000 );
	});
	$('#button-8').click(function() {
		$(this).animate({
			 height: "toggle",
		}, 1000 );
	// how to stay
	});
		$('#button-10').click(function() {
		$(this).animate({
			opacity: 0.4,
		}, 1000 );
	});

	$('#button-22').click(function() {
        $(this).animate({
            marginLeft: '250px',
        });
	});

	 $("#button-12").click(function(){
        $(this).hide();
    });

    $("#button-13").click(function(){
        $(this).fadeOut(1000);
    });
     $("#button-14").click(function(){
        $(this).animate({
        	width: '250px',
        	height:'250px',
        });
	});

    $("#button-14").click(function(){
        $("#button-13").fadeIn(1000);
    });
    $("#button-23").click(function(){
        $("#green").fadeOut(1000);
    });


});

function myFunction(){
	document.getElementById('button-4').style.color = "pink";
}
