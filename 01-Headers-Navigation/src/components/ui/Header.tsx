import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {
    const onCLickBox = () => {
        console.log('Here your Text');

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton
                        onClick={onCLickBox}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" color="inherit" component="div">
                        SISBADI
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
