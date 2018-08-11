import React from 'react';
import { isEmpty } from '../../Utils/ValidationUtils';
import CardPokemon from '../Shared/CardPokemon/CardPokemon';

const BuscaPokemonResultado = ({ dados, primeiroAcesso, capturarPokemon }) => {

    let component = "";

    if (isEmpty(dados)) {
        if (!primeiroAcesso) {
            component = "Nenhum Pokémon Encontrado";
        }
    }
    else {
        component = <CardPokemon dados={dados} capturarPokemon={capturarPokemon} />
    }

    return (
        component
    )
}

export default BuscaPokemonResultado;