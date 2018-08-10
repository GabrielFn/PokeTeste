import React from 'react';
import Grid from '@material-ui/core/Grid';
import debounce from 'lodash/debounce';
import TextField from '@material-ui/core/TextField';
import { isEmpty } from '../../../Utils/ValidationUtils';

class Busca extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.handleChange = this.handleChange.bind(this);
        this.changed = debounce(this.props.handleBusca, 1000);
    }

    handleChange(e) {
        const val = e.target.value;
        this.setState({ value: val }, () => {
            if (!isEmpty(val)){
                this.changed(val);
            }
        });
    }

    render() {
        return (
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                    id="search"
                    label={ this.props.placeholder }
                    type="search"
                    onChange={this.handleChange}
                    margin="normal" />
            </Grid>
        )
    }
}

export default Busca;