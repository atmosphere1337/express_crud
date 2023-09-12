const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser')
      session = require('express-session')
      mongoose = require('mongoose')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({secret: 'scrt'}))

app.set('view engine', 'ejs')

mongoose.connect('mongodb://127.0.0.1:27017/test');
let schm = new mongoose.Schema({login: String, password: String, age: Number, mail: String});
let Account = mongoose.model('accounts', schm);

function main_render(req, res)
{
    let val = 'default';
    let cock = 'default';
    let sess = 'default';
    if (req.body.variable)
    {
        val = req.body.variable;
        if (req.cookies.cock === undefined)
        {
            res.cookie('cock', val, {maxAge: 10000, httpOnly: true})
        }
    }
    if (req.cookies.cock !== undefined)
        cock = req.cookies.cock;
    if (!req.session.token)
    {
        req.session.token = 'dick';
        sess = req.session.token;
    }    
    const NewUser = new Account({login: 'login', password: 'password', age: 77, mail: 'mail'})
    NewUser.save();
    //Account.find({}).then(x => ...)
    //Account.findOne({?:?}).then(x => ...)
    //Account.findOneAndUpdate({?:?}, {?:?}).then(x => ...)
    //Account.deleteOne({?:?}).then(x => ...)
    res.render('main_buf_essential', {value_r: val, cck: cock, ssn: sess})
}

app.get('/', main_render);
app.post('/', main_render);
app.listen(3000, ()=>{console.log('listening on 3000 port')});

