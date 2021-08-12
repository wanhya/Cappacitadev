const express = require('express')
const app = express()
const database = require('./database')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded ({extended: true}))

app.get('/pokemons', (req, res) => {
    res.send(database.mostrarpokemons())
})

app.get('/pokemons/:id', (req, res) => {
    res.send(database.mostrarpokemon(req.params.id))
})

app.post('/pokemons', (req, res) => {
    const pokemon = database.salvarpokemons ({
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
})

app.listen(3003)