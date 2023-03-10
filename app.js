
const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
