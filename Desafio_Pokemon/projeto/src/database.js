const sequence ={
    _id: 1,
    get id() { return this._id++}
}
const pokemons =[]
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

function atualizarpokemon(id, pokemon) {
    pokemons[id] = pokemon
    return pokemon
}

function deletarpokemon(id) {
    sequence._id = sequence._id -1
    const pokemondeletado = pokemons[1]
    pokemons.splice(id, 1)
    pokemons.forEach(pokemon => {
        if(pokemon.id > id) {
            pokemon.id = pokemon.id - 1
        }
    })
    return pokemondeletado
}

function batalhapokemon(id1, id2){
    const superefetivo = 40
    const efetivo = 20
    const naoefetivo = 10
    
    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0) {
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superefetivo
            } else if(pokemon1.tipo == pokemon2.resistencia){
                pokemon2.hp = pokemon2.hp - naoefetivo
            } else {
                pokemon2.hp = pokemon2.hp - efetivo
            }
    }

    if(pokemon2.hp != 0 && pokemon1.hp != 0) {
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superefetivo
            } else if(pokemon2.tipo == pokemon1.resistencia){
                pokemon1.hp = pokemon1.hp - naoefetivo
            } else {
                pokemon1.hp = pokemon1.hp - efetivo
            }
    }

    if(pokemon1.hp < 0) pokemon1.hp = 0
    if(pokemon2.hp < 0)  pokemon2.hp = 0
    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`

}

function curapokemon(id) {
    const pocao = 20
    const pokemonfraco = pokemons[id]

    if(pokemonfraco.hp < 90) { 
        pokemonfraco.hp = pokemonfraco.hp + pocao 
    } else if(pokemonfraco.hp >= 90 && pokemonfraco.hp <100) {
        pokemonfraco.hp = pokemonfraco.hp + pocao - 10
    } 
     

    return `${pokemonfraco.nome}: Força Total ${pokemonfraco.hp}`    
   
}
module.exports = { salvarpokemons, mostrarpokemon, mostrarpokemons, atualizarpokemon, deletarpokemon, batalhapokemon, curapokemon}