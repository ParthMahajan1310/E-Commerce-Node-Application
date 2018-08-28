/**
 * E-Commerce Application APIs
 * Description: Front Controller of the application.
 * Author: Parth
 * Last Update By: Parth
 * Version: 1.0
 */

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

/* Importing routes */
// Admin Routes
const adminAuthRoutes = require('./modules/admin/routes/auth.js');
// Customer Routes
const customerAuthRoutes = require('./modules/customer/routes/auth.js');
const customerProductsRoutes = require('./modules/customer/routes/products.js');

/* Defining server port */
const port = process.env.PORT || 8000;

/* Defining our Middleware */
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

/* Middleware for setting headders */
app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next();
});

/* Routes Defined */
// Admin Routes
app.use('/admin/auth', adminAuthRoutes);
// Customer Routes
app.use('/customer/auth', customerAuthRoutes);
app.use('/customer/products', customerProductsRoutes);


server.listen(port, () => console.log('Listening to port', port));