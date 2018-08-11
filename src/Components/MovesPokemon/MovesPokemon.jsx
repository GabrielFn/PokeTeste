import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const MovesPokemon = ({ dados, buscaDescricaoMove, mostraDescricao, descricaoMove, escondeDescricao }) => {
    return (
        mostraDescricao ?
        <DescricaoMove descricao={descricaoMove} escondeDescricao={escondeDescricao} /> :
        <MovesPokemonList dados={dados} buscaDescricaoMove={buscaDescricaoMove} />
    )
}

const MovesPokemonList = ({ dados, buscaDescricaoMove }) => {
    return (
        <div className="moves-container">
            <Grid container spacing={8} className="moves-scroll">
                {
                    dados.map((move, index) => {
                        return (
                            <Grid item lg={2} md={3} sm={4} xs={6} key={index} className="move-item">
                                <Button onClick={() => buscaDescricaoMove(move.move.name)}>{move.move.name}</Button>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

const DescricaoMove = ({ descricao, escondeDescricao }) => {
    return (
        <div>
            <div className="fechar-descricao-move">
                <span onClick={() => escondeDescricao()}>Fechar</span>
            </div>
            {
                descricao.effect_entries &&
                descricao.effect_entries.map((efect, index) => {
                    return (
                        <div>
                            <p className="title-descricao-move"><b>{descricao.name}</b></p>
                            <p>{efect.short_effect}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovesPokemon;