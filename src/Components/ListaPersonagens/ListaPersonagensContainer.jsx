import React from "react";
import { connect } from "react-redux";

import { isEmpty } from '../../Utils/ValidationUtils';
import { consultarPersonagens } from "./Redux";

class ListaPersonagensContainer extends React.Component {
    componentDidMount() {
        this.props.consultarPersonagens();
    }

    render() {
        console.log(this.props.personagensState);

        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personagensState: state.ListaPersonagens
    };
};

export default connect(mapStateToProps, { 
    consultarPersonagens
})(ListaPersonagensContainer);
