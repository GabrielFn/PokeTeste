import React from 'react';
import { isEmpty } from '../../Utils/ValidationUtils';
import CardPokemon from '../Shared/CardPokemon/CardPokemon';

const BuscaPokemonResultado = ({ dados, primeiroAcesso, capturarPokemon, excluirPokemon }) => {

    let component = "";

    if (isEmpty(dados)) {
        if (!primeiroAcesso) {
            component = "Nenhum Pokémon Encontrado";
        }
    }
    else {
        component = <CardPokemon dados={dados.data} capturarPokemon={capturarPokemon} excluirPokemon={excluirPokemon} />
    }

    return (
        component
    )
}

export default BuscaPokemonResultado;