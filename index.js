const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser')
      session = require('express-session')
      mongoose = require('mongoose')
const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({secret: 'scrt'}))

mongoose.connect('mongodb://127.0.0.1:27017/test');

require('./routes/city_crud/city_routes')(app)

app.get('/', (req, res) => {res.render('main')})
app.listen(3000, ()=>{console.log('listening on 3000 port')});

