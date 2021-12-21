import { signInWithGoogle } from '../services/firebase';
import React from "react"
import "./login.scss"
import BackgroundImage from "../assets/images/background.png"
import {Button, FormControl, TextField, Typography} from "@mui/material";

const Login = () => {
    return (
        <div className="cover-mobile" style={{ backgroundImage : `url(${BackgroundImage})`}}>
            <div className="login-page" style={{ backgroundImage : `url(${BackgroundImage})`}}>
                <div className="login-form">
                    <FormControl className="form">
                        <span className="welcome-text">Welcome Friend</span>
                        <TextField
                            label="Email"
                            id="email"
                            fullWidth
                            type="text"
                            autoComplete="off"
                            color="secondary"
                        />
                        <TextField
                            color="secondary"
                            label="Password"
                            id="password"
                            fullWidth
                            type="password"
                            autoComplete="off"
                        />

                        <Button className="login-normal" type="button" color="secondary" variant="outlined">
                            Sign in
                        </Button>
                        <Button className="login-with-google" type="button" color="secondary" variant="outlined" onClick={signInWithGoogle}>
                            Sign in with Google
                        </Button>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Login;