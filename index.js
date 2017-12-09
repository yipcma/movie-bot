// index.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
// const discoverMovie = require('./discoverMovie.js');
const app = express();
app.use(bodyParser.json());
app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200); 
});
app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`));
