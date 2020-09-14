const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');
//Imported Routes
const userAccount = require('./Routes/userAccounts');
const tokenTestRoute = require('./Routes/tokenTestRoute');

app.use(cors()); //remove cors
app.use(express.json());
app.use('/api/user', userAccount);
app.use('/api/tokentest', tokenTestRoute);
app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get('port'), () => {
  console.log("server port "+app.get('port'));
});
//
// All handlers here...
//GET
app.get('/', (req, res) => {
  res.send('We are on home');
});


//connect DB
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
  console.log('Server has connected to DataBase');
});