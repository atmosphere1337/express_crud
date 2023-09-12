const user_c = require('../../controllers/city_crud/user_controller'); 
const city_c = require('../../controllers/city_crud/city_controller'); 
const city_m = require('../../middleware/city_curd/city_middleware');
module.exports = function (app) {
    app.get('/city/login', city_m.logout, user_c.login);
    app.get('/city/register', city_m.logout, user_c.register);
    app.get('/city/page', city_m.auth, user_c.page);

    app.post('/city/register/post', user_c.register_post);
    app.post('/city/login/post', user_c.login_post);

    app.post('/city/page/create', city_m.auth, city_c.create_post);
    app.post('/city/page/delete', city_m.auth, city_m.db_change_perm, city_c.delete_post);
    app.post('/city/page/update', city_m.auth, city_m.db_change_perm, city_c.update_post);
}