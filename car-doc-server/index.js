require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/db');
const carDoctorRoutes = require('./routes/carDoctorRoutes')

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true // Allow credentials
}));
app.use(express.json());
app.use(cookieParser());


// middleware to log cookies (NO MORE NEEDED)
// app.use((req, res, next) => {
//     console.log('logging from middleware index.js')
//     console.log('Cookies:', req.cookies);
//     next();
// });

// Master Function
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