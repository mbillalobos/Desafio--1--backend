//Se crea la clase ProductManager

class ProductManager {

    //Constructor con elemento products el cual es un arreglo vacío
    constructor(){
        this.products = [];
    }

    //Propiedad estática para poder crear un ID autoincrementable
    static ultimoId = 0;

    //Metodo addProduct para agregar productos al arreglo inicial
    addProduct(title, description, price, thumbnail, code, stock){

        //Validación para que todos los campos sean obligatorios
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos tienen que estar completos para crear el producto.");
            return; 
        }

        //Validación para que no se repita el campo "code"
        if(this.products.some(producto => producto.code === code)){
            console.log("El código de producto indicado ya está registrado.");
            return;
        }

        //Se crea el objeto
        const newProduct = {
            id: ++ProductManager.ultimoId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        //Se pushea el objeto para agregar las propiedades del producto al arreglo de productos inicial
        this.products.push(newProduct);

    }

    //Metodo getProducts para devolver el arreglo con todos los productos creados hasta el momento
    getProducts(){
        return  this.products;
    }

    //Metodo getProductById para buscar en el arreglo el producto que coincida con el ID
    getProductById(id){
        const product = this.products.find(producto => producto.id === id)

        //Validación para que muestre error si no coincide ningún ID con la búsqueda
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

manager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

manager.getProductById(1);
manager.getProductById(3);
