import './App.css'
import TodoList from './components/TodoList' 
function App() {

  return (
    <div
    style={{backgroundColor: "#1E1E2F",
        display: 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        minHeight : '100vh',
        direction: 'rtl'
    }}>
    <TodoList />
   </div>
  )
}

export default App
