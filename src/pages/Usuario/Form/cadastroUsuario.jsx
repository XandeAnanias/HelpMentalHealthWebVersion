import './cadastroUsuario.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schemas/Usuario/validationCadastro.jsx";
import Logo from "../../../assets/imagens/Logo.png";
import img from "../../../assets/imagens/conversa.png";
import InputGeneric from "../../../components/Inputs/inputGeneric.jsx";
import InputSenha from "../../../components/Inputs/inputSenha.jsx";
import axios from "axios";


export default function   CadastroUsuario() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const dadosFinal = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    };

    axios.post('http://localhost:8080/api-hmh/usuario/registra-usuario', dadosFinal)
      .then(response => {
        console.log('Usuário cadastrado com sucesso!', response.data);
        alert('Cadastro realizado com sucesso!');
        // Redirecionar para a página principal, dashboard, etc.
        window.location.href = '/login-usuario';
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro no cadastro!');
      });
  };

  const handleBlur = async (field) => {
    const result = await trigger(field);
    if (!result) {
      console.log(`Erro na validação do campo ${field}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Lado esquerdo */}
      <div className="hidden md:flex md:w-2/3 bg-blue-100 bg-opacity-10 items-center justify-center p-12">
        <div>
          <div className="flex justify-center">
            <img src={img} className="w-80" alt="Ilustração de conversa" />
          </div>
          <h1 className="text-4xl font-bold text-[#264466] mb-4 text-center">
            Saúde mental como você precisa
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Conecte-se com os psicólogos de uma forma inusitada e acompanhe a
            comunidade.
          </p>
        </div>
      </div>

      {/* Lado direito */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center">
            <img src={Logo} alt="Logo" className="h-16 mr-4" />
            <h2 className="text-2xl font-bold text-[#264466]">
              Help Mental Health
            </h2>
          </div>

          <p className="text-gray-600 mb-8">
            Preencha os campos com seus dados para efetuar seu cadastro.
          </p>

          {errors.geral && (
            <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p>{errors.geral}</p>
            </div>
          )}

          <form className="space-y-5"  onSubmit={handleSubmit(onSubmit)}>
            <div className='block h-104'>
              <InputGeneric
              label="Nome"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              error={errors.nome}
              register={register}
              {...register("nome")}
              onBlur={()=>handleBlur("nome")}
              />

              <InputGeneric
              label="E-mail"
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              error={errors.email}
              register={register}
              {...register("email")}
              onBlur={()=>handleBlur("email")}
              />

              <InputSenha
              label="Senha"
              id="senha"
              name="senha"
              placeholder="Crie sua senha"
              error={errors.senha}
              register={register}
              {...register("senha")}
              onBlur={() => handleBlur("senha")}
              />

      
              <InputSenha
              label="Confirmação de Senha"
              id="confirmaSenha"
              name="confirmaSenha"
              placeholder="Confirme sua senha"
              error={errors.confirmaSenha}
              register={register}
              {...register("confirmaSenha")}
              onBlur={() => handleBlur("confirmaSenha")}
              />
            </div>

      <button
        type="submit"
        className="w-full py-3 px-4 rounded-lg bg-[#264466] text-white hover:bg-[#1a2f45] transition cursor-pointer"
      >
        Cadastrar
      </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Já possui uma conta?
              <a
                href="/login-usuario"
                className="text-[#264466] hover:text-[#1a2f45] underline ml-1"
              >
                Entre agora
              </a>
            </p>
            <p className="mt-2">
              <a
                href="/"
                className="text-[#264466] hover:text-[#1a2f45] underline"
              >
                Voltar para a Página Inicial
              </a>
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Precisa de ajuda?
              <br />
              Apoio pelo email:{" "}
              <a
                href="mailto:helpmentalhealth@gmail.com"
                className="underline"
              >
                helpmentalhealth@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
