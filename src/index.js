const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./view/view.js')(app);
require('./controllers/creatController')(app);
require('./controllers/readController')(app);
require('./controllers/updateController')(app);
require('./controllers/deleteController')(app);

app.listen(3000, ()=>{
    console.log("Running in: localhost:3000")
});

