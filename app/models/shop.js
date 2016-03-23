var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Types = Schema.Types;
var shopSchema = new Schema({
	shopName: String,
	shopAddress: String,
	shopPhoneNumber: String,
	shopEmail: String
});

module.exports = mongoose.model('Shop', shopSchema);
