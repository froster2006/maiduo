var mongoose = require('mongoose');
var shopSchema = mongoose.Schema({
	local: {
		shopName: String,
		shopAddress: String,
		shopPhoneNumber: String,
		shopEmail: String
	}
});

module.exports = mongoose.model('Shop', shopSchema);