const db = require('../config/db');

const createUser = (id, username, password, email, role, photoURL) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (id, username, password, email, role, photoURL) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE username = VALUES(username), email = VALUES(email), photoURL = VALUES(photoURL)';
    db.query(query, [id, username, password, email, role, photoURL], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results.length > 0);
    });
  });
};

module.exports = {
  createUser,
  findUserById
};