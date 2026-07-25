import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

//components
import Todo from './Todo';

export default function TodoList() {
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
            style={{ marginTop: '30px',
            direction: 'ltr'}}>
            <ToggleButton value="web">غير مكتمل</ToggleButton>
            <ToggleButton value="android">مكتمل</ToggleButton>
            <ToggleButton value="ios">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* //filter Buttons */}

          {/* All Todos */}
          <Todo />
          {/* // All Todos */}

        </CardContent>
        
      </Card>
    </Container>
  );
}
