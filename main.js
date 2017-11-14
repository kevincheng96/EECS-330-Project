// Javascript with jQuery
$(document).ready(function() {

	// When clicking a button that has the class 'save-history', 
	// save the page in session storage as the previous page
	$('.save-history').click(function(e) {
		sessionStorage.setItem('prevPage', window.location.href);
	});

	// When clicking cancel or hang up button, take user back to previous page
	$('#cancel, #hang-up').click(function(e) {
		if ('prevPage' in  sessionStorage) {
			e.preventDefault();
			var prevPage = sessionStorage.getItem('prevPage');
			sessionStorage.clear(); // clear session history
			window.location.href = prevPage; // go back to prevPage
		};
	});

});
