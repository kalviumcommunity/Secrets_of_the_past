const express = require('express');
const router = express.Router();
const {  BooksEntity, FictionEntity, FactEntity, ImageEntity, } = require('./schema');
const userInfo = require('./userschema');

router.use(express.json());

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
        res.send(newRealBook)
    } catch (err) {
        console.error('Error adding real book:', err);
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

router.get('/images', async (req, res) =>{
    try{
        const image = await ImageEntity.find().maxTimeMS(20000).exec();
        res.json(image);
    } catch (err) {
        console.error('Error in getting images:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/facts', async (req, res) => {
    try {
        const fact = await FactEntity.find().maxTimeMS(20000).exec();
        res.json(fact);
    } catch (err) {
        console.error('Error in getting facts:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
