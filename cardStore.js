class CardStore{
    constructor(){}

    getProduct(){
        let products = [];
        let productsLcStorage = localStorage.getItem('CardStore');
        if(productsLcStorage !== null){
            products = JSON.parse(productsLcStorage);
        }
        return products;
    };

    putProduct(id){
        let products = this.getProduct();
        let index = products.indexOf(id);
        let statusProduct;

        if(index === -1){
            products.push(id);
            statusProduct = true;
        } else{
            products.splice(index, 1);
            statusProduct = false;
        }

        localStorage.setItem('CardStore', JSON.stringify(products));

        return{
            statusProduct: statusProduct,
            products: products
        }
    };
}

let cardStore = new CardStore();