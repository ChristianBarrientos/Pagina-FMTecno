function displayMenu(){
	var display;
	var card_menu = document.getElementById("card_menu");
	display = card_menu.style.display;

	if(display == "none"){
		card_menu.style.display = "block";
	}
	else{
		card_menu.style.display = "none";
	}

}