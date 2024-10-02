import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//01. Todo Solution - Mark as Done Feature
export default function App() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState([""]);
  let addNewTodo = () => {
    // console.log("add task");
    setTodos((preTodo) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateToValue = (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id); // Return a new array
    });
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTasks) =>
      prevTasks.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.done }; // Toggle done state
        } else {
          return todo;
        }
      })
    );
  };

  let markAllAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: !todo.done,
        };
      });
    });
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
      <br /> <br />
      <hr />
      <h3>To Do List</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              <button onClick={() => upperCaseOne(todo.id)}>Update One</button>
              <button onClick={() => markAsDone(todo.id)}>Mark Done</button>
            </li>
          );
        })}
      </ul>
      <button onClick={upperCaseAll}>Uppercase All</button>
      <button onClick={markAllAsDone}>Mark All Done</button>
    </div>
  );
}
