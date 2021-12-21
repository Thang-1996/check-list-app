import React, {useState} from 'react';
import {Alert, Checkbox, Paper, Snackbar} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import {Build, Delete} from "@mui/icons-material";
import { updateDoc, refDatabase, database, removeDoc } from "../services/firebase";
import "./workitem.scss"
const WorkItem = (props) => {
    const { work } = props
    const [open, setOpen] = useState(false)
    const vertical = "top";
    const horizontal = "center";
    const [message, setMessage] = useState('')

    const handleClose = () => {
       setOpen(false)
    };
    const handleMarkWork = async (event) => {
        const {checked} = event.target
        const workUpdate = work
        if(checked === true){
            workUpdate.status = 1
        }else{
            workUpdate.status = 0
        }
        const updates = {}
        updates[`/routines/${work.id}`] = workUpdate
        await updateDoc(refDatabase(database), updates)
        setMessage(`${checked ? 'Done' : 'UnCheck' } Task ${work.workName}`)
        setOpen(true)
    }
    const handleDeleteWork = async () => {
        await removeDoc(refDatabase(database, `/routines/${work.id}`))
    }
    return (
        <div className="work-item">
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={message.includes("Done") ? "success" : "error"} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <Paper elevation={2} >
                <div>
                    <Checkbox onChange={(event) => handleMarkWork(event)} style={{ color : 'lightcoral'}} checked={work.status !== 0} />
                    <span >{work.workName}</span>
                </div>
                <div className="work-item-action">
                    <ClearIcon
                        color="secondary"
                        aria-label="Delete"
                        style={{
                            marginLeft : '5px',
                            color : 'lightcoral',
                            cursor : 'pointer'
                        }}
                        onClick={(event) => handleDeleteWork(event)}
                    >
                        <Delete fontSize="small" />
                    </ClearIcon>
                </div>

            </Paper>

        </div>
    )
}
export default WorkItem