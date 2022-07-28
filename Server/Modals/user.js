const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    verify: { type: Boolean, Default: false }
}, { timestamps: true });
const Product = mongoose.model('user', productSchema, 'user');
module.exports = Product;