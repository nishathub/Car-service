const { getDB } = require("../config/db");

const userCollection = () => getDB().collection('users');

// get All Users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userCollection().find().toArray();
        res.send(allUsers);
    } catch (error) {
        res.status(500).send(error)
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


module.exports = {getAllUsers, createUser};