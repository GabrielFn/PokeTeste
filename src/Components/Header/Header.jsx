import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import DrawerComponent from './Drawer';

const drawerWidth = 260;

const styles = theme => (console.log('theme', theme), {
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
        backgroundColor: theme.palette.primary.main
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={`${classes.appBar} base-header-mobile`}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Abrir Menu"
                            onClick={this.handleDrawer}
                            className={classes.navIconHide}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DrawerComponent classes={classes} handleDrawer={this.handleDrawer} open={open} />
                <main className={classes.content}>
                    <div className={classes.toolbar}></div>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);