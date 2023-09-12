let User = require('../../models/city_crud/account_model');
let City = require('../../models/city_crud/city_model');
module.exports = {
    login : function (req, res) {
        res.render('city_crud/login', {query: req.query});
    }, 
    register : function (req, res) {
        res.render('city_crud/register');
    },
    page : function (req, res) {
        User.find(req.session.user_id).then(x => {
            City.read_all().then( y => {
                res.render('city_crud/page', {user: x.login, cities: y, acc: req.session.user_id});
            }).catch(y => {
                res.send('couldnt access database 2');
            });
        }).catch(x => {
            res.send('couldnt access database 1');
        });
    },
    register_post : function (req, res) {
        User.create(req.body.login, req.body.password);
        res.redirect('/city/login');
    },
    login_post : function (req, res) {
        User.auth(req.body.login, req.body.password).then(result => {
            req.session.user_id = result.id;
            res.cookie('login', result.login, {maxAge: 10000, httpOnly: true});
            res.cookie('password', result.password, {maxAge: 10000, httpOnly: true});
            res.redirect('/city/page');
        }).catch(result => {
            res.redirect('/city/login?error=Wrong+login+or+password');
        });
    }
}