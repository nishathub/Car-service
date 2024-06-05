const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

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
        res.send(allServices);
    } catch (error) {
        res.status(500).send(error)
    }
}

// get All Orders
// WE USED QUERY HERE TO GET SPECIFIC USER DATA
const getAllOrders = async (req, res) => {
    try {
        console.log('query email: ',req.query.email);
        let query = {};
        if(req.query?.email){
            query = {email: req.query.email}
        }
        const allOrders = await orderCollection().find(query).toArray();
        res.send(allOrders);
    } catch (error) {
        res.status(500).send(error)
    }
}

//get One Service
const getOneService = async (req, res) => {
    try {
        const serviceID = req.params.serviceID;
        const query = {_id : new ObjectId(serviceID)};
        //options-projection to get limited data (its boolean, 1 means we want that data)
        const options = {
            projection: {title: 1, service_id: 1, price: 1, img: 1} // here we will only get the mentioned data
        }
        const clickedService = await serviceCollection().findOne(query, options);
        res.send(clickedService);
    } catch (error) {
        res.status(500).send(error);
    }
}
//get One Order
const getOneOrder = async (req, res) => {
    try {
        const orderID = req.params.orderID;
        const query = {_id : new ObjectId(orderID)};
        //options-projection to get limited data (its boolean, 1 means we want that data)
        // const options = {
        //     projection: {title: 1, service_id: 1, price: 1, img: 1} // here we will only get the mentioned data
        // }
        const result = await orderCollection().findOne(query);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateOrderStatus = async (req, res) => {
    try {
        const orderID = req.params.orderID;
        console.log(orderID);
        const filter = {_id : new ObjectId(orderID)};
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
const deleteOrder = async(req, res) => {
    try {
        const orderID = req.params.orderID;
        const query = {_id : new ObjectId(orderID)};
        const result = await orderCollection().deleteOne(query);
        res.send(result);

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {getAllUsers, getAllOrders, createUser, getAllServices, getOneService, getOneOrder, createOrder, updateOrderStatus, deleteOrder};