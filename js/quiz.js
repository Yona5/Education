
// grading the second quiz
function correctAns(){
	var forms =  document.getElementsByClassName("form2");
	var section2 =  document.getElementById("section2");
	var score = 0;
	var inputs = section2.getElementsByTagName("input");
	var answered = 0;
	// checking if all questions are answered
	for(var i = 0; i < inputs.length; i++){
		if (inputs[i].checked) {
			answered++;
		}
	}
	// ask to complete the quiz
	if (answered < 6) {
		alert("Please answer all questions to get your result.");
	}
	// grade if the quiz is complete
	else{
		// all forms in the second quiz
		for (var i = 0; i < forms.length; i++) {
			var formInputs = forms[i].getElementsByTagName("input");
			// form inputs in each form 
			for (var j = 0; j < formInputs.length; j++) {
				// give one mark if the ans is correct
				if (formInputs[j].getAttribute("value") == "correct") {
					if ( formInputs[j].checked) {
						score++;
					}
					// display an icon
					var correctAns = forms[i].getElementsByClassName("correctAns");
					correctAns[0].style.display = "inline";
				}
			}
		}
		document.getElementById("result2").innerHTML = "You've got " + score + " out of 6.";
	}
}
// changing the displayed quiz
function changeSection(btn){
	var section1 = document.getElementById("section1");
	var section2 = document.getElementById("section2");
	var section3 = document.getElementById("section3");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var btn5 = document.getElementById("btn5");
	// display quiz one
	if(btn == "btn3"){
		console.log("btn1");
		section1.style.display = "block";
		section2.style.display = "none";
		section3.style.display = "none";
		btn3.style.backgroundColor = "#5382A1";
		btn3.style.border = "none";
		btn3.style.color = "white";
		btn4.style.backgroundColor = "";
		btn4.style.border = "";
		btn4.style.color = "";
		btn5.style.backgroundColor = "";
		btn5.style.border = "";
		btn5.style.color = "";

	}
	// display quiz two
	else if (btn == "btn4") {
		section1.style.display = "none";
		section2.style.display = "block";
		section3.style.display = "none";
		btn3.style.backgroundColor = "";
		btn3.style.border = "";
		btn3.style.color = "";
		btn4.style.backgroundColor = "#5382A1";
		btn4.style.border = "none";
		btn4.style.color = "white";
		btn5.style.backgroundColor = "";
		btn5.style.border = "";
		btn5.style.color = "";
	}
	// display quiz three
	else if (btn == "btn5") {
		section1.style.display = "none";
		section2.style.display = "none";
		section3.style.display = "block";
		btn3.style.backgroundColor = "";
		btn3.style.border = "";
		btn3.style.color = "";
		btn4.style.backgroundColor = "";
		btn4.style.border = "";
		btn4.style.color = "";
		btn5.style.backgroundColor = "#5382A1";
		btn5.style.border = "none";
		btn5.style.color = "white";
	}
}
// displaying correct ans and explanation
function quickAns(eventFire){
	var parent = eventFire.parentNode;
	var idName = parent.getAttribute("id");
	var section1 = document.getElementById("section1");
	var correct = section1.getElementsByTagName("i");
	switch(idName){
		// for question number 1
		case "form_1":
			document.getElementById("explanation_1").style.display = "block";
			correct[0].style.display = "inline";
			break;
		// for question number 2
		case "form_2":
			document.getElementById("explanation_2").style.display = "block";
			correct[1].style.display = "inline";
			break;
		// for question number 3
		case "form_3":
			document.getElementById("explanation_3").style.display = "block";
			correct[2].style.display = "inline";
			break;
		// for question number 4
		case "form_4":
			document.getElementById("explanation_4").style.display = "block";
			correct[3].style.display = "inline";
			break;
		// for question number 5
		case "form_5":
			document.getElementById("explanation_5").style.display = "block";
			correct[4].style.display = "inline";
			break;
		// for question number 6
		case "form_6":
			document.getElementById("explanation_6").style.display = "block";
			correct[5].style.display = "inline";
			break;
	}
}
// grading quiz one
function scoreCal(){
	var section1 =  document.getElementById("section1");
	var score = 0;
	var answered = 0;
	var inputs = section1.getElementsByTagName("input");
	// check if all questions are answered
	for(var i = 0; i < inputs.length; i++){
		if (inputs[i].checked) {
			answered++;
		}
	}
	// prompt the user to complete quiz
	if (answered < 6) {
		alert("Please answer all questions to get your result.");
	}
	// grade quiz
	else{
		for (var j = 0; j < inputs.length; j++) {
			var attrValue =  inputs[j].getAttribute("value");
			if (attrValue == "correct" && inputs[j].checked) {
				score++;
			}
		}
		document.getElementById("result1").innerHTML = "You've got " + score + " out of 6.";
	}
}
// check if the user clicked on one of the answers,quiz 3, question 3
function leftSetter(eventt){
	if (eventt.id == "ans1" || eventt.id == "ans2" || eventt.id == "ans3" ||eventt.id == "ans4") {
		sessionStorage.left = "true";
	}
}
// check if the user clicked on one of the answers,quiz 3, question 4
function rightSetter(eventt){
	if (eventt.id == "ans5" || eventt.id == "ans6" || eventt.id == "ans7" ||eventt.id == "ans8") {
		sessionStorage.right = "true";
	}
}
// add one if the user gets the right ans
function getAns(eventt){
	if (eventt.id == "ans3") {
		var score = 1;
		sessionStorage.score = score;
	}
	if (eventt.id == "ans5") {
		var scoree = 1;
		sessionStorage.scoree = scoree;
	}
}
// grade quiz 3
function markCal(eventt){
	var score = 0;
	var result = document.getElementById("result3");
	var ansHolder = document.getElementById("dragNdrop1");
	var selectId = document.getElementById("selectId");
	var numList = document.getElementById("numList");
	// prompt the user the finish the quiz
	if (sessionStorage.left == undefined || sessionStorage.right == undefined) {
		alert("Please answer all questions to get your result.");
	}
	else{
		sessionStorage.removeItem("left");
		sessionStorage.removeItem("right");
		if (document.getElementById("dragNdrop1").hasChildNodes() && 
			document.getElementById("selectId").selectedIndex != 0 &&
			document.getElementById("numList").value !="")
		{
			// drag and drop ans
			if (ansHolder.hasChildNodes()) {
				ansId = ansHolder.childNodes[0].id;
				if (ansId == "p1") {
					score++;
				}
			}
			// drop down ans
			if (selectId.value == "correct") {
				score++;
			}
			// slider 1 ans
			if (sessionStorage.score) {
				score = score + Number(sessionStorage.score);
				sessionStorage.removeItem("score");
			}
			// slider 2 ans
			if (sessionStorage.scoree) {
				score = score + Number(sessionStorage.scoree);
				sessionStorage.clear();
			}
			// number picker ans
			if (numList.value == 3){
				score++;
			}
			result.innerHTML = "You have got " + score + " out of 5.";
		}
		else{
			alert("Please answer all questions to get your result.");
		}
		// show correct answer
		var showA = document.getElementsByClassName("showAns");
		for(var i = 0 ; i < showA.length; i++){
			showA[i].style.display = "block";
		}
	}
}
// slider
function slider(eventt){
	var num = 0;
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	switch(eventt.id){
		// if user clicks on the left arrow
		case "leftArrow":
			div1.style.display = "block";
			div2.style.display = "none";			
			break;
		// if user clicks on the right arrow
		case "rightArrow":
			div1.style.display = "none";
			div2.style.display = "block";		
			break;
	}
}
// drag and drop
// setting the draggabele object
function dragStarter(obj){
	obj.dataTransfer.setData("text", obj.target.id);
}
// change default
function dragEnder(obj){
	obj.preventDefault();
}
// drop the draggable
function onDrop(obj){
	obj.preventDefault();
	var data = obj.dataTransfer.getData("text");
	obj.target.appendChild(document.getElementById(data));
}
