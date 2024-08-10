const express = require('express')
const app = express();
const PORT = 3000;
const axios = require('axios')
const TOKEN = ''
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, ()=>{
    console.log(`Sever works on PORT: ${PORT}`)
})