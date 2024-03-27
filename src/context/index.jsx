import { createContext } from "react";
import { TodoProvider } from "./todo-app";

const Context = createContext(null)

const RootProvider = ({children}) => {
    return (
        <Context.Provider value={''}>
          <TodoProvider>{children}</TodoProvider>
        </Context.Provider>
    )
}

export {RootProvider}