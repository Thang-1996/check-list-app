import { signInWithGoogle } from '../services/firebase';
import React from "react"
import "./login.scss"
import BackgroundImage from "../assets/images/background.png"
import {Button, FormControl, TextField, Typography} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
    return (
        <div className="cover-mobile" style={{ backgroundImage : `url(${BackgroundImage})`}}>
            <div className="login-page" style={{ backgroundImage : `url(${BackgroundImage})`}}>
                <div className="login-form">
                    <FormControl className="form">
                        <span className="welcome-text">Routine Manager</span>
                        <Button className="login-with-google" type="button" color="warning" variant="outlined" onClick={signInWithGoogle}>
                            <GoogleIcon/>   <span style={{ marginLeft : '10px'}}>Sign in with Google</span>
                        </Button>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Login;