import "./App.css";
import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NoteState } from "./notesReducer";
import { disposeEmitNodes } from "typescript";

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <>
      <NewNoteInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
