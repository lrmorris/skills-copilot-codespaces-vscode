// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Route
app.get('/posts/:id/comments', (req, res) => {
    res.send([
        {
            id: 1,
            content: 'This is a comment',
            postId: req.params.id
        }
    ]);
});

// Start server
app.listen(4001, () => {
    console.log('Listening on port 4001');
});