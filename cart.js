class Cart{
    constructor(catalogCounter, containerCart, catalogProduct){
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create(){
        this.catalogCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');

            for( let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'item'
                });
                let name = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'name',
                    textName: productsCart[i].name   //Обращение уже к полученному массиву товаров
                });
                let price = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'price',
                    textName: productsCart[i].price //Обращение уже к полученному массиву товаров
                });
                item.appendChild(name);
                item.appendChild(price);
                wrapper.appendChild(item);
            }
    
            let close = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'close',
                textName: '. x'
            })

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = ' ';
            })

            let hCart = createOneProduct.getProductItem({
                tagName: 'h1',
                className: 'midl zgl',
                textName: 'Ваша корзина'
            })

            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(hCart);
            cart.containerCart.appendChild(wrapper);            
        });

        

    }

    getProductCart(){
        let products = cardStore.getProduct();
        let productsCart = [];
        for( let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }

}

let cart = new Cart('.container-counter', '.container-cart', catalogProduct);