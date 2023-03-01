import { useDispatch, useSelector } from "react-redux"
import { removeTodos } from "./todosSlice"

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const onClickHandler = (todo) => {
        const id = todo
        console.log(todo)
        dispatch(removeTodos(id))
    }
    return (
        <ol>
            {
                todos.map((todo) => <li key = {todo.id} onClick={() => onClickHandler(todo.id)}>{todo.text}</li>)
            }
        </ol>
    )

}

export default Todo