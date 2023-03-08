const { db, dbNames } = require('../db/db');

const getRatings = async (req, res) => { 
    let sql = `SELECT
    h.id AS WithPhoneNumber,
    count(1) AS TotalMessagesSentAndReceived,
    sum(length(m.text)) AS Characters,
    sum(length(m.text)) FILTER (WHERE m.is_from_me) AS CharactersSent,
    sum(length(m.text)) FILTER (WHERE NOT m.is_from_me) AS CharactersReceived,
    sum(m.is_from_me) AS MessagesSent,
    count(1) FILTER (WHERE NOT m.is_from_me) AS MessagesReceived,
    round(avg(length(m.text)) FILTER (WHERE m.is_from_me)) AS AverageLengthSent,
    round(avg(length(m.text)) FILTER (WHERE NOT m.is_from_me)) AS AverageLengthReceived,
    round((sum(length(m.text)) FILTER (WHERE m.is_from_me) * 1.0 / sum(length(m.text)) FILTER (WHERE NOT m.is_from_me)), 2) AS CharactersSentRatio,
    round((count(1) FILTER (WHERE m.is_from_me)) * 1.0 / (count(1) FILTER (WHERE NOT m.is_from_me)), 2) AS ReplyRatio
    FROM
        message m
        JOIN handle h ON h.rowid = m.handle_id
    GROUP BY
        h.id
    ORDER BY
        TotalMessagesSentAndReceived DESC
    LIMIT 10`;

    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getNames = async (req, res) => { 
    let sql = `SELECT 
	substr(ZSTRINGFORINDEXING, 1, instr(ZSTRINGFORINDEXING, ' ') - 1) AS Name,
	RTRIM(SUBSTR(ZSTRINGFORINDEXING, LENGTH(ZSTRINGFORINDEXING) - 25)) AS Number
    FROM ZABCDCONTACTINDEX`;
    try {
        dbNames.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getTopWord = async (req, res) => { 
    let sql = `WITH words AS (
        SELECT
            TRIM(LOWER(REPLACE(REPLACE(text, '.', ''), ',', ''))) AS word
        FROM
            message
        WHERE
            is_from_me = 1
    ),
    word_counts AS (
        SELECT
            word,
            COUNT(*) AS frequency
        FROM
            words
        WHERE
            word != ''
            AND word != ' '
        GROUP BY
            word
    )
    SELECT
        word,
        frequency
    FROM
        word_counts
    ORDER BY
        frequency DESC
    LIMIT 20;`;
    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getReceivedWords = async (req, res) => { 
    let sql = `WITH words AS (
        SELECT
            TRIM(LOWER(REPLACE(REPLACE(text, '.', ''), ',', ''))) AS word
        FROM
            message
        WHERE
            is_from_me = 0
    ),
    word_counts AS (
        SELECT
            word,
            COUNT(*) AS frequency
        FROM
            words
        WHERE
            word != ''
            AND word != ' '
        GROUP BY
            word
    )
    SELECT
        word,
        frequency
    FROM
        word_counts
    ORDER BY
        frequency DESC
    LIMIT 20;`;
    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};


const getTopEmoji = async (req, res) => { 
    let sql = `SELECT
	count(1) filter (where text like "😀") as 😀,
count(1) filter (where text like "😁") as 😁,
count(1) filter (where text like "😂") as 😂,
count(1) filter (where text like "🤣") as 🤣,
count(1) filter (where text like "😃") as 😃,
count(1) filter (where text like "😄") as 😄,
count(1) filter (where text like "😅") as 😅,
count(1) filter (where text like "😆") as 😆,
count(1) filter (where text like "😉") as 😉,
count(1) filter (where text like "😊") as 😊,
count(1) filter (where text like "😋") as 😋,
count(1) filter (where text like "😎") as 😎,
count(1) filter (where text like "😍") as 😍,
count(1) filter (where text like "😘") as 😘,
count(1) filter (where text like "😗") as 😗,
count(1) filter (where text like "😙") as 😙,
count(1) filter (where text like "😚") as 😚,
count(1) filter (where text like "☺️") as ☺️,
count(1) filter (where text like "🙂") as 🙂,
count(1) filter (where text like "🤗") as 🤗,
count(1) filter (where text like "🤩") as 🤩,
count(1) filter (where text like "🥰") as 🥰,
count(1) filter (where text like "😇") as 😇,
count(1) filter (where text like "🤔") as 🤔,
count(1) filter (where text like "🤨") as 🤨,
count(1) filter (where text like "😐") as 😐,
count(1) filter (where text like "😑") as 😑,
count(1) filter (where text like "😶") as 😶,
count(1) filter (where text like "😏") as 😏,
count(1) filter (where text like "😣") as 😣,
count(1) filter (where text like "😥") as 😥,
count(1) filter (where text like "😮") as 😮,
count(1) filter (where text like "🤐") as 🤐,
count(1) filter (where text like "😯") as 😯,
count(1) filter (where text like "😪") as 😪,
count(1) filter (where text like "😫") as 😫,
count(1) filter (where text like "🥱") as 🥱,
count(1) filter (where text like "😴") as 😴,
count(1) filter (where text like "😌") as 😌,
count(1) filter (where text like "😛") as 😛,
count(1) filter (where text like "😜") as 😜,
count(1) filter (where text like "😝") as 😝,
count(1) filter (where text like "🤤") as 🤤
FROM
	message;`;

    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getAverageSentLength = async (req, res) => { 
    let sql = `SELECT AVG(LENGTH(text)) AS avg_message_length
    FROM message
    WHERE is_sent=1;`;
    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getAverageReceivedLength = async (req, res) => { 
    let sql = `SELECT AVG(LENGTH(text)) AS avg_message_length
    FROM message
    WHERE is_sent=0;`;
    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getLeftOnReadTimes = async (req, res) => { 
    let sql = `SELECT
	COUNT(*) as count
FROM
	message
WHERE
	is_from_me = 1
	AND cache_has_attachments = 0
	AND date_read > 0;`;
    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {getRatings: getRatings, getNames: getNames, getTopWord: getTopWord, getTopEmoji: getTopEmoji, 
    getReceivedWords: getReceivedWords, getAverageSentLength: getAverageSentLength, 
    getAverageReceivedLength: getAverageReceivedLength, getLeftOnReadTimes: getLeftOnReadTimes};