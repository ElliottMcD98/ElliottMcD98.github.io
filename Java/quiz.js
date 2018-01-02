window.onload = function()
{
	init();
}
function init()
{
	
}

var A = 0;
var B = 0;
var C = 0;
var D = 0;

var question2 = "Which of these bands do you prefer?"


var Q2A = "The Strokes"
var Q2B = "Foo Fighters"
var Q2C = "Metallica"
var Q2D = "Green Day"

var question3 = "How long have you been listening to the Red Hot Chili Peppers?"

var Q3A = "less than 6 months"
var Q3B = "Less than 2 years"
var Q3C = "Less than 5 years"
var Q3D = "5 years or more"

var question4 = "Pick your favourite from these instruments"

var question5 = "Pick your favourite from these songs"

var Q5A = "Under The Bridge"
var Q5B = "Dark Necesseties"
var Q5C = "Suck My Kiss"
var Q5D = "Can't Stop"


var count = 1




function answer(answer)
{
	console.log("working");

	if (answer == 1)
	{
		A = A + 1;
	}

	if (answer == 2)
	{
		B = B + 1;
	}

	if (answer == 3)
	{
		C = C + 1;
	}

	if (answer == 4)
	{
		D = D + 1;
	}


	count = count + 1;

	nextquestion(count);



}

function nextquestion(count)
{
	if (count == 2)
	{
	document.getElementById("nextquestion").innerHTML = (question2);
	document.getElementById("Qtext1").innerHTML = Q2A;
	document.getElementById("Qtext2").innerHTML = Q2B;
	document.getElementById("Qtext3").innerHTML = Q2C;
	document.getElementById("Qtext4").innerHTML = Q2D;


	}

	if (count == 3)
	{
	document.getElementById("nextquestion").innerHTML = (question3);
	document.getElementById("Qtext1").innerHTML = Q3A;
	document.getElementById("Qtext2").innerHTML = Q3B;
	document.getElementById("Qtext3").innerHTML = Q3C;
	document.getElementById("Qtext4").innerHTML = Q3D;


	}

	if (count == 4)
	{
	document.getElementById("nextquestion").innerHTML = (question4);
	document.getElementById("Qpic1").src = "Assets/guitar2.png";
	document.getElementById("Qpic2").src = "Assets/guitar4.png";
	document.getElementById("Qpic3").src = "Assets/drums.png";
	document.getElementById("Qpic4").src = "Assets/mic.png";

	document.getElementById("Qtext1").innerHTML = "";
	document.getElementById("Qtext2").innerHTML = "";
	document.getElementById("Qtext3").innerHTML = "";
	document.getElementById("Qtext4").innerHTML = "";


	}

		if (count == 5)
	{

	document.getElementById("nextquestion").innerHTML = (question5);
	document.getElementById("Qpic1").src = "Assets/AnswerBox.png";
	document.getElementById("Qpic2").src = "Assets/AnswerBox.png";
	document.getElementById("Qpic3").src = "Assets/AnswerBox.png";
	document.getElementById("Qpic4").src = "Assets/AnswerBox.png";

	document.getElementById("Qtext1").innerHTML = Q5A;
	document.getElementById("Qtext2").innerHTML = Q5B;
	document.getElementById("Qtext3").innerHTML = Q5C;
	document.getElementById("Qtext4").innerHTML = Q5D;


	}





	


	count = count + 1;
	console.log(count);


	if (count == 7)
	{
		
		$(".answers").remove();
		if (A > B && A > C && A > D)
		{
			document.getElementById("nextquestion").innerHTML = ("You're like Anthony");
			var pic = document.createElement("img");
			pic.src = "Assets/AnthonyKiedis.jpg";
			document.getElementById("resultpic").appendChild(pic);
			
		}

		else if (B > A && B > C && B > D)
		{
			console.log("You're like Flea");
			document.getElementById("nextquestion").innerHTML = ("You're like Flea");
			var pic = document.createElement("img");
			pic.src = "Assets/Flea.jpg";
			document.getElementById("resultpic").appendChild(pic);
		}

		else if (C > A && C > B && C > D)
		{
			document.getElementById("nextquestion").innerHTML = ("You're like Chad");
			var pic = document.createElement("img");
			pic.src = "Assets/Chad.jpg";
			document.getElementById("resultpic").appendChild(pic);
			
		}

		else if (D > A && D > C && D > B)
		{
			document.getElementById("nextquestion").innerHTML = ("You're like Josh");
			var pic = document.createElement("img");
			pic.src = "Assets/josh.jpg";
			document.getElementById("resultpic").appendChild(pic);
		}

		else
		{
			document.getElementById("nextquestion").innerHTML = ("You're like John");
			var pic = document.createElement("img");
			pic.src = "Assets/john.jpg";
			document.getElementById("resultpic").appendChild(pic);
		}



	}

}
	





