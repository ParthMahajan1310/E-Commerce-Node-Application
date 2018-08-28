/**
 * Module: Customer
 * Description: Controller functions for customer authorization.
 * Author: Parth
 * Last Update By: Parth
 * Version: 1.0
 */

 module.exports = {
     
    login: function(req, res) {
        return new Promise((resolve, reject) => {
            let userSignIn = {
                error: false,
                code: 'CUST_AUTH_0002',
                msg: 'Customer signed in succeffully',
                data: null
            };
            setTimeout(() => {
                resolve(userSignIn);
            }, 3000);
        });
     }
 }