const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoose_csv = require('mongoose-csv');
const moment = require('moment');

const saleLogSchema = new Schema({
	time: {
		type: Date,
		default: () => {
			return moment().add(9, 'hours').format("YYYY-MM-DD HH:mm:ss");
		},
	},
	first_category: {
		type: String,
		default: ""
	},
	second_category: {
		type: String,
		default: ""
	},
	third_category: {
		type: String,
		default: ""
	},
	productName: {
		type: String,
		default: ""
	},
	quantity: {
		type: Number,
	},
	// 단일상품 원가
	single_price: {
		type: Number,
	},
	// 개발할인 적용가
	single_apply_price: {
		type: Number,
	},
	// 단일상품 할인가
	single_discount: {
		type: Number,
		default: 0,
	},
	card: {
		type: Number,
	},
	cash: {
		type: Number,
	},
	point: {
		type: Number,
	},
	total: {
		type: Number,
	},
	customer_name: {
		type: String,
		required: true,
	},
	customer_phone: {
		type: String,
		trim: true,
	},
	staff: {
		type: String,
		trim: true,
	},
	// 위탁자
	consigner_name: {
		type: String,
		default: ""
	},
	consigner_phone: {
		type: String,
		trim: true,
	},
	bank: {
		type: String,
		trim: true,
		default: ""
	},
	// 계좌번호
	account: {
		type: String,
		trim: true,
		default: ""
	},
	// 예금주
	account_owner: {
		type: String,
		trim: true,
		default: ""
	},
	trader: {
		type: String,
		default: ""
	},
});

saleLogSchema.plugin(mongoose_csv);

module.exports = mongoose.model("saleLog", saleLogSchema);
