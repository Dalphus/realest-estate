import React from 'react';

import Note from './Note';
import NoteForm from './NoteForm';

function toggleNoteForm() {
  this.setState({ showNoteForm: !this.state.showNoteForm });
}

function handleClick(e) {
  e.preventDefault();
  this.toggleNoteForm();
}

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showNoteForm: false };

    this.toggleNoteForm = toggleNoteForm.bind(this);
    this.handleClick = handleClick.bind(this);
  }

  render() {
    return (<>
      <div id="discovery">
      </div>
      <button id="add-note" onClick={this.handleClick}>+</button>
      {this.state.showNoteForm && <NoteForm close={this.handleClick} />}
    </>);
  }
};

export default Discovery;
