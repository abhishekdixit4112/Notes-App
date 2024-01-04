import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }
  const handleOnClick = () => {
    if (noteText.trim().length> 0 ) {
      handleAddNote(noteText);
      setNoteText("");
      
    }
  }

  return (
    <div className="note new">
      <textarea
        row="8"
        col="10"
        value={noteText}
        onChange={handleChange}
        placeholder="Type to Add a Note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
                <button className="Save" onClick={handleOnClick}>Save</button>
      </div>
    </div>
  );
};
export default AddNote;