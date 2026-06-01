const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchase/purchaseController');
const auth = require('../../middleware/auth')




router.post("/",auth,purchaseController.createPurchase);
router.get("/",auth,purchaseController.getAllPurchases);
router.get("/:id",auth,purchaseController.getPurchaseById);
router.patch("/:id",auth,purchaseController.updatePurchase);
router.delete("/:id",auth,purchaseController.deletePurchaseById);

module.exports = router;
