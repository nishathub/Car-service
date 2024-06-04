const {getAllUsers, createUser, getAllServices, getOneService} = require('../controllers/carServiceControllers.js');
const express = require('express');

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.get('/allServices', getAllServices);
router.get('/allServices/:serviceID', getOneService);
router.post('/allUsers', createUser);

module.exports = router;