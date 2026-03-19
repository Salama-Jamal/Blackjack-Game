let cads = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}
function randomCard() {
    document.getElementById("cards-el").textContent = " Cards: "
    for (let i = 0; i < cads.length; i++) {
        document.getElementById("cards-el").textContent = cads[i]
    }
    document.getElementById("sum-el").textContent = "Sum: "
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message

}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [
        firstCard,
        secondCard
    ]
    sum = firstCard + secondCard

    renderGame()

}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    startGame()
}














