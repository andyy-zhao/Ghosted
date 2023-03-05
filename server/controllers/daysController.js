const { db } = require('../db/db');

const getDays = async (req, res) => {
    const MAX_PERIODS = 100; // maximum number of biweekly periods to fetch
    const biweeklyPeriods = [];
    let latestEndDate = new Date();
    let startDate = new Date('2021-12-21');
  
    for (let i = 0; i < MAX_PERIODS; i++) {
      const endDate = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days in milliseconds
      if (endDate > latestEndDate) {
        break;
      }
      const sql = `SELECT 
      COUNT(*) AS TotalMessages, 
      SUM(CASE WHEN m.is_from_me = 1 THEN 1 ELSE 0 END) AS SentMessages,
      SUM(CASE WHEN m.is_from_me = 0 THEN 1 ELSE 0 END) AS ReceivedMessages,
      '${startDate.toISOString().substr(0, 10)} - ${endDate.toISOString().substr(0, 10)}' AS DateRange
        FROM message as m
        WHERE datetime((m.date / 1000000000) + 978307200, 'unixepoch', 'localtime') >= '${startDate.toISOString().substr(0, 10)}'
          AND datetime((m.date / 1000000000) + 978307200, 'unixepoch', 'localtime') <= '${endDate.toISOString().substr(0, 10)}'`;
  
      try {
        const result = await new Promise((resolve, reject) => {
          db.all(sql, [], (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows[0]);
            }
          });
        });
        biweeklyPeriods.push(result);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      startDate = new Date(endDate.getTime() + 1 * 24 * 60 * 60 * 1000); // add 1 day to start of next period
    }
  
    res.status(200).json(biweeklyPeriods);
  };



module.exports = { getDays: getDays };
