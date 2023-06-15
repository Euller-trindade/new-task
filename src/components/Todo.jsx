/* eslint-disable react/prop-types */
export const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className={todo.isCompleted ? "completed todo" : "todo"} key={todo.id}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">Categoria: {todo.category}</p>
      </div>
      <div className="comp-del">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="delete" onClick={() => removeTodo(todo.id)}>
          Deletar
        </button>
      </div>
    </div>
  );
};
