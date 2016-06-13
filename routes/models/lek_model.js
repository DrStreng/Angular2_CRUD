var mongoose      = require('mongoose');
var typs    = require('./typ_model');

var lek = mongoose.model('leks', new mongoose.Schema({
    _id      : String,
    name     : String,
    cost     : Number,
    typId    : {type: String,ref: 'typs'}
//    typId    : {type: mongoose.Schema.Types.ObjectId, ref: 'typs' }
   //typId : {type:ObjectId,ref:'typs',autopopulate:true}
}));
//lek.plugin(autopopulate);
module.exports = lek;
