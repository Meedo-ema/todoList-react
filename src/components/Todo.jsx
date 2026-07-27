import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css'

function Todo() {

  return (
    <>
      <Card className='todoCard' sx={{ minWidth: 275, background: '#6A1B9A', color: 'white', marginTop: 5 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 7, sm: 8 }}>
              <Typography variant='h4' sx={{ textAlign: 'start', fontSize:{xs: '1.2rem', sm: '1.5rem', md: '1.8rem'} }} gutterBottom>
                المهمه الاولي
              </Typography>
              <Typography variant='h6' sx={{ textAlign: 'start' , fontSize:{xs: '.9rem', sm: '1rem', md: '1.1rem'} }} gutterBottom> 
    تفاصيل المهمه الاولي
    </Typography>
            </Grid>

            {/* Action Icons */}
            <Grid size={{ xs: 5, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:{ xs:1, sm:2, md: 3} }}>
              
    <IconButton className='iconButton' aria-label="delete" sx={{ width:{xs:34, sm:50 }, height:{xs: 34, sm: 50},color: '#4CAF50', background: 'white', border: 'solid 3px #4CAF50' }}>
                <CheckIcon />
              </IconButton>
              <IconButton className='iconButton' aria-label="delete" sx={{ width:{xs:34, sm:50 }, height:{xs: 34, sm: 50}, color: '#2196F3', background: 'white', border: 'solid 3px #2196F3' }}>
                <EditIcon />
              </IconButton>
              <IconButton className='iconButton' aria-label="delete" sx={{ width:{xs:34, sm:50 }, height:{xs: 34, sm: 50},color: '#F44336', background: 'white', border: 'solid 3px #F44336' }}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/* Action Icons */}

          </Grid>
        </CardContent>
      </Card>
    </>
  )
};
export default Todo

