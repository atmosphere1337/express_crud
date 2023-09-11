const mongoose = reuqire('mongoose');
let schema = new mongoose.Schema({city: String, country: String, population: Number, owner: String});
let City = mongoose.model('cities', schema);
module.exports = {
    create : function(city_in, country_in, population_in, owner_in) {
        const newCity = new City({city: city_in, country: country_in, population: population_in, owner: owner_in});
        newCity.save();
    }
}