

/*Create 50 buttons for html*/
let fiftyButtons= document.getElementById("fifty-buttons");

for (i = 1; i <= 50; i++){
    let button= document.createElement("button");
    button.textContent= i;
    fiftyButtons.appendChild(button);
}

/*Create 12 buttons for html*/
let twelveButtons= document.getElementById("twelve-buttons");

for (i = 1; i <= 12; i++){
    let button= document.createElement("button");
    button.textContent= i;
    twelveButtons.appendChild(button);
}

/*Make Buttons change colors when clicked*/

let color= fiftyButtons.children;
let colorTwo= twelveButtons.children;

function boxClicked(){
if (this.style.backgroundColor === "yellow") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = "yellow";
    }
}
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', boxClicked);
}
for (let i = 0; i < colorTwo.length; i++) {
    colorTwo[i].addEventListener('click', boxClicked);
}
