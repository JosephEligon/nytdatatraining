var $;

$(document).ready(function(){
	$("#btn1").click(function(){
		var ngrade = document.getElementById("inpt1").value;
		// if(ngrade > 100 || ngrade < 0 || typeof(ngrade) != "number"){
		// 	//console.log("Invalid value, enter an integer between 0 and 100.");
		// 	lgrade = "Invalid value, enter an integer between 0 and 100.";
		// }
		if(ngrade <= 59 && ngrade >= 0){
			lgrade = "F";
			//console.log("F");
		}
		else if(ngrade <= 69 && ngrade > 0){
			lgrade = "D";
			//console.log("D");
		}
		else if(ngrade <= 79 && ngrade > 0){
			lgrade = "C";
			//console.log("C");
		}
		else if(ngrade <= 89 && ngrade > 0){
			lgrade = "B";
			//console.log("B");
		}
		else if (ngrade <= 100 && ngrade > 0){
			lgrade = "A";
			//console.log("A");
		}
		else{
			lgrade = "Out of range, enter a number between 0 and 100."
		}
	document.getElementById("result").innerHTML = lgrade;
	});
});

// function CalcGrade(){
// 	var ngrade = document.getElementById("bx1").value;
// 	var lgrade = "hi";

// 	// if(ngrade > 100 || ngrade < 0 || typeof(ngrade) != "number"){
// 	// 	console.log("Invalid value, enter an integer between 0 and 100.");
// 	// 	return lgrade = "Invalid value, enter an integer between 0 and 100.";
// 	// }
// 	if(ngrade <= 59){
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
// }