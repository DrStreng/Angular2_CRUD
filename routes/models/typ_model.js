var mongoose      = require('mongoose');

var typ = mongoose.model('typs', new mongoose.Schema({
    _id      : String,
    name     : String,
}));

module.exports = typ;
