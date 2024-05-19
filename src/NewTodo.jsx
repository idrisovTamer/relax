 import {useDispatch, useSelector} from 'react-redux';
 import {addTodo, removeTodo, toggleTodo } from './store'
 const NewTodo = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(addTodo(e.target.title.value))
        e.preventDefault();
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add todos..." name='title'/>
            <button> add</button>
             </form>
    )
}

export default NewTodo;