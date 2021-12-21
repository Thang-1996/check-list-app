import React from 'react';
import {Button, Input, TextField} from "@mui/material";
import "./addwork.scss"

const AddWork = (props) => {
    return (
        <div className="add-work">
            <form style={{ display: "flex" }}>
                <Input
                    placeholder="Type to add routine"
                    inputProps={{
                        "aria-label": "Description"
                    }}
                    style={{ width: "90%", }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "10%" }}
                >
                    Add
                </Button>
            </form>
        </div>
    )

}

export default AddWork;
