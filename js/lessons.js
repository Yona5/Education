// display the aside tag
function expand(){
	var aside = document.getElementsByTagName("aside");
	var section = document.getElementsByTagName("section");
	var collapseBtn = document.getElementById("collapseBtn");
	var expandBtn = document.getElementById("expandBtn");
	aside[0].style.display = "block";
	aside[0].style.float = "none";
	section[0].style.display = "none";
	expandBtn.style.display = "none";
	collapseBtn.style.display = "block";
}
// hide the aside tag
function collapse(){
	var collapseBtn = document.getElementById("collapseBtn");
	var expandBtn = document.getElementById("expandBtn");
	var aside = document.getElementsByTagName("aside");
	var section = document.getElementsByTagName("section");
	aside[0].style.display = "none";
	aside[0].style.float = "left";
	section[0].style.display = "block";
	expandBtn.style.display = "block";
	collapseBtn.style.display = "none";
}
// change the content when another title is clicked
function replace(ev){
	var content1 = document.getElementById("content1");
	var content2 = document.getElementById("content2");
	switch(ev.id){
		// if it is the first title
		case "link1":
			content1.style.display = "block";
			content2.style.display = "none";
			break;
		// if it is the second title
		case "link2":
			content1.style.display = "none";
			content2.style.display = "block";
	}
}
// resetting the above functions
window.addEventListener("resize", function(){
	if (document.documentElement.clientWidth >937) {
		var collapseBtn = document.getElementById("collapseBtn");
		var expandBtn = document.getElementById("expandBtn");
		var aside = document.getElementsByTagName("aside");
		var section = document.getElementsByTagName("section");
		aside[0].style.display = "";
		aside[0].style.float = "";
		section[0].style.display = "";
		expandBtn.style.display = "";
		collapseBtn.style.display = "";
	}
}, true);

