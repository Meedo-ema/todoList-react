import './App.css'
import TodoList from './components/TodoList' 
function App() {

  return (
    <div
    style={{backgroundColor: '#b71c1c',
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
