const { json } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const ejs = require('ejs');
const app = express();
app.set('view engine','ejs');
app.use( express.static( "public" ) );

app.get("/",(req,res)=>{
  fetch('https://api.wazirx.com/api/v2/tickers')
  .then(res => res.json())
  .then(list =>   res.render('index_page',{list}));
    
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
})