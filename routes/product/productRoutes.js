const express = require('express');
const router = express.Router();
const productcontroller = require('../../controllers/product/productController');




router.post("/",productcontroller.createProduct);
router.get("/",productcontroller.getAllProducts);
router.get("/:id",productcontroller.getProductById);
router.patch("/:id",productcontroller.updateProduct);
router.delete("/:id",productcontroller.deleteProductById);

module.exports = router;
