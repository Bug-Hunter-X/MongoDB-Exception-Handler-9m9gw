```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    const findResult = await collection.find({}).toArray();
    console.log('Found documents:', findResult);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```