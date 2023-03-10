import React from 'react'
import { Box,Typography,FormControl,FormHelperText,TextField,TextareaAutosize,Stack,Select,MenuItem,Button } from '@pankod/refine-mui';
import {FormProps} from 'interfaces/common'
import CustomButton from './CustomButton';


const Form = ({type,register,handleSubmit,handleImageChange,formLoading,onFinishHandler,propertyImage} : FormProps) => {
  return (
    <Box>
      <Typography>
        {type} a property
      </Typography>
    </Box>
  )
}

export default Form;