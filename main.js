// from the document

var startSection = document.querySelector('.stratSection');
var quizSection = document.querySelector('.quizSection');
var resultSection = document.querySelector('.resultSection');

// some variable we will need
var numQts = 0;
var score = 0;
var ptsHelp = 6;

// this part for the qts and thier ansrs we'll need

// qts for level 1
var qtsNum1 = {
    theQts : "Q1 : Which planet is known as the Red Planet ?",
    theAnsr1 : "Venus",
    theAnsr2 : "Jupiter",
    theAnsr3 : "Mars",
    theAnsr4 : "Saturn",
}

var qtsNum2 = {
    theQts : "What is the largest mammal on Earth?",
    theAnsr1 : "African Elephant",
    theAnsr2 : "Blue Whale",
    theAnsr3 : "Giraffe",
    theAnsr4 : "Hippopotamus",
}

var qtsNum3 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

// qts for level 2

var qtsNum4 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum5 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum6 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

// qts for level 3

var qtsNum7 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum8 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum9 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

// qts for level 4

var qtsNum10 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum11 = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

var qtsNum12   = {
    theQts : "What is the tallest mountain in the world?",
    theAnsr1 : "Mount Everest",
    theAnsr2 : "K2",
    theAnsr3 : "Kilimanjaro",
    theAnsr4 : "Mount McKinley (Denali)",
}

// this is an array of qts 
var qtsList = [qtsNum1, qtsNum2, qtsNum3];

// some tests 



// end of tests 

startSection.style.display = ''
quizSection.style.display = 'none';
resultSection.style.display = 'none';

// this part for creation functin we will use
function startGame()
{
    startSection.style.display = 'none'
    quizSection.style.display = '';
    numQts = 0;
    document.getElementById("qtsContent").innerHTML = qtsList[numQts].theQts;
    document.getElementById("theAnsr1").innerHTML = qtsList[numQts].theAnsr1;
    document.getElementById("theAnsr2").innerHTML = qtsList[numQts].theAnsr2;
    document.getElementById("theAnsr3").innerHTML = qtsList[numQts].theAnsr3;
    document.getElementById("theAnsr4").innerHTML = qtsList[numQts].theAnsr4;
}

function giveUp()
{
    startSection.style.display = 'none'
    quizSection.style.display = 'none';
    resultSection.style.display = '';
}

function submitBtn()
{
    console.log(numQts);
    if (numQts == 2)
    {
        quiteBtn()

    }
    else
    {
        numQts += 1;
        document.getElementById("qtsContent").innerHTML = qtsList[numQts].theQts;
        document.getElementById("theAnsr1").innerHTML = qtsList[numQts].theAnsr1;
        document.getElementById("theAnsr2").innerHTML = qtsList[numQts].theAnsr2;
        document.getElementById("theAnsr3").innerHTML = qtsList[numQts].theAnsr3;
        document.getElementById("theAnsr4").innerHTML = qtsList[numQts].theAnsr4;
    }
    
    
    
}

function quiteBtn()
{
    startSection.style.display = ''
    quizSection.style.display = 'none';
    resultSection.style.display = 'none';
}

function replayBtn()
{
    startSection.style.display = 'none'
    quizSection.style.display = '';
    resultSection.style.display = 'none';
}














