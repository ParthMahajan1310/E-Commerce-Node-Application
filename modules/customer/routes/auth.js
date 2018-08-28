/**
 * Module: Customer
 * Description: Routes for customer authorization.
 * Author: Parth
 * Last Update By: Parth
 * Version: 1.0
 */

 const express = require('express');
 const router = express.Router();
 const controller = require('../controllers/auth.controller');

 router.get('/', (req, res) => {
     res.json({
         error: false,
         code: 'CUST_AUTH_0001',
         msg: 'Customer authentication routes are working.',
         data: null
     });
 });

 router.get('/login', async (req, res) => {
    const output = await controller.login(req, res);
    res.json(output);
 });

 module.exports = router;