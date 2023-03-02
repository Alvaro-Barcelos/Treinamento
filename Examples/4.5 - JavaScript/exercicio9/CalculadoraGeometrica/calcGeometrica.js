let option 
function showMenu(){
    return prompt("Calculadora Geometrica\n\nEscolha uma das opções a seguir:\n1 - área do triangulo\n2 - área do retângulo\n3 - área do quadrado\n4 - área do trapézio\n5 - área do círculo\n6 - sair da calculadora")

}

function executar(){
    let option = ""

    do {
        option = showMenu()
        let resultado
        switch(option){
            case"1":
                resultado = areaTriangulo();
                break
            case"2":
                resultado = areaRetangulo()
                break
            case"3":
                resultado = areaquadrado()
                break
            case"4":
                resultado = areatrapezio()
                break
            case"5":
                resultado = circulo()
                break
            case"6":
                alert("Saindo da calculadora!")
                break
            default:
                alert("selecione uma opção que seja valida")
        }
        if(resultado){
            alert(`resultado: ${resultado}`)
        }
    } while( option !== "6")
}

function areaTriangulo(){
    let base = parseFloat(prompt("Informe a base:"))
    let altura = parseFloat(prompt("Informe a altura:"))
    let areaTriangulo = base * altura / 2
    return areaTriangulo 
}

function areaRetangulo(){
    let base = parseFloat(prompt("Informe a base:"))
    let altura = parseFloat(prompt("Informe a altura:"))
    let areaRetangulo = base * altura
    return areaRetangulo 
}

function areaquadrado(){
    let lado = parseFloat(prompt("Informe a medida do lado:"))
    let areaQuadrado = lado * lado 
    return areaQuadrado
} 

function areatrapezio(){
    let baseMaior = parseFloat(prompt("Informe a base maior:"))
    let baseMenor = parseFloat(prompt("Informe a base menor:"))
    let altura = parseFloat(prompt("Informe a altura:"))
    let areaTrapezio = (baseMaior + baseMenor) * altura / 2
    return areaTrapezio
}

function circulo(){
    let pi = 3.14
    let raio = parseFloat(prompt("Informe o raio:"))
    let circulo = pi * Math.pow(raio, 2)
    return circulo
}

executar()