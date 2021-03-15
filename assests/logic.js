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
var answerButtons = $("#answers");
let question = [{
    question: 'What laungage do you use for logic based coding?',
    answers: [
        { text: 'JavaScript', correct: true },
        { text: 'CSS', correct: false },
        { text: 'HTML', correct: false },
        { text: 'ZOOM', correct: false }
    ]
}, {
    question: 'What would you use in css to make font bold?',
    answers: [
        { text: 'Font-weight', correct: true },
        { text: 'Text-content', correct: false },
        { text: 'Text-type', correct: false },
        { text: 'Your imagination', correct: false }
    ]
}, {
    question: 'why would you style in javascript instead of css?',
    answers: [
        { text: 'just cause', correct: false },
        { text: 'dynamicly changing things', correct: true },
        { text: 'for fun', correct: false },
        { text: 'for the extra challenge', correct: false }
    ]
}];

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
        //randomly shuffles the question
    shuffledQuestions = question.sort(() => Math.random() - 1);
    //starting the question index off at 0
    currentQuestionIndex = 0;
    //console logs the initial click to start the game
    console.log('clicked initial');
    //sets second left in the timer bar
    secondsLeft = 10000000000;
    //starts timer function when clicked, counts down from 80
    setTime();
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

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
            //calls function to hide
            hideQuestions();
        }

    }, 1000);

};

function hideQuestions() {
    //sets question container to display none
    questionContainerElement.addClass('hide1');
}

function selectAnswer(e) {

}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.append('button');
        console.log(question);
    })
}

function reset() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild;
        (answerButtons.firstChild);
    }
}