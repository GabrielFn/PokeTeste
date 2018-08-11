import { all } from 'redux-saga/effects'
import sagaBuscaPokemon from './BuscaPokemonSaga';
import sagaBuscaMove from './BuscaMoveSaga';

export default function* rootSaga(){
    yield all([
        sagaBuscaPokemon(),
        sagaBuscaMove()
    ])
}