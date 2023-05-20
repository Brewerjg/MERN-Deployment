const note = require('../models/note.models');

module.exports ={
    // create
    createNote: (req, res) => {
        note.create(req.body)
            .then(newNote => res.json(newNote))
            .catch((err => res.status(400).json(err)));
                },
    // read
    AllNote: (req, res) => {
        note.find()
            .then(allNote => res.json(allNote))
            .catch((err => res.json(err)));
            },

    // read one
    getOneNote: (req, res) => {
        note.findById(req.params.id)
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json(err));
    },

    
    // update, add in validator function

    updateNote: (req, res) => {
        note.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updateNote => res.json(updateNote))
        .catch((err => res.status(400).json(err)));
                },
        // .catch(err => res.json(err));
    // },
    // delete
    deleteNote: (req, res) => {
        note.findByIdAndDelete(req.params.id)
        .then(deleteNote => res.json(deleteNote))
        .catch(err => res.json(err));
    },
}