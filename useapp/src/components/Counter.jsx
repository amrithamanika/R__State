import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
    var[count,setcount]=useState(0)
    const addInput=()=>{     
        setcount(count+1)
    }

    const subInput=()=>{
        setcount(count-1)
    }
  return (
    <div>
       <Typography variant='h5'>Count:{count}</Typography> 
       <Button variant='contained' color='success'onClick={addInput}>+</Button>  &nbsp;
       <Button variant='contained' color='error' onClick={subInput}>-</Button>
    </div>
  )
}

export default Counter