
const express = require('express')
const app = express()
const port = 3000

app.use(function(req, res, next){
    const date = new Date();
    console.log(`[${date.toLocaleDateString()} ${date.toLocaleTimeString()}] ${req.url}`);
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/welcome', (req, res) => {
    res.send("Bienvenue sur le TP 1 du cours d'architecture logicielle")
})

app.get('/secret', (req, res) => {
    res.statusCode =401
    res.end("Vous ne possédez pas les droits pour accéder à ma page secrète")
})

app.get('/error', (req, res) => {
    res.statusCode =500
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
})


app.get('/img', (req, res) => {
    res.send('<img src="https://wallpaperaccess.com/full/1283583.jpg">')
})

app.get('/redirectMe', (req, res) => {
    res.statusCode = 302;
    res.setHeader('Location', 'https://www.iut-littoral.fr/');
    res.end();
})

app.get('/users/:name', (req, res) => {
    res.end("Bienvenue sur le site de : "+req.params.name)
})

app.get('/somme', (req, res) => {
    res.end(parseInt(req.query.a) + parseInt(req.query.b)+"")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
    res.status(404).send("Cette page n'existe pas!");
});