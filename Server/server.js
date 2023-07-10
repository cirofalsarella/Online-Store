const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
    res.setHeader("Content-Type", "application/json");
    next();
});  

// Read JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// API routes
const userView = require('./view/user');
const itemView = require('./view/item');

app.use('/user', userView)
app.use('/item', itemView)


// DB Connection
mongoose
    .connect(
        `mongodb+srv://admin:admin@cluster0.ddpxtbf.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(async () => {
        console.log("Successfully connected to MongoDB");
        app.listen(3000)
    })
    .catch((err) => console.log(err));
