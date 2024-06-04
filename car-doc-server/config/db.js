
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

let client;

const connectDB = async () => {

    if (!client) {

        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    }

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    return client;
}

const getDB = () => {
    if(!client) {
        throw new Error('MongoClient not initialized')
    }
    return client.db('carDoctor_DB');
}

module.exports = {connectDB, getDB};


