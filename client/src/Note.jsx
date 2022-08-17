import React from 'react';


function Note({ title, text }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Note;
