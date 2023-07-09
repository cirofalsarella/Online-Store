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
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }

    return itemList;
}

const getItemById = async event => {
    let teste
    try {
        await delay(1000);
        teste = itemList.find(match => {return match.id == event})

        teste.reviewAvg = 0
        teste.reviews.map(at => {teste.reviewAvg += at.grade})
        teste.reviewAvg /= teste.reviews.length
        teste.reviewCount = teste.reviews.length
    }
    catch (e) {
        console.log(e)
    }

    return teste;
}


const createItem = async event => {
    console.log(event)
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}


const updateItem = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}

export {
    createItem,
    getItem,
    getItemById,
    updateItem
}