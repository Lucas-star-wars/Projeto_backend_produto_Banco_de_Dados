const express = require('express');
const ClienteController = require('../controllers/clienteController.js');
const router = express.Router();
 
router.post('/cliente', ClienteController.Insert);
router.get('/cliente', ClienteController.SelectAll);
router.get('/cliente/:id', ClienteController.SelectDetail);
 
module.exports = router;
