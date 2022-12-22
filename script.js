let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function StartGame() {
    isAlive = true;
    sum = 0;
    document.getElementById("cards-ph").innerHTML = "";
    AddImg();
    AddImg();
    RenderGame();
}
function AddImg(){
    let randomNumber = Math.floor(Math.random() * 52) + 1;
    let cardImg = document.createElement('img');
    const card = cards[randomNumber][0];
    cardImg.src = `./images/${card}.png`;
    document.getElementById("cards-ph").appendChild(cardImg);
    sum += cards[randomNumber][1];
}

function RenderGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card? 😃";
    }
    else if(sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
    document.getElementById("sum-el").textContent = "Sum: " + sum;
}

function NewCard() {
    if(isAlive === true && hasBlackJack === false) {
        AddImg();
        RenderGame();
    }
}