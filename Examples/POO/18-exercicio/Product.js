class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
        
    }
    
    addStock(quantity){
        this.inStock += quantity
    }
    calculateDiscout(discount){
        this.price = Math.floor(this.price * ((100 - discount) / 100))
        return this.price
    }
}

const banana = new Product("banana", "banana caturra", 20)

console.log(banana)
banana.addStock(10)

console.log(banana.calculateDiscout(50))