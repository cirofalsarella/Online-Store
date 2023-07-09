const userList = [
    { id:0, name:"u0", email:"teste0@teste.com", cpf:10000, username:"un0", address:"ad0",
        historic:[{id:0, review:4}, {id:1, review:3}],
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

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


const getUser = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }

    return userList;
}

const createUser = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}


const updateUser = async event => {
    try {
        await delay(1000);
    }
    catch (e) {
        console.log(e)
    }
    
}

export {
    getUser,
    createUser,
    updateUser
}