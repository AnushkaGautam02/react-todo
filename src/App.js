import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import note from './note';
import CreateArea from './CreateArea';
import { useState } from 'react';


// function note_desc(note){
//   return(
//     <Notes title={note.title} content={note.content}/>
//   )
// }
function App() {
  const [notes, setNotes] =useState([]);
  const addNote = (newNote)=>{
    setNotes(prevNotes =>{
      return [...prevNotes,newNote]
    })

  }
  const deleteNote= (id)=>{
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id
      })
    })
  }
  return (
    <div className="App">
      
        <Header/>
        <CreateArea onAdd= {addNote}/>
        <div className='keeper-section'>
        {notes.map((noteItem, index) =>{
          return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete= {deleteNote}/>
        })}
        </div>
        <Footer/>
      
    </div>
  );
}

export default App;
