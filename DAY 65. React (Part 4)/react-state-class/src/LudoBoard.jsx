import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//01. Objects & State
// export default function App() {
//   let [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

//   let updateBlue = () => {
//     // moves.Blue += 1;
//     setMoves((prevMoves) => {
//       return { ...prevMoves, Blue: prevMoves.Blue + 1 };
//     });
//   };
//   let updateYellow = () => {
//     // moves.Blue += 1;
//     setMoves((prevMoves) => {
//       return { ...prevMoves, Yellow: prevMoves.Yellow + 1 };
//     });
//   };
//   let updateGreen = () => {
//     // moves.Blue += 1;
//     setMoves((prevMoves) => {
//       return { ...prevMoves, Green: prevMoves.Green + 1 };
//     });
//   };
//   let updateRed = () => {
//     // moves.Blue += 1;
//     setMoves((prevMoves) => {
//       return { ...prevMoves, Red: prevMoves.Red + 1 };
//     });
//   };

//   return (
//     <div>
//       <h1>Game Begins!</h1>
//       <div>
//         <p>Blue Moves = {moves.Blue} </p>
//         <button style={{ backgroundColor: "Blue" }} onClick={updateBlue}>
//           +1
//         </button>

//         <p>Yellow Moves = {moves.Yellow} </p>
//         <button
//           style={{ backgroundColor: "Yellow", color: "black" }}
//           onClick={updateYellow}
//         >
//           +1
//         </button>

//         <p>Green Moves = {moves.Green} </p>
//         <button style={{ backgroundColor: "Green" }} onClick={updateGreen}>
//           +1
//         </button>

//         <p>Red Moves = {moves.Red} </p>
//         <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
//           +1
//         </button>
//       </div>
//     </div>
//   );
// }

//02. Arrays & State
// export default function App() {
//   // let [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

//   let updateBlue = () => {
//     setMoves((prevArr) => {
//       return [...prevArr, "Blue moves"];
//     });
//   };

//   return (
//     <div>
//       <h1>Game Begins!</h1>
//       <p>{arr}</p>
//       <div>
//         <p>Blue Moves = {moves.Blue} </p>
//         <button style={{ backgroundColor: "Blue" }} onClick={updateBlue}>
//           +1
//         </button>

//         <p>Yellow Moves = {moves.Yellow} </p>
//         <button
//           style={{ backgroundColor: "Yellow", color: "black" }}
//           onClick={updateYellow}
//         >
//           +1
//         </button>

//         <p>Green Moves = {moves.Green} </p>
//         <button style={{ backgroundColor: "Green" }} onClick={updateGreen}>
//           +1
//         </button>

//         <p>Red Moves = {moves.Red} </p>
//         <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
//           +1
//         </button>
//       </div>
//     </div>
//   );
// }

//03. Activity _ Create a Todo
// export default function App() {
//   let [todos, setTodos] = useState(["Sample Task"]);
//   let [newTodo, setNewTodo] = useState([""]);
//   let addNewTodo = () => {
//     // console.log("add task");
//     setTodos([...todos, newTodo]);
//     setNewTodo("");
//   };
//   let updateToValue = (event) => {
//     // console.log(event.target.value);
//     setNewTodo(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         onChange={updateToValue}
//         value={newTodo}
//         placeholder="add a task"
//       />
//       <br />
//       <br />
//       <button onClick={addNewTodo}>Add Task</button>

//       <hr />
//       <h3>To Do List</h3>
//       <ul>
//         {todos.map((todo) => {
//           return <li>{todo}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

//04. Unique Key for List Items
// export default function App() {
//   let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
//   let [newTodo, setNewTodo] = useState([""]);
//   let addNewTodo = () => {
//     // console.log("add task");
//     setTodos([...todos, { task: newTodo, id: uuidv4() }]);
//     setNewTodo("");
//   };
//   let updateToValue = (event) => {
//     // console.log(event.target.value);
//     setNewTodo(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         onChange={updateToValue}
//         value={newTodo}
//         placeholder="add a task"
//       />
//       <br />
//       <br />
//       <button onClick={addNewTodo}>Add Task</button>

//       <hr />
//       <h3>To Do List</h3>
//       <ul>
//         {todos.map((todo) => {
//           return <li key={todo.id}>{todo.task}</li>; // Use todo.id
//         })}
//       </ul>
//     </div>
//   );
// }

//05. Deleting from Arrays
export default function App() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState([""]);
  let addNewTodo = () => {
    // console.log("add task");
    setTodos((preTodo) => {
      return [...todos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateToValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    console.log("delete value");
  };

  return (
    <div>
      <input
        onChange={updateToValue}
        value={newTodo}
        placeholder="add a task"
      />
      <br />
      <br />
      <button onClick={addNewTodo}>Add Task</button>

      <hr />
      <h3>To Do List</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
