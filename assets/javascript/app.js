//declare some variables for scorekeeping
var correctCounter = 0;
var wrongCounter = 0;
var questionNumber = 2;
var correctAnswer ;


//starts a 30 second timer for each new question
var timer = 30
var intervalId

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
    //write an if so that the timer does not go negative
    if(timer>0){
    //  Decrease timer by one.
    timer--;
    //  Show the number in the #timer tag.
    $("#timer").html("<h3>" + timer + "</h3>");
    if (timer === 0) {
        $("#result").text("Time's Up!")
        wrongCounter++;
        $("#wrongcounter").append(wrongCounter);
        questionNumber++
        newQuestion(questionNumber);
    }
}
}
function wrong() {
    wrongCounter++;
    $("#result").text("Incorrect")
    $("#wrongcounter").text(wrongCounter);
}
function correct() {
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
    }, {
        question: "Who is Pam engaged too at the beginning of the series?",
        correctAnswer: 2,
        answers: ["Jim", "Darryl", "Roy", "Toby"]
    }, {
        question: "Besides Jan, who does Michael often write about in his diary?",
        correctAnswer: 1,
        answers: ["Pam", "Ryan", "Kelly", "Karen"]
    }, {
        question: "What does Dunder Mifflin sell?",
        correctAnswer: 2,
        answers: ["Mittens", "Mufflers", "Paper", "Muffins"],
    }, {
        question: "What is the name of the Award show/party that Michael hosts for his staff?",
        correctAnswer: 3,
        answers: ["The Toby Awards", "The Grannies", "The Oscars Martinez", "The Dundees"]
    }
]

//write a function to display the current question as well as the correct and incorrect answers
function newQuestion(questionNumber) {
    timer = 30;
    $("#questiondiv").text(questions[questionNumber].question);
    $("#answer-one").text(questions[questionNumber].answers[0]);
    $("#answer-two").text(questions[questionNumber].answers[1]);
    $("#answer-three").text(questions[questionNumber].answers[2]);
    $("#answer-four").text(questions[questionNumber].answers[3]);

    // $(".answerdiv").text(questions[0].answers)
}

//write a click function for the answers 
$(".answerdiv").on("click", function () {
    
    // console.log(this);
    var answer = $(this).attr("data-answer")
    // console.log(answer);
    //if the answer is correct
    if (answer == questions[questionNumber].correctAnswer) {
        //correct will be displayed
        $("#result").text("Correct")
        //correctcounter is incremented
        correctCounter++;
        //and the correctcounter is displayed
        $("#correctcounter").append(correctCounter);
        //the question number is incremented
        questionNumber++
        //the new question function is invoked with the new number passed in
        newQuestion(questionNumber);
    //otherwise the answer is incorrect
    }else{
        // console.log("incorrect")
        //incorrect is displayed
        $("#result").text("Sorry, Incorrect")
        //the wrong counter variable is incremented
        wrongCounter++
        //the wrong counter is displayed on the page
        $("#wrongcounter").append(wrongCounter);
        //the question number is incremented
        questionNumber++
        //and the newquestion function is invoked with the new number passed in
        newQuestion(questionNumber);
    }
});

//if i is incorrect the wrongcounter will increase
//writes functionality for the start button, to begin the game
$("#startbutton").on("click", run);
$("#startbutton").on("click", newQuestion(questionNumber));