const cors = require('cors');
const express = require('express');
const ratingsRoutes = require('./routes/ratingsRoutes');
const sentAndReceivedRoutes = require('./routes/sentAndReceivedRoutes');
const messagesRoutes = require('./routes/messagesRoutes');
const hoursRoutes = require('./routes/hoursRoutes');
const daysRoutes = require('./routes/daysRoutes');
const groupsRoutes = require('./routes/groupsRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', ratingsRoutes);
app.use('/api', sentAndReceivedRoutes);
app.use('/api', messagesRoutes);
app.use('/api', hoursRoutes);
app.use('/api', daysRoutes);
app.use('/api', groupsRoutes);


const port = process.env.PORT || 5001;
app.listen(port, () => { 
    console.log(`Server is listening at http://localhost:${port}`);
});
