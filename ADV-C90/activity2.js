function back()
{
	window.location="activity_1.html"
}
function getScore()
{
	score=localStorage.getItem("score");
	document.getElementById("update").innerHTML="<h2>Score:"+score+"</h2>";
}

function getScore()
{
	score = localStorage.getItem("score");	
	document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}