const charNameOne = prompt("Informe o nickname do mago de ataque?")
const charAtkOne = prompt("--- Mago de ataque --- \nQual o poder de ataque: ")

const charNameTwo = prompt("Informe o nickname do mago de defesa?")
const charDefesaTwo = prompt("Informe quantos pontos de defesa vocÊ tem ")
let charHealthTwo = prompt("--- Mago de defesa --- \nQuantos pontos de vida: ")
const shield = confirm("Informe se tem escudo:")

if (charAtkOne > charDefesaTwo && shield === false){
    let damage = charAtkOne - charDefesaTwo
    alert(`Mago de ataque -${charNameOne} X Mago de defesa ${charNameTwo}\nAtaque${charAtkOne}\nDefesa${charDefesaTwo}\nDano Causado ${damage}`)
}
else if (charAtkOne > charDefesaTwo && shield === true){
    const damage = (charAtkOne - charDefesaTwo) / 2
    alert(`Mago de ataque -${charNameOne} X Mago de defesa ${charNameTwo}\nAtaque${charAtkOne}\nDefesa${charDefesaTwo}\nDano Causado ${damage}`)
} else if (charAtkOne <= charDefesaTwo){
    alert("Dano zerado!")
}