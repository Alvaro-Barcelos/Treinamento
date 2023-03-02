let nameOld = prompt("Informe o nome da pessoa mais velha: ");
let ageOld = prompt("Informe a idade da pessoa mais velha: ");

let nameYoung = prompt("Informe o nome da pessoa mais nova: ");
let ageYoung = prompt("Informe a idade da pessoa mais nova: ");

let ageDifference = (ageOld - ageYoung);

alert(`Pessoa mais velha: ${nameOld}, ${ageOld} anos. \nPessoa mais nova: ${nameYoung}, ${ageYoung} anos. \nDiferença de Idade: ${ageDifference}`)