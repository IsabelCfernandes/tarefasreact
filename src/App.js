//Importações
import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Tasklist from "./Components/Tasklist/Tasklist";

//Função para adicionar id, incrementador.
let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

//Inicio do retorno do programa principal
export default function App() {
  //Cria um hook useState para controlar estado.
  const [tasks, setTasks] = useState([]);

  //função p/ adicionar tarefas
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    //adiciona uma nova tarefa retornando as novas tarefas também.
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };
  //Retorno, exibição.
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
