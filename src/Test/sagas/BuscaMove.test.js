import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import pokeService from '../../Services/PokeService';
import assert from 'assert';

import { fetchMove } from '../../Sagas/BuscaMoveSaga';
import {
    BUSCA_MOVE_SUCCESS,
    BUSCA_MOVE_ERROR
} from '../../Constants/BuscaMoveConstants';

describe('BuscaMove Saga SUCCESS', () => {
    describe('fetchMove()', () => {
        const generator = fetchMove({ moveName: undefined });
        it('Retorno da api pokeService.buscarMove', () => {
            assert.deepEqual(generator.next().value, call(pokeService.buscarMove, undefined));
        })
        it('Retorno da action BUSCA_MOVE_SUCCESS', () => {
            assert.deepEqual(generator.next().value, 
                put({ type: BUSCA_MOVE_SUCCESS, data: undefined }))
        })
        it('Retorno da action BUSCA_MOVE_ERROR', () => {
            assert.deepEqual(generator.throw({ message: undefined }).value, 
                put({ type: BUSCA_MOVE_ERROR, message: undefined }))
        })
        it('Fim da instrução', () => {
            assert.deepEqual(generator.next().done, true);
        })
    })
})