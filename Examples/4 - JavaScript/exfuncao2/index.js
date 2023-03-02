let naveVelocity = 150

function speedDown(velocity, printer){
    let deceleration = 20
    
    while(velocity > 0 ){
        printer(velocity)
        velocity -= deceleration
    }
    alert('Nave parada. As comportas podem ser abertas')
}

speedDown(naveVelocity, function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
})