const express = require('express')
const app = express()
const port = 8082

const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/formulario', (req, res)=>{
    res.render('formulario')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na url http://localhost:${port}`)
})