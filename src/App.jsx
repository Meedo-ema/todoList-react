import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TodoList from './components/TodoList'

// To Support rtl
import rtlPlugin from '@mui/stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


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

function App() {

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
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

      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
