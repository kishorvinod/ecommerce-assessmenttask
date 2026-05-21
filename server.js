const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/user/userRoutes');
const productRoutes = require('./routes/product/productRoutes');
const purchaseRoutes = require('./routes/purchase/purchaseRoutes');

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/purchase', purchaseRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => 
        console.log('Server is running on port 3000'));
});