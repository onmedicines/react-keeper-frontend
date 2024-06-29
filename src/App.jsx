import { useState } from "react";

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

  return (
    <div id="App">
      <div id="app-wrapper">
        <h1 className="app-title">Keeper</h1>
        <form action="submit" onSubmit={updateNotes}>
          <input name="title" onChange={updateTitle} value={title} type="text" placeholder="Title" />
          <input name="content" onChange={updateContent} value={content} type="text" placeholder="Your note" />
          <button type="submit">Add</button>
        </form>
        <div className="card-container">
          {notes.map((note, index) => {
            return (
              <div className="card">
                <h1 className="title">{note[0]}</h1>
                <p className="content">{note[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
