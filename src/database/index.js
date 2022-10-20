const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/Agenda');
mongoose.Promise = global.Promise;

module.exports = mongoose;