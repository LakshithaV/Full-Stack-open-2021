import React, { useEffect, useState } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      //console.log(initialNotes);
      setNotes(initialNotes);
    });
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
