import React , {useEffect, useState} from 'react'
import{Button,Typography} from '@mui/material'
const Dtask = () => {

    var[value,setvalue]=useState()

    const react=()=>{
        setvalue("React")
    }
    const ang=()=>{
        setvalue("Angular")
    }
    const vue=()=>{
        setvalue("Vue")
    }
    useEffect(()=>{
        ang()
    },[])
  return (
    <div>
        <Typography variant='h6'>Welcome to {value} </Typography>
        <Button variant='contained' color='success' onClick={react}>React</Button>  &nbsp;
        <Button variant='contained' color='primary' onClick={ang}>Angular</Button>  &nbsp;
        <Button variant='contained' color='secondary' onClick={vue}>vue</Button>  &nbsp;
    </div>
  )
}

export default Dtask