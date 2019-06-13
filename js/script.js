//Psuedocode
//Figure out how to structure data in objects / arrays
//Create HTML elements
//Add in CSS
//create variables like score
//build functions to keepo track of score

$(document).ready(function () {


// var categories = [
//     "HTML",
//     "JS"
// ]
// var tilevalueS = [
//     "100",
//     "300",
//     "500"
// ]

// var questions = {
//     true: "Correct",
//     false: "Not correct",
//     false: "Not correct",
// }


// //this doesn't tie questions to a specific category or value..  i think i need to nest.. refer to the planets object...




var science = {
    values: {
        onHundred: {
            question: "Which is correct?",
            trueAnswer: "correct Question",
            falseAnswers: [
                "This question is false",
                "Here's another false question",
                "Yep, also false"
            ],
            attempted: false
        },
        twoHundred: {
            question: "Which is correct?",
            trueAnswer: "correct Question",
            falseAnswers: [
                "This question is false",
                "Here's another false question",
                "Yep, also false"
            ],
            attempted: false
        },
        threeHundred: {
            question: "Which is correct?",
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

// for(let i = 0; i < 5; i++) {
//     let btn = document.createElement('button');
//     btn.classList.add('square');
//     main-Container.appendChild(btn);
//     btn.appendChild(document.createTextNode('$100'))
// }


// function createDiv () {
//     $('main-Container').append('<div class="category-tiles"')
// }




// for(let i = 0; i < 25; i++) {
//    let btn = document.createElement('div');
//    btn.classList.add('tile');
//    gameBoard.appendChild(btn);
// }

})


