import React from "react";

import NoteForm from "./NoteForm";

function handleClick() {
  this.setState({ showNoteForm: true });
}

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNoteForm: false
    };
    this.handleClick = handleClick.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.showNoteForm && <NoteForm />}
        <button id="add-note" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default AddNote;
