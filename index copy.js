const express = require('express');

const app = express();

app.use(express.json());

let movies = [
    {"id": 1, "title": "Bush's Brain", "author": "Dulcia"},
    {"id": 2, "title": "Love unto Death (L'amour a mort)", "author": "Bathsheba"},
    {"id": 3, "title": "Bring It On: In It To Win It", "author": "Hillier" },
    {"id": 4, "title": "Rough Magic", "author": "Dominique"},
    {"id": 5, "title": "Tomboy", "author": "Laina" }
];

// req = request
// res = response

// Method GET
app.get('/', (req, res) => {
    res.send('Hello from GET');
});

// Get all movies from the data
app.get('/movies', (req, res) =>{
    res.json(movies);
});

// Method POST
app.post('/movie', (req, res) => {
  movies.push(req.body); 
  
  res.status(201).json(req.body); 
});

// Set default port running API at 3000
app.listen(3000, () => {
    console.log('Start running at port 3000');
});