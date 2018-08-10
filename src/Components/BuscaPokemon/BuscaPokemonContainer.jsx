import React from 'react';
import { connect } from 'react-redux';

import Box from '../Shared/Box/Box';
import Busca from '../Shared/Busca/Busca';
import { buscaPokemon } from './Redux';
import Loading from '../Shared/Loading/Loading';
import BuscaPokemonResultado from './BuscaPokemonResultado';
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
        this.props.buscaPokemon(identificador);
        this.setState({ primeiroAcesso: false });
    }

    render() {
        console.log('Valor da busca pokemon', this.props.stateBusca);

        return (
            <Box title="Buscar Pokémons">
                <Busca handleBusca={ this.handleBusca } placeholder="Busca" />
                {
                    this.props.stateBusca.loading ?
                    <Loading /> :
                    <BuscaPokemonResultado dados={this.props.stateBusca.dataSource.data} 
                                           primeiroAcesso={this.state.primeiroAcesso} />
                }
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateBusca: state.BuscaPokemon
    }
}

export default connect(mapStateToProps, {
    buscaPokemon
})(BuscaContainer);