// let spaceshipName = prompt("Digite o nome da nave")

// let spaceshipVelocity = 0

// let chosenOption


// function showMenu() {
//     let option
//     while (option != "1" && option != "2" && option != "3" & option != "4") {
//         option = prompt("Oque deseja fazer?\n1- Acelerar a nave em 5km/s\n2- Desacelerar a nave em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa ")
//     }
//     return option
// } 


// function speedUp(velocity){
//     let newVelocity = velocity + 5
//     return newVelocity
// }

// function slowDown(velocity){
//     let newVelocity = velocity - 5
//     if (newVelocity < 0){
//         newVelocity = 0
//     }
//     return newVelocity 
// }

// function printSpaceshipBoardData(name, velocity){
//     alert(`Espaçonave: ${name}\nVelocidade: ${velocity}`)
// }





// do {
//     chosenOption = showMenu()
//     switch(chosenOption){
//         case "1":
//             spaceshipVelocity = speedUp(spaceshipVelocity)
//             break
//         case "2":
//             spaceshipVelocity = slowDown(spaceshipVelocity)
//             break
//         case "3":
//             printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
//             break
//         default:
//             alert("Encerrando o programa de bordo")
//     }
// }while(chosenOption != "4")



let naveName = prompt('Qual é o nome da nave? ')
let spaceshipVelocity = 0
let chosenOption

function showMenu(){
    let option
    while(option != '1' && option != '2' && option != '3' && option != '4' && option != '5'){
        option = prompt("Oque deseja fazer?\n1- Acelerar a nave em 5km/s\n2- Acelerar a nave em 20km/s\n3- Desacelerar a nave em 5km/s\n4- Imprimir dados de bordo\n5- Sair do programa ")
    }
    return option
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function speedUpExtra(velocity){
    let newVelocity = velocity + 20
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity - 5
    if (newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity){
    alert(`Espaçonave: ${name}\nVelocidade: ${velocity}`)
}

do{
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = speedUpExtra(spaceshipVelocity)
            break
        case "3":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "4":
            printSpaceshipBoardData(naveName, spaceshipVelocity)
            break
        default:
            alert("Encerrando o programa")
    }
} while (chosenOption != '5')