console.log('Welcome to the Game')

var topleft = document.GetElementbyId('topleft');
var topright = document.GetElementbyId('topright');
var bottomleft = document.GetElementbyId('bottomleft');
var bottomright = document.GetElementbyId('bottomright');

topleft.addEventListener('click',userChoice,false);
topright.addEventListener('click',userChoice,false);
bottomright.addEventListener('click',userChoice,false);
bottomleft.addEventListener('click',userChoice,false);

button = document.getElementsByClassName('button')
function userChoice(event){
	console.log(event.target.id);
}
//randomly select a square//
function getNewButton() {
	return Math.floor(Math.random() * 4)
}
