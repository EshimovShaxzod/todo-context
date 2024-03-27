import React, { useContext } from 'react'
import { Context as TodoContext } from '../context/todo-app'
import TodoForm from './todoForm'
import TodoItem from './todoItem'

const TodoList = () => {

  const {todos} = useContext(TodoContext)

  return (
    <div className='mx-16 flex justify-between my-16'>
      <TodoForm />
      <table className='w-full max-w-[700px]  p-2 h-auto'>
        <thead>
          <tr>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Tug'ilgan sanasi</th>
            <th>Amal</th>
          </tr>
        </thead>
        <tbody>
         {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </tbody>
      </table>
     
    </div>
  )
}

export default TodoList