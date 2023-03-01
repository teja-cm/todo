import React from "react";
import Textarea from '@mui/joy/Textarea';
import InputBase from '@mui/material/InputBase';
import { Button, Typography } from '@mui/material';
import { useState } from "react";
import { TodoObj } from "../models/todo";
import { v4 as uuid } from 'uuid';

const defaultObj = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: (new Date().toLocaleString()).toString()
}
//to expect a props created a interface
interface ICreateNoteProps {
    addtodos: (todo: TodoObj) => void
}

//declare the props that are coming

const CreateNote: React.FC<ICreateNoteProps> = ({ addtodos }) => {
    const [Todo, setTodo] = useState<TodoObj>(defaultObj);
    //for error
    const [error, setError] = useState<string>('');


    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //if error has value make it empty
        if (error) {
            setError('');
        }
        // console.log(e.target.name, e.target.value);
        // key is e.target.name put th value inside
        setTodo({ ...Todo, [e.target.name]: e.target.value })

    }

    const onCreatetodo = () => {
        //installing npm uuid for unique values of id
        if (!Todo.title && !Todo.details || !Todo.title || !Todo.details) {
            setError('All fields are mandatory');
            return;
        }
        addtodos({ ...Todo, id: uuid() })
        //add default obj for new note
        setTodo(defaultObj);

    }
    return (
        <div>
            <div className="note">
                <InputBase
                    placeholder="Title" className="title"
                    onChange={(e) => onValueChange(e)}
                    name="title"
                    value={Todo.title} />
                <Textarea minRows={5} placeholder="Details" className="details"
                    onChange={(e) => onValueChange(e)}
                    name="details"
                    value={Todo.details} />
                <InputBase
                    type="color" className="color"
                    defaultValue={'#2C5364'}
                    onChange={(e) => onValueChange(e)}
                    name="color"
                />
                <Button variant="contained" className="button" onClick={() => onCreatetodo()} >Create</Button>
            </div>
            {/* if error is true thn show this */}
            {error && <Typography className="error">{error}</Typography>}

        </div>
    )
}
export default CreateNote;