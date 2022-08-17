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

  return db.query(queryString);
};

module.exports = {
  getTestData,
  getNotes,
  addNote
};
