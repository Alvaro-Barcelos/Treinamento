class mySpaceship  {
    constructor(nameNave, crewQuantity){
        this.name = nameNave
        this.crew = crewQuantity
        this.engated = false
        this.doors = false
    }

    hitchShip(){
        this.engated = true
        this.doors = true 
        }
}

function createSpaceship(){
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes: ")
    let spaceship = new mySpaceship(spaceshipName,crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipLists = ""
    spaceships.forEach((spaceship,index) => {
        spaceshipLists += (`${index + 1} - ${spaceship.name} (${spaceship.crew} tripulantes)\n`)
    })
    alert(spaceshipLists)
}



var hitcheSpaceships = []

function showMenu(){ 
    let option
    do{
        option = prompt("Selecione uma das opções \n1 - Realizar engate \n2 - Mostrar as naves \n3 - sair do programa")
        
        switch (option){
            case "1":
                let spaceshipAdd = createSpaceship()
                spaceshipAdd.hitchShip()
                hitcheSpaceships.push(spaceshipAdd)
                break
            case "2":
                printSpaceshipList(hitcheSpaceships)
                break
            case "3":
                alert("Encerrando programa")
                break
            default:
                alert("Opção invalida")
        }
    }while(option != 3)
}

showMenu()
