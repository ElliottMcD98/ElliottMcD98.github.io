window.onload = function()
{
	init();
}
function init()
{
	

	
	
	if (window.location.href.indexOf("savedguitars") > -1)
	{
		listnames();
	}

	if (localStorage.getItem("bodycolour") === null && localStorage.getItem("platecolour") === null && localStorage.getItem("headcolour") === null )
	{

		document.getElementById("bodyimage").src = "Assets/regularbody.png";
		document.getElementById("plateimage").src ="Assets/regularplate.png";
		document.getElementById("headimage").src ="Assets/regularhead.png";
		var guitars = [];
		var bodies = [];
		var plates = [];
		var heads = [];
		localStorage.setItem("guitars", JSON.stringify(guitars));
		localStorage.setItem("bodies", JSON.stringify(bodies));
		localStorage.setItem("plates", JSON.stringify(plates));
		localStorage.setItem("heads", JSON.stringify(heads));
		localStorage.setItem("count", 0);

		
	}
	
	else
	{
		
		document.getElementById("bodyimage").src = localStorage.getItem("bodycolour");
		document.getElementById("plateimage").src = localStorage.getItem("platecolour");
		document.getElementById("headimage").src = localStorage.getItem("headcolour");
		
	}






	
}


function bodcolour(colour)
{
	console.log(colour);
	document.getElementById("bodyimage").src = "Assets/"+colour;
	localStorage.setItem("bodycolour", "Assets/"+colour);
}

function platecolour(colour)
{
	console.log(colour);
	document.getElementById("plateimage").src = "Assets/"+colour;
	localStorage.setItem("platecolour", "Assets/"+colour);
}

function headcolour(colour)
{
	console.log(colour);
	document.getElementById("headimage").src = "Assets/"+colour;
	localStorage.setItem("headcolour", "Assets/"+colour);
}


function guitarname()
{
	var count = localStorage.getItem("count");
	var currentName = prompt("Name your creation.");
	var localguitars = JSON.parse(localStorage.getItem("guitars"));
	localguitars[count] = currentName;
	localStorage.setItem("guitars", JSON.stringify(localguitars));

	var localbodies = JSON.parse(localStorage.getItem("bodies"));
	localbodies[count] = localStorage.getItem("bodycolour");
	localStorage.setItem("bodies", JSON.stringify(localbodies));

	var localplates = JSON.parse(localStorage.getItem("plates"));
	localplates[count] = localStorage.getItem("platecolour");
	localStorage.setItem("plates", JSON.stringify(localplates));

	var localheads = JSON.parse(localStorage.getItem("heads"));
	localheads[count] = localStorage.getItem("headcolour");
	localStorage.setItem("heads", JSON.stringify(localheads));

	count++;
	localStorage.setItem("count", count);



	
	


	
}

function listnames()
{
	var localguitars = JSON.parse(localStorage.getItem("guitars"));
	var list = document.getElementById("allguitars");
	var localguitars = JSON.parse(localStorage.getItem("guitars"));
	for (i = 0; i < localguitars.length; i++)
	{
		var enter = document.createElement("li");
		enter.appendChild(document.createTextNode(localguitars[i]));
		list.appendChild(enter);
		enter.id = i;
		

		
	}


}

function clickedguitar(event)
{
	var number = event.target.id;
	console.log(number);
	var localbodies = JSON.parse(localStorage.getItem("bodies"));
	var savedbody = localbodies[number];
	var localplates = JSON.parse(localStorage.getItem("plates"));
	var savedplate = localplates[number];
	var localheads = JSON.parse(localStorage.getItem("heads"));
	var savedhead = localheads[number];
	console.log(savedbody);
	console.log(savedplate);
	console.log(savedhead);

	localStorage.setItem("bodycolour", savedbody);
	localStorage.setItem("platecolour", savedplate);
	localStorage.setItem("headcolour", savedhead);
	window.location.href = "file:///C:/Program%20Files/Sublime%20Text%203/sites/root/customiser.html";


}






