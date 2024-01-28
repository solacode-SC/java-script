let userCho;
let computerCho;
let result;

const computerDisplay = document.getElementById('computer_cho');
const userDisplay = document.getElementById('user_cho');
const resultDisplay = document.getElementById('result');
const possiblecho = document.querySelectorAll('button');

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
    }
    if (computerCho === 'Rock'  && userCho === "Scissors")
    {
        result = 'you lose!';
    }
    if (computerCho === 'Paper'  && userCho === "Rock")
    {
        result = 'you lose!';
    }
    if (computerCho === 'Paper'  && userCho === "Scissors")
    {
        result = 'you win!';
    }
    if (computerCho === 'Scissors'  && userCho === "Paper")
    {
        result = 'you lose!';
    }
    if (computerCho === 'Scissors'  && userCho === "Rock")
    {
        result = 'you win!';
    }
    resultDisplay.innerHTML = result;
}