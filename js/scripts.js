$(function() {
	// do stuff when DOM is ready
	
	$("#go").click( function() {
		$("#shelf").toggleClass("floor_activated");
	});
	
	$(".facelayer").click( function() {
  		$(".facelayer").not(this).removeClass("face_activated");
		$(this).toggleClass("face_activated");
	});
	
});		
