import * as yup from "yup";

export const schema = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .matches(/^[A-Za-zÀ-ú ]+$/, "O nome não pode conter números ou caracteres especiais")
    .transform((value) =>
      value
        .toLowerCase()
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    ),
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
  confirmaSenha: yup
    .string()
    .required("Confirmação de senha é obrigatória")
    .oneOf([yup.ref('senha')], "As senhas não coincidem"),
});
