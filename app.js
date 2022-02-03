let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
// calling form HTML
let messageEl = document.querySelector(".messageEl");
let sumEl = document.querySelector(".sumEl");
let cardsEl = document.querySelector(".cardEl");
let newCardEl = document.querySelector(".newCardEl");
let startEl = document.querySelector(".startEl");
let replay = document.querySelector(".replay");
let playerEl = document.querySelector(".player_el");
// object
let player = {
  name: "Rahique",
  chips: 200,
};
// paler details
playerEl.textContent = `${player.name} : $${player.chips}`;
// start game
function startGame() {
  if (isAlive === true || hasBlackJack === false) {
    let firstCard = random();
    let secondCard = random();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
  }
  isAlive = true;
}
// random number function
function random() {
  let random = Math.floor(Math.random() * 10) + 1;
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  }
  return random;
}
// render game function
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = `Cards: ${cards}`;
  if (sum < 21) {
    message = "Do you want a new card?🙄";
    isAlive = true;
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
  if (isAlive === true && hasBlackJack === false) {
    let randomNumber = random();
    cards.push(randomNumber);
    sum += randomNumber;
    cardsEl.textContent = `Cards: ${cards}`;
    sumEl.textContent = "Sum: " + sum;
    renderGame();
  }
  if (isAlive === false || hasBlackJack === true) {
    newCardEl.style.display = "none";
    startEl.style.display = "none";
    replay.style.display = "block";
  } else {
    return;
  }
}
// let castle = {
//   name: "Prime Castle",
//   isAvailable: true,
//   price: 500,
//   feature: ["Good", "Cozy", "Grand"],
// };
// console.log(castle.name, castle.feature);
