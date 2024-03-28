const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;
let status = "disconnected";

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });
        status = "connected";
        console.log("Connection established");
    }
    catch (err) {
        console.error("Connection Failed:", err);
        status = "error";
    }
};

const disconnect = async () => {
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

app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const server = app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server is running on Port ${PORT}`);
    }
    catch (err) {
        console.error("Server startup failed:", err);
        process.exit(1); 
    }
});


process.on('SIGINT', async () => {
    try {
        await disconnect();
        console.log('MongoDB connection closed');
        server.close(() => {
            console.log('Server stopped');
            process.exit(0);
        });
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
});

module.exports = app;
