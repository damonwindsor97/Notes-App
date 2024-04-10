import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import "./notes.css";
import { v4 as uuid } from "uuid";

import Note from "./Note";
import Search from "./Search";

function Notes() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("userNotes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [editToggle, setEditToggle] = useState(null);

  var timeNow = new Date();
  var dateTime = timeNow.toLocaleString()

  const handleEdit = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const handleSave = () => {
    if (editToggle) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputText,
          date: dateTime
        },
      ]);
    }
    setInputText("");
    setEditToggle(null);
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(notes));
  }, [notes]);

  // Function to handle search text change
  const handleSearchTextChange = (searchText) => {
    setSearchText(searchText);
  };

  // Filtering notes based on the search text
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Passing handleSearchTextChange function to Search */}
      <Search handleSearchText={handleSearchTextChange} />
      <div className="notes">
        {filteredNotes.map((note) =>
          editToggle === note.id ? (
            <CreateNote
              key={note.id}
              inputText={inputText}
              setInputText={setInputText}
              handleSave={handleSave}
            />
          ) : (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )
        )}
        {!editToggle && (
          <CreateNote
            inputText={inputText}
            setInputText={setInputText}
            handleSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}

export default Notes;