let User = require('../../models/city_crud/account_model');
module.exports = {
    auth : function (req, res, next) {
        if (req.session.user_id !== undefined) {
            next();
        }
        else if (req.cookies.login !== undefined && req.cookies.password !== undefined)
        {
            let resultS = User.auth(req.cookies.login, req.cookies.password);
            resultS.then(result => {
                if (result === false) {
                    res.send('You are not logged in');
                } else {
                    req.session.user_id = result.id;
                    next();
                }
            });
        }
        else {
            res.send('You are not logged in');
        }
    },
    logout : function (req, res, next) {
        req.session.destroy();
        next();
    }
}