// Questions Array:
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT Include:",
        userAnswer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: 2
    },
    {
        question: "The condition of an if / else statement is enclosed within ______.",
        userAnswer: ["1. quotes", "2. curly brackets", "3.parantheses", "4. square brackets"],
        correctAnswer: 1
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        userAnswer: ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 2
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        userAnswer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: 1
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        userAnswer: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
        correctAnswer: 2
    }];

//Time Interval for Time Left
    var secondsLeft = 75;
    var timerCountdown = true;
    var timerStart = false;
    var timeEl = document.getElementById("timer");
    var timeLeft = document.getElementById("timeLeft");
    var startButton = document.getElementById("startButton");
    var welcomePage = document.getElementById("welcomePage");
    var quizInterface = document.getElementById("quizInterface");
    var questionHeading = document.getElementById("questionHeading");
    var answerA = document.getElementById("answerA");
    var answerB = document.getElementById("answerB");
    var answerC = document.getElementById("answerC");
    var answerD = document.getElementById("answerD");
    var answerResult = document.getElementById("answerResult");
    var correctAnswer = document.getElementById("correctAnswer");
    var quizDone = document.getElementById("quizDone");
    var scoresPage = document.getElementById("scoresPage");
    var userInitials = document.getElementById("userInitials");
    var viewScore = document.getElementById("viewScore");
    var scoreList = document.getElementById("scoreList");

    var scoreBin = "";
    var highScores = [];
    var userScore = 0;
    
    let rng = 0;

// var countdownInterval = setInterval(quizTimer, 1000);

function quizTimer() {
    if (timerStart) 
    secondsLeft--;
    if(secondsLeft<= 0) {
    // end_quiz();
    secondsLeft = 0;    
    // clearInterval(countdownTimerInterval);
    //alert user and stop quiz
    }
    timeEl.textContent = secondsLeft;
}
var countdownInterval = setInterval(quizTimer, 1000);

//Add Event Listener for Start button
startButton.addEventListener("click", function(){
    welcomePage.style.display = "none";
    quizInterface.style.display = "block";
    timeLeft.style.display = "block";
    questionPrompts();
})

function questionPrompts() {
    questionHeading.textContent = quizQuestions[rng].question;
    answerA.textContent = quizQuestions[rng].userAnswer[0];
    answerB.textContent = quizQuestions[rng].userAnswer[1];
    answerC.textContent = quizQuestions[rng].userAnswer[2];
    answerD.textContent = quizQuestions[rng].userAnswer[3];
}

answerA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (0 === correctAnswer) { 
        // display message to user for 1  second stating if the answer is correct or incorrect
        answerResult.innerHTML = "Correct!";
        setTimeout(function() {
            answerResult.textContent;
            },
            1000
        );
        // when user answers a question correctly, increase the score
        userScore++;  
    } else {
        secondsLeft -= 10;
        // when user answers a question inccorrectly, subtract from the time
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (1 === correctAnswer) { 
        // display message to user for 1  second stating if the answer is correct or incorrect
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent = "";
            },
            1000
        );
        // when user answers a question correctly, increase the score
        userScore++;   

    } else {
        secondsLeft -= 10;
        // when user answers a question inccorrectly, subtract from the time
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (2 === correctAnswer) { 
        // display message to user for 1  second stating if the answer is correct or incorrect
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent = " ";
            },
            1000
        );
        // when user answers a question correctly, increase the score
        userScore++;
        // document.getElementById("userScore").innerHTML = userScore;
    } else {
        secondsLeft -= 10;
        // when user answers a question inccorrectly, subtract from the time
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = " ";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (3 === correctAnswer) { 
        // display message to user for 1  second stating if the answer is correct or incorrect
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent;
            },
            1000
        );
        // when user answers a question correctly, increase the score
        userScore++;    
    } else {
        secondsLeft -= 10;
        // when user answers a question inccorrectly, subtract from the time
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

function finishedPrompt() {
    quizInterface.style.display = "none";
    quizDone.style.display = "block";
}

function submitScore() {
    highScores.push(document.getElementById("userInitials").value + " " + userScore);
    scoresPrompt();
}


function renderScores() {
localStorage.setItem("score",JSON.stringify(answerResult));
localStorage.setItem("initials", JSON.stringify(userInitials));

var highscoreInput = JSON.parse(localStorage.getItem("score"));
var highscoreInput = JSON.parse(localStorage.getItem("initials"));
}
function scoresPrompt() {
    viewScore.style.display = "none";
    timeLeft.style.display = "none";
    quizDone.style.display = "none";
    scoresPage.style.display = "block";
    
    scoreBin= "";
    
    for(let i=0; i<highScores.length; i++){
        scoreBin = scoreBin + " " + highScores[i];
   }
   highScores.innerHTML = scoreList;
}

function clearScores() {
    highScores = [];
}

function goBack() {
    secondsLeft = 75;
    timerStart = false;
    timerCountdown = true;
    rng = 0;
    userScore = 0;
}
