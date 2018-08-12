import { all } from 'redux-saga/effects'
import sagaBuscaPokemon from './BuscaPokemonSaga';
import sagaBuscaMove from './BuscaMoveSaga';
import sagaPokemonsTipo from './PokemonsTipoSaga';

export default function* rootSaga(){
    yield all([
        sagaBuscaPokemon(),
        sagaBuscaMove(),
        sagaPokemonsTipo()
    ])
}