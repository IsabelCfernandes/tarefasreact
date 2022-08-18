import React from "react";
import "./Tasklist.css";
import Proptypes from "prop-types";
import TaskItem from "../Taskitem/Taskitem";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  //Retorno da função tasklist
  return (
    /* className chama a folha de estilo com o nome dado
       {title} é o nome do props - nome trazido da tag title do App.js
    */
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//Essa é a vericação de tipos, usando a biblioteca PropTypes para verificar se a variavel recebe o tipo correto.
Tasklist.Proptypes = {
  //o title requer obrigatoriamente o tipo String.
  title: Proptypes.string.isRequired,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired
};
