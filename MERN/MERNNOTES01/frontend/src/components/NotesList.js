import { useEffect, useState } from "react";
import Note from "./Note.js";
import NewNote from "./NewNote.js";
function NotesList() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("http://localhost:5000/");
    const result = await response.json();
    setNotes(result);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note key={note._id} text={note.text} date={note.date} />;
      })}
      <NewNote />
    </div>
  );
}

export default NotesList;
