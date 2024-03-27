import { createContext, useState } from "react";

const Context = createContext()

const TodoProvider = ({children}) => {

    const [todos, setTodos] = useState([])
    const [selectedId, setSelectedId] = useState(-1)

    const handleAddTodo = (title, lastName, dateValue) => {
      
      const newTodo = {
        id: todos.length + 1,
        title: title,
        lastName,
        dateValue,
        isComplete: false
      }

      if(selectedId > 0){
        console.log('salom');
      }

      setTodos([...todos, newTodo])

      console.log(todos);
    }

    const handleDeleteTodo = (id) => {
      setTodos(todos.filter(t => t.id !== id))
    }

   return (
    <Context.Provider value={{todos, handleAddTodo, handleDeleteTodo}}>
      {children}
    </Context.Provider>
   )
}

export {Context, TodoProvider}