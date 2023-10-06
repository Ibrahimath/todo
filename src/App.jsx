import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './todoList'
import Button from '@mui/material/Button';


const todos = [{
  id: 1,
  text: "learn react",
  done: true  
},
{id: 2,
text: "learn html",
done: true}]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <input type="text" />
          <Button variant = "contained" >Add</Button>
        </div>
        <div>
        <TodoList todos = {todos}/>
        </div>

      </div>

    </>
  )
}

export default App
