import "./styles.css";
import TodoList from './TodoList';
import NewTodo from './NewTodo';

export default function App() {
  return (
    <div className="App">
      <h1>TodoRelax</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}
