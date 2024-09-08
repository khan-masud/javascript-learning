const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (request, response)=> {
    response.send('This is Masud');
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://masud:masud1234@masud1.vrerz.mongodb.net/?retryWrites=true&w=majority&appName=Masud1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async const function insertUser() {
    await client.connect();

    const userStore = client.db('db_masud').collection('users');
}
insertUser();


app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})