import { all } from 'redux-saga/effects'
import sagaCatalogo from './Catalogo/Saga';

export default function* rootSaga(){
    yield all([
        sagaCatalogo()
    ])
}