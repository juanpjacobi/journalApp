import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { ArrowBackIos, TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarItem } from './';
import { useTheme } from '@emotion/react';
import { toggleSidebar } from '../../store/ui/uiSlice';

export const SideBar = ({ drawerWidth = 240 }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const dispatch = useDispatch();

    let display = isMatch ? 'temporary' :'permanent';
    const onToggleSidebar = () => {
        dispatch(toggleSidebar());
      };

    const { displayName } = useSelector( state => state.auth );
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

    const { notes } = useSelector( state => state.journal );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant={display} // temporary
                open={isSidebarOpen}
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 3, display: { sm: 'none' } }}
                onClick={onToggleSidebar}
                >
                <ArrowBackIos />
            </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SideBarItem key={ note.id } { ...note } />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
