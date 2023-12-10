import React, { useState } from 'react'
import NoteList from '../components/noteList';




const Main = () => {

    const [note, setNote] = useState([]);


    return (
        <div>
            <NoteList note={note} setNote={setNote}/>
            <hr/>
            
        </div>
    )
}

export default Main;