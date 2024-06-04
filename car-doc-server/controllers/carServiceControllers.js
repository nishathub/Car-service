const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const userCollection = () => getDB().collection('users');
const serviceCollection = () => getDB().collection('services');

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

//get One Service
const getOneService = async (req, res) => {
    try {
        const serviceID = req.params.serviceID;
        const query = {_id : new ObjectId(serviceID)};
        const clickedService = await serviceCollection().findOne(query);
        res.send(clickedService);
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


module.exports = {getAllUsers, createUser, getAllServices, getOneService};