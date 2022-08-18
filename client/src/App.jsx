import React, { useState } from 'react';
import axios from 'axios';

import Search from './Search';
import NoteView from './NoteView';
import Discovery from './Discovery';

function App() {
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
    const set = setNotes.bind(this);

    axios.get(`/notes/${e.target.value}`)
      .then((res) => {
        set(res.data);
      });
    setNotes()
  }

  return (<>
    <div className="container">
      <div className="note-viewer">
        <Search query={query} handleChange={handleChange} />
        <NoteView notes={notes} setNotes={setNotes}/>
      </div>
      <Discovery />
    </div>
  </>);
}

export default App;
