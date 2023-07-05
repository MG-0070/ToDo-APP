import React, { useState } from 'react';
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleLogin = (username, password) => {
    // Add your login logic here
    // For simplicity, we will consider any non-empty credentials as a successful login
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setTodos([]);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const newTodo = {
                id: Date.now(),
                title: event.target.todo.value,
              };
              handleAddTodo(newTodo);
              event.target.todo.value = '';
            }}
          >
            <input type="text" name="todo" placeholder="Enter a new ToDo item" />
            <button type="submit">Add ToDo</button>
          </form>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
