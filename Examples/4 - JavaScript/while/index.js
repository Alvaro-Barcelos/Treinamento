let nameNave = prompt("Qual é o nome da nave?")

let chosenOption = confirm("Deseja realizar a proxima dobra?")

let fold = 0

while(chosenOption === true){
    chosenOption = confirm("Deseja Realizar a proxima dobra?")
    fold++  
}

alert(`Nave: ${nameNave} \nNumero de dobras realizadas: ${fold}`)
    
