const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (request, response)=> {
    response.send('Hello World!');
});



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://masud:masud1234@masud1.vrerz.mongodb.net/?retryWrites=true&w=majority&appName=Masud1";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function loadDB() {
    await client.connect();

    const productCollection = client.db('db_masud').collection('cl_masud');

    app.get('/products', async (request, response)=> {
        const data = await productCollection.find().toArray();
        response.send(data);
    })

}
loadDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});