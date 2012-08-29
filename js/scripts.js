$(function() {
	// do stuff when DOM is ready
		
	// THE OBJECT
	
	var traqball_1 = new Traqball({   
	    stage:              "stage",	// id of block element. String, default value: <body>
	    axis:               [1,0,0],	// X,Y,Z values of initial rotation vector. Array, default value: [1,0,0]
	    angle:              0,			// Initial rotation angle in radian. Float, default value: 0.
	    perspective:        1000,		// Perspective. Integer, default value 700.
	    impulse:            true		// Defines if object receives an impulse after relesing mouse/touchend. Default value: true.
	});

	// THE SHELF
	
	$("#go").click( function() {
		$("#shelf").toggleClass("floor_activated");
	});
	
	$(".facelayer").click( function() {
  		$(".facelayer").not(this).removeClass("face_activated");
		$(this).toggleClass("face_activated");
	});
	
});		



