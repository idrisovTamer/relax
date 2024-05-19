import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todos-actions';

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add todos..." name="title" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewTodo;
