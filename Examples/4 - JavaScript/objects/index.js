let mySpaceship = {
    velocity: 0,
    speedUp(acceleration){
        acceleration = Number(prompt("Quanto você deseja acelerar?"))
        this.velocity += acceleration  
        if(mySpaceship.velocity > mySpaceship.maxVelocity){
            alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nVELOCIDADE MÁXIMA:${mySpaceship.maxVelocity}\nSUA VELOCIDADE: ${mySpaceship.velocity}`)
        }
    },
    stop(){
        alert(`Parando espaçonave\nNome da nave: ${mySpaceship.name}\nTipo da nave: ${mySpaceship.type}\nVelocidade máxima da nave: ${mySpaceship.maxVelocity}\nSua velocidade: ${mySpaceship.velocity}`)
    }
}

function register(){
    mySpaceship.name = prompt("Qual o nome da nave?")
    mySpaceship.type = prompt("Qual o tipo da nave? ")
    mySpaceship.maxVelocity = prompt("Qual a velocidade maxima da nave? ")
    
}




function showMenu(){
    let chosenOption
    do{
        chosenOption = prompt(`O que você deseja?\n1 - Acelerar \n2 - Parar`)
        switch(chosenOption){
            case "1":
                mySpaceship.speedUp()
                break
            case "2":
                mySpaceship.stop()
                break
            default:
                alert("OPÇÃO INVALIDA!")
        }
    }while(chosenOption != 2)
}

register()
showMenu() 
