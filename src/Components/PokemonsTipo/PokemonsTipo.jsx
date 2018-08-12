import React from 'react';
import Grid from '@material-ui/core/Grid';

const PokemonsTipo = ({ pokemons }) => {
    return (
        pokemons.map((pokemon, index) => {
            return (
                <Grid item lg={2} md={3} sm={4} xs={6} key={index} className="pokemon-tipo-item">
                    <p>{pokemon.pokemon.name}</p>
                </Grid>
            )
        })    
    )
}

export default PokemonsTipo;