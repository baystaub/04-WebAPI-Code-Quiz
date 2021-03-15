//Sets start button as a variable
var Startbtn = $('button')
    //gets time left Id
var timeLeft = document.getElementById('Tl');
var secondsLeft = '';
var score = '';
var confirm = '';


//on click with the start button
Startbtn.on('click', function(event) {
    event.preventDefault();
    console.log('clicked initial')
        //sets second left in the timer bar
    secondsLeft = 80;
    Hide();
    //starts timer function when clicked, counts down from 80
    setTime();
    var question1 = document.getElementById('question-1').style.display = 'grid'
});

answer1.on('click', function(event) {
    event.preventDefault();
    document.getElementById('question-1').style.display = 'none'
    document.getElementById('question-2').style.display = 'grid'
})


//set time function
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
};

//hides the main screen function
function Hide() {
    //sets everything besides title to display none
    document.getElementById("Highscores").style.display = "none";
    document.getElementById('button').style.display = "none";
    //sets the timer to display when button is clicked
    document.getElementById('timer').style.display = 'block'
};