let distanceLuz = prompt("Qual a distancia em anos-luz?")

let listOption = prompt("1 - Parsec(pc) \n2 - Unidade astronômica (AU) \n3 - Quilômetros(km)")

let converted

switch(listOption){
    case "1":
        converted = distanceLuz * 0.306601
        alert(`${converted} pc`)
        break;
    case "2":
        converted = distanceLuz * 63241.1
        alert(`${converted} AU`)
        break;
    case "3":
        converted = distanceLuz * (9,5 * Math.pow(10,12))
        alert(`${converted} km`)
        break;
    default:
        alert("Opção inexistente")
        break;
}

alert(`Distancia digitada em anos luz: ${distanceLuz}. \nOpção de conversão selecionada (${listOption}): ${converted}`);