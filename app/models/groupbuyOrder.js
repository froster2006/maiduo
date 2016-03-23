var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	Types = Schema.Types;
var groupbuyOrderSchema = new Schema({
	buyerName: String,
	buyerEmail: String,
	buyerPhone: String,
	notes: String,
	orders: [Types.Mixed],
	groupbuyId: ObjectId
});

module.exports = mongoose.model('groupbuyOrder', groupbuyOrderSchema);
