const express = require('express');
// import path from 'path';
require('dotenv').config();

const { getNotes, addNote, getTags, getNoteTags, getNotesByTag } = require('../database/controllers');

const app = express();
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/notes', (req, res) => {
  getNotes()
    .then((data) => {
      res.status(200);
      res.send(data);
    })
});
app.get('/notes/:query', (req, res) => {
  if (req.params.query) {
    getNotesByTag(req.params.query)
      .then((data) => {
        res.status(200);
        res.send(data);
      })
  } else {
    getNotes()
      .then((data) => {
        res.status(200);
        res.send(data);
      })
  }
});

app.post('/notes', (req, res) => {
  addNote(req.body)
    .then(() => {
      res.sendStatus(201);
    })
});

app.get('/tags/:query', (req, res) => {
  getTags(req.params.query)
    .then((data) => {
      res.status(200);
      res.send(data);
    });
});

app.get('/notetags/:id', (req, res) => {
  getNoteTags(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
