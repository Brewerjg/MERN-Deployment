const mongoose = require('mongoose');



const NotesSchema = new mongoose.Schema({
    title: { type: String,
            required: true,
            unique: [true, 'Title must be unique'],
            minlength: [2, 'Must be longer than 2 characters'] },
    noteBody: { type: String,
                required: [true, 'Must have a Body'],
                maxLength: [255, 'Body max of 255 characters'] },
}, { timestamps: true });


// This block of code came from DojoHall where I and the TA lead spent 3 hrs trying to figure out how to validate the title to be unique on the last exam.

NotesSchema.path('title').validate(async function(value) {
    const matchingTitle = await mongoose.models.notes.findOne({title: value})
    if (this._conditions===undefined && matchingTitle!==null) return false; 
    if (this._conditions!==undefined && matchingTitle !== null && this._conditions._id.toString()!==matchingTitle._id.toString()) return false;
    return true;
    console.log("blah", matchingTitle._id.toString())
    console.log("Seperate")
    // console.log ("this",this._conditions._id.toString()===matchingTitle._id.toString())
    console.log(this._conditions)
},"notes title must be unique" )


module.exports = mongoose.model('notes', NotesSchema);