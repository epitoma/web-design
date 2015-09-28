var startUp = function() {
	alert("body finished loading");
}

var hideMe = function() {
	// JQuery starts with dollar sign
	// calls hide function on aPara ids
	$("#aPara").hide();
}

var showMe = function() {
	//calls show function on all aPara ids
	$("#aPara").show();
	// $("p").fadeIn(2000);  this will apply to all the "p" tags
	// can also reference classes   .whatever
}

//  .fadeOut(2000);
//  .fadeIn(3000);