import React from 'react'
import { Box,Typography,FormControl,FormHelperText,TextField,TextareaAutosize,Stack,Select,MenuItem,Button } from '@pankod/refine-mui';
import {FormProps} from 'interfaces/common'
import CustomButton from './CustomButton';


const Form = ({type,register,handleSubmit,handleImageChange,formLoading,onFinishHandler,propertyImage} : FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        {type} a Property
      </Typography>
      <Box mt={2.5} borderRadius="15px" bgcolor="#fcfcfc">
        <form style={{marginTop:'20px',width:'100%',display:'flex',flexDirection:"column",gap:"20px",padding:"20px"}} onSubmit={handleSubmit(onFinishHandler)}>
            <FormControl>
              <FormHelperText sx={{fontWeight:500, margin:'10px',fontSize:16, color:'#11142d'}}>Enter Property Name</FormHelperText>
              <TextField 
              fullWidth
              required
              id='outlined-basic'
              color='info'
              variant="outlined"
              {...register('title',{required:true})}
              />
            </FormControl>
            <FormControl>
              <FormHelperText sx={{fontWeight:500, margin:'10px',fontSize:16, color:'#11142d'}}>Enter Description</FormHelperText>
              <TextareaAutosize
              minRows={5}
              required
              placeholder='Write a desc'
              color='info'
              style={{width:'100%',background:'transparent',fontSize:'16px',borderColor:'rgba(0,0,0,0.23)',borderRadius:6,padding:10,color:'#919191', }}
              {...register('description',{required:true})}
              />
            </FormControl>
            <Stack
            direction="row" gap={4}>
                <FormControl sx={{flex:1}}>
              <FormHelperText sx={{fontWeight:500,margin:'10px 0',fontSize:16,color:'#11142D'}}>

              </FormHelperText>
                </FormControl>
            </Stack>
        </form>

      </Box>
    </Box>
  )
}

export default Form;