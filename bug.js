```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Find all documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents:', findResult);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```