/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
    if (e.key === "Enter") {
      console.log(e.target.value);
      addTodo(value, category);
      setValue("");
      setCategory("");
    }
  };
  return (
    <div className="todo-form">
      <h2>Nova tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <div className="form-tarefa">
          <input
            type="text"
            value={value}
            placeholder="Digite o título..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Criar</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
