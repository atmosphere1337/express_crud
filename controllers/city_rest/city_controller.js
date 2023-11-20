let City = require('../../models/city_crud/city_model');
module.exports = {
	select : function (req, res)
	{
		id = req.params.cityId;
		City.read(id).then(ans=>{
			resp = {};
			resp.city = ans.city
			resp.country = ans.country
			resp.popjlation = ans.population
			res.json(resp);
		}).catch(ans => {res.send("error")});
	},
	select_all : function (req, res)
	{
		City.read_all().then(ans=>{
			res.json(ans);
		}).catch(ans => {res.send("error")});
	},
	update : function (req, res)
	{
		City.update(req.params.cityId, req.body.city, req.body.country, req.body.population).then( ans => {
		res.status(204).send("City updated"); } ). catch (ans => { res.status(404).send("city is not updated")});
	},
	drop : function (req, res)
	{
		City.delete(req.params.cityId)
			.then(x => res.status(204).send("City deleted"))
			.catch(x => res.status(404).send("error"));
		
	},
	create : function (req, res)
	{
		City.create(req.body.city, req.body.country, req.body.population, "xxx");
		res.status(201).send("New city created!");
	}
}
