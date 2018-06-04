$( function() {
	var state = true;
	$( "#button" ).on( "click", function() {
		if ( state ) {
			$( "#effect" ).animate({
				backgroundColor: "#1e74ff",
				color: "white",
			}, 2000);
			$("#img").animate({
				opacity: 1
			},500);
			$("#img").animate({
				height: "220px",
				width: "400px"
			},1000);
			
			$("#block").animate({
				left: "+=70%"
			}, 1000);
		} 
		else {
			$( "#effect" ).animate({
				backgroundColor: "#ffffff",
				color: "#ffffff",
			}, 1000 );
			$("#img").animate({

				height: "110px"
			},500);
			$("#img").animate({
				width: "200px",
				opacity: 0
			},500);
			$("#block").animate({
				left: "-=70%"
			}, 1000);
		}
		state = !state;
	});
});