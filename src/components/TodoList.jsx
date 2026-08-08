import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//modal
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


//components
import Todo from './Todo';

//context
import { useToast } from '../contexts/ToastContext';
import { useState, useEffect, useMemo } from 'react';
import { useTodos } from '../contexts/todosContext.jsx';
export default function TodoList() {

  const { todos, dispatch } = useTodos()

  const { showHideToast } = useToast()
  const [titleInput, setTitleInput] = useState("")
  const [displayedTodosType, setDisplayedTodosType] = useState("all")

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [dialogTodo, setDialogTodo] = useState({})

  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  // Delete Dialoge
  function handleCloseDeleteDialog() {
    setOpenDeleteDialog(false)
  }

  function handleConfirmDelete() {
    dispatch({ type: 'deleted', payload: dialogTodo })
    setOpenDeleteDialog(false)
    showHideToast(`تم حذف "${dialogTodo.title}" بنجاح 😁`)
  }

  function showDeleteDialog(todo) {
    setDialogTodo(todo)
    setOpenDeleteDialog(true)
  }

  //Update Dialog
  function showUpdateDialog(todo) {
    setDialogTodo(todo)
    setOpenUpdateDialog(true)
  }

  function handleCloseUpdateDialog() {
    setOpenUpdateDialog(false)
  }

  function handleConfirmUpdate() {
    dispatch({ type: 'updated', payload: dialogTodo })
    setOpenUpdateDialog(false)
    showHideToast('تم تعديل المهمه 🫡')
  }

  //Filter Displayed Todos
  const completedTodos = useMemo(() => {
    return todos.filter((t) => {
      return t.isComplete
    })
  }, [todos])

  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => {
      return !t.isComplete
    })
  }, [todos])

  let todosToBeRendered = todos
  if (displayedTodosType == 'completed') {
    todosToBeRendered = completedTodos
  } else if (displayedTodosType == 'not-completed') {
    todosToBeRendered = notCompletedTodos
  }

  const todosList = todosToBeRendered.map((t) => {
    return <Todo todo={t} key={t.id} showDeleteDialog={showDeleteDialog} showUpdateDialog={showUpdateDialog} />
  })

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value)
  }
  //Filter Displayed Todos

  useEffect(() => {
    dispatch({ type: 'get' })
  }, [])

  function handleAddClick() {
    dispatch({ type: "added", payload: { newTitle: titleInput } })
    setTitleInput("")
    showHideToast('تم اضافة المهمة بنجاح 😄')
  }

  return (
    <>
      {/* Delete modal */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle sx={{ color: 'black' }} id="alert-dialog-title">
          هل أنت متأكد من حذف هذه المهمه ؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            تتبيه : لايمكنك التراجع بعد تأكيد الحذف.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} autoFocus>
            تراجع
          </Button>
          <Button onClick={handleConfirmDelete}>حذف</Button>
        </DialogActions>
      </Dialog>
      {/* Delete modal */}

      {/* Update modal */}
      <Dialog
        open={openUpdateDialog}
        onClose={handleCloseUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle sx={{ coloa: 'black' }} id="alert-dialog-title">
          تعديل المهم
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            label="عنوان المهمه"
            fullWidth
            variant="standard"
            value={dialogTodo.title}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, title: e.target.value })
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            label="تفاصيل المهمه"
            fullWidth
            variant="standard"
            value={dialogTodo.details}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, details: e.target.value })
            }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdateDialog} autoFocus>
            إغلاق
          </Button>
          <Button onClick={handleConfirmUpdate}>تعديل</Button>
        </DialogActions>
      </Dialog>
      {/* Update modal */}

      <Container maxWidth='md'>
        <Card sx={{ width: '100%', maxHeight: '80vh', overflow: 'scroll' }}>
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
                <Button sx={{ width: '100%', height: '100%' }} variant="contained"
                  disabled={titleInput == 0}
                  onClick={() => {
                    handleAddClick();
                  }}>إضافة</Button>

              </Grid>

            </Grid>
            {/* Input + Add Button */}


          </CardContent>

        </Card>
      </Container>
    </>
  );
}
