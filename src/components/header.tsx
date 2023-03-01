import React from "react";
import logo from "../components/todo.png"

export default function Header(){
    return(
        <div>
            <nav className="nav">
            <img src={logo} className="logo"></img>
            <h1>ToDo here</h1>
            </nav>
        </div>
    )
}