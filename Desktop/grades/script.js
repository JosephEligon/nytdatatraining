// document.getElementByID("btn1").onclick = function()
// {CalcGrade()};

// var el = document.getElementById('overlayBtn');
// if(el){
//   el.addEventListener('click', swapper, false);
// }

 var submit = document.getElementById("#btn1");
 if(submit!=null){
 	submit.addEventListener("click", CalcGrade);
}

// $(document).ready(function()
// 	var ngrade = document.getElementById("bx1").value;
// 	var lgrade = "hi";

// 	if(ngrade > 100 || ngrade < 0 || typeof(ngrade) != "number"){
// 		console.log("Invalid value, enter an integer between 0 and 100.");
// 		return lgrade = "Invalid value, enter an integer between 0 and 100.";
// 	}
// 	else if(ngrade <= 59){
// 		return lgrade = "F";
// 		console.log("F");
// 	}
// 	else if(ngrade<=69){
// 		return lgrade = "D";
// 		console.log("D");
// 	}
// 	else if(ngrade <=79){
// 		return lgrade = "C";
// 		console.log("C");
// 	}
// 	else if(ngrade <=89){
// 		return lgrade = "B";
// 		console.log("B");
// 	}
// 	else {
// 		return lgrade = "A";
// 		console.log("A");
// 	}
// });

//document.getElementById("#btn1").addEventListener("click",CalcGrade);

// function CalcGrade(){
// 	var ngrade = document.getElementById("bx1").value;
// 	var lgrade = "hi";

// 	if(ngrade > 100 || ngrade < 0 || typeof(ngrade) != "number"){
// 		console.log("Invalid value, enter an integer between 0 and 100.");
// 		return lgrade = "Invalid value, enter an integer between 0 and 100.";
// 	}
// 	else if(ngrade <= 59){
// 		return lgrade = "F";
// 		console.log("F");
// 	}
// 	else if(ngrade<=69){
// 		return lgrade = "D";
// 		console.log("D");
// 	}
// 	else if(ngrade <=79){
// 		return lgrade = "C";
// 		console.log("C");
// 	}
// 	else if(ngrade <=89){
// 		return lgrade = "B";
// 		console.log("B");
// 	}
// 	else {
// 		return lgrade = "A";
// 		console.log("A");
// 	}

// 	document.getElementById("result").innerHTML = lgrade;
//}
submit{

	var ngrade = document.getElementById("bx1").value;
	var lgrade = "hi";

	/*if(ngrade > 100 || ngrade < 0 || typeof(ngrade) != "number"){
		console.log("Invalid value, enter an integer between 0 and 100.");
		return lgrade = "Invalid value, enter an integer between 0 and 100.";
	}*/
	if(ngrade <= 59){
		return lgrade = "F";
		console.log("F");
	}
	else if(ngrade<=69){
		return lgrade = "D";
		console.log("D");
	}
	else if(ngrade <=79){
		return lgrade = "C";
		console.log("C");
	}
	else if(ngrade <=89){
		return lgrade = "B";
		console.log("B");
	}
	else {
		return lgrade = "A";
		console.log("A");
	}

	document.getElementById("result").innerHTML = lgrade;
};