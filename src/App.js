import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDos from "./Components/ToDos";
import React, { useState, useEffect } from "react";
import AddToDo from "./Components/AddToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import background from "./Components/img/bg.jpg"

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    // Deleting by this way in react does not work
    // let index = todos.index(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addToDo = (title, desc) => {

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].srNo + 1;
    }
    const myTodo = {
      srNo: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);

  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (

    <>
    <div style={{ backgroundImage: `url(${background})` }}>
    </div>
      <Router>
        <Header title="MyToDo'sList" search={false} />
        <Routes>
          <Route exact path="/" element={<><AddToDo addToDo={addToDo} /><ToDos todos={todos} onDelete={onDelete} /></>} />
          <Route exact path="/" element={<ToDos todos={todos} onDelete={onDelete} />} />
          <Route exact path="/about" element={<About />} />


        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

// <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
