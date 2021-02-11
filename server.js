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
 * ENVIROMENT VARIABLES
 */
const port = process.env.PORT || 3000;

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
app.listen(port, () => console.log(`Running in port ${port}`));
