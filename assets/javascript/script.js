/* Create 50 buttons for html */
let fiftyButtons = document.getElementById("fifty-buttons");

for (let i = 1; i <= 50; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    fiftyButtons.appendChild(button);
}

/** Display 5 buttons into 5 input boxes
 * Add event listeners
 * Don't allow the same button to repeat
 */
let selectedButtons = document.querySelectorAll('#fifty-buttons button');
let inputBox = document.getElementById('user-input').children;
let maxActiveButtons = 5;
let selectedValues = [];

selectedButtons.forEach(button => {
    button.addEventListener('click', () => {
        let activeButtons = document.querySelectorAll('#fifty-buttons button.active');
        if (activeButtons.length === maxActiveButtons) {
            return;
        }
        if (selectedValues.includes(button.textContent)) {
            return;
        }
        button.classList.add('active');
        button.style.backgroundColor = "Khaki";
        for (let i = 0; i < inputBox.length; i++) {
            if (inputBox[i].value === '') {
                inputBox[i].value = button.textContent;
                selectedValues.push(button.textContent);
                break;
            }
        }
    });
});


/**
 * Generate random numbers
 * Without repeating on different input boxes
 */
let correctAnswer = document.querySelectorAll("#correct-answer input");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', function () {
    let userAnswer = document.querySelectorAll('#user-input input');
    let allFilled = true;

    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i].value === '') {
            allFilled = false;
            alert("Please select a number.");
            break;
        }
    }

    if (allFilled) {
        // Rest of the code to generate random numbers
        for (let i = 0; i < correctAnswer.length; i++) {
            correctAnswer[i].value = "";
        }

        let randomNumbers = generateRandomNumbers(5, 50);
        for (let i = 0; i < correctAnswer.length; i++) {
            correctAnswer[i].value = randomNumbers[i];
        }

        showCorrectAnswer(randomNumbers);
        // Disable the submit button after checking the answer
        submitButton.disabled = true;
    }
});


/** Create Check answer function
 * Compare random number value with user's input
 * Make the function work after the user clicks on the button
 */
function showCorrectAnswer(randomNumbers) {
    let userAnswer = document.querySelectorAll('#user-input input');
    let allValid = true;

    let outcome = "";
    let correctGuesses = [];
    for (let i = 0; i < userAnswer.length; i++) {
        let selectedNumber = parseInt(userAnswer[i].value);

        if (isNaN(selectedNumber)) {
            allValid = false;
            outcome += '<input style="background-color: indianred" value="">';
            alert("Please enter numbers in all boxes.");
            continue;
        }

        if (randomNumbers.includes(selectedNumber)) {
            outcome += '<input style="background-color: mediumseagreen" value="' + selectedNumber + '">';
            alert(`Congratulations! You've got the number ${selectedNumber} right!`);
            correctGuesses.push(selectedNumber);
        } else {
            outcome += '<input style="background-color: indianred" value="' + selectedNumber + '">';
        }
    }

    // Clear user input if NaN encountered
    if (!allValid) {
        for (let i = 0; i < userAnswer.length; i++) {
            userAnswer[i].value = "";
        }
        document.getElementById("user-input").innerHTML = outcome;
        return;
    }

    document.getElementById("user-input").innerHTML = outcome;

    // Highlight correct guesses in green
    for (let i = 0; i < correctGuesses.length; i++) {
        for (let j = 0; j < userAnswer.length; j++) {
            let selectedNumber = parseInt(userAnswer[j].value);
            if (selectedNumber === correctGuesses[i]) {
                userAnswer[j].style.backgroundColor = "mediumseagreen";
            }
        }
    }
}

let reset = document.getElementById("reset-button");
reset.addEventListener('click', function () {
    selectedButtons.forEach(button => {
        button.classList.remove("active");
        button.style.backgroundColor = "";
    });

    for (let i = 0; i < inputBox.length; i++) {
        inputBox[i].value = "";
        inputBox[i].style.backgroundColor = "";
        inputBox[i].disabled = false;
    }

    selectedValues = [];
    for (let i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].value = "";
    }

    // Enable the submit button after resetting the game
    submitButton.disabled = false;
});

function generateRandomNumbers(count, max) {
    let randomNumbers = [];
    while (randomNumbers.length < count) {
        let randomNumber = Math.floor(Math.random() * max) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}




/* Create a countdown reverse clock "jackpot" updating every week */
let days = document.getElementById("day");
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");

let jackpot = new Date("2023-12-24").getTime();
setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = jackpot - now;

    if (timeLeft < 0) {
        jackpot.setFullYear(jackpot.getFullYear() + 1);
        timeLeft = jackpot - now;
    }
    let day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.value = day + " d";
    hours.value = hour + " hrs";
    minutes.value = minute + " min";
    seconds.value = second + " sec";
}, 1000);