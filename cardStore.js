class dtStore{    //CardStore --> dtStore
    constructor(){}

    getData(){   //getProduct --> getData
        let items = [];     //products --> items
        let itemsLcStorage = localStorage.getItem('dtStore');
        if(itemsLcStorage !== null){
            items = JSON.parse(itemsLcStorage);
        }
        return items;
    };

    putData(id){   //putProduct --> putData
        let items = this.getData();
        let index = items.indexOf(id);
        let statusItem;

        if(index === -1){
            items.push(id);
            statusItem = true;
        } else{
            items.splice(index, 1);
            statusItem = false;
        }

        localStorage.setItem('dtStore', JSON.stringify(items));

        return{
            statusItem: statusItem,
            items: items
        }
    };
}

let cardStore = new dtStore();