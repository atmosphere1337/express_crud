const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      mongoose = require('mongoose'),
      path = require('path'),
	  cors = require('cors')
const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({secret: 'scrt'}))
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect('mongodb://127.0.0.1:27017/test');

require('./routes/city_rest/city_rest_routes')(app)
require('./routes/city_crud/city_routes')(app)

app.get('/', (req, res) => {res.render('main')})
app.listen(4000, ()=>{console.log('listening on 4000 port')});

