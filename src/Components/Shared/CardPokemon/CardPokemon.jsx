import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { capitalizeFirstLetter } from '../../../Utils/FormatUtils';
import history from '../../../Utils/BrowserHistory';

const CardPokemon = ({ dados, capturarPokemon, excluirPokemon }) => {
    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card>
                <CardMedia
                    className="media"
                    image={dados.sprites.front_default}
                    title={dados.name} />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {`${dados.id} - ${capitalizeFirstLetter(dados.name)}`}
                    </Typography>
                    <Typography component="p">
                        <b>Type(s): </b>
                        {
                            dados.types.map((type, i) => {
                                return `${capitalizeFirstLetter(type.type.name)}${(dados.types.length - 1 !== i) ? ", ": ""}`
                            })
                        }
                    </Typography>
                    <Typography component="p">
                        <b>Height:</b> {dados.height} <b>Weight:</b> {dados.weight}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        !dados.catalogado && capturarPokemon &&
                        <Button size="small" color="primary" onClick={ () => capturarPokemon(dados.id) }>
                            Capturar
                        </Button>
                    }
                    {
                        dados.catalogado && excluirPokemon &&
                        <Button size="small" color="primary" onClick={ () => excluirPokemon(dados.id) }>
                            Excluir
                        </Button>
                    }
                    <Button size="small" color="primary" onClick={ () => history.push(`/detalhe/${dados.id}`) }>
                        Detalhes
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardPokemon;