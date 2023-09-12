let City = require('../../models/city_crud/city_model');
module.exports = {
    create_post: function(req, res) {
        City.create(req.body.city_new, req.body.country_new, req.body.population_new, req.session.user_id);
        res.redirect('/city/page');
    },
    delete_post : function(req, res) {
        City.delete(req.body.city_id).then(
            res.redirect('/city/page')
        ).catch(x => {
            res.send('city_controller delete error');
        });
    },
    update_post : function (req, res) {
        City.update(req.body.city_id, req.body.city, req.body.country, req.body.population).then( x => {
            res.redirect('/city/page');
        }).catch(x => {
            res.send('city_controller update error');
        });
    }
}