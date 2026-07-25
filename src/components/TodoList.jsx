import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h2' gutterBottom sx={{ color: 'text.secondary' }}>
            مهامي
          </Typography>
          <Divider />
          {/* filter Buttons */}
          <ToggleButtonGroup
            color="primary"
            exclusive
            style={{ marginTop: '30px' }}>
            <ToggleButton value="web">غير مكتمل</ToggleButton>
            <ToggleButton value="android">مكتمل</ToggleButton>
            <ToggleButton value="ios">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* //filter Buttons */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
