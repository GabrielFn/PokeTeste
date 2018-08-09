import { call, put, takeLatest } from 'redux-saga/effects';
import marvelService from '../../Services/PokeService';
import {
    SET_PERSONAGENS,
    GET_PERSONAGENS
} from './Constants';

function* fetchPersonagens() {
    const data = yield call(marvelService.consultarPersonagens)
    yield put({
        type: SET_PERSONAGENS,
        data
    })
};

export default function* sagaPersonagens() {
    yield takeLatest(GET_PERSONAGENS, fetchPersonagens)
}