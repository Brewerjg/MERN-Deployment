import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';





const NoteForm = () => {

    const [title, setTitle] = useState(""); 
    const [noteBody, setNoteBody] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();



    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/note/new', {
            title,    
            noteBody    
        })
            .then(res=>{
                console.log(res.data);
                navigate('/');
                
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(err.response);
                const errorArr = Object.values(errorResponse).map((error) => error.message);
                setErrors(errorArr);
        });            
}
    
    return (
    <div onSubmit={onSubmitHandler} className='container d-flex justify-content-center'>
        <form action="">
            
        {errors.map((err, index) => (
            <p key={index}>{err}</p>
        ))}
            <h1>Write Notes</h1>
            <p>Write a new note!</p>
            <Link to={"/"}>
            <button className='ms-5 btn btn-info ' >Home</button>
            </Link>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                    Note Title
                </label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} class="form-control border border-dark" id="formGroupExampleInput"/>

            </div>
            <div class="mb-3 ">
                <label for="formGroupExampleInput2" class="form-label">
                    Note Body
                </label>
                <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setNoteBody(e.target.value)}></textarea>
            </div>
            <div class="mb-3 ">
                <button class="btn btn-primary" type="submit">
                    write this note!</button>
            </div>
        </form>
    </div>
    )
}
export default NoteForm;






