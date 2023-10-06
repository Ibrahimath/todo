import React from 'react'


function TodoList({todos}) {
    console.log(todos);
  return (
    todos.map((todo) =>(
    <div >
        <p>{todo.text}</p>
        <input type="checkbox" checked = {todo.done} />
</div>
    )
  )
  )
}

export default TodoList

