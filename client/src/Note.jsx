import React, { useState } from 'react';

function Note({ title, text }) {
  const [viewTags, setViewTags] = useState(false);

  return (
    <div className="note" onClick={() => setViewTags(!viewTags)}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Note;
