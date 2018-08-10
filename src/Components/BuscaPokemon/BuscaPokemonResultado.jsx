import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from '../../Utils/ValidationUtils';

const BuscaPokemonResultado = ({ dados, primeiroAcesso }) => {

    let component = "";

    if(isEmpty(dados)){
        if(!primeiroAcesso){
            component = "Nenhum Pokémon Encontrado";
        }
    }
    else {
        component = <CardPokemon dados={dados} />
    }

    return (
        component 
    )
}

const CardPokemon = ({ dados }) => {
    return (
        <Grid item>
            <Card className="card">
                <CardMedia
                    className="media"
                    image={dados.sprites.front_default}
                    title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default BuscaPokemonResultado;