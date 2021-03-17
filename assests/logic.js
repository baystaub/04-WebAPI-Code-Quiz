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
const questions = [{
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
let shuffledQuestions, currentQuestionIndex
var answer = $('button');


//on click with the start button
Startbtn.on('click', startGame); {
    answer.on('click', function() {
        if ('data-correct' === true) {
            console.log('clicked')
            currentQuestionIndex++
            reset();
            setNextQuestion();
        } else {
            alert('wrong answer please pick a differnt question');
            console.log('wrong')
        }
    })
};

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
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    //starting the question index off at 0
    currentQuestionIndex = 0;
    //console logs the initial click to start the game
    console.log('start game');
    //sets second left in the timer bar
    secondsLeft = 5;
    //starts timer function when clicked, counts down from 80
    setTime();
    setNextQuestion();
    questionContainerElement.removeClass('hide1')
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    reset();
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
            Highscores.removeClass('hide1');
            //calls function to hide
            hideQuestions();
        }

    }, 1000);

};

function hideQuestions() {
    //sets question container to display none
    questionContainerElement.addClass('hide1');
};

function selectAnswer(e) {
    let selected = e.target;
    var correct = selected.dataset.correct;
    setStatusClass(document.body.button, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length < currentQuestionIndex + 1) {
        var high = prompt('congradulation you completed the quiz, Please eneter your name;' + timeLeft)
        console.log(high)
    };
}

function setStatusClass(element, correct) {
    clearStatus(element)
    if (correct) {
        $(element).addClass('correct')
    } else {

        $(element).addClass('wrong')
    }
};

function clearStatus(element) {
    $(element).removeClass('correct')
    $(element).removeClass('wrong')
};

function showQuestion(questions) {
    questionEl.text(questions.question);
    console.log(questions)
    questions.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.append(button);
        console.log(question);
    })
};

function reset() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild;
        (answerButtons.firstChild);
    }
}