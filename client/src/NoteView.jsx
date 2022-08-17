import React from 'react';
import axios from 'axios';

import Note from './Note';

class NoteView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    const setState = this.setState.bind(this);
    axios.get('/notes')
      .then((res) => {
        setState({ notes: res.data });
      });
  }

  render() {
    return (
      <div id="note-list">
        {this.state.notes.map((note, i) => (
          <Note key={i} text={note.body} title={note.title} />
        ))}
      </div>
    );
  }
}

export default NoteView;
