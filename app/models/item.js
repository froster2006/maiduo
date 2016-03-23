var mongoose = require('mongoose');
var itemSchema = mongoose.Schema({
	local: {
		itemName: String,
		itemPictureLink: String,
		itemDescription: String,
		itemUnit: String,
		itemPrice: Number
	}
});

module.exports = mongoose.model('item', itemSchema);