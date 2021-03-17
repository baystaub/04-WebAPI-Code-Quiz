//Sets start button as a variable
var Startbtn = $('#Button')
var questionContainerElement = $("#questionContainer");
var Highscores = $('#Highscores');
var questionEl = $("#question")
    //gets time left Id
var timeLeft = document.getElementById('Tl');
var secondsLeft = '';
var score = '';
var confirm = '';
var question1 = $("#question1");
var question2 = $("#question2");
var question3 = $("#question3");

//on click with the start button
Startbtn.on('click', startGame);


function startGame() {
    //hides the start button
    Startbtn.addClass('hide1');
    //hides the highscoores list
    Highscores.addClass("hide1");
    //shows the question container
    document.getElementById('questionContainer').style.display = 'grid'
        //shows the timer
    document.getElementById('timer').style.display = 'grid'
        //console logs the initial click to start the game
    console.log('start game');
    //sets second left in the timer bar
    secondsLeft = 10;
    //starts timer function when clicked, counts down from 80
    setTime();
}



//set time function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            //clears the time interval to stop counting
            clearInterval(timerInterval);
            //alerts player to try again
            alert('please try again');
            //when time is up shows the start button to try again
            Startbtn.removeClass('hide1');
            Highscores.removeClass('hide1');
            questionContainerElement.addClass('hide1');
        }

    }, 1000);

};

function clickedq1() {
    console.log('clicked');
    question1.addClass('hide');
    question2.removeClass('hide');
};

function clickedq2() {
    console.log('clicked2');
    question2.addClass('hide');
    question3.removeClass('hide');
};

function clickedq3() {
    console.log('clicked3');
    question3.addClass('hide');
    Highscores.removeClass("hide1")
    alert('Congrats your completed the quiz!');
    var name = prompt('please enter your name for your highscore!')
    console.log(name + ':' + secondsLeft);
    highscore();

};

function highscore() {



}