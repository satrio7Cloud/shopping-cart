const Product = require("../models/product")

//  mengambil semua product
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server Error"})
    }
}

// mengambil satu product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server Error"})
    }
}

module.exports = {
    getAllProduct,
    getProductById
}