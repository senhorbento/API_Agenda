const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Agenda', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;