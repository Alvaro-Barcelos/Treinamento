const baralho = []
let chosen 

do{
    chosen = prompt(`Cartas no baralho ${baralho.length}\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair do game`)

    switch(chosen){
        case "1":
            const adicionarCarta = prompt("Informe a carta que deseja adicionar:")
            baralho.push(adicionarCarta)
            break
        case "2":
            const removerCarta = baralho.shift()
            if(!removerCarta){
                alert("Não há nenhuma carta no baralho")
            }else{
                alert(`Você puxou um(a) ${removerCarta}`)
            }
            break
        case "3":
            alert("Encerrando o game.")
            break
        default:
            alert("Selecione uma opção valida")
    }

}while(chosen != 3)