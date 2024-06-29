import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function updateTitle(e) {
    let { value } = e.target;
    setTitle(value);
  }
  function updateContent(e) {
    let { value } = e.target;
    setContent(value);
  }
  function updateNotes(e) {
    setNotes((prev) => {
      return [...prev, [title, content]];
    });

    e.preventDefault();
  }
  function remove(id) {
    let newNotes = notes.filter((item, index) => {
      return index !== id;
    });
    setNotes(newNotes);
  }

  return (
    <div id="App">
      <div id="app-wrapper">
        <h1 className="app-title">Keeper</h1>
        <form action="submit" onSubmit={updateNotes}>
          <input name="title" onChange={updateTitle} value={title} type="text" placeholder="Title" />
          <textarea name="content" onChange={updateContent} value={content} type="text" placeholder="Your note"></textarea>
          <button type="submit">Add</button>
        </form>
        <div className="card-container">
          {notes.map((note, index) => {
            return (
              <div className="card" key={index} id={index}>
                <h1 className="title">{note[0]}</h1>
                <p className="content">{note[1]}</p>
                <button
                  onClick={() => {
                    remove(index);
                  }}>
                  Delete
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
