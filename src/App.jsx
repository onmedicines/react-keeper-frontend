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
    setTitle(value);
  }
  // function updateNotes(){
  //   setNotes((prev)=>{
  //     return [...prev]
  //   })
  // }

  return (
    <div id="App">
      <div id="app-wrapper">
        <h1 className="app-title">Keeper</h1>
        <form action="submit">
          <input name="title" onChange={updateTitle} value={title} type="text" placeholder="Title" />
          <input name="content" onChange={updateContent} value={content} type="text" placeholder="Your note" />
          <button type="submit">Add</button>
        </form>
        <div className="card-container">
          <div className="card">
            <h1 className="title">This is title</h1>
            <p className="content">This the content of the note.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
