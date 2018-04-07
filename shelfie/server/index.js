const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());


// Create API variable
const baseURL = '/api';

// Holds information how to connect to the database URL FROM SEQUAL TABS

// Endpoints
app.get(`${baseURL}/getAllProducts`, controller.read);
app.post(`${baseURL}/shelfie_products`, controller.create);
// app.put(`${baseURL}/shelfie_products`, controller.update);
// app.delete(`${baseURL}/shelfie_products`, controller.delete);

massive(process.env.Connection_String).then(connection => {
    app.set('db', connection);
    const port = 4000;
    app.listen(port, ()=>{console.log(`I heard that, on PORT: ${port}`)});
})