import React from 'react';
import { connect } from 'react-redux';

import Box from '../Shared/Box/Box';
import Busca from '../Shared/Busca/Busca';
import Loading from '../Shared/Loading/Loading';
import BuscaPokemonResultado from './BuscaPokemonResultado';
import { isEmpty } from '../../Utils/ValidationUtils';
import { buscaPokemon } from '../../Reducers/BuscaPokemonReducer';
import { capturarPokemon } from '../../Reducers/CatalogoReducer';
import './BuscaPokemon.css';

class BuscaContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            primeiroAcesso: true
        }

        this.handleBusca = this.handleBusca.bind(this);
    }

    handleBusca(identificador) {
        if(!isEmpty(identificador)){
            this.props.buscaPokemon(identificador);
            this.setState({ primeiroAcesso: false });
        }
    }

    render() {
        return (
            <Box title="Buscar Pokémons">
                <Busca handleBusca={ this.handleBusca } placeholder="ID ou Nome do Pokémon" />
                {
                    this.props.stateBusca.loading ?
                    <Loading /> :
                    <BuscaPokemonResultado dados={this.props.stateBusca.dataSource.data} 
                                           primeiroAcesso={this.state.primeiroAcesso}
                                           capturarPokemon={ this.props.capturarPokemon } />
                }
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateBusca: state.BuscaPokemon,
        stateControle: state.Controle
    }
}

export default connect(mapStateToProps, {
    buscaPokemon,
    capturarPokemon
})(BuscaContainer);