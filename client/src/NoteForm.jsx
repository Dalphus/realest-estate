import React from 'react';
import axios from 'axios';

const idToState = {
  'note-title': 'title',
  'note-body': 'body'
};

function handleSubmit(e) {
  e.preventDefault();
  axios.post('/notes', {
    title: this.state.title,
    body: this.state.body,
    tags: []
  });
};

function handleChange(e) {
  this.setState({ [idToState[e.target.id]]: e.target.value });
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', body: '', tags: [] };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }
  render() {
    return (
      <form id="add-note-form" onSubmit={this.handleSubmit}>

        <label>Title (optional):</label>
        <input type='text' id='note-title' onChange={this.handleChange} />

        <label htmlFor="note-body">Body:</label>
        <input type='textfield' id='note-body' onChange={this.handleChange} required />

        <button type='submit'>ADD NOTE</button>
      </form>
    )
  }
}

export default NoteForm;
