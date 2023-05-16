const express = require("express");
const router = express.Router();

const {
    getAllProduct, 
    getProductById
} = require("../controller/productControllers")

// @desc: ini di gunakan untuk mengangambil seluruh product dari database
// @route: GET /api/products
// @access: Public
router.get("/", getAllProduct);


// @desc: ini di gunakan untuk mengangambil sastu product dari database berdasarkan ID
// @route: GET /api/products/:id
// @access: Public
router.get("/:id", getProductById);

module.exports = router;