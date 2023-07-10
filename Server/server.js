import express from 'express';
import http from 'http';
import debug from 'debug';


import authRouter from '../Server/routes/auth.js';

// ExpressJS Configuration

const app = express();
const port = 3001;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);


const router = express();

// ExpressJS Routers
//
// const adminRouter = require('../App/src/routes/admin');
// const cartRouter = require('../App/src/routes/cart');
// const indexRouter = require('../App/src/routes');
// const itemRouter = require('../App/src/routes/item');
// const productRouter = require('../App/src/routes/product');
// const userRouter = require('../App/src/routes/user');
// const webRouter = require('../App/src/routes/web');
// const authRouter = require('../App/src/routes/auth');


// app.use('/admin', adminRouter);
// app.use('/cart', cartRouter);
// app.use('/index', indexRouter);
// app.use('/item', itemRouter);
// app.use('/product', productRouter);
// app.use('/user', userRouter);
// app.use('/web', webRouter);
app.use('/auth', authRouter);
//
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

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

