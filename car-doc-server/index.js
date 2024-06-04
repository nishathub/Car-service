require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const carDoctorRoutes = require('./routes/carDoctorRoutes')

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

async function startServer () {
    try {

        await connectDB();

        app.use('/', carDoctorRoutes);

        app.get('/', (req, res) => {
            res.send('carService running')
        });
        app.listen(port, () => {
            console.log(`carServer is running on port ${port}`)
        });

    } catch (error) {
        console.error('failed to start server',error);
        process.exit(1);
    }
}

startServer();