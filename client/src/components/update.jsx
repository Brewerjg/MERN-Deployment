import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";



const Update = () => {
    const { id } = useParams(); 
    const [title, setTitle] = useState();
    const [noteBody, setNoteBody] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const deleteNote = (noteId) => {
        axios.delete('http://localhost:8000/api/delete/' + noteId)
            .then(res => {

                navigate("/");
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/onenote/' + id)
            .then(res => {
                setTitle(res.data.title);
                setNoteBody(res.data.noteBody);

            })
            .catch(err => console.log(err))
    }, [])
    
    const updateNote = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/note/' + id, {
            title,
            noteBody,
    })   

            .then(res => {
                console.log(res);
                navigate("/"); 
            })

            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(err.response);
                const errorArr = Object.values(errorResponse).map((error) => error.message);
                setErrors(errorArr);
        });            
}


    return (
        <div className='m-5'>
            <h1>Note</h1>
            <Link to={"/"}>
            <button className='ms-5 btn btn-info btn-sm' >Home</button>
            </Link>
            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <form onSubmit={updateNote}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    title="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label for="formGroupExampleInput2" class="form-label">Note Body</label>
                    <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" value={noteBody}  onChange={(e)=>setNoteBody(e.target.value)}></textarea>

                </p>
                <input className='m-2 btn btn-primary btn-sm' type="submit" />
            </form>
            <div class="col">
                
                <button onClick={(e)=>{deleteNote(id)}} className='ms-2 btn btn-danger btn-sm' >Delete</button>
                
            </div>
        </div>
    )
}
export default Update;