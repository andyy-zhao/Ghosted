const { db } = require('../db/db');

const getSentAndReceived = async (req, res) => { 
    let sql = `SELECT 
	COUNT(*) FILTER (WHERE m.is_from_me = 1) as Sent,
	COUNT(*) FILTER (WHERE m.is_from_me = 0) as Received
    FROM message m;`;

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

const getSentEmojis = async (req, res) => { 
    let sql = `SELECT
	count(1) filter (where text like "😀" and m.is_from_me=1) as 😀,
count(1) filter (where text like "😁" and m.is_from_me=1) as 😁,
count(1) filter (where text like "😂" and m.is_from_me=1) as 😂,
count(1) filter (where text like "🤣" and m.is_from_me=1) as 🤣,
count(1) filter (where text like "😃" and m.is_from_me=1) as 😃,
count(1) filter (where text like "😄" and m.is_from_me=1) as 😄,
count(1) filter (where text like "😅" and m.is_from_me=1) as 😅,
count(1) filter (where text like "😆" and m.is_from_me=1) as 😆,
count(1) filter (where text like "😉" and m.is_from_me=1) as 😉,
count(1) filter (where text like "😊" and m.is_from_me=1) as 😊,
count(1) filter (where text like "😋" and m.is_from_me=1) as 😋,
count(1) filter (where text like "😎" and m.is_from_me=1) as 😎,
count(1) filter (where text like "😍" and m.is_from_me=1) as 😍,
count(1) filter (where text like "😘" and m.is_from_me=1) as 😘,
count(1) filter (where text like "😗" and m.is_from_me=1) as 😗,
count(1) filter (where text like "😙" and m.is_from_me=1) as 😙,
count(1) filter (where text like "😚" and m.is_from_me=1) as 😚,
count(1) filter (where text like "☺️" and m.is_from_me=1) as ☺️,
count(1) filter (where text like "🙂" and m.is_from_me=1) as 🙂,
count(1) filter (where text like "🤗" and m.is_from_me=1) as 🤗,
count(1) filter (where text like "🤩" and m.is_from_me=1) as 🤩,
count(1) filter (where text like "🥰" and m.is_from_me=1) as 🥰,
count(1) filter (where text like "😇" and m.is_from_me=1) as 😇,
count(1) filter (where text like "🤔" and m.is_from_me=1) as 🤔,
count(1) filter (where text like "🤨" and m.is_from_me=1) as 🤨,
count(1) filter (where text like "😐" and m.is_from_me=1) as 😐,
count(1) filter (where text like "😑" and m.is_from_me=1) as 😑,
count(1) filter (where text like "😶" and m.is_from_me=1) as 😶,
count(1) filter (where text like "😏" and m.is_from_me=1) as 😏,
count(1) filter (where text like "😣" and m.is_from_me=1) as 😣,
count(1) filter (where text like "😥" and m.is_from_me=1) as 😥,
count(1) filter (where text like "😮" and m.is_from_me=1) as 😮,
count(1) filter (where text like "🤐" and m.is_from_me=1) as 🤐,
count(1) filter (where text like "😯" and m.is_from_me=1) as 😯,
count(1) filter (where text like "😪" and m.is_from_me=1) as 😪,
count(1) filter (where text like "😫" and m.is_from_me=1) as 😫,
count(1) filter (where text like "🥱" and m.is_from_me=1) as 🥱,
count(1) filter (where text like "😴" and m.is_from_me=1) as 😴,
count(1) filter (where text like "😌" and m.is_from_me=1) as 😌,
count(1) filter (where text like "😛" and m.is_from_me=1) as 😛,
count(1) filter (where text like "😜" and m.is_from_me=1) as 😜,
count(1) filter (where text like "😝" and m.is_from_me=1) as 😝,
count(1) filter (where text like "🤤" and m.is_from_me=1) as 🤤
FROM
	message as m;`;

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

const getReceivedEmojis = async (req, res) => { 
    let sql = `SELECT
	count(1) filter (where text like "😀" and m.is_from_me=0) as 😀,
count(1) filter (where text like "😁" and m.is_from_me=0) as 😁,
count(1) filter (where text like "😂" and m.is_from_me=0) as 😂,
count(1) filter (where text like "🤣" and m.is_from_me=0) as 🤣,
count(1) filter (where text like "😃" and m.is_from_me=0) as 😃,
count(1) filter (where text like "😄" and m.is_from_me=0) as 😄,
count(1) filter (where text like "😅" and m.is_from_me=0) as 😅,
count(1) filter (where text like "😆" and m.is_from_me=0) as 😆,
count(1) filter (where text like "😉" and m.is_from_me=0) as 😉,
count(1) filter (where text like "😊" and m.is_from_me=0) as 😊,
count(1) filter (where text like "😋" and m.is_from_me=0) as 😋,
count(1) filter (where text like "😎" and m.is_from_me=0) as 😎,
count(1) filter (where text like "😍" and m.is_from_me=0) as 😍,
count(1) filter (where text like "😘" and m.is_from_me=0) as 😘,
count(1) filter (where text like "😗" and m.is_from_me=0) as 😗,
count(1) filter (where text like "😙" and m.is_from_me=0) as 😙,
count(1) filter (where text like "😚" and m.is_from_me=0) as 😚,
count(1) filter (where text like "☺️" and m.is_from_me=0) as ☺️,
count(1) filter (where text like "🙂" and m.is_from_me=0) as 🙂,
count(1) filter (where text like "🤗" and m.is_from_me=0) as 🤗,
count(1) filter (where text like "🤩" and m.is_from_me=0) as 🤩,
count(1) filter (where text like "🥰" and m.is_from_me=0) as 🥰,
count(1) filter (where text like "😇" and m.is_from_me=0) as 😇,
count(1) filter (where text like "🤔" and m.is_from_me=0) as 🤔,
count(1) filter (where text like "🤨" and m.is_from_me=0) as 🤨,
count(1) filter (where text like "😐" and m.is_from_me=0) as 😐,
count(1) filter (where text like "😑" and m.is_from_me=0) as 😑,
count(1) filter (where text like "😶" and m.is_from_me=0) as 😶,
count(1) filter (where text like "😏" and m.is_from_me=0) as 😏,
count(1) filter (where text like "😣" and m.is_from_me=0) as 😣,
count(1) filter (where text like "😥" and m.is_from_me=0) as 😥,
count(1) filter (where text like "😮" and m.is_from_me=0) as 😮,
count(1) filter (where text like "🤐" and m.is_from_me=0) as 🤐,
count(1) filter (where text like "😯" and m.is_from_me=0) as 😯,
count(1) filter (where text like "😪" and m.is_from_me=0) as 😪,
count(1) filter (where text like "😫" and m.is_from_me=0) as 😫,
count(1) filter (where text like "🥱" and m.is_from_me=0) as 🥱,
count(1) filter (where text like "😴" and m.is_from_me=0) as 😴,
count(1) filter (where text like "😌" and m.is_from_me=0) as 😌,
count(1) filter (where text like "😛" and m.is_from_me=0) as 😛,
count(1) filter (where text like "😜" and m.is_from_me=0) as 😜,
count(1) filter (where text like "😝" and m.is_from_me=0) as 😝,
count(1) filter (where text like "🤤" and m.is_from_me=0) as 🤤
FROM
	message as m;`;

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

module.exports = {getSentAndReceived: getSentAndReceived, getSentEmojis:getSentEmojis, getReceivedEmojis:getReceivedEmojis};