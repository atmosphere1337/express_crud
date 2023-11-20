const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');   called in index.js cuz the instance is shared between all files
let schema = new mongoose.Schema({login: String, password: String});
let Account = mongoose.model('users', schema);
module.exports = {
    create : function (login_in, password_in) {
        const newUser = new Account({login: login_in, password: password_in});
        newUser.save();
    },
    auth : function (login_in, password_in) {
        return Account.findOne({login: login_in, password: password_in})
    },
    find : function (id_in) {
        return Account.findById(id_in);
    },
	checkIfExists : function (login_in) {
		return Account.findOne({login: login_in});
	},
}
