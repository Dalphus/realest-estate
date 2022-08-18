const db = require('./index');

const errorHandler = (err) => console.error(err);

const getTestData = () => {
  const queryString = 'SELECT * FROM test';

  return db.query(queryString)
    .then((res) => res.rows)
    .catch(errorHandler);
};

const getNotes = () => {
  const queryString = 'SELECT * FROM notes';

  return db.query(queryString)
    .then((res) => res.rows)
    .catch(errorHandler);
};

const getNotesByTag = (tag) => {
  const queryString =
  `SELECT notes.id, notes.title, notes.body
  FROM notes, tags, note_tags
  WHERE tags.name = '${tag}'
  AND note_tags.tag_id = tags.id
  AND note_tags.note_id = notes.id`;

  console.log(queryString);

  return db.query(queryString)
    .then((res) => res.rows)
    .catch(errorHandler);
};

const addNote = (note) => {
  const queryString =
  `INSERT INTO notes (
    body,
    title
  ) VALUES (
    '${note.body}',
    '${note.title}'
  ) RETURNING id`;

  return db.query(queryString)
    .then((res) => {
      if (note.tags.length) {
        return addTags(res.rows[0].id, note.tags);
      }
    })
    .catch(errorHandler);
};

const addTags = (note_id, tags) => {
  const queryString =
  `INSERT INTO note_tags (note_id , tag_id) 
  VALUES
  ${tags.map((tag) => (
    `(${note_id}, (SELECT id FROM tags WHERE name='${tag}')),`
  )).join('\n').slice(0, -1)}`
  
  return db.query(queryString)
    .catch(errorHandler);
}

const getTags = (query) => {
  const queryString =
  `SELECT array_agg(name::TEXT) AS array
  FROM tags
  WHERE name LIKE '${query}%'`;

  return db.query(queryString)
    .then((res) =>  {
      return res.rows[0].array || [];
    })
    .catch(errorHandler);
}

const getNoteTags = (note_id) => {
  const queryString =
  `SELECT array_agg(name::TEXT) AS array
  FROM tags, note_tags, notes
  WHERE notes.id = ${note_id}
  AND note_tags.tag_id = tags.id
  AND note_tags.note_id = notes.id`;

  return db.query(queryString)
    .then((res) =>  {
      return res.rows[0].array || [];
    })
    .catch(errorHandler);
}

module.exports = {
  getTestData,
  getNotes,
  addNote,
  getTags,
  getNoteTags,
  getNotesByTag
};
