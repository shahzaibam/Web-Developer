import './App.css';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import React, { useState } from 'react';


function App() {   

  const onDelete = (todo)=>{
    console.log("I am delete", todo)
  }
  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "play",
      desc : "play cricket"
    },

    {
      sno : 2,
      title : "study",
      desc : "study javascript"
    },

    {
      sno : 3,
      title : "workout",
      desc : "gym workout"
    },
  ]);
  return (
    <>
      <Header title="Shebi's Todo List" searchBar={false}/>
      <Footer/>
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default App;
