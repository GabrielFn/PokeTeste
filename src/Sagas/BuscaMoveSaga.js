import { call, put, takeLatest } from 'redux-saga/effects';
import pokeService from '../Services/PokeService';
import {
    BUSCA_MOVE_REQUEST,
    BUSCA_MOVE_SUCCESS,
    BUSCA_MOVE_ERROR
} from '../Constants/BuscaMoveConstants';

function* fetchMove(action) {
    try{
        const data = yield call(pokeService.buscarMove, action.moveName);
        
        yield put({ type: BUSCA_MOVE_SUCCESS, data});

    }
    catch (e) {
        yield put({type: BUSCA_MOVE_ERROR, message: e.message});
    }
};

export default function* sagaBuscaMove() {
    yield takeLatest(BUSCA_MOVE_REQUEST, fetchMove)
}