
$('document').ready(function() {
	console.log("Got into JS file for challenges timer.");
  //if ($('body.challenges').length) {
    console.log("Page generated by the projects controller.");

    $('.timer').startTimer({
    onComplete: function(element){
    	console.log("Timer completed.");
      $('html, body').addClass('bodyTimeoutBackground');
    }
  }).click(function(){ location.reload() });
  //}
});