import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import SearchIcon from '@material-ui/icons/Search';

const menu = [
    {
        text: "Catalogo",
        icon: <InboxIcon />,
        redirect: "/"
    },
    {
        text: "Caçar Pokémons",
        icon: <SearchIcon />,
        redirect: "/busca"
    }
]

const DrawerComponent = ({ handleDrawer, classes, open, redirecionar }) => {
    return (
        <React.Fragment>
            <DrawerMdUp handleDrawer={handleDrawer} classes={classes} open={open} redirecionar={ redirecionar } />
            <DrawerSmDown handleDrawer={handleDrawer} classes={classes} open={open} redirecionar={ redirecionar } />
        </React.Fragment>
    )
}

const DrawerMdUp = ({ handleDrawer, classes, open, redirecionar }) => {
    return (
        <Hidden mdUp>
            <Drawer
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}>
                <div className={classes.toolbar}></div>
                <Divider />
                <List>
                    {
                        menu.map((item, i) => {
                            return <DrawerListItem key={i} dados={item} redirecionar={redirecionar} mobile={true} />
                        })
                    }

                </List>
            </Drawer>
        </Hidden>
    )
}

const DrawerSmDown = ({ handleDrawer, classes, open, redirecionar }) => {
    return (
        <Hidden smDown implementation="css" className="menu-lateral">
            <Drawer
                variant="permanent"
                open
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={`${classes.toolbar} base-header`}></div>
                <Divider />
                <List>
                    {
                        menu.map((item, i) => {
                            return (
                                <DrawerListItem key={i} dados={item} redirecionar={redirecionar} mobile={false} />
                            )
                        })
                    }
                </List>
            </Drawer>
        </Hidden>
    )
}

const DrawerListItem = ({ dados, redirecionar, mobile }) => {
    return (
        <ListItem button onClick={ () => redirecionar(dados.redirect, mobile) }>
            <ListItemIcon>
                {dados.icon}
            </ListItemIcon>
            <ListItemText primary={dados.text} />
        </ListItem>
    )
}

export default DrawerComponent;