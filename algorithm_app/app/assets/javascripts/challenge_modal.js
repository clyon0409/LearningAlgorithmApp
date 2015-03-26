$('document').ready(function() {
	console.log('got into challenge modal function to grab data');
		$('#challengeModal').on('show.bs.modal', function (event) {
			console.log('got into challenge modal function and event triggered');
			  var button = $(event.relatedTarget); // Button that triggered the modal
			  var name = button.data('name'); // Extract info from data-* attributes
			  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
			  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
			  var content = button.data('desc');
			  var video = button.data('video');
			  var answer = button.data('answer');
			  var duration = Math.floor(parseInt(button.data('duration'))/1000/60);
			  var modal = $(this);
			  console.log(duration);
			  modal.find('.modal-title').text(name);
			  modal.find('.modal-body p').text(content);
			  modal.find('#video').html('<iframe width="560" height="315" src="'+ video + '" frameborder="0" allowfullscreen></iframe>')
			  modal.find('#timer').html('<h3 class="timer text-center" data-minutes-left='+ duration +'></h3>')
		   });
});