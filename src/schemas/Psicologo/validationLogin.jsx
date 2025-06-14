import * as yup from "yup";
import { cpf } from 'cpf-cnpj-validator';

export const schema = yup.object().shape({
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .transform(value => value.replace(/\D/g, ''))
    .test('cpf-valido', 'CPF inválido', (value) => cpf.isValid(value || '')),
  senha: yup
    .string()
    .required("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/,
      "A senha deve conter letras e números"
    ),
});