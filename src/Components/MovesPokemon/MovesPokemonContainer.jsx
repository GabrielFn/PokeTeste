import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MovesPokemon from './MovesPokemon';
import { buscaMove } from '../../Reducers/MovesReducer';
import { connect } from 'react-redux';
import Loading from '../../Components/Shared/Loading/Loading';
import './MovesPokemon.css';

class MovesPokemonContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mostraDescricao: false
        }

        this.buscaMove = this.buscaMove.bind(this);
        this.escondeDescricao = this.escondeDescricao.bind(this);
    }

    buscaMove(moveName) {
        this.props.buscaMove(moveName);
        this.setState({ mostraDescricao: true });
    }

    escondeDescricao(){
        this.setState({ mostraDescricao: false });
    }

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="headline">
                        <p>Moves:</p>
                    </Typography>
                    {
                        this.props.moveState.loading ?
                        <Grid container spacing={8}>
                            <Loading /> 
                        </Grid>:
                        <MovesPokemon dados={ this.props.moves } 
                                      buscaDescricaoMove={ this.buscaMove }
                                      mostraDescricao={ this.state.mostraDescricao }
                                      descricaoMove={ this.props.moveState.dataSource.data ? this.props.moveState.dataSource.data : [] }
                                      escondeDescricao={ this.escondeDescricao } />
                    }
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        moveState: state.Moves
    }
}

export default connect(mapStateToProps, { buscaMove })(MovesPokemonContainer);