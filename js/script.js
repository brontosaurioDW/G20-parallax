  $(document).ready(function(){

  	/* starts parallax */

    $('.parallax').parallax();


    /* starts tooltipster */

	$('.tooltip').tooltipster({

		animation: 'fade',
		delay: 200,
		theme: ['tooltipster-shadow', 'tooltipster-shadow-customized'],
		trigger: 'click',
		contentCloning: true
	    
	});

	
	/* activates tooltipster second button in desktop */

	$('#colonbtn').click(function(){
	    $("#colonttbtn").click();
	})

	$('#obeliscobtn').click(function(){
	    $("#obeliscottbtn").click();
	})

	$('#casarosadabtn').click(function(){
	    $("#casarosadattbtn").click();
	})

	$('#cckbtn').click(function(){
	    $("#cckttbtn").click();
	})

	$('#costasalguerobtn').click(function(){
	    $("#costasalguerottbtn").click();
	})

	$('#palaciosanmartinbtn').click(function(){
	    $("#palaciosanmartinttbtn").click();
	})

	$('#casadegobiernobtn').click(function(){
	    $("#casadegobiernottbtn").click();
	})

	$('#cecbtn').click(function(){
	    $("#cecttbtn").click();
	})

	$('#caminitobtn').click(function(){
	    $("#caminitottbtn").click();
	})

	$('#villaolimpicabtn').click(function(){
	    $("#villaolimpicattbtn").click();
	})

/*

	$('#colonbtnmob').click(function(){
	    $("#colonttbtnmob").click();
	})

	$('#obeliscobtnmob').click(function(){
	    $("#obeliscottbtnmob").click();
	})

	$('#casarosadabtnmob').click(function(){
	    $("#casarosadattbtnmob").click();
	})

	$('#cckbtnmob').click(function(){
	    $("#cckttbtnmob").click();
	})

	$('#costasalguerobtnmob').click(function(){
	    $("#costasalguerottbtnmob").click();
	})

	$('#palaciosanmartinbtnmob').click(function(){
	    $("#palaciosanmartinttbtnmob").click();
	})

	$('#casadegobiernobtnmob').click(function(){
	    $("#casadegobiernottbtnmob").click();
	})

	$('#cecbtnmob').click(function(){
	    $("#cecttbtnmob").click();
	})

	$('#caminitobtnmob').click(function(){
	    $("#caminitottbtnmob").click();
	})

	$('#villaolimpicabtnmob').click(function(){
	    $("#villaolimpicattbtnmob").click();
	})

*/
  });




