const express = require('express');
const router = express.Router();
const cors = require('cors'); 
const { BooksEntity, FictionEntity, FactEntity, ImageEntity, SpeakEntity } = require('./schema');
const userInfo = require('./userschema');

router.use(express.json());
router.use(cors()); 

// GET all books
router.get('/books', async (req, res) => {
    try {
        const books = await BooksEntity.find().maxTimeMS(20000).exec();
        res.json(books);
    } catch (err) {
        console.error('Error in GET books request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a real book
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

// Update and delete for '/books' endpoint
router.put('/booksupdate/:id', async (req, res) => {
    try {
        const updatedBook = await BooksEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/books-delete/:id', async (req, res) => {
    try {
        await BooksEntity.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// GET all fiction books
router.get('/fiction', async (req, res) => {
    try {
        const fictionBooks = await FictionEntity.find().maxTimeMS(20000).exec();
        res.json(fictionBooks);
    } catch (err) {
        console.error('Error in GET fiction books request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a fictional book
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

// Update and delete for '/fiction' endpoint
router.put('/fictionupdate/:id', async (req, res) => {
    try {
        const updatedFiction = await FictionEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFiction);
    } catch (err) {
        console.error('Error updating fiction:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/fiction-delete/:id', async (req, res) => {
    try {
        await FictionEntity.findByIdAndDelete(req.params.id);
        res.json({ message: 'Fiction book deleted successfully' });
    } catch (err) {
        console.error('Error deleting fiction book:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// GET all images
router.get('/images', async (req, res) => {
    try {
        const images = await ImageEntity.find().maxTimeMS(20000).exec();
        res.json(images);
    } catch (err) {
        console.error('Error in getting images:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add an image
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

// Update and delete for '/images' endpoint
router.put('/update-image/:id', async (req, res) => {
    try {
        const updatedImage = await ImageEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedImage);
    } catch (err) {
        console.error('Error updating image:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.get('/images/:id', async (req, res, next) => {
    try {
        const entity = await ImageEntity.findById(req.params.id);
        if (!entity) {
            return res.status(404).json({ error: 'Entity not found' });
        }
        res.send(entity);
    } catch (err) {
        next(err);
    }
});

router.delete('/delete-images/:id', async (req, res) => {
    try {
        await ImageEntity.findByIdAndDelete(req.params.id);
        res.json({ message: 'Image deleted successfully' });
    } catch (err) {
        console.error('Error deleting image:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// GET all facts
router.get('/facts', async (req, res) => {
    try {
        const facts = await FactEntity.find().maxTimeMS(20000).exec();
        res.json(facts);
    } catch (err) {
        console.error('Error in getting facts:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a fact
router.post('/add-facts', async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        const newFact = await FactEntity.create(req.body);
        res.status(201).json(newFact);
    } catch (err) {
        console.error('Error adding fact:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// Update and delete for '/facts' endpoint
router.put('/factsupdate/:id', async (req, res) => {
    try {
        const updatedFact = await FactEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFact);
    } catch (err) {
        console.error('Error updating fact:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/facts-delete/:id', async (req, res) => {
    try {
        await FactEntity.findByIdAndDelete(req.params.id);
        res.json({ message: 'Fact deleted successfully' });
    } catch (err) {
        console.error('Error deleting fact:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// Add a comment
router.post('/speakup', async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Unauthorized: User not logged in' });
        }

        const { parentCommentId, message } = req.body;

        const newComment = await SpeakEntity.create({
            user: req.user._id, 
            parentComment: parentCommentId,
            message: message
        });
        
        res.status(201).json(newComment);
    } catch (err) {
        console.error('Error adding comment:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// Update and delete for '/speakup' endpoint
router.put('/speakupupdate/:id', async (req, res) => {
    try {
        const updatedComment = await SpeakEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedComment);
    } catch (err) {
        console.error('Error updating comment:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

router.delete('/speakup-delete/:id', async (req, res) => {
    try {
        await SpeakEntity.findByIdAndDelete(req.params.id);
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.error('Error deleting comment:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// User signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await userInfo.create({
            username: username,
            password: password
        });
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error in user signup:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userInfo.findOne({ username: username, password: password });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username / password' });
        }
        res.status(200).json({ user });
    } catch (err) {
        console.error('Error in user login:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// User logout
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
