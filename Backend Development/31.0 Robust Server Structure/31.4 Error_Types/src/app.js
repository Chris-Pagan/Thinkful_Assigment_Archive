const express = require("express");
const app = express();
const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());


function validatePost(req, res, next){
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  if(foundNote){
    next();
  } else{
    next({
      status: 404, 
      message:`Note id not found: ${req.params.noteId}` 
    })
  }
}

app.get("/notes/:noteId", validatePost, (req, res, next) => {
  const {noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
    res.status(200).json({ data: foundNote });
});

app.get("/notes", (req, res, next) => {
  res.json({ data: notes });
});
function postBodyIsValid(req, res, next){
  const {data: {text} = {}} = req.body;
  if(text){
    next();
  } else{
    next({
      status: 400,
      message: "A 'text' property is required"
    })
  }
}

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);
app.post("/notes", postBodyIsValid, (req, res, next) => {
  const { data: { text } = {} } = req.body;
  const newNote = {
    id: ++lastNoteId, // Increment last id then assign as the current ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
});

// Not found handler
app.use((req, res, next) => {
  next({status: 404, message:`Not found: ${req.originalUrl}`});
});

// Error handler
app.use((error, req, res, next) => {

  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
