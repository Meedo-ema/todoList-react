import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/todosReducer.jsx'

export const TodosContext = createContext([])

const TodosProvider = ({ children }) => {
const [todos, todosDispatch] = useReducer(reducer, [])

  return (
    <TodosContext.Provider value={{todos: todos, dispatch: todosDispatch}}>
      {children}
    </TodosContext.Provider>
  )
}
export const useTodos = () =>{
  return useContext(TodosContext)
}
export default TodosProvider
