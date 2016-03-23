var mongoose = require('mongoose');
var groupbuyOrderSchema = mongoose.Schema({
	local: {
		buyerName: String,
		buyerEmail: String,
		buyerPhone: String,
		notes: String,
		orders: [Schema.Types.Mixed],
		groupbuyId: Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('groupbuyOrder', groupbuyOrderSchema);
