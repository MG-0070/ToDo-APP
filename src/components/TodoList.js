import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <div>
      <h2>ToDo List</h2>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} />
            <Button onClick={() => onDeleteTodo(todo.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
