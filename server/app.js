const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const snackRouter = require('./routers/snacks');
const orderRouter = require('./routers/orders')

const app = express();

//middlewares
app.use(logger);
app.use(cors());
app.use(express.json());
app.use('/snacks', snackRouter);
app.use('/orders', orderRouter);

module.exports=app;