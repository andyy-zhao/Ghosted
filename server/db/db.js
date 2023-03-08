const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Get the path to the file on your desktop
const DBSOURCE = path.join(require('os').homedir(), 'Desktop', 'chat.db');
const DBSOURCENAMES = path.join(require('os').homedir(), 'Desktop', 'AddressBook-v22.abcddb');
// const DBSOURCE = './db/chat.db';
// const DBSOURCENAMES = './db/AddressBook-v22.abcddb';

let db = new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.')
});

let dbNames = new sqlite3.Database(DBSOURCENAMES, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database for Names.')
});

module.exports = {db, dbNames};