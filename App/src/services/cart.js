import { getUser } from "./user"
import { getItem } from "./item"


const getCart = async event => {
    const storeItems = await fetch("http://localhost:4000/item", {cache: "reload"}).then(response => response.json());;
    const cartItems = (await fetch(`http://localhost:4000/user/${event}`, {cache: "reload"}).then(response => response.json())).cart

    let cart = []
    for (const item of cartItems) {
        cart.push({ 
            ...storeItems.find((product) => product.id === item.id), 
            ammount: item.ammount 
        })
    }
    
    return cart;
}


const updateCart = async event => {
    let item = {id: event.item, ammount: event.ammount}
    let user = await getUser(event.user)

    let newCart = {cart: [...user.cart, item]}

    try {
        await fetch(`http://localhost:4000/user/${user.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCart)
            });    
    }
    catch (e) {
        console.log(e)
    }
}

const cleanCart = async event => {
    try {
        await fetch(`http://localhost:4000/user/${event}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({cart:[]})
            });    
    }
    catch (e) {
        console.log(e)
    }
}

export {
    getCart,
    updateCart,
    cleanCart
}