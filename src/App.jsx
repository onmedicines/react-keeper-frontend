import { useState } from "react";
import "./App.css";

// material ui
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  function updateInputs(e) {
    let { name, value } = e.target;
    if (name === "title") setTitle(value);
    else if (name === "content") setContent(value);
  }
  function updateNotes(e) {
    if (title !== "" && content !== "") {
      setNotes((prev) => {
        return [...prev, { title: title, content: content }];
      });
      setTitle("");
      setContent("");
    }

    e.preventDefault();
  }
  function remove(id) {
    let newNotes = notes.filter((item, index) => {
      return index !== id;
    });
    setNotes(newNotes);
  }
  function updateIsExpanded(e) {
    setIsExpanded((prev) => {
      return true;
    });
  }

  return (
    <div id="App">
      <div id="app-wrapper">
        <h1 className="app-title">Keeper</h1>
        <form action="submit" onSubmit={updateNotes}>
          {isExpanded && <input name="title" onChange={updateInputs} value={title} type="text" placeholder="Title" />}
          <textarea name="content" onChange={updateInputs} value={content} type="text" placeholder="Your note" onClick={updateIsExpanded} rows={isExpanded ? "3" : "1"}></textarea>
          {isExpanded && (
            <button type="submit">
              <AddIcon></AddIcon>
            </button>
          )}
        </form>
        <div className="card-container">
          {notes.map((note, index) => {
            return (
              <div className="card" key={index} id={index}>
                <h1 className="title">{note.title}</h1>
                <p className="content">{note.content}</p>
                <button
                  onClick={() => {
                    remove(index);
                  }}>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
