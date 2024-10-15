class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = [];
        this.description = description;
    }

    // Método getters y setters
    get getSupplier() {
        return this._supplier;
    }

    set setSupplier(newName) {
        this._supplier = newName;
    }

    sellUnits(units) {
        if(this.stock >= units) {
            this.stock = this.stock - units;
        }else{
            console.log(`Solo existen ${this.stock} unidades de stock, no es posible realizar la compra`);
        }
	}

}

const prod1 = new Product("1234aaa", "Iphone 14", 4000, 12, "https://oechsle.vteximg.com.br/arquivos/ids/17874187-1500-1500/image-a14b5570f2db42eb94c6c2a64595e7e6.jpg?v=638489010898130000", false, [black, blue], "Description del primer producto");
const prod2 = new Product("1234aaa", "Iphone 14", 4000, 12, "https://oechsle.vteximg.com.br/arquivos/ids/17874187-1500-1500/image-a14b5570f2db42eb94c6c2a64595e7e6.jpg?v=638489010898130000", false, [black, blue], "Description del segundo producto");
const prod3 = new Product("1234aaa", "Iphone 15", 4000, 12, "https://oechsle.vteximg.com.br/arquivos/ids/17874187-1500-1500/image-a14b5570f2db42eb94c6c2a64595e7e6.jpg?v=638489010898130000", false, [black, blue], "Description del tercer producto");
const prod4 = new Product("1234aaa", "Iphone 15", 4000, 12, "https://oechsle.vteximg.com.br/arquivos/ids/17874187-1500-1500/image-a14b5570f2db42eb94c6c2a64595e7e6.jpg?v=638489010898130000", false, [black, blue], "Description del cuarto producto");

const products = [prod1, prod2, prod3, prod4];


// Agregamos dos elementos al array
products.unshift(prod5); // agregando un elemento al inicio del array
products.push(prod6); // agregando un elemendo al final del array

console.log(products);

// Eliminar elementos del array
products.shift();
products.pop();

console.log(products);