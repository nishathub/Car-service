require('dotenv').config();
const { getAllUsers, createUser, getAllServices, getOneService, createOrder, getAllOrders, deleteOrder, updateOrderStatus, sendJWT } = require('../controllers/carServiceControllers.js');
const express = require('express');
const jwt = require('jsonwebtoken');

// CUSTOM MIDDLEWARE TO VERIFY JWT access TOKEN

// const logger = async (req, res, next) => {
//     const fullUrl = req.protocol + '__' + '://' + '__' + req.get('host') + '__' + req.originalUrl;
//     console.log('full URL : ', fullUrl);
//     next();
// }

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.JWToken;
    // console.log('value of token from verify middleware', token);
    if (!token) {
        return res.status(401).send({ message: 'Not Authorized' });
    }
    // verify a token symmetric
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err){
            console.log(err);
            return res.status(401).send({message: 'Unauthorized'})
        }
        // console.log('value in the verify-token-DECODED : ', decoded);

        req.verifiedUser = decoded; // we can access this data from the function where we will use this middleware. To cross-check the token is from this verified user

        next();
    });

}

// const verifyToken = async (req, res, next) => {
//     const token = req.cookies?.JWToken;
//     if (!token) {
//         console.log('No token found');
//         return res.status(401).send({ message: 'No token found, unauthorized access' })
//     };
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             console.log(err);
//             return res.status(401).send(err)
//         }

//         req.verifiedUser = decoded;
//         next();
//     })

// }

const router = express.Router();

// SERVICE RELATED API

router.get('/allUsers', getAllUsers);
router.get('/allOrders', verifyToken, getAllOrders);
// router.get('/allOrders/:orderID', getOneOrder);
router.get('/allServices', getAllServices);
router.get('/allServices/:serviceID', getOneService);
// router.get('/allOrders/:orderID', getOneOrder);
router.post('/allUsers', createUser);
router.post('/allOrders', createOrder);
router.patch('/allOrders/:orderID', updateOrderStatus);
router.delete('/allOrders/:orderID', deleteOrder);

// AUTH RELATED API
router.post('/jwt', sendJWT);

module.exports = router;