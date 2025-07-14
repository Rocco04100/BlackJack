const question = document.querySelector("#question");
const startBtn = document.querySelector("#start");
const hitBtn = document.querySelector("#hitBtn");
const standBtn = document.querySelector("#standBtn");
const playerHandE = document.querySelector("#playerHand");
const dealerHandE = document.querySelector("#dealerHand");
let deck = [
  2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8,
  8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11,
  11,
];
let dealerHand = [];
let playerHand = [];
startBtn.addEventListener("click", game);
hitBtn.addEventListener("click", () => {
  hit(playerHand, playerHandE);
  playerCount = playerHand.reduce((sum, card) => sum + card, 0);
  if (playerCount > 21) {
    gameOver();
    question.textContent = `YOU BUSTED`;
  }
});
standBtn.addEventListener("click", () => {
  gameOver();
  dealerCount = dealerHand.reduce((sum, card) => sum + card, 0);
  while (dealerCount < 17) {
    hit(dealerHand, dealerHandE);
    dealerCount = dealerHand.reduce((sum, card) => sum + card, 0);
  }
  playerCount = playerHand.reduce((sum, card) => sum + card, 0);
  if (dealerCount > 21) {
    question.textContent = `DEALER BUST YOU WIN!`;
  } else if (dealerCount > playerCount) {
    question.textContent = `YOU LOSE`;
  } else if ((playerCount = dealerCount)) {
    question.textContent = `ITS A TIE`;
  } else {
    question.textContent = `YOU WIN`;
  }
});
hitBtn.disabled = true;
standBtn.disabled = true;
function hit(hand = [], element) {
  let randomCard = Math.floor(Math.random() * deck.length);
  hand.push(deck[randomCard]);
  deck.splice(randomCard, 1);
  element.textContent = `${hand.join(", ")}`;
}
function gameOver() {
  hitBtn.disabled = true;
  standBtn.disabled = true;
}
function game() {
  hitBtn.disabled = false;
  standBtn.disabled = false;
  let playerCount = 0;
  let dealerCount = 0;
  deck = [
    2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8,
    8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11,
    11, 11,
  ];
  dealerHand = [];
  playerHand = [];

  hit(dealerHand, dealerHandE);
  hit(playerHand, playerHandE);
  question.textContent =  "Hit or Stand"
  question.style.color = "red";
  question.style.fontWeight = "900";
  question.style.fontSize = "120px";
  

}
