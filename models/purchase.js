const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('../config/database');

const Purchase = sequelize.define('Purchase',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        ForeignKey: true  
    },
    productId:{
        type: DataTypes.INTEGER,    
        allowNull: false,
        foreignKey: true
    },
});

Purchase.associate = (models) => {
    Purchase.belongsTo(models.User, { foreignKey: 'userId' });
    Purchase.belongsTo(models.Product, { foreignKey: 'productId' });
};


module.exports = Purchase;