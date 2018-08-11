import React from 'react';
import CardPokemon from '../Shared/CardPokemon/CardPokemon';

const CatalogoList = ({ pokemons }) => {
    return (
        pokemons.map((pokemon, index) => {
            return <CardPokemon dados={pokemon.data} key={index} />
        })
    )
}

export default CatalogoList;