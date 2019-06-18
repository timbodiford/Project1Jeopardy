$(document).ready(function () {
    manyQuestions = [
        sci100 = {
            divId: 1,
            category: "Science",
            value: 100,
            question: "This bone is the longest in the body.",
            attempted: false,
            answers: {
                t: ['\na: What is the femur?'],
                f: ["\nb: What is the clavicle?",
                    "\nc: What is the ulna?",
                    "\nd: What is the ham bone?"
                ]
            },
            correctAnswer: "a"
        },
        math100 = {
            divId: 2,
            category: "Math",
            value: 100,
            question: "9",
            attempted: false,
            answers: {
                t: ['\na: What is 4 + 4?'],
                f: ["\nb: What is the square root of 81?",
                    "\nc: What is a letter?",
                    "\nd: What is 5 + 5?"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff100 = {
            divId: 3,
            category: "GA Stuff",
            value: 100,
            question: "12 weeks",
            attempted: false,
            answers: {
                t: ['\na: What is the amount of time I spent on this project?'],
                f: ["\nb: How long it took just to write these objects?",
                    "\nc: Yeah choose another option.",
                    "\nd: How long does SEI last?"
                ]
            },
            correctAnswer: "d"
        },
        gaStuff100 = {
            divId: 4,
            category: "Random",
            value: 100,
            question: "Pople are currently using the drive-assit feature in this brand of car to sleep during their commute.",
            attempted: false,
            answers: {
                t: ['\na: What is a Ford Pinto?'],
                f: ["\nb: What is a Honda Pilot?",
                    "\nc: What is a Tesla?",
                    "\nd: Whaty is a Pontiac Grand Am?"
                ]
            },
            correctAnswer: "c"
        },
        sci200 = {
            divId: 5,
            category: "Science",
            value: 200,
            question: "This bone located in the ear is the smallest in the body.",
            attempted: false,
            answers: {
                t: ['\na: What is the incus?'],
                f: ["\nb: What is the maleus?",
                    "\nc: What is the stapes?",
                    "\nd: Whar is the tympanic membrane?"
                ]
            },
            correctAnswer: "c"
        },
        math200 = {
            divId: 6,
            category: "Math",
            value: 200,
            question: "This is the formula for the Pythagorean Theorem.",
            attempted: false,
            answers: {
                t: ['\na: What is a(squared) + b(cubed) = c(1/2)?'],
                f: ["\nb: What is a(squared) + b(squared) = c(squared)?",
                    "\nc: What is a + b + c + d(sqaured)?",
                    "\nd: What is pi?"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff200 = {
            divId: 7,
            category: "These must be completed weekly to provide feedback to the GA Team.",
            value: 200,
            question: "What is the Stuff answer?",
            attempted: false,
            answers: {
                t: ['\na: What are exit tickets'],
                f: ["\nb: What are change of address forms?",
                    "\nc: What are lunch request forms?",
                    "\nd: What are weekly assignments?"
                ]
            },
            correctAnswer: "a"
        },
        gaStuff200 = {
            divId: 8,
            category: "Potpourri",
            value: 200,
            question: "This Microsoft program was originally called Presenter",
            attempted: false,
            answers: {
                t: ['\na: What is MS Word?'],
                f: ["\nb: What is Skype?",
                    "\nc: What is CashApp?",
                    "\nd: What is MS Powerpoint?"
                ]
            },
            correctAnswer: "d"
        },
        sci300 = {
            divId: 9,
            category: "Science",
            value: 300,
            question: "This celestial body was declassified as a planet in August of 2006.",
            attempted: false,
            answers: {
                t: ['\na: What is Pluto?'],
                f: ["\nb: What is the sun?",
                    "\nc: What is Alpha Centari?",
                    "\nd: What is New Jersey?"
                ]
            },
            correctAnswer: "a"
        },
        math300 = {
            divId: 10,
            category: "Math",
            value: 300,
            question: "What comes after million, billion, trillion?",
            attempted: false,
            answers: {
                t: ['\na: What is quintillion?'],
                f: ["\nb: What is quadrillion?",
                    "\nc: What is googamillion?",
                    "\nd: What is hexmillion?"
                ]
            },
            correctAnswer: "b"

        },
        gaStuff300 = {
            divId: 11,
            category: "GA Stuff",
            value: 300,
            question: "These are the days TAs are available after class.",
            attempted: false,
            answers: {
                t: ['\na: What is Mon, Tue, Fri?'],
                f: ["\nb: What is Tue, Thur, Fri?",
                    "\nc: What is Wed, Thur, Fri?",
                    "\nd: What is Tue, Wed, Thur?"
                ]
            },
            correctAnswer: "d"
        },
        gaStuff300 = {
            divId: 12,
            category: "Potpourri",
            value: 300,
            question: "This late night TV host has a segment called carpool karaoke.",
            attempted: false,
            answers: {
                t: ['\na: Who is Jimmy Fallon?'],
                f: ["\nb: Who is James Cordon?",
                    "\nc: Who is Stephen Colbert?",
                    "\nd: Who is Jimmy Kimmel?"
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
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
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
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
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
                t: ['\na: This is the correct answer!'],
                f: ["\nb: This one is wrong.",
                    "\nc: Also wrong!",
                    "\nd: Nope not this one either!"
                ]
            },
            correctAnswer: "b"

        }]
    questions = {
        categories: [
            "Science",
            "Math",
            "GA Stuff",
            "Random"
        ]
        // values: [
        //     100,
        //     100,
        //     100,
        //     100,
        //     200,
        //     200,
        //     200,
        //     200,
        //     300,
        //     300,
        //     300,
        //     300,
        //     400,
        //     400,
        //     400,
        //     400
        // ]

    }
    var score = parseInt(0);

    $('button.new-game').on('click', function (evt) {
        evt.preventDefault();
        console.log('clicked');
        //adding category tiles and values
        for (let i = 0; i < questions.categories.length; i++) {
            $('.instructSection').remove();
            $('.main-grid').append("<div class = 'cat-tile'></div>");
            $('div.cat-tile').eq(i).text(questions.categories[i]);
        }
        //adding board tiles and values
        for (let i = 0; i < manyQuestions.length; i++) {
            $('.main-grid').append("<div class = divId " + i + "></div>");
            $('div.divId').eq(i).text(manyQuestions[i].value).on('click', function () {

                console.log("console log works");

                if (manyQuestions[i].attempted === false) {
                    // score = parseInt(0);
                    manyQuestions[i].attempted = true;
                    let response = prompt(manyQuestions[i].question + manyQuestions[i].answers.t + manyQuestions[i].answers.f);
                    if (response == manyQuestions[i].correctAnswer) {
                        alert("That's correct!!!");
                        console.log("Testing!!!!!!!!!!!!!!");
                        score += parseInt(manyQuestions[i].value);
                        ($('.scoreValue').text(score));
                        console.log(score);

                    } else {
                        alert("Ohhh... sorry!  That is not correct.");
                        score -= parseInt(manyQuestions[i].value);
                        $('.scoreValue').text(score);
                        console.log(score);

                    }
                    //win condition
                    if (score >= 1000) {
                        alert("You've won!");
                        location.reload();
                    }
                    // if ($('div.divId').eq(i).text() == ''){
                    //     alert("You lose!");
                    //     }
                    // var allTiles = $('div.divId').eq(0).html();
                    // console.log(allTiles);
                    // if ($('div.divId').eq(0).html() = "") {
                    //     console.log("you lose");
                    // }
                    //lose condition
                    if (score < -2000) {
                        alert("Sorry - you should try playing again.");
                        location.reload();

                    }

                    // //lose condition
                    // for (i =0; i < manyQuestions.length; i++) {}
                    // if ($('div.divId').eq(i).text().is(':empty')){;
                    // alert("You lose!")
                    // }

                    // if( $('#leftmenu').is(':empty') ) {



                }
                ($('div.divId').eq(i).text(""));
                if (manyQuestions[i].attempted === true) {
                    return;
                }

            }

            )
        }
    }
    )
}
)
