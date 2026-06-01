const express = require('express');
const router = express.Router();
const productcontroller = require('../../controllers/product/productController');
const auth = require('../../middleware/auth')




router.post("/",auth,productcontroller.createProduct);
router.get("/",auth,productcontroller.getAllProducts);
router.get("/:id",auth,productcontroller.getProductById);
router.patch("/:id",auth,productcontroller.updateProduct);
router.delete("/:id",auth,productcontroller.deleteProductById);

module.exports = router;
