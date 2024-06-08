require('dotenv').config();
const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");
const jwt = require('jsonwebtoken');


const userCollection = () => getDB().collection('users');
const serviceCollection = () => getDB().collection('services');
const orderCollection = () => getDB().collection('orders');


// get All Users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userCollection().find().toArray();
        res.send(allUsers);
    } catch (error) {
        res.status(500).send(error)
    }
}
// get All Services
const getAllServices = async (req, res) => {
    try {
        const allServices = await serviceCollection().find().toArray();
        // console.log('cookies :' , req.cookies);
        res.send(allServices);
    } catch (error) {
        res.status(500).send(error)
    }
}

// get All Orders
// WE USED QUERY HERE TO GET SPECIFIC USER DATA
const getAllOrders = async (req, res) => {
    try {
        // console.log('query email: ',req.query.email);
        // console.log('jwt token :', req.cookies.JWToken);
        // console.log('value from allOrders function verifiedUser(logEmail) : ', req.verifiedUser.logEmail);
        // console.log('value from allOrders function req.query.email : ', req.query?.email);

        let query = {};
        if (req.query?.email) {
            query = { email: req.query.email }
        }
        const oneUserOrders = await orderCollection().find(query).toArray();
        const allAdminOrders = await orderCollection().find().toArray();
        if(req.verifiedUser.logEmail === 'nishat@mail.com'){
            console.log('log from allOrders: user is admin, proceeded access to all Orders');
           return res.send(allAdminOrders);
        }
        if(req.verifiedUser.logEmail === req.query?.email){
            console.log('log from allOrders: user is not admin, but valid user, proceeded access to one user Orders');
           return res.send(oneUserOrders);
        }
        if(!req.query?.email || req.verifiedUser.logEmail !== req.query?.email){
            console.log('Access denied');
            console.log('log from allOrders: unknown attempt, access denied');
            return res.status(403).send({message : 'Access denied'})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

//get One Service
const getOneService = async (req, res) => {
    try {
        const serviceID = req.params.serviceID;
        const query = { _id: new ObjectId(serviceID) };
        //options-projection to get limited data (its boolean, 1 means we want that data)
        const options = {
            projection: { title: 1, service_id: 1, price: 1, img: 1 } // here we will only get the mentioned data
        }
        const clickedService = await serviceCollection().findOne(query, options);
        res.send(clickedService);
    } catch (error) {
        res.status(500).send(error);
    }
}
//get One Order
// const getOneOrder = async (req, res) => {
//     try {
//         const orderID = req.params.orderID;
//         const query = {_id : new ObjectId(orderID)};
//         //options-projection to get limited data (its boolean, 1 means we want that data)
//         // const options = {
//         //     projection: {title: 1, service_id: 1, price: 1, img: 1} // here we will only get the mentioned data
//         // }
//         const result = await orderCollection().findOne(query);
//         res.send(result);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }
const updateOrderStatus = async (req, res) => {
    try {
        const orderID = req.params.orderID;
        console.log(orderID);
        const filter = { _id: new ObjectId(orderID) };
        const newStatus = req.body;
        console.log(newStatus.status);
        const updateDoc = {
            $set: {
                status: newStatus.status
            }
        };
        const result = await orderCollection().updateOne(filter, updateDoc);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Create User
const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userCollection().insertOne(newUser);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Create Order
const createOrder = async (req, res) => {
    try {
        const newOrder = req.body;
        const result = await orderCollection().insertOne(newOrder);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

// DELETE Orders 
const deleteOrder = async (req, res) => {
    try {
        const orderID = req.params.orderID;
        const query = { _id: new ObjectId(orderID) };
        const result = await orderCollection().deleteOne(query);
        res.send(result);

    } catch (error) {
        res.status(500).send(error)
    }
}

// AUTH RELATED API 
const sendJWT = async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    console.log('user : ', user);

    res.cookie('JWToken', token, {
        httpOnly: true,
        secure: false, // because our web is http , not https(secured) // set true when hosted to https site
        // sameSite: 'none', // because our client and server site are different
        // maxAge: 3600000, // 1 hour in milliseconds
    });

    // res.send({token}) 
    // when we send token via cookie, we don't need to send it back in the response, but we can do so for debug issue

    res.send({ success: true }); // this message can be found in the client site (res.. data => data.success === true) if we console the data, we will find it as true. 
    // earlier we could console the token, now we can only know whether the jwt process was okay or not.
}


module.exports = {
    getAllUsers, getAllOrders,
    createUser, getAllServices,
    getOneService, createOrder,
    updateOrderStatus, deleteOrder,
    sendJWT,
};