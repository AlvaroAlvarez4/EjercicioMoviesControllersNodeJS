var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController.js');
const { format } = require('../config/db.js');

//localhost:3000/customer/ -> listCustomer
router.get('/listCustomer', userController.listCustomer);

router.get('/formCustomer', userController.viewForm);


router.get('/deleteProfile/:iduser', userController.deleteProfile);


router.get('/viewProfile/:iduser', userController.editProfile);



/*POST------------------*/
router.post('/saveCustomer', userController.saveCustomer)

router.post('/updateCustomer/:iduser', userController.updateCustomer)




module.exports = router;