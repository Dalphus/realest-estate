import React from "react";

import NoteForm from "./NoteForm";

function handleClick(e) {
  if( e ) e.preventDefault();
  this.setState({ showNoteForm: !this.state.showNoteForm });
}

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNoteForm: true
    };
    this.handleClick = handleClick.bind(this);
  }

  render() {
    return (

    );
  }
}

export default AddNote;
