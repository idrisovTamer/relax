import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../store/actions/todos-actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editTitle, setIsEditTitle] = useState('')


const onEditTask = (todo) => {
 setIsEditTitle(todo.title)
setEditId(todo.id)
}

const onSaveTask = (todo) => {
dispatch(editTodo(todo.id, editTitle))
setEditId(null)
setIsEditTitle('')
}


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          /> { 
              editId === todo.id ? (
                <>
                  <input type="text"
                  value={editTitle}
                  onChange={(e)=> setIsEditTitle(e.target.value)}
                  />
                  <button onClick={()=> onSaveTask(todo)}>save</button>
                </>
              ) : (
                
                <> 
                {todo.title}
                <button onClick={() => onEditTask(todo)}>edit</button>
                </>
              )
          }

         
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

