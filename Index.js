let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new Card! 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got blackjack! 🥳");
} else {
    console.log("You're out of the game!😭")
}