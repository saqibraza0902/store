const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');
var todayDate = new Date();

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default:0 },
    maxProducts: { type: Number, required: true },
    date: { type: String, default: moment(todayDate, 'DD-MM-YYYY').format('DD-MM-YYYY') },
    details: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
const Product = mongoose.model('product', productSchema, 'product');
module.exports = Product;