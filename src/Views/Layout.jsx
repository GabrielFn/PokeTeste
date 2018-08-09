import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

import Header from '../Components/Header/Header';
import "./Layout.css";

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});
  

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Header />
                
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Layout;