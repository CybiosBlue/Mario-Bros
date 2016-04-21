$(function(){

$("body").bind("keydown", function(event){
		switch(event.which){
			case 39: // right
			/*alert($("#character_mario").css("left"));*/
				$("#general_song")[0].play();
				$("#song")[0].pause();
				$("#character_mario").css("transform", "scaleX(+1)");
				
				if($("#character_mario").css("left").slice(0, -2) >= 100)
				{
					$("#character_mario").animate({
	        		left: "+=20" 
	        		}, 300, "linear")
	        		$("#background_decoration").css(
	        		{backgroundPositionX: "-=20px"})
	        		if ($("#character_mario").css("left") == "100px")
					{

						$("#character_mario").stop(true);
						$("#background_decoration").stop(true);
					}
	        	}
	        	$("#character_mario").animate({
	        	left: "+=20" 
	        	}, 300, "linear")
	        	if ($("#character_mario").css("left") == "100px")
				{

					$("#character_mario").stop(true);
					$("#background_decoration").stop(true);
				}
	        	event.preventDefault();
        	break;

        	case 38: // up
        		$("#son")[0].play();

	        	$("#character_mario").animate({
	        	top: "-=100" 
	        	}, 300)
	        	$("#character_mario").animate({top: "+=100"});
        	break;

        	case 37: // left
        		$("#song")[0].play();
        		$("#general_song")[0].pause();
        		$("#character_mario").css("transform", "scaleX(-1)");
        		event.preventDefault();
        		if($("#character_mario").css("left").slice(0, -2) >= 100)
        		{	
        			$("#character_mario").animate({
	        		left: "-=20" 
	        		}, 300, "linear") 
	        		$("#background_decoration").css(
	        		{backgroundPositionX: "+=20px"})
	    		}   
	    		$("#character_mario").animate({
	        	left: "-=20" 
	        	}, 300, "linear") 
        	break;

        case 40: // down
        $("#character_mario").animate({top: "+=88"});
        break;

        default: return;
		}
		event.preventDefault();
	});
	
})
