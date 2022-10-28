const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: String,
    },
    // số lượng sản phẩm
    numberofproducts: {
        type: Number
    },
    categories: {
        type: Array
    },
    imgProduct: {
        type: String,
    },
    // cấu hình 
    khung: {
        type: String,
    },
    memory: {
        type: Array
    },
    chip: {
        type: String
    },
    ram: {
        type: String
    },
    kichthuoc: {
        type: String
    },
    trongluong: {
        type: String
    },
    cauhinh: {
        type: String
    },
    color: {
        type: Array
    },
    // giảm giá
    sale: {
        type: String
    },
    sale1: {
        type: String
    },
    // giá fake
    pricefake: {
        type: String
    },
    // giá gốc 
    pricesale: {
        type: String,
    },
    // tỉ lệ trả góp
    titletragop: {
        type: String,
    },
    // icon thanh toán 
    imgIcon: {
        type: String,
    },
    imgIcon1: {
        type: String,
    },
    imgIcon2: {
        type: String,
    },
    imgIcon3: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);