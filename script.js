let score = 0
let scorePerClick = 1
let price = 100

const element = document.getElementById("displayer")
const element2 = document.getElementById("SPCdisplay")
const element3 = document.getElementById("button")

function addScore() {
    score = score + scorePerClick
    element.innerHTML=score
}

function SpcDisplay() {
    element2.innerHTML = "more score per click " + "(" + scorePerClick + ")"
    element3.innerHTML = "Buy for " + price + "C"
}

function buySpc() {
    if (score >= price) {
        score = score - price
        price = price + 150
        scorePerClick = scorePerClick + 1
    }
    SpcDisplay()
    element.innerHTML=score
}

SpcDisplay()