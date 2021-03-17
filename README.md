# 04-WebAPI-Code-Quiz

Coding the quiz game, i started off with the basic html;

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel='stylesheet' href="./assests/style.css">
    <title>Coding Quiz</title>
</head>

<body>
    <h1 class='col-12 text-center'>Coding Quiz!</h1>
    <main id='Highscores' class='col-12 justify-content-center text-center'>
        <ul>
            <h3>Highschores</h3>
            <li id='high1'>Highscore 1</li>

            <li id='high2'>
                Highscore 2
            </li>
            <li id='high3'>
                Highscore 3
            </li>
        </ul>
    </main>
    <main>
        <button id='Button' class="col-3 mx-auto">Start
            Game</button>
    </main>
    <section id='timer' style="float: right;">
        <p>Time left: <span id='Tl'>10</span></p>
    </section>
    <main>
        <main>
            <section id='questionContainer' class='col-12 text-center hide'>
                <h5 id='question' aria-placeholder="Question">
                </h5>
                <div id='answers' style="display: grid;"></div>
            </section>
        </main>
    </main>

</body>
<script src=" https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js ">
</script>
<script src=" https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js "></script>
<script src=" https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js "></script>
<script src='./assests/logic.js'></script>

</html>
```

I used some Jquery and bootstrap to make my time styling and grabbing object easier.
some exampls of bootstrap in the html are -

line 34:"class=col-3 mx-auto"

i did have to change some css to get some of the center of the buttons correct, due to dynamicly adding the buttons. instead of just changing the innerhtml text

```
button {
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 25%;
    text-align: center!important;
}
```

this is the style that i got from col-3 and mx-auto bootstrap code.

working my way thru the basics i started to get onto javascript.

first step was creating a timer, i wanted the timer to start at 80 and count down by 1.

```
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
```

this is saying that the timer needs to count down, instead of count up. we set this by putting secondsleft variable to --. while its counting down we want it to show on the screen. we update the textContent var to secondsLeft.

if the timer reaches 0
i wanted it to clear the interval time:
alert the player that he lost and should try again:
and remove the class hide1 from the startbutton to show it up again.
