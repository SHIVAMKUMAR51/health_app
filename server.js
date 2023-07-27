const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get('/', (req, res) => {
    res.status(200).send({
        message:"Success"
    });
})

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
    console.log(`listening on  ${process.env.NODE_MODE}  mode on port ${process.env.PORT}`); 
})