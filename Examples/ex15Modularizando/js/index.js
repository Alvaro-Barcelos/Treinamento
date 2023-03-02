import calculate from "./calculate.js"
import copyToClickBoard from "./copyToClickBoard.js"
import keyDown from "./keyDown.js"
import theme from "./theme.js"
import clear from "./clear.js"
import charKey from "./charKey.js"

const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
 
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", charKey)
})


document.getElementById('clear').addEventListener("click", clear)

input.addEventListener("keydown", keyDown)
 
document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copyToClickBoard) 

document.getElementById("themeSwitcher").addEventListener("click", theme)


