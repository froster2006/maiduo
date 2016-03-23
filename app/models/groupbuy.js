var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Types = Schema.Types;
var groupbuySchema = new Schema({
	groupbuyName: String,
	groupbuyInprocess: Boolean,
	groupbuyDescription: String,
	groupbuyPictureLink: String,
	groupbuyItems: [Types.Mixed],
	shopId: ObjectId
});

module.exports = mongoose.model('groupbuy', groupbuySchema);