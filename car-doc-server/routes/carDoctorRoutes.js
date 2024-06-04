const {getAllUsers, createUser} = require('../controllers/carServiceControllers.js');
const express = require('express');

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.post('/allUsers', createUser);

module.exports = router;