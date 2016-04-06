// Javascript/JQuery for sketchpad
$(document).ready(function() {

    setPad(16);

	

	$('#newpad').click(function(){
		$(this).attr('disabled','true');
		var pixels = prompt("Please enter the number \
of pixels per side", "16");
		if(!($.isNumeric(pixels))) {
			alert("You need to enter a number!");
			$(this).removeAttr('disabled');
			return;
		}
		if (pixels <= 1) {
		alert("The number of pixels per row must be a \
positive integer greater than 1");
		$(this).removeAttr('disabled');
		return;
	    }
		
		removePad();
		setPad(pixels);
		$(this).removeAttr('disabled');
	});

	$('#clearpad').click(function(){
		$('.pixel').removeClass('red');
	});
});

function setPad(numPixels){
	var totalWidth = 960;
	var divWidth = Math.floor(totalWidth / numPixels);
	var actualWidth = divWidth*numPixels;

	var $spc = $('.spcontainer');
	var rowdiv = "<div class='row'></div>";
	for (var j=0; j < numPixels; j++) {
		$spc.append(rowdiv);
	   };

	var pixdiv = '<div class="pixel"></div>';
	for (var k=0; k<numPixels; k++) {
	 	$('.row').append(pixdiv);	
	}
	var $p = $('.pixel');
	$p.css('width',divWidth);
	$p.css('height',divWidth);
	$('.spcontainer').css('width', actualWidth);
	$('.spcontainer').css('height', actualWidth);

	$(".pixel").hover(function(){
		$(this).addClass("red");
	}, function(){});

};

function removePad() {
	$('.spcontainer').empty();
}
