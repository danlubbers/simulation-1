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

// Holds information how to connect to the database URL FROM SEQUAL TABS
const connectionString = 'postgres://aamkwokuuhjflr:20ce9d89cc1c193f3f6bd6a7537daa9a278b5c179dd9e2665d413bb372fe6a11@ec2-54-204-21-226.compute-1.amazonaws.com:5432/d298d5vd4af78g?ssl=true';

// Endpoints
app.get(`${baseURL}/getAllProducts`, controller.read);
// app.post(`${baseURL}/shelfie_products`, controller.create);
// app.put(`${baseURL}/shelfie_products`, controller.update);
// app.delete(`${baseURL}/shelfie_products`, controller.delete);

massive(connectionString).then(connection => {
    app.set('db', connection);
    const port = 4000;
    app.listen(port, ()=>{console.log(`I heard that, on PORT: ${port}`)});
})