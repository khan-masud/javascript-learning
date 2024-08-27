const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('This is Masud.');
})

app.listen(1000, ()=> { // 1000 is port number. If you change this port, you have to restart the server.
    console.log('Server is running on port 1000');
})