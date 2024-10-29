import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
        var[name,setname]=useState("Rahul")
        var[value,setvalue]=useState()

        const handleInput =(e)=>{
            console.log(e.target.value)
            setname(e.target.value)
        }
        
          const valueDisplay =()=>{
                
                setvalue(name)
        }
  return (
    <div>
        <Typography variant='h6'>Welcome {value} </Typography>
        <TextField variant='outlined' onChange={handleInput} label='Enter name'></TextField>
        <br /><br />
        <Button variant="contained" onClick={valueDisplay}>Submit</Button>
    </div>
  )
}

export default StateBasics