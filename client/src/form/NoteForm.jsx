import React from 'react';
import axios from 'axios';

import TagSearch from '../tags/TagSearch';

const idToState = {
  'note-title': 'title',
  'note-body': 'body'
};

function handleSubmit(e) {
  e.preventDefault();
  axios.post('/notes', this.state);
  
  this.setState({ title: '', body: '', tags: [] });
};

function handleChange(e) {
  this.setState({ [idToState[e.target.id]]: e.target.value });
};

function toggleTag(tag) {
  const oldTags = this.state.tags;
  let newTags;

  if (this.state.tags.includes(tag)) {
    const index = oldTags.indexOf(tag);
    newTags = oldTags.slice(0, index).concat(oldTags.slice(index + 1));
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
      <form id='add-note-form' onSubmit={this.handleSubmit} autoComplete="off">
        <button className='close-form' onClick={this.props.close}>✕</button>

        <label>Title (optional):</label>
        <input type='text' id='note-title' onChange={this.handleChange} value={this.state.title} />

        <label htmlFor='note-body'>Body:</label>
        <textarea id='note-body' onChange={this.handleChange} value={this.state.body} required />
        
        <TagSearch toggleTag={this.toggleTag} tags={this.state.tags}/>

        <button type='submit'>ADD NOTE</button>
      </form>
    )
  }
}

export default NoteForm;
