import logo from './logo.svg';
import './App.css';
import Todo from './todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, loadTodos } from './todos/todosSlice';
import { useEffect, useState } from 'react';

function App() {
  const [value, setCurrentValue] = useState('')
  const dispatch = useDispatch()
  const handleDispatch = () => {
    dispatch(addTodos(value, false))
  }
  useEffect(() => {
    dispatch(loadTodos())
  },[])
  return (
    <div className="App">
      
      <Todo/>
      <input type={'text'} placeholder={"Add more items..."} onChange={(ev) => setCurrentValue(ev.target.value)} />
      <button onClick={handleDispatch}>Add value</button>
    </div>
  );
}

export default App;
