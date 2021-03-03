const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.listen(3000)

app.use('/assets', express.static(__dirname + '/assets/'))



app.get('/pokemones', (req,res)=>{
    res.render('index')
})