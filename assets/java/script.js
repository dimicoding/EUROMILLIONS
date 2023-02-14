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