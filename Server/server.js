const express = require('express');
const app = express();
const PORT = 3000;

app.get('/get', (req, res)=>{
    res.send('/got');
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

module.exports = app;
