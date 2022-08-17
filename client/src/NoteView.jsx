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
        setState({ notes: res.body });
      });
  }

  render() {
    return (
      <Note text="good note"/>
    );
  }
}

export default NoteView;
