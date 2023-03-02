class User{
    constructor(fullname, email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if(this.email === email && password === this.password){
            console.log('Login bem sucedido')
        }else{
            console.log('email e password errados.')
        }
    }
}

const alvaro = new User("Álvaro Barcelos Passalio Avelar", "alvaro@gmail.com", "123")

console.log(alvaro)
alvaro.login("alvaro@gmail.com","123")