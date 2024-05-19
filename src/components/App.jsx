import TodoList from './TodoList';
import NewTodo from './NewTodo';

export default function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}
