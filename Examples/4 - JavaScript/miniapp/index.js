
let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Tempo de vôo: ${secondsOfDeparture} segundos`)
    
} else if(chosenOption == "2") {
    let minOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de voô: " + minOfDeparture + " Minutos")
} else if(chosenOption == "3") {
    let hourOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de voô: " + hourOfDeparture + " Horas") 
} else if(chosenOption == "4") {
    let dayOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de voô: " + dayOfDeparture + " Dias")
} else {
    alert("Opção invalida")

}