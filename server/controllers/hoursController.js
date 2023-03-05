const { db } = require('../db/db');

const getSentTimes = async (req, res) => { 
    let sql = `SELECT COUNT(*) AS TotalSentMessages,
    strftime('%H', datetime((m.date / 1000000000) + 978307200, 'unixepoch', 'localtime')) AS HourOfDay
    FROM message AS m
    WHERE m.is_from_me = 1
    GROUP BY HourOfDay
    ORDER BY HourOfDay ASC;`;

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

const getReceivedTimes = async (req, res) => { 
    let sql = `SELECT COUNT(*) AS TotalReceivedMessages,
    strftime('%H', datetime((m.date / 1000000000) + 978307200, 'unixepoch', 'localtime')) AS HourOfDay
    FROM message AS m
    WHERE m.is_from_me = 0
    GROUP BY HourOfDay
    ORDER BY HourOfDay ASC;`;

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


module.exports = {getSentTimes: getSentTimes, getReceivedTimes: getReceivedTimes};