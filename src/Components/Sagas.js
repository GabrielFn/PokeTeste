import { all } from 'redux-saga/effects'
import sagaBuscaPokemon from './BuscaPokemon/Saga';

export default function* rootSaga(){
    yield all([
        sagaBuscaPokemon()
    ])
}