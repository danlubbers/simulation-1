const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
massive(process.env.Connection_String).then(dbInstance => app.set('db', dbInstance));

// Create API variable
const baseURL = '/api';

// Endpoints
// app.get(`${baseURL}/shelfie_products`, controller.read);
// app.post(`${baseURL}/shelfie_products`, controller.create);
// app.put(`${baseURL}/shelfie_products`, controller.update);
// app.delete(`${baseURL}/shelfie_products`, controller.delete);

const port = 4000;
app.listen(port, ()=>{console.log(`I heard that, on PORT: ${port}`)});