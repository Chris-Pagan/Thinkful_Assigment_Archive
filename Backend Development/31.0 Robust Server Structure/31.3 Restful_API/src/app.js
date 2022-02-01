const express = require("express");
const app = express();

app.use(express.json())

const notes = require("./data/notes-data");

app.get("/notes/:noteId", (req, res, next) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote){
    res.json({ data: foundNote });
  } else{
    next(`Note id not found: ${req.params.noteId}`)
  }
});

app.get("/notes", (req, res, next) => {
  res.json({ data: notes });
});

// TODO: Add ability to create a new note
let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
app.post("/notes", (req, res, next) =>{
  const { data: { text } = {}} = req.body;
  if (req.body.data.text === "" || req.body.data.text === undefined || req.body.data.text === null ) {
    res.sendStatus(400);
  } else {
    const newNote = {
      id: ++lastNoteId, 
      text: text
    }
    notes.push(newNote);
    res.status(201).json({ data: newNote })
  }
})

// TODO: add not found handler
app.use((req, res, next) => {
  res.status(400).send(`Not found: ${req.originalUrl}`);
});

// TODO: Add error handler
app.use((err, req, res, next) => {
  res.status(400).send(err);
});


module.exports = app;
