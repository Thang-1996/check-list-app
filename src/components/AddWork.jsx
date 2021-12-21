import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
import "./addwork.scss"
import { database, setDatabase, refDatabase } from '../services/firebase';
import { v4 as uuidv4 } from 'uuid'
const AddWork = (props) => {
    const [work, setWork] = useState("")
    const handleAddRoutine = async (event) => {
        event.preventDefault();
        await setDatabase(refDatabase(database, `routines/${uuidv4()}`), {
            workName : work,
            createAt : Date.now(),
            status : 0,
            createdBy : props?.user?.displayName,
            userAvatar : props?.user?.photoURL
        })
        setWork("")
    }
    return (
        <div className="add-work">
            <form style={{ display: "flex" }}>
                <Input
                    placeholder="Type to add routine"
                    inputProps={{
                        "aria-label": "Description"
                    }}
                    style={{ width: "90%", }}
                    onChange={(event) => setWork(event.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "10%" }}
                    onClick={(event) => handleAddRoutine(event)}
                >
                    Add
                </Button>
            </form>
        </div>
    )

}

export default AddWork;
