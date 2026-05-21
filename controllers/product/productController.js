const Product = require('../../models/Product');


exports.createProduct = async (req, res) => {
    try {
        const { name, desciption, price } = req.body;
        const newProduct = await Product.create({ name, desciption, price });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Product' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const Products = await Product.findAll();
        res.status(200).json(Products);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Products' });
    }
}


exports.getProductById = async (req, res) => {
    try {
        const Product = await Product.findByPk(req.params.id);
        if (Product) {
            res.status(200).json(Product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Product' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { name, desciption, price } = req.body;
        const Product = await Product.findByPk(req.params.id);
        if (Product) {
            Product.name = name || Product.name;
            Product.desciption = desciption || Product.desciption;
            Product.price = price || Product.price;
            await Product.save();
            res.status(200).json(Product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to update Product' });

    }
};

exports.deleteProductById = async (req, res) => {
    try {
        const Product = await Product.findByPk(req.params.id);
        if (Product) {
            await Product.destroy();
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Product' });
    }
};
