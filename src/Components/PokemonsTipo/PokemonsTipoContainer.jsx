import React from 'react';
import { connect } from 'react-redux';

import Box from '../Shared/Box/Box';
import Button from '@material-ui/core/Button';
import Loading from '../Shared/Loading/Loading';
import PokemonsTipo from './PokemonsTipo';
import history from '../../Utils/BrowserHistory';
import { pokemonsTipo, limpaPokemonsTipo } from '../../Reducers/PokemonsTipoReducer';
import './PokemonsTipo.css';


class PokemonsTipoContainer extends React.Component {

    componentDidMount() {
        const { tipo } = this.props.match.params;

        this.props.pokemonsTipo(tipo);
    }

    componentWillUnmount() {
        this.props.limpaPokemonsTipo();
    }

    render() {
        const dados = this.props.stateTipos.dataSource.data ? this.props.stateTipos.dataSource.data : []

        return (
            <Box title={dados.name}>
                {
                    this.props.stateTipos.loading ?
                    <Loading /> :
                    <PokemonsTipo pokemons={ dados.pokemon ? dados.pokemon : [] } />
                }
                <div className="voltar">
                    <Button variant="contained" onClick={() => history.goBack()}>
                        Voltar
                    </Button>
                </div>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateTipos: state.PokemonsTipo
    }
}

export default connect(mapStateToProps, { 
    pokemonsTipo,
    limpaPokemonsTipo
})(PokemonsTipoContainer);