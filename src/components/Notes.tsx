import React from "react";
import { TodoObj } from "../models/todo";
import Note from './note';
import { Box, Typography } from "@mui/material";

interface INotesprops {
    alltodo: TodoObj[],
    deletenote: (id: number) => void
}


const TODO: React.FC<INotesprops> = ({ alltodo,deletenote }) => {
    return (
        <Box>
            <Typography variant="h3">TODO </Typography>
            {
                alltodo.map(todo =>(
                    <Note todo= {todo} deletenote={deletenote}/>
                ))
            }
        </Box>
    )
}
export default TODO;