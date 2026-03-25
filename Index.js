let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""




console.log(cards)

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
console.log(getRandomCard())

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbers between 1 and 11 and store them in variables firstCard and secondCard
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}
console.log(startGame())

function renderGame() {
    document.getElementById("cards-el").textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-el").textContent += cards[i] + " "
    }

    document.getElementById("sum-el").textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message
}
console.log(renderGame())


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
console.log(newCard())
