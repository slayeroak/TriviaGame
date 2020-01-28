// Global Variables
var timeLeft = 20;
var timeInterval ;
var questionIndex = 0;
var correctAnsCount = 0;
var incorrectAnsCount = 0;


// Question Object Array 
var questionsArray = [
    {   
        // question 1
        question: "In ancient Greece, throwing an apple at someone was a declaration of what?",
        ans: {
            a: "hate",
            b: "Would you like to get dinner?",
            c: "love",
            d: "adoption",
        },
        correctAnswer: "c",
        display: "love"
    },
    {   
        // question 2
        question: "The Vatican bank has the only ATM in the world that allows users to do what?",
        ans: {
            a: "Perform transactions in Latin.",
            b: "Send Bitcoin.",
            c: "Donate to the Church.",
            d: "Pray for 5 minutes and get $5 deposited into your account",
        },
        correctAnswer: "a",
        display: "Perform transactions in Latin."
    },
    {   
        // question 3
        question: "What color are aircraft black boxes?",
        ans: {
            a: "navy blue",
            b: "orange",
            c: "black",
            d: "white",
        },
        correctAnswer: "b",
        display: "orange"
    },
    {   
        // question 4
        question: "Which country was the Caesar salad invented in?",
        ans: {
            a: "Italy",
            b: "Mexico",
            c: "USA",
            d: "Australia",
        },
        correctAnswer: "b",
        display: "Mexico"
    },
    {   
        // question 5
        question: "How long did the 100 Years War last?",
        ans: {
            a: "100 years",
            b: "98 years",
            c: "184 years",
            d: "116 years",
        },
        correctAnswer: "d",
        display: "116 years"
    },
    {   
        // question 6
        question: "What king of animal is a firefly?",
        ans: {
            a: "winged beetle",
            b: "fly",
            c: "ant",
            d: "bee",
        },
        correctAnswer: "a",
        display: "winged beetle"
    },
    {   
        // question 7
        question: "How many months have 28 days in them?",
        ans: {
            a: "2",
            b: "1",
            c: "12",
            d: "13",
        },
        correctAnswer: "c",
        display: "12"
    },
    {   
        // question 8
        question: "Which country do french fries originate?",
        ans: {
            a: "USA",
            b: "Belgium",
            c: "France",
            d: "Canada",
        },
        correctAnswer: "b",
        display: "Belgium"
    },
    {   
        // question 9
        question: "Which animal is responsible for killing more people than plane crashes?",
        ans: {
            a: "Donkeys",
            b: "Kangeroos?",
            c: "Pokemon",
            d: "Monkeys",
        },
        correctAnswer: "A",
        display: "Donkeys"
    },
    {   
        // question 10
        question: "What do you call the dot above the letter “i” and “j”?",
        ans: {
            a: "a dot",
            b: "a circle",
            c: "a hat",
            d: "a title",
        },
        correctAnswer: "d",
        display: "a title"
    }

];






// Gamaplay Functions

// Question Timer Function
function timerCountdown() {
    // set the timer to 20seconds
    timeLeft = 20;
    // clear the time interval variable
    clearInterval(timeInterval);
    // use setInterval
    timeInterval = setInterval(function(){
        // decrement the timeLeft
        timeLeft--;
        // display the timeLeft to the time left div
        $("#remaining-time").html(timeLeft);
        $("#remaining-time").show();
        // if time runs out
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000);

};

$("#restart, #submit, #next, #correct, #incorrect, #unaswered, #remaining-time, #qestion-div").hide();
// Game Start
$("#start").on("click", gameStart);

function gameStart() {
    $("#start").hide();
    $("#remaining-time #submit").show();
    questionDisplay();
};

function questionDisplay() {
    // show questions and answers
    $("#qestion-div, #answer-div, #a, #b, #c, #d").show();
    // start timer
    timerCountdown();
    // access object and show question and answers
    $("#question-div").html(questionsArray[questionIndex].question);
        // console.log(questionsArray[questionIndex].question);
    $("#answer1").html(questionsArray[questionIndex].ans.a);
    $("#answer2").html(questionsArray[questionIndex].ans.b);
    $("#answer3").html(questionsArray[questionIndex].ans.c);
    $("#answer4").html(questionsArray[questionIndex].ans.d);

}

// click the answers .answers
$(".answers").click(function(){
//    run a showAnswer function
    showAnswer();
    // need to store the correct answer into a variable then compare 
    var userChoice = $(this).attr("id");
    var answer = questionsArray[questionIndex].correctAnswer

    // if user choice = answer increase correctcount if not increase incorrect
    if (userChoice === answer) {
        correctAnsCount++;
    }
    else {
        incorrectAnsCount++;
    }
    console.log("correct" + correctAnsCount + "incorrect" +incorrectAnsCount);

});

function showAnswer() {
    // hide the remaining time
    $("#remaining-time").hide();
    // show the next button
    // $("#next").show();
    // need to store the correct answer into a variable then compare 
}


