window.onload = function()
{
	init();
}
function init()
{
	

	
	
	if (window.location.href.indexOf("savedguitars") > -1)
	{
		listnames();												//This checks the URL of the page.
	}

	if (localStorage.getItem("bodycolour") === null && localStorage.getItem("platecolour") === null && localStorage.getItem("headcolour") === null )		//Checks there is no local storage for any of the customisable parts of the guitar.
	{

		document.getElementById("bodyimage").src = "Assets/regularbody.png";
		document.getElementById("plateimage").src ="Assets/regularplate.png";		//Regular coloured guitar parts are displayed if there is no local storage
		document.getElementById("headimage").src ="Assets/regularhead.png";
		var guitars = [];
		var bodies = [];
		var plates = [];
		var heads = [];
		localStorage.setItem("guitars", JSON.stringify(guitars));					//Here I define lots of variables which will be used to store customised guitars in local storage.
		localStorage.setItem("bodies", JSON.stringify(bodies));
		localStorage.setItem("plates", JSON.stringify(plates));
		localStorage.setItem("heads", JSON.stringify(heads));
		localStorage.setItem("count", 0);											//This is used to determine where in the guitar parts arrays to store new saved guitars.

		
	}
	
	else
	{
		
		document.getElementById("bodyimage").src = localStorage.getItem("bodycolour");			//If there is local storage of any of the customisable guitar parts display them.
		document.getElementById("plateimage").src = localStorage.getItem("platecolour");
		document.getElementById("headimage").src = localStorage.getItem("headcolour");
		
	}






	
}


function bodcolour(colour)												//This function is used when a body colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("bodyimage").src = "Assets/"+colour;			
	localStorage.setItem("bodycolour", "Assets/"+colour);
}

function platecolour(colour)											//This function is used when a plate colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("plateimage").src = "Assets/"+colour;
	localStorage.setItem("platecolour", "Assets/"+colour);
}

function headcolour(colour)												//This function is used when a head colour is clicked and sets it to the chosen colour by fetching the appropriate image.
{
	console.log(colour);
	document.getElementById("headimage").src = "Assets/"+colour;
	localStorage.setItem("headcolour", "Assets/"+colour);
}


function guitarname()
{
	var count = localStorage.getItem("count");
	var currentName = prompt("Name your creation.");					//When save is selected a prompt is displayed to enter a name for the created guitar.
	var localguitars = JSON.parse(localStorage.getItem("guitars"));     //The guitars string is accessed in local storage and parsed using JSON.
	localguitars[count] = currentName;									//The name for the guitar is stored at the "count" location in the array.
	localStorage.setItem("guitars", JSON.stringify(localguitars));		//It is then converted back to a string and is stored in local storage.

	var localbodies = JSON.parse(localStorage.getItem("bodies"));		//For each customisable part of the guitar a similar method is used as the name of the guitar.
	localbodies[count] = localStorage.getItem("bodycolour");			//The current colour of the part is saved in an array and then in local storage.
	localStorage.setItem("bodies", JSON.stringify(localbodies));

	var localplates = JSON.parse(localStorage.getItem("plates"));
	localplates[count] = localStorage.getItem("platecolour");
	localStorage.setItem("plates", JSON.stringify(localplates));

	var localheads = JSON.parse(localStorage.getItem("heads"));
	localheads[count] = localStorage.getItem("headcolour");
	localStorage.setItem("heads", JSON.stringify(localheads));

	count++;															//Count is incremented for the next addition to the list of guitars
	localStorage.setItem("count", count);



	
	


	
}

function listnames()													//This is used when the saved guitars page is loaded. The names of guitars are fetched from local storage and displayed.
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
	var number = event.target.id;										//If a guitar is selected on the home page its position in the array is fetched.
	console.log(number);
	var localbodies = JSON.parse(localStorage.getItem("bodies"));
	var savedbody = localbodies[number];
	var localplates = JSON.parse(localStorage.getItem("plates"));
	var savedplate = localplates[number];
	var localheads = JSON.parse(localStorage.getItem("heads"));
	var savedhead = localheads[number];
	

	localStorage.setItem("bodycolour", savedbody);						//They are then stored in local storage so are used when the customiser page is loaded.
	localStorage.setItem("platecolour", savedplate);
	localStorage.setItem("headcolour", savedhead);
	window.location.href = "customiser.html";


}






