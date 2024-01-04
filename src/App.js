import {useState,useEffect} from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';


const App=()=>{

  const[notes,setNotes]=useState([]);

const[searchText,setSearchText]=useState('');
const[darkMode,setDarkMode]=useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
},[]);

const addNote=(text)=>{
  const date=new Date();
const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()

 }
 const newNotes=[...notes,newNote];
setNotes(newNotes);
localStorage.setItem(
  'react-notes-app-data',
  JSON.stringify(newNotes)
);
};
const deleteNote=(id)=>{
 
  const newNotes=notes.filter((note)=>note.id!==id);
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(newNotes)
  );
  setNotes(newNotes);
}
  return(
    <>
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
    <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
    <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDelete={deleteNote}/>
    </div>
    </div>
    </>
    
  );
};
export default App;