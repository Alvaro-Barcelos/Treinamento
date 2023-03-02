let names = prompt("Informe seu nome, viajante:")
let visited = confirm("Se ja visitou uma cidade, aperte em confirmar, caso não tenha, aperte em cancelar.")
let citys = " "
let contagem = 0

while(visited === true){
    let city = prompt(" Informe o nome da cidade: ")
    citys += ` -  ${city} \n`
    contagem += 1
    visited = confirm("Se ja visitou outra cidade, aperte em confirmar, caso não tenha, aperte em cancelar.")
    
}

alert(`Nome do viajante: ${names + " "} \n${contagem} cidades visitadas. \nCidades visitadas:\n${citys}`)