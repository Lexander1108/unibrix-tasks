const startOfRange = document.getElementById("startsWith");
const endOfRange = document.getElementById("endsWith");
const attemptsValue = document.getElementById("gamesNumber");
const guessed = document.getElementById("guessed");

function randomInt(min, max){
    console.log(arguments);
    return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById("playButton").onclick = playGame;

let gameAttempts = 1;
let guessedNumber = 1;

function playGame(){
    event.preventDefault();
    console.log(this);
    console.log(arguments);
    
    let generatedInteger = randomInt(Number(startOfRange.value), Number(endOfRange.value));
    let userValue = document.getElementById("userValue").value;

    if( generatedInteger == userValue){
        alert('Congratulations, you were right');
        guessed.innerText = guessedNumber++;
        attemptsValue.innerText = gameAttempts++;
    } else {
        attemptsValue.innerText = gameAttempts++;
        alert("Nope! That isn't it :(");
    }
}

