const itemList = [
    { id:0, name:"t0", description:"t0", price:0.40, stock:10, 
        reviews:[{grade:4},{grade:5}]
    },
    { id:1, name:"t1", description:"t1", price:1.40, stock:11, 
        reviews:[{grade:2},{grade:2}]
    },
    { id:2, name:"t2", description:"t2", price:2.40, stock:12, 
        reviews:[{grade:3},{grade:2}]
    },
    { id:3, name:"t3", description:"t3", price:3.40, stock:13, 
        reviews:[{grade:3},{grade:3}]
    },
    { id:4, name:"t4", description:"t4", price:4.40, stock:14, 
        reviews:[{grade:1},{grade:4}]
    },
    { id:5, name:"t5", description:"t5", price:5.40, stock:15, 
        reviews:[{grade:1},{grade:5}]
    }
]

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


const getItem = async event => {
    let item = {}
    
    try {
        item = await fetch('http://localhost:4000/item', { cache: "reload" })
            .then(response => response.json());
    } catch(e) {
        console.log(e)
    }

    return item;
}

const getItemById = async event => {
    let item = {}
    
    try {
        item = await fetch(`http://localhost:4000/item/${event}`, { cache: "reload" })
            .then(response => response.json());
    } catch(e) {
        console.log(e)
    }

    return item;
}


const createItem = async event => {
    let item = event
    
    try {
        item = await fetch('http://localhost:4000/item/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
    } catch(e) {
        console.log(e)
    }

    return item
    
}

const updateItem = async event => {
    let item

    try {
        item = await fetch(`http://localhost:4000/item/${event.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    price: event.price,
                    address: event.address,
                    img: event.img,
                    stock: event.stock
                }),
            });    
    }
    catch (e) {
        console.log(e)
    }

    return item
    
}

export {
    createItem,
    getItem,
    getItemById,
    updateItem
}