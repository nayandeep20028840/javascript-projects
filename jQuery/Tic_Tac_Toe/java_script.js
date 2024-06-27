var turn = 1;

$("button").click(function() {
	if(turn==1) {
		$("#screen").text("PLAYER 2 TURN FOLLOWS");

	// Check_sign_font from font-awesome
	$(this).addClass("fa fa-check");
		turn = 2;		
	}
	else {
		$("#screen").text("PLAYER 1 TURN FOLLOWS");
	
		// Cross_sign_font_from font-awesome
		$(this).addClass("fa fa-times");
		turn = 1;
	}
});

