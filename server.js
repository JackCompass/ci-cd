import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
    res.send('Sanskar is a good developer');
})

app.get('/home', async(req, res) => {
	res.json({
		"Hello": "World"
	})
})

app.listen(PORT);
