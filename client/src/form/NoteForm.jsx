import React from 'react';
import axios from 'axios';

import TagSearch from '../tags/TagSearch';

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
  this.setState({ title: '', body: '', tags: [] });
};

function handleChange(e) {
  this.setState({ [idToState[e.target.id]]: e.target.value });
};

function toggleTag(tag) {
  let newTags;

  if (this.state.tags.includes(tag)) {
    newTags = this.state.tags.slice(0, i).concat(this.state.tags.slice(i + 1));
  } else {
    newTags = this.state.tags.slice().concat(tag);
  }

  this.setState({ tags: newTags });
}

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', body: '', tags: [] };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.toggleTag = toggleTag.bind(this);
  }
  render() {
    return (
      <form id="add-note-form" onSubmit={this.handleSubmit}>

        <label>Title (optional):</label>
        <input type='text' id='note-title' onChange={this.handleChange} />

        <label htmlFor="note-body">Body:</label>
        <textarea id='note-body' onChange={this.handleChange} required />
        
        <TagSearch toggleTag={toggleTag} tags={this.state.tags}/>

        <button type='submit'>ADD NOTE</button>
      </form>
    )
  }
}

export default NoteForm;
