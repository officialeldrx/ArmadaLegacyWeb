
import {Box, AppBar, Toolbar, ListItem, FormControl, TextField, Button, ListItemButton, ListItemText, ListItemIcon, List, Divider, Avatar, BottomNavigation, BottomNavigationAction, Paper, Typography, IconButton, Stack} from '@mui/material';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import logo from './assets/logo.svg'
import Home from './pages/Home.tsx'
import Builder from './pages/Builder.tsx'
import Expansions from './pages/Expansions.tsx'
import Updates from './pages/Updates.tsx'
import BottomNav from './components/BottomNav.tsx';

const darkTheme = createTheme({
    palette: {
        primary: {
          main: '#1A7298',
        },
      },
    typography:{
        fontFamily: 'Optima'
    },
    // palette: {
    //     mode: 'dark',
    // },
});

export default function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <div id="background"></div>

                {/* <AppBar position="relative" style={{background: 'none', boxShadow: 'none'}}>
                    <Toolbar>
                        <img height={32} src={logo} />
                        <Avatar onClick={toggleUserDrawer(true)} style={{marginLeft: 'auto', width: 32, height: 32, marginTop: 5}}></Avatar>
                    </Toolbar>
                </AppBar> */}

                <Box sx={{p:3, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', paddingBottom: 10}}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/updates" element={<Updates />}></Route>
                        <Route path="/expansions" element={<Expansions />}></Route>
                        <Route path="/builder" element={<Builder />}></Route>
                    </Routes>
                </Box>
                
                <BottomNav></BottomNav>
            </ThemeProvider>
        </BrowserRouter>
    );
}