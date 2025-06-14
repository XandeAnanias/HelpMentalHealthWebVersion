import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido'),
  senha: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/,
      "A senha deve conter letras e números"
    ),
});
