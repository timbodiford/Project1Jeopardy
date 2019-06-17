$(document).ready(function () {
    manyQuestions = [
        sci100 = {
            divId: 1,
            category: "Science",
            value: 100,
            question: "What is the science answer?",
            attempted: false,
            answers: {
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        math100 = {
            divId: 2,
            category: "Math",
            value: 100,
            question: "What is the math answer?",
            attempted: false,
            answers: {
                t: ['\nThis is the correct answer!'],
                f: ["\nThis one is wrong.",
                    "\nAlso wrong!",
                    "\nNope not this one either!"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff100 = {
            divId: 3,
            category: "GA Stuff",
            value: 100,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        gaStuff100 = {
            divId: 4,
            category: "Potpourri",
            value: 100,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "b"
        },
        sci200 = {
            divId: 5,
            category: "Science",
            value: 200,
            question: "What is the science answer?",
            attempted: false,
            answers: {
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        math200 = {
            divId: 6,
            category: "Math",
            value: 200,
            question: "What is the math answer?",
            attempted: false,
            answers: {
                t: ['\nThis is the correct answer!'],
                f: ["\nThis one is wrong.",
                    "\nAlso wrong!",
                    "\nNope not this one either!"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff200 = {
            divId: 7,
            category: "GA Stuff",
            value: 200,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        gaStuff200 = {
            divId: 8,
            category: "Potpourri",
            value: 200,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "b"
        },
        sci300 = {
            divId: 9,
            category: "Science",
            value: 300,
            question: "What is the science answer?",
            attempted: false,
            answers: {
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        math300 = {
            divId: 10,
            category: "Math",
            value: 300,
            question: "What is the math answer?",
            attempted: false,
            answers: {
                t: ['\nThis is the correct answer!'],
                f: ["\nThis one is wrong.",
                    "\nAlso wrong!",
                    "\nNope not this one either!"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff300 = {
            divId: 11,
            category: "GA Stuff",
            value: 300,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        gaStuff300 = {
            divId: 12,
            category: "Potpourri",
            value: 300,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "b"
        },
        sci400 = {
            divId: 13,
            category: "Science",
            value: 400,
            question: "What is the science answer?",
            attempted: false,
            answers: {
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        math400 = {
            divId: 14,
            category: "Math",
            value: 400,
            question: "What is the math answer?",
            attempted: false,
            answers: {
                t: ['\nThis is the correct answer!'],
                f: ["\nThis one is wrong.",
                    "\nAlso wrong!",
                    "\nNope not this one either!"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff400 = {
            divId: 15,
            category: "GA Stuff",
            value: 400,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "a"
        },
        gaStuff400 = {
            divId: 16,
            category: "Potpourri",
            value: 400,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['This is the correct answer!'],
                f: ["This one is wrong.",
                    "Also wrong!",
                    "Nope not this one either!"
                ]
            },
            correctAnswer: "b"

        }]
    questions = {
        categories: [
            "Science",
            "Math",
            "GA Stuff",
            "Not sure yet"
        ],
        values: [
            100,
            100,
            100,
            100,
            200,
            200,
            200,
            200,
            300,
            300,
            300,
            300,
            400,
            400,
            400,
            400
        ]

    }
    var score = 0;


    $('button.new-game').on('click', function (evt) {
        evt.preventDefault()
        console.log('clicked')
        //adding category tiles and values
        for (let i = 0; i < questions.categories.length; i++) {
            $('.main-grid').append("<div class = 'cat-tile'></div>");
            $('div.cat-tile').eq(i).text(questions.categories[i]);
        }
        //adding board tiles and values
        for (let i = 0; i < manyQuestions.length; i++) {
            $('.main-grid').append("<div class = divId " + i + "></div>");
            $('div.divId').eq(i).text(questions.values[i]).on('click', function () {
                console.log("console log works");

                if (manyQuestions[i].attempted === false) {
                    score = 0
                    let response = prompt(manyQuestions[i].question + manyQuestions[i].answers.t + manyQuestions[i].answers.f)
                    if (response == manyQuestions[i].correctAnswer) {
                        alert("That's correct!!!");
                        console.log("Testing!!!!!!!!!!!!!!");

                        score = score + manyQuestions[i].value;
                        ($('div.score').text(score));
                        console.log(score);

                    } else {
                        alert("Ohhh... sorry!  That is not correct.");
                        score = score - manyQuestions[i].value;
                        $('div.score').text(score);

                    }



                } ($('div.tile-100').eq(i).text(""))
                // ($('div.score').text(score))








            }
            )
        }
    }
    )
}
)
            // for (let i = 0; i < 4; i++) {
            //     ($('div.cat-tile').eq(i).text(questions.categories[i]))
            // }

            // for (i = 0; i < manyQuestions.length; i++) {

            // }
            // for (let i = 0; i < manyQuestions.length; i++) {
            //     ($('div.divId').eq(i).text(questions.values[0])).on('click', function () {
            //         console.log("console log works");
            //     }
            //     )
            // }

