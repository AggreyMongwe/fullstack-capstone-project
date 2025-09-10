const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// GET /api/gifts — return all gifts
router.get('/', async (req, res) => {
  try {
    // Task 1: Connect to MongoDB
    const db = await connectToDatabase();

    // Task 2: Retrieve the gifts collection
    const collection = db.collection('gifts');

    // Task 3: Fetch all gifts and convert to array
    const gifts = await collection.find({}).toArray();

    // Task 4: Return the gifts in JSON format
    res.json(gifts);
  } catch (err) {
    console.error('Error fetching gifts:', err);
    res.status(500).json({ error: 'Failed to fetch gifts' });
  }
});

// GET /api/gifts/:id — return a single gift by ID
router.get('/:id', async (req, res) => {
  try {
    // Get the ID from the route and convert it to a number
    const id = parseInt(req.params.id);

    // Task 1: Connect to MongoDB
    const db = await connectToDatabase();

    // Task 2: Access the gifts collection
    const collection = db.collection('gifts');

    // Task 3: Find the gift by ID
    const gift = await collection.findOne({ id: id });

    if (!gift) {
      return res.status(404).json({ error: 'Gift not found' });
    }

    // Return the found gift
    res.json(gift);
  } catch (err) {
    console.error('Error fetching gift by ID:', err);
    res.status(500).json({ error: 'Failed to fetch gift' });
  }
});

module.exports = router;
