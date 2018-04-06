const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
massive(process.env.Connection_String).then(dbInstance => app.set('db', dbInstance));

// app.get('/api/', controller.read);
// app.post('/api', controller.create);
// app.put('/api', controller.update);
// app.delete('/api', controller.delete);

const port = 4000;
app.listen(port, ()=>{console.log(`I heard that, on PORT: ${port}`)});