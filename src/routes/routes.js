const express = require('express');
const ClienteController = require('../controllers/clienteController.js');
const router = express.Router();
 
router.post('/cliente', ClienteController.Insert);
router.get('/cliente', ClienteController.SelectAll);
router.get('/cliente/:id', ClienteController.SelectDetail);
router.put('/cliente/:id', ClienteController.Update); 
router.delete('/cliente/:id', ClienteController.Delete);



module.exports = router;
