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
let inputBox = document.querySelectorAll('input[type="text"]');
let maxActiveButtons = 5;
let selectedValues= [];

selectedButtons.forEach(button => {
    button.addEventListener('click', () => {
        let activeButtons = document.querySelectorAll('#fifty-buttons button.active');
        if (activeButtons.length === maxActiveButtons) {
            return;
        }
        if (selectedValues.includes(button.textContent)){
            return;
        }
        button.classList.add('active');
        button.style.backgroundColor= "yellow";
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

/**Create Cheack answer function
 * compare random number value with isers-input
 * make the function work afre the user clicks on the button
 */

