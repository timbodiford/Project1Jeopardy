//Psuedocode
//Figure out how to structure data in objects / arrays
//Create HTML elements
//Add in CSS
//create variables like score
//build functions to keepo track of score

$(document).ready(function () {


var categories = [
    "HTML",
    "JS"
]
var tilevalueS = [
    "100",
    "300",
    "500"
]

var questions = {
    true: "Correct",
    false: "Not correct",
    false: "Not correct",
}


//this doesn't tie questions to a specific category or value..  i think i need to nest.. refer to the planets object...

var science = {
    values: {
        100: {
            trueAnswer: "correct Question",
            falseAnswers: [
                "This question is false",
                "Here's another false question",
                "Yep, also false"
            ],
            attempted: false
        },
        200: {
            trueAnswer: "correct Question",
            falseAnswers: [
                "This question is false",
                "Here's another false question",
                "Yep, also false"
            ],
            attempted: false
        },
        300: {
            trueAnswer: 'correct Question',
            falseAnswers: [
                "This question is false",
                "Here's another false question",
                "Yep, also false"
            ],
            attempted: false
        }
    }
}


$()






})