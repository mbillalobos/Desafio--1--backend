class ProductManager {
    constructor(){
        this.products = [];
    }

    static ultimoId = 0;

    addProduct(title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos tienen que estar completos para crear el producto.");
            return; 
        }

        if(this.products.some(producto => producto.code === code)){
            console.log("El código de producto indicado ya está registrado.");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultimoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(newProduct);

    }

    getProducts(){
        return  this.products;
    }

    getProductById(id){
        const product = this.products.find(producto => producto.id === id)

        if(!product){
            console.error("Not Found.")
        } else {
            console.log(product);
        }
    }
}

//Proceso de Testing:

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(manager.getProducts());

manager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc1243", 25);

manager.getProductById(0);
