
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNote , handleDelete}) => {
    return (
        
        <div className="Notes-List">
           {notes.map((note)=>
           (<Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete}/>)
           )}

           <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};
export default NotesList;