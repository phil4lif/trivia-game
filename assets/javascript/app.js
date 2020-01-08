//declare some variables for scorekeeping
var correctCounter = 0;
var wrongCounter = 0;




//starts a 30 second timer for each new question
var timer = 30
var intervalId

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    //  Decrease timer by one.
    timer--;
    //  Show the number in the #timer tag.
    $("#timer").html("<h3>" + timer + "</h3>");
    if (timer === 0) {
        $("#result").text("Time's Up!")
    }
}
function wrong(){
    wrongCounter++;
    $("#result").text("Incorrect")
    $("#wrongcounter").text(wrongCounter);
}
function correct(){
    correctCounter++;
    $("#result").text("Correct!")
    $("#correctcounter").text(correctCounter);
}

//create an array of objects each object will be a question and its key value pairs will be incorrect answers with one correct answer
var questions = [
    {
        question: "What kind of bear is best?",
        correctAnswer: 0,
        answers: ["There are basically two schools of thought", "Black Bears", "Grizzly Bears", "Polar Bears"]
    }, {
        question: "What does Dwight grow on his farm?",
        correctAnswer: 0,
        answers: ["Beets", "Radishes", "Corn", "Pecans"]
    }, {
        question: "What is the title of the action film that Michael directs and stars in?",
        correctAnswer: 1,
        answers: ["The Scranton Strangler", "Threat Level Midnight", "Scranton, The Electric City", "An American Workplace"]
    }
]

//write a function to display the current question as well as the correct and incorrect answers
function newQuestion(){
    timer = 30;
    $("#questiondiv").text(questions[0].question)
    $(".answerdiv").text(questions[0].answers)
}
//writes functionality for the start button, to begin the game
$("#startbutton").on("click", run);
$("#startbutton").on("click", newQuestion);