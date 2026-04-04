
let firstCard = 1
let secondCard = 2
let sum = firstCard + secondCard
let message = "text message"


function startGame() {
    document.getElementById("cards-el").textContent += `${firstCard}  ${secondCard}`
    document.getElementById("sum-el").textContent += `${sum}`
    document.getElementById("message-el").textContent = message

}



function newCard() {
    let card = 3
    sum += card
    document.getElementById("cards-el").textContent += `  ${card}`
    document.getElementById("sum-el").textContent = `Sum: ${sum}`


}