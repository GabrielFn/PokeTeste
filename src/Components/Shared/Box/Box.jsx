import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Box.css';

class Box extends React.Component {
    render() {
        return (
            <Grid container spacing={8} className="box-container">
                <Grid container>
                    <Grid item>
                        <Typography variant="display2" gutterBottom>
                            {this.props.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    { this.props.children }
                </Grid>
            </Grid>
        )
    }
}

export default Box;