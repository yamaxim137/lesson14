class Faq{
    constructor(containerFaq, listFAQ){
        this.containerFaq = document.querySelector(containerFaq);
        this.listFAQ = listFAQ;
        this.create();
    }

    create(){
        // this.catalogCounter.addEventListener('click', function(){
            cart.containerFaq.style.display = 'block';
            // let listFAQ = cart.getProductCart();
            let wraper = document.createElement('slot');

            for( let i = 0; i < listFAQ.length; i++){ //пробегаем по списку
                let item = createOneFaq.getProductItem({
                    tagName: 'div',
                    className: 'item'
                });
                let name = createOneFaq.getProductItem({
                    tagName: 'div',
                    className: 'name',
                    textName: listFAQ[i].name   //Обращение к списку
                });
                let txt = createOneFaq.getProductItem({
                    tagName: 'div',
                    className: 'txt',
                    textName: listFAQ[i].txt //Обращение к списку
                });
                item.appendChild(name);
                item.appendChild(txt);
                wraper.appendChild(item);
            }
    
            let close = createOneFaq.getProductItem({
                tagName: 'div',
                className: 'close',
                textName: '^'
            })

            close.addEventListener('click', function(){
                cart.containerFaq.style.display = 'none';
                cart.containerFaq.innerHTML = ' ';
            })

            // let hCart = createOneProduct.getProductItem({
            //     tagName: 'h1',
            //     className: 'midl zgl',
            //     textName: 'Ваша корзина'
            // })

            list.containerFaq.appendChild(close);
            // list.containerFaq.appendChild(hlist);
            list.containerFaq.appendChild(wraper);            
        // });
    }

    getProductCart(){
        let products = cardStore.getProduct();
        let productsCart = [];
        for( let i = 0; i < this.listFAQ.length; i++){
            if(products.indexOf(this.listFAQ[i].id) !== -1){
                productsCart.push(this.listFAQ[i]);
            }
        }
        return productsCart;
    }

}

let faq = new Cart('.container-faq', listFAQ);

// let cart = new Cart('.container-counter', '.container-cart', catalogProduct);
