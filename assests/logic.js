//Sets start button as a variable
var Startbtn = $('button')
    //gets time left Id
var timeLeft = document.getElementById('Tl');
var secondsLeft = 80;
//on click with the start button
Startbtn.on('click', function() {
    //sets second left in the timer bar
    secondsLeft = 10;
    //sets everything besides title to display none
    document.getElementById("Highscores").style.display = "none";
    document.getElementById('button').style.display = 'none';
    //sets the timer to display when button is clicked
    document.getElementById('timer').style.display = 'block'
        //starts timer function when clicked, counts down from 80
    setTime()
    if (Question1 === true) {
        if (Question2 === true) {
            if (Question3 === true) {
                prompt('Please enter your name for the score of' + timeLeft)
            }
        }
    }
});



function Quiz() {
    alert('you suck at this game');
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert('please try again');
            document.getElementById('button').style.display = '';
        }

    }, 1000);
}


function Question1() {

}

function Question2() {

}

function Question3() {

}



//question 1
//What launguage do you use for logic based coding?
//Javascript  vv
//css
//html
//Zoom


//question 2
//what would you use in css to make font bold?
//font-weight  vv
//text-content
//text-type
//font-style

//question 3
//Why would you change style in javascript instead of css?
//just cause?
//dynamicly changing? vv
//for fun
//for the extra challenge?