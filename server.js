const express = require('express');
const {PORT} = require('./src/config/config')
const app = express();




app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})

console.log('Server Initialized Successfully');