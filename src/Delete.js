import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import MenuAppbar from './components/Appbar';


export default function Delete() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [id, setId] = useState('');

  const DeleteUser = (e) => {
    e.preventDefault();


    fetch('http://localhost:8080/Gymmember/Delete/'+ id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    })
    .then((res) => res.text())
    .then((res) => console.log(res));
    window.alert("U heeft een gebruiker verwijderd");
  };

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
        <h1>Delete gebruiker</h1>
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
        <Button name="Button" variant="contained" onClick={DeleteUser}>
          Delete
        </Button>
      </Box>
    </Paper>
    </div>
    
  );
}
