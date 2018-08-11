import { all } from 'redux-saga/effects'
import sagaBuscaPokemon from './BuscaPokemonSaga';

export default function* rootSaga(){
    yield all([
        sagaBuscaPokemon()
    ])
}