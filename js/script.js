//Psuedocode
//Figure out how to structure data in objects / arrays
//Create HTML elements
//Add in CSS
//create variables like score
//build functions to keepo track of score



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

$(document).ready(function () {

    manyQuestions = [
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
        },
        math100 = {
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
        },
        gaStuff100 = {
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
        }]

    // let sc100Answers = sci100.answers
    // ($('div.question-tile-100').eq(i).text(questions.values[0]))


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
    // for (let i = 0; i = manyQuestions[i].answers[i].length; i++) {
    // $(('.div.question-tile-100').eq(i)).con('click', function (evt) {
    //     for (let i = text(manyQuestions[1].answers.f[i] + "," + manyQuestions[1].answers.t[0]))
  
  
  

  
  
  
  
  
    $('div').on('click', function (evt) {
        evt.preventDefault()
        // for (let i = 0; i < $('div.question').length; i++) {
            console.log ("Hello")
        }
    )


    //working with dynamically adding boxes for the grid
    //click event
    $('button').on('click', function (evt) {
        evt.preventDefault()
        console.log('clicked')
        //adding category tiles
        for (let i = 0; i < 4; i++) {
            $('.main-grid').append("<div class = 'cat-tile'></div>")
        }
        for (let i = 0; i < 1; i++) {
            $('.main-grid').after("<div class= 'show-question'></div>")
            //adding values tiles
        }
        for (let i = 0; i < 4; i++) {
            $('.main-grid').append("<div class = 'question tile-100'></div>")
        }
        for (let i = 0; i < 4; i++) {
            $('.main-grid').append("<div class = 'question tile-200'></div>")
        }
        for (let i = 0; i < 4; i++) {
            $('.main-grid').append("<div class = 'question tile-300'></div>")
        }
        for (let i = 0; i < 4; i++) {
            $('.main-grid').append("<div class = 'question tile-400'></div>")
        }

        //pushing data into category divs
        for (let i = 0; i < questions.categories.length; i++) {
            ($('div.cat-tile').eq(i).text(questions.categories[i]))
        }
        //pushing data into category divs
        for (let i = 0; i < questions.values.length; i++) {
            ($('div.tile-100').eq(i).text(questions.values[0]))
        }

        //pushing data into category divs
        for (let i = 0; i < questions.values.length; i++) {
            ($('div.tile-200').eq(i).text(questions.values[1]))
        }
        //pushing data into category divs
        for (let i = 0; i < questions.values.length; i++) {
            ($('div.tile-300').eq(i).text(questions.values[2]))
        }
        //pushing questions into show-question div
        ($('div.show-question').append('<h2>' + sci100.question + '</h2>'))
    }
    )




    // var divs = document.querySelectorAll('div.question')
    // for (let i = 0; i < divs.length; i++) {
    //     divs[i].addEventListener('click', function(){
    //         console.log(1)
    //     })
    // }



})

//This isn't going to work because it's trying to start from position one ands overwriting the 100 values
//How do I loop the loop? 100 100 100 100 / 200 200 200 200 / 300 300 300 300, etc?

//Or do I create separate rows with a separate class for each $$$ amt?




    




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