import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Note({ id, title, text }) {
  const [viewTags, setViewTags] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get(`/notetags/${id}`)
      .then((res) => {
        setTags(res.data)
      });
  }, []);

  return (
    <div className="note" onClick={() => setViewTags(!viewTags)}>
      <h1>{title}</h1>
      <p>{text}</p>
      {viewTags ?
        <div className="tag-container">
          {tags.length ?
          tags.map((tag) => (
            <button key={tag} onClick={() => {}} value={tag}>{tag}</button>
          ))
          : <p>No tags here! Click "edit" to add one.</p>
          }
        </div>
        : undefined
      }
    </div>
  );
}

export default Note;
