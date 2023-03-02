let nave = prompt("Informe o nome da nave:")
let nameTrade = prompt("Qual letra da nave deseja trocar? ")
let newNameTrade = prompt("Qual é o novo caracter que deseja colocar?")
let newName = ""

for (let c = 0; c < nave.length; c++){
    if (nave[c] == nameTrade){
        newName += newNameTrade
    }
    else{
        newName += nave[c]
    }
}
alert(newName)