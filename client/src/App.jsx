import React from 'react';

import Search from './Search';
import NoteView from './NoteView';
import Discovery from './Discovery';

function App() {
  return (<>
    <div className="left-container">
      <Search />
      <NoteView />
    </div>
    <Discovery />
  </>)
}

export default App;
