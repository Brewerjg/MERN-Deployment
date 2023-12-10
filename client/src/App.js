import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main';
import Update from './components/update';
import NoteForm from './components/noteForm';


function App() {
  return (
    <div>
    	<BrowserRouter>
            <Routes>
                <Route element={<Main/>} path="/" default/>  
                <Route element={<NoteForm/>} path="/notes/new" />
                <Route element={<Update/>} path="/notes/:id"/> 
                
            </Routes>
    	</BrowserRouter>
        </div>
  );
}

export default App;
