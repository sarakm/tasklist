import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      <div class='todo'>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return (
          <p key={index} class="left">
            {index + 1}. {todo}
          </p>
        );
      })}
      </div>
    </>
  );
};

export default memo(Todos);