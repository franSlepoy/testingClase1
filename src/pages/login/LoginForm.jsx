import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "./schema/login-fom-schema";
import { Box, Button, Input, Typography } from "@mui/material";
import { CustomInput } from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import DisplayFormValues from "./components/DisplayFormValues";
import { callEndpoint } from "./services/call-endpoint";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const userNameWatch = watch("username");
  const passwordWatch = watch("password");

 const onSubmit =  async data => {
    const result = await callEndpoint(data);
    console.log(result);
    reset();
  }


  return (
    <>
      <Box
      sx={{
        bgcolor: 'grey.300',
        borderRadius: '30px',
        p: '50px',
        width: '50%'
      }}
    >

      <FormProvider {...{register,errors} } >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          
             <CustomInput
             name="username"
             label="Nombre de usuario"
             required={true}
              
            />
            <CustomInput
             name="password"
             label="Contraseña"
             required={true}
            /> 
          </Box>

          <CustomButton
          isDirty={isDirty}
          isValid={isValid}
          type={"submit"}
          >
            Login
          </CustomButton>
        </form>
      </FormProvider>

      <DisplayFormValues isDirty={isDirty} isValid={isValid} values={{username: userNameWatch, password: passwordWatch}}/>
    </Box>

    </>
  );
};

export default LoginForm;
