const express = require('express');
const router = express.Router();
const Entity = require('./schema'); 

router.use(express.json());

router.get('/get', async (req, res) => {
    try {
        const secrets = await Entity.find().maxTimeMS(20000).exec();
        res.json(secrets);
    } catch (err) {
        console.error('Error in GET request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
