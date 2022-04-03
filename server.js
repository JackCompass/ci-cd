import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
    res.send('Are we in a mess');
})

app.listen(PORT);
