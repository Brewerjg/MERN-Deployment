import React, { useEffect} from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom'





const NoteList = (props) => {
    

    const { note, setNote } = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api")
    	.then((res)=>{
	    console.log(res.data);
            setNote(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        
        <div className='m-3'>
            <h1 className='text-center bg-info-subtle'>Note Wall</h1>
            Leave a note!
            <br/>
            {
                note.map((note, index)=>{
                    return (
                        
                        <div key={index}>
                            
                            <div class="border container text-center">
                                <div class="row">
                                    <div class="border col">
                                        <h3>{note.title}</h3>
                                        {note.noteBody}
                                    </div>
                                    <div class="col">
                                        <Link to={"/notes/" + note._id}>
                                        <button className='mt-3 btn btn-warning btn-lg' >Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )})
                    
            }
            <Link to={"/notes/new"}>
            <button className='m-4 btn btn-info btn-sm' >Write Note</button>
            </Link>
        </div>
    );
}
export default NoteList;