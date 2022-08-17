import React from 'react';

import Search from './Search';
import NoteView from './NoteView';
import Discovery from './discovery/Discovery';
import AddNote from './form/AddNote';

function App() {
  return (<>
    <div className="container">
      <div className="note-viewer">
        <Search />
        <NoteView />
      </div>
      <Discovery />
    </div>
    <AddNote />
  </>)
}

export default App;
