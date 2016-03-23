var mongoose = require('mongoose');
var groupbuySchema = mongoose.Schema({
	local: {
		groupbuyName: String,
		groupbuyInprocess: Boolean,
		groupbuyDescription: String,
		groupbuyPictureLink: String,
		groupbuyItems: [Schema.Types.Mixed],
		shopId: Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('groupbuy', groupbuySchema);