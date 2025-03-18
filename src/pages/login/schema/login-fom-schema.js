import * as Yup from "yup";

export const LoginFormSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username es requerido")
    .max(20, "Username no puede ser mayor a 20 caracteres"),
  password: Yup.string()
    .required("Password es requerido")
    .min(8, "Password debe ser mayor a 8 caracteres")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password debe ser alfanumérico, y contener máximo 12 caracteres, una mayúscula y un caracter especial"
    )
    .required(),
});
