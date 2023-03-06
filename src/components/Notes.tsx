import React from "react";
import { TodoObj } from "../models/todo";
import Note from './note';
import { Box, Typography } from "@mui/material";

interface INotesprops {
    alltodo: TodoObj[],
    deletenote: (id: number) => void,
    view: (id: number) => void
}


const TODO: React.FC<INotesprops> = ({ alltodo,deletenote ,view}) => {
    return (
        <Box>
            <Typography variant="h3" className="TodoNotes">TODO </Typography>
            {
                alltodo.map(todo =>(
                    <Note todo= {todo} deletenote={deletenote} view={view}/>
                ))
            }
        </Box>
    )
}
export default TODO;