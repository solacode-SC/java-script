let userCho;
let computerCho;
let result;

let userPts = 3;
let computerPts = 3;

const computerDisplay = document.getElementById('computer_cho');
const userDisplay = document.getElementById('user_cho');
const resultDisplay = document.getElementById('result');
const possiblecho = document.querySelectorAll('button');

const userPoints = document.getElementById('uPoints');
const computerPoints = document.getElementById('cPoints');

computerPoints.innerHTML = computerPts;
userPoints.innerHTML = userPts;

possiblecho.forEach(possiblecho => possiblecho.addEventListener('click', (e) => {
    userCho = e.target.id;
    userDisplay.innerHTML = userCho;
    generateComputerCho();
    getResult();
}))

function generateComputerCho()
{
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1)
    {
        computerCho = 'Rock';
    }
    if (randomNum === 2)
    {
        computerCho = 'Paper';
    }
    if (randomNum === 3)
    {
        computerCho = 'Scissors';
    }
    computerDisplay.innerHTML = computerCho;
}



function getResult()
{
    if (computerCho === userCho)
    {
        result = 'its a draw!';
    }
    if (computerCho === 'Rock'  && userCho === "Paper")
    {
        result = 'you win!';
        userPts++;
        computerPts--;
    }
    if (computerCho === 'Rock'  && userCho === "Scissors")
    {
        result = 'you lose!';
        userPts--;
        computerPts++;
    }
    if (computerCho === 'Paper'  && userCho === "Rock")
    {
        result = 'you lose!';
        userPts--;
        computerPts++;
    }
    if (computerCho === 'Paper'  && userCho === "Scissors")
    {
        result = 'you win!';
        userPts++;
        computerPts--;
    }
    if (computerCho === 'Scissors'  && userCho === "Paper")
    {
        result = 'you lose!';
        userPts--;
        computerPts++;
    }
    if (computerCho === 'Scissors'  && userCho === "Rock")
    {
        result = 'you win!';
        userPts++;
        computerPts--;
    }
    resultDisplay.innerHTML = result;
    computerPoints.innerHTML = computerPts;
    userPoints.innerHTML = userPts;
    winner(computerPts, userPts);
}

function winner(cPoints, uPoints)
{
    if (cPoints === 0 || uPoints === 0)
    {
        resultDisplay.innerHTML = 'Game Result';
        computerPoints.innerHTML = 3;
        userPoints.innerHTML = 3;
    }

}