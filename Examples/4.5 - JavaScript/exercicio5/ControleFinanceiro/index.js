let dinheiro = parseFloat(prompt("Qual a quantidade de dinheiro: ")) 
let quantidadeColocar
let quantidadeRetirar
let choice
do {
    choice = prompt(`Saldo disponivel: R$ ${dinheiro}\nOpção 1: Adicionar dinheiro \nOpção 2: Retirar dinheiro \nOpção 3: Sair do programa`)

    switch(choice){
        case "1":
            quantidadeColocar = parseFloat(prompt("Quantidade que deseja adicionar:"))
            dinheiro += quantidadeColocar
            alert(`Saldo: R$ ${dinheiro}`)
            break
        case "2":
            quantidadeRetirar = parseFloat(prompt("Quantidade que deseja retirar:"))
            if(dinheiro < quantidadeRetirar){
                alert("Saldo insuficiente!!")
            }
            else{
                dinheiro -= quantidadeRetirar
            }
            alert(`Saldo: R$ ${dinheiro}`)
            break
        case "3":
            alert("Encerrando programa!")
            alert(`Saldo: R$ ${dinheiro}`)
            break
        default:
            alert("opção invalida!!")
            
    }
} while (choice !== "3");