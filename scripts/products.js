class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
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

const prod1 = new Product();
const prod2 = new Product("123abc", "Tablet samsung", 1500);
const prod5 = new Product("1234aaa", "Iphone 14", 4000, 12, "https://oechsle.vteximg.com.br/arquivos/ids/17874187-1500-1500/image-a14b5570f2db42eb94c6c2a64595e7e6.jpg?v=638489010898130000", false);

prod5.sellUnits(10);
console.log(prod5);
prod5.sellUnits(2);
console.log(prod5);