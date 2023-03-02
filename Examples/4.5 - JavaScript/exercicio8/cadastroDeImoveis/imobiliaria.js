
let option;
let imoveis = [];

do {
  option = prompt(
    `Bem vindo a imobiliaria!!\nImoveis cadastrados ${imoveis.length}\n1 - Deseja cadastrar um novo imovel?\n2 - Deseja mostrar todos os imoveis cadastrados\n3 - deseja sair do programa`
  );

  switch (option) {
    case "1":
        const newImovel = {};

        newImovel.propietario = prompt("Nome do proprietario:")
        newImovel.quartos = prompt("Quantidade de quartos: ")
        newImovel.banheiros = prompt("Quantidade de banheiros:")
        newImovel.garagem = prompt("Possui garagem: (sim/não)")

        const confirma = confirm(`Deseja salvar este imóvel?\nPropietario: ${newImovel.propietario}\nQuartos: ${newImovel.quartos}\nBanheiros: ${newImovel.banheiros}\nPossui garagem? ${newImovel.garagem}`)

        if (confirma){
            imoveis.push(newImovel)
            alert("Imóvel salvo com sucesso")
        }else{
            alert("Voltando ao menu")
        }

      break
    case "2":
        for(let i = 0; i < imoveis.length;i++)
            alert("Imóvel " + (i + 1) +
            `\nPropietário: ${imoveis[i].propietario}` +
            `\nQuartos: ${imoveis[i].quartos}` +
            `\nBanheiros: ${imoveis[i].banheiros}` +
            `\nPossui garagem?: ${imoveis[i].garagem}` )
      break
    case "3":
        alert("Encerrando programa!")
      break
    default:
        alert("Insira uma opção correta!")
  }
} while (option !== "3");
