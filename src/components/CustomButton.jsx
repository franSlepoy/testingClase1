import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ isDirty, isValid, children, type }) => {
  return (
    <Button
    sx={{mt: '20px'}}
      type={type}
      fullWidth
      variant="contained"
      disable={!isDirty | !isValid}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
