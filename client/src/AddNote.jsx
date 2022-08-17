import React from "react";

import NoteForm from "./NoteForm";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNoteForm: false
    };
  }

  render() {
    return (
      <div>
        <NoteForm hidden={!this.state.showNoteForm} />
        <button id="add-note">+</button>
      </div>
    );
  }
}

export default AddNote;
