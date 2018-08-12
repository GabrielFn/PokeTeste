import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import pokeService from '../../Services/PokeService';
import assert from 'assert';

import { fetchPokemonsTipo } from '../../Sagas/PokemonsTipoSaga';
import {
    POKEMONS_TIPO_SUCCESS,
    POKEMONS_TIPO_ERROR
} from '../../Constants/PokemonsTipoConstants';

describe('PokemonsTipo Saga', () => {
    describe('fetchPokemonsTipo()', () => {
        const generator = fetchPokemonsTipo({ tipo: undefined });
        it('Retorno da api pokeService.buscarPokemonsTipo', () => {
            assert.deepEqual(generator.next().value, call(pokeService.buscarPokemonsTipo, undefined));
        })
        it('Retorno da action POKEMONS_TIPO_SUCCESS', () => {
            assert.deepEqual(generator.next().value, 
                put({ type: POKEMONS_TIPO_SUCCESS, data: undefined }))
        })
        it('Retorno da action POKEMONS_TIPO_ERROR', () => {
            assert.deepEqual(generator.throw({ message: undefined }).value, 
                put({ type: POKEMONS_TIPO_ERROR, message: undefined }))
        })
        it('Fim da instrução', () => {
            assert.deepEqual(generator.next().done, true);
        })
    })
})