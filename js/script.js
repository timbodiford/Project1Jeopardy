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




    // var science = {
    //     values: {
    //         onHundred: {
    //             question: "Which is correct?",
    //             trueAnswer: "correct Question",
    //             falseAnswers: [
    //                 "This question is false",
    //                 "Here's another false question",
    //                 "Yep, also false"
    //             ],
    //             attempted: false
    //         },
    //         twoHundred: {
    //             question: "Which is correct?",
    //             trueAnswer: "correct Question",
    //             falseAnswers: [
    //                 "This question is false",
    //                 "Here's another false question",
    //                 "Yep, also false"
    //             ],
    //             attempted: false
    //         },
    //         threeHundred: {
    //             question: "Which is correct?",
    //             trueAnswer: 'correct Question',
    //             falseAnswers: [
    //                 "This question is false",
    //                 "Here's another false question",
    //                 "Yep, also false"
    //             ],
    //             attempted: false
    //         }
    //     }
    // }

    sci100 = {
        category: "science",
        value: "100",
        question: "What is the answer?",
        attempted: false,
        answers: {
            t: ['This is the correct answer!'],
            f: ["This one is wrong.",
                "Also wrong!",
                "Nope not this one either!"
            ]
        }
    }

    questions = {
        categories: [
            "firstCat",
            "secondCat",
            "thirdCat",
            "fourthCat"
        ],
        values: [
            "100",
            "200",
            "300",
            "400",
        ]

    }

    // sci200 = {
    //     category: "science",
    //     value: "200",
    //     question: "What is the answer here?",
    //     attempted: false,
    //     correctAnswer: "This is the correct answer!",
    //     incorrectAnswers: [
    //         "This one is wrong.",
    //         "Also wrong!",
    //         "Nope not this one either!"
    //     ]
    // }
    //Use this to display answers??:

    // console.log(sci100.answers.t)
    // for (i = 0; i < sci100.answers.f.length; i++) {
    //     console.log(sci100.answers.f[i])
    // }
    


//working with dynamically adding boxes for the grid
//click event
$('button').on('click', function(evt) {
    evt.preventDefault()
    console.log('clicked')
//adding category tiles
    for(let i = 0; i <4; i++){
$('.main-grid').append("<div class = 'cat-tile'></div>")
}
//adding question tiles
for(let i = 0; i <12; i++){
$('.main-grid').append("<div class = 'question-tile'></div>")
}

let catVar = questions.categories[i]

//pushing data into divs
for(let i = 0; i < 4; i++){
($('div.cat-tile').eq(i).text(catVar))
}
}
)
 


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