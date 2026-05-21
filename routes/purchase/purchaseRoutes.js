const express = require('express');
const router = express.Router();
const purchaseController = require('../../controllers/purchase/purchaseController');




router.post("/",purchaseController.createPurchase);
router.get("/",purchaseController.getAllPurchases);
router.get("/:id",purchaseController.getPurchaseById);
router.patch("/:id",purchaseController.updatePurchase);
router.delete("/:id",purchaseController.deletePurchaseById);

module.exports = router;
