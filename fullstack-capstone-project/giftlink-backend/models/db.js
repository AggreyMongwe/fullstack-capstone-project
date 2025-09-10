const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Change if you're using a cloud DB
const client = new MongoClient(uri);
const dbName = 'giftDB';

async function connectToDatabase() {
  await client.connect(); // Task 1
  const dbInstance = client.db(dbName); // Task 2
  return dbInstance; // Task 3
}

module.exports = connectToDatabase;
