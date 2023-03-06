import React from "react";
import { TodoObj } from "../models/todo";
import { Card, CardContent, Box, Typography, Button } from '@mui/material';

interface INoteProps {
    todo: TodoObj,
    deletenote: (id: number) => void,
    view: (id: number) => void
}

const Note: React.FC<INoteProps> = ({ todo, deletenote ,view}) => {
    return (
        <Card className="card" style={{ backgroundColor: todo.color }}>
            <CardContent>
                <Box>
                    <Typography>{todo.title}</Typography>
                    <Typography>{todo.details}</Typography>
                    <Typography>{todo.date}</Typography>
                    <Button variant="contained" className="notebutton" onClick={() => deletenote(todo.id)}>Delete</Button>
                    <Button variant="contained" className="viewbutton" onClick={() => view(todo.id)}>View</Button>

                </Box>
            </CardContent>
        </Card>
    )
}
export default Note;