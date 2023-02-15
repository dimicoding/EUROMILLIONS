/*Create 50 buttons for html*/
let fiftyButtons = document.getElementById("fifty-buttons");

for (let i = 1; i <= 50; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    fiftyButtons.appendChild(button);

    let clicks = 0;
    button.addEventListener("click", function () {
        clicks++;

        if (clicks >= 5) {
            button.disabled = true;
        }
    });
}

/**display 5 buttons into 5input boxes
 *
 * 
 */
let selectedButtons = document.querySelectorAll('#fifty-buttons button');
let inputBox = document.querySelectorAll('input[type="text"]');
let maxActiveButtons = 5;

selectedButtons.forEach(button => {
    button.addEventListener('click', () => {

        let activeButtons = document.querySelectorAll('#fifty-buttons button.active');
        if (activeButtons.length === maxActiveButtons) {
            return;
        }
        button.classList.add('active');
        for (let i = 0; i < inputBox.length; i++) {
            if (inputBox[i].value === '') {
                inputBox[i].value = button.textContent;
                break;
            }
        }

    });
});
/**
 * generate random numbers
 * without repeating on different input boxes
 */
let correctAnswer= document.querySelectorAll("#correct-answer input");
let randomNumbers= [];

while (randomNumbers.length < 5){
    let randomNumber= Math.floor(Math.random() *50) +1;
    if (!randomNumbers.includes(randomNumber)){
        randomNumbers.push(randomNumber);
    }
} 
for (let i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].value = randomNumbers[i];
  }










/** 
for (i = 1; i <= 50; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    let clicks = 0;

    button.addEventListener('click', function () {
        clicks++;

        if (clicks >= 5) {
            button.disabled = true;
        }
    });
    fiftyButtons.appendChild(button);
}*/
/**
 * limit 50buttons to a max of 5clicks
 * 
 * let pickFiveFifty= document.querySelectorAll("#fifty-buttons button");
pickFiveFifty.forEach((button) => {
    let clicks= 0;
    button.addEventListener("click", function(){
        clicks++;
        if(clicks >=5){
            pickFiveFifty.disabled= true;
        }
    });
});
 * 
 */







/*Create 12 buttons for html*/
let twelveButtons = document.getElementById("twelve-buttons");

for (i = 1; i <= 12; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    twelveButtons.appendChild(button);
};

/*Make Buttons change colors when clicked*/

let color = fiftyButtons.children;
let colorTwo = twelveButtons.children;

function boxClicked() {
    if (this.style.backgroundColor === "yellow") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = "yellow";
    }
}
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', boxClicked);
    let = clicks = 0;
    if (clicks >= 5) {
        color.disabled = true;
    }



}
for (let i = 0; i < colorTwo.length; i++) {
    colorTwo[i].addEventListener('click', boxClicked);
}