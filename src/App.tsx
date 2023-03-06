import React, { useEffect } from 'react';
import Header from './components/header'
import './App.css';
import CreateNote from './components/CreateNote';
import TODO from './components/Notes';
import { useState } from "react";
import { TodoObj } from './models/todo';



function App() {



  //check for session storage
  useEffect(() => {
    if (sessionStorage.getItem('alltodo')) {
      setalltodo(JSON.parse(sessionStorage.getItem('alltodo') as string));
    }
  }, [])
  //defining in array as i want all the todos in the main page
  //for type checking i used interface
  const [alltodo, setalltodo] = useState<TodoObj[]>([]);

  //i will ake a function to add all todos 
  const addtodos = (todo: TodoObj) => {
    setalltodo([...alltodo, todo]);
    sessionStorage.setItem('alltodo', JSON.stringify([...alltodo, todo]));


  }
  //to delete note
  const deletenote = (id: number) => {
    //returning all the functions that id isnt matching
    const updatedNottes = alltodo.filter(todo => todo.id !== id);
    setalltodo(updatedNottes);
    sessionStorage.setItem('alltodo', JSON.stringify(updatedNottes));


  }
  const View = (id: number) => {
    const Viewdata = alltodo.filter(todo => todo.id == id);
    alert("TITLE =" + Viewdata[0].title + "\nDETAILS = " + Viewdata[0].details+"\nDATE = " + Viewdata[0].date)
  }
  return (
    <div className="App">
      <Header />
      {/* passing the prop in createnote */}
      <CreateNote addtodos={addtodos} />
      <TODO alltodo={alltodo} deletenote={deletenote} view={View} />

    </div>
  );
}

export default App;
