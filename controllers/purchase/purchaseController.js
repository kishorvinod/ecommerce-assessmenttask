const Purchase = require('../../models/Purchase');


exports.createPurchase = async (req, res) => {
    try {
        const { userId, productId} = req.body;
        const newPurchase = await Purchase.create({ userId, productId });
        res.status(201).json(newPurchase);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Purchase' });
    }
};

exports.getAllPurchases = async (req, res) => {
    try {
        const Purchases = await Purchase.findAll();
        res.status(200).json(Purchases);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Purchases' });
    }
}


exports.getPurchaseById = async (req, res) => {
    try {
        const Purchase = await Purchase.findByPk(req.params.id);
        if (Purchase) {
            res.status(200).json(Purchase);
        } else {
            res.status(404).json({ error: 'Purchase not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Purchase' });
    }
};

exports.updatePurchase = async (req, res) => {
    try {
        const {userId, productId } = req.body;
        const Purchase = await Purchase.findByPk(req.params.id);
        if (Purchase) {
            Purchase.userId = userId || Purchase.userId;
            Purchase.productId = productId || Purchase.productId;
            await Purchase.save();
            res.status(200).json(Purchase);
        } else {
            res.status(404).json({ error: 'Purchase not found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to update Purchase' });

    }
};

exports.deletePurchaseById = async (req, res) => {
    try {
        const Purchase = await Purchase.findByPk(req.params.id);
        if (Purchase) {
            await Purchase.destroy();
            res.status(200).json({ message: 'Purchase deleted successfully' });
        } else {
            res.status(404).json({ error: 'Purchase not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Purchase' });
    }
};
