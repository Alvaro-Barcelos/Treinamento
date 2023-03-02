let naveVelocity = 150

function slowDown(velocity, printer){
    let deceleration = 20
    while(velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }
    alert("As comportas podem ser abertas")
}

let anotherfunction = slowDown(naveVelocity, velocity => {
    console.log(`Nova velocidade: ${velocity}`)
})

slowDown(naveVelocity, velocity => {
    console.log(`Nova velocidade: ${velocity}`)
})




