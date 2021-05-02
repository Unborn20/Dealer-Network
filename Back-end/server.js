'use strict';
/**
 * DEPENDENCIES
 */
const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/UserRoute');
const dealerRouter = require('./Routes/DealerRoute');
const vehicleRouter = require('./Routes/VehicleRoute');
const clientRouter = require('./Routes/ClientRoute');

/** 
 * EXPRESS INSTANCE 
 */
const app = express();

/**
 * CONFIG DOTENV	
 */
require('dotenv').config();

/**
 * MIDDLEWARES
 */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

/**
 * ROUTES
 */
app.use('/user', userRouter);
app.use('/dealer', dealerRouter);
app.use('/vehicle', vehicleRouter);
app.use('/client', clientRouter);

/**
 * SERVER
 */
const port = process.env.PORT;
app.listen(port, () => console.log(`Running in port ${port}`));
