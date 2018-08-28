/**
 * Module: Customer
 * Description: Routes for customer and products interaction.
 * Author: Parth
 * Last Update By: Parth
 * Version: 1.0
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        error: false,
        code: 'CUST_PROD_0001',
        msg: 'Customer products routes are working.',
        data: null
    });
});

module.exports = router;