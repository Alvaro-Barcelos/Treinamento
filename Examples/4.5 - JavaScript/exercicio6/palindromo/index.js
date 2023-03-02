const palavra = prompt("Informe uma palavra: ")
let palavraInvertida = ""

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
    alert(`${palavra} é um palindromo`)
} else {
    alert(`${palavra} e ${palavraInvertida} não são uma palindromo`)
}