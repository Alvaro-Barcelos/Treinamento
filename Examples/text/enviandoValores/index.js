function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.password.value

    if (password === passwordConfirmation){
        alert(`Usuário ${username} registrado`)
    } else {
        alert("As senhas não conferem!")
    }
    
    console.log({username, password, passwordConfirmation})
}