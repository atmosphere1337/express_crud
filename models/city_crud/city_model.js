const mongoose = require('mongoose');
let schema = new mongoose.Schema({city: String, country: String, population: Number, owner: String});
let City = mongoose.model('cities', schema);
module.exports = {
    create : function(city_in, country_in, population_in, owner_in) {
        const newCity = new City({city: city_in, country: country_in, population: population_in, owner: owner_in});
        newCity.save();
    },
    delete: (id_in)  => City.deleteOne({_id: id_in}),
    read_all : () =>  City.find({}),
    update : function(id_in, city_in, country_in, population_in) {
        return City.findOneAndUpdate({_id : id_in}, 
            {city: city_in, country: country_in, population: population_in});
    },
	read : (id_in) => City.findById(id_in)
    
}
