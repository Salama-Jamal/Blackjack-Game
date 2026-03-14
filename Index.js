let firstCard = 6;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false
let isAlive = true
let message = ""


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new Card! ";
    } else if (sum === 21) {
        message = "You've got blackjack! "
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    document.getElementById("cars-number").textContent = ` Cards: ${firstCard}  ${secondCard}`
    document.getElementById("result-btn").textContent = `Sum: ${sum}`
    document.querySelector("#ask-to-paly").textContent = message


}


function newCard() {
    let card = 7;
    sum += sum
    startGame()
}




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


// console.log(4 === 3)  // false 
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false 
// console.log(3 < 0)    // false
// console.log(3 >= 3)   //  true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   //false