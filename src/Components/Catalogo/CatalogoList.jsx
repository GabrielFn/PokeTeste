import React from 'react';
import CardPokemon from '../Shared/CardPokemon/CardPokemon';

const CatalogoList = ({ pokemons, excluirPokemon }) => {
    return (
        pokemons.map((pokemon, index) => {
            return <CardPokemon key={index} dados={pokemon.data} excluirPokemon={excluirPokemon} />
        })
    )
}

export default CatalogoList;