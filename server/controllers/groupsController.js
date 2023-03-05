const { db, dbNames } = require('../db/db');

const getGroupChats = async (req, res) => { 
    let sql = `SELECT
	group_concat(DISTINCT h.id) AS participants,
	count(m. "ROWID") AS message_count
FROM
	chat c
	JOIN chat_handle_join chj ON chj.chat_id = c. "ROWID"
	JOIN handle h ON h. "ROWID" = chj.handle_id
	JOIN chat_message_join cmj ON cmj.chat_id = c. "ROWID"
	JOIN message m ON m. "ROWID" = cmj.message_id
GROUP BY
	c. "ROWID"
HAVING
	count(DISTINCT h.id) > 1
ORDER BY
	message_count DESC
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

module.exports = {getGroupChats: getGroupChats};