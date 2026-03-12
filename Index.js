let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false
let isAlive = true
if (sum <= 20) {
    console.log("Do you want to draw a new Card! 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got blackjack! 🥳");
    hasBlackjack = true
} else {
    console.log("You're out of the game!😭")
    isAlive = false;
}

console.log(hasBlackjack)
console.log(isAlive)

// let hasDiscountCode = true;

// function processOrder() {
//     if (hasDiscountCode) {
//         console.log(" Discount applied to order food ")
//         hasDiscountCode = false;
//     } else {
//         console.log("Discount not applied!")
//     }
// }
// processOrder()
// processOrder()
