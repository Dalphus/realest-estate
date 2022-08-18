import React from 'react';
import axios from 'axios';

import Note from './Note';

function displayNotes(notes) {
  const noteComponents = [];
  for (let i = notes.length; i > 0; i--) {
    const note = notes[i - 1];
    noteComponents.push(
      <Note
        key={note.id}
        id={note.id}
        text={note.body}
        title={note.title}
      />
    );
  }

  return noteComponents;
}

class NoteView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const setNotes = this.props.setNotes.bind(this);
    axios.get('/notes')
      .then((res) => {
        setNotes(res.data);
      });
  }

  render() {
    return (
      <div id="note-list">
        {displayNotes(this.props.notes)}
      </div>
    );
  }
}

export default NoteView;
