
const express = require('express')
const app = express()
const port = 3000
const data = {
    root : 0,
    welcome: 0,
    secret: 0,
    error: 0,
    img: 0,
    redirect: 0,
    user: 0,
    somme: 0,
    metrics : 0,
}

app.use(function(req, res, next){
    const date = new Date();
    console.log(`[${date.toLocaleDateString()} ${date.toLocaleTimeString()}] ${req.url}`);
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
  data.root +=1
})

app.get('/welcome', (req, res) => {
    res.send("Bienvenue sur le TP 1 du cours d'architecture logicielle")
    data.welcome +=1
})

app.get('/secret', (req, res) => {
    res.statusCode =401
    res.end("Vous ne possédez pas les droits pour accéder à ma page secrète")
    data.secret +=1
})

app.get('/error', (req, res) => {
    res.statusCode =500
    res.end(JSON.stringify({ message: 'Internal Server Error' }))
    data.error +=1
})


app.get('/img', (req, res) => {
    res.send('<img src="https://wallpaperaccess.com/full/1283583.jpg">')
    data.img +=1
})

app.get('/redirectMe', (req, res) => {
    res.statusCode = 302;
    res.setHeader('Location', 'https://www.iut-littoral.fr/');
    res.end();
    data.redirect +=1
})

app.get('/users/:name', (req, res) => {
    res.end("Bienvenue sur le site de : "+req.params.name)
    data.user +=1
})

app.get('/somme', (req, res) => {
    res.end(parseInt(req.query.a) + parseInt(req.query.b)+"")
    data.root +=1
})

app.get('/metrics',(req,res) =>{
    data.metrics+=1
    res.statusCode =500
    res.end(JSON.stringify({
         status: res.statusCode ,
         requestsCount : data,
         uptime: process.uptime()
    }));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
    res.status(404).send("Cette page n'existe pas!");
});

