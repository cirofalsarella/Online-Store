const userList = [
    { id:0, name:"u0", email:"teste0@teste.com", cpf:10000, username:"un0", address:"ad0",
        historic:[{id:0, review:2}, {id:1, review:3}],
        cart:[{id:2, ammount:44}, {id:3, ammount:33}]
    },
    { id:1, name:"u1", email:"teste1@teste.com", cpf:11111, username:"un1", address:"ad1",
        historic:[{id:1, review:4}, {id:2, review:3}],
        cart:[{id:3, ammount:44}, {id:4, ammount:33}]
    },
    { id:2, name:"u2", email:"teste2@teste.com", cpf:12222, username:"un2", address:"ad2",
        historic:[{id:2, review:4}, {id:3, review:3}],
        cart:[{id:4, ammount:44}, {id:5, ammount:33}]
    },
    { id:3, name:"u3", email:"teste3@teste.com", cpf:13333, username:"un3", address:"ad3",
        historic:[{id:3, review:4}, {id:4, review:3}],
        cart:[{id:5, ammount:44}, {id:6, ammount:33}]
    }
]

const itemList = [
    { id:0, name:"t0", description:"t0", price:0.40, stock:10, 
        reviews:[{grade:1},{grade:2}]
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


const getHistoric = async event => {
    let historic
    try {
        historic = userList.find(user => {return user.id == event}).historic
        const items = itemList

        historic.map(product => {
            product.name = items.find(match => {return match.id == product.id}).name
        })
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }

    return historic;
}


const updateHistoric = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}

const addHistoric = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}

export {
    getHistoric,
    updateHistoric,
    addHistoric
}