const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    desciptipion:{
        type: DataTypes.STRING,
        allowNull: true
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
});


Product.associate = (models) => {
    Product.hasMany(models.Purchase, { foreignKey: 'productId' });
};

module.exports = Product;