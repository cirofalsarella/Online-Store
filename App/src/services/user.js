
const auth = async event => {
    const email = event.email
    const password = event.password

    let user
    try {
        user = await fetch(`http://localhost:4000/user/auth/${email}/${password}`, { cache: "reload" })
            .then(response => response.json());
    } catch(e) {
        console.log(e)
    }

    return user;
}

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
    auth,
    getUser,
    createUser,
    updateUser
}