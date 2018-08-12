import React from 'react';
import { connect } from 'react-redux';
import Box from '../Shared/Box/Box';
import Button from '@material-ui/core/Button';
import history from '../../Utils/BrowserHistory';
import DetalhePokemon from './DetalhePokemon';
import find from 'lodash/find';
import MovesPokemonContainer from '../MovesPokemon/MovesPokemonContainer';
import './DetalhePokemon.css';

class DetalhePokemonContainer extends React.Component {
    render() {
        const { id } = this.props.match.params;
        
        const pokemon = find(this.props.items, item => item.data.id == id)

        return (
            <div>
                <Box title={`${pokemon.data.id} - ${pokemon.data.name}`}>
                    <DetalhePokemon dados={pokemon.data} />
                    <MovesPokemonContainer moves={pokemon.data.moves} />
                    <div className="voltar">
                        <Button variant="contained" onClick={() => history.goBack()}>
                            Voltar
                        </Button>
                    </div>
                </Box>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.Controle.items
    }
}

export default connect(mapStateToProps)(DetalhePokemonContainer);