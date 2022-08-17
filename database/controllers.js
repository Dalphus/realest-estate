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
  )`

  return db.query(queryString)
    .catch(errorHandler);
};

const getTags = (query) => {
  const queryString =
  `SELECT array_agg(name::TEXT) AS array
  FROM tags
  WHERE name LIKE '${query}%'`;

  return db.query(queryString)
    .then((res) =>  {
      console.log(res.rows);
      return res.rows[0].array || [];
    })
    .catch(errorHandler);
}

module.exports = {
  getTestData,
  getNotes,
  addNote,
  getTags
};
