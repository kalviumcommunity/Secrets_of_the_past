const express = require('express');
const router = express.Router();
const cors = require('cors'); 
const { BooksEntity, FictionEntity, FactEntity, ImageEntity, speakupEntity } = require('./schema');
const userInfo = require('./userschema');

router.use(express.json());
router.use(cors()); 

router.get('/books', async (req, res) => {
    try {
        const books = await BooksEntity.find().maxTimeMS(20000).exec();
        res.json(books);
    } catch (err) {
        console.error('Error in GET books request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add-real', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newRealBook = await BooksEntity.create(req.body);
        res.status(201).json(newRealBook);
    } catch (err) {
        console.error('Error adding real book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.put('/update-real/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRealBook = await BooksEntity.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedRealBook);
    } catch (err) {
        console.error('Error updating real book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/delete-real/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await BooksEntity.findByIdAndDelete(id);
        res.json({ message: 'Real book deleted successfully' });
    } catch (err) {
        console.error('Error deleting real book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.get('/fiction', async (req, res) => {
    try {
        const fictionBooks = await FictionEntity.find().maxTimeMS(20000).exec();
        res.json(fictionBooks);
    } catch (err) {
        console.error('Error in GET fiction books request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add-fictional', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newFictionBook = await FictionEntity.create(req.body);
        res.status(201).json(newFictionBook);
    } catch (err) {
        console.error('Error adding fictional book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.put('/update-fictional/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFictionalBook = await FictionEntity.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedFictionalBook);
    } catch (err) {
        console.error('Error updating fictional book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/delete-fictional/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await FictionEntity.findByIdAndDelete(id);
        res.json({ message: 'Fictional book deleted successfully' });
    } catch (err) {
        console.error('Error deleting fictional book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.get('/images', async (req, res) => {
    try {
        const images = await ImageEntity.find().maxTimeMS(20000).exec();
        res.json(images);
    } catch (err) {
        console.error('Error in getting images:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add-images', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newImage = await ImageEntity.create(req.body);
        res.status(201).json(newImage);
    } catch (err) {
        console.error('Error adding image book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.put('/update-image/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedImage = await ImageEntity.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedImage);
    } catch (err) {
        console.error('Error updating image:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/delete-image/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await ImageEntity.findByIdAndDelete(id);
        res.json({ message: 'Image deleted successfully' });
    } catch (err) {
        console.error('Error deleting image:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.get('/facts', async (req, res) => {
    try {
        const facts = await FactEntity.find().maxTimeMS(20000).exec();
        res.json(facts);
    } catch (err) {
        console.error('Error in getting facts:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add-facts', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newFact = await FactEntity.create(req.body);
        res.status(201).json(newFact);
    } catch (err) {
        console.error('Error adding fact book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.put('/update-fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFact = await FactEntity.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedFact);
    } catch (err) {
        console.error('Error updating fact:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/delete-fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await FactEntity.findByIdAndDelete(id);
        res.json({ message: 'Fact deleted successfully' });
    } catch (err) {
        console.error('Error deleting fact:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});


module.exports = router;
