const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias",10 ,true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewNine = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] >= 9
}).map(spaceship =>{
    return spaceship[0]
})


let firtsPosPendent = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false 
})


let upperCasedSpaceships = hitchedSpaceships.map(currentSpaceships => {
    return currentSpaceships[0].toUpperCase()
})



let message = `Espaçonaves com mais de 9 tripulantes ${crewNine.join(", ")}
\nPlataforma com processo de engate: ${firtsPosPendent + 1} 
\nEspaçonaves destacadas ${upperCasedSpaceships}`

alert(message)