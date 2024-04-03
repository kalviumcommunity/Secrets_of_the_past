const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 
let status = "disconnected";

const Connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        status = "connected";
        console.log("Connection established");
    } catch (err) {
        console.error("Connection Failed:", err);
        status = "error";
    }
};

const Disconnect = async () => {
    try {
        await mongoose.disconnect();
        status = "disconnected";
        console.log("Disconnected from MongoDB");
    } catch (err) {
        console.error("Disconnection Failed:", err);
        status = "error";
    }
};

app.use(cors()); 

app.use('/', routes);

app.get('/', (req, res) => {
    res.send(status);
});

app.listen(PORT, async () => {
    try {
        await Connect();
        console.log(`Server is running on Port ${PORT}`);
    } catch (err) {
        console.error("Server startup failed:", err);
        process.exit(1);
    }
});

module.exports = app;
