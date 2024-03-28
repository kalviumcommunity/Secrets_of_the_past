const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = 3000;
let status = "disconnected";

dotenv.config();

const Connect = async () => {
    try {
        await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Specify options to avoid deprecation warnings
        status = "connected";
        console.log("Connection established");
    }
    catch (err) {
        console.error("Connection Failed:", err);
        status = "error";
    }
};

const Disconnect = async () => {
    try {
        await mongoose.disconnect();
        status = "disconnected";
        console.log("Disconnected from MongoDB");
    }
    catch (err) {
        console.error("Disconnection Failed:", err);
        status = "error";
    }
}

app.get('/', (req, res) => {
    res.send(status);
});


app.listen(PORT, async () => {
    try {
        await Connect();
        console.log(`Server is running on Port ${PORT}`);
    }
    catch (err) {
        console.error("Server startup failed:", err);
        process.exit(1); 
    }
});

module.exports = app;
