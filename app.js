let firstCard = 0;
let secondCard = 0;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// calling form HTML
let messageEl = document.querySelector(".messageEl");
let sumEl = document.querySelector(".sumEl");
let cardsEl = document.querySelector(".cardEl");
let newCardEl = document.querySelector(".newCardEl");
let startEl = document.querySelector(".startEl");
let replay = document.querySelector(".replay");
// start game
function startGame() {
  renderGame();
}
// render game function
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = `Cards: ${cards}`;
  if (sum < 21) {
    message = "Do you want a new card?🙄";
  } else if (sum === 21) {
    message = "You've got the black Jack🥳";

    hasBlackJack = true;
  } else {
    message = "You are out of the game😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}
// new card function
function newCard() {
  let randomNumber = Math.floor(Math.random() * 10);
  cards.push(randomNumber);
  sum += randomNumber;
  renderGame();
  cardsEl.textContent = `Cards: ${cards}`;
  sumEl.textContent = "Sum: " + sum;
  if (isAlive === false || hasBlackJack === true) {
    newCardEl.style.display = "none";
    startEl.style.display = "none";
    replay.style.display = "block";
  } else {
    return;
  }
}
