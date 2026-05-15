const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Movies API is running');
});

// JSON = JavaScriptObjectNonation
// 1. Property 
// 2. Value

// HTTP = Hypertext Tranfer Potocal
// HTTPS = Hypertext Tranfer Potocal Security

// HTTP Method GET = Getting the data or view data

// async 
// await = waiting 
app.get('/movies', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM Movies;');
        res.json(rows);
    } catch (err) {
        console.error(`Error: ${err}`);
        res.status(500).send("Database error");
    }
});

// HTTP Method POST = Create a new data

// HTTP Method PUT = Update the data or edit

// HTTP Method DELETE = Delete or remove

app.get('/profile', (req, res) => {
    res.json({
        name: 'EDCO',
        age: 7,
        isAdult: true
    });
});

app.post('/movie', async (req, res) => {
    try {
        const { title } = req.body;
        
        if (!title) {
            return res.status(400).json({ message: 'revenue are required'})
        }

        const [result] = await pool.execute(
            'INSERT INTO Movies (title) VALUES (?)',
            [title]
        );

        res.status(201).json({
            message: 'Movie created',
            id: result.insertId,
            title,
        });

    } catch(err) {
        console.log('Can not create a movie.', err);
    }
});



app.listen(3000, () => {
    console.log('Sever running on port 3000');
});
