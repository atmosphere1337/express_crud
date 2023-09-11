const city_controller = require('../../controllers/city_crud/city_controller'); 
const city_middleware = require('../../middleware/city_curd/city_middleware');
module.exports = function (app) {
    app.get('/city/login', city_middleware.logout, city_controller.login);
    app.get('/city/register', city_middleware.logout, city_controller.register);
    app.get('/city/page', city_middleware.auth, city_controller.page);

    app.post('/city/register/post', city_controller.register_post);
    app.post('/city/login/post', city_controller.login_post);
}