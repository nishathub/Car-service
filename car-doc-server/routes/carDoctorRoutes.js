const {getAllUsers, createUser, getAllServices, getOneService, createOrder, getAllOrders} = require('../controllers/carServiceControllers.js');
const express = require('express');

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.get('/allOrders', getAllOrders);
router.get('/allServices', getAllServices);
router.get('/allServices/:serviceID', getOneService);
router.post('/allUsers', createUser);
router.post('/allOrders', createOrder);

module.exports = router;