import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
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
        redirect: "/buscar"
    }
]

const DrawerComponent = ({ handleDrawer, classes, open }) => {
    return (
        <Drawer anchor="left"
                open={open}
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
            <div>
                <IconButton onClick={handleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {
                    menu.map((item, i) => {
                        return <DrawerListItem key={i} dados={item} />
                    })
                }
                
            </List>
        </Drawer>
    )
}

const DrawerListItem = ({ dados }) => {
    return (
        <ListItem button>
            <ListItemIcon>
                { dados.icon }
            </ListItemIcon>
            <ListItemText primary={ dados.text } />
        </ListItem>
    )
}

export default DrawerComponent;