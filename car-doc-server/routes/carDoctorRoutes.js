const {getAllUsers, createUser, getAllServices, getOneService, createOrder, getAllOrders, deleteOrder, getOneOrder} = require('../controllers/carServiceControllers.js');
const express = require('express');

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.get('/allOrders', getAllOrders);
router.get('/allOrders/:orderID', getOneOrder);
router.get('/allServices', getAllServices);
router.get('/allServices/:serviceID', getOneService);
router.post('/allUsers', createUser);
router.post('/allOrders', createOrder);
router.delete('/allOrders/:orderID', deleteOrder);

module.exports = router;