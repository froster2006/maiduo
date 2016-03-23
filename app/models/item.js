var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Types = Schema.Types;
var itemSchema = new Schema({
	itemName: String,
	itemPictureLink: String,
	itemDescription: String,
	itemUnit: String,
	itemPrice: Number
});

module.exports = mongoose.model('item', itemSchema);