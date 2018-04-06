const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../server/controller');

const app = express();

app.use(bodyParser.json());

// app.get('/api/', controller.read);
// app.post('/api', controller.create);
// app.put('/api', controller.update);
// app.delete('/api', controller.delete);

const port = 4000;
app.listen(port, ()=>{console.log(`I heard that, on PORT: ${port}`)});