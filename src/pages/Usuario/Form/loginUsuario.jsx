import "./loginUsuario.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schemas/Usuario/validationLogin.jsx";
import InputSenha from "../../../components/Inputs/inputSenha.jsx";
import InputGeneric from "../../../components/Inputs/inputGeneric.jsx";
import Logo from "../../../assets/imagens/Logo.png";
import img from "../../../assets/imagens/conversa.png";
import axios from "axios";

function LoginUsuario() {
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
      email: data.email,
      senha: data.senha,
    };

    axios.post('http://localhost:8080/api-hmh/usuario/login-usuario', dadosFinal)
      .then(response => {
        console.log('Login realizado com sucesso!', response.data);
        alert('Login realizado com sucesso!');

        // Exemplo: armazenar token no localStorage
        localStorage.setItem('token', response.data.token);

        // Redirecionar para a página principal, dashboard, etc.
        window.location.href = '/welcome-usuario';

      })
      .catch(error => {
        console.error('Erro no login:', error);
        alert('E-mail ou senha incorretos!');
      });
  };

  const handleBlur = async (field) => {
    const result = await trigger(field);
    if (!result) {
      console.log(`Erro na validação do campo ${field}`);
    }
  };

  return (
    <div className="flex flex-1 min-h-screen">
      {/* Lado esquerdo */}
      <div className="hidden md:block md:w-2/3 bg-blue-100 bg-opacity-10">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-full">
            <div className="flex justify-center">
              <img src={img} className="w-80" alt="Ilustração de conversa" />
            </div>
            <h1 className="text-4xl font-bold text-[#264466] mb-4 text-center">
              Saúde mental como você precisa
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Conecte-se com os psicólogos de uma forma inusitada e acompanhe a comunidade.
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-start items-center">
            <img src={Logo} alt="Logo Help Mental Health" className="h-16 mr-5" />
            <h2 className="text-2xl font-bold text-[#264466]">
              Help Mental Health
            </h2>
          </div>

          <p className="font-sans text-gray-600 mb-8">
            Utilize o seu e-mail e senha cadastrados para entrar.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="block h-47">
              <InputGeneric
                label="E-mail"
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                error={errors.email}
                {...register("email")}
                onBlur={() => handleBlur("email")}
              />

              <InputSenha
                label="Senha"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                error={errors.senha}
                {...register("senha")}
                onBlur={() => handleBlur("senha")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div></div>
              <div className="text-sm">
                <a
                  href="/recuperar-senha"
                  className="font-medium text-[#264466] hover:text-[#1a2f45] underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#264466] text-white hover:bg-[#1a2f45] transition cursor-pointer"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a
                href="/cadastro-usuario"
                className="font-medium text-[#264466] hover:text-[#1a2f45] underline"
              >
                Crie agora
              </a>
              <br />
              <br />
              <a
                href="/"
                className="font-medium text-[#264466] hover:text-[#1a2f45] underline"
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
              <a href="mailto:helpmentalhealth@gmail.com" className="underline">
                helpmentalhealth@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUsuario;
