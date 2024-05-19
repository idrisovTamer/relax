import {removeTodo, toggleTodo} from './store'
import {useDispatch, useSelector} from 'react-redux'
const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}> 
        <input  type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            />{todo.title}
        <button onClick={()=> dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
      </ul>
  )
}
export default TodoList;



