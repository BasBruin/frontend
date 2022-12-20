import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';

export default function User() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const[Name, setName] = useState('');
  const[PRBench, setPRBench] = useState('');

  const AddUser=(e)=>{
    e.preventDefault()
    const User={Name, PRBench}
    console.log(User)

    fetch("http://localhost:8080/GymMember/add",{
      mode: 'no-cors',
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(User)

  }).then(()=>{
    console.log("New User added")
  })
  }


  return (
    <Paper elevation={3} style={paperStyle}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Voeg gebruiker toe</h1>
     <TextField id="standard-basic" label="Naam" variant="standard" fullWidth value={Name}
     onChange={(e)=>setName(e.target.value)}/>
     <TextField id="standard-basic" label="Bench PR" variant="standard" fullWidth value={PRBench}
     onChange={(e)=>setPRBench(e.target.value)}/>
     <Button variant="contained" onClick={AddUser}>Save</Button>
   </Box>
    </Paper>
    
  );
}
