require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require('./models/product');

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data import Success");
        process.exit();
    } catch (error) {
        console.error("Data import failed" + error);
        process.exit(1);
    }
}

importData();