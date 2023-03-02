let chosen 
let fila = []



do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    chosen = prompt("Consultorio medico\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Sair do consultorio")

    switch(chosen){
        case "1":
            const novoPaciente = prompt("Qual é o nome do novo paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if(pacienteConsultado){//Se tiver paciente!!
                alert(`${pacienteConsultado} foi removido da lista de espera`)
            }else{
                alert("Não há pacientes na fila")
            }
            break
        case "3":
            alert("Saindo do consultorio")
            break
        case "4":
            
        default:
            alert("Selecione uma opção correta.")
    }

}while(chosen != 4)