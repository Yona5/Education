// display menu for smaller screens 
function displayMenu(){
	var ul = document.getElementById("navUl");
	document.getElementById("threeLine").style.display = "none";
	document.getElementById("close").style.display = "block";
	ul.style.display = "block";
	ul.style.textAlign = "left";
	ul.style.transition = "3s"
	var lists = ul.getElementsByTagName("li");
	// displaying the lists block
	for (var i = 0; i < lists.length; i++) {
		lists[i].style.display = "block";
		lists[i].style.marginBottom = "50px";
		lists[i].style.fontSize = "20px";
	}
}
// hide menu 
function closeMenu(){
	var ul = document.getElementById("navUl");
	ul.style.display = "none";
	document.getElementById("threeLine").style.display = "block";
	document.getElementById("close").style.display = "none";
}
// resetting actions done by the above functions
window.addEventListener("resize", function(){
	if (document.documentElement.clientWidth >920) {
		var ul = document.getElementById("navUl");
		ul.style.display = "";
		ul.style.textAlign = "";
		document.getElementById("threeLine").style.display = "";
		document.getElementById("close").style.display = "";
		var lists = ul.getElementsByTagName("li");
		// resetting the list properties
		for (var i = 0; i < lists.length; i++) {
			lists[i].style.display = "";
			lists[i].style.marginBottom = "";
			lists[i].style.fontSize = "";
		}
	}
}, true);

