const express = require('express');
const app = express();

app.use(express.json());

// Mockup data
let movies = [
    { id: 1, title: 'Titanic', year: 1990 },
    { id: 2, title: 'Avengers', year: 2015 },
    { id: 3, title: 'Avengers', year: 2022 },
    { id: 4, title: 'Iron Man', year: 2010 },
];

// Request = จะต้องมีอะไรแนบมาด้วย เช่น ข้อมูล (parameter)
// Response = ตอบกลับ

app.get('/', (req, res) => {
    res.send('API is running.....💻');
});

app.get('/profile', (req, res) => {
    res.json({ name: 'EDCO', age: 7, year: 2015});
});

// Get all movies
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Get all movie by ID
app.get('/movies/:id', (req, res) => {
    // Number() = convert to data type Number
    const id = Number(req.params.id);
    // string to number
    console.log(typeof(id));

    const movie = movies.find( search => search.id === id)

    if (!movie) {
        return res.json({message: 'Not found this movie'});
    }

    res.json(movie);
});

// Create new movie
app.post('/movies', (req, res) => {
    const { title, year } = req.body;

    if (!title || !year) {
        return console.log('Please enter title and year');
    }

    // prepering the data response
    const newMovie = {
        id: movies.length > 0 ? movies[movies.length - 1].id + 1: 1,
        title,
        year
    };

    movies.push(newMovie);
    res.json(newMovie);
});

// Update data with ID
app.put('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, year} = req.body;

    const movie = movies.find(rearch => rearch.id === id);

    if (!movie) {
        return console.log('Can not find this movie');
    }

    if (title !== undefined) movie.title = title;
    if (year !== undefined) movie.year = year;

    res.json(movie);
});

app.listen(3000, () => {
    console.log('Sever running on port 3000');
});


// comparision
// = assign value
// == equal
// === 1. equal 2. equal datatype