import styles from './App.module.css';
import AddTodoForm from './components/AddTodoForm';

import TodoList from './components/TodoList';
import TotalCompleteTask from './components/TotalCompleteTask';

function App() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteTask />
    </div>
  );
}

export default App;
