import React from 'react';

import Search from './Search';
import NoteView from './NoteView';
import Discovery from './Discovery';

function App() {
  return (<>
    <div className="container">
      <div className="note-viewer">
        <Search />
        <NoteView />
      </div>
      <Discovery />
    </div>
  </>);
}

export default App;
