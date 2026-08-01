import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

//components
import Todo from './Todo';

//context
import { TododContext } from '../assets/contexts/todoContext';
import { useState, useContext, useEffect } from 'react';

export default function TodoList() {
  const { todos, setTodos } = useContext(TododContext)
  const [titleInput, setTitleInput] = useState("")
  const [displayedTodosType, setDisplayedTodosType] = useState("all")


  //Filter Displayed Todos
  const completedTodos = todos.filter((t) => {
    return t.isComplete
  })

  const notCompletedTodos = todos.filter((t) => {
    return !t.isComplete
  })

  let todosToBeRendered = todos
  if (displayedTodosType == 'completed') {
    todosToBeRendered = completedTodos
  } else if (displayedTodosType == 'not-completed') {
    todosToBeRendered = notCompletedTodos
  }

  const todosList = todosToBeRendered.map((t) => {
    return <Todo todo={t} key={t.id} />
  })

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value)
  }
  //Filter Displayed Todos

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"))
    setTodos(storageTodos)
  }, [])

  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isComplete: false
    }
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTitleInput("")
  }

  return (
    <Container maxWidth='md'>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant='h2' gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            مهامي
          </Typography>
          <Divider />

          {/* filter Buttons */}
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={displayedTodosType}
            onChange={changeDisplayedType}
            style={{
              marginTop: '30px',
              direction: 'ltr'
            }}>
            <ToggleButton value="not-completed" >غير مكتمل</ToggleButton>
            <ToggleButton value="completed">مكتمل</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* //filter Buttons */}

          {/* All Todos */}
          {todosList}
          {/* // All Todos */}


          {/* Input + Add Button */}
          <Grid container spacing={2} sx={{ marginTop: '20px' }}>
            <Grid size={{ xs: 7, sm: 8 }}>
              <TextField id="outlined-basic" label="عنوان المهمة" variant="outlined" sx={{ width: '100%' }} value={titleInput} onChange={(e) => {
                setTitleInput(e.target.value)
              }} />
            </Grid>

            <Grid size={{ xs: 5, sm: 4 }}>
              <Button sx={{ width: '100%', height: '100%' }} variant="contained" onClick={() => {
                handleAddClick();
              }}>إضافة</Button>

            </Grid>

          </Grid>
          {/* Input + Add Button */}


        </CardContent>

      </Card>
    </Container>
  );
}
