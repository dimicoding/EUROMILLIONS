alert("Welcome to Euromillions!\nTo test your odds is very simple:\n *   Pick your 5 lucky numbers from 1-50;\n *   'Click' on the submit button;\n *   'Click' on retry to start over;\nDon't give up! You're almost a millionaire...");


/*Create 50 buttons for html*/
let fiftyButtons = document.getElementById("fifty-buttons");

for (let i = 1; i <= 50; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    fiftyButtons.appendChild(button);
}

/**display 5 buttons into 5input boxes
 *add event listeners
 * dont allow the same button to repeat
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
 * generate random numbers
 * without repeating on different input boxes
 */
let correctAnswer = document.querySelectorAll("#correct-answer input");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', function () {
    for (let i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].value = "";
    }

    let randomNumbers = [];
    while (randomNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    for (let i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].value = randomNumbers[i];
    }
});


/**Create Cheack answer function
 * compare random number value with isers-input
 * make the function work after the user clicks on the button
 */
function showCorrectAnswer() {
    let userAnswer = document.querySelectorAll('#user-input input');

    let correct = [];
    for (let i = 0; i < correctAnswer.length; i++) {
        correct.push(parseInt(correctAnswer[i].value));

    }

    let outcome = "";
    for (let i = 0; i < userAnswer.length; i++) {
        let selectedNumber = parseInt(userAnswer[i].value);

        if (selectedNumber === correct[i]) {
            outcome += '<input style="background-color: mediumseagreen" value="' + selectedNumber + '">';
            alert(`Congratulations! You've got the number ${selectedNumber} rigth!` );
        } else {
            outcome += '<input style="background-color: indianred" value="' + selectedNumber + '">';
        } 
    }
    document.getElementById("user-input").innerHTML = outcome;

    let userInputElement = document.getElementById("user-input");
    userInputElement.innerHTML = '';
    
    
    userInputElement.innerHTML += outcome;
}
submitButton.addEventListener('click', showCorrectAnswer);


//Add number of attempts for every trial to increment.
function incrementAttempts() {
    let numberAttempts = parseInt(document.getElementById("attempts").innerText);
    document.getElementById("attempts").innerText = ++oldScore;
}


let reset= document.getElementById("reset-button");
reset.addEventListener('click', function() {


    selectedButtons.forEach(button => {
        button.classList.remove("active");
        button.style.backgroundColor = "";
    });
    
    for (let i = 0; i < inputBox.length; i++) {
        inputBox[i].value = "";
        inputBox[i].style.backgroundColor = "";
        inputBox[i].disabled= false;
    }
    

    selectedValues = [];
    for (let i = 0; i < correctAnswer.length; i++) {
        correctAnswer[i].value = "";
        
    }
 
});



/*Create a countdown reverse clock "jackpot" updating every week */
let days = document.getElementById("day");
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");

let jackpot = new Date("2023-12-24").getTime();
let reverse = setInterval(() => {
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