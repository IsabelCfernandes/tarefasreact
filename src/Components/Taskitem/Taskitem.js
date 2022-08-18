import React, { useState } from "react";
import Proptypes from "prop-types";
import "./Taskitem.css";

export default function Taskitem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  //useState p/ ativar a edição do input
  const [isEditing, setEditing] = useState(false);
  //useState p/ trocar o nome do titulo
  const [editableTitle, setEditableTitle] = useState(title);

  //onTitleChange cria um evento p/ mudar valor do input e setar newTitle
  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  //Evento onkeyPress que ao clicar enter confima a nova edição do input
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
      //Se não houver nada ao editar a tarefa, ao apertar enter a tarefa é apagada baseado no id
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  //variavel p/

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  //Condicional que permite clicar ou não p/ ativar input
  if (isEditing) {
    //se trocar valor
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    //se não trocar continua o já setado anteriormente (mesmo se for novo valor)
    return (
      <div className="task-item">
        <div onClick={(e) => setEditing(true)}>{editableTitle}</div>
        <select
          className="task-item"
          onChange={onTaskStateChange}
          value={taskState}
        >
          <option value="pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

//Essa é a vericação de tipos, usando a biblioteca PropTypes para verificar se a variavel recebe o tipo correto.
Taskitem.Proptypes = {
  //o title requer obrigatoriamente o tipo String.
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  tasksState: Proptypes.string.isRequired
};
