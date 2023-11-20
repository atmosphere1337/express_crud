const user_c = require('../../controllers/city_rest/user_controller'); 
const city_c = require('../../controllers/city_rest/city_controller'); 
module.exports = function(app) {
	app.get('/city/api/v1/city/:cityId', city_c.select);
	app.get('/city/api/v1/city', city_c.select_all);
	app.post('/city/api/v1/city', city_c.create);
	app.put('/city/api/v1/city/:cityId', city_c.update);
	app.delete('/city/api/v1/city/:cityId', city_c.drop);


	app.post('/city/api/v1/user', user_c.signup);
	app.put('/city/api/v1/user', user_c.auth_in);
	app.delete('/city/api/v1/user', user_c.auth_out);
}
