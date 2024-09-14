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
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://carservice-53cf6.web.app/'], // Your frontend origin
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

// ACCESS CONTROL ALLOW ORIGIN [CORS ISSUE IN LIVE SITE]
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://carservice-53cf6.web.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// PREFLIGHT REQ
app.options('*', cors()); // Handle preflight requests for all routes



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