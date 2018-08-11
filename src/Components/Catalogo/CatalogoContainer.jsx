import React from "react";
import { connect } from "react-redux";

import Box from '../Shared/Box/Box';
import CatalogoList from './CatalogoList';

class CatalogoContainer extends React.Component {
    render() {
        let pokemons = this.props.catalogoState.pokemons.map((id, index) => {
            return this.props.controleState.items.find(item => item.data.id === id)
        })

        return (
            <Box title="Pokémons Capturados">
                <CatalogoList pokemons={pokemons} />
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
        catalogoState: state.Catalogo,
        controleState: state.Controle
    }
}

export default connect(mapStateToProps)(CatalogoContainer);
