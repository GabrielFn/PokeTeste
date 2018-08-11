import React from 'react';
import Grid from '@material-ui/core/Grid';

const DetalhePokemon = ({ dados }) => {
    return (
        <Grid container>
            <Grid container spacing={8}>
                <Grid item lg={2} md={4} sm={4} xs={12}>
                    <img src={dados.sprites.front_default} alt={dados.name} style={{ width: "100%" }} />
                </Grid>
                <Grid item lg={10} md={8} sm={8} xs={12}>
                    <Grid container spacing={8}>
                        <Grid item lg={3} md={4} sm={6} xs={12} className="container-atributo">
                            <p>Type(s):</p>
                            <span>
                                {
                                    dados.types.map((type, i) => {
                                        return `${type.type.name}${(dados.types.length - 1 !== i) ? ", " : ""}`
                                    })
                                }
                            </span>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} className="container-atributo">
                            <p>Height</p>
                            <span>{dados.height}</span>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12} className="container-atributo">
                            <p>Weight</p>
                            <span>{dados.weight}</span>
                        </Grid>
                        {
                            dados.stats.map((item, index) => {
                                return (
                                    <Grid item lg={3} md={4} sm={6} xs={12} key={index} className="container-atributo">
                                        <p>{item.stat.name}</p>
                                        <span>{item.base_stat}</span>
                                    </Grid>
                                )
                            })
                        }
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetalhePokemon;