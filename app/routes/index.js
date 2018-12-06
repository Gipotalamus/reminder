const express = require('express');
var path = require('path');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  			origin: 'http://localhost:4200',
  			optionsSuccessStatus: 200 
		};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/events', require('./events'));

app.use(express.static(path.join(__dirname + '../../../reminder-frontend')));
	
app.all('*', (req, resp) => resp.status(404).send({msg: 'Not found'}));

console.log(path.join(__dirname + '../../../reminder-frontend'));

