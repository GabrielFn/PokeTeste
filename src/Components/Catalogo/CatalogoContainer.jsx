import React from "react";
import { connect } from "react-redux";

import Box from '../Shared/Box/Box';
import CatalogoList from './CatalogoList';
import { excluirPokemon } from '../../Reducers/ControleReducer';

class CatalogoContainer extends React.Component {
    render() {

        const pokemons = this.props.controleState.items.filter(item =>
            item.data.catalogado);
        
        return (
            <Box title="Pokémons Capturados">
            {
                pokemons.length > 0 ?
                <CatalogoList pokemons={pokemons}
                              excluirPokemon={ this.props.excluirPokemon } /> :
                "Você ainda não capturou nenhum pokémon!"
            }
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
        controleState: state.Controle
    }
}

export default connect(mapStateToProps, {
    excluirPokemon
})(CatalogoContainer);
