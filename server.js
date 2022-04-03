import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
    res.send('First Iteration');
})

app.get('/home', async(req, res) => {
	res.json({
		"Hello": "world"
	})
})

app.listen(PORT);
