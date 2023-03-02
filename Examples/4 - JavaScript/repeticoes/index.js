let nave = prompt("Qual o nome da nave? ")
let invertedName = ""

for (let c = nave.length - 1; c >= 0; c--){
    if (nave[c] == 'e'){
        break
    }
    invertedName += nave[c] 
}

alert(`Nave:${nave} \n\nNome invertido:${invertedName}`)