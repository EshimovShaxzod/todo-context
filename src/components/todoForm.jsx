import { useContext, useRef } from "react";
import { Context as TodoContext } from "../context/todo-app";

const TodoForm = () => {

    const {handleAddTodo} = useContext(TodoContext)
    const userNameVal = useRef(null)
    const lastNameVal = useRef(null)
    const dateValue = useRef(null)

    const handleSubmitTodo = (evt) => {
       evt.preventDefault();
       handleAddTodo(userNameVal.current?.value, lastNameVal.current?.value, dateValue.current?.value)
       userNameVal.current.value = null
       lastNameVal.current.value = null;
       dateValue.current.value = null
    }

   return(
        <form className="w-full flex flex-col gap-3 max-w-[350px]" onSubmit={handleSubmitTodo}>
            <input className="w-full p-2 outline-none border rounded-l-md mb-4" ref={userNameVal} type="text" placeholder="Enter your name.." />
            <input className="w-full p-2 outline-none border rounded-l-md mb-4" ref={lastNameVal} type="text" placeholder="Enter your lastName.." />
            <input type="date" ref={dateValue} />
            <button className="bg-[blue] px-7 py-2  rounded-r-md text-white mt-4">Add</button>
        </form>
   )

}

export default TodoForm