import React from "react";
import { connect } from "react-redux";
import { isEmpty } from '../../Utils/ValidationUtils';
import { consultarPersonagens } from "./Redux";

class CatalogoContainer extends React.Component {
    componentDidMount() {
        this.props.consultarPersonagens();
    }

    render() {
        console.log(this.props.catalogoState);

        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        catalogoState: state.Catalogo
    };
};

export default connect(mapStateToProps, { 
    consultarPersonagens
})(CatalogoContainer);
