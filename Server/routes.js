const express = require('express');
const router = express.Router();
const { BooksEntity, FictionEntity } = require('./schema'); 

router.use(express.json());

// Real-get
router.get('/get', async (req, res) => {
    try {
        const books = await BooksEntity.find().maxTimeMS(20000).exec();
        res.json(books);
    } catch (err) {
        console.error('Error in GET request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fiction-get
router.get('/fiction', async (req, res) => {
    try {
        const fictionBooks = await FictionEntity.find().maxTimeMS(20000).exec();
        res.json(fictionBooks);
    } catch (err) {
        console.error('Error in GET request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
