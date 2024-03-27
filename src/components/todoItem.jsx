import React from 'react'
import { Context as TodoContext } from '../context/todo-app'
import { useContext } from 'react'

const TodoItem = ({title, lastName, dateValue, id}) => {

const {handleDeleteTodo} = useContext(TodoContext)

  return (
    <tr className='text-center'>
        <td>{title}</td>
        <td>{lastName}</td>
        <td>{dateValue}</td>
        <td >
          <button onClick={() => handleDeleteTodo(id)}  className='bg-[red] px-4 py-1 rounded-md text-white'>Delete</button>
        </td>
    </tr>
  )
}

export default TodoItem