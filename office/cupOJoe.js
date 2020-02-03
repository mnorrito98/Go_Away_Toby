// FIND THE PENGUINS PROJ MIKE NORRITO

// Event listener for page load which runs the newGame() function 

window.addEventListener("load", newGame);

// Eb=vernt listener for the play again button

document.getElementById("button").addEventListener("click", function()
{
	window.location.reload();
});

document.getElementById("button2").addEventListener("click", newGame)

// this function will generate a random number between 2 and 10

//That number represents the div the yeti wull hide in 
// THat div will gain an ID of "yeti" and click event listener 

function newGame()
{
	var randomNum = Math.floor(Math.random() * 9) + 2;
	document.getElementsByTagName("div")[randomNum].setAttribute("id","yeti");
	document.getElementById("yeti").addEventListener("click", function() {
		window.alert("No! God! No god please no. No! No! Noooo! Toby moved back from Costa Rica and made liars of all of us...");
		document.getElementById("audio").play();
	});
}