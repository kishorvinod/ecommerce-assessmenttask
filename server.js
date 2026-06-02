const express = require('express');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    message: {
        error: "Too many requests, please try again later"
    }
});

app.use(limiter);

const authRoutes = require('./routes/auth/authRoutes');
const userRoutes = require('./routes/user/userRoutes');
const productRoutes = require('./routes/product/productRoutes');
const purchaseRoutes = require('./routes/purchase/purchaseRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/user',userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/purchase', purchaseRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => 
        console.log('Server is running on port', PORT));
});