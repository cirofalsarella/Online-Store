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


const getUser = async event => {
    let user = {}
    
    try {
        user = await fetch(`http://localhost:4000/user/${event}`, { cache: "reload" })
            .then(response => response.json());
    } catch(e) {
        console.log(e)
    }

    return user;
}

const createUser = async event => {
    let user = event
    
    try {
        user = await fetch('http://localhost:4000/user/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    } catch(e) {
        console.log(e)
    }

    return user
}


const updateUser = async event => {
    let user = event

    try {
        user = await fetch(`http://localhost:4000/user/${user.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });    
    }
    catch (e) {
        console.log(e)
    }

    return user
}

export {
    getUser,
    createUser,
    updateUser
}