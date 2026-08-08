import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TodoList from './components/TodoList'
import { TodosContext } from './contexts/todosContext';
import { ToastProvider } from './contexts/ToastContext'

// To Support rtl
import rtlPlugin from '@mui/stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import TodosProvider from './contexts/todosContext';
//OTHER
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Alexandria, sans-serif',
  },
}
);

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

let intialTodos = [
  {
    id: uuidv4(),
    title: 'قراءة كتاب',
    details: 'الانتهاء في يومين',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'قراءة كتاب',
    details: 'الانتهاء في يومين',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'قراءة كتاب',
    details: 'الانتهاء في يومين',
    isComplete: false
  },
]


function App() {
  const [todos, setTodos] = useState(intialTodos)

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <TodosProvider>
          <ToastProvider>
            <div
              style={{
                backgroundColor: "#1E1E2F",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
              }}>
              <TodoList />
            </div>
          </ToastProvider>
        </TodosProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
