import { Box, Typography } from '@mui/material'
import React from 'react'

const DisplayFormValues = ({isDirty,isValid,values}) => {
  return (
    <Box color="grey.600" mt="10px">
   {isDirty && isValid && (
  <>
    <Typography variant="h6">{values.username}</Typography>
    <Typography variant="h6">{values.password}</Typography>
  </>
)}
  </Box>
  )
}

export default DisplayFormValues
