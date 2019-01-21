// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on ul to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add New Todo
$("input[type=text]").on("keypress",function(event){
	//if press "enter" key
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});


// Show/Hide "Add New Todo"
$("h1 span").on("click",function(){
	$("input[type=text]").fadeToggle();
});