import { all } from 'redux-saga/effects'
import sagaPersonagens from './ListaPersonagens/Saga';

export default function* rootSaga(){
    yield all([
        sagaPersonagens()
    ])
}