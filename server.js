'use strict';
/**
 * DEPENDENCIES
 */
const express = require('express');
const app = express();
const dealerRouter = require('./Routes/DealerRoute');
const vehicleRouter = require('./Routes/VehicleRoute');
const clientRouter = require('./Routes/ClientRoute');

/**
 * CONFIG DOTENV	
 */
require('dotenv').config();

/**
 * Middlewares
 */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/**
 * Routes
 */
app.use('/dealer', dealerRouter);
app.use('/vehicle', vehicleRouter);
app.use('/client', clientRouter);

/**
 * Server
 */
const port = process.env.PORT;
app.listen(port, () => console.log(`Running in port ${port}`));
