class AllProducts{
    constructor(containerProducts, catalogCounter , catalogProduct){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createProduct();
    }

  /* <div class="item">
                <div class="name">Product 1</div>
                <div class="img"></div>
                <div class="price">199</div>
                <button class="btn">Купить</button>
    </div> */

    createProduct(){
        let wrapper = document.createElement('slot');
        let products = cardStore.getData();
        this.catalogCounter.innerHTML = `В Вашей корзине ${products.length} товаров`;
        for(let i = 0; i < this.catalogProduct.length; i++){

            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;

            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'item'
            });
            let name = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'img',
                backgroundImg: `url('${this.catalogProduct[i].img}')` 
            });
            let price = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price
            });
            let btn = createOneProduct.getProductItem({
                tagName: 'button',
                className: 'btn',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = cardStore.putData(id);

                allProducts.catalogCounter.innerHTML = result.items.length;   // Добавили вывод числа товаров в корзине

                if(result.statusItem){
                    this.innerHTML = 'из корзины';
                } else{
                    this.innerHTML = 'в корзину';
                }
            })
            
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    }

   

}

let allProducts = new AllProducts('.container-product','.container-counter' , catalogProduct);