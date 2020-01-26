// Global Variables
var timeLeft = 20;
var timeInterval ;


// Question Object Array 
var questionsArray = [
    {   
        // question 1
        question: "In ancient Greece, throwing an apple at someone was a declaration of what?",
        ans: {
            a: "hate",
            b: "Would you like to get lunch?",
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
    })

};

$(document).ready(function() {






});



