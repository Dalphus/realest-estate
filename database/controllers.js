const db = require('./index');

const errorHandler = (err) => console.error(err);

const getTestData = () => {
  const queryString = 'SELECT * FROM test';

  return db.query(queryString)
    .then((res) => res.rows)
    .catch(errorHandler);
};

const getNotes = () => {
  const queryString = 'SELECT title, body FROM notes';

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
  FROM tags
  WHERE notes.id = ${note_id}%`;

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
  getNoteTags
};
