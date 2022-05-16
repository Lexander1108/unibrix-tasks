const game = document.querySelector('[data-game]');
const gameScore = document.querySelector('[data-game-score]');
const scoreForCatch = 1;
const looseScore = 2;
let ballscount = 5;
let score = 0;

window.addEventListener('load', startGame);

function updateScore() {
    gameScore.innerHTML = score;
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function createBall(){
    const ball = document.createElement('div');
    ball.className = 'ball';

    let top = randomInt(1, 50);
    let left = randomInt(1, window.innerWidth - 20);

    function setCoordinates(){
        ball.style.top = top + 'px';
        ball.style.left = left + 'px';
    }
    setCoordinates();

    setInterval(() => {
        top += randomInt(1, 4);
        setCoordinates();
    }, 16);

    const updateInterval = setInterval(() => {
        if (top > window.innerHeight) {
            ball.remove;
            addBall();
        }
    }, 16);

    ball.addEventListener('click', () => {
        score += scoreForCatch;
        clearInterval(updateInterval);
        addBall();
        updateScore();
    });

    return ball;
}

function addBall() {
    ball = createBall();
    game.appendChild(ball);
}

function startGame() {
    for (let i = 0; i < ballscount; i++){
        addBall();
    }
}