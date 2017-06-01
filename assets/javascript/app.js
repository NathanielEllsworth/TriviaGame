//Variables of question answers and number of questions (global)

var questionsArray;

// **ask if question.length is needed to avoid hard coding question array length**

$(document).ready(function () {



// make array of questions with attributes that resemble JSON pretty print data

 /**   questionsArray = [

        {
            question1: 'What do you call a group of owls?',
            answers: 'a flock', 'a school', 'a parliament', 'a group',
            correctAnswer: 'a parliament'
        },
        {
            question2: 'On average, how many spiders populate one acre of green area?',
            answers: '2,000', '50', '300', '50,000',
            correctAnswer: '50,000',
        },
        {
            question3: 'How long can an Alligator live for?',
            answers: '25 years', '250 years', '100 years', '50 years',
            correctAnswer: '100 years'
        },
        {
            question4: 'How far can an Elephant smell water?',
            answers: '1 mile', '2 miles', '3 miles', '4 miles',
            correctAnswer: '3 miles',
        },
        {
            question5: 'How much of our DNA do we share with a slug?',
            answers: '70%', '99%', '20%', '30%',
            correctAnswer: '70%',
        },
        {
            question6: 'What is the average heart beat of a whale?',
            answers: '9 times per minute', '60 times per minute', '12 times per minute', '30 times per minute',
            correctAnswer: '9 times per minute',
        },
        {
            question7: 'How much can a single elephant tooth weigh?',
            answers: '1 pound', '4 pounds', '9 pounds', '10 pounds',
            correctAnswer: '9 pounds',
        },
        {
            question8: 'How many eyes does a butterfly have?',
            answers: '2', '8', '12', '12,000',
            correctAnswer: '12,000',
        },
        {
            question9: 'Currently, what animal creates the loudest sound of any living creature?',
            answers: 'Lions', 'howler monkeys', 'Elephants', 'Blue Whales',
            correctAnswer: '12,000',
        },
        {
            question10: 'How many eggs does the average chicken lay per year?',
            answers: '360', '260', '160', '60',
            correctAnswer: '260',
        },
        {
            question11: 'Penguins can jump how many feet out of the water?',
            answers: '3', '6', '8', '10',
            correctAnswer: '6',
        },
        {
            question12: 'What animal is found on the Firefox logo?',
            answers: 'a panda', 'a fox', 'a wolf', 'a cat',
            correctAnswer: 'a panda',
        },
        {
            question13: 'Turkeys have a poor sense of smell, but an excellent sense of',
            answers: 'sight', 'taste', 'direction', 'humor',
            correctAnswer: 'taste',
        },
        {
            question14: 'What percent of pet owners sleep with their dogs?',
            answers: '79', '83', '88', '72',
            correctAnswer: '79',
        },
        {
            question15: 'What is the average lifespan of 75% of all wild birds?',
            answers: '6 months', '1 year', '3 years', '5 years',
            correctAnswer: '6 months',
        },
        {
            question16: 'The oldest recorded elephant lived for?',
            answers: '74 years', '88 years', '92 years', '82 years',
            correctAnswer: '82 years',
        },
        {
            question17: 'The oldest recorded elephant lived for?',
            answers: '74 years', '88 years', '92 years', '82 years',
            correctAnswer: '82 years',
        },
        {
            question18: "An adult lion's roar is so loud it can be herd from ____ miles away.",
            answers: '12', '2', '5', '7',
            correctAnswer: '5',
        },
        {
            question19: "A male gorilla can eat how many pounds of food a day?",
            answers: '5 pounds', '10 pounds', '20 pounds', '40 pounds',
            correctAnswer: '40 pounds',
        },
        {
            question20: "Ants are found throughout the world except in?",
            answers: 'Figii', 'New Zealand', 'Iceland', 'Russia',
            correctAnswer: 'Iceland',
        },

    ];


    var questionsRight = 0;

    var questionsWrong = 0;

    var questionsUnanswered = 0;

*/

    //Number counter
    var number = 20;

    // number counter 1.0 using a start/stop method

    var intervalId

    $("#Start").on("click", start);

    $("#Stop").on("click", stop);


    function start() {
        intervalId = setInterval(decrement, 1000);
    }

    // decrement function
    function decrement() {

        number--;

        $("#display-timer").html("<h2>" + number + "</h2>");


        if (number === 0) {

            stop();

            alert("Time is up!");
        }
    }


    // stop function
    function stop() {

        clearInterval(intervalId);
    }


    // Execute run function
    start();

// figure out timer situation, time is in ms so 1000 is 1 second so 20000 is 20 seconds

// use the same logic from psych project to tackle right / wrong answers
// if time runs out add it to an 'unanswered' questions list 


// add the buttons on click function: $('buttons').on("click", function(){});

// look at your codecadamey code 


// ask how to avoid nesting redundent if statements for each question. Don't overthink this.


});


// be nice to yourself today.
// I'm proud of you
// just keep swimming.