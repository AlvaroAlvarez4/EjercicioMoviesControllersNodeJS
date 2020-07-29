var express = require('express');
var router = express.Router();
let rentingController = require('../controllers/rentingController');


/* localhost:3000/renting */
router.get('/', rentingController.listRenting);

//localhost:3000/renting/createRenting
router.get('/createRenting', rentingController.viewFormRenting);

//localhost:3000/renting/deleteRenting/:id_transaction
router.get('/deleteRenting/:id_transaction', rentingController.deleteRenting)

//localhost:3000/renting/viewSingleRenting/:id_transaction
router.get('/viewSingleRenting/:id_transaction', rentingController.viewSingleRenting)

//localhost:3000/renting/createRenting
router.post('/createRenting', rentingController.saveRenting)

//localhost:300/renting/updateRenting/:id_transaction
router.post('/updateRenting/:id_transaction', rentingController.updateRenting)


//localhost:3000/renting/searchMovie
router.post('/searchMovie', rentingController.searchMovie)
module.exports = router;