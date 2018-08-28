/**
 * Module: Admin
 * Description: Routes for admin authorization.
 * Author: Parth
 * Last Update By: Parth
 * Version: 1.0
 */

 const express = require('express');
 const router = express.Router();

 router.get('/', (req, res) => {
     res.json({
         error: false,
         code: 'ADMIN_AUTH_0001',
         msg: 'Admin authentication routes are working.',
         data: null
     });
 });

 module.exports = router;