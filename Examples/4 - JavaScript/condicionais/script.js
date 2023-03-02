let pilot = prompt("Informe o nome do piloto: ");

let velocidade = 0;

let velocidadeDesired = prompt(`Digite a velocidade desejada, ${pilot}.`);

let velocidadeConfirmation = confirm(`Comfirmação de velocidade!!! \n\nVelocidade desejada: ${velocidadeDesired}Km.`);

if (velocidadeConfirmation){
    velocity = velocidadeDesired
}

if (velocidadeDesired < 0) {
    alert("A nave esta parada. Considere partir e aumentar a velocidade")
}
else if (velocidadeDesired < 40){
    alert("Você está devagar, Podemos aumentar mais.")
}
else if (velocidadeDesired >= 40 && velocidadeDesired < 80){
    alert("Parece uma velocidade boa para manter")
}
else if (velocidadeDesired >= 80 && velocidadeDesired < 100){
    alert("Velocidade alta. Considere diminuir")
}
else if (velocidadeDesired >= 100){
    alert("Velocidade perigosa. Controle automático forçado")
    velocidadeDesired = 70
}

alert(`Piloto: ${pilot} \nVelocidade da nave:${velocidadeDesired}Km`)