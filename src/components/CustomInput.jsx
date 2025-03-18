import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField, Typography } from "@mui/material";

const formValidation = (errors, errorKey) => {
  return errors?.[errorKey] ? (
    <Typography color="red">{errors[errorKey].message}</Typography>
  ) : (
    ""
  );
};

export const CustomInput = ({
  name = "",
  label = "",
  type = "text",
  disable = false,
  required = false,
}) => {
  const { register, errors } = useFormContext();
  return (
    <div>
      <TextField
        required={required}
        disabled={disable}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant="outlined"
        {...register(name)}
        fullWidth
      />

      {errors && formValidation(errors, name)}
    </div>
  );
};
