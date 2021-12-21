import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import "./listwork.scss"
import WorkItem from "./WorkItem";
import { getValue, refDatabase, database } from '../services/firebase';

const ListWork = (props) => {
    const [listWorks, setListWorks] = useState([])
    const getDatabaseData = () => {
        getValue(refDatabase(database, "/routines"), async (snapshot) => {
            const values = snapshot.val()
            if(values && Object.keys(values).length > 0){
                const valuesAfterMap = Object.keys(values).map(item => {
                    return {
                        ...values[item],
                        id : item
                    }
                })
                setListWorks(valuesAfterMap)
            }else{
                setListWorks([])
            }
        })

    }
    useEffect(() => {
       getDatabaseData()
    },[])
    return (
        <div className="list-work" style={{ marginTop : '20px'}}>
            <Grid
                xs={12}
                item
                style={{
                    backgroundColor : '#FFFED0'
                }}
            >
                {listWorks.map((item, index) => {
                    return (<WorkItem key={index} work={item}/>)
                })}

            </Grid>
        </div>
    )

}

export default ListWork;
