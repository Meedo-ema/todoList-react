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
import { useState } from 'react';
//components
import Todo from './Todo';

//OTHER
import { v4 as uuidv4 } from 'uuid';

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

export default function TodoList() {
  const [todos, setTodos] = useState(intialTodos)
  const [titleInput, setTitleInput] = useState("")
  const todosList = todos.map((t) => {
    return <Todo title={t.title} details={t.details} key={t.id} />
  })

  function handleAddClick() {
    const newTodo ={
      id: uuidv4,
      title: titleInput,
      details: "",
      isComplete: false
    }
    setTodos([...todos, newTodo])
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
            style={{
              marginTop: '30px',
              direction: 'ltr'
            }}>
            <ToggleButton value="web">غير مكتمل</ToggleButton>
            <ToggleButton value="android">مكتمل</ToggleButton>
            <ToggleButton value="ios">الكل</ToggleButton>
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
