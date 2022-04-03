import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
    res.send('Countless Iterations');
})

app.get('/home', async(req, res) => {
	res.json({
		"Helo": "World"
	})
})

app.listen(PORT);
