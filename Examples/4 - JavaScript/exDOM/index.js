function addCasa (){
    let numero = document.querySelector("#numero").value
    let bairro = document.querySelector("#bairro").value
    let cidade = document.querySelector("#cidade").value
    let areaCasa = document.querySelector("#areaCasa").value

    let newListValue = document.createElement("li")
    newListValue.innerHTML = `${areaCasa} m², numero ${numero}, (${bairro} - ${cidade})`

    
    let rmbutton = document.createElement('button')
    rmbutton.type = "button"
    rmbutton.innerText = "Remover"
    rmbutton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(rmbutton)
    document.getElementById("house-list").appendChild(newListValue)
}

function removerCasa(button){
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}
