
const NotesController = require('../controllers/note.controllers'); 

module.exports = (app) => {
    app.get('/api', NotesController.AllNote);
    app.post('/api/note/new', NotesController.createNote);
    app.get('/api/onenote/:id', NotesController.getOneNote);
    app.patch('/api/note/:id', NotesController.updateNote);
    app.delete('/api/delete/:id', NotesController.deleteNote);
}