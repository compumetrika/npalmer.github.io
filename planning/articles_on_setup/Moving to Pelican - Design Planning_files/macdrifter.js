$(document).ready(function(){

	// Hamburger Menu

	$('#hamburger').click(function(){
		$('#navlist').toggle();
	});

	// List.js

	var options = {
	    valueNames: [ 'title', 'date' ],
	    page: 5000
	};

	var archiveList = new List('archive', options);

});