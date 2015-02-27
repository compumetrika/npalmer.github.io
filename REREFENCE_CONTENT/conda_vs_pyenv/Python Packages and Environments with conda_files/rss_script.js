// Javascript Document

function hide_rss() {
	if (document.URL.indexOf("blog") >= 0) {
		$('#prss').hide();
	}
	else if (document.URL.indexOf("press") >= 0) {
		$('#brss').hide();
	}
	else {
		$('#prss').hide();
		$('#brss').hide();
	}
}

hide_rss();
