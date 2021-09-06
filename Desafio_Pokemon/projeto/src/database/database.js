const {databaseconnection} = require ('./connection')


async function salvarpokemons(pokemon){
    
    const insertpokemon = {
            nome_pokemon: pokemon.nome,
            tipo: pokemon.tipo,
            resistencia: pokemon.resistencia,
            fraqueza: pokemon.fraqueza,
            hp: pokemon.hp
        }
    const result = await databaseconnection('pokemons').insert(insertpokemon)    
    
    console.log(result)
    if(result) {
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            resistencia: pokemon.resistencia,
            fraqueza: pokemon.fraqueza,
            hp: pokemon.hp,
            id: result[0]
        }
    }else {
        console.log("deu erro")
    }

}

async function mostrarpokemon(id){
   
    const result = await databaseconnection.where({id}).select('nome_pokemon', 'tipo' , 'resistencia', 'fraqueza', 'hp', 'id').from('pokemons')
    return result[0]
}

async function mostrarpokemons() {
   
    const result = await databaseconnection.select('nome_pokemon', 'tipo' , 'resistencia', 'fraqueza', 'hp', 'id').from('pokemons')
    return result
}

async function atualizarpokemon(id, pokemon) {
    const updatepokemon = {
        nome_pokemon: pokemon.nome,
            tipo: pokemon.tipo,
            resistencia: pokemon.resistencia,
            fraqueza: pokemon.fraqueza,
            hp: pokemon.hp
    }
    const result = await databaseconnection('pokemons').where({id}).update(updatepokemon)

    console.log(result)
    if(result) {
        return {
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            resistencia: pokemon.resistencia,
            fraqueza: pokemon.fraqueza,
            hp: pokemon.hp,
            id
        }
    }else {
        console.log("deu erro")
    }
  
}

async function deletarpokemon(id) {
   
  
  const result = await databaseconnection('pokemons').where({id}).del()
    return result[0]
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
    
      
    return `O HP do ${pokemonfraco.nome} é de: ${pokemonfraco.hp}`  
   
}



module.exports = { salvarpokemons, mostrarpokemon, mostrarpokemons, atualizarpokemon, deletarpokemon, batalhapokemon, curapokemon}