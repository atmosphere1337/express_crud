const User = require('../../models/city_crud/account_model.js');
module.exports = {
	auth_in: function(req, res)
	{
		login = req.body.login;
		password = req.body.password;
		User.auth(login, password).then( (usr) => {
			req.session.user_id = usr.id;
			res.send("yes");
		})
		.catch( (err) => {
			res.send("no");
		});
	},
	auth_out: function(req, res)
	{
		req.session.destroy();
	},
	signup: function(req, res)
	{
		login = req.body.login;
		password = req.body.password;
		User.checkIfExists(login)
			.then( (ans) => {
				if (ans)
					return res.send("Error. User already exists");
				else
				{
					User.create(login, password);
					return res.send("Good. Registration is completed");
				}
				return res.json(res);
			})
			.catch( (err) => {
				return res.send("Connecton error");
			});
	},
} 
