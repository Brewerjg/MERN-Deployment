
const NotesController = require('../controllers/note.controllers'); 

module.exports = (app) => {
    app.get('/', NotesController.AllNote);
    app.post('/note/new', NotesController.createNote);
    app.get('/onenote/:id', NotesController.getOneNote);
    app.patch('/note/:id', NotesController.updateNote);
    app.delete('/delete/:id', NotesController.deleteNote);
}