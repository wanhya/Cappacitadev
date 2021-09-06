const express = require('express')
const app = express()
const database = require('./database/database')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded ({extended: true}))

app.get('/pokemons', async (req, res) => {
    res.send(await database.mostrarpokemons())
})

app.get('/pokemons/:id', async (req, res) => {
    res.send(await database.mostrarpokemon(req.params.id))
})

app.post('/pokemons', async (req, res) => {
    const pokemon = await database.salvarpokemons ({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
    })
    res.send(pokemon) 
})

app.put('/pokemons/:id', async (req, res) => {
    const pokemon = await database.atualizarpokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id', async  (req, res) => {
    res.send(await database.deletarpokemon(req.params.id))
})

app.post ('/batalha', (req, res) => {
    res.send(database.batalhapokemon(req.body.id1, req.body.id2))
})

app.post ('/cura', async (req, res) => {
    res.send(await database.curapokemon(req.body.id))
})

//app.put ('/cura:id', async (req, res) => {
 //   res.send(await database.curapokemon(req.body.id))
//})

app.listen(3003)