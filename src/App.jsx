import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TodoList from './components/TodoList'

const theme = createTheme({
  typography: {
    fontFamily: 'Alexandria, sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#1E1E2F",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          direction: 'rtl'
        }}>
        <TodoList />
      </div>
    </ThemeProvider>
  )
}

export default App
