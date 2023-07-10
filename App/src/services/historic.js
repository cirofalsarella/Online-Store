import { getUser } from "./user"



const getHistoric = async event => {
    const storeItems = await fetch("http://localhost:4000/item", {cache: "reload"}).then(response => response.json());;
    const historicItems = (await fetch(`http://localhost:4000/user/${event.userId}`, {cache: "reload"}).then(response => response.json())).historic

    let historic = []
    for (const item of historicItems) {
        historic.push({ 
            ...storeItems.find((product) => product.id === item.id), 
            review: item.review
        })
    }
    
    return historic;
}


const updateHistoric = async event => {
    try {
        await fetch(`http://localhost:4000/user/${event.userId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({historic: event.historic})
            });    
    }
    catch (e) {
        console.log(e)
    }
}

const addHistoric = async event => {
    let toAdd = event.itemList
    let user = await getUser(event.userId)

    try {
        await fetch(`http://localhost:4000/user/${user.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({historic:[...toAdd, ...user.historic]})
            });    
    }
    catch (e) {
        console.log(e)
    }
}


const addReview = async event => {
    let historicList =  await getHistoric(event.userId)
    let idx = historicList.findIndex(item => item.id == event.itemId)
    historicList[idx] = { id:event.itemId, review: event.review }

    try {
        await fetch(`http://localhost:4000/user/${event.userId.userId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({historic: historicList})
            });    
    }
    catch (e) {
        console.log(e)
    }
}

export {
    getHistoric,
    updateHistoric,
    addHistoric,
    addReview
}