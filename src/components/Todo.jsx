import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

//context
import { TododContext } from '../assets/contexts/todoContext';
import { useContext } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css'
import { useState } from 'react';

//modal
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Todo({ todo }) {
  const { todos, setTodos } = useContext(TododContext)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // Dialog Events
  function handleOpenDeleteDialog() {
    setOpenDeleteDialog(true)
  }

  function handleCloseDeleteDialog() {
    setOpenDeleteDialog(false)
  }

  function handleConfirmDelete(){
    const updatedTodos = todos.filter((t) => {
      return t.id !== todo.id
    })
    setTodos(updatedTodos)
  }
  // Dialog Events

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == todo.id) {
        t.isComplete = !t.isComplete
      }
      return t
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      {/* modal */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle sx={{color: 'black'}} id="alert-dialog-title">
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
      {/* modal */}

      {/* Todo Card */}
      <Card className='todoCard' sx={{ minWidth: 275, background: '#6A1B9A', color: 'white', marginTop: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 7, sm: 8 }}>
              <Typography variant='h4' sx={{ textAlign: 'start', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }} gutterBottom>
                {todo.title}
              </Typography>
              <Typography variant='h6' sx={{ textAlign: 'start', fontSize: { xs: '.9rem', sm: '1rem', md: '1.1rem' } }} gutterBottom>
                {todo.details}
              </Typography>
            </Grid>

            {/* Action Icons */}
            <Grid size={{ xs: 5, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 1, sm: 2, md: 3 } }}>

              <IconButton onClick={() => {
                handleCheckClick()
              }}
                className='iconButton' aria-label="delete" sx={{ width: { xs: 34, sm: 50 }, height: { xs: 34, sm: 50 }, color: todo.isComplete ? 'white' : '#4CAF50', background: todo.isComplete ? "#4CAF50" : 'white', border: todo.isComplete ? "solid 3px white" : "solid 3px #4CAF50" }}>
                <CheckIcon />
              </IconButton>

              <IconButton className='iconButton' aria-label="delete" sx={{ width: { xs: 34, sm: 50 }, height: { xs: 34, sm: 50 }, color: '#2196F3', background: 'white', border: 'solid 3px #2196F3' }}>
                <EditIcon />
              </IconButton>

              <IconButton onClick={() => {
                handleOpenDeleteDialog()
              }}
                className='iconButton' aria-label="delete" sx={{ width: { xs: 34, sm: 50 }, height: { xs: 34, sm: 50 }, color: '#F44336', background: 'white', border: 'solid 3px #F44336' }}>
                <DeleteIcon />
              </IconButton>

            </Grid>
            {/* Action Icons */}

          </Grid>
        </CardContent>
      </Card>
      {/* Todo Card */}
    </>
  )
};
export default Todo

