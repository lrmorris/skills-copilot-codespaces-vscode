//create web server
const express = require('express');
const app = express();
//create a port
const port = process.env.PORT || 3000;
//create a json object
app.use(express.json());
//create an array of objects
const comments = [
    { username: 'Tammy', comment: 'lololol' },
    { username: 'FishBoi', comment: 'Nice one' },
    { username: 'Hans', comment: 'Cool' },
    { username: 'Derek', comment: 'I love it' },
    { username: 'Bobby', comment: 'Yikes' }
];
//create a get request
app.get('/comments', (req, res) => {
    res.send(comments);
});
//create a post request
app.post('/comments', (req, res) => {
    const newComment = { username: req.body.username, comment: req.body.comment };
    comments.push(newComment);
    res.send(newComment);
});
//create a delete request
app.delete('/comments/:index', (req, res) => {
    const deletedComment = comments.splice(req.params.index, 1);
    res.send(deletedComment);
});
//create a put request
app.put('/comments/:index', (req, res) => {
    const updatedComment = req.body.comment;
    comments[req.params.index].comment = updatedComment;
    res.send(updatedComment);
});
//create a listen request
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});  

