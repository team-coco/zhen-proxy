const axios = require('axios');
const dotenv = require('dotenv').config();

//var services = {'title-bar', 'highlights', 'reviews', 'sidebar', 'map-and-images'};
var services = {
    'reviews': process.env.REVIEWS_IP
};
var servicesKeys = Object.keys(services);

module.exports = function(id) {
    return new Promise((resolve, reject) => {
        var results = {}
        var count = 0;
        for (var i = 0; i < servicesKeys.length; i ++) {
            var url = `http://${services[servicesKeys[i]]}/main/${servicesKeys[i]}/${id}`;
            var position = i;
            axios.get(url).then( res => {
                results[servicesKeys[position]] = res.data;
                count ++
                if (count === servicesKeys.length) {
                    resolve(results);
                }
            }).catch( err => {
                console.log(err);
                results[position] = err;
                count++;
                if (count === servicesKeys.length) {
                    resolve(results);
                }
            })
        }
    })
}