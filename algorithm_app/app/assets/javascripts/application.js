// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap/bootstrap-tooltip
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap/modal
//= require jquery.simple.timer
//= require_tree .

<script>
	$(function(){
	  $("a[rel='tooltip']").tooltip();

	  $(".modal-backdrop, #myModal .close, #myModal .btn").live("click", function() {
		console.log('got into javascript function');
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
		});

	  $(".modal-backdrop, #challengeModal .close, #challengeModal .btn").live("click", function() {
		console.log('got into javascript function');
        $("#challengeModal iframe").attr("src", $("#challengeModal iframe").attr("src"));
		});
	});


</script>

