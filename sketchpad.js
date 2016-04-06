// Javascript/JQuery for sketchpad
$(document).ready(function() {

    setPad(16);

	

	$('#newpad').click(function(){
		pixels = prompt("Please enter the number \
of pixels per side", "16");
		if(!($.isNumeric(pixels))) {
			alert("You need to enter a number!");
			return;
		}
		if (pixels <= 1) {
		alert("The number of pixels per row must be a \
positive integer greater than 1");
		return;
	    }
		
		removePad();
		setPad(pixels);
	});
});

function setPad(numPixels){
	var totalWidth = 960;
	var grossWidth = Math.floor(totalWidth / numPixels);
	var divWidth = grossWidth - 2;

	var $spc = $('.spcontainer');
	var rowdiv = "<div class='row'></div>";
	for (var j=0; j < numPixels; j++) {
		$spc.append(rowdiv);
	   };

	var pixdiv = '<div class="pixel"></div>';
	for (var k=0; k<numPixels; k++) {
	 	$('.row').append(pixdiv);
	 	var $p = $('.pixel');
	 	$p.css('width',divWidth);
	 	$p.css('height',divWidth);

	}

	$(".pixel").hover(function(){
		$(this).addClass("red");
	}, function(){});

};

function removePad() {
	$('.spcontainer').empty();
}
