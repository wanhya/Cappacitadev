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
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon)
})

app.put('/pokemons/:id', (req, res) => {
    const pokemon = database.atualizarpokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: parseInt(req.params.id)
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id', (req, res) => {
    res.send(database.deletarpokemon(req.params.id))
})

app.post ('/batalha', (req, res) => {
    res.send(database.batalhapokemon(req.body.id1, req.body.id2))
})


app.listen(3003)