const sequence ={
    _id: 1,
    get id() { return this._id++}
}
const pokemons ={}
function salvarpokemons(pokemon){
    if (!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon
}

function mostrarpokemon(id){
    return pokemons[id] || {}
}

function mostrarpokemons() {
    return Object.values(pokemons)
}
module.exports = { salvarpokemons, mostrarpokemon, mostrarpokemons}