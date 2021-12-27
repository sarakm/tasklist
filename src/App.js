import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";
import User from "./components/User";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState("Anil");
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, document.getElementById("todo").value]);
  };
  function updateData() {
    setData("Sidhu");
  }
  return (
    <div className="App">
      <User />
      <h1>Hello CodeSandbox</h1>
      <h2>{data}</h2>
      {/*<!--Resets the data variable in the state --> */}
      <button onClick={updateData}>Update</button>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" id="todo" />
      {/*<!--Adds the tasks to the state --> */}
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        {/*<!--Increments the count variable on click --> */}
        <button class="btn" onClick={increment}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
