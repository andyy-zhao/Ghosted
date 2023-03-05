const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = './db/chat.db';
const DBSOURCENAMES = './db/AddressBook-v22.abcddb';

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