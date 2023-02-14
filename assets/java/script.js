/*Create 50 buttons for html*/
let fiftyButtons= document.getElementById("fifty-buttons");

for (i = 1; i <= 50; i++){
    let button= document.createElement("button");
    button.textContent= i;
    fiftyButtons.appendChild(button);
}

