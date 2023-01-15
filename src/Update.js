import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';


export default function Update() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [Name, setName] = useState('');
  const [PRBench, setPRBench] = useState('');
  const [id, setId] = useState('');

  const UpdateUser = (e) => {
    e.preventDefault();
    const User = { id, Name, PRBench };
    console.log(User);

    fetch('http://localhost:8080/Gymmember/Update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(User),
    })
    .then((res) => res.text())
    .then((res) => console.log(res));
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Update gebruiker</h1>
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
        <TextField
          id="standard-basic"
          label="Naam"
          name='Username'
          variant="standard"
          fullWidth
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Bench PR"
          name='Bench PR'
          variant="standard"
          fullWidth
          value={PRBench}
          onChange={(e) => setPRBench(e.target.value)}
        />
        <Button name="Button" variant="contained" onClick={UpdateUser}>
          Save
        </Button>
      </Box>
    </Paper>
  );
}
