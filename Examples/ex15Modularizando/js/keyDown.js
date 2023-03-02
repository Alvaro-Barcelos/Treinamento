/*Apertar apenas teclas validas utilizando o keydown
(tecla apertada basicamente) criando uma função com um if de validação com 
"if (allowedKeys.teclas inclusas), ev.key(tecla apertada) estiver inclusa. faça" input.value += ev.key return*/
export default function (ev) {
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
  }