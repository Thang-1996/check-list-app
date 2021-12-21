import React from 'react';
import {Button, Grid, IconButton, Input, Paper, TextField} from "@mui/material";
import "./listwork.scss"
import {Build, Delete} from "@mui/icons-material";

const ListWork = (props) => {
    return (
        <div className="list-work" style={{ marginTop : '20px'}}>
            <Grid
                xs={12}
                item
            >
                <Paper elevation={2} >
                    <span >Running 45 minutes</span>
                    <IconButton
                        color="primary"
                        aria-label="Edit"
                    >
                        <Build fontSize="small" />
                    </IconButton>
                    <IconButton
                        color="secondary"
                        aria-label="Delete"
                    >
                        <Delete fontSize="small" />
                    </IconButton>
                </Paper>
            </Grid>
        </div>
    )

}

export default ListWork;
