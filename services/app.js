var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

mongoose.connect('mongodb://localhost:27017/healinghands').then(
    () => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)
});
// Required application specific custom router module
var patientRouter = require('./src/routes/patientRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/patient', patientRouter);

// Start the server
app.listen(port, function(){
    console.log('Server is running on Port: ',port);
});