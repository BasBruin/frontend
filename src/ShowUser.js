import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import MenuAppbar from './components/Appbar';



export default function ShowUser() {
  const [User , setUser] = useState('');
  const [id, setId] = useState('');
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  
const ShowUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/Gymmember/get/"+id)
    .then((response) => response.json())
    .then((json) => setUser(json))
    .then(console.log(User.name));
  }

return (
  <div>
  <MenuAppbar />
    <Paper elevation={3} style={paperStyle}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Laat gebruiker zien</h1>
        <input
          id="standard-basic"
          label="Id"
          type="number"
          name='Id'
          variant="standard"
          fullWidth
          value={id.value}
          onChange={(e) => setId(e.target.value)}
        />
        <Button name="Button" variant="contained" onClick={ShowUser}>
          Show
        </Button>
        
      </Box>
      Naam: {User.name} PRBench: {User.prbench}
    </Paper>
    </div>
);
}