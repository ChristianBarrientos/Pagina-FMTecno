alertSize();
function alertSize() { 
  var myWidth = 0, myHeight = 0; 
  if( typeof( window.innerWidth ) == 'number' ) { 
    //No-IE 
    myWidth = window.innerWidth; 
    myHeight = window.innerHeight; 
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ 
    myWidth = document.documentElement.clientWidth; 
    myHeight = document.documentElement.clientHeight; 
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible 
    myWidth = document.body.clientWidth; 
    myHeight = document.body.clientHeight; 
  } 

  	var display;
	var card_menu = document.getElementById("card_menu");
	display = card_menu.style.display;

	if (myWidth < 767) {
		card_menu.style.display = "none";
	}
	else{
		card_menu.style.display = "block";
	}
    
} 


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

function displaySection(nav){
	var section = new Array(6);
	
	section[0] = "inicio";
	section[1] = "contacto";
	section[2] = "cursos";
	section[3] = "logros";
	section[4] = "historia";
	section[5] = "eventos";
	var search;
	var show;
	for (var i = 0; i < 6; i++) {
		
		search = document.getElementById(section[i]);
		show = search.style.display;
		
		if (show == "block") {
			search.style.display = "none";
			if (nav == "next") {
				i = i + 1;
				
				if (i > 5) {
					i = 0;
					
				}
			}
			if (nav == "prev") {
				i--;
				
				if (i < 0) {
					i = 5;
				}
			}

			search = document.getElementById(section[i]);

			search.style.display = "block";
			
			
			break;
		}
	}
	
	if (section[i] == "inicio") {
		bkgr_body = "#233D58";
		bkgr_menu = "#233D58";
		
	}
	else{
		bkgr_body = "#f1f1f1";
		bkgr_menu = "#29abe2";
	}

	search.style.background = bkgr_body;
	var menu = document.getElementsByTagName("header")[0];
	menu.style.background = bkgr_menu;
	
}

function navSection(nav){
	var section = new Array(6);
	section[0] = "inicio";
	section[1] = "contacto";
	section[2] = "cursos";
	section[3] = "logros";
	section[4] = "historia";
	section[5] = "eventos";
	var search;
	var show;
	var bkgr_body;
	var bkgr_menu;

	for (var i = 0; i < 6; i++) {
		search = document.getElementById(section[i]);
		show = search.style.display = "none";
		if (section[i] == nav){
			search.style.display = "block";
			if (section[i] == "inicio") {
				bkgr_body = "#233D58";
				bkgr_menu = "#233D58";
				
			}
			else{
				bkgr_body = "#f1f1f1";
				bkgr_menu = "#29abe2";
			}

			search.style.background = bkgr_body;
			var menu = document.getElementsByTagName("header")[0];
			menu.style.background = bkgr_menu;

		}	
	}
}