const meter = prompt("Informe uma medida em metros: ")
const opcao = prompt(`Escolha uma unidade de medida! \n mm) milímitro \n cm) centímetro \n dm) decímetro \n dam) decâmetro \n hm) hectômetro \n km) quilômetro `)

const mm = meter * 1000
const cm = meter * 100
const dm = meter * 10
const dam =meter / 10
const hm = meter /100
const km = meter / 1000

switch(opcao){
    case "mm":
        alert(`Medida: ${mm}${opcao}`)
        break
    case "cm":
        alert(`Medida: ${cm}${opcao}`)
        break
    case "dm":
        alert(`Medida: ${dm}${opcao}`)
         break
    case "dam":
        alert(`Medida: ${dam}${opcao}`)
        break
    case "hm":
        alert(`Medida: ${hm}${opcao}`)
        break
    case "km":
        alert(`Medida: ${km}${opcao}`)
        break
    default:
        alert("ERROR, opção invalida")
}