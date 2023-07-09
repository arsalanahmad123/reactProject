// import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import { data } from "./data";
// import { Form } from "./Form";
// import { Meme } from "./components/Meme";
// import { ApiRequest } from "./ApiRequest";
import { useState } from "react";
import { useEffect } from "react";
import { Hero } from "./components/Hero";
// import data from "./Data";
// import Box from "./Box";
import "./notes.css";

export function App() {
  // const [darkMode, setdarkMode] = useState(false);
  // const [squares, setSquares] = useState(data);
  // const squareElements = squares.map((square) => (
  //   <Box on={square.on} toggle={() => toggle(square.id)} />
  // ));

  // function toggle(id) {
  //   setSquares((prevSquare) => {
  //     return prevSquare.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : square;
  //     });
  //   });
  // }

  // function toggleMode() {
  //   setdarkMode((prevMode) => !prevMode);
  // }

  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type down your markdown note's title here",
    };
    setNotes([...notes, newNote]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  return (
    <>
      <main>
        {notes.length > 0 ? (
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNote}
            />
            {currentNoteId && notes.length > 0 && (
              <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
            )}
          </Split>
        ) : (
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button className="first-note" onClick={createNote}>
              Create one now
            </button>
          </div>
        )}
      </main>
    </>
  );
}
