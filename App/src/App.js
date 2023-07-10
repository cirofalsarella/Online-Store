import React, {createContext, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {Header} from "./components"

import createMockProducts from './services/createMockProducts';
import Auth from './services/auth';

const headerContext = createContext();
const loginContext = createContext();

// ExpressJS Configuration

const express = require('express');
const app = express();
const port = 3000;

// ExpressJS Routers

const adminRouter = require('../../Server/routes/admin');
const cartRouter = require('../../Server/routes/cart');
const indexRouter = require('../../Server/routes/index');
const itemRouter = require('../../Server/routes/item');
const productRouter = require('../../Server/routes/product');
const userRouter = require('../../Server/routes/user');
const webRouter = require('../../Server/routes/web');
const authRouter = require('../../Server/routes/auth');

app.use('/admin', adminRouter);
app.use('/cart', cartRouter);
app.use('/index', indexRouter);
app.use('/item', itemRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/web', webRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// MongoClient Configuration

// const {MongoClient} = require('mongodb');
//
// const url = 'mongodb://localhost:27017';
// const dbName = 'your_database_name';

// MongoClient.connect(url, (err, client) => {
//     if (err) throw err;
//
//     const db = client.db(dbName);
//     console.log('Connected to MongoDB');
//
//     // Add your routes and logic here
// });

function App() {

    Auth();
    createMockProducts()

    const [headerDisplay, setHeaderDisplay] = useState(true)
    const [loginStatus, setLoginStatus] = useState(0)
    // 0 => no login
    // 1 => client
    // 2 => admin


    return (
        <ChakraProvider>
            <loginContext.Provider value={[loginStatus, setLoginStatus]}>
                {headerDisplay && <Header/>}

                <headerContext.Provider value={setHeaderDisplay}>
                    <Outlet/>
                </headerContext.Provider>

            </loginContext.Provider>

        </ChakraProvider>
    );
}

export {
    headerContext,
    loginContext
}
export default App;
