import { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    setTodoArray(todos);
  }, [setTodoArray, todos]);

  let completedTodoArray = todoArray.filter(todo => todo.completed);

  return (
    <div className={styles.container}>
      {todoArray
        .filter(todo => !todo.completed)
        .map(todo => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            description={todo.description}
          />
        ))}
      {completedTodoArray.length
        ? completedTodoArray.map(todo => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              description={todo.description}
            />
          ))
        : ''}
    </div>
  );
};

export default TodoList;
