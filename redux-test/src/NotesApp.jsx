import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNote,
  removeNote,
  clearNotes,
  selectNotes,
} from "./store/notesSlice";

function NotesApp() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);

  const handleAddNote = () => {
    if (noteText) {
      dispatch(addNote(noteText));
      setNoteText("");
    }
  };

  const handleRemoveNotes = (index) => {
    dispatch(removeNote(index));
  };

  const handleClearNotes = () => {
    dispatch(clearNotes());
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write a note..."
      />

      <button className="add-notes" onClick={handleAddNote}>
        Add Note
      </button>
      <button className="clear-note" onClick={handleClearNotes}>
        Clear Note
      </button>

      <ol>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button
              className="remove-note"
              onClick={() => handleRemoveNotes(index)}
            >
              Remove Note
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default NotesApp;
