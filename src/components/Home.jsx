import React from 'react';

import {auth} from '../services/firebase'
import "./home.scss"
import BackgroundImage from "../assets/images/background-home.png"
import {
    AppBar,
    Box,
    Button,
    IconButton,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import AddWork from "./AddWork";
import ListWork from "./ListWork";
const Home = ({ user }) => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Done All' },
        { icon: <SaveIcon />, name: 'Delete' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    console.log('user', user)
    return (
        <div className="cover-mobile-home" style={{ backgroundImage : `url(${BackgroundImage})`}}>
            <div className="home-page" style={{ backgroundImage : `url(${BackgroundImage})`}}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <span className="menu-title">Daily Routine</span>
                            {!user ? "Login" : <div className="text-left">
                                <img src={user?.photoURL} alt=""/>
                                <LogoutIcon/>
                            </div>}
                        </Toolbar>
                    </AppBar>
                    <div style={{ padding : '15px 20px', marginTop : '20px'}}>
                        <AddWork/>
                        <ListWork/>
                    </div>

                </Box>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 20, left: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </div>
        </div>

    )
}

export default Home;
