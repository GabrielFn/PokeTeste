import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import DrawerComponent from './Drawer';

const drawerWidth = 260;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
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
        const { classes, theme } = this.props;

        return (
            <div>
                <AppBar position="static" className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes[`appBarShift-left`]]: open,
                })}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <div className="base-header"></div>
                    </Toolbar>
                </AppBar>
                <DrawerComponent classes={ classes } handleDrawer={ this.handleDrawer } open={ open } />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Header);