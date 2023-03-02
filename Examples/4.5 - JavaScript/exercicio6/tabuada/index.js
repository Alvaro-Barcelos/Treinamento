let number = parseFloat(prompt("Informe o numero para ver sua tabuada: "))

for(let i = 0; i <= 20; i++){
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
}