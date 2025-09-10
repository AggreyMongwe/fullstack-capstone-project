const express = require('express');
const app = express();
const giftRoutes = require('./routes/giftRoutes'); // ✅ Task 1: Import giftRoutes

// Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Task 2: Use giftRoutes for /api/gifts
app.use('/api/gifts', giftRoutes);

// Optional: Root route
app.get('/', (req, res) => {
  res.send('GiftLink API is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
