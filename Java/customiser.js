window.onload = function()
{
	init();
}
function init()
{
	console.log("boobies");
}


function bodcolour(colour)
{
	console.log(colour);
	document.getElementById("bodyimage").src = "Assets/"+colour;
}

function platecolour(colour)
{
	console.log(colour);
	document.getElementById("plateimage").src = "Assets/"+colour;
}

function headcolour(colour)
{
	console.log(colour);
	document.getElementById("headimage").src = "Assets/"+colour;
}