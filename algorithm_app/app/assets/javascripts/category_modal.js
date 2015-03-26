$('document').ready(function() {

	//console.log('got into modal function to grab data');

	$('#myModal').on('show.bs.modal', function (event) {
		//console.log('got into modal function and event triggered');
		  var button = $(event.relatedTarget); // Button that triggered the modal
		  var name = button.data('name'); // Extract info from data-* attributes
		  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		  var content = button.data('desc');
		  var video = button.data('video');
		  var modal = $(this);
		  //console.log(video);
		  modal.find('.modal-title').text(name);
		  modal.find('.modal-body p').text(content);
		  if (video)
		  	modal.find('#video').html('<iframe width="560" height="315" src="'+ video + '" frameborder="0" allowfullscreen></iframe>')
	 });

	//function stops video from playing once the modal window has been closed
	$('#myModal').on('hidden.bs.modal', function (e) {
  		//console.log('got into category modal hide function');
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
	})
});